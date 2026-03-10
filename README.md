# Express App with Production-Grade CI Pipeline

This project demonstrates how to implement a production-grade Continuous Integration (CI) pipeline for a simple Express.js application using DevSecOps best practices.
The goal of the project is to simulate how modern engineering teams ensure **code quality**, **security**, and **reliability** before code is merged into the main branch.
The pipeline is built using GitHub Actions and integrates automated testing, linting, coverage enforcement, and static security analysis.

## Project Overview

This repository contains:

- A simple Node.js Express API
- Automated unit testing
- Code linting
- Code coverage enforcement
- Static code analysis
- Security scanning
  All checks run automatically whenever code is pushed or a pull request is opened.

## Project Structure

.
└── ci_cd_ExpressApp/
├── app.js
├── server.js
├── app.test.js
├── package.json
├── sonar-project.properties
└── coverage/  
 └── .github/workflows/
├── ci.yml # Build + test workflow  
 ├── code-quality.yml # Static code analysis
└── security.yml # Security scanning

## Tech Stack

- Runtime: Node.js
- Framework: Express.js
- Testing: Jest + Supertest
- Linting: ESLint
- CI/CD: GitHub Actions
- Static Analysis (SAST): SonarQube Cloud
- Dependency Security: Snyk
- Filesystem Vulnerability Scanning: Trivy

## What This Project Demonstrates (Enterprise CI)

This project implements a multi-layer CI pipeline similar to what is used in production engineering teams
