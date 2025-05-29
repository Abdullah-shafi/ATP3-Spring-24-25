'use client'
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import toast, { Toaster } from 'react-hot-toast';


const Delete = () => {
    interface users {
        id: number,
        f_name: string,
        l_name: string
    }

    const [user, setUser] = useState<users[]>([])

    const get = () => {
        axios.get('http://localhost:3000/ab/db/getAll')
            .then(res => setUser(res.data))
           
    }
    useEffect(() => {
        get();
    }, [])
    const handleDelete = (id: number) => {
       const con= window.confirm('Are you Sure')
       if(con){
        axios.delete(`http://localhost:3000/ab/db/delete/${id}`)
            .then(() => {
                 toast.success('Delete Successfully')
                get();
            })
        }
        else
        {
            toast.error('Not Deleted')
        }
            
    }

    return (
        <>
            <Toaster position='top-right'/>
            <table border={1}>
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>F_name</th>
                        <th>L_name</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {user.map((user) =>
                        <tr key={user.id}>
                            <td>{user.id}</td>
                            <td>{user.f_name}</td>
                            <td>{user.l_name}</td>
                            <td>
                                <button onClick={() => handleDelete(user.id)}>Delete</button>
                            </td>
                        </tr>
                    )}
                </tbody>
            </table>
        </>
    );
};

export default Delete;
