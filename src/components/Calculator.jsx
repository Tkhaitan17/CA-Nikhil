import React, { useState } from 'react';

const CalculatorApp = () => {
  const [activeCalculator, setActiveCalculator] = useState('gst');

  const calculators = [
    { id: 'gst', name: 'GST Calculator', icon: '🧮', color: 'from-blue-500 to-blue-600' },
    { id: 'income-tax', name: 'Income Tax', icon: '💰', color: 'from-green-500 to-green-600' },
    { id: 'tds', name: 'TDS Calculator', icon: '📊', color: 'from-purple-500 to-purple-600' },
    { id: 'emi', name: 'EMI Calculator', icon: '🏠', color: 'from-orange-500 to-orange-600' },
    { id: 'si', name: 'Simple Interest', icon: '📈', color: 'from-red-500 to-red-600' },
    { id: 'ci', name: 'Compound Interest', icon: '💎', color: 'from-indigo-500 to-indigo-600' },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-brand-blue-900 via-brand-blue-800 to-brand-blue-900 py-12 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-600 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse-soft"></div>
      <div className="absolute bottom-20 left-0 w-72 h-72 bg-brand-blue-700 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse-soft" style={{ animationDelay: '2s' }}></div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in-down">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">Financial Calculators</h1>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-400 to-brand-blue-300 mx-auto mb-6"></div>
          <p className="text-lg text-brand-blue-100 max-w-3xl mx-auto">
            Use our comprehensive financial calculators to plan your finances, calculate taxes, and make informed decisions.
          </p>
        </div>
        
        {/* Calculator Menu */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-8">
          {calculators.map((calc, idx) => (
            <button
              key={calc.id}
              onClick={() => setActiveCalculator(calc.id)}
              className={`p-4 rounded-xl font-semibold text-center transition-all duration-300 transform hover:scale-110 animate-fade-in-up ${
                activeCalculator === calc.id
                  ? `bg-gradient-to-br ${calc.color} text-white shadow-2xl scale-105`
                  : 'bg-white/10 backdrop-blur-md text-white border border-white/30 hover:border-blue-400/50 hover:bg-white/20'
              }`}
              style={{ animationDelay: `${idx * 0.1}s` }}
            >
              <div className="text-3xl mb-2">{calc.icon}</div>
              <div className="text-sm font-medium">{calc.name}</div>
            </button>
          ))}
        </div>

        {/* Calculator Content */}
        <div className="bg-white/10 backdrop-blur-md rounded-2xl shadow-2xl p-8 border border-white/30 animate-fade-in-up">
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
      <div className="text-center mb-6">
        <h2 className="text-2xl font-bold text-white mb-2">GST Calculator</h2>
        <p className="text-brand-blue-200">Calculate IGST, CGST, SGST and CESS with ease</p>
      </div>
      
      <div className="overflow-x-auto mb-6">
        <table className="w-full table-auto border-collapse text-sm">
          <thead>
            <tr className="bg-gradient-to-r from-blue-500/30 to-blue-600/30">
              <th className="p-3 border border-white/20 text-white text-xs font-semibold">Type Of Sale</th>
              <th className="p-3 border border-white/20 text-white text-xs font-semibold">Rate OF Tax</th>
              <th className="p-3 border border-white/20 text-white text-xs font-semibold">Taxable Amount</th>
              <th className="p-3 border border-white/20 text-white text-xs font-semibold">Total Tax</th>
              <th className="p-3 border border-white/20 text-white text-xs font-semibold">IGST</th>
              <th className="p-3 border border-white/20 text-white text-xs font-semibold">CGST</th>
              <th className="p-3 border border-white/20 text-white text-xs font-semibold">SGST</th>
              <th className="p-3 border border-white/20 text-white text-xs font-semibold">Cess %</th>
              <th className="p-3 border border-white/20 text-white text-xs font-semibold">CESS</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((row, idx) => (
              <tr key={row.id} className="hover:bg-white/5 transition-colors duration-200">
                <td className="p-2 border border-white/20">
                  <select 
                    className="w-full p-2 border border-white/20 rounded bg-white/10 text-white text-xs focus:outline-none focus:border-blue-400"
                    value={row.typeOfSale}
                    onChange={(e) => handleChange(row.id, 'typeOfSale', e.target.value)}
                  >
                    {typeOptions.map(option => (
                      <option key={option} value={option}>{option}</option>
                    ))}
                  </select>
                </td>
                <td className="p-2 border border-white/20">
                  <select 
                    className="w-full p-2 border border-white/20 rounded bg-white/10 text-white text-xs focus:outline-none focus:border-blue-400"
                    value={row.rateOfTax}
                    onChange={(e) => handleChange(row.id, 'rateOfTax', e.target.value.replace('%', ''))}
                  >
                    {taxRateOptions.map(option => (
                      <option key={option} value={option}>{option}</option>
                    ))}
                  </select>
                </td>
                <td className="p-2 border border-white/20">
                  <input 
                    type="number" 
                    className="w-full p-2 border border-white/20 rounded bg-white/10 text-white text-xs focus:outline-none focus:border-blue-400"
                    value={row.taxableAmount}
                    onChange={(e) => handleChange(row.id, 'taxableAmount', e.target.value)}
                  />
                </td>
                <td className="p-2 border border-white/20">
                  <input 
                    type="text" 
                    className="w-full p-2 border border-white/20 rounded bg-white/20 text-white text-xs"
                    value={row.totalTaxAmount}
                    readOnly
                  />
                </td>
                <td className="p-2 border border-white/20">
                  <input 
                    type="text" 
                    className="w-full p-2 border border-white/20 rounded bg-white/20 text-white text-xs"
                    value={row.igst}
                    readOnly
                  />
                </td>
                <td className="p-2 border border-white/20">
                  <input 
                    type="text" 
                    className="w-full p-2 border border-white/20 rounded bg-white/20 text-white text-xs"
                    value={row.cgst}
                    readOnly
                  />
                </td>
                <td className="p-2 border border-white/20">
                  <input 
                    type="text" 
                    className="w-full p-2 border border-white/20 rounded bg-white/20 text-white text-xs"
                    value={row.sgst}
                    readOnly
                  />
                </td>
                <td className="p-2 border border-white/20">
                  <input 
                    type="number" 
                    className="w-full p-2 border border-white/20 rounded bg-white/10 text-white text-xs focus:outline-none focus:border-blue-400"
                    value={row.rateOfCess}
                    onChange={(e) => handleChange(row.id, 'rateOfCess', e.target.value)}
                  />
                </td>
                <td className="p-2 border border-white/20">
                  <input 
                    type="text" 
                    className="w-full p-2 border border-white/20 rounded bg-white/20 text-white text-xs"
                    value={row.cess}
                    readOnly
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3 mb-6">
        <div className="p-3 bg-gradient-to-br from-blue-500/30 to-blue-600/30 rounded-lg border border-blue-400/50 hover:border-blue-300 transition-all duration-300">
          <div className="text-white/70 text-xs font-medium">Total Amount</div>
          <div className="font-bold text-lg text-blue-300">₹{totals.totalAmount.toFixed(2)}</div>
        </div>
        <div className="p-3 bg-gradient-to-br from-green-500/30 to-green-600/30 rounded-lg border border-green-400/50 hover:border-green-300 transition-all duration-300">
          <div className="text-white/70 text-xs font-medium">Total Tax</div>
          <div className="font-bold text-lg text-green-300">₹{totals.totalTax.toFixed(2)}</div>
        </div>
        <div className="p-3 bg-gradient-to-br from-purple-500/30 to-purple-600/30 rounded-lg border border-purple-400/50 hover:border-purple-300 transition-all duration-300">
          <div className="text-white/70 text-xs font-medium">Total IGST</div>
          <div className="font-bold text-lg text-purple-300">₹{totals.totalIGST.toFixed(2)}</div>
        </div>
        <div className="p-3 bg-gradient-to-br from-red-500/30 to-red-600/30 rounded-lg border border-red-400/50 hover:border-red-300 transition-all duration-300">
          <div className="text-white/70 text-xs font-medium">Total CGST</div>
          <div className="font-bold text-lg text-red-300">₹{totals.totalCGST.toFixed(2)}</div>
        </div>
        <div className="p-3 bg-gradient-to-br from-yellow-500/30 to-yellow-600/30 rounded-lg border border-yellow-400/50 hover:border-yellow-300 transition-all duration-300">
          <div className="text-white/70 text-xs font-medium">Total SGST</div>
          <div className="font-bold text-lg text-yellow-300">₹{totals.totalSGST.toFixed(2)}</div>
        </div>
        <div className="p-3 bg-gradient-to-br from-orange-500/30 to-orange-600/30 rounded-lg border border-orange-400/50 hover:border-orange-300 transition-all duration-300">
          <div className="text-white/70 text-xs font-medium">Total CESS</div>
          <div className="font-bold text-lg text-orange-300">₹{totals.totalCESS.toFixed(2)}</div>
        </div>
      </div>
      
      <div className="text-right">
        <button 
          className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white px-8 py-2 rounded-lg font-semibold transition-all duration-300 hover:scale-105"
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
    <div className="max-w-4xl mx-auto p-6">
      <h2 className="text-2xl font-bold text-white mb-2">Income Tax Calculator</h2>
      <p className="text-brand-blue-200 mb-8">FY 2025-26 • New Regime Tax Slabs</p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        <div>
          <label className="block text-white font-medium mb-3">Gross Income (₹)</label>
          <input
            type="number"
            className="w-full p-3 border-2 border-white/30 rounded-lg bg-white/10 text-white placeholder-white/50 focus:outline-none focus:border-blue-400 transition-all duration-300"
            value={income}
            onChange={(e) => setIncome(e.target.value)}
            placeholder="Enter gross income"
          />
        </div>
        <div>
          <label className="block text-white font-medium mb-3">Deductions - Section 80C (₹)</label>
          <input
            type="number"
            className="w-full p-3 border-2 border-white/30 rounded-lg bg-white/10 text-white placeholder-white/50 focus:outline-none focus:border-blue-400 transition-all duration-300"
            value={taxDeductions}
            onChange={(e) => setTaxDeductions(e.target.value)}
            placeholder="Enter deductions"
          />
        </div>
      </div>
      
      <button
        onClick={calculateIncomeTax}
        className="w-full bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white py-3 rounded-lg font-semibold transition-all duration-300 hover:scale-105 mb-8"
      >
        Calculate Income Tax
      </button>
      
      {result && (
        <div className="bg-gradient-to-br from-green-500/20 to-green-600/20 p-6 rounded-xl border border-green-400/50">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="bg-white/5 p-4 rounded-lg">
              <div className="text-white/70 text-sm font-medium mb-2">Taxable Income</div>
              <div className="text-2xl font-bold text-green-300">₹{result.taxableIncome.toFixed(0)}</div>
            </div>
            <div className="bg-white/5 p-4 rounded-lg">
              <div className="text-white/70 text-sm font-medium mb-2">Income Tax</div>
              <div className="text-2xl font-bold text-yellow-300">₹{result.tax.toFixed(0)}</div>
            </div>
            <div className="bg-white/5 p-4 rounded-lg">
              <div className="text-white/70 text-sm font-medium mb-2">Cess (4%)</div>
              <div className="text-2xl font-bold text-orange-300">₹{result.cess.toFixed(0)}</div>
            </div>
            <div className="bg-white/5 p-4 rounded-lg border border-green-400/50">
              <div className="text-white/70 text-sm font-medium mb-2">Total Tax Liability</div>
              <div className="text-2xl font-bold text-green-300">₹{result.totalTax.toFixed(0)}</div>
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
    <div className="max-w-4xl mx-auto p-6">
      <h2 className="text-2xl font-bold text-white mb-2">TDS (Tax Deducted at Source) Calculator</h2>
      <p className="text-brand-blue-200 mb-8">Calculate TDS on various types of income</p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        <div>
          <label className="block text-white font-medium mb-3">Amount (₹)</label>
          <input
            type="number"
            className="w-full p-3 border-2 border-white/30 rounded-lg bg-white/10 text-white placeholder-white/50 focus:outline-none focus:border-purple-400 transition-all duration-300"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            placeholder="Enter amount"
          />
        </div>
        <div>
          <label className="block text-white font-medium mb-3">Type of Income</label>
          <select
            className="w-full p-3 border-2 border-white/30 rounded-lg bg-white/10 text-white focus:outline-none focus:border-purple-400 transition-all duration-300"
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
        className="w-full bg-gradient-to-r from-purple-500 to-purple-600 hover:from-purple-600 hover:to-purple-700 text-white py-3 rounded-lg font-semibold transition-all duration-300 hover:scale-105 mb-8"
      >
        Calculate TDS
      </button>
      
      {result && (
        <div className="bg-gradient-to-br from-purple-500/20 to-purple-600/20 p-6 rounded-xl border border-purple-400/50">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="bg-white/5 p-4 rounded-lg">
              <div className="text-white/70 text-sm font-medium mb-2">Gross Amount</div>
              <div className="text-2xl font-bold text-purple-300">₹{result.principal.toFixed(0)}</div>
            </div>
            <div className="bg-white/5 p-4 rounded-lg">
              <div className="text-white/70 text-sm font-medium mb-2">TDS Rate</div>
              <div className="text-2xl font-bold text-purple-300">{result.rate}%</div>
            </div>
            <div className="bg-white/5 p-4 rounded-lg">
              <div className="text-white/70 text-sm font-medium mb-2">TDS Amount</div>
              <div className="text-2xl font-bold text-red-300">₹{result.tds.toFixed(0)}</div>
            </div>
            <div className="bg-white/5 p-4 rounded-lg border border-purple-400/50">
              <div className="text-white/70 text-sm font-medium mb-2">Net Amount</div>
              <div className="text-2xl font-bold text-green-300">₹{result.netAmount.toFixed(0)}</div>
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
    <div className="max-w-4xl mx-auto p-6">
      <h2 className="text-2xl font-bold text-white mb-2">EMI (Equated Monthly Installment) Calculator</h2>
      <p className="text-brand-blue-200 mb-8">Calculate loan EMI and total interest payable</p>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div>
          <label className="block text-white font-medium mb-3">Loan Amount (₹)</label>
          <input
            type="number"
            className="w-full p-3 border-2 border-white/30 rounded-lg bg-white/10 text-white placeholder-white/50 focus:outline-none focus:border-orange-400 transition-all duration-300"
            value={principal}
            onChange={(e) => setPrincipal(e.target.value)}
            placeholder="Enter loan amount"
          />
        </div>
        <div>
          <label className="block text-white font-medium mb-3">Annual Interest Rate (%)</label>
          <input
            type="number"
            className="w-full p-3 border-2 border-white/30 rounded-lg bg-white/10 text-white placeholder-white/50 focus:outline-none focus:border-orange-400 transition-all duration-300"
            value={rate}
            onChange={(e) => setRate(e.target.value)}
            placeholder="Enter interest rate"
            step="0.01"
          />
        </div>
        <div>
          <label className="block text-white font-medium mb-3">Loan Term (Months)</label>
          <input
            type="number"
            className="w-full p-3 border-2 border-white/30 rounded-lg bg-white/10 text-white placeholder-white/50 focus:outline-none focus:border-orange-400 transition-all duration-300"
            value={months}
            onChange={(e) => setMonths(e.target.value)}
            placeholder="Enter number of months"
          />
        </div>
      </div>
      
      <button
        onClick={calculateEMI}
        className="w-full bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white py-3 rounded-lg font-semibold transition-all duration-300 hover:scale-105 mb-8"
      >
        Calculate EMI
      </button>
      
      {result && (
        <div className="bg-gradient-to-br from-orange-500/20 to-orange-600/20 p-6 rounded-xl border border-orange-400/50">
          <div className="grid grid-cols-3 gap-4">
            <div className="bg-white/5 p-4 rounded-lg">
              <div className="text-white/70 text-sm font-medium mb-2">Monthly EMI</div>
              <div className="text-2xl font-bold text-orange-300">₹{result.emi.toFixed(0)}</div>
            </div>
            <div className="bg-white/5 p-4 rounded-lg">
              <div className="text-white/70 text-sm font-medium mb-2">Total Interest</div>
              <div className="text-2xl font-bold text-red-300">₹{result.totalInterest.toFixed(0)}</div>
            </div>
            <div className="bg-white/5 p-4 rounded-lg border border-orange-400/50">
              <div className="text-white/70 text-sm font-medium mb-2">Total Amount</div>
              <div className="text-2xl font-bold text-green-300">₹{result.totalPayment.toFixed(0)}</div>
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
    <div className="max-w-4xl mx-auto p-6">
      <h2 className="text-2xl font-bold text-white mb-2">Simple Interest Calculator</h2>
      <p className="text-brand-blue-200 mb-8">Calculate simple interest on your investments or loans</p>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div>
          <label className="block text-white font-medium mb-3">Principal Amount (₹)</label>
          <input
            type="number"
            className="w-full p-3 border-2 border-white/30 rounded-lg bg-white/10 text-white placeholder-white/50 focus:outline-none focus:border-red-400 transition-all duration-300"
            value={principal}
            onChange={(e) => setPrincipal(e.target.value)}
            placeholder="Enter principal"
          />
        </div>
        <div>
          <label className="block text-white font-medium mb-3">Annual Rate (%)</label>
          <input
            type="number"
            className="w-full p-3 border-2 border-white/30 rounded-lg bg-white/10 text-white placeholder-white/50 focus:outline-none focus:border-red-400 transition-all duration-300"
            value={rate}
            onChange={(e) => setRate(e.target.value)}
            placeholder="Enter rate"
            step="0.01"
          />
        </div>
        <div>
          <label className="block text-white font-medium mb-3">Time Period (Years)</label>
          <input
            type="number"
            className="w-full p-3 border-2 border-white/30 rounded-lg bg-white/10 text-white placeholder-white/50 focus:outline-none focus:border-red-400 transition-all duration-300"
            value={years}
            onChange={(e) => setYears(e.target.value)}
            placeholder="Enter years"
            step="0.1"
          />
        </div>
      </div>
      
      <button
        onClick={calculateSI}
        className="w-full bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 text-white py-3 rounded-lg font-semibold transition-all duration-300 hover:scale-105 mb-8"
      >
        Calculate Simple Interest
      </button>
      
      {result && (
        <div className="bg-gradient-to-br from-red-500/20 to-red-600/20 p-6 rounded-xl border border-red-400/50">
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-white/5 p-4 rounded-lg">
              <div className="text-white/70 text-sm font-medium mb-2">Simple Interest</div>
              <div className="text-2xl font-bold text-red-300">₹{result.si.toFixed(2)}</div>
            </div>
            <div className="bg-white/5 p-4 rounded-lg border border-red-400/50">
              <div className="text-white/70 text-sm font-medium mb-2">Total Amount</div>
              <div className="text-2xl font-bold text-green-300">₹{result.amount.toFixed(2)}</div>
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
    <div className="max-w-4xl mx-auto p-6">
      <h2 className="text-2xl font-bold text-white mb-2">Compound Interest Calculator</h2>
      <p className="text-brand-blue-200 mb-8">Calculate compound interest with various compounding frequencies</p>
      
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
        <div>
          <label className="block text-white font-medium mb-3">Principal Amount (₹)</label>
          <input
            type="number"
            className="w-full p-3 border-2 border-white/30 rounded-lg bg-white/10 text-white placeholder-white/50 focus:outline-none focus:border-indigo-400 transition-all duration-300"
            value={principal}
            onChange={(e) => setPrincipal(e.target.value)}
            placeholder="Enter principal"
          />
        </div>
        <div>
          <label className="block text-white font-medium mb-3">Annual Rate (%)</label>
          <input
            type="number"
            className="w-full p-3 border-2 border-white/30 rounded-lg bg-white/10 text-white placeholder-white/50 focus:outline-none focus:border-indigo-400 transition-all duration-300"
            value={rate}
            onChange={(e) => setRate(e.target.value)}
            placeholder="Enter rate"
            step="0.01"
          />
        </div>
        <div>
          <label className="block text-white font-medium mb-3">Time Period (Years)</label>
          <input
            type="number"
            className="w-full p-3 border-2 border-white/30 rounded-lg bg-white/10 text-white placeholder-white/50 focus:outline-none focus:border-indigo-400 transition-all duration-300"
            value={years}
            onChange={(e) => setYears(e.target.value)}
            placeholder="Enter years"
            step="0.1"
          />
        </div>
        <div>
          <label className="block text-white font-medium mb-3">Compounding Frequency</label>
          <select
            className="w-full p-3 border-2 border-white/30 rounded-lg bg-white/10 text-white focus:outline-none focus:border-indigo-400 transition-all duration-300"
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
        className="w-full bg-gradient-to-r from-indigo-500 to-indigo-600 hover:from-indigo-600 hover:to-indigo-700 text-white py-3 rounded-lg font-semibold transition-all duration-300 hover:scale-105 mb-8"
      >
        Calculate Compound Interest
      </button>
      
      {result && (
        <div className="bg-gradient-to-br from-indigo-500/20 to-indigo-600/20 p-6 rounded-xl border border-indigo-400/50">
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-white/5 p-4 rounded-lg">
              <div className="text-white/70 text-sm font-medium mb-2">Compound Interest</div>
              <div className="text-2xl font-bold text-indigo-300">₹{result.ci.toFixed(2)}</div>
            </div>
            <div className="bg-white/5 p-4 rounded-lg border border-indigo-400/50">
              <div className="text-white/70 text-sm font-medium mb-2">Total Amount</div>
              <div className="text-2xl font-bold text-green-300">₹{result.amount.toFixed(2)}</div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CalculatorApp;