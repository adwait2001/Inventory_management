import React, { Component } from 'react';
import axios from 'axios';


class Deleteproduct extends Component {
    
    constructor(props) {
        super(props);
    }
    componentDidMount()
    {
        axios.delete('http://localhost:4001/products/delete/'+this.props.match.params.id)
            .then(response=>{
                console.log(response)
            }).catch(function(error) {
                console.log(error)
            })
    }

    render() {
        return (
            <div>
                Product Deleted Successfully
            </div>
        );
    }
}

export default Deleteproduct;
