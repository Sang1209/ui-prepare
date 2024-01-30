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
          <Select id="sort"
                  onChange={(e) => dispatch(filterSlice.actions.sortFilterChange(e.target.value))}
                  value={filterList.sort}
          >
            <option value="New">New</option>
            <option value="Popular">Popular</option>
          </Select>
        </div>
      </div>
      <div className="flex flex-wrap gap-4 justify-center mb-4">
        {cardData.map((card, index) => (
          <Card key={index} title={card.title} image={card.image} href={card.href} date={card.date}
                category={card.category}/>
        ))}
      </div>
      <div className="flex items-center justify-center">
        <Pagination/>
      </div>
    </div>
  );
}

export default Events;