export default function Page() {
  return new Response("<h1>Hello World</h1>", {
    headers: {
      "Content-Type": "text/html",
    },
  });
}
