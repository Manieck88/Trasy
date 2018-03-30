import React from 'react';

export class Forms extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: 'wpisz adres...',
            items: []
        }
        this.changeValue = this.changeValue.bind(this),
        this.addItem = this.addItem.bind(this),
        this.clearInput =this.clearInput.bind(this)
    }

    changeValue(e) {
        this.setState({data: e.target.value});
    }

    addItem(e){
        e.preventDefault();
        let newItems = this.state.items;
        newItems.push(this.state.data);
        this.setState({items: newItems, data: 'wpisz adres...'});
    }

    clearInput() {
        this.setState({data: ''});
    }
    render() {
        return(
            <form>
                <input type='text' onFocus={this.clearInput} value={this.state.data} onChange={this.changeValue}/>
                <button onClick={this.addItem}>dodaj nowy punkt trasy</button>
                <List items={this.state.items} />
            </form>
        );
    }
}

const List = props => (
    <ul>
        {
            props.items.map((item, index) => <li key={index}>{item}</li>)
        }
    </ul>
);
