import { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

function Write() {
  const [value, setValue] = useState("");
  console.log(value);
  return (
    <div className="write">
      <div className="content">
        <input type="text" placeholder="Title" />
        <div className="editorContainer">
          <ReactQuill
            className="editor"
            theme="snow"
            value={value}
            onChange={setValue}
          />
        </div>
      </div>
      <div className="menu">
        <div className="item">
          <h1>Publish</h1>
          <span>
            <b>status: </b> Draft
          </span>
          <span>
            <b>Visibility: </b> Public
          </span>
          <input
            style={{ display: "none" }}
            type="file"
            id="file"
            name="file"
          />
          <label className="file" htmlFor="file">
            Upload Image
          </label>
          <div className="btn">
            <button>Save as a draft</button>
            <button>Update</button>
          </div>
        </div>
        <div className="item">
          <h1>Category</h1>
          <div className="cat">
            <input type="radio" name="cat" value="item1" />
            <label htmlFor="item1">item1</label>
          </div>
          <div className="cat">
            <input type="radio" name="cat" value="items2" />
            <label htmlFor="items2">item2</label>
          </div>
          <div className="cat">
            <input type="radio" name="cat" value="item3" />
            <label htmlFor="item3">item3</label>
          </div>
          <div className="cat">
            <input type="radio" name="cat" value="item4" />
            <label htmlFor="item4">item4</label>
          </div>
          <div className="cat">
            <input type="radio" name="cat" value="item5" />
            <label htmlFor="item5">item5</label>
          </div>
          <div className="cat">
            <input type="radio" name="cat" value="item6" />
            <label htmlFor="item6">item6</label>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Write;
