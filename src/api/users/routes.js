const routes = (handler) => [
  {
    method: 'POST',
    path: '/users',
    handler: handler.postUserHanlder,
  },
  {
    method: 'GET',
    path: '/users/{id}',
    handler: handler.getUserByIdHandler,
  },
];

module.exports = routes;
