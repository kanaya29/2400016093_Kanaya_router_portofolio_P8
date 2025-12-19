import foto from "../assets/foto-profil.jpg";

export default function Home() {
  return (
    <section className="h-20 item-center bg-gray-50 px-10 pt-32">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-16">
        <img
          src={foto}
          alt="Profil Kanaya"
          className="w-64 h-64 md:w-80 md:h-80 rounded-full object-cover shadow-xl"
        />

        <div className="max-w-3xl">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Halo! Saya Kanaya Ailsa Sudarjono
          </h2>
          <p className="text-lg md:text-xl text-gray-600 leading-relaxed">
            Saya Kanaya Ailsa Sudarjono, mahasiswa semester 3 di Universitas Ahmad Dahlan.
            Saya memiliki ketertarikan pada bidang desain web dan pengembangan front-end.
            Saya senang membuat tampilan website yang menarik, interaktif, dan mudah digunakan.
            Saat ini saya terus belajar UI/UX dan web responsif.
          </p>
        </div>
      </div>
    </section>
  );
}