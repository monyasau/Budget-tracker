export default function BudgetInput({inputFunction}) {
    return(
        <>
          enter your budget for the{" "} 
        <select className="select" id="">
          <option value="*javascript month number">month</option>
          <option value="7">week</option>
        </select>
        <input autoFocus={true} type="number" className="px-1 py-2" placeholder="Your budget" id="" required onInput={inputFunction} />
        </>
    )
}