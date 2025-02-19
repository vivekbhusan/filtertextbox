import { useState, useEffect } from "react"

const App = ()=> {

  const [data, setData] = useState([]);
  const [filterData, setFilterData] = useState([]);
  const [searchData, setSearchData] = useState("");
  const apiUrl="https://jsonplaceholder.typicode.com/users";
  useEffect(() =>{
    fetch(apiUrl)
    .then((response) => response.json())
    .then((json)=> {
      setData(json);
      setFilterData(json);
    });
  },[]);

  function FilteredData(text){
    if(!text){
      setFilterData(data); //Reset if Search is empty
      return;
    }
    const fullFilterData = data.filter((item)=>
      item.name.toLowerCase().includes(text.toLowerCase())
    );
    setFilterData(fullFilterData);
  }
  return (
    <div>
        <input type="text" onChange={(event) => setSearchData(event.target.value)} />
        <button onClick={() => FilteredData(searchData)}>Search</button>
        <ul>
        {
          filterData.map((dat)=>(
            <li key ={dat.id}>{dat.name}</li>
           ))
        }
        </ul>
    </div>
  );
}

export default App;