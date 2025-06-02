import Image from 'next/image'
import React from 'react'
const profilePic = "https://wallpaperaccess.com/full/31202.jpg"
function AdminDashBoard() {
  return (
    <div>AdminDashBoard
       <Image
        src={profilePic}
        alt="Profile picture"
        width={200}
        height={200}
        priority // Loads immediately
      />
    </div>
    
  )
}

export default AdminDashBoard