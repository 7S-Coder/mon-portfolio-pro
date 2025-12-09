import { useState, useEffect } from 'react';
import skillsData from '../datas/skills.json';

function Skills() {
    const [skills, setSkills] = useState([]);

    useEffect(() => {
        setSkills(skillsData.skills);
    }, []);

    // Fonction pour organiser les compétences selon la maquette
    const organizeSkills = () => {
        const organized = {
            development: [],
            testing: [],
            management: []
        };

        skills.forEach(skillCategory => {
            Object.keys(skillCategory).forEach(categoryName => {
                if (categoryName === 'Front end' || categoryName === 'Back end' || categoryName === 'Dev Ops') {
                    organized.development.push({
                        name: categoryName,
                        skills: skillCategory[categoryName]
                    });
                } else if (categoryName === 'Test et qualité') {
                    Object.keys(skillCategory[categoryName]).forEach(subCategory => {
                        organized.testing.push({
                            name: subCategory,
                            skills: skillCategory[categoryName][subCategory]
                        });
                    });
                } else if (categoryName === 'Projets et management') {
                    Object.keys(skillCategory[categoryName]).forEach(subCategory => {
                        organized.management.push({
                            name: subCategory,
                            skills: skillCategory[categoryName][subCategory]
                        });
                    });
                }
            });
        });

        return organized;
    };

    const organizedSkills = organizeSkills();

    return (
        <section className="reveal py-20 px-6 bg-[#0D1117]" id="skills">
            <div className="max-w-7xl mx-auto">
                {/* Titre principal */}
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-bold text-[#E6EDF3] mb-4 font-satoshi">
                        Compétences
                    </h2>
                    <p className="text-[#5B5B5B] text-lg max-w-2xl mx-auto font-inter">
                        Découvrez mon expertise technique et mes domaines de spécialisation
                    </p>
                </div>

                {/* Grille des compétences */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {/* Colonne Développement */}
                    <div className="reveal group bg-gradient-to-br from-[#161B22] to-[#0D1117] rounded-2xl border border-[#21262D] p-8 hover:border-[#00BFA6] transition-all duration-500 hover:shadow-2xl hover:shadow-[#00BFA6]/10">
                        <div className="flex items-center mb-6">
                            <svg className="w-8 h-8 text-[#00BFA6] mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                            </svg>
                            <h3 className="text-[#E6EDF3] text-xl font-semibold font-['Poppins']">Développement</h3>
                        </div>
                        
                        {organizedSkills.development.map((category, index) => (
                            <div key={index} className="mb-6">
                                <h4 className="text-[#00BFA6] font-medium mb-3">{category.name}</h4>
                                <ul className="space-y-2">
                                    {category.skills.map((skill) => (
                                        <li key={skill.id} className="reveal text-[#5B5B5B] text-sm flex items-center hover:text-[#E6EDF3] transition-colors">
                                            <span className="w-1 h-1 bg-[#00BFA6] rounded-full mr-3"></span>
                                            {skill.name}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>

                    {/* Colonne Test & Qualité */}
                    <div className="reveal group bg-gradient-to-br from-[#161B22] to-[#0D1117] rounded-2xl border border-[#21262D] p-8 hover:border-[#00BFA6] transition-all duration-500 hover:shadow-2xl hover:shadow-[#00BFA6]/10">
                        <div className="flex items-center mb-6">
                            <svg className="w-8 h-8 text-[#00BFA6] mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                            <h3 className="text-[#E6EDF3] text-xl font-semibold font-['Poppins']">Test & Qualité</h3>
                        </div>
                        
                        {organizedSkills.testing.map((category, index) => (
                            <div key={index} className="mb-6">
                                <h4 className="text-[#00BFA6] font-medium mb-3">{category.name}</h4>
                                <ul className="space-y-2">
                                    {category.skills.map((skill) => (
                                        <li key={skill.id} className="text-[#5B5B5B] text-sm flex items-center hover:text-[#E6EDF3] transition-colors">
                                            <span className="w-1 h-1 bg-[#00BFA6] rounded-full mr-3"></span>
                                            {skill.name}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>

                    {/* Colonne Projets & Management */}
                    <div className="reveal group bg-gradient-to-br from-[#161B22] to-[#0D1117] rounded-2xl border border-[#21262D] p-8 hover:border-[#00BFA6] transition-all duration-500 hover:shadow-2xl hover:shadow-[#00BFA6]/10">
                        <div className="flex items-center mb-6">
                            <svg className="w-8 h-8 text-[#00BFA6] mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                            </svg>
                            <h3 className="text-[#E6EDF3] text-xl font-semibold font-['Poppins']">Projets & Management</h3>
                        </div>
                        
                        {organizedSkills.management.map((category, index) => (
                            <div key={index} className="mb-6">
                                <h4 className="text-[#00BFA6] font-medium mb-3">{category.name}</h4>
                                <ul className="space-y-2">
                                    {category.skills.map((skill) => (
                                        <li key={skill.id} className="text-[#5B5B5B] text-sm flex items-center hover:text-[#E6EDF3] transition-colors">
                                            <span className="w-1 h-1 bg-[#00BFA6] rounded-full mr-3"></span>
                                            {skill.name}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Skills;