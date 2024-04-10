import { React, useState, useEffect } from "react";
import { Head, router, Link } from "@inertiajs/react";
import Navbar from "@/Components/Navbar";

export default function EditNews(props) {
    const [title, setTitle] = useState(props.myNews.title);
    const [description, setDescription] = useState(props.myNews.description);
    const [category, setCategory] = useState(props.myNews.category);

    const handleSubmit = () => {
        const data = {
            id: props.myNews.id,
            title,
            description,
            category,
        };
        router.post("/news/update", data);
        setTitle("");
        setDescription("");
        setCategory("");
    };

    return (
        <div className="min-h-screen bg-slate-50">
            <Head title={props.title} />
            <Navbar user={props.auth.user} />
            <div className="card w-full lg:w-96 bg-base-100 shadow-xl m-2">
                <div className="p-4 text-2xl">Edit Berita</div>
                <div className="card-body">
                    <input
                        type="text"
                        placeholder="Title"
                        className="m-2 input input-bordered w-full"
                        defaultValue={title}
                        onChange={(title) => setTitle(title.target.value)}
                    />

                    <input
                        type="text"
                        placeholder="Description"
                        className="m-2 input input-bordered w-full"
                        defaultValue={description}
                        onChange={(description) =>
                            setDescription(description.target.value)
                        }
                    />

                    <input
                        type="text"
                        placeholder="Category"
                        className="m-2 input input-bordered w-full"
                        defaultValue={category}
                        onChange={(category) =>
                            setCategory(category.target.value)
                        }
                    />

                    <button
                        className="btn btn-primary m-2"
                        onClick={() => handleSubmit()}
                    >
                        Update
                    </button>
                </div>
            </div>
        </div>
    );
}
