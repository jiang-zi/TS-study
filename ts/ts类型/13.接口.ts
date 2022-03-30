{
    // 描述一个对象有两个方式: type, interface
    // type Stu = {
    //     name: string,
    //     gender: string,
    //     score: number
    //     height: number | string
    //     study(): void,
    //     play:() => void,
    //     age?: number
    // }

    type Fn = (a:number,b:number) => void

    interface IStu {
        name: string,
        gender: string,
        score: number
        height: number | string
        study(): void,
        play:() => void,
        age?: number
    }

    const stu1: IStu = {
        name: '小花',
        gender: '女',
        score: 100,
        height: 160,
        study(){console.log('xxx')},
        play:() => {console.log('play'); return {}}
    }

    
}