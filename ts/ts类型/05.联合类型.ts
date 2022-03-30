{
    let t1: null = null
    t1 = 100

    let t2: number = 100
    t2 = null

    let t3: number | null | string = 100
    t3 = null
    t3 = 10
    t3 = "xx"

    let timer : null | number = null  // null
    timer = setTimeout(()=>{}, 100) // number
}
