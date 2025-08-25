import React from 'react'
import styles from "./InboxEmail.module.css"
import Button from '../UI/Button/Button'
import BgInbox from"../../assets/bg-inbox.png"

const InboxEmail = () => {
  return (
    <div className={styles.inbox} style={{
        backgroundImage:`url(${BgInbox})`
    }}>
        <h2>Deliciousness to your inbox</h2>
        <p>Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqut enim ad minim </p>
        <div className={styles.input}>
            <input type="email" placeholder='Your email address...'/>
            <Button text = "Subscribe"/>
        </div>
    </div>
  )
}

export default InboxEmail