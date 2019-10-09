pipeline {
    agent {
        docker {
            image 'node:6-alpine'
            args '-p 3000:3000'
        }
    }
		environment {
			CI='true'
		}
stages {
        stage('Build') {
            steps {
                sh 'npm install'
            }
        }
        stage('Test') {
            steps {
                sh './jenkins/scripts/test.sh'
            }
        }

}
}
browserstack('f3a6b101-46b6-48b9-b0bc-b81e22c546de') {
    // some block
}