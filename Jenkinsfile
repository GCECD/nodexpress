node {
  def project = 'simple-nodejs-kubernetes'
  def appName = 'hello-node'  
  //def imageTag = "gcr.io/${project}/${appName}:v2"
  //def imageTag = "gcr.io/simple-nodejs-kubernetes/hello-node:v3"
  def imageTag = "gcr.io/${project}/${appName}:${env.BRANCH_NAME}.${env.BUILD_NUMBER}"
  

  checkout scm

  stage 'Build image'
  sh("docker build -t ${imageTag} .")

  stage 'Push image to registry'
  sh("gcloud docker push ${imageTag}")
  
  stage 'Deploy Application'
  sh("sed -i.bak 's#gcr.io/cloud-solutions-images/hello-node:1.0.0#${imageTag}#' ./yaml/*.yaml")
  sh("kubectl --namespace=development apply -f yaml/")
}
