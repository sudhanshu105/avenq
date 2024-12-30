// import React from 'react';

const projects = [
  {
    title: 'Product Website',
    description: 'A full-featured online shopping platform ',
    image: 'https://images.unsplash.com/photo-1661956602116-aa6865609028?auto=format&fit=crop&q=80&w=800&h=600',
    category: 'Web Development',
  },
  {
    title: 'Social Media App',
    description: 'Mobile application for Content posting and community engagement.',
    image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&q=80&w=800&h=600',
    category: 'Mobile Development',
  },
  // {
  //   title: 'Financial Dashboard',
  //   description: 'Real-time analytics dashboard for financial data visualization.',
  //   image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800&h=600',
  //   category: 'UI/UX Design',
  // },
];

const Portfolio = () => {
  return (
    <section id="work" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Our Work
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500">
            Check out some of our recent projects
          </p>
        </div>

        <div className="mt-20 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow">
              <div className="relative h-48">
                <img
                  className="w-full h-full object-cover"
                  src={project.image}
                  alt={project.title}
                />
              </div>
              <div className="p-6">
                <div className="text-sm font-medium text-teal-600">
                  {project.category}
                </div>
                <h3 className="mt-2 text-xl font-semibold text-gray-900">
                  {project.title}
                </h3>
                <p className="mt-2 text-base text-gray-500">
                  {project.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;