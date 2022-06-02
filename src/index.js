import React from 'react'
import styles from './styles.module.css'

export const ExampleComponent = ({ text }) => {
  return <div className={styles.test}>FooBar {text}</div>
}

export const Hello = () => {
  return <div>Helloworld</div>
}
