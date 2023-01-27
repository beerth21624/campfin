import React from 'react'
import Layout from '../../components/Layout'
import './css/community.css'
import CommunityCard from './components/CommunityCardRoom'

const CommunityAllRoom = () => {
  return (
    <Layout>
      <div className="community-room">
        <div className="community-content">
          <h1 className="community-title">Community Room</h1>
        </div>
      </div>
      <div className="d-flex gap-3">
        <CommunityCard />
        <CommunityCard />
      </div>
    </Layout>
  )
}

export default CommunityAllRoom
