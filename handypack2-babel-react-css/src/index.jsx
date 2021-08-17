import styles from './index.css'
import React from 'react'
import ReactDOM from 'react-dom'

const Main = () => <h1 className={styles.main}>H1 JSX and SCSS! </h1>
const pos = document.querySelector('.root')

ReactDOM.render(Main(),pos)
/*
import React from 'react'
import ReactDOM from 'react-dom'

const hello = <h1>Hello JSX</h1>
const pos = document.querySelector('.root')

ReactDOM.render(hello,pos)
*/