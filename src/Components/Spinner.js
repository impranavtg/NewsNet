import React, { Component } from 'react'
import Loading from '../Images/loading.gif';
export default class Spinner extends Component {
    render() {
        return (
            <div style={
            {...this.props.theme,
            display:"flex",
            justifyContent:"center",
            alignItems:"center",
            height:"40px",
             }}>
                <img src={Loading} alt="Loading..." style={{width:"30%",
                backgroundSize:"cover"
                }}/>
            </div>
        )
    }
}

