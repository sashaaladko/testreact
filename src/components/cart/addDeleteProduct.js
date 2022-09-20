import React from "react";
import { connect } from "react-redux";

function AddDeleteProduct(props) {
    return(
        <div className="addDeleteBtn">
            <button className="addProduct">{props.counter}+</button>
            <button className="deleteProduct">-</button>
        </div>
    )
}

function mapStateToProps(state) {
    return {
        counter: state.counter
    }
}

export default connect(mapStateToProps)(AddDeleteProduct)