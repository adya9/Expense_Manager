import React, { useState } from 'react';
import "./add-form.css";
import { categories } from '../../constants/add-expense';
import { useDispatch } from 'react-redux';
import { addExpense } from '../../redux/action/expenses';
import {toast,ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import SuccessModel from './success-modal';

const Addform = () => {
    const cat = categories;
    const [categoryOpen, setCategoryOpen] = useState(false);
    const [title, setTitle] = useState('');
    const [amount, setAmount] = useState('');
    const [category, setCategory] = useState('');
    const [modalOpen,setModalOpen]=useState(false);
    const dispatch = useDispatch();

    const handleTitle = (e) => {
        setTitle(e.target.value);
    };

    const handleAmount = (e) => {
        const val = parseFloat(e.target.value);
        if (isNaN(val)) {
            setAmount(" ");
            return;
        }
        setAmount(val);
    };

    const handleCategory = (category) => {
        setCategory(category);
        setCategoryOpen(false);

    };

    const handleSubmit = () => {
        if (title === '' || amount === '' || !category) {
            const notify = () => toast("OOps enter the valid data!");
            notify();
            return;
        }
        const data = {
            title,
            amount,
            category,
            createdAt: new Date()
        }
        dispatch(addExpense(data));
        setModalOpen(true);
    }

    return (

        <div className="add-form">
            <ToastContainer
                position="bottom-left"
                autoClose={3500}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
               
            />
            <SuccessModel modalOpen={modalOpen} setModalOpen={setModalOpen}/>
            <div className="form-item">
                <label>Title</label>
                <input placeholder="Name of the expenditure" value={title} onChange={(e) => handleTitle(e)}></input>
            </div>
            <div className="form-item">
                <label>Amount</label>
                <input placeholder="Enter amount" value={amount} className="amount-input" onChange={(e) => handleAmount(e)}></input>
            </div>
            <div className="category-container-parent">
                <div className="category">
                    <div className="category-dropdown" onClick={() => setCategoryOpen(!categoryOpen)}>
                        <label>{category ? category.title : 'category'}</label>
                        <i class="fi fi-rr-angle-down"></i>
                    </div>
                    {categoryOpen && <div className="category-container">
                        {cat.map(category => (
                            <div className="category-item" style={{
                                borderRight: '5px solid $(category.color)'
                            }} key={category.id} onClick={() => handleCategory(category)}>
                                <label>{category.title}</label>
                                <img src={category.icon} alt={category.title}/>
                            </div>
                        ))}
                    </div>
                    }
                </div>
            </div>
            <div className="form-add-button">
                <div onClick={handleSubmit}>
                    <label>ADD</label>
                    <i class="fi fi-rr-add"></i>
                </div>
            </div>
        </div>
    );
}

export default Addform;