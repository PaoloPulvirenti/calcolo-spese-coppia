import { useState } from 'react';
import './App.css';

export default function App() {
  return <ExpenseCalculator />;
}

const styles = `
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  
  body {
    margin: 0;
    padding: 0;
  }
  
  .app-container {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Arial, sans-serif;
    background: linear-gradient(135deg, #fce7f3 0%, #e9d5ff 100%);
    min-height: 100vh;
    padding: 20px;
  }
  
  .container {
    max-width: 900px;
    margin: 0 auto;
    background: white;
    border-radius: 20px;
    box-shadow: 0 20px 60px rgba(0,0,0,0.15);
    padding: 40px;
  }
  
  .header {
    text-align: center;
    margin-bottom: 40px;
  }
  
  .header h1 {
    font-size: 2.5em;
    color: #1f2937;
    margin-bottom: 10px;
  }
  
  .header p {
    color: #6b7280;
    font-size: 1.1em;
  }
  
  .salary-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 20px;
    margin-bottom: 40px;
  }
  
  .salary-box {
    padding: 25px;
    border-radius: 15px;
  }
  
  .salary-box.blue {
    background: #dbeafe;
  }
  
  .salary-box.pink {
    background: #fce7f3;
  }
  
  .salary-box label {
    display: block;
    font-weight: 600;
    margin-bottom: 10px;
    font-size: 0.95em;
  }
  
  .salary-box.blue label {
    color: #1e3a8a;
  }
  
  .salary-box.pink label {
    color: #831843;
  }
  
  .input-wrapper {
    position: relative;
  }
  
  .input-wrapper input {
    width: 100%;
    padding: 12px 12px 12px 40px;
    border: 2px solid #e5e7eb;
    border-radius: 10px;
    font-size: 1.1em;
    transition: border-color 0.3s;
  }
  
  .input-wrapper input:focus {
    outline: none;
    border-color: #8b5cf6;
  }
  
  .euro-icon {
    position: absolute;
    left: 12px;
    top: 50%;
    transform: translateY(-50%);
    color: #6b7280;
    font-weight: 600;
  }
  
  .expenses-section {
    margin-bottom: 40px;
  }
  
  .expenses-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 20px;
  }
  
  .expenses-header h2 {
    font-size: 1.5em;
    color: #1f2937;
  }
  
  .add-btn {
    background: #10b981;
    color: white;
    border: none;
    padding: 12px 20px;
    border-radius: 10px;
    font-size: 1em;
    font-weight: 600;
    cursor: pointer;
    transition: background 0.3s;
  }
  
  .add-btn:hover {
    background: #059669;
  }
  
  .expense-item {
    display: flex;
    gap: 15px;
    align-items: center;
    background: #f9fafb;
    padding: 15px;
    border-radius: 10px;
    margin-bottom: 15px;
  }
  
  .expense-item input[type="text"] {
    flex: 1;
    padding: 10px;
    border: 2px solid #e5e7eb;
    border-radius: 8px;
    font-size: 1em;
  }
  
  .expense-item .amount-input {
    width: 150px;
    padding: 10px 10px 10px 35px;
    border: 2px solid #e5e7eb;
    border-radius: 8px;
    font-size: 1em;
  }
  
  .expense-item input:focus {
    outline: none;
    border-color: #8b5cf6;
  }
  
  .delete-btn {
    background: #ef4444;
    color: white;
    border: none;
    padding: 10px 15px;
    border-radius: 8px;
    cursor: pointer;
    font-size: 1.2em;
    transition: background 0.3s;
  }
  
  .delete-btn:hover {
    background: #dc2626;
  }
  
  .results {
    background: linear-gradient(135deg, #e9d5ff 0%, #fce7f3 100%);
    border-radius: 15px;
    padding: 30px;
  }
  
  .results h2 {
    text-align: center;
    font-size: 1.8em;
    color: #1f2937;
    margin-bottom: 30px;
  }
  
  .results-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 20px;
    margin-bottom: 20px;
  }
  
  .result-box {
    background: white;
    padding: 25px;
    border-radius: 12px;
    box-shadow: 0 4px 12px rgba(0,0,0,0.1);
  }
  
  .result-box .label {
    font-size: 0.9em;
    color: #6b7280;
    margin-bottom: 5px;
  }
  
  .result-box .amount {
    font-size: 2em;
    font-weight: 700;
    margin-bottom: 5px;
  }
  
  .result-box.blue .amount {
    color: #2563eb;
  }
  
  .result-box.pink .amount {
    color: #ec4899;
  }
  
  .result-box .percentage {
    font-size: 0.9em;
    color: #6b7280;
  }
  
  .total-box {
    background: white;
    padding: 20px;
    border-radius: 12px;
    text-align: center;
  }
  
  .total-box .label {
    font-size: 0.9em;
    color: #6b7280;
    margin-bottom: 5px;
  }
  
  .total-box .amount {
    font-size: 1.8em;
    font-weight: 700;
    color: #8b5cf6;
  }
  
  @media (max-width: 768px) {
    .container {
      padding: 20px;
    }
    
    .salary-grid, .results-grid {
      grid-template-columns: 1fr;
    }
    
    .header h1 {
      font-size: 1.8em;
    }
    
    .expense-item {
      flex-wrap: wrap;
    }
    
    .expense-item .amount-input {
      width: 100%;
    }
  }
`;

