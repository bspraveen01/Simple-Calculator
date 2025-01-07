import React from 'react';

class Second extends React.Component{
    constructor(){
        super()
        this.state={
            msg:"Please Subscribe"
        }
    }

    changeMessage(){
        this.setState({
            msg:"Thanks for subscribing"
        })
       
    }

    render(){
        return(
            <>
                <h1>{this.state.msg}</h1>
                <button onClick={()=>this.changeMessage()}>Subscribe</button>
            </>
        );
    }
}

export default Second;