import React from 'react'
import '../css/trip.css'
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
        <div className="d-flex align-items-center gap-2">
          <LocationOnIcon />
          <span className="desc">กาญจนบุรี</span>
        </div>
        <div className="d-flex align-items-center gap-2">
          <CalendarMonthIcon />
          <span className="desc"> 11 สิงหาคม 2021</span>
        </div>
        <div className="d-flex align-items-center gap-2">
          <AccessTimeIcon />
          <span className="desc">5 วัน 4 คืน</span>
        </div>
        <div className="d-flex justify-content-between px-0 pt-2">
          <div className="d-flex align-items-center gap-2">
            <PersonIcon />
            <span className="desc">5 / 30</span>
          </div>
          <div className="price-container">
            <span>720 ฿</span>
            <span>/ต่อคน</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CardTrip
