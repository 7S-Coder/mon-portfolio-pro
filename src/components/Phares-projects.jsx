import React from 'react';
import projectsData from '../datas/Phares-Projects.json';

function PharesProjects() {
    const projects = projectsData['phares-projects'];

    return (
        <section className="py-20 px-6 bg-[#0D1117]" id="projects">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-bold text-[#E6EDF3] mb-4 font-inter">
                        Projets phares
                    </h2>
                    <p className="text-[#5B5B5B] text-lg max-w-2xl mx-auto font-inter">
                        Découvrez mes réalisations les plus marquantes, de la conception à la mise en production
                    </p>
                </div>
                
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    {projects.map((project) => (
                        <div 
                            key={project.id} 
                            className="group bg-gradient-to-br from-[#161B22] to-[#0D1117] rounded-2xl border border-[#21262D] overflow-hidden hover:border-[#00BFA6] transition-all duration-500 hover:shadow-2xl hover:shadow-[#00BFA6]/10 hover:scale-[1.02]"
                        >
                            {/* Image du projet avec overlay */}
                            <div className="relative h-56 overflow-hidden">
                                {project.image ? (
                                    <img 
                                        src={`src/assets/${project.image}`} 
                                        alt={project.name}
                                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                                    />
                                ) : (
                                    <div className="w-full h-full bg-gradient-to-br from-[#21262D] to-[#161B22] flex items-center justify-center">
                                        <div className="text-6xl opacity-40">�</div>
                                    </div>
                                )}
                                
                                {/* Overlay gradient */}
                                <div className="absolute inset-0 bg-gradient-to-t from-[#0D1117]/90 via-transparent to-transparent"></div>
                                
                                {/* Badge premium */}
                                <div className="absolute top-4 left-4">
                                    <div className="bg-[#00BFA6]/20 backdrop-blur-sm border border-[#00BFA6]/30 px-3 py-1 rounded-full">
                                        <span className="text-[#00BFA6] text-sm font-medium">✨ Projet</span>
                                    </div>
                                </div>
                            </div>
                            
                            {/* Contenu de la carte */}
                            <div className="p-8">
                                <div className="flex items-start justify-between mb-4">
                                    <h3 className="text-2xl font-bold text-[#E6EDF3] group-hover:text-[#00BFA6] transition-colors font-satoshi">
                                        {project.name}
                                    </h3>
                                    {project.link && (
                                        <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                            <svg className="w-5 h-5 text-[#00BFA6]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                                            </svg>
                                        </div>
                                    )}
                                </div>
                                
                                <p className="text-[#5B5B5B] mb-6 leading-relaxed text-[15px] font-inter">
                                    {project.description}
                                </p>
                                
                                {/* Technologies avec design moderne */}
                                <div className="mb-6">
                                    <div className="flex flex-wrap gap-2">
                                        {project.technologies.map((tech, index) => (
                                            <span 
                                                key={index}
                                                className="bg-[#21262D] text-[#E6EDF3] px-3 py-1 rounded-full text-sm border border-[#30363D] hover:border-[#00BFA6]/50 hover:bg-[#00BFA6]/10 transition-all duration-300"
                                            >
                                                {tech}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                                
                                {/* Boutons avec effet glassmorphism */}
                                <div className="flex gap-3">
                                    {project.link && (
                                        <a 
                                            href={project.link} 
                                            target="_blank" 
                                            rel="noopener noreferrer"
                                            className="flex-1 bg-[#00BFA6] hover:bg-[#00D8A1] text-[#0D1117] px-5 py-3 rounded-xl font-medium transition-all duration-300 flex items-center justify-center gap-2 group/btn hover:shadow-lg hover:shadow-[#00BFA6]/25"
                                        >
                                            <span>Voir le site</span>
                                            <svg className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                                            </svg>
                                        </a>
                                    )}
                                    
                                    <button className="bg-[#21262D]/50 backdrop-blur-sm border border-[#30363D] hover:border-[#00BFA6]/50 text-[#E6EDF3] hover:text-[#00BFA6] px-5 py-3 rounded-xl transition-all duration-300 flex items-center gap-2 group/btn">
                                        <svg className="w-4 h-4 group-hover/btn:rotate-12 transition-transform" fill="currentColor" viewBox="0 0 24 24">
                                            <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                                        </svg>
                                        <span>Code</span>
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default PharesProjects;