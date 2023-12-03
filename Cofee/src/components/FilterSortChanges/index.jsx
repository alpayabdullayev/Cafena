import React from "react";

const FilterSortChanges = ({data,setData}) => {


    const handleSortChange = (e) => {
        const sortType = e.target.value;
      
        if (sortType === 'rating') {
          ratingSort();
        } else if (sortType === 'az') {
          ratingSortAz();
        }
      };

    const ratingSort = () => {
        const sortedData = [...data].sort((a, b) => (b.rating > a.rating ? 1 : a.rating > b.rating ? -1 : 0));
        setData(sortedData);
      };


    const ratingSortAz = () => {
        const sortedData = [...data].sort((a, b) => (a.rating > b.rating ? 1 : b.rating > a.rating ? -1 : 0));
        setData(sortedData);
      };
  return (
    <>
      <select name="" id="" onChange={(e) => handleSortChange(e)} value="">
      <option value="">Short By New</option>
        <option value="rating">The most Rating</option>
        <option value="az">Short by New az rating</option>
      </select>
    </>
  );
};

export default FilterSortChanges;
