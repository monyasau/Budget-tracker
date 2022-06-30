export default function ExpensesInput({ delExpense, placeHolder, id, handleInput }) {
  return (
    <>
      <div
        className="border border-secondary m-3 d-flex flex-wrap align-items-center justify-content-between todo rounded p-2"
        
      >
        <input type="number"  id={id} placeholder={placeHolder} onChange={handleInput} />
        <div>
          <button className="rounded ms-auto" onClick={delExpense}>
            &times;
          </button>
        </div>
      </div>
    </>
  );
}
