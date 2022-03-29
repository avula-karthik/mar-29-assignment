import axios from 'axios';
import { useEffect, useState } from 'react';

const FolderContents = () => {
    let [content, setContent] = useState([]);
    useEffect(() => {
        axios
            .get('/file/foldercontents')
            .then((res) => setContent(res.data))
            .catch((e) => console.log(e));
    }, []);
    function getData() {
        axios
            .get('/file/foldercontents')
            .then((res) => setContent(res.data))
            .catch((e) => console.log(e));
    }
    function deleteFile(val) {
        axios
            .get(`/file/delete/${val}`)
            .then((res) => console.log(res))
            .catch((e) => console.log(e));
        getData();
    }

    return (
        <div className='upSpace'>
            <table>
                <tr>
                    <th>FileName</th>
                    <th>Delete Link</th>
                </tr>
                {content.map((val, index) => {
                    return (
                        <tr>
                            <td>{val}</td>
                            <td>
                                <button
                                    className='btn btn-danger'
                                    onClick={() => deleteFile(val)}
                                >
                                    Delete item
                                </button>
                            </td>
                        </tr>
                    );
                })}
            </table>
        </div>
    );
};
export default FolderContents;
