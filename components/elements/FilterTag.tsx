import React from 'react';
import {IoCloseCircleOutline} from "react-icons/io5";
import {useDispatch} from "react-redux";
import {AppDispatch} from "@/redux/store";
import filterSlice from "@/redux/features/filter-slice";

interface FilterTagProps {
  title: string
}

function FilterTag({title}: FilterTagProps) {

  const dispatch = useDispatch<AppDispatch>();

  return (
    <div className="rounded-full border border-primary flex justify-between items-center text-center gap-2 px-3 py-2 customTransition hover:border-primary/40 select-none">
      <span className="text-primary text-sm font-HelveticaMedium">{title}</span>
      <IoCloseCircleOutline className="text-primary text-xl cursor-pointer customTransition hover:text-black"
                            onClick={() => dispatch(filterSlice.actions.categoryFilterRemove(title))}/>
    </div>
  );
}

export default FilterTag;