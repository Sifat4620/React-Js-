
const If_else_condition_2 = () => {
    let marks =81;
    return (
        <div>
             {(()=>{
                 if(marks >80 && marks <100){
                    return <h1>A+</h1>
                 }
                 else if(marks >70 && marks <80){
                    return <h1>A-</h1>
                 }
                 else{
                    return <h1>F</h1>
                 }
             })()}
        </div>
    );
};

export default If_else_condition_2;