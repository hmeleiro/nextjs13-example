import '../globals.css'
import { Suspense } from 'react'
import Loading from './loading'

export default function SearchLayout ({ children }) {
  return (
    <div>
      <Suspense fallback={<Loading />}>

        {children}
      </Suspense>
    </div>
  )
}
