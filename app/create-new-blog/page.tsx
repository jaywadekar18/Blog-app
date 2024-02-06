"use client";
import "react-quill/dist/quill.bubble.css";
// import ReactQuill from "react-quill";
const ReactQuill = dynamic(() => import("react-quill"), { ssr: false });
import { useState } from "react";
import classes from "./create-new-blog.module.css";
import Image from "next/image";
import dynamic from "next/dynamic";
type file = null | File;
if (typeof window !== "undefined") {
}

export default function Login() {
  const [open, setOpen] = useState(false);
  const [file, setFile] = useState<file>(null);
  // const [media, setMedia] = useState("");
  const [value, setValue] = useState("");
  const [title, setTitle] = useState("");
  const [catSlug, setCatSlug] = useState("");

  function handleSubmit() {}
  return (
    <>
      <div className={classes.container}>
        <input
          type="text"
          placeholder="Title"
          className={classes.input}
          onChange={(e) => setTitle(e.target.value)}
        />
        <select
          className={classes.select}
          onChange={(e) => setCatSlug(e.target.value)}
        >
          <option value="style">style</option>
          <option value="fashion">fashion</option>
          <option value="food">food</option>
          <option value="culture">culture</option>
          <option value="travel">travel</option>
          <option value="coding">coding</option>
        </select>
        <div className={classes.editor}>
          <button className={classes.button} onClick={() => setOpen(!open)}>
            <Image src="/plus.png" alt="" width={16} height={16} />
          </button>
          {open && (
            <div className={classes.add}>
              <input
                type="file"
                id="image"
                onChange={(e) => setFile(e?.target?.files?.[0] ?? null)}
                style={{ display: "none" }}
              />
              <button className={classes.addButton}>
                <label htmlFor="image">
                  <Image src="/image.png" alt="" width={16} height={16} />
                </label>
              </button>
              <button className={classes.addButton}>
                <Image src="/external.png" alt="" width={16} height={16} />
              </button>
              <button className={classes.addButton}>
                <Image src="/video.png" alt="" width={16} height={16} />
              </button>
            </div>
          )}
          <ReactQuill
            className={classes.textArea}
            theme="bubble"
            value={value}
            onChange={setValue}
            placeholder="Tell your story..."
          />
        </div>
        <button className={classes.publish} onClick={handleSubmit}>
          Publish
        </button>
      </div>
    </>
  );
}
