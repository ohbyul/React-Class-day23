//액션 생성
const INCRESE = 'counter/INCRESE'
const DECRESE = 'counter/DECRESE'
const CHANGE_COLOR = 'counter/CHANGE_COLOR'

//액션 내보내기
export const increse = () => ( { type : INCRESE })
export const decrese = () => ( { type : DECRESE })
export const changeColor = ( color ) => ( { type : CHANGE_COLOR , color })

//초기화
const initialState = {
    number :1 ,
    color : 'tomato'
}

//리듀서
const counter = (state = initialState , action ) => {
    switch(action.type){
        case INCRESE :
            return {
                ...state,
                number : state.number + 1
            }
        case DECRESE :
            return {
                ...state,
                number : state.number - 1
            }
        case CHANGE_COLOR :
            return {
                ...state,
                color : action.color
            }
        default : 
            return state
    }
}

export default counter;