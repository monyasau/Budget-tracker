import { Component } from "react";
import BudgetInput from "../components/BudgetInput";
import DisplayResult from "../components/DisplayResults";
import ExpenseInputList from "../components/ExpenseInputList";

export default class App extends Component {
  constructor() {
    super();
    //super has to be present for "this" to work
    this.state = {
      budget: 0,
      expenseFields: [
        {
          id: this.uuid(),
          placeHolder: "rent",
          value: 1,
        },
        {
          id: this.uuid(),
          placeHolder: "health",
          value: 2,
        },
        {
          id: this.uuid(),
          placeHolder: "insurance",
          value: 3,
        },
        {
          id: this.uuid(),
          placeHolder: "other",
          value: 4,
        },
        {
          id: this.uuid(),
          placeHolder: "food",
          value: 5,
        },
      ],
    };
  }
  delExpense = (e) => {
    let expenseFields = this.state.expenseFields;
    let id = e.target.getAttribute("id");
    
    var filteredExpenses = this.state.expenseFields.filter(function (i) {
      return i.id !== id;
    });
    this.setState({
      expenseFields: filteredExpenses,
    });
  };
  uuid = (len) => {
    let length = len || 3;
    let charCodes = [];
    let string = "";

    for (let i = 0; i < 10; i++) {
      charCodes.push(48 + i);
      charCodes.push(97 + i);
    }
    for (let i = 0; i < 16; i++) {
      charCodes.push(107 + i);
    }

    for (let i = 0; i < length; i++) {
      let charIndex = Math.floor(Math.random() * charCodes.length);
      string = string + String.fromCharCode(charCodes[charIndex]);
    }

    return string;
  };
  sortBudget = () => {
    let budget = this.state.budget;
    let totalExpenses = this.state.expenseFields.filter(function (expenses) {
      return expenses;
    });

    let FilteredExpenses = totalExpenses.map((expense, i) => {
      // return expense.value
      let expenseArray = totalExpenses[i].value;
      return expenseArray;
    });
    let expenseSum = 0;
    for (let index = 0; index < FilteredExpenses.length; index++) {
      expenseSum += FilteredExpenses[index];
    }

    console.log("total expense:", expenseSum);
    console.log("budget:", budget);
    console.log("result:", budget - expenseSum);
  };
  onExpenseInput = (e) => {
    let expenses = this.state.expenseFields;
    let id = e.target.getAttribute("id");

    var updatedExpenses = this.state.expenseFields.filter(function (i) {
      return i.id !== id;
    });

    let filteredExpenses = expenses.map((expense, i) => {
      if (expenses[i].id === id) {
        
        // console.log(expenses[i].id);
        // console.log(id);
        
      }
      // return expense.value
      // console.log(id);
      // let expenseArray = expenses[i].value;
      // console.log(expenseArray);
      // return expenseArray;
    });
    // console.log(expenses)

    // let updatedExpenses = expenses.filter(function (i) {
    //   return i.value;
    // });

    // console.log(updatedExpenses);
    // this.setState({
    //   expenseFields: updatedExpenses,
    // });
  };
  onBudgetInput = (e) => {
    let budget = this.state.budget;
    this.setState({
      budget: e.target.value,
    });
    // console.log(e.target.value);
  };
  componentDidMount() {
    document
      .getElementById("sort-button")
      .addEventListener("click", this.sortBudget());
    return;
  }
  render() {
    return (
      <>
        <BudgetInput inputFunction={this.onBudgetInput} />
        <div>
          <ExpenseInputList
            onInput={this.onExpenseInput}
            expenseDel={this.delExpense}
            expenses={this.state.expenseFields}
          />
        </div>
        <div>
          <button id={"sort-button"} onClick={this.sortBudget}>
            sort
          </button>
        </div>
        <DisplayResult budget={this.state.budget} />
      </>
    );
  }
}
