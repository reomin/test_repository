import { useState, useEffect } from 'react';
import { ChevronDown, Github, ExternalLink, Mail, Linkedin, Menu, X, Code, Palette, Zap } from 'lucide-react';

const Portfolio = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
    setIsMenuOpen(false);
  };

  const projects = [
    {
      title: "Cafeteria Project",
      description: "学生向け、学食共有webアプリ。ユーザーが学食のメニューや価格を共有し、評価を投稿できる。技育キャンプで開発。",
      image: "../image.png",
      tech: ["Next.js", "TypeScript", "Tailwind CSS", "Nest.js"],
      github: "https://github.com/reomin/cafeteria_project",
      demo: "#"
    },
    {
      title: "AIダッシュボード",
      description: "機械学習モデルの結果を可視化するダッシュボード。リアルタイムデータ更新とインタラクティブなチャート。",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop",
      tech: ["Vue.js", "Python", "FastAPI", "Chart.js"],
      github: "#",
      demo: "#"
    },
    {
      title: "モバイルアプリ",
      description: "Nfcを利用した、対応するキーホルダー専用アプリ、Javaで開発を行った。",
      image: "../ic_launcher-playstore.png",
      tech: ["Java", "xml"],
      github: "#",
      demo: "https://play.google.com/store/apps/details?id=com.release.the_music&hl=en"
    }
  ];

  const skills = [
    { name: "Frontend", items: ["React","Next.js", "Tailwind CSS"], icon: Code },
    { name: "Backend", items: ["PHP", "Laravel", "Go"], icon: Zap },
    { name: "QA", items: ["Selenium", "PHPUnit", "Performance Testing"], icon: Zap },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white overflow-x-hidden">
      {/* Navigation */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrollY > 50 ? 'bg-slate-900/95 backdrop-blur-sm shadow-lg' : 'bg-transparent'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
              Portfolio
            </div>
            
            {/* Desktop Menu */}
            <div className="hidden md:flex space-x-8">
              {['home', 'about', 'projects', 'contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item)}
                  className="text-white hover:text-cyan-400 transition-colors duration-300 capitalize"
                >
                  {item}
                </button>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden text-white"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-slate-900/95 backdrop-blur-sm">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              {['home', 'about', 'projects', 'contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item)}
                  className="block px-3 py-2 text-white hover:text-cyan-400 transition-colors duration-300 capitalize w-full text-left"
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 animate-pulse"></div>
        <div className="text-center z-10 px-4 sm:px-6 lg:px-8">
          <div className="mb-8">
            <div className="w-32 h-32 mx-auto bg-gradient-to-r from-cyan-400 to-blue-400 rounded-full flex items-center justify-center text-4xl font-bold shadow-2xl shadow-cyan-400/25">
              <img src="../get.jpg" alt="Profile" className="rounded-full" />
            </div>
          </div>
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6">
            <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
              reomin
            </span>
          </h1>
          <p className="text-xl sm:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
            開発・QAエンジニア
          </p>
          <p className="text-lg text-gray-400 mb-12 max-w-2xl mx-auto">
            QAエンジニアとして仕事をしつつ、Webアプリケーションを開発しています。
          </p>
          <button
            onClick={() => scrollToSection('projects')}
            className="bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-8 py-4 rounded-full text-lg font-medium hover:from-cyan-600 hover:to-blue-600 transition-all duration-300 shadow-lg hover:shadow-cyan-500/25 hover:scale-105"
          >
            ↓ 開発ポートフォリオ
          </button>
        </div>
        
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronDown size={32} className="text-gray-400" />
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
            About Me
          </h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <p className="text-gray-300 text-lg leading-relaxed">
                開発・QAエンジニアとして仕事をしつつ、Webアプリケーションを開発しています。
                モダンな技術スタックを使用して、学習目的でWebアプリケーションを設計・開発しています。
              </p>
              <p className="text-gray-300 text-lg leading-relaxed">
                メインはPHPを使用したWebアプリケーションの開発を行っています。
                テスト駆動開発（TDD）を実践し、品質の高いコードを書くことを心がけています。
              </p>
            </div>
            
            <div className="space-y-8">
              {skills.map((skill, index) => (
                <div key={index} className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 hover:bg-slate-800/70 transition-all duration-300">
                  <div className="flex items-center mb-4">
                    <skill.icon className="text-cyan-400 mr-3" size={24} />
                    <h3 className="text-xl font-semibold">{skill.name}</h3>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {skill.items.map((item, i) => (
                      <span key={i} className="bg-gradient-to-r from-cyan-500/20 to-blue-500/20 text-cyan-300 px-3 py-1 rounded-full text-sm border border-cyan-500/30">
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-900/30">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
            Projects
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div key={index} className="bg-slate-800/50 backdrop-blur-sm rounded-xl overflow-hidden hover:transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-cyan-500/25">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-3 text-white">{project.title}</h3>
                  <p className="text-gray-300 mb-4 text-sm leading-relaxed">{project.description}</p>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech, i) => (
                      <span key={i} className="bg-gradient-to-r from-purple-500/20 to-pink-500/20 text-purple-300 px-2 py-1 rounded text-xs border border-purple-500/30">
                        {tech}
                      </span>
                    ))}
                  </div>
                  
                  <div className="flex gap-4">
                    <a
                      href={project.github}
                      className="flex items-center text-gray-300 hover:text-cyan-400 transition-colors duration-300"
                    >
                      <Github size={16} className="mr-1" />
                      <span className="text-sm">Code</span>
                    </a>
                    <a
                      href={project.demo}
                      className="flex items-center text-gray-300 hover:text-cyan-400 transition-colors duration-300"
                    >
                      <ExternalLink size={16} className="mr-1" />
                      <span className="text-sm">Demo</span>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-8 bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
            Contact
          </h2>
          <p className="text-xl text-gray-300 mb-12">
            プロジェクトのご相談やお仕事のご依頼がありましたら、お気軽にご連絡ください。
          </p>
          
          <div className="flex justify-center space-x-8 mb-12">
            <a
              href="https://www.linkedin.com/in/reo-takeuchi-b2a93a1a8/"
              className="flex items-center space-x-2 bg-slate-800/50 backdrop-blur-sm px-6 py-4 rounded-xl hover:bg-slate-800/70 transition-all duration-300 hover:scale-105"
            >
              <Linkedin className="text-cyan-400" size={24} />
              <span>LinkedIn</span>
            </a>
            <a
              href="https://github.com/reomin"
              className="flex items-center space-x-2 bg-slate-800/50 backdrop-blur-sm px-6 py-4 rounded-xl hover:bg-slate-800/70 transition-all duration-300 hover:scale-105"
            >
              <Github className="text-cyan-400" size={24} />
              <span>GitHub</span>
            </a>
          </div>
          
          <p className="text-gray-400">
            © 2025 reomin. All rights reserved.
          </p>
        </div>
      </section>
    </div>
  );
};

export default Portfolio;