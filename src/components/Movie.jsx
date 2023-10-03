const Movie = (props) => {
    const {
        imdbID,
        Title,
        Year,
        Type,
        Poster
    } =props
return <div id={imdbID} className="card">
    <div className="card-image">
        <img src= {Poster} alt="img"/>
        <span className="card-title">{Title}</span>
    </div>
    <div className="card-content">
        <p>{Year} <span className="right">{Type}</span></p> 
        
    </div>
</div>
}


export {Movie}