const routes = [
  {
    path: '/',
    exact: true
  },
  {
    path: '/works',
    exact: true
  },
  {
    path: '/contact',
    exact: true
  },
  {
    path: '*', // 404
    exact: false
  }
]

export default routes
