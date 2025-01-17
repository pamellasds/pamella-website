import { Card, CardContent } from '../components/ui/card';
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious
} from "../components/ui/pagination";
import React from 'react';
import { useState } from 'react';
import {
  Book,
  Briefcase,
  GraduationCap,
  FileText,
  Code,
  Mail,
  MapPin,
  Eye
} from 'lucide-react';

const PortfolioV2 = () => {
  const [activeTab, setActiveTab] = useState('academic');
  const [currentPage, setCurrentPage] = useState(1);
  const publicationsPerPage = 4;

  const PublicationCard = ({ publication }) => {
    return (
      <Card className="hover:shadow-lg transition-all group">
        <CardContent className="p-6">
          <div className="flex justify-between items-start">
            <div className="flex-1">
              <h3 className="font-semibold text-lg mb-2">{publication.title}</h3>
              <p className="text-gray-600 text-sm mb-2">{publication.authors}</p>
              <div className="flex items-center gap-2 text-sm">
                <span className="bg-purple-100 text-purple-700 px-2 py-0.5 rounded">
                  {publication.year}
                </span>
                <span className="text-gray-500">{publication.venue}</span>
              </div>
            </div>
            <a
              href={publication.pdfPath}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-purple-600 hover:text-purple-800 transition-colors p-2 rounded-lg hover:bg-purple-50"
            >
              <Eye className="w-5 h-5" />
              <span className="text-sm">View PDF</span>
            </a>
          </div>
        </CardContent>
      </Card>
    );
  };

  const academicContent = {
    education: [
      {
        degree: "Ph.D. in Computer Science",
        institution: "State University of Ceará, Brazil",
        period: "Expected Completion: 2026",
        details: "Ph.D. Visiting Researcher - Brunel University London (October/2024 to March/2025)"
      },
      {
        degree: "M.Sc. in Computer Science",
        institution: "State University of Ceará, Brazil",
        period: "2021"
      },
      {
        degree: "B.Sc. in Computer Science",
        institution: "State University of Ceará, Brazil",
        period: "2018"
      }
    ],
    summary: {
      title: "Research Summary",
      points: [
        "Around 27 articles published between 2018 and 2024",
        "Attendee or paper presenter in 10 scientific events",
        "Evaluator in three undergraduate thesis defense panels",
        "Article reviewer at the International Congress on Blockchain and Applications in 2023 and 2024"
      ]
    },
    publications: [
      {
        title: "Towards Blockchain Developer Experience (BcDEx)",
        authors: "P Soares, AA Araújo, R Saraiva, J Souza",
        venue: "Simpósio Brasileiro de Engenharia de Software (SBES)",
        year: "2024",
        pdfPath: "/assets/papers/2024/2024_sbes_towards_bcdex.pdf",
      },
      {
        title: "Sociotechnical Dynamics in Smart Contract Repositories",
        authors: "S Costa, M Paixao, I Steinmacher, P Soares, AA Araújo, J Souza",
        venue: "International Conference on Predictive Models",
        year: "2024",
        pdfPath: "/assets/pdfs/smart-contract-2024.pdf",
      },
      {
        title: "Innovation Drivers in Metaverses",
        authors: "S Câmara, A Allex Araújo, B Buarque, P Soares, L Queiroz, J Souza",
        venue: "International Journal of Innovation and Technology Management",
        year: "2024",
        pdfPath: "/assets/pdfs/metaverse-2024.pdf",
      }
    ]
  };

  const industryContent = {
    experience: [
      {
        role: "Blockchain Developer",
        company: "Bitshopp",
        location: "São Paulo, SP, Brazil",
        period: "Feb 2024 - Present",
        responsibilities: [
          "Smart contracts development (ERC-721, ERC-1155, ERC-20)",
          "Integration with Hyperledger Besu"
        ]
      },
      {
        role: "Blockchain Researcher and Developer | Team Lead",
        company: "Institute of Development, Strategy, and Knowledge",
        location: "Fortaleza, CE, Brazil",
        period: "May 2021 - January 2024",
        responsibilities: [
          "Led blockchain solutions for government agencies",
          "Smart contract development and blockchain research",
          "Team leadership and technical planning"
        ]
      }
    ],
    skills: {
      blockchain: ["Solidity", "Web3.js", "Truffle", "Hardhat", "Ganache", "HyperLedger Besu", "IPFS"],
      web: ["Javascript", "Typescript", "Node.js", "Express.js", "React.js", "MySQL", "MongoDB"],
      tools: ["Git", "Github", "Jira", "Click Up", "Figma"]
    }
  };

  const indexOfLastPublication = currentPage * publicationsPerPage;
  const indexOfFirstPublication = indexOfLastPublication - publicationsPerPage;
  const currentPublications = academicContent.publications.slice(
    indexOfFirstPublication,
    indexOfLastPublication
  );
  const totalPages = Math.ceil(academicContent.publications.length / publicationsPerPage);

  const SkillTag = ({ skill }) => (
    <span className="px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-sm">
      {skill}
    </span>
  );

  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-purple-50 to-white">
      <div className="bg-gradient-to-r from-purple-900 to-purple-700 text-white w-full">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="flex flex-col md:flex-row items-center gap-8">
            <img
              src="/assets/images/profile_in.jpg"
              alt="Profile"
              className="rounded-full w-40 h-40 border-4 border-purple-300/30 shadow-xl object-cover"
              onError={(e) => {
                e.target.src = "/api/placeholder/200/200";
                e.target.onerror = null;
              }}
            />
            <div className="text-center md:text-left">
              <h1 className="text-4xl font-bold mb-3">Pamella Soares</h1>
              <p className="text-xl text-purple-200 mb-4">Blockchain Researcher & Developer</p>
              <div className="flex flex-wrap justify-center md:justify-start gap-4 text-sm">
                <a
                  href="mailto:pamella.soares@aluno.uece.br"
                  className="flex items-center gap-2 bg-purple-800/30 px-4 py-2 rounded-full hover:bg-purple-800/50 transition-colors"
                >
                  <Mail className="w-4 h-4" />
                  pamella.soares@aluno.uece.br
                </a>
                <span className="flex items-center gap-2 bg-purple-800/30 px-4 py-2 rounded-full">
                  <MapPin className="w-4 h-4" />
                  Fortaleza, Ceará, Brazil
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="sticky top-0 z-10 bg-white/80 backdrop-blur-sm border-b border-purple-100 w-full">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex gap-1 py-2">
            {[
              { id: 'academic', icon: Book, label: 'Academic' },
              { id: 'industry', icon: Briefcase, label: 'Industry' }
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`
                  flex items-center gap-2 px-6 py-3 rounded-lg transition-all
                  ${activeTab === tab.id
                    ? 'bg-purple-600 text-white shadow-lg'
                    : 'text-purple-600 hover:bg-purple-50'
                  }
                `}
              >
                <tab.icon className="w-4 h-4" />
                <span>{tab.label}</span>
              </button>
            ))}
          </div>
        </div>
      </div>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {activeTab === 'academic' && (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-1">
              <section className="mb-8">
                <div className="flex items-center gap-2 mb-4">
                  <GraduationCap className="w-5 h-5 text-purple-600" />
                  <h2 className="text-xl font-semibold text-purple-900">Education</h2>
                </div>
                <div className="space-y-4">
                  {academicContent.education.map((edu, index) => (
                    <Card key={index} className="hover:shadow-lg transition-all border-l-4 border-l-purple-600">
                      <CardContent className="p-4">
                        <h3 className="font-semibold text-purple-800">{edu.degree}</h3>
                        <p className="text-sm text-gray-600">{edu.institution}</p>
                        <p className="text-sm text-gray-500">{edu.period}</p>
                        {edu.details && (
                          <p className="text-sm text-purple-600 mt-2 font-medium">{edu.details}</p>
                        )}
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </section>
            </div>

            <div className="lg:col-span-2">
              <section className="mb-8">
                <div className="flex items-center gap-2 mb-4">
                  <FileText className="w-5 h-5 text-purple-600" />
                  <h2 className="text-xl font-semibold text-purple-900">Research Summary</h2>
                </div>
                <Card className="hover:shadow-lg transition-all">
                  <CardContent className="p-6">
                    <ul className="space-y-3">
                      {academicContent.summary.points.map((point, index) => (
                        <li key={index} className="flex items-start gap-2">
                          <span className="text-purple-600 mt-1">•</span>
                          <span className="text-gray-700">{point}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </section>
              <div className="flex items-center gap-2 mb-4">
                <Book className="w-5 h-5 text-purple-600" />
                <h2 className="text-xl font-semibold text-purple-900">Publications</h2>
              </div>
              <div className="space-y-4">
              {currentPublications.map((publication, index) => (
                  <PublicationCard key={index} publication={publication} />
                ))}
                <Pagination>
                  <PaginationContent>
                    <PaginationItem>
                      <PaginationPrevious
                        onClick={() => currentPage > 1 && setCurrentPage(currentPage - 1)}
                        className={currentPage === 1 ? 'pointer-events-none opacity-50' : 'cursor-pointer'}
                      />
                    </PaginationItem>
                    {[...Array(totalPages)].map((_, i) => (
                      <PaginationItem key={i}>
                        <PaginationLink
                          onClick={() => setCurrentPage(i + 1)}
                          isActive={currentPage === i + 1}
                        >
                          {i + 1}
                        </PaginationLink>
                      </PaginationItem>
                    ))}
                    <PaginationItem>
                      <PaginationNext
                        onClick={() => currentPage < totalPages && setCurrentPage(currentPage + 1)}
                        className={currentPage === totalPages ? 'pointer-events-none opacity-50' : 'cursor-pointer'}
                      />
                    </PaginationItem>
                  </PaginationContent>
                </Pagination>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'industry' && (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <div className="flex items-center gap-2 mb-4">
                <Briefcase className="w-5 h-5 text-purple-600" />
                <h2 className="text-xl font-semibold text-purple-900">Professional Experience</h2>
              </div>
              <div className="space-y-4">
                {industryContent.experience.map((exp, index) => (
                  <Card key={index} className="hover:shadow-lg transition-all">
                    <CardContent className="p-6">
                      <h3 className="font-semibold text-lg text-purple-800 mb-2">{exp.role}</h3>
                      <p className="text-gray-600 mb-1">{exp.company}</p>
                      <p className="text-sm text-gray-500 mb-4">{exp.location} | {exp.period}</p>
                      <ul className="space-y-2">
                        {exp.responsibilities.map((resp, idx) => (
                          <li key={idx} className="flex items-start gap-2 text-sm text-gray-700">
                            <span className="text-purple-600 mt-1">•</span>
                            <span>{resp}</span>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            <div className="lg:col-span-1">
              <div className="flex items-center gap-2 mb-4">
                <Code className="w-5 h-5 text-purple-600" />
                <h2 className="text-xl font-semibold text-purple-900">Technical Skills</h2>
              </div>
              <Card>
                <CardContent className="p-6">
                  <div className="space-y-6">
                    {Object.entries(industryContent.skills).map(([category, skills]) => (
                      <div key={category} className="space-y-3">
                        <h3 className="font-medium text-purple-800 capitalize">
                          {category.replace('_', ' ')}
                        </h3>
                        <div className="flex flex-wrap gap-2">
                          {skills.map((skill, idx) => (
                            <SkillTag key={idx} skill={skill} />
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        )}
      </main>
    </div>
  );
};

export default PortfolioV2;