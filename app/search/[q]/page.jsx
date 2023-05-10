const getSearch = (q) => {
  return fetch(`${process.env.APP_BASEURL}/api/search?q=${q}`)
    .then(res => res.json())
    .then(data => data)
    .catch(err => console.log(err))
}
async function Posts ({ params }) {
  const { q } = params
  const results = await getSearch(q)
  console.log(results)

  return (
    <section>
      <h1>Resultados</h1>
      {/* <h3>{results.msg} </h3> */}
    </section>
  )
}

export default Posts
