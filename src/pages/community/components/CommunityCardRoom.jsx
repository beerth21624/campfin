import React from 'react'
import '../css/community.css'
import { useNavigate } from 'react-router-dom'

const CommunityCardRoom = () => {
  const navigate = useNavigate()
  return (
    <div className="community-trip" onClick={() => navigate('/community')}>
      <img
        className="image-community-trip"
        src="https://i.ytimg.com/vi/31-IT8U12CY/maxresdefault.jpg"
        alt=""
      />
      <div className="detail">
        <p className="title">ทริปพักผ่อน ku startup</p>
      </div>
    </div>
  )
}

export default CommunityCardRoom
