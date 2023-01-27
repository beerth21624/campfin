import React from 'react'
import Taskbar from './components/Taskbar'
import CardTrip from './components/CardTrip'
import Layout from '../../components/Layout'
import { useNavigate } from 'react-router-dom'

import Pagination from '@mui/material/Pagination'
import Stack from '@mui/material/Stack'

const Trip = () => {
  const navigate = useNavigate()
  return (
    <div className="p-5">
      <div className="d-flex flex-column align-items-center gap-3 justify-content-center">
        <div className="d-flex w-100 justify-content-between px-5 mx-5">
          <div className="ps-3 ">
            <h1 className="title-allTrip ms-3 ">ทริปทั้งหมด</h1>
          </div>
          <div className="pe-5">
            <button
              className="create-trip-btn "
              onClick={() => navigate('/create-trip')}
            >
              สร้างทริปของคุณเอง
            </button>
          </div>
        </div>

        <Taskbar />
      </div>
      <Layout>
        <div className="d-flex gap-4 flex-wrap">
          <CardTrip />
          <CardTrip />
          <CardTrip />
          <CardTrip />
        </div>
        <div className="d-flex justify-content-end mt-5">
          <Stack spacing={2}>
            <Pagination count={10} variant="outlined" shape="rounded" />
          </Stack>
        </div>
      </Layout>
    </div>
  )
}

export default Trip
