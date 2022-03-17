import React, { Component } from 'react'
import './NewsCard.css';
import img from './Logo.jpg';
export default class NewsCard extends Component {
    render() {
         let {title,description,imgUrl,myUrl,author,date}=this.props;
         let dt=new Date(date);
         let month = dt.toLocaleString('default', { month: 'long' });
         let day =   dt.getDate();
         let year = dt.getUTCFullYear();
         let stringdate=day + " " + month + " " + year;
        return (
            <>
                <div className="card">
                    <div className="cardImg">
                        <img src={imgUrl?imgUrl:img} alt="img" />
                    </div>
                    <div className="cardTitle">
                        <h2>{title?title.slice(0,73):""}...</h2>
                    </div>
                    <div className="cardDetails">
                        <p>By {author?author.slice(0,20):"Sources"}</p> <p>{stringdate}</p>
                    </div>
                    <div className="cardDesc">
                        <p>{description?description.slice(0,190):"Click the button below to read Full news in detail"}...</p>
                    </div>
                    <div className="cardButton">
                        <a href={myUrl} target="_blank">Read More <i className="fas fa-angle-double-right"></i></a>
                    </div>
                </div>
            </>
        )
    }
}
