import {useState} from 'react';

function Component1(props) {
    console.log(props);
    const lat = '52.52';
    const lng = '13.41';
    let [data, setData] = useState({'default':1});
    // fetch(`https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lng}&hourly=temperature_2m`)
    // .then( res=>res.json() )
    // .then(obj=>{
    //     //data=obj
    //     setData(obj)
    // });
    

    return(
        <div>hello world, {props.x}
        <pre>{JSON.stringify(data)}</pre>
        </div>
    )
}

export default Component1;