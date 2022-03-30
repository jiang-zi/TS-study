{
    type Stu = {
        name: string,
        gender: string,
        score: number
        height: number | string
        study(): void,
        play:() => void,
        age?: number
    }

    const stu1: Stu = {
        name: '小花',
        gender: '女',
        score: 100,
        height: 160,
        study(){console.log('xxx')},
        play:() => {console.log('play'); return {}}
    }

    // stu1.height
    

    // const stu2: {
    //     name: string,
    //     hello():void,
    //     run:()=> void,
    //     age?: number
    // } = {
    //     name: '小白',
    //     hello: function(){
    //         console.log('你好')
    //     },
    //     run: () => {
    //         console.log('run')
    //     }
    // }
}