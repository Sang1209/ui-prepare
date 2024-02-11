"use client";

import React, {useEffect} from 'react';
import Card from "@/components/elements/Card";
import Pagination from "@/components/elements/Pagination";
import {cardData} from "@/lib/data";
import {Select} from "flowbite-react";
import FilterTag from "@/components/elements/FilterTag";
import {useDispatch, useSelector} from "react-redux";
import {filterSelector} from "@/redux/selectors";
import {AppDispatch} from "@/redux/store";
import filterSlice from "@/redux/features/filter-slice";

function Events() {

  const filterList = useSelector(filterSelector);
  const dispatch = useDispatch<AppDispatch>();

  return (
    <div className="flex flex-col gap-4 flex-1 py-4">
      <div className="mx-10 flex flex-col-reverse gap-4 justify-center items-center md:flex-row md:justify-between md:items-start">
        <div className="flex flex-wrap gap-2">
          {filterList.categories.map((filter, index) => (<FilterTag key={index} title={filter}/>))}
        </div>
        <div className="max-w-md w-full md:w-auto md:min-w-28">
          <select
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-transparent focus:border-gray-500 block w-full p-2.5 dark:bg-dark-0 dark:border-dark-800 dark:placeholder-gray-400 dark:text-gray-300 dark:focus:ring-transparent dark:focus:border-gray-500"
            onChange={(e) => dispatch(filterSlice.actions.sortFilterChange(e.target.value))}
            value={filterList.sort}
          >
            <option value="New">New</option>
            <option value="Popular">Popular</option>
          </select>
        </div>
      </div>
      <div className="flex flex-wrap gap-4 justify-center mb-4">
        {cardData.map((card, index) => (
          <Card key={index} title={card.title} image={card.image} href={card.href} date={card.date}
                category={card.category}/>
        ))}
      </div>
      <div className="flex items-center justify-center">
        <ul className="inline-flex -space-x-px text-sm">
          <li>
            <a href="#"
               className="flex items-center justify-center px-3 h-8 ms-0 leading-tight text-gray-500 bg-white border border-e-0 border-gray-300 rounded-s-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-dark-400 dark:border-dark-100 dark:text-gray-400 dark:hover:bg-dark-100 dark:hover:text-white customTransition">Previous</a>
          </li>
          <li>
            <a href="#"
               className="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-dark-400 dark:border-dark-100 dark:text-gray-400 dark:hover:bg-dark-100 dark:hover:text-white customTransition">1</a>
          </li>
          <li>
            <a href="#"
               className="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-dark-400 dark:border-dark-100 dark:text-gray-400 dark:hover:bg-dark-100 dark:hover:text-white customTransition">2</a>
          </li>
          <li>
            <a href="#" aria-current="page"
               className="flex items-center justify-center px-3 h-8 text-gray-500 border border-gray-300 bg-dark-0/20 hover:bg-gray-100 dark:border-dark-100 dark:bg-dark-100 dark:hover:bg-white/20 dark:text-white customTransition">3</a>
          </li>
          <li>
            <a href="#"
               className="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-dark-400 dark:border-dark-100 dark:text-gray-400 dark:hover:bg-dark-100 dark:hover:text-white customTransition">4</a>
          </li>
          <li>
            <a href="#"
               className="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-dark-400 dark:border-dark-100 dark:text-gray-400 dark:hover:bg-dark-100 dark:hover:text-white customTransition">5</a>
          </li>
          <li>
            <a href="#"
               className="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 rounded-e-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-dark-400 dark:border-dark-100 dark:text-gray-400 dark:hover:bg-dark-100 dark:hover:text-white customTransition">Next</a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Events;