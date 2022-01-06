import React,{useState} from 'react'
import List from './List'
import "./App.css"

const App = () => {
  const [data,setData] = useState("")
  const [list,setList] = useState([])

  let HandleChange = (e)=>{
    setData(e.target.value)
  }
  let HnadleDelete = (indexvalue)=>{
       const Deletelist = list.filter((todo,index)=>index != indexvalue)
       setList(Deletelist)
  }
  let HandleSubmit = (e) =>{
    e.preventDefault();
    const AllList =[...list,data];
    setList(AllList)
    setData("")
    console.log(list);
  }
  return (
    <div>
      <center>
        <h1>TODO LIST</h1>
        <form onSubmit={HandleSubmit} >
          <input size={30} type="text" name='data'value={data}onChange={HandleChange} /> &nbsp; &nbsp;
          <input type="submit" />
        </form>
        <List Todos={list} Delete={HnadleDelete}/>
      </center>
    </div>
  )
}

export default App
