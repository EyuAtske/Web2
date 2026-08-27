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
        <section id="api-result" className="px-6 py-16 max-w-5xl mx-auto">
            <div className="max-w-2xl mx-auto text-left">
                <p className="text-sm font-semibold uppercase tracking-widest text-gray-500">
                    REST API result
                </p>
                <h2 className="text-3xl font-bold mt-2 mb-6 text-gray-900">
                    A post from JSONPlaceholder
                </h2>

                {isLoading && <p className="text-gray-600">Loading post...</p>}
                {error && <p className="text-red-600">{error}</p>}
                {post && (
                    <article className="border border-gray-200 rounded-md p-6 bg-white shadow-sm">
                        <p className="text-sm text-gray-500 mb-2">Post #{post.id}</p>
                        <h3 className="text-2xl font-semibold capitalize text-gray-900 mb-3">
                            {post.title}
                        </h3>
                        <p className="text-gray-600">{post.body}</p>
                    </article>
                )}

                <label htmlFor="post-id" className="block text-sm font-medium text-gray-700 mt-8 mb-2">
                    Choose another post
                </label>
                <input
                    id="post-id"
                    type="number"
                    min="1"
                    max="100"
                    value={id}
                    onChange={handleIdChange}
                    className="w-24 p-2 border border-gray-300 rounded-md text-gray-900"
                />
            </div>
        </section>
    );
}