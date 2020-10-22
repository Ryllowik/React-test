import React, { Component } from 'react'
import CarouselComponent from '../Components/carouselComponent/carouselComponent.js'

class Carousel extends Component {
    constructor(props) {
        super(props)
        this.state = {
            background: 'bg-grey'
        }
        this.backgroundHandleChange = this.backgroundHandleChange.bind(this)
    }

    backgroundHandleChange(event){
        this.setState({background: event.target.value})
    }
    
    render() {
        const carouselText = [
            {
                title: 'Title 1',
                text: 'text 1',
            },
            {
                title: 'Title 2',
                text: 'text 2',
            },
            {
                title: 'Title 3',
                text: 'text 3',
            },
        ]

        const carouselItems = carouselText.map((carouselText, index) =>
            <div className="item-carousel">
                <h3>{carouselText.title}</h3>
                <p>{carouselText.text}</p>
            </div>
        )
        return(
            <div>
                <label>
                    Pick a color:
                    <select value={this.state.background} onChange={this.backgroundHandleChange}>
                        <option value="bg-grey">Grey</option>
                        <option value="bg-red">Red</option>
                        <option value="bg-green">Green</option>
                    </select>
                </label>
                <br/>
                <br/>
                <CarouselComponent items={carouselItems} background={this.state.background}/>
            </div>
        )
    }
}

export default Carousel