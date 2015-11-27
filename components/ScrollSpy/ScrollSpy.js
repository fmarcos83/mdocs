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
    return idPositions.filter(function(el){return el.offset<=scrollPos}).pop().id
}
let refreshScrollSpy = function(offsetTop, idPositions){
    window.requestAnimationFrame((function(){
        let scrollHeight = document.body.offsetHeight - window.innerHeight;
        let scrollPos = scrollHeight+window.scrollY
        selectedIndex = isOverLapping(scrollPos, idPositions);
        this.forceUpdate();
    }).bind(this));
}

let scrollToMarker = function(marker, markers){
    let scrollHeight = document.body.offsetHeight - window.innerHeight;
    let currentMarker = markers.filter(function(mark){return mark.id===marker}).pop();
    let posY = currentMarker.offset-scrollHeight
    scrollTo(0, posY);
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
                        offset: calculateDomOffset(document.getElementById(idElement)),
                        id: idElement
                    };
                });
                resolve(offsetTopElements);
            });

            Promise.all([offsetPromise, offsetElements]).then((function([offsetTop,idMapOffset]){
                let throttledRefresh = _.throttle(refreshScrollSpy.bind(this,offsetTop,idMapOffset), 100, {leading: false});
                window.addEventListener('scroll', throttledRefresh.bind(this));
            }).bind(this));
        }
    },
    getDefaultProps: function(){
        return {
            items:["introduction","structure","initialization"]
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
