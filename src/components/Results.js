
const Results = (props) => {
    const { num,rightResult,wrongResult} = props;
    return ( 
        <div>
            <div className="num">
                <p>right number: {num}</p>
            </div>
            <div className="rightResult">
                <p>right result:</p>
                {/* {rightResult} */}
                {rightResult.map((item, index) => {
                    return (<div key={index} className="item">
                        {item}
                    </div>)
                })}
            </div>
            <div className="wrongResult">
                <p>wrong result:</p>
                {/* {wrongResult} */}
                {wrongResult.map((item,index)=>{
                   return (<div key={index} className="item">
                       {item}
                   </div>)
                })}
            </div>
        </div>
     );
}
 
export default Results;