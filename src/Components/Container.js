import React,{Component} from 'react';
import { connect } from 'react-redux';
import * as actions from '../Actions';
import ListItem from './List-item';
import Add from './Add';

const containerStyle = {
    width: '80%',
    margin:'auto',
    backgroundColor: 'lightgrey',
    textAlign: 'center',
    padding : "20px"
}

class Container extends Component {
    
    render(){
        return(
            <div className="container" style={containerStyle}>
                <Add />
                {this.props.main.length === 0?"The List is Empty":<ListItem />}
            </div>
        )
    }

};

function mapStateToProps(state){
    return {
        main:state.main
    }
}

export default connect(mapStateToProps,actions)(Container)