import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../Actions';

class Add extends React.Component{

    constructor(props){
        super(props);
        this.add = this.add.bind(this)
    }

    add(e){
        if(!this.refs.add.value){
            e.preventDefault();
        } else {
            let item = {};
            item.time = new Date().toDateString();
            item.name = this.refs.add.value;
            this.props.Add(item);
            this.refs.add.value = "";
        }
    }

    render(){
        return(
            <div>
                <input placeholder="add" ref="add" type="text"/>
                <input type="button" onClick={this.add} value="ADD"/>
            </div>
        )
    }

};

export default connect(null,actions)(Add)