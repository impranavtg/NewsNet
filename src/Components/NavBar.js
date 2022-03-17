import React, { Component } from 'react'
import '../Css/NavBar.css';
import {Link} from "react-router-dom";

export default class NavBar extends Component {
    countryHandler=()=>{ 
        let country=document.getElementById("countryList");
        let value=country.options[country.selectedIndex].value;
        this.props.func(value);
        }
    constructor(){
        super();
        this.state={
            theme:"Light",
            style:{
                backgroundColor:"#1a374d"
            }
        }
    }
    state={
        ismobile:false
    }
    themeHandler=()=>{
        if(this.state.theme==="Light"){
            this.props.func2("Dark");
            this.setState({
                theme:"Dark",
                style:{
                    backgroundColor:"#678983"
                }
            })
        }
        else{
            this.props.func2("Light");
            this.setState({theme:"Light",
                style:{
                    backgroundColor:"#1a374d"
                }
            });
    }
}
    render() {
        return (
            <div>
                <nav className="navbar" style={this.state.style}>
                    <Link to="/" className='logo'>NewsNet</Link>
                    <div className={!this.state.ismobile?"categories":"mobileCategories"}>
                    <li><Link className="cats" to="/">Home</Link></li>
                    <li><Link className="cats" to="/sports">Sports</Link></li>
                    <li><Link className="cats" to="/business">Business</Link></li>
                    <li><Link className="cats" to="/entertainment">Entertainment</Link></li>
                    <li><Link className="cats" to="/health">Health</Link></li>
                    <li><Link className="cats" to="/science">Science</Link></li>
                    <li><Link className="cats" to="/technology">Technology</Link></li>
                    </div>
                    <div className={!this.state.ismobile?"country":"mobileCountry"}>
                        <select id="countryList" defaultValue={"in"} onChange={this.countryHandler} style={this.state.style}>
                            <option value="in">India</option>
                            <option value="us">Usa</option>
                        </select>
                    </div>
                    <div className='navSwitch' onClick={this.themeHandler}>
                    <h2 className='mode'>{this.state.theme} mode</h2>
                    <i className={`fa-solid ${this.state.theme==="Light"?"fa-moon":"fa-sun"}`} id={this.state.theme==="Light"?"dark":"light"}></i>
                    </div>
                    <div className="menu">
                    <i className={this.state.ismobile?"fas fa-times":"fas fa-bars"} onClick={()=>{this.setState({ismobile:!this.state.ismobile})}}></i>
                    </div>
                </nav>
            </div>
        )
    }
}
