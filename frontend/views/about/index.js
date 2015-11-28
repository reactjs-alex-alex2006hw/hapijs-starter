import React, { Component } from 'react'
import { Panel, Button } from 'react-bootstrap'

export default class About extends React.Component {

    render() {
        return (
            <Panel id="main-panel">
                <h1>About.</h1>
                <Button bsStyle="primary" bsSize="large">OK, excellent</Button>
            </Panel>
        )
    }
}