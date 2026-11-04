const express = require("express");
const app = express();
const port = process.env.PORT || 3001;

app.use(express.json())
app.use(express.urlencoded({extended: true}));

app.get("/", (req, res) => res.type('html').send(html));

app.get('/req', (req, res) => {
    console.log("Just got a request!")
    res.send('Yo!')
})
app.get("/meunome", (req, res) => res.type('html').send(meuNome));

app.get("/tico", (req, res) => res.type('html').send(teco));

app.get("/pokemons", (req, res) => res.json(pokemons))

app.listen(port, () => console.log(`Example app listening on port ${port}!`));

const pokemons = [
  { ordem: 1, nome: "Caterpie", tipo: "Inseto" },
  { ordem: 2, nome: "Pidgeotto", tipo: "Normal/Voador" },
  { ordem: 3, nome: "Bulbasaur", tipo: "Planta/Veneno" },
  { ordem: 4, nome: "Charmander", tipo: "Fogo" },
  { ordem: 5, nome: "Squirtle", tipo: "Água" },
  { ordem: 6, nome: "Krabby", tipo: "Água" },
  { ordem: 7, nome: "Primeape", tipo: "Lutador" },
  { ordem: 8, nome: "Muk", tipo: "Veneno" },
  { ordem: 9, nome: "Tauros", tipo: "Normal" },
  { ordem: 10, nome: "Lapras", tipo: "Água/Gelo" },
];

app.get("/pokemons", (req, res) => {
  res.json(pokemons);
});


// 4. POST /series → lista com 3 seriados favoritos
app.post('/series', (req, res) => {
  const series = [
    { id: 1, titulo: 'Breaking Bad'},
    { id: 2, titulo: 'Cowboy Bebop'},
    { id: 3, titulo: 'Jujutsu Kaisen'},
  ];
  res.json(series);
});

// 5. Endpoints que simulam bugs em produção
app.get('/bug', (req, res) => {
  const usuario = undefined;
  res.json({ nome: usuario.nome }); // TypeError → Express responde 500
});

app.get('/bug/manual', (req, res) => {
  throw new Error('Falha simulada: conexão com o banco perdida');
});

// 6. Consumindo APIs públicas gratuitas
app.get('/cep/:cep', async (req, res) => {
  try {
    const resposta = await fetch(`https://viacep.com.br/ws/${req.params.cep}/json/`);
    const dados = await resposta.json();

    if (dados.erro) {
      return res.status(404).json({ mensagem: 'CEP não encontrado' });
    }

    res.json({
      cep: dados.cep,
      rua: dados.logradouro,
      bairro: dados.bairro,
      cidade: dados.localidade,
      uf: dados.uf,
    });
  } catch (erro) {
    res.status(500).json({ mensagem: 'Erro ao consultar a API externa' });
  }
});




const teco = "teco"




const meuNome = `
<!DOCTYPE html>
<html>
  <head>
    <title>Meu nome é Leandro Klink</title>
    <script src="https://cdn.jsdelivr.net/npm/canvas-confetti@1.5.1/dist/confetti.browser.min.js"></script>
    <script>
      setTimeout(() => {
        confetti({
          particleCount: 100,
          spread: 70,
          origin: { y: 0.6 },
          disableForReducedMotion: true
        });
      }, 500);
    </script>
    <style>
      @import url("https://p.typekit.net/p.css?s=1&k=vnd5zic&ht=tk&f=39475.39476.39477.39478.39479.39480.39481.39482&a=18673890&app=typekit&e=css");
      @font-face {
        font-family: "neo-sans";
        src: url("https://use.typekit.net/af/00ac0a/00000000000000003b9b2033/27/l?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=n7&v=3") format("woff2"), url("https://use.typekit.net/af/00ac0a/00000000000000003b9b2033/27/d?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=n7&v=3") format("woff"), url("https://use.typekit.net/af/00ac0a/00000000000000003b9b2033/27/a?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=n7&v=3") format("opentype");
        font-style: normal;
        font-weight: 700;
      }
      html {
        font-family: neo-sans;
        font-weight: 700;
        font-size: calc(62rem / 16);
      }
      body {
        background: white;
      }
      section {
        border-radius: 1em;
        padding: 1em;
        position: absolute;
        top: 50%;
        left: 50%;
        margin-right: -50%;
        transform: translate(-50%, -50%);
      }
    </style>
  </head>
  <body>
    <section>
      Hello Express API 
    </section>
  </body>
</html>
`

const html = `
<!DOCTYPE html>
<html>
  <head>
    <title>Hello from Render!</title>
    <script src="https://cdn.jsdelivr.net/npm/canvas-confetti@1.5.1/dist/confetti.browser.min.js"></script>
    <script>
      setTimeout(() => {
        confetti({
          particleCount: 100,
          spread: 70,
          origin: { y: 0.6 },
          disableForReducedMotion: true
        });
      }, 500);
    </script>
    <style>
      @import url("https://p.typekit.net/p.css?s=1&k=vnd5zic&ht=tk&f=39475.39476.39477.39478.39479.39480.39481.39482&a=18673890&app=typekit&e=css");
      @font-face {
        font-family: "neo-sans";
        src: url("https://use.typekit.net/af/00ac0a/00000000000000003b9b2033/27/l?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=n7&v=3") format("woff2"), url("https://use.typekit.net/af/00ac0a/00000000000000003b9b2033/27/d?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=n7&v=3") format("woff"), url("https://use.typekit.net/af/00ac0a/00000000000000003b9b2033/27/a?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=n7&v=3") format("opentype");
        font-style: normal;
        font-weight: 700;
      }
      html {
        font-family: neo-sans;
        font-weight: 700;
        font-size: calc(62rem / 16);
      }
      body {
        background: white;
      }
      section {
        border-radius: 1em;
        padding: 1em;
        position: absolute;
        top: 50%;
        left: 50%;
        margin-right: -50%;
        transform: translate(-50%, -50%);
      }
    </style>
  </head>
  <body>
    <section>
      Hello Express API 
    </section>
  </body>
</html>
`
