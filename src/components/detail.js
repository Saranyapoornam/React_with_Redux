import React,{Component} from 'react'
import {connect} from 'react-redux' 
class Detail extends Component{
    delete =()=>{
        this.props.deletePost(this.props.post.id)
        this.props.history.push('/home')
    }
    render(){
        console.log(this.props)
    const post = this.props.post
        return(
            <div>
                <h1> {post.title}</h1>
                <p>{post.body}</p>
                <button className="loginButton" onClick={this.delete}>Delete</button>
            </div>
        )
    }
   
}
const mapStateToProps = (state,ownProps) =>{
    console.log("ownProps"+JSON.stringify(ownProps))
    const id = ownProps.match.params.id
    console.log("ownProps id"+JSON.stringify(id))
    return{
        post:state.posts.find( post => post.id == id)
    }
    
}
const mapDispatchToProps = (dispatch) =>{
    return{
        deletePost : (id) =>{dispatch({type:'DELETE_POST',id:id})}
    }
}
export default connect( mapStateToProps,mapDispatchToProps)(Detail)