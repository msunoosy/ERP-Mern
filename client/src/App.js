import './App.css';
import React, { useState,useEffect } from 'react';
import { Modal, Button } from 'antd';
import Employeeregistration from './components/Employeeregistration';
import EmployeeView from './components/EmployeeView';
import axios from 'axios';
function App() {
 const [isModalVisible, setIsModalVisible] = useState(false);
const[empData,setEmpData]=useState([])
useEffect(()=>{
axios.get("http://localhost:8081/api/employees").then(res=>{
setEmpData(res.data)
}).catch(err=>console.log(err))
},[])

  
  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };
  return (
    <div >
       <Button type="primary" onClick={showModal}>
        Employee Registration
      </Button>
      <Modal title="Basic Modal"  visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
      <Employeeregistration></Employeeregistration>
      </Modal>
      <EmployeeView empData={empData}/>
      
    </div>
  );
}

export default App;
