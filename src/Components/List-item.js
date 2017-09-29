import React,{Component} from 'react'
import { connect } from 'react-redux'
import * as action from '../Actions'
import List from './List'

class ListItem extends Component {    

    render(){
        return (
            <div>
                {this.props.main.map((item,index)=><List name={item.name} time={item.time} index={index} key={index}/>)}
            </div>
        )
    }

};

function mapStateToProps(state){
    return {
        main:state.main
    }
}

export default connect(mapStateToProps,action)(ListItem)