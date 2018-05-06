import React, { Component } from 'react'

class ClassComponent extends Component{
    constructor(props){
        super(props)
        this.state = {
            isChildren: false,
            text: ''
        }
    }

    componentDidMount(){
        console.log('depois e carregado')
    }

    componentWillMount(){
        console.log('antes de carregar')        
    }

    toggleChildren() {
        this.setState({isChildren: !this.state.isChildren})
    }

    changeText(event){
        const value= event.target.value
        this.setState({text: value})
        console.log(event)
    }

    render(){
        return <div>
            <h1>{this.state.text}</h1>
            <input type="text" onChange={this.changeText.bind(this)} value={this.state.text}/>
            <button onClick={this.toggleChildren.bind(this)}>Click</button>
            {this.state.isChildren}
            {
                this.state.isChildren ? this.props.children : ''
            }
        </div>
    }
}

export default ClassComponent