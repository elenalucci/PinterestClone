import {Link} from "react-router-dom";

function BoardCard({board}){
    return(
        <Link to={`/boards/${board.id}`}>
            <div>
                {board.name}
            </div>
        </Link>
    );
}

export default BoardCard;