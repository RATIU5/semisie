type Args = {
  params: {
    slug: string
  }
  searchParams: {
    [key: string]: string | string[]
  }
}

const Page = async ({ params, searchParams }: Args) => {
  const pageURL = `${process.env.PAYLOAD_BACKEND_URL}/api/pages`;
  const response = await fetch(pageURL);
  const data = await response.json();

  return data && data.docs.map((page:any) =>{
    if (page.slug == params.slug) {
      return (
        <h1>{page.title}</h1>
      )
    }
  })
}

export default Page
