
const Cards = ({ pagedCard }) => {

  return (
    <div className="bg-[#ebedee93]">
    <div className="flex flex-wrap p-4 justify-center gap-6 text-nowrap overflow-hidden">
        {pagedCard?.map((card) => {
          return ( 
            <div key={card.idMeal}>
               {/* <Link to={`/card/${card.idMeal}`}> */}
                <div className="h-56 w-72 p-3 shadow-sm rounded-md">
                   <img src={card.strMealThumb} alt={card.strMeal} className="h-44 w-72 rounded-md" />
                   <h1 className="font-bold p-1 text-gray-700 text-xl overflow-hidden">{card.strMeal}</h1>
                </div>
                {/* </Link> */}
            </div>
          )
        })}
    </div>
    </div>
  )
}

export default Cards