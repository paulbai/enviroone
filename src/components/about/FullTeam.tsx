"use client";

import React, { useState } from "react";
import { Section } from "@/components/ui/Section";
import { motion, AnimatePresence } from "framer-motion";
import { X, ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

// Define the Team Data
const teamMembers = [
    {
        name: "Dr. David M. Kargbo",
        role: "Chairman & CEO",
        bio: "Dr. David M. Kargbo is Chairman and CEO of EnviroOne. He holds M.S. and Ph.D. degrees in Agronomy (Soil Science specialty) from the University of Nebraska. He previously served as Director of the Center for Climate Change, Water Security, and Environmental Sustainability at the American University of Iraq–Baghdad (AUIB), a UN Food and Agriculture Organization (FAO) Fellow, an adjunct professor of environmental engineering at Temple University, and a senior scientist with the U.S. Environmental Protection Agency. He founded EnviroOne’s vision, has published extensively, and recently authored a game-changing book on climate change. His work has earned multiple honors, including a U.S. government gold medal.",
        image: "/team/david_kargbo.png",
    },
    {
        name: "Bai Sheka Wurie, M.A.",
        role: "Senior Vice President",
        bio: "Mr. Bai Sheka Wurie has been Senior Vice President of EnviroOne since 2024, following his role as Head of Agricultural Activities. He holds a B.A. in Human Resource Management and a B.Sc. in Agricultural Extension with a focus on rural sociology and development. With broad experience in health, agriculture, and community development, he is known for his motivational leadership and grassroots engagement. Under his guidance, EnviroOne has expanded its work in agriculture, water security, and sustainability. His leadership has earned the organization national recognition for its transformative impact across Sierra Leone’s rural and human development sectors.",
        image: "/team/bai_sheka_wurie.png",
    },
    {
        name: "Hajaratu Fullah, MBA",
        role: "Vice President of Operations",
        bio: "Hajaratu Fullah is Vice President of Operations at EnviroOne. With a B.S. in Agriculture and an MBA in Agribusiness Management, she brings over a decade of experience in rural development, women’s economic empowerment, and sustainable agribusiness. Hajaratu leads the design and execution of community-led initiatives that blend indigenous knowledge with modern regenerative practices. In her current role, she oversees project implementation across multiple districts, directs women-led microenterprises, and ensures strategic partnerships and policy engagement. Her leadership reflects a deep commitment to gender equity, climate resilience, and innovation for lasting impact in Sierra Leone.",
        image: "/team/hajaratu_fullah_final.jpg?v=20260131b",
    },
    {
        name: "Mark Nastasi, MBA",
        role: "Business Manager & Co-Founder",
        bio: "Mr. Mark Nastasi is the Business Manager for EnviroOne and leads our smart irrigation valve team to benefit the EnviroOne community. Mark has over 18 years of computer software engineering and is highly skilled in robotic engineering, Andriod Phone Application development, and sensor technologies. He holds a Bachelor’s from Rutgers University School of Business with a Major in Finance and a Minor in Management Information Systems and a Master’s Degree from Drexel University. He developed leading legal management software applications, founded CobbleStone Systems a computer software company, and is co-founder of EnviroOne.",
        image: "/team/mark_nastasi.png",
    },
    {
        name: "Dr. Alhassan Kanu",
        role: "Senior Advisor, Clean Water",
        bio: "Dr. Alhassan Kanu is a senior advisor to EnviroOne’s Clean Water Program. He holds a doctorate in Public Health from Walden University, USA, as well as an MBA, MSc, and MPH degrees. As a Public Health Professional for over 10 years, Dr. Kanu has gained progressive experience in the management of public health systems within Sierra Leone. He also has health systems & reproductive, maternal, newborn & child health (RMNCH) programming and coordination skills, excellent managerial, and teamwork/ interpersonal skills. His primary interests include sexual & reproductive health (SRH), maternal & child healthcare (MCH) services utilization, public health nutrition, and health sector governance.",
        image: "/team/alhassan_kanu.png",
    },
    {
        name: "Desmond Kargbo, BSc.",
        role: "Head of Traditional Public Health",
        bio: "Mr. Desmond Kargbo is Head of EnviroOne’s Traditional Public Health Unit. He leads efforts to preserve and promote the safe use of indigenous herbal medicine through community training, documentation, and engagement with traditional healers. With over 10 years of experience, Desmond works to align local health practices with national public health standards, ensuring rural communities benefit from trusted, culturally grounded care.",
        image: "/team/desmond_kargbo.png",
    },
    {
        name: "Prince B Koroma",
        role: "Agriculture & Water Specialist",
        bio: "Prince is the agriculture and water resources specialist at EnviroOne. He holds a Diploma in Agriculture. Prince oversees the water well drilling operations in the District and assists in supervising agricultural activities in the EnviroOne farming complex in Makeni Roc Fola. He continues to receive praise from management for being very productive in all of his duties.",
        image: "/team/prince_koroma.png",
    },
    {
        name: "Samuel Yamba",
        role: "Head of Farm Operations",
        bio: "Samuel heads the farm operations in the EnviroOne’s agriculture programs in Lower Yoni and Kaffu Bullom chiefdoms in Sierra Leone. Samuel is a retiree from the Sierra Leone Police Force. He is a people’s person whose daily interactions with the communities has greatly increased cooperation between EnviroOne and project beneficiaries.",
        image: "/team/samuel_yamba.png",
    },
    {
        name: "Dan Koroma, PhD",
        role: "Board Member & Policy Analyst",
        bio: "Dr. Koroma is a member of EnviroOne’s Board of Directors and has volunteered in the EnviroOne program development. He is an Environmental Policy Analyst with the Department of Ecology in Washington State. Dan holds a Post Graduate Diploma in Agricultural Economics from the University of Reading, England; a Masters in Agricultural Economics, University of Nebraska, USA and a Ph.D. in Environmental and Natural Resource Sciences from Washington State University, WA USA.",
        image: "/team/dan_koroma.png",
    },
    {
        name: "Sally B Kargbo, BSc, RN",
        role: "Board Member & Health Lead",
        bio: "Sally is a member of the Board of Directors and heads all human health component of EnviroOne. She holds a bachelor's degree (biology major) from the University of Sierra Leone, a BSc (Nursing) from Holy Family University, and is also a Registered Nursing (RN) professional. Sally is a Registered Nurse at Temple University Hospital. Her tireless efforts in the organization's day-to-day activities as well as promoting EnviroOne in the United States and abroad have contributed significantly to the success of EnviroOne.",
        image: "/team/sally_kargbo.png",
    },
    {
        name: "D. Kofi Asante-Duah, PhD",
        role: "Chief Innovation Specialist",
        bio: "Dr. Asante-Duah is Chief Innovation Specialist at EnviroOne. He received his PhD in Hydrology & Water Management from the Technical University of Budapest, Hungary, and MSc in Engineering Hydrology from the National University of Ireland. He has authored nine world acclaimed books in the areas of risk assessment, management of contaminated sites, and international trade in hazardous waste. He was a World Bank’s Robert S. McNamara Fellow; a Visiting Research Scholar/Fellow, Institute for Risk Research, Canada; a 1984 UNESCO Fellow and twice received the 1st Place Award Winner at the ASCE National Hazardous Waste Essay Competition.",
        image: "/team/kofi_asante_duah.png",
    },
    {
        name: "Dawn Flitcraft, B.Sc",
        role: "Executive Team Support",
        bio: "Dawn earned a BS in Nuclear Medicine & Biology from Cedar Crest College in Allentown PA and holds a certification in M&A integration. Ms. Flitcraft is currently a member of the executive team at WIRB-Copernicus Group (WCG). Prior work experience include COO and General Manager at Keosys Medical Imaging, responsible for leading all business and operational activities in North America; and Director of Project Management, then Vice president and later Senior Vice President of Client services at Bioclinica. Ms. Flitcraft’s knowledge and passion for human development has been a great asset to EnviroOne.",
        image: "/team/dawn_flitcraft.png",
    },
    {
        name: "Tim Conaway, B.A.",
        role: "Media Director",
        bio: "Tim has been an invaluable addition to the EnviroOne media team; taking the lead on our magazine, newsletter, website, and other media-related issues. He holds a B.A degree in Media Communications from Asbury University, where he graduated from in 2011. He is currently the media director for Trinity United Methodist Church in Mullica Hill, NJ and the Founder of Ugalicreative, LLC a multi media design consultancy.",
        image: "/team/tim_conaway.png",
    },
    {
        name: "Peter Keller, BSc.",
        role: "Applications Lead",
        bio: "Peter is part of the EniviroOne applications development team, taking the lead on the development of the iOS and Android companion apps. He holds a BS degree in Computer Science for Montclair State University.",
        image: "/team/peter_keller.png",
    },
    {
        name: "Dr. Alexander Platt",
        role: "Statistical Lead",
        bio: "Dr. Alexander Platt leads EnviroOne’s team in developing statistical modeling and analysis tools that enable communication between members of our communities. He is a Senior Research Investigator at the University of Pennsylvania (UPenn) in Philadelphia, PA USA. He is an expert in large-scale data analysis and integration in quantitative agricultural program development and has served as a judge on the INFORMS Analytics Syngenta Crop Challenge Prize Committee since 2016.",
        image: "/team/alexander_platt.png",
    },
    {
        name: "Ibrahim Hassan",
        role: "Head of Volunteer Program",
        bio: "Ibrahim is the head of the volunteer program at EnviroOne. He is the co-founder of Ebee’s Insurance and Auto Tags. This Pennsylvania-based enterprise offers insurance (life, health, auto, commercial) and vehicle services (registration, renewal, title, and notary) on behalf of the State of Pennsylvania. Ibrahim hails from Tonkolili District, one of EnviroOne’s project sites, and has established invaluable connections for EnviroOne.",
        image: "/team/ibrahim_bah.png",
    },
    {
        name: "Vivian Kanu, CNA/ HHA",
        role: "Fundraising Lead (Northeast USA)",
        bio: "Vivian heads EnviroOne’s fundraising component for the northeast USA corridor. She is a certified CNA/ HHA and is the owner and operator of Boston Clean and Care, a company that provides the best quality service with compassion and understanding while focusing on the needs of the clients.",
        image: "/team/vivian_kanu.png",
    },
];

export const FullTeam = () => {
    const [selectedMember, setSelectedMember] = useState<typeof teamMembers[0] | null>(null);

    return (
        <Section className="bg-warmGray/5">
            <div className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-display font-bold text-forest mb-4">Our Team</h2>
                <p className="text-charcoal/80 text-lg max-w-2xl mx-auto">
                    A diverse group of dedicated professionals passionate about sustainable development.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {teamMembers.map((member, i) => (
                    <motion.div
                        key={i}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.05 }}
                        className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 group h-full flex flex-col"
                    >
                        {/* Image */}
                        <div className="relative overflow-hidden w-full aspect-[4/3] shrink-0 bg-gray-100">
                            <img
                                src={member.image}
                                alt={member.name}
                                className="w-full h-full object-contain transition-transform duration-700 group-hover:scale-105"
                            />
                        </div>

                        {/* Content */}
                        <div className="p-6 flex flex-col flex-grow">
                            <h3 className="text-xl font-bold text-forest mb-1">{member.name}</h3>
                            <p className="text-sm font-bold text-terracotta uppercase tracking-wider mb-4">{member.role}</p>

                            <div className="mt-auto">
                                <button
                                    onClick={() => setSelectedMember(member)}
                                    className="inline-flex items-center text-forest font-bold text-sm hover:text-terracotta transition-colors group/btn"
                                >
                                    READ MORE
                                    <ArrowRight className="w-4 h-4 ml-1 transition-transform group-hover/btn:translate-x-1" />
                                </button>
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>

            {/* Modal */}
            <AnimatePresence>
                {selectedMember && (
                    <>
                        {/* Backdrop */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={() => setSelectedMember(null)}
                            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[2000] cursor-pointer"
                        />
                        {/* Modal Content */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95, y: 20 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.95, y: 20 }}
                            className="fixed inset-0 z-[2001] flex items-center justify-center p-4 pointer-events-none"
                        >
                            <div className="bg-cream w-full max-w-4xl max-h-[90vh] overflow-y-auto rounded-2xl shadow-2xl pointer-events-auto flex flex-col md:flex-row relative">
                                {/* Close Button */}
                                <button
                                    onClick={() => setSelectedMember(null)}
                                    className="absolute top-4 right-4 p-2 text-forest/60 hover:text-forest hover:bg-black/5 rounded-full z-10"
                                >
                                    <X className="w-6 h-6" />
                                </button>

                                {/* Modal Image */}
                                <div className="w-full md:w-1/3 aspect-square md:aspect-auto shrink-0 relative bg-forest-dark/5">
                                    <img
                                        src={selectedMember.image}
                                        alt={selectedMember.name}
                                        className="w-full h-full object-cover"
                                    />
                                </div>

                                {/* Modal Body */}
                                <div className="p-8 md:p-12 flex-1 relative">
                                    <h3 className="text-3xl font-display font-bold text-forest mb-2">{selectedMember.name}</h3>
                                    <p className="text-terracotta font-bold uppercase tracking-wider mb-6">{selectedMember.role}</p>
                                    <div className="prose prose-stone max-w-none text-charcoal/80 leading-relaxed">
                                        <p>{selectedMember.bio}</p>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </>
                )}
            </AnimatePresence>
        </Section>
    );
};
