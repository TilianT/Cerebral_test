import { state, props } from 'cerebral'

export const setLoadingPosts = ({ store }) =>
  store.set(state`isLoadingPosts`, true)

export const getPosts = ({ api }) =>
  api.getPosts().then(posts => ({ posts }))

export const setPosts = ({ store }) =>
  store.set(state`posts`, props`posts`)

export const unsetLoadingPosts = ({ store }) => {
  store.set(state`isLoadingPosts`, false)
}

export const openModal = ({ store, props }) => {
  store.set(state`postModal`, {show: true, id: props.id })
}

export const closeModal = ({ store }) =>
  store.set(state`postModal`, {show: false, id: null})
