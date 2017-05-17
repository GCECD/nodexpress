node {
  def project = 'virajtest-167408'
  def appName = 'hello-node'  
  def imageTag = "gcr.io/${project}/${appName}:${env.BRANCH_NAME}.${env.BUILD_NUMBER}"
  
  checkout scm
  stage 'Build image'
   sh("docker images")
  sh("docker build -t ${imageTag} .")

  stage 'Push image to registry'
  sh("gcloud docker push ${imageTag}")
  sh("echo ${imageTag}")
  sh("hostname -i")
  stage 'Deploy Application'
  sh("sed -i.bak 's#gcr.io/cloud-solutions-images/hello-node:1.0.0#${imageTag}#' ./deployment/script/*.yaml")
  sh("cat deployment/script/*.yaml")
  sh("kubectl apply  -f deployment/script/*.yaml")
  sh("kubectl get pods")
  sh("kubectl get deployments ")
   sh("kubectl get deployments hello-node")
}
