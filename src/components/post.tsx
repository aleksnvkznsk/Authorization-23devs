import * as React from 'react';
import Typography from '@mui/material/Typography';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import style from './../style/post.module.css'

export default function PaginationControlled() {
    const [page, setPage] = React.useState(1);
    const handleChange = (_event: React.ChangeEvent<unknown>, value: number) => {
        setPage(value);
    };

    return (
        <div className={style.post}>
            <Stack className={style.stack} spacing={2}>
                <Typography>
                    <div className={style.list}>
                        Содержимое
                    </div>
                </Typography>
                <Pagination count={10} page={page} color="secondary" onChange={handleChange} />
            </Stack>
        </div>
    );
}