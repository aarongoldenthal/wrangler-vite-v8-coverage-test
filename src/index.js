export default {
  async fetch(request, env) {
    return new Response("foo", { status: 200 });
  },
};
