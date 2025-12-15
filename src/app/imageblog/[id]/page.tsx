import { getImage } from "../../../lib/actions";

export default async function ImageBlog({ params }) {
  const image = await getImage(params.id);

  if (!image) {
    return (
      <main style={{ padding: '20px' }}>
        <h1>Image not found</h1>
      </main>
    );
  }

  return (
    <main style={{ padding: '20px' }}>
      <h1>{image.title}</h1>
      <img src={image.url} alt={image.title} style={{ maxWidth: '100%', height: 'auto' }} />
      <p>{image.description}</p>
      <p>Created on: {new Date(image.time).toLocaleDateString()}</p>
    </main>
  );
}