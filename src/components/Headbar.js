import React from "react";
import { signOut, getAuth } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import firebaseApp from "../configs/firebaseApp";
import useSession from "../hooks/useSession";
import FavoriteIcon from '@mui/icons-material/Favorite'
import LogoutIcon from '@mui/icons-material/Logout'
import Swal from 'sweetalert2'
import '../App.css'

const Headbar = () => {
  const navigate = useNavigate()
  const { user, loading } = useSession()

  function changePage(page) {
    navigate(page)
  }

  const logOut = async () => {
    const auth = getAuth(firebaseApp)
    signOut(auth)
      .then(() => {
        window.location.reload()
      })
      .catch((error) => {
        // An error happened.
      })
  }

  const modelLogout = (index) => {
    Swal.fire({
      title: 'Do you want to sign out?',
      showDenyButton: false,
      showCancelButton: true,
      confirmButtonText: 'Yes',
      cancelButtonText: `No`,
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
        Swal.fire('success', '', 'success')
        logOut()
      } else if (result.isDenied) {
        Swal.fire('Changes are not saved', '', 'info')
      }
    })
  }
  return (
    <div className="headbar-container d-flex  align-items-baseline justify-content-between gap-3 px-5 pt-4 pb-2">
      <div className="d-flex">
        <h1 className="m-auto logo">CAMPFIN</h1>
      </div>
      <div className=" d-flex justify-content-center">
        <div className="d-flex gap-5">
          <p onClick={() => changePage('/')} className="menu">
            HOME
          </p>
          <p onClick={() => changePage('/trip')} className="menu">
            TRIP
          </p>
          <p className="menu" onClick={() => changePage('/community-all')}>
            COMMUNITY
          </p>
          <p className="menu" onClick={() => changePage('/about')}>
            ABOUT US
          </p>
          <p className="menu" onClick={() => changePage('/shop')}>
            SHOP
          </p>
        </div>
      </div>
      <div className="d-flex align-items-center gap-2">
        <FavoriteIcon style={{ cursor: 'pointer' }} />
        {!loading ? (
          <>
            {user ? (
              <div className="d-flex align-items-center gap-3">
                <span>sarawut inpol</span>
                <img
                  src="https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80"
                  alt=""
                  style={{
                    width: '40px',
                    height: '40px',
                    borderRadius: '50%',
                    objectFit: 'cover',
                    cursor: 'pointer',
                  }}
                  onClick={() => changePage('/profile')}
                />
                <LogoutIcon
                  style={{ cursor: 'pointer' }}
                  onClick={() => modelLogout()}
                />
              </div>
            ) : (
              //   <p onClick={() => logOut()} className="menu">
              //     LOGOUT
              //   </p>
              <button onClick={() => navigate('/login')} className="login-btn">
                LOGIN
              </button>
            )}
          </>
        ) : (
          ''
        )}
      </div>
    </div>
  )
}

export default Headbar;
