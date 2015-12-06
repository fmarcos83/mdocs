import React from 'react';
import Location from '../../core/Location';
import './Header.scss';

var slideIndex = "0"
let handleClick = function(index, event){
    let allowTransition = true;
    let path='/'
    event.preventDefault();
    slideIndex = index
    switch(index){
        case "0":
            path='/'
        break;
        case "1":
            path='/start'
        break;
        case "2":
            path='/guides'
        break;
        case "3":
            path='/developer'
        break;
        default:
            path='/'
        break;
    }
    this.forceUpdate();
    Location.pushState(null,path);
}

let activeItemClassName = function(index){
    let className = ''
    if(slideIndex === index){
        className = 'active'
    }
    return className;
}

let header = function(){
    return(
        <div className="m-header-menu">
            <ul className="m-horizontal-header-menu">
                <li><a>SEARCH</a></li>
                <li><a>COMMUNITY</a></li>
                <li><a>LOGIN</a></li>
            </ul>
            <ul className="m-vertical-header-menu">
                <li><a className={activeItemClassName("0")} onClick={handleClick.bind(this, "0")}>BIG PICTURE</a></li>
                <li><a className={activeItemClassName("1")} onClick={handleClick.bind(this, "1")}>GETTING STARTED</a></li>
                <li><a className={activeItemClassName("2")} onClick={handleClick.bind(this, "2")}>GUIDES</a></li>
                <li><a className={activeItemClassName("3")} onClick={handleClick.bind(this, "3")}>DEVELOPER</a></li>
            </ul>
        </div>
    );
};

export default header;
