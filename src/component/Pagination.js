import { useEffect } from "react";

const Pagination = ({
  backWard,
  moveForward,
  totalPages,
  handlePageChange,
  currentPage,
  country,
  setCurrentPage,
}) => {
  
  useEffect(() => {
    setCurrentPage(1);
  }, [country]);

  return (
    <div className="sm:h-30 sm:w-full bg-[#ebedee93]">
      <div className="flex flex-wrap justify-end mx-12 sm:pr-40 gap-2 py-6">
        <button
          onClick={backWard}
          className="h-8 font-bold w-8 text-xl rounded-lg bg-orange-500 border-2 border-orange-500 text-white transform rotate-180"
        >
          ➜
        </button>

        {Array.from({ length: totalPages }, (_, index) => (
          <button
            className={`h-8 font-bold w-8 text-xl rounded-lg
                ${
                  currentPage === index + 1
                    ? "bg-orange-500 text-white border-2 border-orange-500"
                    : "border-orange-500 text-[#FC8112] border-2"
                }`}
            key={index + 1}
            onClick={() => handlePageChange(index + 1)}
          >
            {index + 1}
          </button>
        ))}

        <button
          onClick={moveForward}
          className="h-8 font-bold w-8 text-xl rounded-lg bg-orange-500 border-2 border-orange-500 text-white"
        >
          ➜
        </button>
      </div>
    </div>
  );
};

export default Pagination;
