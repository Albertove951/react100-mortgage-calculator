import React from 'react';

export default class App extends React.Component {
  // your Javascript goes here
  
   // initializing the object
    constructor(props) {
      super(props);
      this.state = {
        balance: 0,
        rate: 0,
        term: 15,
        submit: 0
      }
      
      this.handleChange = this.handleChange.bind(this);
      this.calculate = this.calculate.bind(this);
      
    }

  


  // m = monthly payment, p = principal, r = monthly intrest rate, n= number of payments
  //  
    calculate(event) {
      let p = this.state.balance;
      let r = (this.state.rate)/100/12;
      let n = (this.state.term) * 12
      let m = (p *(r*Math.pow((1+r),n)/(Math.pow(1+r,n)-1)))
      
      let monthly = m.toFixed(2);
    
      this.setState({[event.target.name]: monthly})
   
    }
// a handle that works globably 
    handleChange(event) {
      this.setState({[event.target.name]: event.target.value})
    }
   
 

  render() {
    return (
      //the html for react from (note for myslef)
      <div className='container'>
        <div>
         <h3>Mortgage Calculator</h3>
          <input type='number' name='balance' value={this.state.balance} onChange={this.handleChange}/>
          <input type='number' name='rate' step='0.01' value={this.state.rate} onChange={this.handleChange}/>
          <select name='term' value={this.state.term} onChange= {this.handleChange}>
            <option value='15'>15</option>
            <option value='30'>30</option>
          </select>
          <button name='submit' onClick={this.calculate}>calculate</button>
            {/* your JSX goes here */}
        </div>
         <div name='output' id= 'output'> ${this.state.submit}</div>
      </div>
    );
  }
}

