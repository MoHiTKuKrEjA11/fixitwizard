import React,{ useState} from 'react'
import './Forms.css'
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';
function Forms() {
  const[userData,setUserData]=useState(
    {
      name:"",
      phoneNo:"",
      technologiesKnown:"",
    }
  );
  const postUserData =(event)=>{
    let name=event.target.name;
    let value=event.target.value;

    setUserData({...userData,[name]:value})
  }

const submit=async (event)=>{
event.preventDefault();
const {
  name,
  phoneNo,
  technologiesKnown
}=userData;
const res=await fetch(`https://fixitwizards-default-rtdb.firebaseio.com/${userData.name}.json`,
{
method : "POST",
headers : {
  "Content-Type":"application/json",
},
body:JSON.stringify({
  name,
  phoneNo,
  technologiesKnown
}),
}
);
if(res)
{
  alert("data store hogaya");
  console.log(userData);
}else{
  alert("please fi;; the data");
}
};

  return (
    <>
    <Navbar />
    <div className='forms'>
    <h1 className='formsh1'>Please Enter your Details</h1>
    <div action="" className='formsdiv' method='POST'>
        <label htmlFor="fname" className='formslabel'>Name :</label>
        <input className='formsinput' type="text" id="fname" name="name" placeholder="Enter your Name" value={userData.name} onChange={postUserData}/>
        <label htmlFor="num" className='formslabel'>Phone No.</label>
        <input className='formsinput' type="number" id="num" name="phoneNo" placeholder="Enter Your phone number" value={userData.phoneNo} onChange={postUserData} />
        <label htmlFor="tech" className='formslabel'>Technologies Known</label>
        <input className='formsinput' type="text" id="tech" placeholder="Please Enter technologies you known" name="technologiesKnown" value={userData.technologiesKnown} onChange={postUserData} />
    </div>
    <button className='formsbutton' onClick={submit}>Submit</button>
    </div>
    <Footer />  
    </>
  )
}

export default Forms
