"use client";
import { useState, useEffect } from "react";

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
    blobOpacity: darkMode ? "opacity-20" : "opacity-50"
  };

  const blobStyle = {
    animation: "blob 10s infinite",
  };

  return (
    <main className={`relative min-h-screen overflow-hidden transition-colors duration-500 ${theme.mainBg}`}>
      
      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes blob {
          0% { transform: translate(0px, 0px) scale(1); }
          33% { transform: translate(50px, -70px) scale(1.2); }
          66% { transform: translate(-30px, 30px) scale(0.8); }
          100% { transform: translate(0px, 0px) scale(1); }
        }
      `}} />

      <div className="absolute inset-0 z-0 pointer-events-none">
        <div 
          className={`absolute top-[10%] left-[10%] w-[450px] h-[450px] bg-cyan-300 rounded-full filter blur-[100px] ${theme.blobOpacity}`}
          style={blobStyle}
        ></div>
        
        <div 
          className={`absolute top-[30%] right-[10%] w-[500px] h-[500px] bg-purple-400 rounded-full filter blur-[110px] ${theme.blobOpacity}`}
          style={{ ...blobStyle, animationDelay: "3s" }}
        ></div>
        
        <div 
          className={`absolute bottom-[10%] left-[25%] w-[400px] h-[400px] bg-pink-300 rounded-full filter blur-[100px] ${theme.blobOpacity}`}
          style={{ ...blobStyle, animationDelay: "6s" }}
        ></div>
      </div>

      <div className="relative z-10">
        <header className={`w-full ${theme.headerFooterBg} backdrop-blur-md ${theme.textPrincipal} py-4 px-6 shadow-sm border-b ${theme.border}`}>
          <div className="flex items-center justify-between max-w-6xl mx-auto">
            <h1 className="text-xl font-bold tracking-tight md:text-2xl">
              VeriFact
            </h1>
            <button 
              onClick={toggleTheme}
              className="px-4 py-1.5 rounded-2xl font-bold text-sm transition-all hover:scale-105 active:scale-95"
              style={{ 
                backgroundColor: darkMode ? 'white' : '#4d1354', 
                color: darkMode ? '#4d1354' : 'white' 
              }}
            >
              {darkMode ? "Modo Claro" : "Modo Escuro"}
            </button>
          </div>
        </header>

        <section className="flex flex-col items-center justify-center mt-32 px-4 text-center">
          <h2 className={`text-5xl md:text-7xl font-black mb-6 ${theme.textPrincipal} drop-shadow-sm`}>
            Verificando a <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#4d1354] via-[#6ea4ca] to-[#9c1a82]">
              Verdade
            </span>
          </h2>
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
                fonte: "Fonte: Organização Mundial da Saúde (OMS)",
                link: "https://www.who.int"
              },
              {
                titulo: "Prejuízo de $78 Bilhões",
                desc: "Um estudo da Universidade de Baltimore e da CHEQ revelou que a desinformação custa à economia global aproximadamente $78 bilhões de dólares anualmente em perdas de mercado.",
                categoria: "Economia",
                fonte: "Fonte: Baltimore University & CHEQ Report",
                link: "#"
              },
              {
                titulo: "Ameaça à Democracia",
                desc: "No Brasil, 73% da população acredita em notícias falsas sem checar a fonte, o que gerou um cenário de polarização extrema e ataques às instituições democráticas.",
                categoria: "Sociedade",
                fonte: "Fonte: Pesquisa Reuters Institute / G1",
                link: "https://g1.globo.com"
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

        <section className="h-10 flex flex-col items-center justify-center px-4 pb-20 text-center">
          <a className={`h-8 w-20 flex flex-col items-center justify-center ${theme.cardBg} backdrop-blur-xl border border-white/20 p-8 rounded-3xl shadow-lg transition-all duration-300 hover:-translate-y-2 ${theme.cardHover} hover:shadow-2xl cursor-pointer`}>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#4d1354] via-[#6ea4ca] to-[#9c1a82] font-bold">Baixar</span>
          </a>
        </section>
        
        <div id="footer 1">
          <footer className={`flex flex-col items-center justify-center, place-content-around w-full ${theme.headerFooterBg} backdrop-blur-md ${theme.textPrincipal} py-4 px-6 shadow-sm border-b ${theme.border}`}>
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
        </div>

        <div id="footer 2">
          <footer className={`h-30 flex flex-col items-center justify-center, place-content-around w-full ${theme.headerFooterBg} backdrop-blur-md ${theme.textPrincipal} py-4 px-6 shadow-sm border-b ${theme.border}`}>
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
        </div>

        <div id="footer 3">
          <footer className={`h-15 flex flex-col items-center justify-center, place-content-around w-full ${theme.headerFooterBg} backdrop-blur-md ${theme.textPrincipal} py-4 px-6 shadow-sm border-b ${theme.border}`}>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 gap-60 mb-12">
              <div>
                <h3 className="text-sm">Copyright © 2025 VeriFact. Todos os direitos reservados.</h3>
              </div>
            </div>
          </footer>
        </div>

      </div>
    </main>
  );
}