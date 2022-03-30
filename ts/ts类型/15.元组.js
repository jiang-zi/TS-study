{
    // type Position1 = { dimension: number, longitude: number }
    // let p1:Position  = {dimension:116.2317, longitude: 39.5427}
    // type Position2 = number[] // 一个数组，只能放number的元素,并没有限制元素的个数
    // let p2:Position2 = [116.2317, 39.5427]
    // p2.push(100)
    var position2 = [116.2317, 39.5427];
    position2.push(100);
    function useState(abc) {
        var fn = function (newAbc) {
            abc = newAbc;
        };
        return [abc, fn];
    }
    var _a = useState(100), age = _a[0], setAge = _a[1];
    // setAge(200)
    setAge(100);
}
