pipeline {
    agent any

    tools {
        nodejs "NodeJS"
        git "Default"
    }

    stages {
        stage('Checkout') {
            steps {
                checkout scm
            }
        }

        stage('Install Dependencies') {
            steps {
                script {
                    bat 'npm install'
                }
            }
        }

        stage('Run Tests') {
            steps {
                script {
                    // Execute tests
                    bat 'npm test -- --passWithNoTests'
                }
            }
        }

        stage('Build') {
            steps {
                script {
                    // Build the application
                    bat 'npm run build'
                }
            }
        }

        stage('Deploy') {
            steps {
                script {
                    // Deploy the application
                    bat 'npm run start -- -p 3000'
                }
            }
        }
    }

    post {
        success {
            echo 'Build and deployment successful!'
        }
        failure {
            echo 'Build or deployment failed!'
        }
    }
}
