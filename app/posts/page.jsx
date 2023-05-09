import Link from 'next/link'

const fetchPosts = () => {
  return fetch('https://jsonplaceholder.typicode.com/posts', {
    next: {
      revalidate: 40
    }
  })
    .then(res => res.json())
    .catch(err => console.log(err))
}

async function Posts () {
  const posts = await fetchPosts()
  console.log(process.env.FATSECRET_CLIENT_ID)

  return (
    <section>
      {
        posts.map((post) => (

          <article key={post.id}>
            <h2 className='text-xl font-bold mb-2 mt-2'>
              <Link href={`/posts/${post.id}`}>
                {post.title}
              </Link>
            </h2>
            <p>
              {post.body}
            </p>
          </article>
        ))
      }

    </section>
  )
}

export default Posts
