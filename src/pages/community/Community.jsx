import React from 'react'
import Layout from '../../components/Layout'
import './css/community.css'

import { useTheme } from '@mui/material/styles'

import SendIcon from '@mui/icons-material/Send'
import ReactPlayer from 'react-player'
import PlayCircleOutlineIcon from '@mui/icons-material/PlayCircleOutline'
import PauseCircleOutlineIcon from '@mui/icons-material/PauseCircleOutline'
import FastForwardIcon from '@mui/icons-material/FastForward'
import FastRewindIcon from '@mui/icons-material/FastRewind'
import VolumeUpIcon from '@mui/icons-material/VolumeUp'
import VolumeOffIcon from '@mui/icons-material/VolumeOff'

const Community = () => {
  const [playing, setPlaying] = React.useState(true)
  const [volume, setVolume] = React.useState(0.3)
  const [musicIsPlay, setMusicIsPlay] = React.useState(1)
  const theme = useTheme()

  function handlePlay(status) {
    setPlaying(status)
  }
  const musicPlaylists = [
    {
      id: 1,
      name: 'camping1',
      url: 'https://www.youtube.com/watch?v=IJOx2iNesMg&t=307s',
    },
    {
      id: 2,
      name: 'camping2',
      url: 'https://www.youtube.com/watch?v=76QiADv_0_s',
    },
    {
      id: 3,
      name: 'camping3',
      url: 'https://www.youtube.com/watch?v=31-IT8U12CY&t=3844s',
    },
  ]

  function getUrlMusic() {
    for (let i = 0; i < musicPlaylists.length; i++) {
      if (musicIsPlay === musicPlaylists[i].id) {
        return musicPlaylists[i].url
      }
    }
  }
  function handleMusicNext() {
    if (musicIsPlay === musicPlaylists.length) {
      setMusicIsPlay(1)
    } else {
      setMusicIsPlay(musicIsPlay + 1)
    }
  }
  function handleMusicPrev() {
    if (musicIsPlay === 1) {
      setMusicIsPlay(musicPlaylists.length)
    } else {
      setMusicIsPlay(musicIsPlay - 1)
    }
  }
  function getMusicName() {
    for (let i = 0; i < musicPlaylists.length; i++) {
      if (musicIsPlay === musicPlaylists[i].id) {
        return musicPlaylists[i].name
      }
    }
  }

  return (
    <div className="community-container">
      <ReactPlayer
        style={{ display: 'none' }}
        playing={playing}
        volume={volume}
        loop={true}
        url={getUrlMusic()}
      />
      <div className="d-flex p-5">
        <div className="player-card">
          <div className="d-flex flex-column align-items-center gap-2">
            <img
              className="player-image"
              src="https://images.unsplash.com/photo-1592351763700-b9b35a6465ea?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
              alt="profile"
            />
            <p className="music-name">{getMusicName()}</p>
          </div>
          <div className="d-flex gap-2">
            {volume > 0 ? (
              <VolumeUpIcon
                onClick={() => setVolume(0.0)}
                className="player-icon-sub"
              />
            ) : (
              <VolumeOffIcon
                onClick={() => setVolume(0.3)}
                className="player-icon-sub"
              />
            )}

            <input
              type="range"
              min={0}
              max={1}
              step={0.02}
              value={volume}
              onChange={(event) => {
                setVolume(event.target.valueAsNumber)
              }}
            />
          </div>
          <div className="d-flex justify-content-center align-items-center">
            <FastRewindIcon
              className="player-icon-sub"
              onClick={() => handleMusicPrev()}
            />
            {playing ? (
              <PauseCircleOutlineIcon
                className="player-icon"
                onClick={() => handlePlay(false)}
              />
            ) : (
              <PlayCircleOutlineIcon
                className="player-icon"
                onClick={() => handlePlay(true)}
              />
            )}
            <FastForwardIcon
              className="player-icon-sub"
              onClick={() => handleMusicNext()}
            />
          </div>
        </div>
      </div>
      <div className="chat-container">
        <div className="profile-box">
          <img
            className="profile-image-chat"
            src="https://images.unsplash.com/photo-1571513721963-d855fd8df4c2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80"
            alt="profile"
          />
          <img
            className="profile-image-chat"
            src="https://images.unsplash.com/photo-1571513721963-d855fd8df4c2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80"
            alt="profile"
          />
          <img
            className="profile-image-chat"
            src="https://images.unsplash.com/photo-1571513721963-d855fd8df4c2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80"
            alt="profile"
          />
        </div>
        <div className="chat-box">
          <span className="right">dfkdjflkjds</span>
          <span className="left">dfkdjflkdfdfdfdfdfdfdfdfdfdfdfdfjds</span>
          <span className="left">dfkdjflkdfdfdfdfdfdfdfdfdfdfdfdfjds</span>
          <span className="left">dfkdjflkdfdfdfdfdfdfdfdfdfdfdfdfjds</span>
          <span className="right">dfkdjflkdfdfdfdfdfdfdfdfdfdfdfdfjds</span>
        </div>

        <div className="chat-input">
          <input type="text" placeholder="Type a message" />

          <SendIcon className="chat-send-btn" />
        </div>
      </div>
    </div>
  )
}

export default Community
