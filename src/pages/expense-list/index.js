import React from 'react';
import './expense-list.css'
import Card from './card';
import {useSelector} from 'react-redux';
import empty from "../../assets/images/empty.png";
// import successImage from "../../assets/images/success.png"; 
import {toast,ToastContainer} from 'react-toastify';

const ExpenseList=()=>{
    const {expenseList:list,query}=useSelector((state)=>state.expenses);
    const filteredList=list.filter(item=>item.title.includes(query))
    const notifySuccess=()=>toast.success("Expense Deleted");
    return(
        <div className="expense-list">
            <ToastContainer
                position="bottom-left"
                autoClose={3500}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
               
            />
            {filteredList.length ? (filteredList.map((item)=>(<Card item={item} notifySuccess={notifySuccess}/>))):(<div className="empty-state"><img src={empty}></img></div>)
                }
        </div>
    );
}

export default ExpenseList;