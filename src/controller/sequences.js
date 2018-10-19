import { closeModal, getPosts, openModal, setLoadingPosts, setPosts, unsetLoadingPosts } from './actions'

export default {
  openPostsPage: [
    setLoadingPosts,
    getPosts,
    setPosts,
    unsetLoadingPosts
  ],
  openModal: [openModal],
  closeModal: [closeModal],
}