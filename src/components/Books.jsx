import { Button, Card } from "@heroui/react";
import Image from "next/image";
import Link from "next/link";

const Books = ({ item }) => {
  return (
    <div className="border rounded-lg p-4 shadow hover:shadow-lg transition space-y-4">
      <Card>

      <Image
        src={item.image_url || "/placeholder.jpg"}
        alt={item.title}
        width={250} height={300}
        className="w-full h-64 object-cover rounded"
        priority
      />

      <h3 className="text-xl font-semibold mt-4">
        {item.title}
      </h3>

      <p className="text-gray-600">
        {item.author}
      </p>

      <p className="mt-2">
        Category: {item.category}
      </p>

 
      <Link
        href={`/all-books/${item.id}`}
        className="btn btn-primary w-full mt-4" >
       <Button> View Details</Button>
      </Link>

    </Card>
    </div>
  );
};

export default Books;