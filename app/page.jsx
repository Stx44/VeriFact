"use client";
import { useState } from "react";
import { HeroVideoDialog } from "@/components/ui/hero-video-dialog";
import { TypingAnimation } from "@/components/ui/typing-animation";
import { motion } from 'framer-motion'

export default function Home() {
  const [darkMode, setDarkMode] = useState(false);

  const toggleTheme = () => setDarkMode(!darkMode);

  const theme = {
    mainBg: darkMode ? "bg-[#0f172a]" : "bg-white",
    headerFooterBg: darkMode ? "bg-black/40" : "bg-white/30",
    textPrincipal: darkMode ? "text-white" : "text-[#4d1354]",
    textSuporte: darkMode ? "text-gray-400" : "text-gray-600",
    cardBg: darkMode ? "bg-white/5" : "bg-white/40",
    
    cardHover: darkMode ? "hover:bg-white/10" : "hover:bg-white/60",
    textSuporteHover: darkMode ? "hover:text-white" : "hover:text-black",
    
    border: darkMode ? "border-white/10" : "border-gray-100",
    
    blobOpacity: darkMode ? "opacity-40" : "opacity-70"
  };

  const FaqItem = ({ pergunta, resposta }) => {
    const [isOpen, setIsOpen] = useState(false);
    return (
      <div className={`group ${theme.cardBg} backdrop-blur-xl border ${theme.border} rounded-3xl overflow-hidden transition-all duration-300 hover:shadow-lg`}>
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="w-full flex items-center justify-between p-7 text-left transition-colors hover:bg-white/5 focus:outline-none"
        >
          <span className={`text-lg font-bold ${theme.textPrincipal}`}>
            {pergunta}
          </span>
          <span className={`${theme.textPrincipal} transform transition-transform duration-500 ${isOpen ? 'rotate-180' : ''}`}>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="m6 9 6 6 6-6"/>
            </svg>
          </span>
        </button>
        <div className={`transition-all duration-500 ease-in-out overflow-hidden ${isOpen ? 'max-h-[300px] opacity-100' : 'max-h-0 opacity-0'}`}>
          <div className={`p-7 pt-0 text-left ${theme.textSuporte} leading-relaxed text-md`}>
            <div className={`w-full h-[1px] ${theme.border} mb-6`}></div>
            {resposta}
          </div>
        </div>
      </div>
    );
  };

  return (
    <main className={`relative min-h-screen overflow-hidden transition-colors duration-500 ${theme.mainBg}`}>
      
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        <video 
          autoPlay 
          loop 
          muted 
          playsInline 
          className={`w-full h-full object-cover transition-opacity duration-1000 ${theme.blobOpacity}`}
        >
          <source src="/videos/background.webm" type="video/webm" />
          <source src="/videos/background.mov" type="video/quicktime" />
        </video>
      </div>

      <div className="relative z-10">
        <header className={`w-full ${theme.headerFooterBg} backdrop-blur-md ${theme.textPrincipal} py-4 px-6 shadow-sm border-b ${theme.border}`}>
          <div className="flex items-center justify-between max-w-6xl mx-auto">
            <h1 className="text-xl font-bold tracking-tight md:text-2xl">
              VeriFact
            </h1>
            <motion.button 
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={toggleTheme}
              className="px-4 py-1.5 rounded-2xl font-bold text-sm transition-all hover:scale-105 active:scale-95"
              style={{ 
                backgroundColor: darkMode ? 'white' : '#4d1354', 
                color: darkMode ? '#4d1354' : 'white' 
              }}
            >
              {darkMode ? "Modo Claro" : "Modo Escuro"}
            </motion.button>
          </div>
        </header>

        <section className="flex flex-col items-center justify-center mt-32 px-4 text-center">
          <TypingAnimation className={`text-5xl md:text-7xl font-black mb-6 ${theme.textPrincipal} drop-shadow-sm`}
            words={["Verificando a Verdade", "hecking the truth"]}
            typeSpeed={50}
            deleteSpeed={150}
            pauseDelay={1000}
            loop
          />
          <p className={`text-lg md:text-xl ${theme.textSuporte} max-w-2xl font-medium`}>
            O futuro da autenticidade digital começa aqui.
          </p>
        </section>

        <section className="flex flex-col items-center justify-center mt-24 px-4 pb-20 text-center">
          <p className={`text-2xl md:text-3xl ${theme.textPrincipal} font-bold mb-12`}>
            O que nossa extensão oferece?
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl w-full">
            {[
              {
                titulo: "Análise em Tempo Real",
                desc: "Verifique a veracidade de postagens em redes sociais instantaneamente enquanto navega.",
                categoria: "Social"
              },
              {
                titulo: "Links e Páginas Maliciosas",
                desc: "Identifique endereços suspeitos e sites de phishing antes mesmo de clicar no conteúdo.",
                categoria: "Segurança"
              },
              {
                titulo: "Base de Dados Oficial",
                desc: "Cruzamento de informações com as maiores agências de checagem do mundo.",
                categoria: "Confiança"
              }
            ].map((card, index) => (
              <div 
                key={index}
                className={`group ${theme.cardBg} backdrop-blur-xl border border-white/20 p-8 rounded-3xl shadow-lg transition-all duration-300 hover:-translate-y-2 ${theme.cardHover} hover:shadow-2xl hover:cursor-pointer`}
              >
                <div className="w-12 h-1.5 rounded-full bg-gradient-to-r from-[#4d1354] via-[#6ea4ca] to-[#9c1a82] mb-6 mx-auto"></div>
                <span className="text-[10px] font-bold tracking-widest text-[#6ea4ca] uppercase mb-2 block">
                  {card.categoria}
                </span>
                <h3 className={`text-xl font-bold ${theme.textPrincipal} mb-4 group-hover:text-[#9c1a82] transition-colors`}>
                  {card.titulo}
                </h3>
                <p className={`${theme.textSuporte} text-sm leading-relaxed`}>
                  {card.desc}
                </p>
              </div>
            ))}
          </div>
        </section>

        <section className="flex flex-col items-center justify-center px-4 pb-20 text-center">
          <p className={`text-2xl md:text-3xl ${theme.textPrincipal} font-bold mb-12`}>
            O Impacto Real da Desinformação
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl w-full">
            {[
              {
                titulo: "Crise na Saúde Pública",
                desc: "Durante a pandemia, a disseminação de notícias falsas sobre 'curas milagrosas' e eficácia de vacinas contribuiu para milhares de mortes evitáveis.",
                categoria: "Saúde",
                fonte: "Fonte: Organização Mundial da Saúde (OMS)"
              },
              {
                titulo: "Prejuízo de $78 Bilhões",
                desc: "Um estudo da Universidade de Baltimore e da CHEQ revelou que a desinformação custa à economia global aproximadamente $78 bilhões de dólares anualmente em perdas de mercado.",
                categoria: "Economia",
                fonte: "Fonte: Baltimore University & CHEQ Report"
              },
              {
                titulo: "Ameaça à Democracia",
                desc: "No Brasil, 73% da population acredita em notícias falsas sem checar a fonte, o que gerou um cenário de polarização extrema.",
                categoria: "Sociedade",
                fonte: "Fonte: Pesquisa Reuters Institute / G1"
              }
            ].map((card, index) => (
              <div 
                key={index}
                className={`group ${theme.cardBg} backdrop-blur-xl border border-white/20 p-8 rounded-3xl shadow-lg transition-all duration-300 hover:-translate-y-2 ${theme.cardHover} hover:shadow-2xl flex flex-col justify-between`}
              >
                <div>
                  <div className="w-12 h-1.5 rounded-full bg-gradient-to-r from-[#4d1354] via-[#6ea4ca] to-[#9c1a82] mb-6 mx-auto"></div>
                  <span className="text-[10px] font-bold tracking-widest text-[#6ea4ca] uppercase mb-2 block">
                    {card.categoria}
                  </span>
                  <h3 className={`text-xl font-bold ${theme.textPrincipal} mb-4 group-hover:text-[#9c1a82] transition-colors`}>
                    {card.titulo}
                  </h3>
                  <p className={`${theme.textSuporte} text-sm leading-relaxed mb-6`}>
                    {card.desc}
                  </p>
                </div>
                <div className={`mt-auto pt-4 border-t ${theme.border}`}>
                  <p className={`text-[11px] font-semibold ${theme.textSuporte} italic uppercase`}>
                    {card.fonte}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="flex flex-col items-center justify-center px-4 pb-20 text-center">
          <p className={`text-2xl md:text-3xl ${theme.textPrincipal} font-bold mb-12`}>
            Sobre nós
          </p>

          <div className={`mx-auto max-w-5xl group ${theme.cardBg} backdrop-blur-xl border border-white/20 p-8 rounded-3xl shadow-lg transition-all duration-300 hover:-translate-y-2 ${theme.cardHover} hover:shadow-2xl flex flex-col justify-between`}>
            <h1 className={`text-xl font-bold ${theme.textPrincipal} mb-4`}>O Farol na Era da Informação</h1>
            <p className={`${theme.textSuporte} leading-relaxed`}>Nascemos da convicção de que a verdade não deve ser um privilégio, mas um padrão. Em um mundo saturado por ruídos e incertezas, nossa missão é simples: empoderar sua navegação com clareza e integridade.
            <br/><br/>
            Combinamos tecnologia de ponta e ética digital para criar uma ferramenta que atua como seu escudo em tempo real. Não apenas filtramos dados; devolvemos a você o poder de decidir com base em fatos. Acreditamos que uma sociedade consciente começa com a informação correta, e estamos aqui para garantir que, entre milhões de cliques, a verdade seja sempre o seu destino final.
            <br/><br/>
            Navegue com confiança. <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#4d1354] via-[#6ea4ca] to-[#9c1a82] font-bold">Escolha a verdade</span>.</p>
          </div>
        </section>

        <section className="flex flex-col items-center justify-center px-4 pb-20 text-center">
          <p className={`text-2xl md:text-3xl ${theme.textPrincipal} font-bold mb-12`}>
            Dúvidas Frequentes
          </p>
          <div className="max-w-4xl w-full space-y-4">
            <FaqItem 
              pergunta="Como a VeriFact identifica uma notícia falsa?" 
              resposta="Utilizamos inteligência artificial para análise semântica e cruzamento de dados em tempo real com agências de checagem e bancos de dados oficiais." 
            />
            <FaqItem 
              pergunta="A extensão coleta meus dados de navegação?" 
              resposta="Não. A VeriFact atua localmente. Analisamos o conteúdo da página que você está vendo para te proteger, mas não armazenamos seu histórico ou dados sensíveis." 
            />
            <FaqItem 
              pergunta="É compatível com quais navegadores?" 
              resposta="Atualmente suportamos Google Chrome, Microsoft Edge e outros navegadores baseados em Chromium." 
            />
          </div>
        </section>

        <section className="flex flex-col items-center justify-center px-4 pb-20 text-center gap-3">
          <div className="w-full h-screen mx-auto">
            <HeroVideoDialog
              animationStyle="top-in-bottom-out"
              videoSrc="videos/video_corrigido.mp4"
              thumbnailSrc="https://img.freepik.com/vetores-gratis/fundo-de-padrao-escuro-hexagonal_1048-10861.jpg?semt=ais_hybrid&w=740&q=80"
              thumbnailAlt="Demonstração VeriFact"
              className={"size-full rounded-2xl w-full"}
            />
          </div>

          <motion.a 
            whileHover={{
            scale: 1.1,
            // Will be used when gesture starts
            transition: { duration: 0.1 }
            }}
            // Will be used when gesture ends
            transition={{ duration: 0.5 }}
          
          
          className={`h-10 w-50 flex flex-col items-center justify-center ${theme.cardBg} backdrop-blur-xl border border-white/20 p-8 rounded-3xl shadow-lg transition-all duration-300 hover:-translate-y-2 ${theme.cardHover} hover:shadow-2xl cursor-pointer`}>
            <span className="text-3xl text-transparent bg-clip-text bg-gradient-to-r from-[#4d1354] via-[#6ea4ca] to-[#9c1a82] font-bold text-xl">Baixar</span>
          </motion.a>
        </section>
        
        <footer className={`flex flex-col items-center justify-center w-full ${theme.headerFooterBg} backdrop-blur-md ${theme.textPrincipal} py-4 px-6 shadow-sm border-b ${theme.border}`}>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-60 mb-12">
            <div>
              <h3 className="font-semibold mb-2">Equipe VeriFact</h3>
              <p className={`${theme.textSuporte} ${theme.textSuporteHover} hover:cursor-pointer transition-colors`}>João Vitor</p>
              <p className={`${theme.textSuporte} ${theme.textSuporteHover} hover:cursor-pointer transition-colors`}>Thiago Oliveira</p>
            </div>
            <div>
              <h3 className="font-semibold mb-2">Produtos</h3>
              <p className={`${theme.textSuporte} ${theme.textSuporteHover} hover:cursor-pointer transition-colors`}>TrustFlow</p>
            </div>
            <div>
              <h3 className="font-semibold mb-2">Como usar?</h3>
              <p className={`${theme.textSuporte} ${theme.textSuporteHover} hover:cursor-pointer transition-colors`}>Tutorial</p>
              <p className={`${theme.textSuporte} ${theme.textSuporteHover} hover:cursor-pointer transition-colors`}>Guia</p>
            </div>
            <div>
              <h3 className="font-semibold mb-2">Recursos</h3>
              <p className={`${theme.textSuporte} ${theme.textSuporteHover} hover:cursor-pointer transition-colors`}>Blog</p>
              <p className={`${theme.textSuporte} ${theme.textSuporteHover} hover:cursor-pointer transition-colors`}>Contato</p>
              <p className={`${theme.textSuporte} ${theme.textSuporteHover} hover:cursor-pointer transition-colors`}>Suporte</p>
              <p className={`${theme.textSuporte} ${theme.textSuporteHover} hover:cursor-pointer transition-colors`}>Documentação</p>  
            </div>
          </div>
        </footer>

        <footer className={`h-35 flex flex-col items-center justify-center w-full ${theme.headerFooterBg} backdrop-blur-md ${theme.textPrincipal} py-4 px-6 shadow-sm border-b ${theme.border}`}>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-60 mb-12">
            <div>
              <h3 className="font-semibold mb-2">Email</h3>
              <p className={`${theme.textSuporte} ${theme.textSuporteHover} hover:cursor-pointer transition-colors`}>ex@gmail.com</p>
            </div>
            <div>
              <h3 className="font-semibold mb-2">Telefone</h3>
              <p className={`${theme.textSuporte} ${theme.textSuporteHover} hover:cursor-pointer transition-colors`}> (xx) - xxxxx-xxxx</p>
            </div>
            <div>
              <h3 className="font-semibold mb-2">Redes Sociais</h3>
              <p className={`${theme.textSuporte} ${theme.textSuporteHover} hover:cursor-pointer transition-colors`}>Instagram</p>
              <p className={`${theme.textSuporte} ${theme.textSuporteHover} hover:cursor-pointer transition-colors`}>Twitter</p>
            </div>
          </div>
        </footer>

        <footer className={`h-20 flex flex-col items-center justify-center w-full ${theme.headerFooterBg} backdrop-blur-md ${theme.textPrincipal} py-4 px-6 shadow-sm border-b ${theme.border}`}>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 gap-60">
            <div className="text-center justify-center flex flex-col items-center w-full">
              <h3 className="text-sm">Copyright © 2025 VeriFact. Todos os direitos reservados.</h3>
            </div>
          </div>
        </footer>

      </div>
    </main>
  );
}