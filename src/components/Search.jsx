import { useState } from "react"

const Search = (props) => {
    const {
        searchMovies = Function.prototype
    } = props

    const [search, setSearch] = useState ('')
    // const [type, setType] = useState('all')

    const handleKey = (event) => {
        if (event.key === 'Enter') {
            searchMovies(search)
        }
    }

    return <div className="row">
        <div className="input-field">
            <input 
                className="validate"
                placeholder="search" 
                type="search" 
                onChange={(e) => setSearch(e.target.value)}
                value={search}           
                onKeyDown={handleKey}
            />
            <button className="btn search-btn"
                onClick={() => searchMovies(search)}
            > 
                Search
            </button>
        </div>
        {/* <div>
            <label>
                <input 
                    className="with-gap" 
                    name="type" 
                    type="radio" 
                    checked 
                />
                <span>All</span>
            </label>
            <label>
                <input 
                    className="with-gap" 
                    name="group3" 
                    type="radio" 
                    checked 
                />
                <span>Only movies</span>
            </label>
            <label>
                <input 
                    className="with-gap" 
                    name="group3" 
                    type="radio" 
                    checked 
                />
                <span>Only Serials</span>
            </label>
        </div> */}
  </div>
}

export {Search}