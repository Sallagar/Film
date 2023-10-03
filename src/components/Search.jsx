import { useState } from "react"

const Search = (props) => {
    const [search, setSearch] = useState ('')

    return <div className="row">
        <div className="input-field">
            <input 
                className="validate"
                placeholder="search" 
                type="search" 
                onChange={(e) => setSearch(e.target.value)}
                value={search}           
            />
            <button className="btn search-btn">Search</button>
        </div>
        <div>
            <label>
                <input 
                    className="with-gap" 
                    name="group3" 
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
        </div>
  </div>
}

export {Search}