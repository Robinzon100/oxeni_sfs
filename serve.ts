import handler from 'serve-handler';
import http from 'http';


module.exports = async (request: http.IncomingMessage, response: http.ServerResponse) => {
  await handler(request, response);
};


const server = http.createServer((request, response) => {
  // You pass two more arguments for config and middleware
  // More details here: https://github.com/vercel/serve-handler#options
  return handler(request, response);
})

server.listen(3000, () => {
  console.log('Running at http://localhost:3000');
});


