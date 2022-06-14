import { Component } from "react";

export default class App extends Component {
  render() {
   let textMonth = ()=>{
     //Get the date
let date = new Date();
//Get hours from date
return date.getMonth();

//select the button from the DOM
    }
    return (
      <>
        enter your budget for the{" "}
        <select className="select" id="">
          <option value="*javascript month number">month</option>
          <option value="7">week</option>
        </select>
      </>
    );
  }
}
