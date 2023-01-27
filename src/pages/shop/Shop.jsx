import React from 'react'
import './css/shop.css'
import Layout from '../../components/Layout'
import { Player } from '@lottiefiles/react-lottie-player'

const Shop = () => {
  return (
    <Layout>
      <div>
        <h1>Shop</h1>
      </div>
      <div className="w-100 d-flex">
        <div className="m-auto d-flex flex-column align-items-center">
          <Player
            autoplay
            loop
            src="https://assets5.lottiefiles.com/packages/lf20_nn8hue1i.json"
            style={{
              height: '400px',
              width: '400px',
              marginBottom: '-50px',
            }}
          />
          <h3>shop is coming soon</h3>
        </div>
      </div>
    </Layout>
  )
}

export default Shop
