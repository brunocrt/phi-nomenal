import React from 'react'
import { render } from 'react-dom'
import RFQForm from './RFQForm'
import './consumer.css'

class Consumer extends React.Component {
  constructor () {
    super()
    this.state = { step: 'choose-product' }
  }

  render () {
    return <div id='consumer-ui'>{ this.renderStep() }</div>
  }

  renderStep () {
    let step = this.state.step
    if (step === 'choose-product') {
      return this.renderChooseProduct()
    } else if (step === 'choose-shipment') {
      return this.renderChooseShipment()
    }
    return <div />
  }

  renderChooseProduct () {
    let onProductChosen = function () {
      this.setState({ step: 'choose-shipment' })
    }.bind(this)
    return <div id='consumer-choose-product'>
      <h1>Consumer</h1>
      <h2>Create new RFQ</h2>
      <RFQForm onRequestRegistered={onProductChosen} />
    </div>
  }

  renderChooseShipment () {
    return <div id='consumer-choose-shipment' />
  }
}

export default Consumer