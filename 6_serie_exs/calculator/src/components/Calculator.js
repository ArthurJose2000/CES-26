import React from 'react';
import {useSelector, useDispatch} from 'react-redux';

function Calculator(props) {

    const display = useSelector((state) => {return state});

    const dispatch = useDispatch();

    return (
        <div className="main" style={styles.main}>
            <div className="calculatorContainer" style={styles.calculatorContainer}>
                Calculadora
                <div className="header" style={styles.header} id="display">
                    {display}
                </div>
                <button className="bodyRowElement" style={styles.clearbutton} onClick={() => {dispatch({type: 'CLEAR'})}}>
                    C
                </button>
                <div className="bodyContainer">
                    <div className="bodyRowContainer" style={styles.bodyRowContainer}>
                        <button className="bodyRowElement" style={styles.bodyRowElement} onClick={() => {dispatch({type: '7'})}}>
                            7
                        </button>
                        <button className="bodyRowElement" style={styles.bodyRowElement} onClick={() => {dispatch({type: '8'})}}>
                            8
                        </button>
                        <button className="bodyRowElement" style={styles.bodyRowElement} onClick={() => {dispatch({type: '9'})}}>
                            9
                        </button>
                        <button className="bodyRowElement" style={styles.bodyRowElement} onClick={() => {dispatch({type: '/'})}}>
                            /
                        </button>
                    </div>
                    <div className="bodyRowContainer" style={styles.bodyRowContainer}>
                        <button className="bodyRowElement" style={styles.bodyRowElement} onClick={() => {dispatch({type: '4'})}}>
                            4
                        </button>
                        <button className="bodyRowElement" style={styles.bodyRowElement} onClick={() => {dispatch({type: '5'})}}>
                            5
                        </button>
                        <button className="bodyRowElement" style={styles.bodyRowElement} onClick={() => {dispatch({type: '6'})}}>
                            6
                        </button>
                        <button className="bodyRowElement" style={styles.bodyRowElement} onClick={() => {dispatch({type: 'x'})}}>
                            x
                        </button>
                    </div>
                    <div className="bodyRowContainer" style={styles.bodyRowContainer}>
                        <button className="bodyRowElement" style={styles.bodyRowElement} onClick={() => {dispatch({type: '1'})}}>
                            1
                        </button>
                        <button className="bodyRowElement" style={styles.bodyRowElement} onClick={() => {dispatch({type: '2'})}}>
                            2
                        </button>
                        <button className="bodyRowElement" style={styles.bodyRowElement} onClick={() => {dispatch({type: '3'})}}>
                            3
                        </button>
                        <button className="bodyRowElement" style={styles.bodyRowElement} onClick={() => {dispatch({type: '-'})}}>
                            -
                        </button>
                    </div>
                    <div className="bodyRowContainer" style={styles.bodyRowContainer}>
                        <button className="bodyRowElement" style={styles.bodyRowElement} onClick={() => {dispatch({type: '0'})}}>
                            0
                        </button>
                        <button className="bodyRowElement" style={styles.bodyRowElement} onClick={() => {dispatch({type: '.'})}}>
                            .
                        </button>
                        <button className="bodyRowElement" style={styles.bodyRowElement} onClick={() => {dispatch({type: '='})}}>
                            =
                        </button>
                        <button className="bodyRowElement" style={styles.bodyRowElement} onClick={() => {dispatch({type: '+'})}}>
                            +
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Calculator;

const styles = {
    main: {
        backgroundColor: 'gray',
        height: 700,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    },
    calculatorContainer: {
        backgroundColor: 'white',
        width: 700,
        height: 600,
        
    },
    header: {
        display: 'flex',
        justifyContent: 'right',
        alignItems: 'center',
        backgroundColor: '#dddddd',
        marginLeft: 50,
        marginRight: 50,
        marginTop: 30,
        height: 100,
        textAlign: 'right',
        padding: 10,
        fontSize: 30
    },
    bodyRowContainer: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 30,
        justifyContent: 'center'
    },
    bodyRowElement: {
        flex: 1,
        marginLeft: 40,
        marginRight: 40,
        backgroundColor: 'gray',
        height: 60,
        alignItems: 'center',
        fontSize: 30,
        cursor: 'pointer',
        boxShadow: "4px 4px 1px",
    },
}