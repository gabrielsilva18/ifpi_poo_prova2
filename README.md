# Rede Social

## Descrição
Este projeto foi desenvolvido como atividade avaliativa da disciplina de Programação Orientada a Objetos (POO) do IFPI. Trata-se de uma simulação de rede social, onde usuários podem criar perfis, publicar postagens, curtir/descurtir, visualizar postagens por hashtag ou perfil, e interagir com conteúdos avançados.

O projeto utiliza arquivos de texto para persistência de dados (`txt`) e foi implementado em TypeScript.

## Estrutura do Projeto

- `cls/` : Contém as classes principais do sistema, como `App`, `Perfil`, `Postagem`, `RedeSocial`, `RepositorioDePerfis`, `RepositorioDePostagens`, entre outras.
- `txt/` : Contém arquivos de texto utilizados como banco de dados para perfis, postagens e configurações.
- `app/` : Contém arquivos de inicialização do sistema (`app.ts`) que instanciam a aplicação e executam o loop principal.
- `node_modules/` : Dependências do projeto.
- `package.json` e `package-lock.json` : Gerenciamento de pacotes Node.js.
- `tsconfig.json` : Configuração do TypeScript.
- `README.md` : Este arquivo de documentação.

## Funcionalidades

### Perfis
- Criar novo perfil
- Consultar perfil existente

### Postagens
- Criar postagens simples ou avançadas (com hashtags)
- Consultar postagens
- Curtir e descurtir postagens
- Exibir postagens por perfil ou por hashtag
- Decrementar visualizações de postagens avançadas

### Repositórios
- Visualizar repositório de perfis
- Visualizar repositório de postagens
- Simular atividade de postagens

### Configurações
- Ativar ou desativar simulação de atividade de postagens

## Instalação

1. Clone o repositório:

```bash
git clone https://github.com/gabrielsilva18/ifpi_poo_prova2.git
Entre na pasta do projeto:

bash
Copiar código
cd ifpi_poo_prova2
Instale as dependências:

bash
Copiar código
npm install
Compile o TypeScript:

bash
Copiar código
tsc
Execute o projeto:

bash
Copiar código
node dist/app/app.js
Como Usar
Ao iniciar a aplicação, um menu interativo será exibido no terminal. Basta digitar o número correspondente à ação desejada:

1 - Incluir perfil

2 - Consultar perfil

3 - Incluir postagem

4 - Consultar postagem

5 - Curtir postagem

6 - Descurtir postagem

7 - Decrementar visualizações

8 - Exibir postagens por perfil

9 - Exibir postagens por hashtag

10 - Ver repositório de perfis

11 - Ver repositório de postagens

12 - Consultar postagens mais populares

13 - Consultar hashtags mais populares

a - Adicionar hashtag em postagem

b - Remover postagem

c - Editar postagem

d - Ver postagens por ano/mês

e - Resetar repositório de postagens

01 - Ativar simulação de atividade

Licença
Este projeto está licenciado sob a licença AGPL-3.0.
