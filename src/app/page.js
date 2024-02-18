import Image from "next/image";
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/20/solid'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col p-[60px]">
      <div className="drop-shadow-lg rounded-3xl bg-white mx-2">
        <form action="" className="flex flex-row p-3 justify-between">
          <div>
            <label htmlFor="search">What are you looking for ?</label>         
            <input type="text" id="search" name="search" className="w-full bg-gray-100 rounded-lg border bg-opacity-50 border-gray-300 focus:ring-2 focus:ring-indigo-200 focus:bg-transparent focus:border-indigo-500 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" placeholder="Search for category, name, company , etc"></input>
          </div>
          <div>
            <label htmlFor="catagory">Catagory</label>
            <select id="catagory" name="catagory" className="w-full bg-gray-100 rounded-lg border bg-opacity-50 border-gray-300 focus:ring-2 focus:ring-indigo-200 focus:bg-transparent focus:border-indigo-500 text-base outline-none text-gray-700 p-2 mt-1 leading-8 transition-colors duration-200 ease-in-out">
              <option value="All">All</option>
            </select>
          </div>
          <div>
            <label htmlFor="status">Status</label>         
            <select id="status" name="status" className="w-full bg-gray-100 rounded-lg border bg-opacity-50 border-gray-300 focus:ring-2 focus:ring-indigo-200 focus:bg-transparent focus:border-indigo-500 text-base outline-none text-gray-700 p-2 mt-1 leading-8 transition-colors duration-200 ease-in-out">
              <option value="All">All</option>
            </select>
          </div>
          <div className="mt-9">
            <button class="inline-flex items-center bg-gray-100 border-0 py-2 px-3 focus:outline-none hover:bg-gray-200 rounded-lg text-base mt-10 md:mt-0 ">
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
          <div className="mt-9">       
            <button class="inline-flex items-center bg-blue-600 border-2 py-2 px-3 focus:outline-none hover:bg-blue-200 rounded-lg text-white mt-10 md:mt-0 uppercase border-slate-950 ">Search</button>
          </div>
        </form>
      </div>
      <div className="drop-shadow-lg rounded-3xl bg-white my-2 flex flex-row p-3 justify-between">
        <p className="w-full">Product Summary</p>
        <div className="flex flex-row w-full">
          <label htmlFor="show"className="pt-2">Show</label>         
          <select id="show" name="show" className="w-full bg-gray-100 rounded-lg border bg-opacity-50 border-gray-300 focus:ring-2 focus:ring-indigo-200 focus:bg-transparent focus:border-indigo-500 text-base outline-none text-gray-700 p-2 mt-1 leading-8 transition-colors duration-200 ease-in-out mx-3">
            <option value="All column">All column</option>
            <option value="Date">Date</option>
            <option value="Status">Status</option>
            <option value="Customer">Customer</option>
            <option value="Email">Email</option>
            <option value="Country">Country</option>
            <option value="Shiping">Shiping</option>
            <option value="Source">Source</option>
            <option value="Order type">Order type</option>
          </select>
        </div>        
        <button class="items-center bg-blue-600 border-0 py-2 px-3 focus:outline-none hover:bg-blue-300 rounded-lg text-white mt-10 md:mt-0 uppercase w-1/2">Dispatch Selected</button>
        {/* Pagination */}
        <div className="flex items-center justify-between border-t border-gray-200 bg-white px-4 py-3 sm:px-6">
      <div className="flex flex-1 justify-between sm:hidden">
        <a
          href="#"
          className="relative inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50"
        >
          Previous
        </a>
        <a
          href="#"
          className="relative ml-3 inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50"
        >
          Next
        </a>
      </div>
      <div className="hidden sm:flex sm:flex-1 sm:items-center sm:justify-between">
        <div>
        </div>
        <div>
          <nav className="isolate inline-flex -space-x-px rounded-md shadow-sm" aria-label="Pagination">
            <a
              href="#"
              className="relative inline-flex items-center rounded-l-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
            >
              <span className="sr-only">Previous</span>
              <ChevronLeftIcon className="h-5 w-5" aria-hidden="true" />
            </a>
            {/* Current: "z-10 bg-indigo-600 text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600", Default: "text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:outline-offset-0" */}
            <a
              href="#"
              aria-current="page"
              className="relative z-10 inline-flex items-center bg-indigo-600 px-4 py-2 text-sm font-semibold text-white focus:z-20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              1
            </a>
            <a
              href="#"
              className="relative inline-flex items-center px-4 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
            >
              2
            </a>
            <a
              href="#"
              className="relative hidden items-center px-4 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0 md:inline-flex"
            >
              3
            </a>
            <span className="relative inline-flex items-center px-4 py-2 text-sm font-semibold text-gray-700 ring-1 ring-inset ring-gray-300 focus:outline-offset-0">
              ...
            </span>
            <a
              href="#"
              className="relative hidden items-center px-4 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0 md:inline-flex"
            >
              10
            </a>
            <a
              href="#"
              className="relative inline-flex items-center rounded-r-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
            >
              <span className="sr-only">Next</span>
              <ChevronRightIcon className="h-5 w-5" aria-hidden="true" />
            </a>
          </nav>
        </div>
      </div>
    </div>
      </div>
    </main>
  );
}
