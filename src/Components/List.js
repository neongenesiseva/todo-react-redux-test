import React,{Component} from 'react';
import { connect } from 'react-redux';
import * as actions from '../Actions';
import Modal from './Modal';
import SaveForm from './SaveForm';


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
            <li>
                {name}<br/>
                {time}<br />
                <button onClick={()=>Delete(index)}>Delete</button>
                <button onClick={()=>this.Edit(isEdit)}>Edit</button>
                {modal}
            </li>
        )
    }
};

function mapStateToProps(state){
    return {
        isEdit:state.isEdit
    }
}

export default connect(mapStateToProps,actions)(List)

