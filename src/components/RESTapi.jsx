import { useState, useEffect } from 'react';

export default function RESTapi() {
    const [id, setId] = useState(1);
    const [post, setPost] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    const API_URL = 'https://jsonplaceholder.typicode.com/posts';

    const handleIdChange = (event) => {
        setId(event.target.value);
        setPost(null);
        setError(null);
        setIsLoading(true);
    };

    useEffect(() => {
        fetch(`${API_URL}/${id}`)
            .then((response) => {
                if (!response.ok) {
                    throw new Error('Unable to fetch the post.');
                }
                return response.json();
            })
            .then((data) => {
                setPost(data);
            })
            .catch((error) => {
                console.error('Error fetching data:', error);
                setError(error.message);
            })
            .finally(() => {
                setIsLoading(false);
            });
    }, [id]);

    return (
        <section id="api-result" className="mx-auto w-full max-w-6xl px-4 py-10 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-full text-left sm:max-w-2xl">
                <p className="text-sm font-semibold uppercase tracking-widest text-gray-500">
                    REST API result
                </p>
                <h2 className="mt-2 mb-6 text-3xl font-bold text-gray-900 sm:text-4xl">
                    A post from JSONPlaceholder
                </h2>

                {isLoading && <p className="text-gray-600">Loading post...</p>}
                {error && <p className="text-red-600">{error}</p>}
                {post && (
                    <article className="rounded-md border border-gray-200 bg-white p-4 shadow-sm sm:p-6">
                        <p className="mb-2 text-sm text-gray-500">Post #{post.id}</p>
                        <h3 className="mb-3 text-xl font-semibold capitalize text-gray-900 sm:text-2xl">
                            {post.title}
                        </h3>
                        <p className="text-gray-600">{post.body}</p>
                    </article>
                )}

                <label htmlFor="post-id" className="mt-8 mb-2 block text-sm font-medium text-gray-700">
                    Choose another post
                </label>
                <input
                    id="post-id"
                    type="number"
                    min="1"
                    max="100"
                    value={id}
                    onChange={handleIdChange}
                    className="w-24 rounded-md border border-gray-300 p-2 text-gray-900"
                />
            </div>
        </section>
    );
}