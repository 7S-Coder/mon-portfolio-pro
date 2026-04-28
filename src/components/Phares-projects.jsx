import React from 'react';
import projectsData from '../datas/Phares-Projects.json';

function PharesProjects() {
    const projects = projectsData['phares-projects'];

    return (
        <section className="reveal py-20 px-6 bg-[#0D1117]" id="projects">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-bold text-[#E6EDF3] mb-4 font-inter">
                        Projets QA
                    </h2>
                    <p className="text-[#5B5B5B] text-lg max-w-2xl mx-auto font-inter">
                        Découvrez mes réalisations QA les plus marquantes
                    </p>
                </div>
                
                <div className="space-y-8">
                    {projects.map((project) => (
                        <div 
                            key={project.id} 
                            className="reveal group bg-gradient-to-br from-[#161B22] to-[#0D1117] rounded-2xl border border-[#21262D] p-8 hover:border-[#00BFA6] transition-all duration-500 hover:shadow-2xl hover:shadow-[#00BFA6]/10"
                        >
                            {/* Titre du projet */}
                            <h3 className="text-2xl font-bold text-[#E6EDF3] mb-2 group-hover:text-[#00BFA6] transition-colors font-satoshi">
                                 {project.name}
                            </h3>
                            
                            {/* Lien vers le site */}
                            {project.link && (
                                <a 
                                    href={project.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-[#00BFA6] hover:text-[#00D8A1] text-sm font-medium mb-6 inline-flex items-center gap-2 transition-colors"
                                >
                                    Visiter le site
                                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                                    </svg>
                                </a>
                            )}
                            
                            {/* Grille 2x2 */}
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                {/* Objectif */}
                                <div className="bg-[#0D1117]/50 rounded-lg p-4 border border-[#21262D]">
                                    <h4 className="text-[#00BFA6] font-semibold mb-2 flex items-center">
                                        <span className="text-lg mr-2"></span> Objectif
                                    </h4>
                                    <p className="text-[#5B5B5B] text-sm">
                                        {project.objective}
                                    </p>
                                </div>
                                
                                {/* Outils */}
                                <div className="bg-[#0D1117]/50 rounded-lg p-4 border border-[#21262D]">
                                    <h4 className="text-[#00BFA6] font-semibold mb-3 flex items-center">
                                        <span className="text-lg mr-2"></span> Outils
                                    </h4>
                                    <div className="flex flex-wrap gap-2">
                                        {project.tools.map((tool, index) => (
                                            <span 
                                                key={index}
                                                className="bg-[#21262D] text-[#E6EDF3] px-3 py-1 rounded-full text-xs border border-[#30363D]"
                                            >
                                                {tool}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                                
                                {/* Livrables */}
                                <div className="bg-[#0D1117]/50 rounded-lg p-4 border border-[#21262D]">
                                    <h4 className="text-[#00BFA6] font-semibold mb-3 flex items-center">
                                        <span className="text-lg mr-2"></span> Livrables
                                    </h4>
                                    <ul className="space-y-1">
                                        {project.deliverables.map((deliverable, index) => (
                                            <li key={index} className="text-[#5B5B5B] text-sm flex items-center">
                                                <span className="w-1 h-1 bg-[#00BFA6] rounded-full mr-2"></span>
                                                {deliverable}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                                
                                {/* Résultats */}
                                <div className="bg-[#0D1117]/50 rounded-lg p-4 border border-[#21262D]">
                                    <h4 className="text-[#00BFA6] font-semibold mb-3 flex items-center">
                                        <span className="text-lg mr-2"></span> Résultats
                                    </h4>
                                    <ul className="space-y-1 text-sm">
                                        <li className="text-[#5B5B5B]"><span className="text-[#00BFA6] font-medium">{project.results.bugsDetected}</span> bugs détectés</li>
                                        <li className="text-[#5B5B5B]"><span className="text-[#00BFA6] font-medium">{project.results.successRate}</span> de tests réussis</li>
                                        <li className="text-[#5B5B5B]"><span className="text-[#00BFA6] font-medium">{project.results.criticalAnomalies}</span> anomalies critiques</li>
                                    </ul>
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