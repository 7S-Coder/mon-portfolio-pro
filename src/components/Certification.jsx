import { useState, useEffect } from 'react';
import certificationsData from '../datas/Certifications.json';

function Certifications() {
    // Initialize immediately from data to avoid empty first render
    const [certifications, setCertifications] = useState(certificationsData.certifications || []);

    useEffect(() => {
        if (!certifications || certifications.length === 0) {
            setCertifications(certificationsData.certifications || []);
        }
    }, []);

    return (
        <section className="reveal py-20 px-6 bg-[#0D1117]" id="certifications">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-bold text-[#E6EDF3] mb-4 font-satoshi">
                        Formations
                    </h2>
                    <p className="text-[#5B5B5B] text-lg max-w-2xl mx-auto font-inter">
                        Découvrez mes certifications professionnelles et académiques
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    {certifications.map((category, index) => (
                        <div key={index} className="reveal group bg-gradient-to-br from-[#161B22] to-[#0D1117] rounded-2xl border border-[#21262D] p-8 hover:border-[#00BFA6] transition-all duration-500 hover:shadow-2xl hover:shadow-[#00BFA6]/10">
                            {Object.keys(category).map((categoryName) => (
                                <div key={categoryName}>
                                    <h3 className="text-[#E6EDF3] text-xl font-semibold mb-4 font-satoshi">
                                        {categoryName}
                                    </h3>
                                    <ul className="space-y-4">
                                        {category[categoryName].map((certification, certIndex) => (
                                            <li key={certIndex} className="reveal text-[#5B5B5B] text-sm flex flex-col">
                                                <span className="text-[#E6EDF3] font-medium">
                                                    {certification.name}
                                                </span>
                                                <span className="text-[#00BFA6] text-xs">
                                                    {certification.date}
                                                </span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            ))}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Certifications;