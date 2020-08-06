import React, { Component } from 'react'
import { LoginForm } from './Login/LoginForm'
import {AngularTile} from './Angular/angularTile'
import {MachineLearning} from './machinelearning/machineLearning'
import {Ai} from './artificialInteligence/ai'

export class Body extends Component {

    state = {
        angular: false,
        ml: false,
        aI: false,
    }
    render() {
        return (
            <div className="app-menu">
                <u>
                    <li onClick= {() => this.setState({ isAboutVisible: true,
                        ml: false,
                        aI: false,
                    }) }>Angular</li>
                    <li onClick = {() => this.setState({ isAboutVisible: false ,
                        ml: true,
                        aI: false
                    }) }>Machine learning</li>
                    <li onClick=  {() => this.setState({ isAboutVisible: false ,
                        ml: false,
                        aI: true
                    }) }>Artificial Intelligence</li>
                </u>
                { this.state.isAboutVisible ? <AngularTile /> : null }
                { this.state.ml ? <MachineLearning /> : null }
                { this.state.aI ? <Ai /> : null }

            </div>

        )
    }

    handleClick() {

    }
}
