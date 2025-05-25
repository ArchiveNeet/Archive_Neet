interface ProductProps {
  name: string;
  image_url: string; // Optional image URL
}

export default function Products({ name,  image_url }: ProductProps) {
  return (
    <div
      className="cursor-pointer border rounded-lg p-4 hover:shadow-lg"
    >
      <img src={image_url} alt={name} className="w-full h-48 object-cover mb-2" />
      <h2 className="text-lg font-semibold">{name}</h2>

    </div>
  );
}
