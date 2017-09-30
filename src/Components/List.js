import React,{Component} from 'react';
import { connect } from 'react-redux';
import * as actions from '../Actions';
import SaveForm from './SaveForm';

const ListStyle = {
    listStyleType:'none',
    borderRadius: '5px',
    borderStyle: 'dotted',
    borderColor: 'black',
    margin:'10px auto'
}


class List extends Component {

    constructor(){
        super();
        this.state = {
            isEdit:false
        };
        this.Edit = this.Edit.bind(this);
    }

    Edit(cur){
        this.setState({
            isEdit:!cur
        })
    }

    render(){
        let {
            Delete,
            index,
            name,
            time
        } = this.props;

        let {isEdit} = this.state;

        const modal = isEdit ? <SaveForm index={index} name={name} time={time} Edit={this.Edit}/> : null

        return (
            <li style={ListStyle}>
                {name}<br/>
                {time}<br />
                <button onClick={()=>Delete(index)}>Delete</button>
                <button onClick={()=>this.Edit(isEdit)}>Edit</button>
                {modal}
            </li>
        )
    }
};

export default connect(null,actions)(List)

