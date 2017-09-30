import React,{Component} from 'react'
import { connect } from 'react-redux'
import * as action from '../Actions'
import List from './List'

const ListItemStyle = {
    width: '80%',
    backgroundColor: 'beige',
    margin: 'auto',
    padding: "20px 20px 20px 20px"
}

class ListItem extends Component {    

    render(){
        return (
            <div style={ListItemStyle}>
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