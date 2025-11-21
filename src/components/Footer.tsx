import { Facebook, Instagram, Linkedin, Mail, Phone } from "lucide-react";

/**
 * Footer Component
 * Rodapé com informações de contato e redes sociais
 */

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div>
            <h3 className="mb-4 text-white">Dr. Kouji Kakazu</h3>
            <p className="text-gray-400 mb-4">
              Fisioterapeuta especializado em fisioterapia traumato-ortopédica, esportiva e neurológica.
            </p>
            <p className="text-gray-400">
              CREFITO: 360430-F
            </p>
          </div>

          {/* Links Rápidos */}
          <div>
            <h4 className="mb-4 text-white">Links Rápidos</h4>
            <ul className="space-y-2">
              <li>
                <a 
                  href="#inicio" 
                  className="text-gray-400 hover:text-teal-400 transition-colors"
                >
                  Início
                </a>
              </li>
              <li>
                <a 
                  href="#servicos" 
                  className="text-gray-400 hover:text-teal-400 transition-colors"
                >
                  Serviços
                </a>
              </li>
              <li>
                <a 
                  href="#galeria" 
                  className="text-gray-400 hover:text-teal-400 transition-colors"
                >
                  Galeria
                </a>
              </li>
              <li>
                <a 
                  href="#sobre" 
                  className="text-gray-400 hover:text-teal-400 transition-colors"
                >
                  Sobre
                </a>
              </li>
              <li>
                <a 
                  href="#contato" 
                  className="text-gray-400 hover:text-teal-400 transition-colors"
                >
                  Contato
                </a>
              </li>
            </ul>
          </div>

          {/* Contato */}
          <div>
            <h4 className="mb-4 text-white">Contato</h4>
            <ul className="space-y-3">
              <li className="flex items-center gap-2 text-gray-400">
                <Phone className="w-4 h-4 text-teal-400" />
                <a 
                  href="tel:+554399910-4133"
                  className="hover:text-teal-400 transition-colors"
                >
                  (43) 99910-4133
                </a>
              </li>
              <li className="flex items-center gap-2 text-gray-400">
                <Mail className="w-4 h-4 text-teal-400" />
                <a 
                  href="mailto:kouji.kakazu12@gmail.com"
                  className="hover:text-teal-400 transition-colors"
                >
                  kouji.kakazu12@gmail.com
                </a>
              </li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="mb-4 text-white">Redes Sociais</h4>
            <div className="flex gap-4">
             
              <a
                href="https://www.instagram.com/kouji.kakazu/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-teal-600 transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="https://www.linkedin.com/in/kouji-kakazu-055068123/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-teal-600 transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
            <p className="text-gray-400 text-sm mt-6">
              Siga para dicas de saúde e novidades
            </p>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-center items-center gap-4">
          <p className="text-gray-400 text-sm text-center md:text-center">
            © {currentYear} Dr. Kouji Kakazu - Fisioterapia. Todos os direitos reservados.
          </p>
        
        </div>
      </div>
    </footer>
  );
}
