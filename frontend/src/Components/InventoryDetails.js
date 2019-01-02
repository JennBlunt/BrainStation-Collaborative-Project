
import React, { Component } from 'react'
import { withRouter, Link } from 'react-router-dom';
import Sidebar from './Sidebar';
import Topbar from './Topbar';
const baseUrl = 'http://localhost:8080/';

class InventoryDetails extends Component {

  state = {
    productDetails: []
  }
  componentDidMount() {

    const { match } = this.props;
    

    fetch(baseUrl + `inventory` + `/${match.params.id}`) 
    .then(response => response.json())
    .then( data => {
        console.log(data);

      this.setState({
        productDetails: data
    })
    })

  }

  render() {
    const { productDetails } = this.state;
    const { match } = this.props;

    return (
      
      <div className='sideandtopgroup'>
        <Sidebar />
        <div className='inventory_sub'>
          <Topbar />

          <div className='productContainer__wrapper'>
            <Link to={`/warehouses/${productDetails.warehouse_id}`}><button className='backButton'> {'< Back'}</button></Link>

            <div className='productContainer'>
              <div className='productContainer__sub1'>
                <h3>Product Name Summary</h3>
                <button type='button' name='order'>New Order</button>     
              </div>
              <div className='inventoryContainer__sub2'>
                <p><span className='boldDesc'>Description:</span> {productDetails.description}</p>
                <p><span className='boldDesc'>Last Ordered:</span> {productDetails.lastordered}</p>
                <p><span className='boldDesc'>Ordered By:</span> {productDetails.orderedby}</p>
                <p><span className='boldDesc'>Reference Number:</span> {productDetails.reference}</p>
                <p><span className='boldDesc'>Product Category:</span> {productDetails.productCategory + '' }</p>
                <p><span className='boldDesc'>Quantity:</span> {productDetails.quatity}</p>
                <p><span className='boldDesc'>Location:</span> {productDetails.location}</p>
                <p><span className='boldDesc'>Status:</span> {productDetails.status}</p>
              </div>   
            </div>
        </div>
      </div>
      </div>
      
    )
  }
}

export default withRouter(InventoryDetails)
