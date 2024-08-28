---
slug: introduction
title: Introduction
sidebar_label: Introduction
sidebar_position: 1
---

![kuberise logo](../static/img/docs_images/full-logo.svg)

# Introduction

An internal developer platform (IDP) is a collection of tools and services and templates to deploy microservices efficiently. IDPs abstract the complexity of deployment environments from developers to help them focus on their business application development rather than installation and configuration of the environment and learning how to deploy to the cloud or Kubernetes.

Kuberise.io is a developer platform that creates an IDP in Kubernetes by running one install command.

## Prerequisites

Kuberise.io doesn’t install the Kubernetes cluster itself but it is a developer platform installed in your Kubernetes cluster. You need to install a kubernetes cluster yourself or use any managed kubernetes providers you like.

## GitOps model

Before installation, you need to fork the Kuberise.io repo in your GitHub account or push this repo in any other code repository in your source code management system which is connected to your kubernetes cluster.

Then that repository would be your single source of truth and to change anything in your platform you need to change the code in that repository and then ArgoCD will deploy the changes. Also if someone changes anything in the kubernetes cluster manually, ArgoCD will revert the changes to make the cluster the same as the code in that repo.

## ArgoCD and app of the apps pattern

ArgoCD is one of the most populate continuous deployment tools for Kubernetes and reconcile the code the real Kubernetes cluster.

After running the install command, it will install the ArgoCD first and then the first ArgoCD application which is the app of apps. App of apps is a common ArgoCD pattern that one ArgoCD application deploys several other ArgoCD applications.

App of apps can be implemented in several different ways. In kuberise.io app of apps is a helm chart that is in app-of-apps folder and iterates over the list of enabled application in values files.

App of apps helm chart generate all other ArgoCD applications and then each of them will deploy a platform service or a business application.

These ArgoCD applications can deploy services in three different formats: helm chart, kustomize application and raw kubernetes yaml object.

Helm charts can be deployed in 3 different ways: a helm chart from an external repository, a helm chart in template folder that another helm chart is its dependency, and a helm chart whose the full source code is in templates folder.

## templates and configs and environments

Using kuberise.io you can manage several environments together in a DRY way (Don’t Repeat Yourself)

In kuberise.io source code, templates and configs are separated. `templates` folder are is the place for helm chart or kustomize source code and these codes are the same for all environments.

`values`  folder is the place for configuration of all platform services and applications that change for different environments. There is a subfolder for each platform in this folder.
