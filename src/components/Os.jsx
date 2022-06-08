import React from 'react'
import styles from "./Os.module.css"

const Os = () => {
  return (
    <div >
      <h1>Mobile Operating System</h1>
      <ul className={styles.mainDiv}>
          <li>Android</li>
          <li>Blackberry</li>
          <li>iPhone</li>
          <li>Windows Phones</li>
      </ul>
      <h1>Mobile Manufacturers</h1>
      <ul className={styles.mainDiv}>
          <li>Samsung</li>
          <li>HTC</li>
          <li>Micromax</li>
          <li>Apple</li>
      </ul>
      
    </div>
  )
}

export default Os
