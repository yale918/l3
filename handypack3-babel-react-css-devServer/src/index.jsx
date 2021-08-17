import React from 'react'
import ReactDOM from 'react-dom'

import styles from './index.scss'

const test = ()=> <h1 className={styles.main}>Hello SASS<p className={styles.point}>test p</p></h1>



//const hello = <h1>Hello ,World</h1>
const hello1 = React.createElement('h1',null,'Hello ReactElement')
const pos = document.querySelector('.root')
//ReactDOM.render(hello,pos)
ReactDOM.render(test(),pos)



/*
for(let i=0;i<10;i++){
  console.log(i)
}
*/