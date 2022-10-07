import React from 'react'

class Component2 extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            data:{default:1}
        };
    }

    handleFetch(){
        fetch(`https://api.open-meteo.com/v1/forecast?latitude=52.52&longitude=13.41&hourly=temperature_2m`)
    .then( res=>res.json() )
    .then( data =>{
        this.setState({data})
    });
    }

    componentDidMount(){
        console.log('didMount!')
        this.handleFetch();
    }

    sampleFetch(){
        
    }

    componentDidUpdate(){

    }

    render(){
        return(
            <div>hello comp2, {this.props.x}
            <pre>{JSON.stringify(this.state.data)}</pre>
            </div>
        )
    }
}

export default Component2