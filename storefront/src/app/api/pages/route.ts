export async function GET(request: Request) {}

export async function POST(request: Request) {
  const res = (await request.json()) as { title: string; slug: string };
}
