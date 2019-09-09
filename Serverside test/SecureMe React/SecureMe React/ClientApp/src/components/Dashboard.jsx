﻿import React from 'react'
import { render } from "react-dom";
import ReactModal from "react-modal";
import { Route, Link, BrowserRouter as Router, Switch } from 'react-router-dom';
import logo from '../assets/Logo.svg';
import Edit from '../assets/Edit.svg';
import Help from '../assets/help.svg';

class Dashboard extends React.Component {
    constructor() {
        super();
        //Sets  the value false as default
        //state can contain properties
        this.state = {
            openP: false,
            openA: false
        };
    }

    //Sets  the value false as default
    //state can contain properties


    //Changes the propertie in state on an onclick event
    //setState method is best practice because it calls the render method 
    //and all other lifecycle methods.
    onOpenAddPassword = () => {
        this.setState({ openP: true });
        console.log(this.setState)
    }

    onCloseAddPassword = () => {
        this.setState({ openP: false });
    }

    onOpenAuthenticate = () => {
        this.setState({ openA: true });
        console.log(this.setState)
    }

    onCloseAuthenticate = () => {
        this.setState({ openA: false });
    }

    render() {
        return (
            <div>
                <nav id="nav">
                    <div class="flexbox-nav">
                        <div class="placement-nav">
                            <Link to="/Dashboard"><img class="placement-nav-logo" src={logo} /></Link>
                         </div>
                        <div class="placement-nav placement-nav-btn">
                            <input id="auth" class="navbtn navbtn1" onClick={this.onOpenAuthenticate} type="button" value="Authenticate" />
                            <ReactModal
                                isOpen={this.state.openA}
                                contentLabel="Minimal Modal Example"
                                className="AddPasswordBox"
                                overlayClassName="PaswordBoxOverlay"
                                onRequestClose={this.onCloseAuthenticate}>

                                <div class="Addpasswordcontent">
                                    <h1>Enter the information for your site in the fields below - then click generate!</h1>
                                    <p>Label - E. G. Facebook John</p>
                                    <input type="text" />
                                    <p>Url - E. g. https://www.facebook.com</p>
                                    <input type="text" />
                                    <button onClick={this.onCloseAddPassword}>Generate Password</button>
                                </div>

                            </ReactModal>
                        </div>
                        <div class="placement-nav placement-nav-btn">
                            <Link to="/Dashboard/Profile"><input class="navbtn" type="button" value="Profile Settings"/></Link>
                        </div>
                        <div className="PasswordTar" id="AddPasswordDiv" class="placement-nav placement-nav-btn" type="button">
                            <input class="navbtn navbtn2" onClick={this.onOpenAddPassword} type="button" value="Add Password" />
                            <ReactModal
                                isOpen={this.state.openP}
                                contentLabel="Minimal Modal Example"
                                className="AddPasswordBox"
                                overlayClassName="PaswordBoxOverlay"
                                onRequestClose={this.onCloseAddPassword}>
                                
                                <div class="Addpasswordcontent">
                                    <h1>Enter the information for your site in the fields below - then click generate!</h1>
                                    <p>Label - E. G. Facebook John</p>
                                    <input type="text" />
                                    <p>Url - E. g. https://www.facebook.com</p>
                                    <input type="text" />
                                    <button onClick={this.onCloseAddPassword}>Generate Password</button>
                                </div>
                                
                            </ReactModal>
                        </div>
                        <div class="placement-nav placement-nav-btn">
                            <Link to="/Logout"><input class="navbtn navbtn3" type="button" value="Log out"/></Link>
                        </div>
                    </div>
                </nav>

                <div id="Dashboard-main" class="main">
                    <div>
                        <div class="liststatus defaulttext">Search Sitename / App</div>
                        <div class="main-title">
                            <input id="search-li" type="text" placeholder="Search..."/>
                            <img src={Help}/>
                        </div>
                    </div>
                    <ul class="ullist">
                        <li class="listelement">
                            <div class="title defaulttext">Facebook</div>
                            <div class="indicator"></div>
                            <div class="edit-li listbtn">Edit<img src={Edit}/></div>
                            <div class="retrievepassword listbtn">Retrieve Password</div>
                        </li>
                        <li class="listelement">
                            <div class="title defaulttext">Google</div>
                            <div class="indicator"></div>
                            <div class="edit-li listbtn">Edit<img src={Edit}/></div>
                            <div class="retrievepassword listbtn">Retrieve Password</div>
                        </li>
                        <li class="listelement">
                            <div class="title defaulttext">Twitch</div>
                            <div class="indicator"></div>
                            <div class="edit-li listbtn">Edit<img src={Edit}/></div>
                            <div class="retrievepassword listbtn">Retrieve Password</div>
                        </li>
                        <li class="listelement">
                            <div class="title defaulttext">Amazon</div>
                            <div class="indicator"></div>
                            <div class="edit-li listbtn">Edit<img src={Edit}/></div>
                            <div class="retrievepassword listbtn">Retrieve Password</div>
                        </li>
                        <li class="listelement">
                            <div class="title defaulttext">Reddit</div>
                            <div class="indicator"></div>
                            <div class="edit-li listbtn">Edit<img src={Edit}/></div>
                            <div class="retrievepassword listbtn">Retrieve Password</div>
                        </li>
                        <li class="listelement">
                            <div class="title defaulttext">Steam</div>
                            <div class="indicator"></div>
                            <div class="edit-li listbtn">Edit<img src={Edit}/></div>
                            <div class="retrievepassword listbtn">Retrieve Password</div>
                        </li>
                        <li class="listelement">
                            <div class="title defaulttext">Brazzers</div>
                            <div class="indicator"></div>
                            <div class="edit-li listbtn">Edit<img src={Edit}/></div>
                            <div class="retrievepassword listbtn">Retrieve Password</div>
                        </li>
                        <li class="listelement">
                            <div class="title defaulttext">Facebook</div>
                            <div class="indicator"></div>
                            <div class="edit-li listbtn">Edit<img src={Edit}/></div>
                            <div class="retrievepassword listbtn">Retrieve Password</div>
                        </li>
                        <li class="listelement">
                            <div class="title defaulttext">Facebook</div>
                            <div class="indicator"></div>
                            <div class="edit-li listbtn">Edit<img src={Edit}/></div>
                            <div class="retrievepassword listbtn">Retrieve Password</div>
                        </li>
                        <li class="listelement">
                            <div class="title defaulttext">Facebook</div>
                            <div class="indicator"></div>
                            <div class="edit-li listbtn">Edit<img src={Edit} /></div>
                            <div class="retrievepassword listbtn">Retrieve Password</div>
                        </li>
                        <li class="listelement">
                            <div class="title defaulttext">Facebook</div>
                            <div class="indicator"></div>
                            <div class="edit-li listbtn">Edit<img src={Edit} /></div>
                            <div class="retrievepassword listbtn">Retrieve Password</div>
                        </li>
                        <li class="listelement">
                            <div class="title defaulttext">Facebook</div>
                            <div class="indicator"></div>
                            <div class="edit-li listbtn">Edit<img src={Edit} /></div>
                            <div class="retrievepassword listbtn">Retrieve Password</div>
                        </li>
                        <li class="listelement">
                            <div class="title defaulttext">Facebook</div>
                            <div class="indicator"></div>
                            <div class="edit-li listbtn">Edit<img src={Edit} /></div>
                            <div class="retrievepassword listbtn">Retrieve Password</div>
                        </li>
                        <li class="listelement">
                            <div class="title defaulttext">Facebook</div>
                            <div class="indicator"></div>
                            <div class="edit-li listbtn">Edit<img src={Edit} /></div>
                            <div class="retrievepassword listbtn">Retrieve Password</div>
                        </li>
                        <li class="listelement">
                            <div class="title defaulttext">Facebook</div>
                            <div class="indicator"></div>
                            <div class="edit-li listbtn">Edit<img src={Edit} /></div>
                            <div class="retrievepassword listbtn">Retrieve Password</div>
                        </li>
                    </ul>
                </div>
            </div>
            
            );
    }
}
export default Dashboard