node {
  def project = 'simple-nodejs-kubernetes'
  def appName = 'hello-node'  
  //def imageTag = "gcr.io/${project}/${appName}:v2"
  def imageTag = "gcr.io/simple-nodejs-kubernetes/hello-node:v3"
  

  checkout scm

  stage 'Build image'
  sh("docker build -t ${imageTag} .")

  stage 'Push image to registry'
  sh("gcloud docker push ${imageTag}")
  
  stage 'Deploy Application'
  sh("kubectl --namespace=development apply -f frontend.yaml")
}
