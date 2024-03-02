
const If_Else_Condition = () => {

    let marks = 80;
    return (
        <div>
             {marks>80? 
               <h1>brilliant Result </h1>
               :
               <h1>Avarge Result</h1> 
            }
        </div>
    );
};

export default If_Else_Condition;