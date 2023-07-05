pipeline {
    agent any

    stages {
        stage('Pegar repositório GIT') {
            steps {
                git branch: 'main', url: 'https://github.com/luizsabio/testes-e2e-ebac-shop'
            }
        }
         stage('Instalar Cypress') {
            steps {
                bat 'npm install cypress'
            }
        }
         stage('Fazer testes') {
            steps {
                bat 'npx cypress run'
            }
        }
    }
    
}