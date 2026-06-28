import { Button, Card, Chip } from "@heroui/react";
import Image from "next/image";
import Link from "next/link";
import { BookOpen, User } from "lucide-react";

const Books = ({ item }) => {
  return (
    <Card
      className="group overflow-hidden rounded-3xl border border-default-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl"
    >
      {/* Image */}
      <div className="overflow-hidden">
        <Image
          src={item.image_url || "/placeholder.jpg"}
          alt={item.title}
          width={400}
          height={500}
          priority
          className="h-72 w-full object-cover transition duration-500 group-hover:scale-110"
        />
      </div>

      {/* Content */}
      <div className="space-y-4 p-5">
        <Chip color="primary" variant="flat">
          {item.category}
        </Chip>

        <h3 className="line-clamp-2 text-2xl font-bold">
          {item.title}
        </h3>

        <div className="flex items-center gap-2 text-default-500">
          <User size={18} />
          <span>{item.author}</span>
        </div>

        <Link href={`/all-books/${item.id}`}>
          <Button
            color="primary"
            radius="full"
            className="w-full font-semibold"
            endContent={<BookOpen size={18} />}
          >
            View Details
          </Button>
        </Link>
      </div>
    </Card>
  );
};

export default Books;