import React from 'react'
export default class extends React.Component{
    state = {
        name:'Eric'
    }
    render() {
        return(
            <div>
                <main name='hello'>
                    <h1>Hello,</h1>
                    <h2>my name is</h2>
                    <h3>{this.state.name}</h3>
                    <h4>Nice to meet you!</h4>
                </main>
                    <input type='text'
                           required maxLength='30'
                           placeholder="What's your name?"
                           value={this.state.name}
                           onChange={event => this.setState({name: event.target.value})}/>
            </div>
        )
    }
}