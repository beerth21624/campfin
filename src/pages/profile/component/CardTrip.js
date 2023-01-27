import React from 'react'
import '../css/profile.css'
import { Button } from '@mui/material'
import PersonIcon from '@mui/icons-material/Person'
import FavoriteIcon from '@mui/icons-material/Favorite'
import LocationOnIcon from '@mui/icons-material/LocationOn'
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth'
import AccessTimeIcon from '@mui/icons-material/AccessTime'

import { useNavigate } from 'react-router-dom'

const CardTrip = () => {
  const navigate = useNavigate()

  const handleViewTrip = () => {
    navigate('/view-trip')
  }
  return (
    <div className="card-trip" onClick={() => handleViewTrip()}>
      <div className="image-card-trip"></div>
      <div className="detail">
        <p className="title">ทริปพักผ่อน ku startup</p>
      </div>
    </div>
  )
}

export default CardTrip
