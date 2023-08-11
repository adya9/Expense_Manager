import React from "react";
import "./header.css"

const Header=()=>{
    return(
        <div className="header-container">
            <div className="header">
                <div className="header-logo">
                    <label>EXPENSE_MANAGER</label> <i class="fi fi-rr-hand-holding-usd"></i>
                </div>

                {/* <div className="header-button">
                    <a href="https://github.com/" target="_blank">
                        
                       <i class="devicon-github-original colored"></i>GITHUB
          
                    </a>
                </div> */}

            </div>
        </div>

    );
}

export default Header;