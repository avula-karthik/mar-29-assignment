import './App.css';
import { BrowserRouter, Link, Routes, Route } from 'react-router-dom';
import CreateFile from './CreateFile';
import CreateFolder from './CreateFolder';
import FolderContents from './FolderContents';
import ModifyFile from './ModifyFile';

function App() {
    return (
        <div className='App'>
            <h1>Welcome to File Management Application </h1>
            <BrowserRouter>
                <Link
                    to='/createfile'
                    className='col-lg-3 col-md-3 col-sm-3 btn btn-success'
                >
                    <b>Create File</b>
                </Link>
                <Link
                    to='/createfolder'
                    className='col-lg-3 col-md-3 col-sm-3 btn btn-success'
                >
                    <b>Create Folder</b>
                </Link>
                <Link
                    to='/foldercontents'
                    className='col-lg-3 col-md-3 col-sm-3 btn btn-success'
                >
                    <b>Folder contents</b>
                </Link>
                <Link
                    to='/modifyfile'
                    className='col-lg-3 col-md-3 col-sm-3 btn btn-success'
                >
                    <b>Modify file contents </b>
                </Link>
                <Routes>
                    <Route path='/createfile' element={<CreateFile />} />
                    <Route path='/createfolder' element={<CreateFolder />} />
                    <Route
                        path='/foldercontents'
                        element={<FolderContents />}
                    />
                    <Route path='/modifyfile' element={<ModifyFile />} />
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
