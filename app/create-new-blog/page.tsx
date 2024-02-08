"use client";
import "react-quill/dist/quill.bubble.css";
const ReactQuill = dynamic(() => import("react-quill"), { ssr: false });
import { FormEvent, useState } from "react";
import classes from "./create-new-blog.module.css";
import Image from "next/image";
import dynamic from "next/dynamic";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import {
  getStorage,
  ref,
  uploadBytesResumable,
  getDownloadURL,
} from "firebase/storage";
import { app } from "../utils/firebase";
import { relative } from "path";

export default function CreateNewBlog() {
  const [open, setOpen] = useState(false);
  const [file, setFile] = useState<any>("");
  const router = useRouter();
  // const [media, setMedia] = useState("");
  const [description, setDescription] = useState("");
  const [title, setTitle] = useState("");
  const [catSlug, setCatSlug] = useState("");
  const { data } = useSession();
  const [isLoading, setLoading] = useState(false);
  const handleFileUpload = (): Promise<{
    message: string;
    err?: string;
    filePath?: string;
  }> => {
    return new Promise((res, rej) => {
      if (!file) rej({ message: "failed", err: "No file Added!" });
      const storage = getStorage(app);
      const fileName = new Date().getTime() + (file?.name || "");
      const storageRef = ref(storage, fileName);
      const uploadTask = uploadBytesResumable(storageRef, file);

      uploadTask.on(
        "state_changed",
        (snapshot) => {
          const progress =
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          console.log("Upload is " + progress + "% done");
          switch (snapshot.state) {
            case "paused":
              console.log("Upload is paused");
              break;
            case "running":
              console.log("Upload is running");
              break;
          }
        },
        (error) => {
          rej({ message: "failed", err: error });
        },
        () => {
          getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
            console.log("File available at", downloadURL);
            res({ message: "success", filePath: downloadURL });
          });
        }
      );
    });
  };
  async function handleSubmit(e: FormEvent) {
    console.log("submit");
    e.preventDefault();
    if (!title || !description) {
      alert("Enter title and description of the Blog!");
      return;
    }
    try {
      let image;
      setLoading(true);
      if (file) {
        image = await handleFileUpload();
      }
      const paylaod = {
        title,
        catSlug,
        desc: description,
        slug: title,
        img: image?.filePath ?? "/food.png",
        userEmail: data?.user?.email,
      };
      console.log(paylaod);
      const res = await fetch(`${process.env.NEXT_PUBLIC_URL}/api/posts`, {
        cache: "no-store",
        method: "POST",
        body: JSON.stringify(paylaod),
      });
      if (res.ok) {
        console.log("created successfully");
        router.push(`/blogs/${paylaod.slug}`);
      }
    } catch (err) {
      console.log("err", err);
    } finally {
      setLoading(false);
    }
  }
  return (
    <>
      <div className={classes.container}>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Title"
            className={classes.input}
            onChange={(e) => setTitle(e.target.value)}
          />
          <div>
            <div>
              <label htmlFor="cat">Category</label>
              <select
                id="cat"
                name="cat"
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
            </div>
            <div>
              <label htmlFor="image">Image</label>
              <input
                type="file"
                id="image"
                name="image"
                onChange={(e) => setFile(e?.target?.files?.[0] ?? null)}
                className={classes.selectFileInput}
              />
            </div>
            {file && <button onClick={() => setFile(null)}>Remove X</button>}
          </div>
          {file && (
            <div
              style={{
                textAlign: "center",
                height: "500px",
                width: "100%",
                position: "relative",
              }}
            >
              <Image
                fill
                style={{ maxHeight: "500px", maxWidth: "100%" }}
                src={URL.createObjectURL(file)}
                alt="dvdsv"
              />
            </div>
          )}
          <div className={classes.editor}>
            {/* <button
              className={classes.button}
              onClick={(e: FormEvent) => {
                e.preventDefault();
                setOpen((open) => !open);
              }}
            >
              <Image src="/plus.png" alt="" width={16} height={16} />
            </button> */}
            {/* {open && (
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
            )} */}
            <ReactQuill
              className={classes.textArea}
              theme="bubble"
              value={description}
              onChange={setDescription}
              placeholder="Tell your story..."
            />
          </div>
          <button type="submit" className={classes.publish}>
            Publish
          </button>
          {isLoading ? (
            <button disabled className={classes.publish}>
              Publishing...
            </button>
          ) : (
            <button type="submit" className={classes.publish}>
              Publish
            </button>
          )}
        </form>
      </div>
    </>
  );
}
