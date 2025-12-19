export default function ProjectCard({ project, onClick }) {
  return (
    <article className="bg-white rounded-2xl shadow hover:shadow-lg transition overflow-hidden flex flex-col">
      <img
        src={project.image}
        className="w-full h-56 object-cover"
        alt={project.title}
      />

      <div className="p-6 flex flex-col flex-1">
        <h3 className="font-semibold text-xl mb-3">
          {project.title}
        </h3>

        <p className="text-gray-600 text-base mb-6 flex-1">
          {project.desc}
        </p>

        <button
          onClick={onClick}
          className="block w-full text-center bg-gray-900 text-white py-3 rounded-xl font-semibold hover:bg-gray-800 transition"
        >
          Lihat
        </button>
      </div>
    </article>
  );
}
