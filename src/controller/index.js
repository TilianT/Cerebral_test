import App from 'cerebral'
import Devtools from 'cerebral/devtools'
import providers from './providers'
import sequences from './sequences'

const controller = App({
  state: {
    title: 'My Project',
    posts: [],
    postModal: {
      show: false,
      id: null
    },
    isLoadingItems: false,
  },
  sequences,
  providers,
  devtools: Devtools({
    host: 'localhost:8585',
  }),
})

export default controller;