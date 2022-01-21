import React from "react"


function Search(){

    return(

        <div>
            <form id='drinkapp-form'>
                <input id='search' type='text' name='search' placeholder="Margarita" />
                <input id ='submit-button' type='submit' name='submit' />
            </form>
        </div>
    )
}

export default Search;