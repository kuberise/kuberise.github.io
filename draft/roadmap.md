---
slug: roadmap
title: Roadmap
sidebar_label: Roadmap
sidebar_position: 8
---

# Kuberise Roadmap

#  ![Done](https://img.shields.io/badge/status-done-brightgreen) Installation script 

I can run an install.sh script to deploy kuberise to my kubernetes cluster. I have a kubernetes cluster and I have admin access to it using the kubectl command line. This install.sh script installs ArgoCD and uses app-of-apps patterns to install and configure all platform services and all application microservice for all environments. For each platform cluster, I have to run install.sh separately. It is idempotent, which means that if I run install.sh multiple times, it doesn’t hurt and doesn’t change the end result. 

# ![Done](https://img.shields.io/badge/status-done-brightgreen) Cloudnative-pg for PostgreSQL database

I have postgresql in the cluster and I can use it for my application.

# ![Done](https://img.shields.io/badge/status-done-brightgreen) Logs, Metrics, Dashboards 

I have Grafana/Loki to see and search logs of all pods, and also create dashboards in Grafana to monitor metrics of all microservice or kubernetes resources. 

# ![Progressing](https://img.shields.io/badge/status-progressing-yellow) Application deployment helm chart

I fork kuberise to my GitHub and I deploy kuberise from my GitHub repo. 

My application code is in GitHub, I have a pipeline to build it and push the image to docker hub. I will update the version manually in the helm chart in kuberise or use the latest. 

Kuberise application helm chart template provides access to the database inside the cluster. It is admin access for now. 

Kuberise provides pgadmin to explore databases.

After I deploy I can see my services by the ingress I define in the helm chart. 

My microservices can find and talk to each other.

I can find my logs in Loki. 

In Grafana automatically there is a dashboard that I can see memory and cpu and network traffic of my microservices. 

Database password is deployed to the application namespaces and are already mounted to the containers by the application helm chart template. 

There is no security, access management, OIDC, SSO, RBAC restriction and everyone is admin. 

It is only available in minikube local clusters. 

# SSL

There is a cert-manager to handle certificates. Self sign certificate is possible. Also I can use my domain and use let’s encrypt certificates. 

I can deploy to a cluster in Azure and use my domain and certificate for all ingresses. 

All traffic is encrypted. I don’t need to disable ssl in any application or services.

All platform services are using SSL. 

There is a demo on kuberise.net with a valid certificate. 

The reason that SSL is a high priority is that there would be lots of unnecessary effort to disable SSL. But by having SSL I save a lot of time and debug. 

# Kuberise.io Website and Linkedin page

Kuberise has a website kuberise.io and a linkedin page containing the introduction, user feedbacks and links to the repo, documentation, supporting companies, success stories, and blog section.

# Login for applications 

I can create a realm for my todo app and my users will redirect to Keycloak and create an account or login with Google. 

# SSO

There is an internal realm where I can define internal users and then they can login to all platform services. There is single sign on and single logout for platform services and also the keycloak is connected to my LDAP and Active Directory. 

# Gitea for applications 

There is Gitea with CICD inside kuberise available and I can use that to host my micro services and building, scanning and pushing and helm version updates are done automatically. All pull requests trigger scanning the code by Trivy for vulnerabilities. 

# Vault 

There is Vault for secret management and rotation. Also for temporary database access. 

# Backup and restore (Velero) 

Automatic frequent backup is available and I can take a snapshot from the whole cluster and restore it later in a new cluster. 

# RBAC and IAM 

For internal users there are groups and roles and I can define who can access which services or which namespaces or resources. Kubernetes secrets are protected and etcd is encrypted. 

# Harbor

It is possible that I host my images in the harbor registry and don’t use any public or external registry. 

# Security 

The cluster is scanned frequently by Trivy and also monitored and protected by Falco for run time attacks. 


# More features

- Code and Kubernetes scan by Trivy 

- CICD pipeline templates 

- Action runner, Gitlab runner

- Secret management by vault 

- Cilium

- Kafka

- Alert Manager 

- EKS support 

- GKS support 

- Metallb 

- OVHcloud support 

- Backstage and automatic application onboard

- K8sGPT 

- Apache Spark and Jupyter Notebook 

- Limit maximum resources of each namespace (one helm chart that creates namespace and define quota and owner of them)
