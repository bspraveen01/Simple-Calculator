function First(){

    function Myfun(){
        alert('This is a funtional component')
    }

    return(
        <>
            <h1>Event Handling in functional component</h1>
            <button onClick={Myfun}>Click Me</button>
        
        </>
    );
}


export default First;