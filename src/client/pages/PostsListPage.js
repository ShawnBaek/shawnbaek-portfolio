import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPostsList } from '../actions';
import { Helmet } from 'react-helmet';
import _ from 'lodash';

class PostsListPage extends Component {
    componentDidMount(){
        console.log('Posts is called')
        this.props.fetchPostsList();
    }

    renderPosts(){
        // return this.props.posts.map(user => {
        //     return <li key={user.id}>{user.name}</li>;
        // })

        console.log('renderPosts is called');
        return _.map(this.props.posts, post => {

            const url = `/blog/${post.id}`;
            const title =  _.result(post, 'title.rendered');
            const postId = _.result(post, 'id');
            console.log('--------------')
            return (
                // <div key={post.id}>{post.id}</div>

                <li className="list-group-item" key={postId}>
                
                    <Link to={url}>
                        {title}
                    </Link>
                
                </li>
            );
        });
    }

    render(){
        console.log("BlogPage: " + this.props);
        return (
            <div>
                {/* <Helmet>
                    <title>{`${this.props.users.length} Users Loaded`}</title>
                    <meta property="og:title" content="Users App" />
                </Helmet> */}
                Here's a big list of users:
                <ul>{this.renderPosts()}</ul>
            </div>
        )
    }
}

function mapStateToProps(state){
    return { users: state.users };
}

function loadData(store) {
    store.dispatch(fetchPostsList());
}
export default {
    loadData,
    component: connect(mapStateToProps, { fetchPostsList })(PostsListPage)
};

