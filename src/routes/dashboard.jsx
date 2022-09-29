import React from 'react';
import './dashboard.css';
import { db } from '../firebase';
import { uid } from "uid";
import { set, ref, onValue, remove, update, getDatabase, get, child, push} from "firebase/database";
import { useState, useEffect, useRef } from "react";
import {Switch} from 'antd';
import {addDoc, collection} from 'firebase/firestore';

const Dashboard = () => {
    const [toggle, setToggle] = useState(0);
    const [toggle1, setToggle1] = useState(0);
    const [toggle2, setToggle2] = useState(0);
    const [toggle3, setToggle3] = useState(0);

    const toggler = () => {
        update(ref(db), {'iot/relaystatus1': !toggle});
        toggle ? setToggle(0): setToggle(1);
    }
    const toggler1 = () => {
        update(ref(db), {'iot/relaystatus2': !toggle1});
        toggle1 ? setToggle1(0): setToggle1(1);
    }
    const toggler2 = () => {
        update(ref(db), {'iot/relaystatus3': !toggle2});
        toggle2 ? setToggle2(0): setToggle2(1);
    }
    const toggler3 = () => {
        update(ref(db), {'iot/relaystatus4': !toggle3});
        toggle3 ? setToggle3(0): setToggle3(1);
    }

    useEffect(() => {
        const starCountRef = ref(db, 'iot');
        onValue(starCountRef, (snapshot) => {
        const data = snapshot.val();
        if(data.relaystatus1 == '1') {
            setToggle(1);
        } else {
            setToggle(0);
        }
        if(data.relaystatus2 == '1') {
            setToggle1(1);
        } else {
            setToggle1(0);
        }
        if(data.relaystatus3 == '1') {
            setToggle2(1);
        } else {
            setToggle2(0);
        }
        if(data.relaystatus4 == '1') {
            setToggle3(1);
        } else {
            setToggle3(0);
        }
        });

        
    }, []);

    return (
        <div className='wrapper'>
            <div class='item'>
            <h1>Kipas Angin</h1>
            <Switch onClick={toggler} checked={toggle} defaultChecked={toggle}/>
            {toggle ? <span> ON </span> : <span> OFF </span>}
            </div>
            <div class='item'>
            <h1>Televisi</h1>
            <Switch onClick={toggler1} checked={toggle1} defaultChecked={toggle1}/>
            {toggle1 ? <span> ON </span> : <span> OFF </span>}
            </div>
            <div class='item'>
            <h1>Air Conditioner</h1>
            <Switch onClick={toggler2} checked={toggle2} defaultChecked={toggle2}/>
            {toggle2 ? <span> ON </span> : <span> OFF </span>}
            </div>
            <div class='item'>
            <h1>Lampu LED</h1>
            <Switch onClick={toggler3} checked={toggle3} defaultChecked={toggle3}/>
            {toggle3 ? <span> ON </span> : <span> OFF </span>}
            </div>
        </div>
    );
};

export default Dashboard;