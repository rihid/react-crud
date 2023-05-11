import React, {useState} from "react";

const AddContentForm = (props) => {
    const initialState = { id: null, title: '', body: '' };
    const [content, setContent] = useState(initialState);

    const handleInputChange = (e) => {
        const {name, value} = e.target;

        setContent({...content, [name]: value})
    }
    return (
        <form onSubmit={ (e) => {
            e.preventDefault();
            // console.log('a')

            if(!content.title || !content.body)
            return
            props.addContent(content);
            setContent(initialState);
        }}>
            <label>Judul</label>
            <input type="text" name="title" value={content.title} onChange={handleInputChange} />
            <label>Isi</label>
            <textarea type="text" name="body" value={content.body} onChange={handleInputChange} ></textarea>
            <button>Submit</button>
        </form>
    )
}

export default AddContentForm;