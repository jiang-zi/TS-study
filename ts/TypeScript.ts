{
    // 定义原始类型
    let a : number = 1
    let b: string = "2"
    b='20'
    console.log(a + b)

    // 定义 any 类型
    let c : any = 1
    c = ''

    // 定时器应用
    let timeId:null|number = null
    // timeId = setInterval(() => { }, 1000)
    console.log(setInterval(() => { }, 1000),'timeId')
    

    // 对象类型测试
    let aaa: object = () => { }
    aaa= {}
    let cc: Function = () => { }

    // 方法调用测试
    b.includes('2')

    // 数组类型别名
    type arrsn = Array<string | number>
    type arrsn2 = (string | number)[]
    let arr: arrsn = []
    let arr2: arrsn2 = []
    arr.push('1')
    arr.push(1)
    arr2.push('1')
    arr2.push(1)

    // 函数类型别名
    type Fn = (a: number, b: number) => number
    let add: Fn = (a,b)=>a+b 
    console.log(add(2, 2))

    // function 函数类型
    function add1(a: number, b: number): number{
        return a+b
    }
    function add2(a: number, b?: number):number{
        // return b&&a+b
        return b && a+b || 404
    }
    console.log(add2(1, 2), add2(1))
    
    // 对象类型
    let obj: {
        name?: string
        age:number
    } = {
        age:1
    }

    /* 
    案例
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
    // 对象类型别名
    type Stu = {
        name: string
        gender: string
        grade?: string | number
        height?: string | number
        study:(arr:string[])=>string[]
        play?:()=>void
    }
    // 学生1
    const study: Stu = {
        name: '张三',
        gender: '男',
        grade: '优秀',
        height: '1.75m',
        study:(arr)=>arr.map(it=>'TypeScript')
    }
    // 学生2
    const study1: Stu = {
        name: '李四',
        gender: '女',
        grade: 100,
        study: (arr) => arr.map(it => 'TypeScript'),
        play:()=>{console.log('敲代码')}
    }
    console.log(study.study(['php', 'java']))
    
    // 元组类型 useState 应用实现
    let useState = (b:number):[number,(c:number)=>void] => {
        return [b,(c:number):void=>{b=c}]
    }
    const [abc, setAbc] = useState(0)
    console.log(abc)
    setAbc(2)
    console.log(abc)
    
    // 案例 interface 继承的实现
    interface Istu  {
        name: string
        gender: string
        grade?: string | number
        height?: string | number
        study:(arr:string[])=>string[]
        play?:()=>void
    }
    interface Istud extends Istu {
        work:string
        hobby:[string,string,string]//元组
    }
    let study3: Istud = {
        name: '王五',
        gender: '男',
        work:'敲代码',
        study: (arr) => arr.map(it =>study3.work ),
        hobby:['抽烟','喝酒','烫头']
    }
    const newHobby = study3.study(study3.hobby)
    console.log(newHobby) // [ '敲代码','敲代码','敲代码' ]
 
    // 字面量类型
    type ActionType = 'GET_BOOKS' | 'ADD_BOOK' | 'DELET_BOOK'
    const reduser= (key:ActionType): string=> {
        switch (key) {
            case 'ADD_BOOK':
                return '添加成功'
            case 'DELET_BOOK':
                return '删除成功'
            case 'GET_BOOKS':
                return '获取成功'
            default:
                return '失败'
        }
    }
    console.log(reduser('GET_BOOKS')) // 获取成功
    
}