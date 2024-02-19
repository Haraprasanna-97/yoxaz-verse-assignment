"use client"
import Image from "next/image";
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/20/solid'
import { useState } from "react";

export default function Home() {
  const [Headings,setHeadings] = useState(["SHPIIFY #","DATE","STATUS","CUSTOMER","EMAIL","COUNTRY", "SHIPPING","SOURSE","ODER TYPE"])
  const [Data,setData] = useState([
    {
        "id": 1077620,
        "SHPIIFY #": 17713,
        "DATE": "22 Jan 2020",
        "STATUS": "Pending",
        "CUSTOMER": "Ahmed",
        "EMAIL": "ahmed.123@mail.com",
        "COUNTRY": "Australia",
        "SHIPPING": "Austrelian Post Api",
        "SOURSE": "ShopifyAU",
        "ODER TYPE": "Customer"
    },
    {
        "id": 1077622,
        "SHPIIFY #": 17713,
        "DATE": "22 Jan 2020",
        "STATUS": "Pending",
        "CUSTOMER": "Ahmed",
        "EMAIL": "ahmed.123@mail.com",
        "COUNTRY": "Australia",
        "SHIPPING": "Austrelian Post Api",
        "SOURSE": "ShopifyAU",
        "ODER TYPE": "Customer"
    },
    {
        "id": 1077623,
        "SHPIIFY #": 17713,
        "DATE": "22 Jan 2020",
        "STATUS": "Pending",
        "CUSTOMER": "Ahmed",
        "EMAIL": "ahmed.123@mail.com",
        "COUNTRY": "Australia",
        "SHIPPING": "Austrelian Post Api",
        "SOURSE": "ShopifyAU",
        "ODER TYPE": "Customer"
    },
    {
        "id": 1077620,
        "SHPIIFY #": 17713,
        "DATE": "22 Jan 2020",
        "STATUS": "Pending",
        "CUSTOMER": "Ahmed",
        "EMAIL": "ahmed.123@mail.com",
        "COUNTRY": "Australia",
        "SHIPPING": "Austrelian Post Api",
        "SOURSE": "ShopifyAU",
        "ODER TYPE": "Customer"
    },
    {
        "id": 1077620,
        "SHPIIFY #": 17713,
        "DATE": "22 Jan 2020",
        "STATUS": "Pending",
        "CUSTOMER": "Ahmed",
        "EMAIL": "ahmed.123@mail.com",
        "COUNTRY": "Australia",
        "SHIPPING": "Austrelian Post Api",
        "SOURSE": "ShopifyAU",
        "ODER TYPE": "Customer"
    },
    {
        "id": 1077620,
        "SHPIIFY #": 17713,
        "DATE": "22 Jan 2020",
        "STATUS": "Pending",
        "CUSTOMER": "Ahmed",
        "EMAIL": "ahmed.123@mail.com",
        "COUNTRY": "Australia",
        "SHIPPING": "Austrelian Post Api",
        "SOURSE": "ShopifyAU",
        "ODER TYPE": "Customer"
    },
    {
        "id": 1077620,
        "SHPIIFY #": 17713,
        "DATE": "22 Jan 2020",
        "STATUS": "Pending",
        "CUSTOMER": "Ahmed",
        "EMAIL": "ahmed.123@mail.com",
        "COUNTRY": "Australia",
        "SHIPPING": "Austrelian Post Api",
        "SOURSE": "ShopifyAU",
        "ODER TYPE": "Customer"
    },
    {
        "id": 1077620,
        "SHPIIFY #": 17713,
        "DATE": "22 Jan 2020",
        "STATUS": "Pending",
        "CUSTOMER": "Ahmed",
        "EMAIL": "ahmed.123@mail.com",
        "COUNTRY": "Australia",
        "SHIPPING": "Austrelian Post Api",
        "SOURSE": "ShopifyAU",
        "ODER TYPE": "Customer"
    }
])
  return (
    <main className="flex min-h-screen flex-col px-[60px]">
      <div className="drop-shadow-lg rounded-3xl bg-white mx-2">
        <form action="" className="flex flex-row p-3 ">
          <div className="mx-2">
            <label htmlFor="search">What are you looking for ?</label>
            <input type="text" id="search" name="search" className="w-full bg-gray-100 rounded-lg border bg-opacity-50 border-gray-300 focus:ring-2 focus:ring-indigo-200 focus:bg-transparent focus:border-indigo-500 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" placeholder="Search for category, name, company , etc"></input>
          </div>
          <div className="mx-2">
            <label htmlFor="catagory">Catagory</label><br />
            <select id="catagory" name="catagory" className="w-44 bg-gray-100 rounded-lg border bg-opacity-50 border-gray-300 focus:ring-2 focus:ring-indigo-200 focus:bg-transparent focus:border-indigo-500 text-base outline-none text-gray-700 p-2 mt-1 leading-8 transition-colors duration-200 ease-in-out">
              <option value="All">All</option>
            </select>
          </div>
          <div className="mx-2">
            <label htmlFor="status">Status</label><br />
            <select id="status" name="status" className="w-44 bg-gray-100 rounded-lg border bg-opacity-50 border-gray-300 focus:ring-2 focus:ring-indigo-200 focus:bg-transparent focus:border-indigo-500 text-base outline-none text-gray-700 p-2 mt-1 leading-8 transition-colors duration-200 ease-in-out">
              <option value="All">All</option>
            </select>
          </div>
          <div className="mt-8 mx-2">
            <button className="inline-flex items-center bg-gray-100 border-0 py-2 px-3 focus:outline-none hover:bg-gray-200 rounded-lg text-base mt-10 md:mt-0">
              <Image
                src="/stat_minus_2.svg"
                alt="Down arrow"
                className="dark:invert"
                width={20}
                height={20}
                priority
              />
            </button>
          </div>
          <div className="mt-8 mx-2">
            <button className="inline-flex items-center bg-blue-600 border-2 py-2 px-3 focus:outline-none hover:bg-blue-200 rounded-lg text-white mt-10 md:mt-0 uppercase border-slate-950 w-44 justify-center">Search</button>
          </div>
        </form>
      </div>
      <div className="drop-shadow-lg rounded-3xl bg-white my-2 flex flex-col p-3 justify-between">
        <div className="flex flex-row">
          <p className="w-1/2 pt-2 pl-2">Product Summary</p>
          <div className="flex flex-row w-full">
            <label htmlFor="show" className="pt-2">Show</label>
            <select id="show" name="show" className="w-full bg-gray-100 rounded-lg border bg-opacity-50 border-gray-300 focus:ring-2 focus:ring-indigo-200 focus:bg-transparent focus:border-indigo-500 text-base outline-none text-gray-700 p-2 mt-1 leading-8 transition-colors duration-200 ease-in-out mx-3">
              <option value="All column">All column</option>
              {
                Headings.map((item) => (
                  <option key={Headings.indexOf(item)} value={item}>{item}</option>
                ))
              }
            </select>
          </div>
          <button className="items-center bg-blue-600 border-0 py-2 px-3 focus:outline-none hover:bg-blue-300 rounded-lg text-white mt-10 md:mt-0 uppercase w-1/2 h-[55%]">Dispatch Selected</button>
          {/* Pagination */}
          <div className="flex items-center justify-between border-t border-gray-200 bg-white px-4  sm:px-6">
            <div className="flex flex-1 justify-between sm:hidden">
              <a href="#" className="relative inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50">Previous</a>
              <a href="#" className="relative ml-3 inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50">Next</a>
            </div>
            <div className="hidden sm:flex sm:flex-1 sm:items-center sm:justify-between">
              <div>
                <nav className="isolate inline-flex -space-x-px rounded-md shadow-sm" aria-label="Pagination">
                  <a href="#" className="relative inline-flex items-center rounded-l-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0">
                    <span className="sr-only">Previous</span>
                    <ChevronLeftIcon className="h-5 w-5" aria-hidden="true" />
                  </a>
                  <a href="#" aria-current="page" className="relative hidden items-center px-4 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0 md:inline-flex">1</a>
                  <a href="#" className="relative inline-flex items-center px-4 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0">2</a>
                  <a href="#" className="relative z-10 inline-flex items-center bg-indigo-600 px-4 py-2 text-sm font-semibold text-white focus:z-20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">3</a>
                  <span className="relative inline-flex items-center px-4 py-2 text-sm font-semibold text-gray-700 ring-1 ring-inset ring-gray-300 focus:outline-offset-0">...</span>
                  <a href="#" className="relative hidden items-center px-4 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0 md:inline-flex">10</a>
                  <a href="#" className="relative inline-flex items-center rounded-r-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0">
                    <span className="sr-only">Next</span>
                    <ChevronRightIcon className="h-5 w-5" aria-hidden="true" />
                  </a>
                </nav>
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-center my-2">
          <table className="table-auto">
            <thead>
              <tr className="bg-blue-100">
                <td>
                  <div className="inline-flex items-center">
                    <label className="relative flex items-center p-3 rounded-full cursor-pointer" htmlFor="blue">
                      <input type="checkbox" className="before:content[''] peer relative h-5 w-5 cursor-pointer appearance-none rounded-md border border-blue-gray-200 transition-all before:absolute before:top-2/4 before:left-2/4 before:block before:h-12 before:w-12 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-blue-gray-500 before:opacity-0 before:transition-opacity checked:border-blue-500 checked:bg-blue-500 checked:before:bg-blue-500 hover:before:opacity-10" id="blue" />
                      <span
                        className="absolute text-white transition-opacity opacity-0 pointer-events-none top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 peer-checked:opacity-100">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-3.5 w-3.5" viewBox="0 0 20 20" fill="currentColor"
                          stroke="currentColor" strokeWidth="1">
                          <path fillRule="evenodd"
                            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                            clipRule="evenodd"></path>
                        </svg>
                      </span>
                    </label>
                  </div>
                </td>
                <td className="uppercase">ID</td>
                <td className="uppercase">SHPIIFY #</td>
                <td className="uppercase">DATE</td>
                <td className="uppercase">STATUS</td>
                <td className="uppercase">CUSTOMER</td>
                <td className="uppercase">EMAIL</td>
                <td className="uppercase">COUNTRY</td>
                <td className="uppercase">SHIPPING</td>
                <td className="uppercase">SOURSE</td>
                <td className="uppercase">ODER TYPE</td>
                <td className="uppercase"></td>
              </tr>
            </thead>
            <tbody>
              {
                Data.map((row) => (
                  <tr key={row.id}>
                    <td>
                      <div className="inline-flex items-center">
                        <label className="relative flex items-center p-3 rounded-full cursor-pointer" htmlFor="blue">
                          <input type="checkbox" className="before:content[''] peer relative h-5 w-5 cursor-pointer appearance-none rounded-md border border-blue-gray-200 transition-all before:absolute before:top-2/4 before:left-2/4 before:block before:h-12 before:w-12 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-blue-gray-500 before:opacity-0 before:transition-opacity checked:border-blue-500 checked:bg-blue-500 checked:before:bg-blue-500 hover:before:opacity-10" id="blue" />
                          <span
                            className="absolute text-white transition-opacity opacity-0 pointer-events-none top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 peer-checked:opacity-100">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-3.5 w-3.5" viewBox="0 0 20 20" fill="currentColor"
                              stroke="currentColor" strokeWidth="1">
                              <path fillRule="evenodd"
                                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                clipRule="evenodd"></path>
                            </svg>
                          </span>
                        </label>
                      </div>
                    </td>
                    <td>{row.id}</td>
                    <td>{row["SHPIIFY #"]}</td>
                    <td>{row.DATE}</td>
                    <td>{row.STATUS}</td>
                    <td>{row.CUSTOMER}</td>
                    <td>{row.EMAIL}</td>
                    <td>{row.COUNTRY}</td>
                    <td>{row.SHIPPING}</td>
                    <td>{row.SOURSE}</td>
                    <td>{row["ODER TYPE"]}</td>
                    <td>
                      <Image
                        src="/edit.svg"
                        alt="Down arrow"
                        className="dark:invert"
                        width={20}
                        height={20}
                        priority
                      />
                    </td>
                  </tr>
                ))
              }
            </tbody>
          </table>
        </div>
      </div>
    </main>
  );
}
