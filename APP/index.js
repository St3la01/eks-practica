const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send(`
    <!DOCTYPE html>
    <html lang="es">
    <head>
      <meta charset="UTF-8">
      <title>EKS26 Docker Demo</title>
      <style>
        body{
          margin:0;
          height:100vh;
          display:flex;
          justify-content:center;
          align-items:center;
          background:linear-gradient(135deg,#0f172a,#1e293b);
          font-family:Arial, sans-serif;
          color:white;
        }

        .card{
          text-align:center;
          padding:40px;
          border-radius:20px;
          background:rgba(255,255,255,0.1);
          backdrop-filter:blur(10px);
          box-shadow:0 10px 30px rgba(0,0,0,.4);
        }

        h1{
          color:#38bdf8;
          margin-bottom:10px;
        }

        p{
          font-size:18px;
          color:#cbd5e1;
        }

        .docker{
          font-size:60px;
        }
      </style>
    </head>
    <body>
      <div class="card">
        <div class="docker">🐳</div>
        <h1>Docker + Express</h1>
        <p>¡Estela Ram!</p>
        <p><strong>Clase EKS- 26 </strong></p>
        <p>Lunes 20</p>
      </div>
    </body>
    </html>
  `);
});

app.listen(3000, "0.0.0.0", () => {
  console.log("🚀 Servidor ejecutándose en puerto 3000");
});