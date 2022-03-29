import axios from 'axios';
import { useState } from 'react';

const ModifyFile = () => {
    const [filename, setFilename] = useState();
    const [data, setData] = useState();
    const fetchData = (e) => {
        e.preventDefault();
        let filename = e.target.filename.value;
        setFilename(filename);
        axios
            .get(`/file/readfile/${filename}`)
            .then((res) => setData(res.data))
            .catch((e) => console.log(e));
    };
    const modifyData = () => {
        axios
            .get(`/file/modifyfile/${filename}/${data}`)
            .then((res) => console.log(res))
            .catch((e) => console.log(e));
    };
    return (
        <div className='upSpace'>
            <form className='form' onSubmit={fetchData}>
                <label>
                    <h5>File Name</h5>
                </label>
                <input
                    required
                    type='text'
                    name='filename'
                    placeholder='file name..'
                    className='form-control'
                />
                <div className='text-center upSpace'>
                    <button className='btn btn-info'>Fetch Data</button>
                </div>
                <label>
                    <h5>Content</h5>
                </label>
                <textarea
                    className='form-control'
                    name='content'
                    placeholder='wait....loading....'
                    type='text'
                    value={data}
                    onChange={(e) => setData(e.target.value)}
                />
            </form>
            <div className='text-center upSpace'>
                <button className='btn btn-primary' onClick={modifyData}>
                    Modify File contents
                </button>
            </div>
        </div>
    );
};
export default ModifyFile;
