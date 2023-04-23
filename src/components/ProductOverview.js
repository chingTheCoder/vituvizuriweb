import React from "react";
import Link from 'next/link';
import Image from 'next/image'

const ProductOverview = (props) => {


  let { model , brand , storage , ram , battery_capacity , connectivity , price , description } = props.product

  return (
    <div className="mx-auto max-w-[1920px] px-4 md:px-8 2xl:px-16 dark:bg-gray-900">
      <div className="pt-8">
        <div className="flex items-center dark:text-white">
          <ol className="flex items-center w-full overflow-hidden">
            <li className="text-sm text-body px-2.5 transition duration-200 ease-in first:pl-0 last:pr-0 hover:text-heading">
              <Link href="/">Home</Link>
            </li>
            <li className="text-base text-body mt-0.5">/</li>
            <li className="text-sm text-body px-2.5 transition duration-200 ease-in first:pl-0 last:pr-0 hover:text-heading">
              <a className="capitalize" href="#">
                product
              </a>
            </li>
            <li className="text-base text-body mt-0.5">/</li>
            <li className="text-sm text-body px-2.5 transition duration-200 ease-in first:pl-0 last:pr-0 hover:text-heading">
              <a className="capitalize" href="#">
                {model}
              </a>
            </li>
          </ol>
        </div>
      </div>
      <div className="block lg:grid grid-cols-9 gap-x-10 xl:gap-x-14 pt-7 pb-10 lg:pb-14 2xl:pb-20 items-start">
        <div className="col-span-5 grid grid-cols-2 gap-2.5">
          <div className="col-span-1 transition duration-150 ease-in hover:opacity-90">
            <Image
              src="https://dev-ui-image-assets.s3.ap-south-1.amazonaws.com/product-overview/p-20-1.png"
              alt="Maniac Red Boys--0"
              className="object-cover w-full"
              width={100}
              height={100}
            />
          </div>
          <div className="col-span-1 transition duration-150 ease-in hover:opacity-90">
            <Image
              src="https://dev-ui-image-assets.s3.ap-south-1.amazonaws.com/product-overview/p-20-2.png"
              alt="Maniac Red Boys--1"
              className="object-cover w-full"
              width={100}
              height={100}
            />
          </div>
          <div className="col-span-1 transition duration-150 ease-in hover:opacity-90">
            <Image
              src="https://dev-ui-image-assets.s3.ap-south-1.amazonaws.com/product-overview/p-20-3.png"
              alt="Maniac Red Boys--2"
              className="object-cover w-full"
              width={100}
              height={100}
            />
          </div>
          <div className="col-span-1 transition duration-150 ease-in hover:opacity-90">
            <Image
              src="https://dev-ui-image-assets.s3.ap-south-1.amazonaws.com/product-overview/p-20-4.png"
              alt="Maniac Red Boys--3"
              className="object-cover w-full"
              width={100}
              height={100}
            />
          </div>
        </div>
        <div className="col-span-4 pt-8 lg:pt-0">
          <div className="pb-7 mb-7 border-b border-gray-300">
            <h2 className="text-heading text-lg md:text-xl lg:text-2xl 2xl:text-3xl font-bold dark:text-white mb-3.5">
                {model}
            </h2>
            <p className="text-body text-sm lg:text-base leading-6 lg:leading-8 dark:text-gray-300">
                {description}
            </p>
            <div className="flex items-center mt-5 dark:text-gray-300">
              <div className="text-heading font-bold text-base md:text-xl lg:text-2xl 2xl:text-4xl pr-2 md:pr-0 lg:pr-2 2xl:pr-0">
                {price}
              </div>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductOverview;
