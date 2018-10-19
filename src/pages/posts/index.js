import React, { Component } from 'react';
import { state, sequences } from 'cerebral'
import { connect } from '@cerebral/react'
import Post from '../../components/post/index'
import styled from 'styled-components'
import Loading from '../../components/loading'

export default connect({
    posts: state`posts`,
    loadPosts: sequences`openPostsPage`,
  },
  class App extends Component {

    componentDidMount() {
      const { loadPosts, posts } = this.props;

      if(posts.length === 0)
        loadPosts();
    }

    render() {
      const { posts } = this.props;

      return (
        <Container>
          {
            posts.length === 0 ? <Loading /> :
            posts.map(post => {
              return <Post title={post.title} id={post.id} key={post.id}/>
            })
          }
        </Container>
      )
    }
  }
)

const Container = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 768px;
  margin: 0 auto;
`