const API_URL = 'https://jsonplaceholder.typicode.com';

export default {
  api: {
    getPosts() {
      return fetch(`${API_URL}/posts`)
        .then(response => response.json())
    }
  }
}