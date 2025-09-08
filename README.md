# ONROTA — Site institucional (Vite + React + Tailwind)

## Requisitos
- Node.js 18+ (recomendado 20)
- npm 9+ (ou pnpm/yarn)

## Rodando local
```bash
npm install
npm run dev
# abre http://localhost:5173 (ou 5174 se ocupado)
```

## Build de produção
```bash
npm run build
npm run preview
```

## Estrutura (resumo)
```
src/
  components/Icons.jsx
  sections/
    Hero.jsx
    About.jsx
    Services.jsx
    Clients.jsx
    Contact.jsx
  App.jsx
  main.jsx
```

## Variáveis/Constantes
Edite `src/constants.js`:
- `PRODUCT_NAME`
- `WHATSAPP_NUMBER`
- `CONTACT_EMAIL`
- `WHATSAPP_LINK`

## Convenções de commit
Use prefixos:
- `feat:` nova funcionalidade
- `fix:` correção de bug
- `docs:` documentação
- `style:` layout/estilo (sem mudança de lógica)
- `refactor:` refatoração
- `chore:` tarefas (build, deps, gitignore, etc.)

Exemplo:
```bash
git commit -m "feat: estiliza formulário de contato no modo dark"
```

## Licença
Proprietário (ONROTA).
