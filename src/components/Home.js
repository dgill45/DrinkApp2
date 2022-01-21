import React from "react"




function Home(){

    /*const [drink, setDrink] = useState({})

    useEffect(() => {
        fetch("https://www.thecocktaildb.com/api/json/v1/1/random.php")
        .then((res) => res.json())
        .then((data) => {
            setDrink(data.drink)
        })
    }, []) */

        return(

        <div className="">
            <nav>
                <h1>Drink Recipes</h1>
                <h4>Find the perfect cocktail.
                    How do you wish to search?
                </h4>
                
              {/* By name: <Search />
                By ingredient: <Search >*/} 
            
            </nav>

            <div className="card-box">
                <div className="card" >
                    <img className="card-img-top" src="https://www.thecocktaildb.com/images/media/drink/2ahv791504352433.jpg/preview" alt="random drink" />
                <h2 className="card-title">

                </h2>
            
                </div>
            </div>

            <div className = "card" >
                <img className ="card-img-top" src='https://www.thecocktaildb.com/images/media/drink/2ahv791504352433.jpg/preview' alt="random drink" />
                <h2 className="card-title">Card title</h2>
                <div className="card_body">
                <div id ="toggle-content">

                </div>
                <ul className = "color">
                  {/*<!--<li></li>
                  <li></li>
                  <li></li>-->*/}
                </ul>
                <p clasName="card-text">
                    Some quick example text to build on the card
                    title and make up the bulk of the card's content.
                </p>
                <div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home;