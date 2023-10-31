import React, {useEffect, useState} from 'react'

export default function products() {

    let [products,setProducts] = useState([]);

    const getProducts = async()=>{
        let response = await fetch ("https://fakestoreapi.com/products");
        let data = await response.json();
        setProducts(data);
    }

    useEffect( () =>{
        getProducts();
    }, [])

    // let [age,setAge] = useState(20);
    // const changeAge = (a)=>{
    //     setAge(a);
    // }
    // const getData = (name)=>{
    //     console.log(name);
    // }
  return (
    <div className='row'>
    {
        products.map ( (ele)=>{
            return <div className='col-md-4' key={ele.id}>
            <h2>{ele.title}</h2>
            <img src={ele.image} className='w-100'/>
            </div>
        })
    }
    
     {/* <h2>My name is {name}</h2>
     <h4>My age is {age}</h4>
     <button onClick={()=>changeAge(10)}>Click</button> */}
     {/* <button onClick={()=>getData("Jumana")}>Click</button> */}
    </div>
   
  )
}
