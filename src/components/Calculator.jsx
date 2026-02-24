import React, { useState } from 'react';

const CalculatorApp = () => {
  const [activeCalculator, setActiveCalculator] = useState('gst');

  const calculators = [
    { id: 'gst', name: 'GST Calculator', icon: '🧮' },
    { id: 'income-tax', name: 'Income Tax Calculator', icon: '💰' },
    { id: 'tds', name: 'TDS Calculator', icon: '📊' },
    { id: 'emi', name: 'EMI Calculator', icon: '🏠' },
    { id: 'si', name: 'Simple Interest', icon: '📈' },
    { id: 'ci', name: 'Compound Interest', icon: '📊' },
  ];

  return (
    <div className="min-h-screen bg-gray-100 p-4">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold text-center text-blue-800 mb-8">Financial Calculators</h1>
        
        {/* Calculator Menu */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 mb-8">
          {calculators.map(calc => (
            <button
              key={calc.id}
              onClick={() => setActiveCalculator(calc.id)}
              className={`p-4 rounded-lg font-semibold text-center transition-all duration-300 transform hover:scale-105 ${
                activeCalculator === calc.id
                  ? 'bg-blue-600 text-white shadow-lg'
                  : 'bg-white text-gray-700 shadow border-2 border-gray-200 hover:border-blue-400'
              }`}
            >
              <div className="text-2xl mb-1">{calc.icon}</div>
              <div className="text-sm">{calc.name}</div>
            </button>
          ))}
        </div>

        {/* Calculator Content */}
        <div className="bg-white rounded-lg shadow-lg p-6">
          {activeCalculator === 'gst' && <GSTCalculator />}
          {activeCalculator === 'income-tax' && <IncomeTaxCalculator />}
          {activeCalculator === 'tds' && <TDSCalculator />}
          {activeCalculator === 'emi' && <EMICalculator />}
          {activeCalculator === 'si' && <SimpleInterestCalculator />}
          {activeCalculator === 'ci' && <CompoundInterestCalculator />}
        </div>
      </div>
    </div>
  );
};

// GST Calculator Component
const GSTCalculator = () => {
  const [rows, setRows] = useState([
    { id: 1, typeOfSale: 'Inter State Sale', rateOfTax: '', taxableAmount: '', totalTaxAmount: '', igst: '', cgst: '', sgst: '', rateOfCess: '', cess: '' },
    { id: 2, typeOfSale: 'Inter State Sale', rateOfTax: '', taxableAmount: '', totalTaxAmount: '', igst: '', cgst: '', sgst: '', rateOfCess: '', cess: '' },
    { id: 3, typeOfSale: 'Inter State Sale', rateOfTax: '', taxableAmount: '', totalTaxAmount: '', igst: '', cgst: '', sgst: '', rateOfCess: '', cess: '' },
    { id: 4, typeOfSale: 'Inter State Sale', rateOfTax: '', taxableAmount: '', totalTaxAmount: '', igst: '', cgst: '', sgst: '', rateOfCess: '', cess: '' },
    { id: 5, typeOfSale: 'Inter State Sale', rateOfTax: '', taxableAmount: '', totalTaxAmount: '', igst: '', cgst: '', sgst: '', rateOfCess: '', cess: '' },
    { id: 6, typeOfSale: 'Inter State Sale', rateOfTax: '', taxableAmount: '', totalTaxAmount: '', igst: '', cgst: '', sgst: '', rateOfCess: '', cess: '' },
  ]);

  const typeOptions = ['Inter State Sale', 'Intra State Sale'];
  const taxRateOptions = ['select...', '5%', '12%', '18%', '28%'];

  const handleChange = (id, field, value) => {
    const updatedRows = rows.map(row => {
      if (row.id === id) {
        const updatedRow = { ...row, [field]: value };
        
        // Calculate taxes based on input values
        if (field === 'taxableAmount' || field === 'rateOfTax') {
          const taxableAmount = parseFloat(updatedRow.taxableAmount) || 0;
          const taxRate = parseFloat(updatedRow.rateOfTax) || 0;
          
          if (updatedRow.typeOfSale === 'Inter State Sale') {
            const igstAmount = (taxableAmount * taxRate / 100).toFixed(2);
            updatedRow.igst = igstAmount;
            updatedRow.cgst = '0.00';
            updatedRow.sgst = '0.00';
            updatedRow.totalTaxAmount = igstAmount;
          } else {
            const halfTaxRate = taxRate / 2;
            const cgstAmount = (taxableAmount * halfTaxRate / 100).toFixed(2);
            const sgstAmount = cgstAmount;
            updatedRow.igst = '0.00';
            updatedRow.cgst = cgstAmount;
            updatedRow.sgst = sgstAmount;
            updatedRow.totalTaxAmount = (parseFloat(cgstAmount) + parseFloat(sgstAmount)).toFixed(2);
          }
          
          // Calculate cess if rate is provided
          const cessRate = parseFloat(updatedRow.rateOfCess) || 0;
          if (cessRate > 0) {
            updatedRow.cess = (taxableAmount * cessRate / 100).toFixed(2);
          }
        }
        
        if (field === 'rateOfCess') {
          const taxableAmount = parseFloat(updatedRow.taxableAmount) || 0;
          const cessRate = parseFloat(value) || 0;
          updatedRow.cess = (taxableAmount * cessRate / 100).toFixed(2);
        }
        
        return updatedRow;
      }
      return row;
    });
    
    setRows(updatedRows);
  };

  const calculateTotals = () => {
    return rows.reduce(
      (totals, row) => {
        return {
          totalAmount: totals.totalAmount + (parseFloat(row.taxableAmount) || 0),
          totalTax: totals.totalTax + (parseFloat(row.totalTaxAmount) || 0),
          totalIGST: totals.totalIGST + (parseFloat(row.igst) || 0),
          totalCGST: totals.totalCGST + (parseFloat(row.cgst) || 0),
          totalSGST: totals.totalSGST + (parseFloat(row.sgst) || 0),
          totalCESS: totals.totalCESS + (parseFloat(row.cess) || 0),
        };
      },
      { totalAmount: 0, totalTax: 0, totalIGST: 0, totalCGST: 0, totalSGST: 0, totalCESS: 0 }
    );
  };

  const totals = calculateTotals();

  const handleReset = () => {
    setRows(rows.map(row => ({
      ...row, 
      rateOfTax: '', 
      taxableAmount: '', 
      totalTaxAmount: '', 
      igst: '', 
      cgst: '', 
      sgst: '', 
      rateOfCess: '', 
      cess: ''
    })));
  };

  return (
    <div className="p-4">
      <div className="text-center mb-4">
        <h2 className="text-2xl font-bold text-blue-800">GST Calculator</h2>
      </div>
      
      <div className="overflow-x-auto mb-4">
        <table className="w-full table-auto border-collapse text-sm">
          <thead>
            <tr className="bg-blue-50">
              <th className="p-2 border text-xs font-medium">Type Of Sale</th>
              <th className="p-2 border text-xs font-medium">Rate OF Tax</th>
              <th className="p-2 border text-xs font-medium">Taxable Amount</th>
              <th className="p-2 border text-xs font-medium">Total Tax Amount</th>
              <th className="p-2 border text-xs font-medium">IGST</th>
              <th className="p-2 border text-xs font-medium">CGST</th>
              <th className="p-2 border text-xs font-medium">SGST</th>
              <th className="p-2 border text-xs font-medium">Rate of Cess</th>
              <th className="p-2 border text-xs font-medium">CESS</th>
            </tr>
          </thead>
          <tbody>
            {rows.map(row => (
              <tr key={row.id} className="hover:bg-gray-50">
                <td className="p-1 border">
                  <select 
                    className="w-full p-1 border rounded text-xs"
                    value={row.typeOfSale}
                    onChange={(e) => handleChange(row.id, 'typeOfSale', e.target.value)}
                  >
                    {typeOptions.map(option => (
                      <option key={option} value={option}>{option}</option>
                    ))}
                  </select>
                </td>
                <td className="p-1 border">
                  <select 
                    className="w-full p-1 border rounded text-xs"
                    value={row.rateOfTax}
                    onChange={(e) => handleChange(row.id, 'rateOfTax', e.target.value.replace('%', ''))}
                  >
                    {taxRateOptions.map(option => (
                      <option key={option} value={option}>{option}</option>
                    ))}
                  </select>
                </td>
                <td className="p-1 border">
                  <input 
                    type="number" 
                    className="w-full p-1 border rounded text-xs"
                    value={row.taxableAmount}
                    onChange={(e) => handleChange(row.id, 'taxableAmount', e.target.value)}
                  />
                </td>
                <td className="p-1 border">
                  <input 
                    type="text" 
                    className="w-full p-1 border rounded bg-gray-100 text-xs"
                    value={row.totalTaxAmount}
                    readOnly
                  />
                </td>
                <td className="p-1 border">
                  <input 
                    type="text" 
                    className="w-full p-1 border rounded bg-gray-100 text-xs"
                    value={row.igst}
                    readOnly
                  />
                </td>
                <td className="p-1 border">
                  <input 
                    type="text" 
                    className="w-full p-1 border rounded bg-gray-100 text-xs"
                    value={row.cgst}
                    readOnly
                  />
                </td>
                <td className="p-1 border">
                  <input 
                    type="text" 
                    className="w-full p-1 border rounded bg-gray-100 text-xs"
                    value={row.sgst}
                    readOnly
                  />
                </td>
                <td className="p-1 border">
                  <input 
                    type="number" 
                    className="w-full p-1 border rounded text-xs"
                    value={row.rateOfCess}
                    onChange={(e) => handleChange(row.id, 'rateOfCess', e.target.value)}
                  />
                </td>
                <td className="p-1 border">
                  <input 
                    type="text" 
                    className="w-full p-1 border rounded bg-gray-100 text-xs"
                    value={row.cess}
                    readOnly
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3 mb-4 text-sm">
        <div className="p-2 bg-blue-50 rounded">
          <div className="text-gray-600">Total Amount</div>
          <div className="font-bold text-lg text-blue-700">{totals.totalAmount.toFixed(2)}</div>
        </div>
        <div className="p-2 bg-blue-50 rounded">
          <div className="text-gray-600">Total Tax</div>
          <div className="font-bold text-lg text-blue-700">{totals.totalTax.toFixed(2)}</div>
        </div>
        <div className="p-2 bg-blue-50 rounded">
          <div className="text-gray-600">Total IGST</div>
          <div className="font-bold text-lg text-blue-700">{totals.totalIGST.toFixed(2)}</div>
        </div>
        <div className="p-2 bg-blue-50 rounded">
          <div className="text-gray-600">Total CGST</div>
          <div className="font-bold text-lg text-blue-700">{totals.totalCGST.toFixed(2)}</div>
        </div>
        <div className="p-2 bg-blue-50 rounded">
          <div className="text-gray-600">Total SGST</div>
          <div className="font-bold text-lg text-blue-700">{totals.totalSGST.toFixed(2)}</div>
        </div>
        <div className="p-2 bg-blue-50 rounded">
          <div className="text-gray-600">Total CESS</div>
          <div className="font-bold text-lg text-blue-700">{totals.totalCESS.toFixed(2)}</div>
        </div>
      </div>
      
      <div className="text-right">
        <button 
          className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded font-semibold transition"
          onClick={handleReset}
        >
          Reset
        </button>
      </div>
    </div>
  );
};

// Income Tax Calculator Component
const IncomeTaxCalculator = () => {
  const [income, setIncome] = useState('');
  const [taxDeductions, setTaxDeductions] = useState('');
  const [result, setResult] = useState(null);

  const calculateIncomeTax = () => {
    const grossIncome = parseFloat(income) || 0;
    const deductions = parseFloat(taxDeductions) || 0;
    const taxableIncome = grossIncome - deductions;
    
    let tax = 0;
    if (taxableIncome <= 250000) tax = 0;
    else if (taxableIncome <= 500000) tax = (taxableIncome - 250000) * 0.05;
    else if (taxableIncome <= 1000000) tax = 12500 + (taxableIncome - 500000) * 0.20;
    else tax = 112500 + (taxableIncome - 1000000) * 0.30;

    const cess = tax * 0.04;
    const totalTax = tax + cess;

    setResult({
      taxableIncome,
      tax,
      cess,
      totalTax,
    });
  };

  return (
    <div className="max-w-2xl mx-auto p-4">
      <h2 className="text-2xl font-bold text-blue-800 mb-6">Income Tax Calculator (FY 2025-26)</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Gross Income</label>
          <input
            type="number"
            className="w-full p-3 border-2 border-gray-300 rounded focus:border-blue-500 focus:outline-none"
            value={income}
            onChange={(e) => setIncome(e.target.value)}
            placeholder="Enter gross income"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Deductions (Section 80C, etc.)</label>
          <input
            type="number"
            className="w-full p-3 border-2 border-gray-300 rounded focus:border-blue-500 focus:outline-none"
            value={taxDeductions}
            onChange={(e) => setTaxDeductions(e.target.value)}
            placeholder="Enter deductions"
          />
        </div>
      </div>
      <button
        onClick={calculateIncomeTax}
        className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded font-semibold transition mb-6"
      >
        Calculate Tax
      </button>
      {result && (
        <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-600">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <div className="text-gray-600 text-sm">Taxable Income</div>
              <div className="text-2xl font-bold text-blue-700">₹{result.taxableIncome.toFixed(0)}</div>
            </div>
            <div>
              <div className="text-gray-600 text-sm">Income Tax</div>
              <div className="text-2xl font-bold text-blue-700">₹{result.tax.toFixed(0)}</div>
            </div>
            <div>
              <div className="text-gray-600 text-sm">Cess (4%)</div>
              <div className="text-2xl font-bold text-blue-700">₹{result.cess.toFixed(0)}</div>
            </div>
            <div>
              <div className="text-gray-600 text-sm">Total Tax</div>
              <div className="text-2xl font-bold text-green-700">₹{result.totalTax.toFixed(0)}</div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

// TDS Calculator Component
const TDSCalculator = () => {
  const [amount, setAmount] = useState('');
  const [type, setType] = useState('salary');
  const [result, setResult] = useState(null);

  const tdsRates = {
    salary: 10,
    freelance: 10,
    commission: 10,
    interest: 10,
    dividend: 10,
    contractor: 2,
  };

  const calculateTDS = () => {
    const principal = parseFloat(amount) || 0;
    const rate = tdsRates[type];
    const tds = (principal * rate) / 100;

    setResult({
      principal,
      rate,
      tds,
      netAmount: principal - tds,
    });
  };

  return (
    <div className="max-w-2xl mx-auto p-4">
      <h2 className="text-2xl font-bold text-blue-800 mb-6">TDS Calculator</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Amount</label>
          <input
            type="number"
            className="w-full p-3 border-2 border-gray-300 rounded focus:border-blue-500 focus:outline-none"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            placeholder="Enter amount"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Type of Income</label>
          <select
            className="w-full p-3 border-2 border-gray-300 rounded focus:border-blue-500 focus:outline-none"
            value={type}
            onChange={(e) => setType(e.target.value)}
          >
            <option value="salary">Salary</option>
            <option value="freelance">Freelance Income</option>
            <option value="commission">Commission</option>
            <option value="interest">Interest</option>
            <option value="dividend">Dividend</option>
            <option value="contractor">Contractor Payment</option>
          </select>
        </div>
      </div>
      <button
        onClick={calculateTDS}
        className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded font-semibold transition mb-6"
      >
        Calculate TDS
      </button>
      {result && (
        <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-600">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <div className="text-gray-600 text-sm">Gross Amount</div>
              <div className="text-2xl font-bold text-blue-700">₹{result.principal.toFixed(0)}</div>
            </div>
            <div>
              <div className="text-gray-600 text-sm">TDS Rate</div>
              <div className="text-2xl font-bold text-blue-700">{result.rate}%</div>
            </div>
            <div>
              <div className="text-gray-600 text-sm">TDS Amount</div>
              <div className="text-2xl font-bold text-red-600">₹{result.tds.toFixed(0)}</div>
            </div>
            <div>
              <div className="text-gray-600 text-sm">Net Amount</div>
              <div className="text-2xl font-bold text-green-700">₹{result.netAmount.toFixed(0)}</div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

// EMI Calculator Component
const EMICalculator = () => {
  const [principal, setPrincipal] = useState('');
  const [rate, setRate] = useState('');
  const [months, setMonths] = useState('');
  const [result, setResult] = useState(null);

  const calculateEMI = () => {
    const P = parseFloat(principal) || 0;
    const R = parseFloat(rate) / 12 / 100;
    const N = parseFloat(months) || 0;

    const emi = (P * R * Math.pow(1 + R, N)) / (Math.pow(1 + R, N) - 1);
    const totalPayment = emi * N;
    const totalInterest = totalPayment - P;

    setResult({
      emi,
      totalPayment,
      totalInterest,
    });
  };

  return (
    <div className="max-w-2xl mx-auto p-4">
      <h2 className="text-2xl font-bold text-blue-800 mb-6">EMI Calculator</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Loan Amount</label>
          <input
            type="number"
            className="w-full p-3 border-2 border-gray-300 rounded focus:border-blue-500 focus:outline-none"
            value={principal}
            onChange={(e) => setPrincipal(e.target.value)}
            placeholder="Enter loan amount"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Annual Interest Rate (%)</label>
          <input
            type="number"
            className="w-full p-3 border-2 border-gray-300 rounded focus:border-blue-500 focus:outline-none"
            value={rate}
            onChange={(e) => setRate(e.target.value)}
            placeholder="Enter interest rate"
            step="0.01"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Loan Term (Months)</label>
          <input
            type="number"
            className="w-full p-3 border-2 border-gray-300 rounded focus:border-blue-500 focus:outline-none"
            value={months}
            onChange={(e) => setMonths(e.target.value)}
            placeholder="Enter number of months"
          />
        </div>
      </div>
      <button
        onClick={calculateEMI}
        className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded font-semibold transition mb-6"
      >
        Calculate EMI
      </button>
      {result && (
        <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-600">
          <div className="grid grid-cols-3 gap-4">
            <div>
              <div className="text-gray-600 text-sm">Monthly EMI</div>
              <div className="text-2xl font-bold text-blue-700">₹{result.emi.toFixed(0)}</div>
            </div>
            <div>
              <div className="text-gray-600 text-sm">Total Interest</div>
              <div className="text-2xl font-bold text-red-600">₹{result.totalInterest.toFixed(0)}</div>
            </div>
            <div>
              <div className="text-gray-600 text-sm">Total Amount</div>
              <div className="text-2xl font-bold text-green-700">₹{result.totalPayment.toFixed(0)}</div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

// Simple Interest Calculator Component
const SimpleInterestCalculator = () => {
  const [principal, setPrincipal] = useState('');
  const [rate, setRate] = useState('');
  const [years, setYears] = useState('');
  const [result, setResult] = useState(null);

  const calculateSI = () => {
    const P = parseFloat(principal) || 0;
    const R = parseFloat(rate) || 0;
    const T = parseFloat(years) || 0;

    const si = (P * R * T) / 100;
    const amount = P + si;

    setResult({
      si,
      amount,
    });
  };

  return (
    <div className="max-w-2xl mx-auto p-4">
      <h2 className="text-2xl font-bold text-blue-800 mb-6">Simple Interest Calculator</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Principal Amount</label>
          <input
            type="number"
            className="w-full p-3 border-2 border-gray-300 rounded focus:border-blue-500 focus:outline-none"
            value={principal}
            onChange={(e) => setPrincipal(e.target.value)}
            placeholder="Enter principal"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Annual Rate (%)</label>
          <input
            type="number"
            className="w-full p-3 border-2 border-gray-300 rounded focus:border-blue-500 focus:outline-none"
            value={rate}
            onChange={(e) => setRate(e.target.value)}
            placeholder="Enter rate"
            step="0.01"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Time Period (Years)</label>
          <input
            type="number"
            className="w-full p-3 border-2 border-gray-300 rounded focus:border-blue-500 focus:outline-none"
            value={years}
            onChange={(e) => setYears(e.target.value)}
            placeholder="Enter years"
            step="0.1"
          />
        </div>
      </div>
      <button
        onClick={calculateSI}
        className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded font-semibold transition mb-6"
      >
        Calculate
      </button>
      {result && (
        <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-600">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <div className="text-gray-600 text-sm">Simple Interest</div>
              <div className="text-2xl font-bold text-blue-700">₹{result.si.toFixed(2)}</div>
            </div>
            <div>
              <div className="text-gray-600 text-sm">Total Amount</div>
              <div className="text-2xl font-bold text-green-700">₹{result.amount.toFixed(2)}</div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

// Compound Interest Calculator Component
const CompoundInterestCalculator = () => {
  const [principal, setPrincipal] = useState('');
  const [rate, setRate] = useState('');
  const [years, setYears] = useState('');
  const [frequency, setFrequency] = useState('4');
  const [result, setResult] = useState(null);

  const calculateCI = () => {
    const P = parseFloat(principal) || 0;
    const R = parseFloat(rate) || 0;
    const T = parseFloat(years) || 0;
    const n = parseFloat(frequency) || 1;

    const amount = P * Math.pow(1 + (R / 100) / n, n * T);
    const ci = amount - P;

    setResult({
      ci,
      amount,
    });
  };

  return (
    <div className="max-w-2xl mx-auto p-4">
      <h2 className="text-2xl font-bold text-blue-800 mb-6">Compound Interest Calculator</h2>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Principal Amount</label>
          <input
            type="number"
            className="w-full p-3 border-2 border-gray-300 rounded focus:border-blue-500 focus:outline-none"
            value={principal}
            onChange={(e) => setPrincipal(e.target.value)}
            placeholder="Enter principal"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Annual Rate (%)</label>
          <input
            type="number"
            className="w-full p-3 border-2 border-gray-300 rounded focus:border-blue-500 focus:outline-none"
            value={rate}
            onChange={(e) => setRate(e.target.value)}
            placeholder="Enter rate"
            step="0.01"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Time Period (Years)</label>
          <input
            type="number"
            className="w-full p-3 border-2 border-gray-300 rounded focus:border-blue-500 focus:outline-none"
            value={years}
            onChange={(e) => setYears(e.target.value)}
            placeholder="Enter years"
            step="0.1"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Compounded</label>
          <select
            className="w-full p-3 border-2 border-gray-300 rounded focus:border-blue-500 focus:outline-none"
            value={frequency}
            onChange={(e) => setFrequency(e.target.value)}
          >
            <option value="1">Annually</option>
            <option value="2">Semi-Annually</option>
            <option value="4">Quarterly</option>
            <option value="12">Monthly</option>
          </select>
        </div>
      </div>
      <button
        onClick={calculateCI}
        className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded font-semibold transition mb-6"
      >
        Calculate
      </button>
      {result && (
        <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-600">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <div className="text-gray-600 text-sm">Compound Interest</div>
              <div className="text-2xl font-bold text-blue-700">₹{result.ci.toFixed(2)}</div>
            </div>
            <div>
              <div className="text-gray-600 text-sm">Total Amount</div>
              <div className="text-2xl font-bold text-green-700">₹{result.amount.toFixed(2)}</div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CalculatorApp;