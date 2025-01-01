import { CourseCard } from "./CourseCard";

const courses = [
  {
    title: "Emotional Intelligence Mastery",
    description: "Develop deeper self-awareness and better relationship skills",
    price: "$199",
    duration: "8 weeks",
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158",
  },
  {
    title: "Stress Management & Resilience",
    description: "Learn practical techniques to handle stress effectively",
    price: "$149",
    duration: "6 weeks",
    image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c",
  },
  {
    title: "Mindful Living",
    description: "Incorporate mindfulness practices into your daily life",
    price: "$179",
    duration: "7 weeks",
    image: "https://images.unsplash.com/photo-1721322800607-8c38375eef04",
  },
];

export const Courses = () => {
  return (
    <section className="py-24 bg-sage-50">
      <div className="container px-4 mx-auto">
        <div className="max-w-2xl mx-auto mb-16 text-center">
          <span className="inline-block px-4 py-1.5 mb-6 text-sm font-medium tracking-wider text-sage-700 uppercase bg-sage-100 rounded-full">
            Our Courses
          </span>
          <h2 className="mb-4 text-4xl font-bold tracking-tight text-gray-900">
            Start Your Growth Journey Today
          </h2>
          <p className="text-lg text-gray-600">
            Choose from our selection of expert-crafted courses designed to support
            your personal development.
          </p>
        </div>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {courses.map((course) => (
            <CourseCard key={course.title} {...course} />
          ))}
        </div>
      </div>
    </section>
  );
};