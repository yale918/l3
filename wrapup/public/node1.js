console.log("hello node1")


async function hello (){
  const test = await require('test')
  test()
}
hello()


/*
async function hello(){
  const {test} = await import('./node2.js')
test()
}
hello()
*/
/*
async function hello(){
  const {test} = await import('./node2.js')
  test()
}
hello()
*/
/*
window.onload = async function(){
  const {test} = await import('./node2.js')
test()
}
*/
/*
window.addEventListener('DOMContentLoaded', async () => {
  console.log("hello in listener")
  const {test} = await import('./node2.js')
  test()
})
*/