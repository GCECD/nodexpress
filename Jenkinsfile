node {
  def project = 'virajtest-167408'
  def appName = 'hello-node'  
  def imageTag = "gcr.io/virajtest-167408/hello-node:12.0"
  

  checkout scm

  
  stage 'Deploy Application'  
  sh("kubectl apply -f deployment/script/front.yaml")
}
