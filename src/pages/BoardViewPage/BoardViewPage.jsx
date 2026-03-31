import { useParams } from "react-router-dom";
import TopBar from "../../components/Header/TopBar";

function BoardViewPage({boards}){
    const { boardId } = useParams();
    
    const board = boards.find(
        (board) => board.id === Number(boardId)
    );
    
    if(!board){
        return <div>Board Not Found</div>
    }

    return(
        
        <>
            <div>
                <TopBar/>
            </div>
            <div  className="bg-blue-400 h-96">
                <h1>Sub different Header Area</h1>
            </div>
            <div className="h-full bg-purple-400">
                <h2>{board.name}</h2>
            </div>
        </>
    );
}

export default BoardViewPage;