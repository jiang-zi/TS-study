{
    // type Position1 = { dimension: number, longitude: number }
    // let p1:Position  = {dimension:116.2317, longitude: 39.5427}
    
    // type Position2 = number[] // 一个数组，只能放number的元素,并没有限制元素的个数

    // let p2:Position2 = [116.2317, 39.5427]
    // p2.push(100)

    let position2 : [number, number] = [116.2317, 39.5427]

    position2.push(100)

    function useState(abc: number): [number, (newAbc: number) => void]{ // [age, setAge]
        const fn = (newAbc: number) :void => {
            abc = newAbc
        }
        return [abc, fn ]
    }

    const [age, setAge] = useState(100)
    // setAge(200)
    setAge(100)
}