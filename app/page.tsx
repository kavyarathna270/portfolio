export default function Home() {
  return (
    <main className="min-h-screen bg-gray-900 text-white p-6">
      
      {/* Hero Section */}
      <section className="mb-10">
        <h1 className="text-4xl font-bold">Hi, I'm Kavya 👋</h1>
        <p className="text-gray-400 mt-2">
          Frontend Developer passionate about building interactive web apps.
        </p>
      </section>

      {/* Skills */}
      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-3">Skills</h2>
        <div className="flex flex-wrap gap-3">
          {["React", "Next.js", "TypeScript", "Tailwind CSS"].map(skill => (
            <span key={skill} className="bg-gray-800 px-3 py-1 rounded">
              {skill}
            </span>
          ))}
        </div>
      </section>

      {/* Projects */}
      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-3">Projects</h2>

        <div className="space-y-4">
          <div className="p-4 bg-gray-800 rounded">
            <h3 className="text-xl font-semibold">Live Code Editor</h3>
            <p className="text-gray-400">
              A browser-based code editor with real-time preview.
            </p>
            <a
              href="https://github.com/YOUR_USERNAME/code-editor"
              target="_blank"
              className="text-blue-400 underline"
            >
              View on GitHub
            </a>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section>
        <h2 className="text-2xl font-semibold mb-3">Contact</h2>
        <p>
          LinkedIn:{" "}
          <a
            href="https://linkedin.com/in/YOUR_PROFILE"
            className="text-blue-400 underline"
          >
            Your Profile
          </a>
        </p>
      </section>

    </main>
  );
}