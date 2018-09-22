import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPostsList } from '../actions';
import { Helmet } from 'react-helmet';

class PostsListPage extends Component {
    componentDidMount(){
        this.props.fetchPostsList();
    }

    renderPosts(){
        return this.props.users.map(user => {
            return <li key={user.id}>{user.name}</li>;
        })
    }

    render(){
        return (
            <div>
                <Helmet>
                    <title>{`${this.props.users.length} Users Loaded`}</title>
                    <meta property="og:title" content="Users App" />
                </Helmet>
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

