import { useEffect, useState } from "react";

export default function Card() {
    const [imagesUrl, setImagesUrl] = useState([]);

    async function getPhotos() {
        const res = await fetch("https://jsonplaceholder.typicode.com/comments/");
        return res.json();
    }

    useEffect(() => {
        // Fetch photos when the component mounts
        const fetchPhotos = async () => {
            const photo = await getPhotos();
            setImagesUrl([photo]); // Wrap in an array because the API returns a single object in this case
        };

        fetchPhotos();
    }, []);

    return (
        <div className="">
            {imagesUrl.map((image) => (
                <div key={image.id}>
                <h1 key={image.id}>{image.name}</h1>
                <h1>{image.email}</h1>
                </div>
            ))}
        </div>
    );
}
