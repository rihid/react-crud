import React, {useState, useEffect} from "react";

const EditForm = (props) => {
    const [content, setContent] = useState(props.currentContent);

    useEffect(
        () => {
          setContent(props.currentContent)
        },
        [ props ]
      )

    const handleInputChange = (e) => {
      const { name, value } = e.target;
  
      setContent({ ...content, [name]: value })
    };
    return (
        <form onSubmit={ (e) => {
            e.preventDefault();
            props.updateContent(content.id, content)
        }}>
            <label>Judul</label>
            <input type="text" name="title" value={content.title} onChange={handleInputChange} />
            <label>Isi</label>
            <textarea type="text" name="body" value={content.body} onChange={handleInputChange} ></textarea>
            <button>Update</button>
            <button onClick={() => props.setEdit(false)} className="button muted-button">Cancel</button>
        </form>
    )
};

export default EditForm