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
        event.preventDefault();
        let item = {};
        item.name = this.refs.save.value;
        item.time = new Date().toDateString();
        this.props.SaveEdit(item,this.props.index);
        this.props.Edit(true);
    }

    render(){

        let {
            name,
            time
            } = this.props;

        return (
            <Modal>
                <form className="modal">
                    <p>{time}</p><br />
                    <input defaultValue={name} type="text" ref="save"/>
                    <input type="submit" onClick={this.saveEdit}/>
                </form>
            </Modal>
        )
    }

};

function mapStateToProps(state){
    return {
        main:state.main
    }
}

export default connect(mapStateToProps,actions)(SaveForm)