import React from 'react'
import './css/profile.css'
import Layout from '../../components/Layout'
import CardTrip from './component/CardTrip'
const Profile = () => {
  const [activityArr, setActivityArr] = React.useState([
    'แคมปิ้ง',
    'เที่ยวเมือง',
    'ถ่ายรูป',
    'เล่นเกม',
    'อ่านหนังสือ',
  ])
  return (
    <Layout>
      <div className="profile-container">
        <div className="profile-content">
          <h1 className="profile-title">Profile</h1>
        </div>
        <div className="row mt-5">
          <div className="col-4">
            <img
              className="profile-img"
              src="https://images.unsplash.com/photo-1541130292430-a832637ddc0d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1095&q=80"
              alt=""
            />
          </div>
          <div className="col-8 d-flex justify-content-center ">
            <div className="m-auto d-flex flex-column gap-4 ">
              <div className="profile-name">John Doe</div>
              <div className="profile-desc">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Quisquam Lorem ipsum dolor sit amet consectetur adipisicing
                elit. Quisquam Lorem ipsum dolor sit amet consectetur
                adipisicing elit. Quisquam
              </div>
              <div>
                <div className="profile-activity">
                  {activityArr.map((activity) => {
                    return (
                      <div className="profile-activity-item">{activity}</div>
                    )
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="trip-box">
          <span className="title">ทริปที่เข้าร่วม</span>
          <div className="d-flex gap-3 flex-wrap">
            <CardTrip />
            <CardTrip />
            <CardTrip />
            <CardTrip />
            <CardTrip />
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default Profile
