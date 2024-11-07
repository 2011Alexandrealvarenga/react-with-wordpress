## repositorio base para o projeto
https://github.com/tanujpatra228/youtube/tree/headless-wordpress-react-js

## criar plugin para tratar os paragrafos e excerpts

/*
Plugin Name: IWS Custom Code
Plugin URI: https://akismet.com/
Description: Add custom code
Requires at least: 5.2
Requires PHP: 5.6.20
*/

remove_filter('the_excerpt','wpautop');
remove_filter('the_content','wpautop');


### para rodar o projeto
npm start

## instalar node
verificar a instalação 
node -v

criar a pasta com o projeto
npx create-react-app nome-projeto



## tailwind instalacao
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p

url para configuraçao do tailwind
https://tailwindcss.com/docs/guides/create-react-app

rotas
npm i react-router-dom

### parei aqui
https://www.youtube.com/watch?v=21G3lnmZ8RE&list=PLa9NMvQUMD5eH9-Fney5J6Hvhz4qOS-1q&index=11