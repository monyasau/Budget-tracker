import ExpensesInput from "./ExpensesInput"

export default function ExpensesInputList({ expenseDel, expenses, onInput }) {
  return (
    <>
    <div className="flex-wrap align-items-center justify-content-between w-md-50 d-sm-flex">
      
        {expenses.map((input, i) => {
          return (
            <ExpensesInput
            delExpense={expenseDel}
            id={expenses[i].id}
            placeHolder={expenses[i].placeHolder}
            handleInput={onInput}
            key={expenses[i].id}
            /> 
          )
        })}
        
    </div>
    </>
  );
}
