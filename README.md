# Lista de exercícios da Digital House FullStack

### Turma 22

## Como postar aqui no repositório?

1- Crie uma conta no GitHub

2- Baixe e instale o [Git](https://git-scm.com/downloads)

3- Baixe esse repositório no seu computador como demonstrado na imagem abaixo

![Instrução para baixar repositório](./images/howto-repo-download.png 'Baixando o repositório')

4- Extraia o repositório do ZIP

5- Faça as modificações que desejar (adicionar, modificar ou excluir exercícios)

6- Quando quiser postar o repositório com suas modificações clique com o botão direito na pasta e clique em 'Git Bash'

![Instrução para usar Git na pasta](./images/howto-gitbash.png 'Fazendo Git Bash')

7- Use os seguintes comandos para enviar a pasta atualizada para o GitHub:

> git init
> git add .
> git commit -m 'a mensagem que você quiser aqui'
> git remote add origin https://github.com/JuliNunes/DH-Exercicios
> git push -u origin master

![Usando Git Bash](./images/using-gitbash.png 'Usando o Git Bash')

Com isso o repositório estara atualizado na pagina do GitHub

### Explicando os comandos e mais alguns detalhes

O comando **git init** serve para inicializar o git naquela pasta

O comando **git add .** serve para adicionar todos os arquivos dentro da pasta, você pode adicionar apenas um arquivo se quiser, por exemplo **git add README.md**

O comando **git commit -m ''** serve para capturar o projeto no estado atual e salvar uma mensagem a essa captura

O comando **git remote add origin** serve para centralizar o local remoto do codigo (no caso a página do repositório a ser utlizado do GitHub)

O comando **git push -u origin** serve para enviar a ultima captura (o commit) para o local remoto (remote origin) do repositório
