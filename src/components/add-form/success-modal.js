import React from 'react';
import Modal from 'react-modal';
import "./success-modal.css"
import successImage from "../../assets/images/success.png"; 
import {Link} from 'react-router-dom';

const SuccessModel=({modalOpen,setModalOpen})=>{
    const customStyles = {
        content: {
          top: '50%',
          left: '50%',
          right: 'auto',
          bottom: 'auto',
          marginRight: '-50%',
          transform: 'translate(-50%, -50%)',
          backgroundColor:"#F8FAFB",
          borderRadius:"12px",
        },
      };
    return(
      <Modal isOpen={modalOpen} style={customStyles}>
        <div className="modal-inner">
            <lable>Expense added Successfully!</lable>
            <img src={successImage} alt="Expense added" className="added-image" />

        </div>
        <Link to="/">
        <div className="take-home-button">
        <i class="fi fi-rr-house-chimney"></i>
        HOME
        </div>

        </Link>
       
      </Modal>
    )

}

export default SuccessModel;