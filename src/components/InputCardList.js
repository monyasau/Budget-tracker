import InputCard from "./InputCard"

export default function InputCardList({ cardDel, cards, onInput }) {
  return (
    <>
    <div className="flex-wrap align-items-center justify-content-between w-md-50 d-sm-flex">
      
        {cards.map((input, i) => {
          return (
            <InputCard
            delCard={cardDel}
            id={cards[i].id}
            placeHolder={cards[i].placeHolder}
            handleInput={onInput}
            /> 
          )
        })}
        
    </div>
    </>
  );
}
