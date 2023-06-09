import "./App.css";
import Expenses from "./components/Expenses/Expenses";
import "./components/Expenses/Expenses.css";

const App = () => {
  const expenses = [
    {
      id: "e1",
      title: "Toilet Paper",
      amount: 94.12,
      date: new Date(2020, 7, 14),
    },
    {
      id: "e2",
      title: "New TV",
      amount: 799.49,
      date: new Date(2021, 2, 12),
    },
    {
      id: "e3",
      title: "Car Insurance1",
      amount: 294.67,
      date: new Date(2021, 2, 28),
    },
    {
      id: "e4",
      title: "New Desk (Wooden)",
      amount: 450,
      date: new Date(2021, 5, 12),
    },
    {
      id: "e5",
      title: "Sample Title",
      amount: 0,
      date: new Date(2023, 4, 7),
    },
  ];
  return (
    <>
      <h2>Let's get started!</h2>
      <Expenses items={expenses} />
    </>
  );
};

export default App;
