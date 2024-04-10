import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, router, Link } from "@inertiajs/react";
import { useState, useEffect } from "react";

export default function Dashboard(props) {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [category, setCategory] = useState("");
    const [isNotif, SetIsNotif] = useState(false);

    const handleSubmit = () => {
        const data = {
            title,
            description,
            category,
        };
        router.post("/news", data);
        SetIsNotif(true);
        setTitle("");
        setDescription("");
        setCategory("");
    };

    useEffect(() => {
        if (!props.myNews) {
            router.get("/news");
        }
        return;
    }, []);

    return (
        <AuthenticatedLayout
            user={props.auth.user}
            header={
                <h2 className="font-semibold text-xl text-gray-800 leading-tight">
                    My News
                </h2>
            }
        >
            <Head title="Dashboard" />

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    {isNotif && (
                        <div role="alert" className="alert alert-info">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                className="stroke-current shrink-0 w-6 h-6"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                                ></path>
                            </svg>
                            <span>{props.flash.success}</span>
                        </div>
                    )}
                    <input
                        type="text"
                        placeholder="Title"
                        className="m-2 input input-bordered w-full"
                        value={title}
                        onChange={(event) => setTitle(event.target.value)}
                    />

                    <input
                        type="text"
                        placeholder="Description"
                        className="m-2 input input-bordered w-full"
                        value={description}
                        onChange={(event) => setDescription(event.target.value)}
                    />

                    <input
                        type="text"
                        placeholder="Category"
                        className="m-2 input input-bordered w-full"
                        value={category}
                        onChange={(event) => setCategory(event.target.value)}
                    />

                    <button
                        className="btn btn-primary m-2"
                        onClick={() => handleSubmit()}
                    >
                        Submit
                    </button>
                    <div className="p-4">
                        {props.myNews && props.myNews.length > 0 ? (
                            props.myNews.map((news, i) => {
                                return (
                                    <div
                                        className="card w-full lg:w-96 bg-base-100 shadow-xl m-2"
                                        key={i}
                                    >
                                        <div className="card-body">
                                            <h2 className="card-title">
                                                {news.title}
                                                <div className="badge badge-secondary">
                                                    NEW
                                                </div>
                                            </h2>
                                            <p>{news.description}</p>
                                            <div className="card-actions justify-end">
                                                <div className="badge badge-inline">
                                                    {news.category}
                                                </div>
                                                <div className="badge badge-outline">
                                                    <Link
                                                        href={route(
                                                            "news.edit"
                                                        )}
                                                        as="button"
                                                        method="get"
                                                        data={{ id: news.id }}
                                                    >
                                                        Edit
                                                    </Link>
                                                </div>
                                                <div className="badge badge-outline">
                                                    <Link
                                                        href={route(
                                                            "news.destroy"
                                                        )}
                                                        as="button"
                                                        method="delete"
                                                        data={{ id: news.id }}
                                                    >
                                                        Delete
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                );
                            })
                        ) : (
                            <p>Anda belum memiliki berita</p>
                        )}
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
