import { Card, CardContent, CardFooter, CardHeader } from "./ui/card";
import { Button } from "./ui/button";

interface CourseCardProps {
  title: string;
  description: string;
  duration: string;
  image: string;
}

export const CourseCard = ({
  title,
  description,
  duration,
  image,
}: CourseCardProps) => {
  return (
    <Card className="overflow-hidden transition-all duration-300 hover:shadow-lg hover:-translate-y-1 group bg-white/80 backdrop-blur-sm border-primary-light/20">
      <CardHeader className="p-0">
        <div className="relative overflow-hidden">
          <picture>
            <source
              srcSet={`${image}?w=800&fm=webp`}
              type="image/webp"
              media="(min-width: 800px)"
            />
            <source
              srcSet={`${image}?w=400&fm=webp`}
              type="image/webp"
              media="(min-width: 400px)"
            />
            <img
              src={`${image}?w=400`}
              alt={title}
              className="object-cover w-full h-48 transition-transform duration-300 group-hover:scale-110"
              loading="lazy"
              width="400"
              height="192"
            />
          </picture>
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
        </div>
      </CardHeader>
      <CardContent className="p-6">
        <div className="flex gap-2 mb-4">
          <span className="px-3 py-1 text-xs font-medium text-primary bg-primary-light/10 rounded-full">
            {duration}
          </span>
        </div>
        <h3 className="mb-2 text-xl font-semibold text-gray-900">{title}</h3>
        <p className="text-gray-600">{description}</p>
      </CardContent>
      <CardFooter className="p-6 pt-0">
        <Button 
          className="w-full bg-primary hover:bg-primary-dark transition-colors"
          onClick={() => window.location.href = 'https://www.endorphin.in'}
        >
          Learn More
        </Button>
      </CardFooter>
    </Card>
  );
};