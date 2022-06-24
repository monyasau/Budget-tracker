export default function InputCard({ delCard, placeHolder, id, handleInput }) {
  return (
    <>
      <div
        className="border border-secondary m-3 d-flex flex-wrap align-items-center justify-content-between todo rounded p-2"
        id={id}
      >
        <input type="number" placeholder={placeHolder} onChange={handleInput} />
        <div>
          <button className="rounded ms-auto" id={id} onClick={delCard}>
            &times;
          </button>
        </div>
      </div>
    </>
  );
}
