import React, { useEffect, useState } from "react";
import FilterIcon from "../icons/FilterIcon";

const OptionsButton = ({
  country,
  fetchList,
  list,
  setCountry,
  fetchData,

}) => {

  const [isOpen, setIsOpen] = useState(false)

  const toggleIsOpen = () => {
    return setIsOpen(!isOpen)
}
  useEffect(() => {
    fetchList();
  }, []);

  useEffect(() => {
    fetchData()
    setIsOpen(false)
  }, [country]);

  return (
    <div className="relative">
      <div className="flex h-20 w-full bg-[#ebedee93]">
        <div className="flex items-center ml-40 gap-5">
          <button
            onClick={toggleIsOpen}
            className="bg-white text-black p-2 rounded-3xl shadow-lg flex items-center"
          >
            Filter <FilterIcon className="ml-2" />
          </button>
          <button className="bg-white text-black p-2 rounded-3xl shadow-lg flex items-center">
            Sort
          </button>
          <button className="bg-white text-black p-2 rounded-3xl shadow-lg flex items-center">
            Pure veg
          </button>
          <button className="bg-white text-black p-2 rounded-3xl shadow-lg flex items-center">
            Non veg
          </button>
        </div>
        
        {/* Dropdown Menu */}
        {isOpen ? (
          <div className="element absolute h-48 left-40 top-16 mt-1 w-42 bg-white rounded-lg shadow-lg p-4 overflow-scroll">
            <ul>
              {list?.map((listItem, index) => (
                <li key={index} className="flex items-center space-x-2">
                  <button className="bg-white rounded-lg shadow-sm p-1"
                  onClick={() => {
                    setCountry(listItem.strArea)
                  }}
                  >
                    <input
                      type="radio"
                      name="filter-option"
                      value={listItem.strArea}
                      checked={listItem.strArea === country}
                      className="h-3 w-3 mr-2 cursor-pointer"
                      onChange={(e) => setCountry(e.target.value)}
                    />

                    {listItem.strArea}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        ) : (
          ""
        )}
      </div>
    </div>
  );
};

export default OptionsButton;
