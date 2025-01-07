
const Cards = ({ pagedCard, onClick }) => {

  return (
    <div className="bg-[#ebedee93]">
    <div className="flex flex-wrap min-h-screen p-4 justify-center gap-3 text-nowrap overflow-hidden">
        {pagedCard?.map((card) => {
          return ( 
            <div key={card.idMeal} onClick={() => onClick(card.idMeal)}>
                <div className="h-64 w-80 p-3 shadow-sm rounded-md mb-5">
                   <img src={card.strMealThumb} alt={card.strMeal} className="h-52 w-80 rounded-2xl" />
                   <h1 className="font-bold p-1 text-gray-700 text-xl overflow-hidden">{card.strMeal}</h1>
                </div>
            </div>
          )
        })}
    </div>
    </div>
  )
}

export default Cards