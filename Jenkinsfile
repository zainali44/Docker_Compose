pipeline {
    agent any
    stages {
        stage('Build') {
            steps {
                sh 'docker run --rm -p 3000:3000 zain123256/devops-2:01'
            }
        }
    }
}
