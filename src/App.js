import React from 'react';
import './App.css';
import {Sidebar, InputItem, DropdownItem, Icon, Item, Logo, LogoText} from 'react-sidebar-ui';
import { Link } from 'react-router-dom';
import { SiSimpleanalytics } from 'react-icons/si'; 
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA3feNFGJKlKB-c5vWos7Of3fAGvZ8fLIM",
  authDomain: "capstone-a5.firebaseapp.com",
  projectId: "capstone-a5",
  storageBucket: "capstone-a5.appspot.com",
  messagingSenderId: "530599335770",
  appId: "1:530599335770:web:f890f4ceb8258c45f54563",
  measurementId: "G-9Y61XC3BYS"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);


function App() {
  return (
    <div className="App">
      <Sidebar bgColor='aqua' isCollapsed={false}>
        <LogoText>Kontac</LogoText>
        <a className='menu-item' href='/analytics'>
          <Item bgColor='aqua' >
            <SiSimpleanalytics />
            Analytics
          </Item>
        </a>
        <a className='menu-item' href='/activeaccess'>
          <Item bgColor='aqua'>
            <Icon><i className="fas fa-info"/></Icon>
            Active Access
          </Item>
        </a>
        <a className='menu-item' href='/activecard'>
          <Item bgColor='aqua'>
            <Icon><i className="fas fa-info"/></Icon>
            Active Card
          </Item>
        </a>
        <a className='menu-item' href='/history'>
          <Item bgColor='aqua'>
            <Icon><i className="fas fa-info"/></Icon>
            History
          </Item>
        </a>
        <a className='menu-item' href='/register'>
          <Item bgColor='aqua'>
            <Icon><i className="fas fa-info"/></Icon>
            Register
          </Item>
        </a>
      </Sidebar>
    </div>
  );
}

export default App;
