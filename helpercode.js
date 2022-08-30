function createHTML(employeeArr) {
    
return `<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Employee Info Generator</title>
        <link rel="stylesheet" href="./style.css">
        <script src="jquery-3.6.0.min.js"></script>
    </head>
    <body>
        <header>
            <h1>Team Members</h1>
        </header>
    
        <div id="employee-container">
            <ul>
                <li>
                    <div class="top-box">
                        <h2>Juan</h2>
                        <h3>Engineer</h3>
                    </div>
    
                    <div class="bottom-box">
                        <h4>ID: ${employeeArr}</h4>
                        <h4>Email:</h4>
                        <h4>GitHub:</h4>
                    </div>
                </li>


            </ul>
        </div>
    
        <script src="../index.js"></script>
        
    </body>
    </html>`;
}

module.exports = createHTML();