export default {
  async fetch(request: Request, env: unknown, ctx: ExecutionContext): Promise<Response> {
    return new Response('Hello World!');
  },
};
