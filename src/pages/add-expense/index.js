import React from "react";
import Topfold from "../../components/topfold";
import "./add-expense.css";
import Addform from "../../components/add-form";

const Addexpense = () => {
    return (
        <div className="add-expense">
            <Topfold />
            <Addform/>
        </div>
    );

}

export default Addexpense;