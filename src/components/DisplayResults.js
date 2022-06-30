export default function DisplayResult({ budget, totalExpenses, remainder }) {
    return (
        <>
          <div>
             Budget: {budget}
          </div>
          <div>
             Total {totalExpenses}
          </div>
          <div>
             Remainder {remainder}
          </div>
        </>
    );
  }
  