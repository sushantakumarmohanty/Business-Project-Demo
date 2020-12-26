import React, { Component } from 'react'
import { Router, Stack, Scene } from 'react-native-router-flux';
import Login from './Home';
import Product from './Product'

export class Routers extends Component {
    render() {
        return (
            <Router>
                <Stack key="root">
                    <Scene key='login' component={Login} title='login'>
                    </Scene>
                    <Scene key='product' component={Product} title='product'></Scene>

                </Stack>
            </Router>
        )
    }
}

export default Routers
