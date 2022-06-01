# track_my_tab
npm install npm --global
## set up the frontend
    npm init vue@latest
        follow the prompts  
    cd <project-name>
    npm install *OR* npm i
    npm i axios
    confirm the .gitignore file
## set up the backend(expressJs)
    mkdir server
    npm init -f
    npm i --save nodemon eslint express body-parser cors morgan
    npm init @eslint/config
        "scripts": {
            "start": "nodemon src/app.js --exec \"npm run lint && node\"",
            "lint": "eslint **/*.js"
        },
    npm start
    confirm or create a .gitignore file & include node_modules

git config --global core.fsmonitor true ''' to be able to use git add . '''
git add .
git commit -m "<message>"

### if you've forgotten to ignore the node_modules folder
    git rm -r --cached <folder>
    git add .
    git commit "<message>"
