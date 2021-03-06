import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import {useAuth} from './AuthContext'

const Product = props => (
    <tr>
        <td >{props.product.Status}</td>
        <td>{props.product.Title}</td>
        <td>{props.product.ListedPrice}</td>
        <td>{props.product.Category}</td>
        <button onClick={
            () => {
                if (props.product.Status == "Item Available")
                    document.location.href = "/viewProduct/" + props.product._id;
                else
                    document.location.href = "/create/" + props.product._id;
            }
        } className="btn btn-success mt-2 mx-3">
            Update
        </button>
        <button onClick={
            () => {
                document.location.href = "/Delete/" + props.product._id;
            }
        } className="btn btn-danger mt-2">
            Delete
        </button>
    </tr>
)



export default class ProductsList extends Component {

    constructor(props) {
        super(props);
        this.state = { products: [] };
    }

    componentDidMount() {
        axios.get('http://localhost:4001/products/')
            .then(response => {
                this.setState({ products: response.data });
            })
            .catch(function (error) {
                console.log(error);
            })
    }

    productList() {
        return this.state.products.map(function (current, i) {
            return <Product product={current} key={i} />;
        })
    }
    render() {
        return (
            <div>
                <h3>Product List</h3>
                <table className="table table-striped" style={{ marginTop: 20 }} >
                    <thead>
                        <tr>
                            <th>Status</th>
                            <th>Title</th>
                            <th>Price</th>
                            <th>Category</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.productList()}

                    </tbody>
                </table>
            </div>
        )
    }
}