import React, { useState } from "react";
import "./topfold.css"
import { Link } from 'react-router-dom';
import {useDispatch} from 'react-redux';
import { searchExpense } from "../../redux/action/expenses";

const Topfold = () => {
    const [query, setQuery] = useState("");
    const dispatch=useDispatch();
    const handlequery = (e) => {
        setQuery(e.target.value);
        dispatch(searchExpense(e.target.value));
    }
    return (
        <div className="topfold">
            {window.location.pathname === '/' ? <div className="home-topfold">
                <div className="searchbar">
                    <i class="fi fi-rr-search"></i>
                    <input value={query} placeholder="Type to search " onChange={(e) => handlequery(e)}></input>

                </div>
                <Link to="/add-expense">
                    <div className="topfold-button">
                        <i class="fi fi-rr-add"></i>
                        ADD
                    </div>
                </Link>

            </div> :
                <div className="add-topfold">
                    <Link to="/">
                        <div className="button-add-topfold">
                            <i class="fi fi-rr-angle-left"></i>
                            BACK
                        </div>

                    </Link>
                    <Link to="/">
                        <div className="button-add-topfold">
                            <i class="fi fi-rr-cross-circle"></i>
                            CANCEL
                        </div>

                    </Link>



                </div>}

        </div>
    );
}

export default Topfold;