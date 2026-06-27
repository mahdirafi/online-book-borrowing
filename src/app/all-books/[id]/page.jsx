import { Button, Chip, Card} from "@heroui/react";
import Image from "next/image";
import Link from "next/link";
import { getBooksById } from "@/lib/getBooks";

const BooksDetailsPage = async ({ params }) => {
    const {id} = await params 
  const book = await getBooksById(id);


  if (!book) {
    return (
      <div className="flex justify-center items-center h-[60vh]">
        <h2 className="text-3xl font-bold">Book Not Found</h2>
      </div>
    );
  }

  return (
    <section className="max-w-6xl mx-auto py-16 px-5">
      <Card className="shadow-xl border">
        <div className="grid lg:grid-cols-2 gap-10 p-8">

          {/* Left Side */}
          <div>
            <Image
              src={book.image_url}
              alt={book.title}
              width={500}
              height={700}
              className="rounded-xl w-full h-[600px] object-cover"
              priority
            />
          </div>

          {/* Right Side */}
          <div className="flex flex-col justify-center space-y-6">

            <Chip color="primary" variant="flat">
              {book.category}
            </Chip>

            <h1 className="text-5xl font-bold">
              {book.title}
            </h1>

            <h3 className="text-2xl text-gray-500">
              By {book.author}
            </h3>

            <div className="flex gap-3">
              <Chip color="success">
                {book.available_quantity} Available
              </Chip>

              <Chip color="warning">
                Library Collection
              </Chip>
            </div>

            <p className="text-gray-600 leading-8 text-lg">
              {book.description}
            </p>

           <Link href="/all-books">
                <Button
                    variant="bordered"
                    size="lg"
                >
                    ← Back
                </Button>
                </Link>

                <Button
                color="primary"
                size="lg"
                >
                Borrow Book
                </Button>

          </div>

        </div>
      </Card>
    </section>
  );
};

export default BooksDetailsPage;