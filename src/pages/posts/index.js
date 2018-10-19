import React, { Component } from 'react';
import { state, sequences } from 'cerebral'
import { connect } from '@cerebral/react'
import Post from './post'
import styled from 'styled-components'

export default connect({
    title: state`title`,
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