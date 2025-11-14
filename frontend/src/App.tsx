import { useState } from 'react'
import './App.css'

function App() {
  return ExpenseCalculator();
}

export default App

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
  );
}
