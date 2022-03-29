import axios from 'axios';

const CreateFolder = () => {
    const createFolder = (e) => {
        e.preventDefault();
        let foldername = e.target.foldername.value;
        axios
            .get(`/file/createfolder/${foldername}`)
            .then((res) => console.log(res))
            .catch((e) => console.log(e));
    };
    return (
        <div className='upSpace'>
            <form className='form' onSubmit={createFolder}>
                <label>
                    <h5>Folder name</h5>
                </label>
                <input
                    required
                    type='text'
                    name='foldername'
                    placeholder='folder name..'
                    className='form-control'
                />
                <div className='text-center upSpace'>
                    <button className='btn btn-primary'>Add folder</button>
                </div>
            </form>
        </div>
    );
};
export default CreateFolder;
