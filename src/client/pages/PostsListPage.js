import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPostsList } from '../actions';
import { Helmet } from 'react-helmet';
import _ from 'lodash';

class PostsListPage extends Component {
    componentDidMount(){
        this.props.fetchPostsList();
        console.log('Post fetched');
        console.log(this.props);
    }

    renderPosts(){
        // return this.props.posts.map(user => {
        //     return <li key={user.id}>{user.name}</li>;
        // })

        console.log('renderPosts2 is called');
        console.log(this.props);
        return _.map(this.props.posts, post => {

            const url = `/blog/${post.id}`;
            const title =  _.result(post, 'title');
            const postId = _.result(post, 'ID');
            console.log(title);
            console.log(postId);
            return (
                // <div key={post.id}>{post.id}</div>

                <li className="list-group-item" key={postId}>
                    {title}
                </li>
            );
        });
    }

    render(){
        console.log('render function and posts');
        console.log(this.props.posts);
        return (
            <div>
            
                Here's a big list of users:
                <ul>{this.renderPosts()}</ul>
            </div>
        )
    }
}

function mapStateToProps(state){
    console.log('mapStateToProps');
    console.log(state);
    return { posts: state.posts };
}

function loadData(store) {
    store.dispatch(fetchPostsList());
}
export default {
    loadData,
    component: connect(mapStateToProps, { fetchPostsList })(PostsListPage)
};

