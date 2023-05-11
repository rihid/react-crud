import React, {useState } from "react";
import CardContent from "./tables/CardContent";
import AddContentForm from "./forms/AddContentForm";
import EditForm from "./forms/EditForm";

const App = () => {
    const contentsData = [];

    const initialState = { id: null, title: '', body: '' };
    const [contents, setContents] = useState(contentsData);
    const [currentContent, setCurrentContent] = useState(initialState);
    const [edit, setEdit] = useState(false);

    
    const addContent = (content) => {
        content.id = contents.length + 1
        setContents([...contents, content])
    }

    const deleteContent = (id) => {
        setContents(contents.filter((content) => content.id !== id))
    }

    const editForm = (content) => {
        setEdit(true)
      
        setCurrentContent({ id: content.id, title: content.title, body: content.body })
    }
    const updateContent = (id, updatedContent) => {
        setEdit(false)
      
        setContents(contents.map((content) => (content.id === id ? updatedContent : content)))
    }

    return (
        <div className="container">
            <h1>CRUD APP</h1>
            <div className="flex-colmn">
                <div className="flex-large">
                    {/* <h2>Tambah Content</h2>
                    <AddContentForm addContent={addContent} /> */}
                      {edit ? (
                            <div>
                            <h2>Edit Data</h2>
                            <EditForm
                                setEdit={setEdit}
                                currentContent={currentContent}
                                updateContent={updateContent}
                            />
                            </div>
                        ) : (
                            <div>
                            <h2>Tambah Data</h2>
                            <AddContentForm addContent={addContent} />
                            </div>
                        )}
                </div>
                <div className="flex-large">
                    <h2>Article</h2>
                    <CardContent contents={contents} deleteContent={deleteContent} editForm={editForm} />
                </div>
            </div>
    </div>
    );
}

export default App;
