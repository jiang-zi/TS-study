{
    let str1: string = 'hello TS' // 字符串类型
    str1 = '123'

    const str2 = 'hello TS'

    let str3: 'hello TS' = 'hello TS'
    // str3 = 'abc'
    // str2 = 'xxxx'

    // 将多个字面量类型组合成联合类型
    type Gender = 'girl' | 'boy'

    let g1:Gender = 'girl'


    type ActionType = 'add' | 'delete' | 'mod'

    function reducer(state: { }, ac: ActionType) {
        if(ac === 'delete') {

        } else if(ac === 'add') {

        } else if(ac === 'mod') {
            
        }
    }
}