import React from 'react';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-100 text-gray-800">
      {/* Header */}
      <header className="bg-white shadow-md p-4">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-2xl font-bold text-primary-600">React 19 Template</h1>
          <nav className="space-x-4">
            <a href="#" className="hover:text-blue-500">
              Home
            </a>
            <a href="#" className="hover:text-blue-500">
              About
            </a>
            <a href="#" className="hover:text-blue-500">
              Contact
            </a>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-blue-600 text-white py-20 text-center">
        <h2 className="text-4xl font-bold mb-4">Welcome to Tailwind-4 + React-19 + TypeScript</h2>
        <p className="text-lg">This page is built with speed and simplicity in mind.</p>
      </section>
      {/* Cards Section */}
      <section className="container mx-auto px-4 py-12">
        <h3 className="text-2xl font-semibold mb-6 text-center">Features</h3>
        <div className="grid md:grid-cols-3 gap-6">
          {['Fast', 'Responsive', 'Customizable'].map((feature, index) => (
            <div
              key={index}
              className="bg-background p-6 rounded-lg shadow-lg hover:shadow-xl transition duration-300"
            >
              <h4 className="text-xl font-semibold text-blue-600 mb-2 border-2 border-3 rounded-lg border-black-100 p-2">
                {feature}
              </h4>
              <p className="text-gray-600">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nisl eros.
              </p>
              <div className="animate-bounce delay-150 duration-300 mt-10 text-center">
                Click here
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default App;
