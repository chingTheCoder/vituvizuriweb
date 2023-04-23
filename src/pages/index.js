import Image from 'next/image'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

import  prisma  from '../../database/database'
import  ProductCard  from '../components/ProductCard.js'

function Home({ mobiles }) {
  // Render data...
  return (
    <main className="flex min-h-screen flex-col">
      <div className="flex flex-col items-center justify-center flex-1 px-20 text-center">
      <div>
          <h1>Mobiles</h1>
          <ProductCard/>
          <ul>
            {mobiles.map(mobile => (
              <li key={mobile.id}>
                  <ProductCard id={mobile.id} model={mobile.model} price={mobile.price} condition={mobile.condition}/>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </main>
  )
}

// This gets called on every request
export async function getServerSideProps() {
  // Fetch data from external API
  const mobiles = await prisma.mobile_phones.findMany({
    select : {
      id : true,
      model : true,
      price : true,
      condition : true,
      mobile_images : { select : { url : true}}
    },
    orderBy : {
      created_at : 'desc'
    }
  })
  // Pass data to the page via props
  console.log(mobiles)

  return { props: { mobiles } }
}


export default Home