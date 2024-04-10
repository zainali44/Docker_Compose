pipeline {
    agent any

    tools {
        // Assuming Jenkins has Docker installed and configured
        docker 'default'
    }

    environment {
        // Define your Docker image name here
        IMAGE_NAME = 'zain123256/devops-2:01'
        // Define any other environment variables you might need
    }

    stages {
        stage('Checkout Code') {
            steps {
                // Clone your repository
                git 'https://github.com/zainali44/Docker_Compose.git'
            }
        }

        stage('Build Docker Image') {
            steps {
                script {
                    // Assuming you have a Dockerfile in the root of your project
                    // This will build your Docker image and tag it
                    docker.build("${IMAGE_NAME}")
                }
            }
        }

        stage('Run Docker Container') {
            steps {
                script {
                    // Stop any previously running containers (optional cleanup step)
                    sh "docker stop $(docker ps -aq) || true"
                    sh "docker rm $(docker ps -aq) || true"
                    
                    // Run your Docker container
                    // Adjust port mappings as per your application's requirements
                    sh "docker run -d -p 3000:3000 ${IMAGE_NAME}"
                }
            }
        }
    }

    post {
        success {
            echo 'Build and Deployment Successful!'
        }

        failure {
            echo 'Build or Deployment Failed.'
        }
    }
}
