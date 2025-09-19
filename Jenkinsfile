pipeline {
    agent any

    tools {
        nodejs "node20.11.1"
    }

    stages {
        stage('Checkout') {
            steps {
                git branch: 'main', url: 'https://github.com/Muzamilbukhari/nestjs_test.git'
            }
        }

        stage('Install Dependencies') {
            steps {
                bat 'npm install'
            }
        }

        stage('Build') {
            steps {
                bat 'npm run build'
            }
        }

        stage('Run') {
            steps {
                // On Windows, use "bat" instead of "sh"
                bat 'npm run start:prod'
            }
        }
    }
}
