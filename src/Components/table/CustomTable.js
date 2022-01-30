// import DeleteIcon from '@mui/icons-material/Delete';
import { Button, Table } from "antd";
import { useEffect, useState } from "react";
import { Link,useNavigate } from "react-router-dom";

import { API_USER } from "../../Utilities/API_URL";
import { DELETE, GET } from "../../Utilities/webService";

export default function CustomTable(props) {
    const [dataSource,setDataSource] = useState([]);
    const navigate = useNavigate()
    
    const getAllData = () =>{
        GET(`${API_USER}`)
        .then(({data})=>{
            setDataSource(data)
        })
        .catch((e)=>{
            throw e;
        });
    }
    const deleteElement = (item) => {
        let element = dataSource.findIndex((element) => element._id == item._id);
        let updatedData = dataSource;
        updatedData.splice(element,1);
        DELETE(`${API_USER}/${item._id}`)
        .then(({data}) => {
            console.log(data);
            setDataSource([...updatedData]);
        })
        .catch((err) => {
            throw err;
        })
    }   
    const redirectToForm = (item)=> {
        navigate("/forms",{state : {data : item}})
    }

    useEffect(async()=>{
        await getAllData(); 
    },[]);
        const columns = [
        {
            title: 'Emp_id',
            dataIndex: '',
            key: '_id',
            render: (props) =>{
                return <a onClick={() => redirectToForm(props)}>{props._id}</a>
            },
        },
        {
            title: 'Name',
            dataIndex: 'name',
            key: 'name',
        },
        {
            title: 'Department',
            dataIndex: 'department',
            key: 'department',
        },
        {
            title: 'Location',
            dataIndex: 'location',
            key: 'location',
        },
        {
            title: 'Action',
            dataIndex: '',
            key: 'x',
            render: (props) =>{
                return <a onClick={() => deleteElement(props)}>Delete</a>
            },
        },
        ];
    return (    <>
        <div style={{margin:30}}>
            <Button><Link to={'/Forms'}>Add User</Link></Button>
        </div>
        <Table dataSource={dataSource} columns={columns} />
        </>   )
}