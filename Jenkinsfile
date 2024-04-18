pipeline {
    agent any

    tools {
        nodejs "NodeJS" // Assuming "NodeJS" is configured globally in Jenkins
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
                    npmInstall()
                }
            }
        }

        stage('Test') {
            parallel {
                stage('Unit Tests') {
                    steps {
                        script {
                            npmTest()
                        }
                    }
                }
                stage('Test with Coverage') {
                    steps {
                        script {
                            npmTestWithCoverage()
                        }
                    }
                }
            }
        }

        stage('Build') {
            steps {
                script {
                    npmRunBuild()
                }
            }
        }

        stage('Deploy') {
            steps {
                script {
                    npmStart()
                }
            }
            post {
                success {
                    echo 'Deployment successful!'
                }
                failure {
                    echo 'Deployment failed!'
                }
            }
        }
    }

    post {
        success {
            echo 'Build successful!'
        }
        failure {
            echo 'Build failed!'
        }
    }
}

def npmInstall() {
    bat 'npm install'
}

def npmTest() {
    bat 'npm test'
}

def npmTestWithCoverage() {
    bat 'npm test -- --coverage'
}

def npmRunBuild() {
    bat 'npm run build'
}

def npmStart() {
    bat 'npm start -- -p 3000'
}
