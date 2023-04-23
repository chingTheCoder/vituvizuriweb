import { useRouter } from 'next/router'
import  prisma  from '../../../database/database'
import  ProductOverview  from '../../components/ProductOverview'

export default function Product({ product }) {
  const router = useRouter();
  if (router.isFallback) {
    return <div>Loading...</div>;
  }

  return (
    <ProductOverview product={product}/>
  );
}

export async function getServerSideProps(context) {
  const { product: productId } = context.query;

  try {
    const product = await prisma.mobile_phones.findUnique({
      where: {
        id: Number(productId),
      },
      select: {
        id: true,
        model: true,
        price: true,
        condition : true,
        connectivity : true,
        battery_capacity : true,
        brand : true,
        ram : true,
        storage : true,
        description : true,
        mobile_images: {
          select: {
            url: true,
          },
        },
      },
    });

    return {
      props: { product },
    };
  } catch (error) {
    console.error(error);
    return {
      props: {},
    };
  }
}
