import React from 'react'
import '../App.css'

const Userinfo = () => {
  const userData={
    "name":"Rahul",
    "image":"https://img.freepik.com/free-photo/young-bearded-man-with-striped-shirt_273609-5677.jpg?semt=ais_hybrid&w=740",
    "age":24,
    "dob":"23/04/2002",
    "phone":"874512355",
    "email":"tajinnnnnn@gmail.com",
  }
  return (
    <div>
      <h2 style={{textAlign:"center",fontSize:"2.6rem"}}>User Info</h2>
      <div className='userinfo-cont'>
        <img src={userData.image} alt="" height="240rem" width="300rem"/>
       <center> <h2 className='user-info-heading'>Name :{userData.name}</h2></center>
       <center> <h2 className='user-info-heading'>Age :{userData.age}</h2></center>
       <center> <h2 className='user-info-heading'>DOB :{userData.dob}</h2></center>
       <center> <h2 className='user-info-heading'>Phone :{userData.phone}</h2></center>
       <center> <h2 className='user-info-heading'>Email :{userData.email}</h2></center>

      </div>
    </div>
  )
}

export default Userinfo
