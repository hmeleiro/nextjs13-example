import Image from 'next/image'

// https://www.youtube.com/watch?v=IYoZvxUbhUQ
async function SearchResults ({ searchParams }) {
  const { q } = searchParams

  let results = await fetch(`${process.env.APP_BASEURL}/api/searchoff?q=${q}`)
    .then((res) => res.json())
    .then((data) => data)

  results = results.products.filter(product => product.generic_name)

  if (results.length === 0) {
    return (
      <p>No se encontraron resultados</p>
    )
  }

  return (
    <section>
      <container className='flex flex-wrap'>
        {
          results.map((product, i) =>
            (
              <div key={i} className='m-4 p-5 bg-slate-500'>
                {product.generic_name}
                <Image
                  src={product.image_url} alt={product.generic_name} width={100}
                  height={100}
                />
              </div>
            )

          )
}
      </container>
    </section>
  )
}

export default SearchResults
