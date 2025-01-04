import { Card, CardContent, CardFooter, CardHeader } from "./ui/card";
import { Button } from "./ui/button";

interface CourseCardProps {
  title: string;
  description: string;
  price: string;
  duration: string;
  image: string;
}

export const CourseCard = ({
  title,
  description,
  price,
  duration,
  image,
}: CourseCardProps) => {
  return (
    <Card className="overflow-hidden transition-all duration-300 hover:shadow-lg hover:-translate-y-1 group bg-white/80 backdrop-blur-sm border-sage-100">
      <CardHeader className="p-0">
        <div className="relative overflow-hidden">
          <img
            src={image}
            alt={title}
            className="object-cover w-full h-48 transition-transform duration-300 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
        </div>
      </CardHeader>
      <CardContent className="p-6">
        <div className="flex gap-2 mb-4">
          <span className="px-3 py-1 text-xs font-medium text-sage-700 bg-sage-100 rounded-full">
            {duration}
          </span>
          <span className="px-3 py-1 text-xs font-medium text-cream-700 bg-cream-100 rounded-full">
            {price}
          </span>
        </div>
        <h3 className="mb-2 text-xl font-semibold text-gray-900">{title}</h3>
        <p className="text-gray-600">{description}</p>
      </CardContent>
      <CardFooter className="p-6 pt-0">
        <Button className="w-full bg-sage-600 hover:bg-sage-700 transition-colors">
          Learn More
        </Button>
      </CardFooter>
    </Card>
  );
};