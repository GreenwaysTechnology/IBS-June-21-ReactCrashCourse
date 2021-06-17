import React from 'react';
import PropTypes from 'prop-types';



//props is just variable , its value is object props = {id:"100",name="subramanian"}
export const Customer = props => {
    //    props.firstName = 'foo'
    return <div>
        <h3>Customer Details</h3>
        <p>id : {props.id}</p>
        <p>name :{props.firstName} {props.lastName}</p>
        <p>Status :{props.status ? 'Active' : 'InActive'}</p>
        <p>Address : {props.address.city}, {props.address.state}</p>
    </div>
}
//default Property : if props are not supplied from the other compoent/default values 
Customer.defaultProps = {
    id: 0,
    firstName: 'firstName',
    lastName: 'lastName',
    status: false,
    address: {
        city: 'city',
        state: 'state'
    }
}
//prop validation
Customer.propTypes = {
    id: PropTypes.number
}
