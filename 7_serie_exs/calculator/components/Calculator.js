import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import {useSelector, useDispatch} from 'react-redux';

function Calculator() {

    const display = useSelector((state) => {return state});
  
    const dispatch = useDispatch();



    return (
        <View style={styles.calculatorContainer}>
          <View style={styles.displayContainer}>
              <Text style={styles.displayText}>{display}</Text>
          </View>
          <View style={styles.keysContainer}>
            <View style={styles.keysRow}>
                <TouchableOpacity style={styles.keyButtonContainer} onPress={() => {dispatch({type: '7'})}}>
                    <View style={styles.keyButton}>
                        <Text style={styles.keyText}>7</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity style={styles.keyButtonContainer} onPress={() => {dispatch({type: '8'})}}>
                    <View style={styles.keyButton}>
                        <Text style={styles.keyText}>8</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity style={styles.keyButtonContainer} onPress={() => {dispatch({type: '9'})}}>
                    <View style={styles.keyButton}>
                        <Text style={styles.keyText}>9</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity style={styles.keyButtonContainer} onPress={() => {dispatch({type: '/'})}}>
                    <View style={styles.keyButton}>
                        <Text style={styles.keyText}>/</Text>
                    </View>
                </TouchableOpacity>
            </View>
            <View style={styles.keysRow}>
                <TouchableOpacity style={styles.keyButtonContainer} onPress={() => {dispatch({type: '4'})}}>
                    <View style={styles.keyButton}>
                        <Text style={styles.keyText}>4</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity style={styles.keyButtonContainer} onPress={() => {dispatch({type: '5'})}}>
                    <View style={styles.keyButton}>
                        <Text style={styles.keyText}>5</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity style={styles.keyButtonContainer} onPress={() => {dispatch({type: '6'})}}>
                    <View style={styles.keyButton}>
                        <Text style={styles.keyText}>6</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity style={styles.keyButtonContainer} onPress={() => {dispatch({type: 'x'})}}>
                    <View style={styles.keyButton}>
                        <Text style={styles.keyText}>X</Text>
                    </View>
                </TouchableOpacity>
            </View>
            <View style={styles.keysRow}>
                <TouchableOpacity style={styles.keyButtonContainer} onPress={() => {dispatch({type: '1'})}}>
                    <View style={styles.keyButton}>
                        <Text style={styles.keyText}>1</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity style={styles.keyButtonContainer} onPress={() => {dispatch({type: '2'})}}>
                    <View style={styles.keyButton}>
                        <Text style={styles.keyText}>2</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity style={styles.keyButtonContainer} onPress={() => {dispatch({type: '3'})}}>
                    <View style={styles.keyButton}>
                        <Text style={styles.keyText}>3</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity style={styles.keyButtonContainer} onPress={() => {dispatch({type: '-'})}}>
                    <View style={styles.keyButton}>
                        <Text style={styles.keyText}>-</Text>
                    </View>
                </TouchableOpacity>
            </View>
            <View style={styles.keysRow}>
                <TouchableOpacity style={styles.keyButtonContainer} onPress={() => {dispatch({type: '0'})}}>
                    <View style={styles.keyButton}>
                        <Text style={styles.keyText}>0</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity style={styles.keyButtonContainer} onPress={() => {dispatch({type: '.'})}}>
                    <View style={styles.keyButton}>
                        <Text style={styles.keyText}>.</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity style={styles.keyButtonContainer} onPress={() => {dispatch({type: '='})}}>
                    <View style={styles.keyButton}>
                        <Text style={styles.keyText}>=</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity style={styles.keyButtonContainer} onPress={() => {dispatch({type: '+'})}}>
                    <View style={styles.keyButton}>
                        <Text style={styles.keyText}>+</Text>
                    </View>
                </TouchableOpacity>
            </View>
            <View style={styles.keysRow}>
                <TouchableOpacity style={styles.keyButtonContainer} onPress={() => {dispatch({type: 'CLEAR'})}}>
                    <View style={styles.keyButton}>
                        <Text style={styles.keyText}>C</Text>
                    </View>
                </TouchableOpacity>
            </View>
          </View>
        </View>
      );

}

export default Calculator;

const styles = {
    calculatorContainer: {
        flex: 1,
        width: '100%',
        backgroundColor: 'gray',
        alignItems: 'center',
        justifyContent: 'center',
    },
    displayContainer: {
        flex: 1,
        width: '90%',
        backgroundColor: 'white',
        alignItems: 'flex-end',
        justifyContent: 'center',
        marginTop: 30
    },
    keysContainer: {
        flex: 4,
        width: '100%',
    },
    displayText: {
        fontSize: 30,
        marginRight: 20
    },
    keysRow: {
        width: '100%',
        height: '20%',
        backgroundColor: 'gray',
        justifyContent: 'space-around',
        flexDirection: 'row',
        alignItems: 'center'
    },
    keyButtonContainer: {
        width: 70,
        height: 70,
        backgroundColor: 'black',
        justifyContent: 'center',
        alignItems: 'center'
    },
    keyButton: {

    },
    keyText: {
        fontSize: 30,
        color: 'white'
    }
}
