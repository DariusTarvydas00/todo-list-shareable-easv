pipeline {
    agent any

    triggers{
        pollSCM('*/15 * * * *')
    }

    tools {
        nodejs "Node"
    }

    // continuous integration, testing, delivery Jenkinsfile - for continuous delivery; Jenkinsfile.prod - continuous deployment; last stresstest
    // another pipeline deploy to production: addition steps of testing, UI testing, performance testing
    // stress testing no waiting

    stages {
        stage("Build project"){
            parallel {
                stage("Build Back-End"){
                    steps {
                        sh "docker-compose --env-file config/test.env build api"
                    }
                }
                stage("Build Front-End"){
                    steps {
                        sh "docker-compose --env-file config/test.env build web"
                    }
                }
            }
        }
        
        stage("Unit test"){
            parallel{
                stage("Back-End Test"){
                    steps{
                        dir('todo-list-shareable-backend') {
                            echo 'running api tests'
                            //sh 'npm run test'
                        }
                    }
                }
                stage("Front-End Test"){
                    steps{
                        dir('todo-list-shareable-frontend') {
                            echo 'running web tests'
                            //sh "npm run test:unit"
                        }
                    }
                }
            }
        }
        stage("Setup manual test env"){
            steps{
                script {
                    try {
                        sh "docker-compose --env-file config/test.env down"
                    }
                    finally {
                    }
                }
                    sh "docker-compose --env-file config/test.env up -d"
            }
        }
        stage("Delivery to registry"){
             parallel {
                stage("Deliver to registry back-end"){
                    steps {
                    echo 'push to registry'
//                         sh "docker-compose --env-file config/test.env push api"
//                         sh "docker-compose --env-file config/test.env push web"
                    }
                }
             }
        }
    }
}