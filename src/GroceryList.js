import { Component } from "react";
import bag from "./add.png";

export class GroceryList extends Component{
    state = {
        userInput : "",
        list: []
    }

    onChangeEvent(event) {
        this.setState({userInput: event});
    }

    addItem(input){
        if (input === "") {
            alert("Please enter an item")
        } else {
            let listArray = this.state.list;
            listArray.push(input);
            this.setState({list: listArray, userInput: ''})
        }
    }

    deleteAll(){
        let myList = this.state.list;
        myList = [];
        this.setState({list: myList});
        console.log(myList);
    }

    crossedWord(event) {
        const li = event.target;
        li.classList.toggle('crossed');
    }

    onFormSubmit(e) {
        e.preventDefault();
    }

    render() {
        return(
            <div>
                <form onSubmit={this.onFormSubmit}>
                    <div className="center">
                        <input type="text" 
                            placeholder="What do you want to buy today?"
                            onChange={(e) => {this.onChangeEvent(e.target.value)}}
                            value={this.state.userInput} />
                    </div>
                    <div  className="center">
                        <button onClick={() => this.addItem(this.state.userInput)} className="add">ADD</button>
                    </div>
                    <ul>
                    {this.state.list.map((item, index) => (
                        <li onClick={this.crossedWord} key={index}  className="center">
                            <img src={bag} height="20px" alt="pic"  className="bag"/>
                            {item}
                        </li>
                    ))}
                    </ul>    
                    <div className="center">
                        <button onClick={() => this.deleteAll(this.state.userInput)} className="del">Delete All</button>
                    </div>
                </form>
            </div>
        )
    }
}


