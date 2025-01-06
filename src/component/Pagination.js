const Pagination = ({
  backWard,
  moveForward,
  totalPages,
  handlePageChange,
  currentPage,
}) => {
  return (
    <div className="bg-[#ebedee93] h-30 w-full pt-2">
      <div className="flex justify-end pr-40 gap-2">
        <button
          onClick={backWard}
          className="h-8 font-bold w-8 text-xl rounded-lg bg-orange-500 border-2 border-orange-500 text-white transform rotate-180"
        >➜</button>

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
        >➜</button>
      </div>
    </div>
  );
};

export default Pagination;
