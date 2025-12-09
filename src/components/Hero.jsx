import '../App.css';

function Hero() {
  return (
    <section className="reveal h-screen min-h-screen flex flex-col justify-center items-center bg-gradient-to-b from-gray-800 to-gray-900 text-gray-200">
      <h2 className="text-4xl font-bold mb-4 font-satoshi">Bienvenue sur mon portfolio</h2>
      <p className="text-lg text-center max-w-2xl font-inter">
        <em>Je conçois, teste et déploie des applications web performantes et fiables.</em>
      </p>
      <p className="text-lg text-center max-w-2xl mt-4 font-inter">
        Développeur Full Stack, Testeur Certifié ISTQB et passionné par l’automatisation, le développement web et la qualité logicielle.
      </p>
      <div className="btn-gallery mt-6 flex gap-4">
        <button 
        onClick={() => {
            document.getElementById("projects").scrollIntoView({ behavior: "smooth" });
          }}className="flex-1 bg-[#00BFA6] hover:bg-[#00D8A1] text-[#0D1117] px-5 py-3 rounded-xl font-medium transition-all duration-300 flex items-center justify-center gap-2 group/btn hover:shadow-lg hover:shadow-[#00BFA6]/25">
          <span>Voir mes projets</span>
        </button>
        <button
          onClick={() => {
            const link = document.createElement("a");
            link.href = "/CV_Testeur.pdf"; // Chemin vers votre CV dans le dossier public
            link.download = "CV_Testeur.pdf"; // Nom du fichier téléchargé
            link.click();
          }}
          className="flex-1 bg-[#21262D]/50 backdrop-blur-sm border border-[#30363D] hover:border-[#00BFA6]/50 text-[#E6EDF3] hover:text-[#00BFA6] px-5 py-3 rounded-xl transition-all duration-300 flex items-center gap-2 group/btn"
        >
          <span>Télécharger mon CV</span>
        </button>
        <button
          onClick={() => {
            document.getElementById("contact").scrollIntoView({ behavior: "smooth" });
          }}
          className="flex-1 bg-[#21262D]/50 backdrop-blur-sm border border-[#30363D] hover:border-[#00BFA6]/50 text-[#E6EDF3] hover:text-[#00BFA6] px-5 py-3 rounded-xl transition-all duration-300 flex items-center gap-2 group/btn"
        >
          <span>Me contacter</span>
        </button>
      </div>
    </section>
  );
}

export default Hero;