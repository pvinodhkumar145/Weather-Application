import React, { useState } from 'react'
import "./Home.css"
import axios from "axios"


const Home = () => {

  const [name,setName]=useState('')
  const [data, setData]=useState({
    celciuse:10,
    name:"german",
    humidity:10,
    speed:10,
    imagePath:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ2GGmpco4MXpi9UgRBq9kX9d1NPRw3NAewRs9cjqhh1BmyZwBR4Vc2OZOlY1vJVaooUME&usqp=CAU"
  
  })

 
const handleClick=()=>{
  if(name !== ""){
    const APIURL=`https://api.openweathermap.org/data/2.5/weather?q=${name}&appid=16bfa98849718de13b6e8978b87d47b8&unitts=metric`
    axios.get(APIURL)

    .then(res=> {
      let imagePath="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTRc5tQsSU1HiCJ_2ABB5PkiMVqRj-RRAV5FJfJhhjOHa9YDsoMaeFS_uV3rtef5MzJXKU&usqp=CAU";
      if(res.data.weather[0].main=== "Weather"){
      }else if(res.data.weather[0].main=== "Clear"){
        imagePath="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTR_UV3sZc-nAyTvGn5DHeOzaJODllNmbsIDDe4FbCs-FpYxniSqUZ3mvEEGOLdi4lJR7Y&usqp=CAU"
      }else if(res.data.weather[0].main=== "Rain"){
       imagePath="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRNVZaWiEgT_typcbwk83I_hOs__Iz2eWgYHQ&usqp=CAU"
      }else if (res.data.weather[0].main=== "Darizzie"){
        imagePath="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSpmck2JZJc5e9RLSSfmV0fW3Jetwt0y6CdwQ&usqp=CAU"
      }else if(res.data.weather[0].main=== "Mist"){
       imagePath="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTzoQsNEvBfw3L58OHTwPUQGvpOTV7-BZGlbA&usqp=CAU"
    }else if(res.data.weather[0].main=== "Clouds"){
      imagePath="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ2GGmpco4MXpi9UgRBq9kX9d1NPRw3NAewRs9cjqhh1BmyZwBR4Vc2OZOlY1vJVaooUME&usqp=CAU"
    }
  
      console.log(res.data)
      setData({...data,celciuse:res.data.main.temp,
        name: res.data.name,
        humidity:res.data.main.humidity,
        speed:res.data.wind.speed,
         image:imagePath
      })
  })
  .catch(err=>console.log(err))

  }
}

  return (
    <div className='container'>
      <center>
        <h1 className='tag'>Weather Application</h1>
        <div className='weather'>
          
            <input className='input' type="text" placeholder='Entar Name'  onChange={e=>setName(e.target.value)} value={data.id}/>
            <button className='btn'><img className='search' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQc9WvVhaI7F-VFJcntP1CYT0KRt3uiWBAJVQ&usqp=CAU"  onClick={handleClick}alt="" /></button>
            <div className='sun-weather'>
            <img className='sun' src={data.image}   />
            </div>

        </div>
        <div className='winfo'>
            <h5 className='index'>{Math.round(data.celciuse)}%</h5>
            <h3>{data.name}</h3>
        </div>
        <div className='detailes'>
          <div className='humidity'>
            <img className='humidity-img' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQe8ikxQ4P4q4QcA3RLPVzmC_qbiNzvvYF3jOpaVuXjLLznvjOFLD2bWnD7KOSQmcjc3hk&usqp=CAU" alt="" />
            <div><h5> {Math.round(data.humidity)}</h5>
            <h3>Humidity</h3></div>
          </div>
          <div className='wind'>
            <img className='wind-img' src="https://thumbnail.imgbin.com/12/4/5/imgbin-blue-particles-pzDhiyuGkKEajEup5SZrZrQdL_t.jpg" alt="" />
            <div>
              <h6> {Math.round(data.speed)}</h6>
            <h3>Wind</h3>
            </div>
          </div>

        </div>
        </center>

    </div>
  )
}

export default Home