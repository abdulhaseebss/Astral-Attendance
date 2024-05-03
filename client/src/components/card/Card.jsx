// mera Code

import { useEffect, useState } from "react";
import axios from "axios";
// import SearchBar from "../dropdown/DropDown";
import DropDown from "../dropdown/DropDown";
import { useNavigate } from "react-router-dom";

import { sendData, updateDocument } from "../../config/firebase/firebaseMethod";
import { addDoc, collection } from "firebase/firestore";
import { db } from "../../config/firebase/firebaseConfig";

import { Link } from "react-router-dom";
// function card

const Card = () => {
  const [data, setData] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [arr , setArr] = useState([])
  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
    console.log("Search term:", event.target.value);
  };


// navigate function
const navigate = useNavigate()
  const navigateHis = (index, event) => {
    navigate('/SingleEmp', index)
    event.stopPropagation();
    console.log({"message": index});
  }

  const filteredData = data.filter((item) => {
    return item.title.toLowerCase().includes(searchTerm.toLowerCase());
  });

  
  // useEstata
  
  useEffect(() => {
    axios
    .get("https://fakestoreapi.com/products/")
    .then((res) => {
      
      // console.log("Filtered data:", res.data);
        setData(res.data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  // slice function

  const truncateTitle = (title) => {
    const words = title.split(" ");
    const truncatedWords = words.slice(0, 1);
    return truncatedWords.join(" ");
  };


  // Function to handle entrance button click
  const handleEntrance = async (index , docId) => {
    
    const newIndex = index + 1
    var mainData


    await axios.get(`https://fakestoreapi.com/products/${newIndex}`)
    .then((res)=>{

      mainData = res.data

      

    }).catch((err)=>{
      console.log(err);
    })
    
    console.log(mainData);

   
    

    const currentDate = new Date();
    const options = { weekday: "long" };
    const currentDay = new Intl.DateTimeFormat("en-US", options).format(
      currentDate
    );
    const currentTime = currentDate.toLocaleString();
    console.log("Entrance clicked on card with index:", newIndex);
    console.log("Current day:", currentDay);
    console.log("Current time:", currentTime);

    const newTime = currentTime.split(" ")[1]
    console.log(newTime);

    // sweet Alert

    // Swal.fire({
    //   position: "center",
    //   icon: "success",
    //   title: "Your attendence is done!",
    //   showConfirmButton: false,
    //   timer: 1500,
    // });



    const obj = {
      name: mainData.title,
      email: mainData.rating.count,
      entryTime: newTime,
      exitTime: "",
      role: mainData.category,
      day: currentDay
    }

    // sendData(obj , "user")
    // .then((res)=>{
    //   console.log(res);
    // }).catch((err)=>{
    //   console.log(err);
    // })

    const docRef = await addDoc(collection(db, "user"), obj);
    console.log("Document written with ID: ", docRef.id);
    obj.docId = docRef.id;
    console.log(obj);
    
  };

  // Function to handle exist button click
  const handleExist = async (index , docId) => {

    // const newIndexe = index + 1
    // const currentDate = new Date();
    // const options = { weekday: "long" };
    // const currentDay = new Intl.DateTimeFormat("en-US", options).format(
    //   currentDate
    // );
    // const currentTime = currentDate.toLocaleString();
    // console.log("Entrance clicked on card with index:", newIndexe);
    // console.log("Current day:", currentDay);
    // console.log("Current time:", currentTime);
    // // console.log("attendence:");

    
   
  };


  function goToAllMembers() {
    navigate("AllMembers")
  }

  

  // after the function

  return (
    <>
     <div className="justify-center flex items-center mt-5">

      <button className="bg-blue-600 text-lg font-semibold p-3 text-white rounded-lg mr-5 " onClick={goToAllMembers}>All Members</button>

     {/* <div className="justify-center flex items-center mt-5"> */}

     <div>
     <Link to="/table">
     <button>show table</button>
     </Link>
     </div>
     <div className="">
      <input
        type="text"
        placeholder="Search..."
        value={searchTerm}
        onChange={handleSearchChange} 
        className="outline-none bg-gray-100 p-3 border-none active::outline-none rounded-xl w-[20vw] mr-5"
      />
      </div>

      <div className="dropdown">
       
      <DropDown/>
      </div>
     </div>
      
      <div className="flex flex-wrap justify-evenly mt-28 gap-8 ">
        {filteredData.map((item, index) => (
          <div 
            className="px-10 flex justify-between cursor-pointer items-center w-[500px]  bg-white rounded-2xl main-card py-5 "
            key={item.id}
          >
            <div className="flex image1">
              <img 
                className="text-center mr-5 rounded-full w-44 h-44 border-[5px] border-[#55f8da]"
                src={item.image}
                alt=""
              />
            </div>
            <div className="image1 para leading-8 ">
              <p onClick={()=>navigateHis(index)} className="font-semibold text-blue-700 text-2xl">
                {truncateTitle(item.title)}
              </p>
              <p className="font-normal text-md">Today Date</p>
              <p className="font-medium">email: {item.rating.count}</p>
              <p className="font-medium">faculty: {item.category}</p>

              <button

                // className="bg-blue-600 p-2 mt-2 text-white  rounded-xl"
                onClick={() => handleEntrance(index , item.id)}

                className="bg-blue-600 px-5  py-2 mt-2 text-white  rounded-xl"
                // onClick={() => handleEntrance(index)}

              >
                Entrance
              </button>
              <button

                // className="bg-red-600 p-2 text-white mt-2 ml-2 rounded-xl"
                onClick={() => handleExist(index , item.id)}

                className="bg-red-600 px-8 py-2 text-white mt-2 ml-2 rounded-xl"
                // onClick={() => handleExist(index)}

              >
                Exist
              </button>

              
            </div>
          
          </div>
        ))}
      </div>
    </>
  );
};

export default Card;
