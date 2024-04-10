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
            post {
                always {
                    echo 'Run Tests stage completed.'
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
            post {
                always {
                    echo 'Build stage completed.'
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
            post {
                always {
                    echo 'Deploy stage completed.'
                }
            }
        }
    }

    post {
        always {
            echo 'Pipeline completed.'
        }
        success {
            echo 'Build and deployment successful!'
        }
        failure {
            echo 'Build or deployment failed!'
        }
    }
}
