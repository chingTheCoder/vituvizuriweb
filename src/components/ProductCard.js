import React from "react";
import Link from 'next/link';
import Image from 'next/image'

const ProductCard = ({ id, model, price, condition }) => {
  return (
    <div className="p-8 max-w-md mx-auto dark:bg-gray-900">
      <Link href="/product/[product]" as={`/product/${id}`}>
        <button className="absolute right-4 top-4 z-10 rounded-full dark:text-gray-300 bg-transparent  p-1.5 text-gray-900 transition hover:text-gray-900/75">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="h-4 w-4"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
            />
          </svg>
        </button>

        <Image
          src="https://dev-ui-image-assets.s3.ap-south-1.amazonaws.com/products/iphone-13-mlpf3hn-a-apple-original-imag6vzz5qvejz8z.jpeg?q=70"
          alt=""
          className="py-4 h-64 w-full object-contain transition duration-500 group-hover:scale-105 sm:h-72"
          height={72}
          width={172}
        />

        <div className="relative border-t dark:bg-gray-700 border-gray-100 dark:border-gray-400 bg-white p-6">
          <span className="whitespace-nowrap bg-indigo-500 text-white px-3 py-1.5 text-xs font-medium">
            {condition}
          </span>

          <h3 className="mt-4 text-lg font-medium text-gray-900 dark:text-white">
                {model}
          </h3>

          <p className="mt-1.5 text-sm text-gray-700 dark:text-gray-200">
            {price}
          </p>
        </div>
      </Link>
    </div>
  );
};

export default ProductCard;


