import { Link } from "@inertiajs/react";
// kenapa menggunakan kurung kurawal di meta? karena jika
// tidak menggunakan kurung kurawal saat pemanggilan datanya harus {meta.meta}
const Paginator = ({ meta }) => {
    const prev = meta.links[0].url;
    const next = meta.links[meta.links.length - 1].url;
    const current = meta.current_page;

    return (
        <div className="join">
            {prev && (
                <Link href={prev} className="join-item btn btn-outline">
                    «
                </Link>
            )}
            <Link className="join-item btn btn-outline">Page {current}</Link>
            {next && (
                <Link href={next} className="join-item btn btn-outline">
                    »
                </Link>
            )}
        </div>
    );
};

export default Paginator;
