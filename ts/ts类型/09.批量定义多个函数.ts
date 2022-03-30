{

//   const add = (a:number,b:number):number =>{
//         return a + b
//   }
  
//   const sub = (a:number,b:number):number =>{
//         return a - b
//   }

  type Fn = (a:number,b:number) => number

  const add: Fn = (a, b)=> {
      return a + b
  }
  const sub: Fn = (a,b)=> {
    return a - b
  }  

//   add(1,'abc')

}