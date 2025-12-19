import { useState } from "react";
import ProjectCard from "../components/ProjectCard";
import p1 from "../assets/project1.png";
import p2 from "../assets/project2.png";
import p3 from "../assets/project3.png";

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);

  const projects = [
    {
      image: p1,
      title: "Eksplorasi Bahasa Pemrograman Python",
      desc: "Menerapkan konsep-konsep dasar yang dipelajari dari mata kuliah Dasar Pemrograman dan Algoritma & Pemrograman.",
      detail:
        "Proyek ini dilakukan untuk memahami dasar-dasar Python seperti variabel, loop, fungsi, dan struktur data. Materi dari kelas diterapkan langsung melalui latihan dan proyek kecil."
    },
    {
      image: p2,
      title: "Website Profile Pribadi",
      desc: "Mengembangkan portofolio web pribadi yang responsif menggunakan HTML dan CSS (Flexbox & Grid) untuk menampilkan profil dan proyek secara profesional.",
      detail:
        "Website ini dibuat untuk memamerkan proyek-proyek yang telah dikerjakan, menggunakan layout responsif agar bisa diakses dengan baik di berbagai perangkat."
    },
    {
      image: p3,
      title: "Random Useless Facts",
      desc: "Membuat sebuah game seru berbasis website yang menyajikan berbagai fakta unik, lucu, dan kadang tidak berguna tapi menarik untuk diketahui.",
      detail:
        "Proyek ini bertujuan menggabungkan JavaScript dengan DOM manipulation untuk membuat interaksi menarik bagi pengguna, sekaligus belajar API fetching untuk menampilkan fakta secara random."
    }
  ];

  return (
    <section className="min-h-screen bg-gray-50 px-6 md:px-10 pt-24">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-14">
          Project Saya
        </h2>

        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, i) => (
            <ProjectCard
              key={i}
              project={project}
              onClick={() => setSelectedProject(project)}
            />
          ))}
        </div>

        {selectedProject && (
          <div className="fixed inset-0 z-50 bg-black flex items-center justify-center p-4 overflow-y-auto">
            <div className="bg-white w-full max-w-4xl rounded-3xl shadow-xl relative max-h-[90vh] overflow-y-auto p-6 md:p-8">
              <button
                className="absolute top-4 right-4 text-3xl font-bold text-gray-700 hover:text-black"
                onClick={() => setSelectedProject(null)}
              >
                ×
              </button>

              <h3 className="text-3xl font-bold mb-6">
                {selectedProject.title}
              </h3>

              <img
                src={selectedProject.image}
                alt={selectedProject.title}
                className="w-full h-72 md:h-96 object-cover rounded-xl mb-6"
              />

              <p className="text-gray-700 text-lg leading-relaxed">
                {selectedProject.detail}
              </p>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
