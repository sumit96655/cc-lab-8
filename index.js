const express = require("express");

const app = express();
const PORT = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.send(`
    <!DOCTYPE html>
    <html>
    <head>
        <title>SaaS Application</title>
        <style>
            body {
                margin: 0;
                font-family: Arial, sans-serif;
                background: linear-gradient(135deg, #667eea, #764ba2);
                color: white;
                display: flex;
                justify-content: center;
                align-items: center;
                height: 100vh;
            }

            .container {
                text-align: center;
                background: rgba(0,0,0,0.2);
                padding: 40px;
                border-radius: 12px;
                box-shadow: 0 8px 20px rgba(0,0,0,0.3);
            }

            h1 {
                margin-bottom: 10px;
            }

            p {
                font-size: 18px;
                margin: 10px 0;
            }

            .name {
                margin-top: 20px;
                font-weight: bold;
                font-size: 20px;
                color: #ffd369;
            }

            .badge {
                margin-top: 15px;
                font-size: 14px;
                opacity: 0.8;
            }
        </style>
    </head>
    <body>
        <div class="container">
            <h1>🚀 SaaS Application</h1>
            <p>Deployed on Cloud (Render)</p>
            <p>This demonstrates the Software as a Service model</p>

            <div class="name">
                Sumit (221080045)
            </div>

            <div class="badge">
                Accessible anytime, anywhere 🌐
            </div>
        </div>
    </body>
    </html>
  `);
});

app.listen(PORT, () => {
  console.log("Server running on port " + PORT);
});