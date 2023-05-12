import Image from 'next/image'
// https://www.youtube.com/watch?v=IYoZvxUbhUQ
async function SearchResults ({ searchParams }) {
  const { q } = searchParams

  const results = await fetch(`${process.env.APP_BASEURL}/api/searchoff?q=${q}`)
    .then((res) => res.json())
    .then((data) => data)

  console.log(results.products[0].image_front_small_url)

  return (
    <section>
      <h1>Resultados</h1>
      {results.products.map((product, i) => (
        <div key={i}>
          {product.generic_name}
          <Image
            src={product.image_front_small_url} alt={product.generic_name} width={500}
            height={500}
          />
        </div>
      ))}
    </section>
  )
}

export default SearchResults
