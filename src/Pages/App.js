import { Component } from "react";
import CardList from "../components/InputCardList";

export default class App extends Component {
  constructor() {
    super();
    //super has to be present for "this" to work
    this.state = {
      budget: "",
      cards: [
        {
          id: this.uuid(),
          placeHolder: "rent",
        },
        {
          id: this.uuid(),
          placeHolder: "health",
          value: "",
        },
        {
          id: this.uuid(),
          placeHolder: "insurance",
          value: "",
        },
        {
          id: this.uuid(),
          placeHolder: "other",
          value: "",
        },
        {
          id: this.uuid(),
          placeHolder: "food",
          value: "",
        },
      ],
    };
    
  }
  delCard = (e) => {
    let Cards = this.state.cards;
    let id = e.target.getAttribute("id");
    var filteredCards = this.state.cards.filter(function (i) {
      return i.id !== id;
    });
    this.setState({
      cards: filteredCards,
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
  sortBudget = ()=>{

  }
  onInput = (e) =>{
    let id = e.target.getAttribute("id");
  }
  componentDidMount(){
    document.getElementById("sort-button").addEventListener("click", this.sortBudget())
  }
  render() {
    return (
      <>
        enter your budget for the{" "}
        <select className="select" id="">
          <option value="*javascript month number">month</option>
          <option value="7">week</option>
        </select>
        <div>
          <CardList onInput={this.onInput} cardDel={this.delCard} cards={this.state.cards} />
        </div>
        <div>
          <button id={"sort-button"}>sort</button>
        </div>
      </>
    );
  }
}
