import React,{Component} from 'react'
import {connect} from 'react-redux' 
import {Link} from 'react-router-dom'
class Home extends Component{
    
    render(){ 
        console.log(this.props)
        const posts = this.props.posts
        const postsList = posts.length?<div>{posts.map(post =><div key={post.id} className="posttab"><Link to={"/detail/"+post.id}><h1>{post.title}</h1><p>{post.body}</p></Link></div>)}</div>:<div><p>No posts is available<p></p></p></div>
        return (
            <div>
               {postsList}
            </div>
        )
    }
}
const mapStatetoProps = (state) =>{
    return{
        posts:state.posts
    }
}
export default connect(mapStatetoProps)(Home)