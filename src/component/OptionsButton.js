import React, { useEffect, useState } from "react";
import FilterIcon from "../icons/FilterIcon";

const OptionsButton = ({ country, fetchList, list, setCountry, fetchData }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleIsOpen = () => {
    return setIsOpen(!isOpen);
  };
  useEffect(() => {
    fetchList();
  }, []);

  useEffect(() => {
    fetchData();
    setIsOpen(false);
  }, [country]);

  return (
    <div className="relative">
      <div className="flex h-30 sm:h-28 justify-center sm:justify-normal w-full py-8 bg-[#ebedee93]">
        <div className="flex flex-wrap justify-center sm:justify-end sm:items-center mx-3 sm:ml-40 gap-3 sm:gap-5">
          <button
            onClick={toggleIsOpen}
            className="bg-white h-10 sm:h-10 w-18 text-black px-4 sm:p-2 rounded-2xl sm:rounded-3xl shadow-lg flex items-center"
          >
            Filter <FilterIcon className="ml-2" />
          </button>
          <button className="bg-white text-black px-4 sm:p-2 rounded-3xl shadow-lg flex items-center">
            Sort By
          </button>
          <button className="bg-white text-black px-4 sm:p-2 rounded-3xl shadow-lg flex items-center">
            Pure veg
          </button>
          <button className="bg-white h-10 sm:h-10 w-18 text-black px-4 sm:p-2 rounded-3xl shadow-lg flex items-center">
            Non veg
          </button>
        </div>

        {/* Dropdown Menu */}
        {isOpen ? (
          <div className="element absolute h-48 left-10 sm:left-40 top-20 sm:top-16 mt-1 w-42 bg-white rounded-lg shadow-lg p-4 overflow-scroll">
            <ul>
              {list?.map((listItem, index) => (
                <li key={index} className="flex items-center space-x-2">
                  <button
                    className="bg-white rounded-lg shadow-sm p-1"
                    onClick={() => {
                      setCountry(listItem.strArea);
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
