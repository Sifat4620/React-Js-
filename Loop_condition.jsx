const Loop_condition = () => {
    const city=['Dhaka','london','Uk','USA']
    return (
        <div>
            <ol>
                {
                   city.map((item,i)=>{
                         return <li key={i.toString()}>{item}</li>
                   })
                }
            </ol>
        </div>
    );
};

export default Loop_condition; 