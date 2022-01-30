import React, { useEffect, useState } from 'react';
import { Link, useLocation,useNavigate } from 'react-router-dom';
import {
    Form,
    Input,
    Button,
    Select
  } from 'antd';
import { API_CREATE_USER, API_USER } from '../../Utilities/API_URL';
import { POST, PUT } from '../../Utilities/webService';


const CustomForm = ()=>{
    const [name,setName] = useState('')
    const [department,setDepartment] = useState('IT')
    const [location,setLocation] = useState('');
    const [componentSize, setComponentSize] = useState('default');
    const navigate = useNavigate();
    const {state} = useLocation();

    const savingData = async()=>{
        let data ={
            name:name,
            department:department,
            location:location
        } 
        await POST(`${API_CREATE_USER}`,data)
        .then((res)=>{navigate("/")})
        .catch((e)=> {throw e});
    }

    const updateData = async() =>{
        let data ={
            name:name,
            department:department,
            location:location
        } 
        await PUT(`${API_USER}/${state?.data._id}`,data)
        .then((res)=>{navigate("/")})
        .catch((e)=> {throw e});
    }

    const onFormLayoutChange = (res) => {
        setComponentSize(res.size);
    };
    useEffect(() => {
        setName(state?.data.name);
        setLocation(state?.data.location)
        setDepartment(state?.data.department)
    },[])
    return(
        <div className=''>
            <Form
            labelCol={{ span: 4 }}
            wrapperCol={{ span: 14 }}
            layout="horizontal"
            initialValues={{ size: componentSize }}
            onValuesChange={onFormLayoutChange}
            size={componentSize}
            >
            <Form.Item label="Name">
                <Input value={name}  onChange={e =>setName(e.target.value)} />
            </Form.Item>
            <Form.Item label="Location">
                <Input value={location}  onChange={e => setLocation(e.target.value)} />
            </Form.Item>
            <Form.Item label="Select">
                <Select value={department}  onChange={value => setDepartment(value)}>
                    <Select.Option value="IT">IT</Select.Option>
                    <Select.Option value="HR">HR</Select.Option>
                    <Select.Option value="QA">QA</Select.Option>
                </Select>
            </Form.Item>
                <Button><Link to={"/"}> Cancel</Link></Button>
                {
                    state?.data ? 
                    <Button onClick={updateData}>Update</Button>
                    :
                    <Button onClick={savingData}>Submit</Button>
                }
            </Form>
        </div>
    )
}

export default CustomForm;      