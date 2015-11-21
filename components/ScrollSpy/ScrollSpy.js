import React, { PropTypes } from 'react';
import './ScrollSpy.scss'
import { canUseDOM } from 'fbjs/lib/ExecutionEnvironment';

var scroll = undefined
var selectedIndex = 0;
var onClickSelected = function(index){
    selectedIndex = index;
    this.forceUpdate();
}
var getSelected = function(index){
    var className = '';
    if(selectedIndex === index){
        className = 'selected'
    }
    return className;
}
var ScrollSpy = React.createClass({
    componentWillMount(){
        if(canUseDOM){
            require.ensure(['react-scrollspy'],function(require){
                scroll = (require('react-scrollspy'));
            });
        }
    },
    render: function(){
        if(canUseDOM){
            return(<scroll items={['introduction','structure','initialization']}>
               <h4>Operations</h4>
               <li className={getSelected(0)}><a onClick={onClickSelected.bind(this, 0)} href="#introduction">Introduction</a></li>
               <li className={getSelected(1)}><a onClick={onClickSelected.bind(this, 1)} href="#structure">Structure</a></li>
               <li className={getSelected(2)}><a onClick={onClickSelected.bind(this, 2)}  href="#initialization">Initialize</a></li>
           </scroll>);
        }else{
            return <span></span>
        }
    }
});
export default ScrollSpy;
