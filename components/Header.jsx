import Link from 'next/link'

export default function Header () {
  const routes = [
    { label: 'Home', route: '/' },
    { label: 'About', route: '/about' }
  ]
  return (
    <header className='border border-black p-1'>
      <nav>
        <ul className='flex list-none gap-8'>
          {routes.map(({ label, route }) => (
            <li key={route} className='hover:underline'><Link href={route}> {label} </Link></li>
          ))}
        </ul>
      </nav>
    </header>
  )
}
