import React from "react";

const CardContent = (props) => {
    // console.log(props.contents);
    const listContents = props.contents.map( (content, id) => {
        return(
            <div className="card" key={id}>
                <div>
                    <h5>{content.title}</h5>
                    <p>{content.body}</p>
                </div>
                <div>
                    <button className="button muted-button" onClick={ () => props.editForm(content)} >Edit</button>
                    <button className="button muted-button" onClick={ () => props.deleteContent(content.id)} >Delete</button>
                </div>
            </div>
        );
    })
    return [listContents];
}

export default CardContent;