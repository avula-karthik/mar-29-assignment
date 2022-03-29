import axios from 'axios';
const CreateFile = () => {
    const createFile = (e) => {
        e.preventDefault();
        let filename = e.target.filename.value;
        let filecontent = e.target.content.value;
        axios
            .get(`/file/createfile/${filename}/${filecontent}`)
            .then((res) => console.log(res.data))
            .catch((e) => console.log(e));
        e.target.filename.value = null;
        e.target.content.value = null;
    };
    return (
        <div className='upSpace'>
            <form className='form' onSubmit={createFile}>
                <label>
                    <h5>File Name : </h5>
                </label>
                <input
                    required
                    type='text'
                    name='filename'
                    className='form-control'
                    placeholder='filename..'
                />
                <label>
                    <h5>File Contents</h5>
                </label>
                <textarea
                    required
                    className='form-control'
                    type='text'
                    placeholder='file content'
                    name='content'
                />
                <div className='text-center upSpace'>
                    <button className='btn btn-primary'>Create File</button>
                </div>
            </form>
        </div>
    );
};
export default CreateFile;
