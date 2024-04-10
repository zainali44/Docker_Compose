pipeline {
    agent any

    environment {
        IMAGE_NAME = 'zain123256/devops-2:01' // Your Docker image name and tag
    }

    stages {
        stage('Checkout') {
            steps {
                git 'https://github.com/zainali44/Docker_Compose.git' // Your Git repository URL
            }
        }

        stage('Build Image') {
            steps {
                script {
                    sh 'docker build -t ${IMAGE_NAME} .' // Builds Docker image from Dockerfile in current directory
                }
            }
        }

        stage('Run Container') {
            steps {
                script {
                    sh 'docker stop \$(docker ps -q --filter ancestor=${IMAGE_NAME}) || true' // Stop any running containers of this image
                    sh 'docker run -d -p 3000:3000 ${IMAGE_NAME}' // Runs the Docker container
                }
            }
        }
    }

    post {
        success {
            echo 'Deployment succeeded.'
        }

        failure {
            echo 'Deployment failed.'
        }
    }
}
