
export const tokenAuth = () =>{
  console.log(`Token generated at ${new Date()}`)
  return Math.floor(Math.random() * 1000)
}
