### Welcome to NextJs 13.4^

Todos os componentes são considerados Server componentes, e caso necessário você pode converter o seu componente para Client Component adicionando 'use client' na primeira linha do arquivo. 

Server Component = não permite utilizar javascript no lado do cliente
Client Component = o javascript é enviado para o navegador (lado do cliente)

Diferente do Server Component, o Client Componente passa pelo processo de hidratação.

Hidatação = é o processo de converter um HTML que não há nenhum tipo de interatividade, em um HTML que possui interatividade adicionando uma camada de javascript dentro dele.

Streaming SSR => Ler/escrever dados de forma parcial + Server Side Rendering.
Renderizar um componente pelo lado do servidor de forma parcial.