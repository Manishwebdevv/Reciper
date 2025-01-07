const Dialog = ({ dialogClose, data, isOpen }) => {
   
    return (
        <div>
            {isOpen && (
                <div className="fixed overflow-auto py-4 inset-0 min-h-screen bg-gray-500 bg-opacity-65">
                    <div className="element h-full bg-white p-2 text-gray-700 m-auto md:w-[60%] w-[90%] rounded-2xl flex flex-col overflow-auto">
                        <div className="h-60 w-full md:h-[300px] flex justify-center object-cover rounded-[15px] shadow-xl shadow-slate-600 mb-4 relative">
                            <img
                                src={data.strMealThumb}
                                className="w-full h-full rounded-lg shadow-2xl"
                            />
                            <div className="absolute right-0">
                          <button onClick={() => dialogClose()} 
                           className="flex font-bold justify-center text-lg bg-orange-500 text-white h-8 w-8 rounded-full"
                           >x</button>
                         </div>
                        </div> 
                        <div className="p-2">
                            <h2 className="text-2xl font-bold">{data.strMeal}</h2>
                            <h3 className="text-xl font-bold">
                                Country:{" "}
                                <span className="text-lg font-medium">{data.strArea}</span>
                            </h3>
                            <h3 className="text-xl font-bold">
                                Category:{" "}
                                <span className="text-lg font-medium">{data.strCategory}</span>
                            </h3>
                        </div>

                        <div className="p-3">
                            <h3 className="text-xl font-semibold mb-2">Instructions:</h3>
                            <p className="p-3">
                                {data?.strInstructions
                                    ?.split("\n")
                                    .map((instruction, index) => {
                                    return (
                                        <span key={index} className="font-sans text-lg">
                                           {instruction.trim()}
                                            <br />
                                        </span>
                                    )})}
                        
                            </p>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Dialog;
