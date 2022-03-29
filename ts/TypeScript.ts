{
    let a : number = 1
    let b: string = "2"
    b='20'
    console.log(a + b)
    let c : any = 1
    c = ''
    let timeId = null
    timeId = setInterval(() => { }, 1000)
    let aaa: object = () => { }
    aaa= {}
    let cc: Function = () => { }
    b.includes('2')
    type arrsn = Array<string | number>
    type arrsn2 = (string | number)[]
    let arr: arrsn = []
    let arr2: arrsn2 = []
    arr.push('1')
    arr.push(1)
    arr2.push('1')
    arr2.push(1)
    type Fn = (a: number, b: number) => number
    let add: Fn = (a,b)=>a+b 
    console.log(add(2, 2))
    function add1(a: number, b: number): number{
        return a+b
    }
    function add2(a: number, b?: number):number{
        // return b&&a+b
        return b && a+b || 404
    }
    console.log(add2(1,2),add2(1))
    let obj: {
        name?: string
        age:number
    } = {
        age:1
    }

    /* 
    创建两个对象：
    学生对象

    指定对象的类型
    - 姓名
    - 性别
    - 成绩
    - 身高
    - 学习（）
    - 打游戏（）
    */
    type Stu = {
        name: string
        gender: string
        grade?: string | number
        height?: string | number
        study:(arr:string[])=>string[]
        play?:()=>void
    }
    const study: Stu = {
        name: '张三',
        gender: '男',
        grade: '优秀',
        height: '1.75m',
        study:(arr)=>arr.map(it=>'TypeScript')
    }
    const study1: Stu = {
        name: '李四',
        gender: '女',
        grade: 100,
        study: (arr) => arr.map(it => 'TypeScript'),
        play:()=>{console.log('敲代码')}
    }
    console.log(study.study(['php','java']))
    let useState = (b:number):[number,(c:number)=>void] => {
        return [b,(c:number):void=>{b=c}]
    }
    const [abc, setAbc] = useState(0)
    console.log(abc)
    setAbc(2)
    console.log(abc)
    
    
}