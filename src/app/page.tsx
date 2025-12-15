import Link from "next/link";
import { getImages } from "../lib/actions";

export default async function Home() {
  const images = await getImages();

  return (
    <main style={{ padding: '20px' }}>
      <h1>My Art Works</h1>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))', gap: '20px' }}>
        {images.map((img) => (
          <Link key={img._id} href={`/imageblog/${img._id}`}>
            <img
              src={img.url}
              alt={img.title}
              style={{ width: '100%', height: 'auto', borderRadius: '8px' }}
            />
          </Link>
        ))}
      </div>
    </main>
  );
}
