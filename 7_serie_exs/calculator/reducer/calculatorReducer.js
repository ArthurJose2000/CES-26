
export default function calculatorReducer(state = '', action){

    switch (action.type){
        case 'CLEAR':
            state = '';
            return state;
        case '0':
            return state + '0';
        case '1':
            return state + '1';
        case '2':
            return state + '2';
        case '3':
            return state + '3';
        case '4':
            return state + '4';
        case '5':
            return state + '5';
        case '6':
            return state + '6';
        case '7':
            return state + '7';
        case '8':
            return state + '8';
        case '9':
            return state + '9';
        case '.':
            return state + '.';
        case '+':
            return state + '+';
        case '-':
            return state + '-';
        case 'x':
            return state + 'x';
        case '/':
            return state + '/';
        case '=':
            if(state.indexOf('+') != -1){
                let numbers = state.split('+');
                if(numbers[0].indexOf('.') != -1 || numbers[1].indexOf('.') != -1){
                    state = (parseFloat(numbers[0]) + parseFloat(numbers[1])).toString();
                }
                else{
                    state = (parseInt(numbers[0]) + parseInt(numbers[1])).toString();
                }
                return state;
            }
            else if(state.indexOf('-') != -1){
                let numbers = state.split('-');
                if(numbers[0].indexOf('.') != -1 || numbers[1].indexOf('.') != -1){
                    state = (parseFloat(numbers[0]) - parseFloat(numbers[1])).toString();
                }
                else{
                    state = (parseInt(numbers[0]) - parseInt(numbers[1])).toString();
                }
                return state;
            }
            else if(state.indexOf('x') != -1){
                let numbers = state.split('x');
                if(numbers[0].indexOf('.') != -1 || numbers[1].indexOf('.') != -1){
                    state = (parseFloat(numbers[0]) * parseFloat(numbers[1])).toString();
                }
                else{
                    state = (parseInt(numbers[0]) * parseInt(numbers[1])).toString();
                }
                return state;
            }
            else if(state.indexOf('/') != -1){
                let numbers = state.split('/');
                if(numbers[0].indexOf('.') != -1 || numbers[1].indexOf('.') != -1){
                    state = (parseFloat(numbers[0]) / parseFloat(numbers[1])).toString();
                }
                else{
                    state = (parseInt(numbers[0]) / parseInt(numbers[1])).toString();
                }
                return state;
            }
            else{
                return state;
            }
        default: return state;
    }
}