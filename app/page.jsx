"use client";

export default function Home() {
  const blobStyle = {
    animation: "blob 10s infinite",
  };

  return (
    <main className="relative min-h-screen overflow-hidden bg-white">
      
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
          className="absolute top-[10%] left-[10%] w-[450px] h-[450px] bg-cyan-300 rounded-full filter blur-[100px] opacity-60"
          style={blobStyle}
        ></div>
        
       
        <div 
          className="absolute top-[30%] right-[10%] w-[500px] h-[500px] bg-purple-400 rounded-full filter blur-[110px] opacity-50"
          style={{ ...blobStyle, animationDelay: "3s" }}
        ></div>
        
    
        <div 
          className="absolute bottom-[10%] left-[25%] w-[400px] h-[400px] bg-pink-300 rounded-full filter blur-[100px] opacity-50"
          style={{ ...blobStyle, animationDelay: "6s" }}
        ></div>
      </div>

      
      <div className="relative z-10">
        <header className="w-full bg-white/30 backdrop-blur-md text-[#4d1354] py-4 px-6 shadow-sm border-b border-gray-100">
          <div className="flex items-center justify-center">
            <h1 className="text-xl font-bold tracking-tight md:text-2xl">
              VeriFact
            </h1>
          </div>
        </header>

        <section className="flex flex-col items-center justify-center mt-32 px-4 text-center">
          <h2 className="text-5xl md:text-7xl font-black mb-6 text-[#4d1354] drop-shadow-sm">
            Verificando a <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#4d1354] via-[#6ea4ca] to-[#9c1a82]">
              Verdade
            </span>
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-2xl font-medium">
            O futuro da autenticidade digital começa aqui.
          </p>
        </section>

        <section className="flex flex-col items-center justify-center mt-24 px-4 pb-20 text-center">
          <p className="text-2xl md:text-3xl text-[#4d1354] font-bold mb-12">
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
                className="group bg-white/40 backdrop-blur-xl border border-white/20 p-8 rounded-3xl shadow-lg transition-all duration-300 hover:-translate-y-2 hover:bg-white/60 hover:shadow-2xl"
              >
                <div className="w-12 h-1.5 rounded-full bg-gradient-to-r from-[#4d1354] via-[#6ea4ca] to-[#9c1a82] mb-6 mx-auto"></div>
                
                <span className="text-[10px] font-bold tracking-widest text-[#6ea4ca] uppercase mb-2 block">
                  {card.categoria}
                </span>

                <h3 className="text-xl font-bold text-[#4d1354] mb-4 group-hover:text-[#9c1a82] transition-colors">
                  {card.titulo}
                </h3>
                
                <p className="text-gray-600 text-sm leading-relaxed">
                  {card.desc}
                </p>
              </div>
            ))}

          </div>
        </section>

        <section className="flex flex-col items-center justify-center px-4 pb-20 text-center">
          <p className="text-2xl md:text-3xl text-[#4d1354] font-bold mb-12">
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
                className="group bg-white/40 backdrop-blur-xl border border-white/20 p-8 rounded-3xl shadow-lg transition-all duration-300 hover:-translate-y-2 hover:bg-white/60 hover:shadow-2xl flex flex-col justify-between"
              >
                <div>
                  <div className="w-12 h-1.5 rounded-full bg-gradient-to-r from-[#4d1354] via-[#6ea4ca] to-[#9c1a82] mb-6 mx-auto"></div>
                  
                  <span className="text-[10px] font-bold tracking-widest text-[#6ea4ca] uppercase mb-2 block">
                    {card.categoria}
                  </span>

                  <h3 className="text-xl font-bold text-[#4d1354] mb-4 group-hover:text-[#9c1a82] transition-colors">
                    {card.titulo}
                  </h3>
                  
                  <p className="text-gray-600 text-sm leading-relaxed mb-6">
                    {card.desc}
                  </p>
                </div>

                <div className="mt-auto pt-4 border-t border-[#4d1354]/10">
                  <p className="text-[11px] font-semibold text-[#4d1354]/70 italic uppercase">
                    {card.fonte}
                  </p>
                </div>
              </div>
            ))}

          </div>
        </section>

        <section className="flex flex-col items-center justify-center px-4 pb-20 text-center">
          <a className="h-8 w-20, flex flex-col items-center justify-center ,bg-white/40 backdrop-blur-xl border border-white/20 p-8 rounded-3xl shadow-lg transition-all duration-300 hover:-translate-y-2 hover:bg-white/60 hover:shadow-2xl">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#4d1354] via-[#6ea4ca] to-[#9c1a82]">Baixar</span>
          </a>
        </section>
        
        <div id="div">
          <footer className="flex flex-col items-center justify-center, place-content-around ,w-full bg-white/30 backdrop-blur-md text-[#4d1354] py-4 px-6 shadow-sm border-b border-gray-100">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-60 mb-12">
              <div>
                <h3>
                  Equipe VeriFact
                </h3>
                <p className="text-gray-600 , hover:text-black hover:cursor-pointer">
                  João Vitor
                </p>
                <p className="text-gray-600 , hover:text-black hover:cursor-pointer">
                  Thiago Oliveira
                </p>
              </div>

              <div>
                <h3>Produtos</h3>
                <p className="text-gray-600 , hover:text-black hover:cursor-pointer">TrustFlow</p>
              </div>

              <div>
                <h3>Como usar?</h3>
                <p className="text-gray-600 , hover:text-black hover:cursor-pointer">Tutorial</p>
                <p className="text-gray-600 , hover:text-black hover:cursor-pointer">Guia</p>

                
              </div>

              <div>
                <h3>Recursos</h3>
                <p className="text-gray-600 , hover:text-black hover:cursor-pointer">Blog</p>
                <p className="text-gray-600 , hover:text-black hover:cursor-pointer">Contato</p>
                <p className="text-gray-600 , hover:text-black hover:cursor-pointer">Suporte</p>
                <p className="text-gray-600 , hover:text-black hover:cursor-pointer">Documentação</p>  
              </div>

            </div>
          </footer>
        </div>

      </div>
      
    </main>
  );
}