import React from 'react';
import LeftNav from 'material-ui/lib/left-nav'
import List from 'material-ui/lib/lists/list'
import ListDivider from 'material-ui/lib/lists/list-divider'
import ListItem from 'material-ui/lib/lists/list-item'

let menuItems = [
    {route: 'intro', text: 'INTRO'},
    {route: 'theme', text: 'THEME'},
    {route: 'app_dev', text: 'APP DEVELOPMENT'},
    {route: 'rest_api', text: 'REST API REFERENCE'},
    {route: 'sdks', text: 'SDKS'},
    {route: 'samples', text: 'SAMPLES'}
]
var clickToggle = function(){
    console.log('entra aqui');
}
var LeftNavMenu = React.createClass({
    render(){
        return (
            <LeftNav style={{paddingTop:'64px'}} ref="leftNav" docked={true} >
                <List>
                    <ListItem autoGenerateNestedIndicator={false} nestedItems={[
                        <ListItem key={0}>The Big Picture</ListItem>,
                        <ListItem key={1}>Major Concepts</ListItem>,
                        <ListItem key={2}>Get your own store</ListItem>
                    ]}>
                        INTRO
                    </ListItem>
                    <ListItem>
                        THEME
                    </ListItem>
                    <ListItem>
                        APP DEVELOPMENT
                    </ListItem>
                    <ListItem autoGenerateNestedIndicator={false} nestedItems={[
                        <ListItem key={0} nestedItems={[
                            <ListItem key={0}>Commerce</ListItem>
                        ]}></ListItem>
                    ]}>
                        REST API REFERENCE
                    </ListItem>
                    <ListItem>
                        SDKS
                    </ListItem>
                    <ListItem>
                        SAMPLES
                    </ListItem>
                </List>
            </LeftNav>
        )
    }
})

export default LeftNavMenu
