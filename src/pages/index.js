import Image from 'next/image'
import { Inter } from 'next/font/google'
import  prisma  from '../../databse/database'

const inter = Inter({ subsets: ['latin'] })

function Home({ mobiles }) {
  // Render data...
  return (
    <div>
      <h1>Mobiles</h1>
      <ul>
        {mobiles.map(mobile => (
          <li key={mobile.id}>
            {mobile.model}
          </li>
        ))}
      </ul>
    </div>
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


export default Home;
