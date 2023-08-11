import React from "react";
import "./Home.css"
import Topfold from "../../components/topfold";
import ExpenseList from "../expense-list";

const Home=()=>{
    return(
        <div className="home">
            <Topfold/>
            <ExpenseList/>
        </div>   

    );
};

export default Home;