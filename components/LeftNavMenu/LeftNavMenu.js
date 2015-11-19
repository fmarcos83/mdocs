import React from 'react';
import LeftNav from 'material-ui/lib/left-nav'

let menuItems = [
    {route: 'intro', text: 'INTRO'},
    {route: 'theme', text: 'THEME'},
    {route: 'app_dev', text: 'APP DEVELOPMENT'},
    {route: 'rest_api', text: 'REST API REFERENCE'},
    {route: 'sdks', text: 'SDKS'},
    {route: 'samples', text: 'SAMPLES'}
]
var LeftNavMenu = React.createClass({
    render(){
        return (
            <LeftNav style={{paddingTop:'67px'}} ref="leftNav" docked={true} menuItems={menuItems} />
        )
    }
})

export default LeftNavMenu
