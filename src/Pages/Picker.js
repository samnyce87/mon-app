import '../App.css';
import React, { Component } from 'react';
import Calendar from 'react-calendar';
import Menu from '../Menu';

class Picker extends Component {
    state={
        date:new Date(),
        showDate:false
    }
    onChange= date =>{
        this.setState({
            date
        })
    }
    validation = () =>{
        this.setState({
            showDate: true
        })
        console.log(this.state.date);
    }
    reset = () => {
        this.setState({
            showDate: false
        })
    }
    render() {
        return (
            <div style={{boxShadow:"5px 5px 25px"}}>
                <Menu/>
                <div onClick={this.reset}>
               <Calendar
               onChange={this.onChange}
               selectRange={true}
               value={this.state.date}
               />
               </div>
               {/*this.state.date.toLocaleDateString()}</p>*/}
               <button onClick={this.validation}>Valider</button>
               {this.state.showDate ? (
                <div>
                    <p>Du : {this.state.date[0].toLocaleDateString()}</p>
                    <p>Au : {this.state.date[1].toLocaleDateString()}</p>
            </div>
               ):null}
               </div>

        );
    }
}

export default Picker;