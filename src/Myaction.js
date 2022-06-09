
// export const anotherName = (name) => {
//     return {
//         type:'CHANGE_NAME',
//         payload:name
//     }
// }


export const anotherName = () => {
    return async (dipatch) => {
    const data = await fetch('https://jsonplaceholder.typicode.com/users')
    const res2 = await data.json()
    dipatch({ type:'CHANGE_NAME',payload:res2[1].name })
    
    }
}