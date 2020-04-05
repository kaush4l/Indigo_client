import React, { Component } from 'react'
import axios from 'axios';

export class Trials extends Component {
    state = {
        isLoading: true,
        groups: [],
        text: ""
      };

    async componentDidMount() {
        this.getData()
        // const response = await fetch('/users/get');
        // const body = await response.json();
        // this.setState({ groups: body.content, isLoading: false });
    }

    getData() {
        axios.get('/users/get')
          .then(response => {
            this.setState({ groups: response.data[0].firstName, isLoading: false });
              console.log(response.data[0].firstName)
          });
      }

    render() {
        return (
            <div>
                <div>{this.state.groups}</div>
            </div>
        )
    }
}
