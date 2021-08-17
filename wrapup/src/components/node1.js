console.log("hello node2")


window.addEventListener('DOMContentLoaded', async () => {
  console.log("hello in listener")
  const {test} = await import('./node2.js')
  test()
})
