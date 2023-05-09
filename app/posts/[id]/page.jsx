const fetchPost = (id) => {
  return fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
    .then(res => res.json())
    .catch(err => console.log(err))
}

async function Posts ({ params }) {
  const { id } = params

  const post = await fetchPost(id)
  return (
    <article key={post.id}>
      <h2 className='text-xl font-bold mb-2 mt-2'>
        {post.title}
      </h2>
      <p>
        {post.body}
      </p>
    </article>
  )
}

export default Posts
