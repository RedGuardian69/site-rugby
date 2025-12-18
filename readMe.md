# 🏉 Rugby Warriors - Warriors Cats Official Site

Site oficial do clube de Rugby **Warriors Cats**, desenvolvido como projeto educacional do curso **Desenvolvedor Profissional** da **Hcode Treinamentos**.

## 📋 Sobre o Projeto

Este é um site responsivo e moderno para um clube de rugby escolar, apresentando:
- **Hero section** com call-to-action para matrículas e participação
- **Carousel de notícias** com últimas novidades do clube
- **Seção de vídeos** com highlights e conteúdo dos treinos
- **Votação para mascote** com 4 candidatos diferentes
- **Catálogo de times** filiados ao clube
- **Menu responsivo** com drawer navigation em mobile
- **Seção de patrocinadores** e footer completo

## 🎓 Crédito Educacional

Desenvolvido como parte do curso **Desenvolvedor Profissional** da [Hcode Treinamentos](https://www.hcode.com.br/).

> Este projeto foi criado a partir do curso Desenvolvedor Profissional do Hcode Treinamentos, focando em práticas modernas de desenvolvimento web front-end.

## 🛠️ Tecnologias Utilizadas

- **HTML5** - Estrutura semântica
- **CSS3** - Estilos responsivos com variáveis CSS
- **JavaScript Vanilla** - Interatividade (menu drawer, navegação)
- **Responsive Design** - Mobile-first approach

## 📁 Estrutura do Projeto

```
Project-Rugby/
├── index.html                 # Página principal
├── readMe.md                  # Este arquivo
├── assets/
│   ├── css/
│   │   ├── style.css         # Estilos principais
│   │   ├── variables.css     # Variáveis de cores e tamanhos
│   │   ├── hero.css          # Seção hero
│   │   ├── carousel.css      # Carrossel de notícias/mascotes
│   │   ├── drawer.css        # Menu drawer mobile
│   │   ├── footer.css        # Rodapé
│   │   ├── normalize.css     # Reset de estilos
│   │   └── [outros estilos]  # Estilos específicos de componentes
│   ├── js/
│   │   └── menu_toggle.js    # Lógica do menu drawer
│   ├── imgs/
│   │   ├── imgs/             # Imagens de notícias e conteúdo
│   │   ├── sponsors/         # Logos de patrocinadores
│   │   ├── times-logo/       # Logos dos times
│   │   └── [ícones e assets] # Ícones SVG e imagens variadas
│   └── fonts/                # Fontes customizadas (se houver)
```

## 🚀 Como Começar

### Pré-requisitos
- Navegador web moderno (Chrome, Firefox, Safari, Edge)
- Editor de código (VS Code recomendado)

### Instalação

1. Clone o repositório:
```bash
git clone https://github.com/seu-usuario/Project-Rugby-main.git
cd Project-Rugby-main
```

2. Abra o arquivo `index.html` no navegador:
   - Duplo-clique em `index.html`, ou
   - Use uma extensão como Live Server no VS Code

3. Para desenvolvimento com live reload, use a extensão Live Server do VS Code:
   - Instale a extensão "Live Server" (5M+ downloads)
   - Clique com botão direito em `index.html` → "Open with Live Server"

## 🎨 Padrões de Desenvolvimento

### Convenções CSS
- Variáveis globais definidas em `assets/css/variables.css`
- BEM (Block Element Modifier) para naming de classes
- Mobile-first responsive design
- Classes com prefixo `btn-` para botões (ex: `btn-primary-fill`, `btn-white-10`)

### Interatividade JavaScript
- Atributos data (ex: `data-drawer="open"`, `data-drawer="close"`, `data-drawer="toggle"`)
- IIFE (Immediately Invoked Function Expression) para escopo isolado
- Seletores com `querySelectorAll` para múltiplos elementos
- Listeners em `click` para controle de menu

Exemplo de padrão em `menu_toggle.js`:
```javascript
document.querySelectorAll('[data-drawer="open"]').forEach((item) => {
    item.addEventListener('click', toggleDrawer);
});
```

### Estrutura HTML
- Seções semânticas (`<main>`, `<section>`, `<footer>`, `<header>`)
- IDs em seções principais para navegação (ex: `id="drawer"`, `id="hero"`)
- Classes de container para centralização de conteúdo (`.container`)
- Estrutura de carousel com `.carousel` > `.carousel-items` > `.carousel-item`

## 🔄 Fluxo de Desenvolvimento

1. **Editar HTML** em `index.html` para adicionar conteúdo
2. **Estilos** - adicione ou modifique CSS em `assets/css/`
3. **Lógica** - novos scripts em `assets/js/` ou em `menu_toggle.js`
4. **Imagens** - coloque em `assets/imgs/` (organize por tipo)
5. **Teste responsivo** usando DevTools (F12) e rotas de viewport

## 📱 Componentes Principais

### Menu Drawer (Mobile Navigation)
- Ativado via atributos `data-drawer`
- Toggle de classe `.opened` no elemento `#drawer`
- Overlay clicável para fechar

### Carousel
- HTML structure com `.carousel` container
- Reutilizável para notícias, vídeos e mascotes
- Estilo definido em `carousel.css`

### Hero Section
- Destaque principal com logo e CTA buttons
- Responsivo com menu do header

### Footer
- Múltiplas seções de navegação
- Links para times filiados
- Social media links

## 🐛 Troubleshooting

**Menu drawer não funciona?**
- Verifique se `menu_toggle.js` está carregado antes de `</body>`
- Confirme que os atributos `data-drawer` estão corretos

**Imagens não carregam?**
- Verifique os caminhos em `src="assets/imgs/..."`
- Use caminhos relativos a partir da raiz do projeto

**Layout desalinhado?**
- Limpe o cache do navegador (Ctrl+Shift+Delete)
- Verifique se `normalize.css` está sendo carregado

## 🤝 Contribuindo

Para contribuir com melhorias:
1. Faça um fork do projeto
2. Crie uma branch para sua feature (`git checkout -b feature/AmazingFeature`)
3. Commit suas mudanças (`git commit -m 'Add some AmazingFeature'`)
4. Push para a branch (`git push origin feature/AmazingFeature`)
5. Abra um Pull Request

## 📚 Recursos Adicionais

- [Hcode Treinamentos - Curso Desenvolvedor Profissional](https://www.hcode.com.br/)
- [MDN - HTML5 Semântica](https://developer.mozilla.org/pt-BR/docs/Web/HTML/Element)
- [CSS Tricks - Responsive Design](https://css-tricks.com/snippets/css/a-guide-to-flexbox/)
- [JavaScript.info - Vanilla JS](https://javascript.info/)

## 📄 Licença

Este projeto é fornecido para fins educacionais como parte do curso Hcode Treinamentos.

## 👨‍💼 Autor

Desenvolvido como projeto educacional - **Hcode Treinamentos** 🎓

---

**Última atualização:** Dezembro 2025  
**Status:** ✅ Em desenvolvimento educacional
