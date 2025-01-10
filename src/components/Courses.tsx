import { CourseCard } from "./CourseCard";

const courses = [
  {
    title: "Counselling Psychology",
    description: "Counselling Psychology is a broad specialization within professional psychology that helps people with emotional and mental health issues.",
    duration: "8 weeks",
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158",
  },
  {
    title: "Learning Disability",
    description: "Learning difficulties is an umbrella term for academic problems of different origins. It comprises general learning difficulties and low academic performance.",
    duration: "6 weeks",
    image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c",
  },
  {
    title: "Marriage Counselling",
    description: "This course is designed for those who want to understand relationships in marriage and enhance the key points to improve the quality of the relationship between two married individuals.",
    duration: "7 weeks",
    image: "https://images.unsplash.com/photo-1721322800607-8c38375eef04",
  },
];

export const Courses = () => {
  return (
    <section className="py-24 bg-gradient-to-b from-secondary-light/5 to-white">
      <div className="container px-4 mx-auto">
        <div className="max-w-2xl mx-auto mb-16 text-center">
          <span className="inline-block px-4 py-1.5 mb-6 text-sm font-medium tracking-wider text-primary uppercase bg-primary-light/10 rounded-full">
            Our Courses
          </span>
          <h2 className="mb-4 text-4xl font-bold tracking-tight text-primary">
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
