
const Button_btn = () => {
    return (
        <div>
            <button onClick={()=>alert("Yes")}> Click me</button>
            <h2 style={
                {
                    color: 'red'
                }
            }> Color</h2>
        </div>
    );  
};

export default Button_btn;