export function ExpenseCalculator() {
  const [salary1, setSalary1] = useState('');
  const [salary2, setSalary2] = useState('');
  const [expenses, setExpenses] = useState([
    { id: 1, name: 'Affitto', amount: '' },
    { id: 2, name: 'Spesa', amount: '' },
  ]);

  const addExpense = () => {
    setExpenses([...expenses, { id: Date.now(), name: '', amount: '' }]);
  };

  const removeExpense = (id: number) => {
    setExpenses(expenses.filter((exp) => exp.id !== id));
  };

  const updateExpense = (id: number, field: string, value: string) => {
    setExpenses(
      expenses.map((exp) => (exp.id === id ? { ...exp, [field]: value } : exp))
    );
  };

  const calculateSplit = () => {
    const s1 = parseFloat(salary1) || 0;
    const s2 = parseFloat(salary2) || 0;
    const total = s1 + s2;

    if (total === 0) return { person1: 0, person2: 0, total: 0 };

    const percentage1 = s1 / total;
    const percentage2 = s2 / total;

    const totalExpenses = expenses.reduce(
      (sum, exp) => sum + (parseFloat(exp.amount) || 0),
      0
    );

    return {
      person1: totalExpenses * percentage1,
      person2: totalExpenses * percentage2,
      total: totalExpenses,
      percentage1: percentage1 * 100,
      percentage2: percentage2 * 100,
    };
  };

  const result = calculateSplit();

  return (
    <>
      <style>{styles}</style>
      <div className="app-container">
        <div className="container">
          <div className="header">
            <h1>💑 Calcolatore Spese di Coppia</h1>
            <p>Dividete le spese in modo proporzionale agli stipendi</p>
          </div>

          <div className="salary-grid">
            <div className="salary-box blue">
              <label>💼 Tuo Stipendio Mensile</label>
              <div className="input-wrapper">
                <span className="euro-icon">€</span>
                <input
                  type="number"
                  value={salary1}
                  onChange={(e) => setSalary1(e.target.value)}
                  placeholder="es. 1500"
                />
              </div>
            </div>

            <div className="salary-box pink">
              <label>💼 Stipendio della Tua Ragazza</label>
              <div className="input-wrapper">
                <span className="euro-icon">€</span>
                <input
                  type="number"
                  value={salary2}
                  onChange={(e) => setSalary2(e.target.value)}
                  placeholder="es. 1200"
                />
              </div>
            </div>
          </div>

          <div className="expenses-section">
            <div className="expenses-header">
              <h2>📋 Spese Comuni</h2>
              <button className="add-btn" onClick={addExpense}>
                ➕ Aggiungi Spesa
              </button>
            </div>

            <div>
              {expenses.map((expense) => (
                <div key={expense.id} className="expense-item">
                  <input
                    type="text"
                    value={expense.name}
                    onChange={(e) =>
                      updateExpense(expense.id, 'name', e.target.value)
                    }
                    placeholder="Nome spesa"
                  />
                  <div
                    className="input-wrapper"
                    style={{ width: '150px', position: 'relative' }}
                  >
                    <span className="euro-icon">€</span>
                    <input
                      type="number"
                      className="amount-input"
                      value={expense.amount}
                      onChange={(e) =>
                        updateExpense(expense.id, 'amount', e.target.value)
                      }
                      placeholder="Importo"
                    />
                  </div>
                  <button
                    className="delete-btn"
                    onClick={() => removeExpense(expense.id)}
                  >
                    🗑️
                  </button>
                </div>
              ))}
            </div>
          </div>

          {(salary1 || salary2) && result.total > 0 && (
            <div className="results">
              <h2>💰 Divisione delle Spese</h2>

              <div className="results-grid">
                <div className="result-box blue">
                  <div className="label">Tu Paghi</div>
                  <div className="amount">€{result.person1.toFixed(2)}</div>
                  <div className="percentage">
                    {result.percentage1?.toFixed(1)}% del totale
                  </div>
                </div>

                <div className="result-box pink">
                  <div className="label">Lei Paga</div>
                  <div className="amount">€{result.person2.toFixed(2)}</div>
                  <div className="percentage">
                    {result.percentage2?.toFixed(1)}% del totale
                  </div>
                </div>
              </div>

              <div className="total-box">
                <div className="label">Totale Spese Mensili</div>
                <div className="amount">€{result.total.toFixed(2)}</div>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
