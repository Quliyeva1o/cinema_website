import React, { useEffect, useState } from 'react'
import { useGetMoviesQuery } from '../../../redux/MoviesSlice';

import styles from './index.module.scss'
import { Space, Table, Tag } from 'antd';
import controller from '../../../API/requests';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Button from '@mui/material/Button';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    pt: 2,
    px: 4,
    pb: 3,
};

const AddSessionTime = () => {
    const columns = [
        {
            title: 'Name',
            dataIndex: 'name',
            key: 'name',
            render: (text) => <a>{text}</a>,
        },
        {
            title: 'Action 1',
            key: 'action1',
            render: (_, record) => (
                <a onClick={() => { handleModal(record.halls) }}>Delete</a>
            ),
        },
        {
            title: 'Action 2',
            key: 'action2',
            render: (_, record) => (
                <a onClick={() => { console.log(record._id) }}>Delete</a>
            ),
        },
    ];


    const { data: movies } = useGetMoviesQuery();
    const [myMovies, setMyMovies] = useState([])
    const [halls, setHalls] = useState([])
    const [open, setOpen] = useState(false)
    useEffect(() => {
        movies && setMyMovies(movies.data)
    }, [movies]);
    const handleModal = (halls) => {
        JSON.parse(halls).map((hall) => {
            controller.getOne('/api/halls', hall).then((res) => {
                setHalls((curr) => [...curr, res.data])
            })
        })
        setOpen(true)
    }

    return (
        <>
            <Table columns={columns} dataSource={myMovies} />
    

            {open && (
                <Modal
                    open={open}
                    onClose={() => { setOpen(false), setHalls([]) }}
                    aria-labelledby="child-modal-title"
                    aria-describedby="child-modal-description"
                >

                    <Box sx={{ ...style, width: 200 }}>
                        {halls && halls.map((x) => (
                            <>
                                <h2>{x.name}</h2>
                                <button>
                                    {x.name}
                                </button></>
                        ))}
                        <Button onClick={() => { setOpen(false), setHalls([]) }}>Close</Button>
                    </Box>
                </Modal>
            )}

        </>
    )

}
export default AddSessionTime;