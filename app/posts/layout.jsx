import '../globals.css'
import SearchBar from '../../components/SearchBar'

export default function RootLayout ({ children }) {
  return (
    <div>
      <SearchBar />
      {children}
    </div>
  )
}
