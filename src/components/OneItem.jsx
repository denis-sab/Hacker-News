

const OneItem=({item, index})=>{
    return(
        <li>
            <div className="numberBox"> {index+1} </div>
            <div className= "text">
            <h2> {item.title} </h2>
            <p> Number of comments {item.num_comments} </p>
            </div>
        </li>
    )
    }
    export default OneItem;