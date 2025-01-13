export const helloUser = {
  method: "POST",
  path: "/hello",
  handler: (request, h) => {
    const { name } = request.payload;
    return `Hello ${name}!`;
  },
};
