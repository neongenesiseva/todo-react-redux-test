import React from 'react';
import Modal from './Modal';
import { connect } from 'react-redux';
import * as actions from '../Actions';

class SaveForm extends React.Component{

    constructor(props){
        super(props);
        this.saveEdit = this.saveEdit.bind(this);
    };

    saveEdit(event){
        let name = this.refs.saveEdit.value;
        let time = new Date().toDateString();
        
    }

    render(){
        let {
            index,
            name
            } = this.props;
        return (
            <Modal>
                <form onSubmit={this.saveEdit}>
                    <input value={name} type="text" ref="saveEdit"/>
                    <input type="submit" />
                </form>
            </Modal>
        )
    }

};

function mapStateToProps(state){
    return {
        main:state.main,
        isEdit:state.isEdit
    }
}

export default connect(mapStateToProps,actions)(SaveForm)