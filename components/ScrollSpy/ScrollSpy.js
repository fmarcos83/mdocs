import React, { PropTypes } from 'react';
import './ScrollSpy.scss'
import { canUseDOM } from 'fbjs/lib/ExecutionEnvironment';
import _ from 'underscore';

let scroll = undefined
let selectedIndex = '';
let map = undefined;

let offsetPromise = undefined;

let offsetElements = undefined;

let onClickSelected = function(item){
    selectedIndex = item;
    offsetElements.then((function(items){
        scrollToMarker(selectedIndex, items);
        this.forceUpdate();
    }).bind(this));
}
let getSelected = function(item){
    var className = '';
    if(selectedIndex === item){
        className = 'selected'
    }
    return className;
}
let calculateDomOffset = function(domNode){
    return domNode.offsetTop
};
let isOverLapping = function(scrollPos, idPositions){
    if(scrollPos===0){
        return idPositions[0].id
    }else{
        return idPositions.filter(function(el){return el.offset<=scrollPos}).pop().id
    }
}
let refreshScrollSpy = function(offsetTop, idPositions){
    window.requestAnimationFrame((function(){
        let scrollPos = window.scrollY
        selectedIndex = isOverLapping(scrollPos, idPositions);
        this.forceUpdate();
    }).bind(this));
}

// easing functions http://goo.gl/5HLl8
Math.easeInOutQuad = function (t, b, c, d) {
  t /= d/2;
  if (t < 1) {
    return c/2*t*t + b
  }
  t--;
  return -c/2 * (t*(t-2) - 1) + b;
};

Math.easeInCubic = function(t, b, c, d) {
  var tc = (t/=d)*t*t;
  return b+c*(tc);
};

Math.inOutQuintic = function(t, b, c, d) {
  var ts = (t/=d)*t,
  tc = ts*t;
  return b+c*(6*tc*ts + -15*ts*ts + 10*tc);
};

// requestAnimationFrame for Smart Animating http://goo.gl/sx5sts
var requestAnimFrame = (function(){
  return  window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || function( callback ){ window.setTimeout(callback, 1000 / 60); };
})();

let scrollListener = undefined

function scrollToElement(to, callback, duration) {
  // because it's so fucking difficult to detect the scrolling element, just move them all
  function move(amount) {
    document.documentElement.scrollTop = amount;
    document.body.parentNode.scrollTop = amount;
    document.body.scrollTop = amount;
  }
  function position() {
    return document.documentElement.scrollTop || document.body.parentNode.scrollTop || document.body.scrollTop;
  }
  var start = position(),
    change = to - start,
    currentTime = 0,
    increment = 20;
  duration = (typeof(duration) === 'undefined') ? 500 : duration;
  var animateScroll = function() {
    // increment the time
    currentTime += increment;
    // find the value with the quadratic in-out easing function
    var val = Math.easeInOutQuad(currentTime, start, change, duration);
    // move the document.body
    move(val);
    // do the animation unless its over
    if (currentTime < duration) {
      requestAnimFrame(animateScroll);
    } else {
      if (callback && typeof(callback) === 'function') {
        // the animation is done so lets callback
        callback();
      }
    }
  };
  animateScroll();
}

let scrollToMarker = function(marker, markers){
    let currentMarker = markers.filter(function(mark){return mark.id===marker}).pop();
    let posY = currentMarker.offset
    window.removeEventListener('scroll', scrollListener);
    scrollToElement(posY,()=>{ window.addEventListener('scroll', scrollListener)},500);
}

let ScrollSpy = React.createClass({
    componentWillMount(){
        selectedIndex = this.props.items[0];
        if(canUseDOM){

            offsetPromise = new Promise((resolve, reject)=>{
                let idVar = this.props.items[0];
                let el = document.getElementById(idVar);
                let offsetTop = calculateDomOffset(el.parentNode)
                resolve(offsetTop);
            });

            offsetElements = new Promise((resolve, reject)=>{
                let idElements = this.props.items;
                let offsetTopElements = idElements.map(function(idElement){
                    return {
                        offset: calculateDomOffset(document.getElementById(idElement)) - window.innerHeight,
                        id: idElement
                    };
                });
                resolve(offsetTopElements);
            });

            Promise.all([offsetPromise, offsetElements]).then((function([offsetTop,idMapOffset]){
                let throttledRefresh = _.throttle(refreshScrollSpy.bind(this,offsetTop,idMapOffset), 100, {leading: false});
                scrollListener = throttledRefresh.bind(this)
                window.addEventListener('scroll', scrollListener);
            }).bind(this));
        }
    },
    getDefaultProps: function(){
        return {
            items:[]
        }
    },
    render: function(){
        let elements = this.props.items.map((function(item){
                           return (
                                <li className={getSelected(item)}>
                                    <a onClick={onClickSelected.bind(this,item)}>
                                        {item}
                                    </a>
                                </li>
                           );
                    }).bind(this));
        return(
            <div className="m-scroll" items={this.props.items}>
               <h4>Operations</h4>
               {elements}
           </div>
        );
    }
});
export default ScrollSpy;
