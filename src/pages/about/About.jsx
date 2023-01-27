import React from 'react'
import { Player } from '@lottiefiles/react-lottie-player'
import './css/about.css'
import Layout from '../../components/Layout'

const About = () => {
  return (
    <Layout>
      <div className="d-flex justify-content-center ">
        <div className="about-container">
          <div className="">
            <img src="/images/hiking.jpg" className="image-about" />
          </div>
          <div className="d-flex flex-column align-items-center p-5 ">
            <div className="title mb-2">about campfin</div>
            {/* <div className="subtitle">Camphin service</div> */}
            <div className="description">
              Camphin is a community for people who dslove hiking and camping.
              We provide a platform for people to share their experience and
              knowledge. We also provide a feature that enables us to meet
              people from all around the world who share our passion in hiking
              and camping.
            </div>
            <div className="d-flex gap-2 mt-5">
              <div className="d-flex flex-column align-items-center service-box">
                <Player
                  autoplay
                  loop
                  src="https://assets8.lottiefiles.com/packages/lf20_UgZWvP.json"
                  style={{ height: '150px', width: '230px' }}
                />
                <div className="">location</div>
              </div>
              <div className="d-flex flex-column align-items-center service-box">
                <Player
                  autoplay
                  loop
                  src="https://assets3.lottiefiles.com/packages/lf20_AFxIPvJHjK.json"
                  style={{ height: '150px', width: '230px' }}
                />
                <div className="text-lg font-serif text-quaternary text-center">
                  comunity
                </div>
              </div>
              <div className="d-flex flex-column align-items-center service-box">
                <Player
                  autoplay
                  loop
                  src="https://assets1.lottiefiles.com/private_files/lf30_d92kodgw.json"
                  style={{ height: '150px', width: '230px' }}
                />
                <div className="text-lg font-serif text-quaternary text-center">
                  activity
                </div>
              </div>
              <div className="d-flex flex-column align-items-center service-box">
                <Player
                  autoplay
                  loop
                  src="https://assets4.lottiefiles.com/packages/lf20_7x83irfv.json"
                  style={{ height: '150px', width: '230px' }}
                />
                <div className="text-lg font-serif text-quaternary text-center">
                  security
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default About
