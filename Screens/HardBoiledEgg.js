import React, {useState, useEffect} from 'react';
import {View, ImageBackground, } from 'react-native';

export default function HardBoiledEgg({ navigation }) {
    const [timeLeft, setTimeLeft] = useState(420);
    const [isRunning, setIsRunning] = useState(false);

    useEffect (() => {
let timer;
if (isRunning && timeLeft > 0 ) {
    timer = setInterval(() => {
        setTimeLeft((prevTime) => prevTime - 1);
    }, 1000);
} else if (timeLeft === 0 ){
setIsRunning(false);
console.log("Your egg is ready!");
}

    })
}