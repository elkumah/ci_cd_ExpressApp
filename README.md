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

```
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
```

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

### Code Checkout

The pipeline starts by pulling the latest source code from the repository.

### Dependency Installation

Dependencies are installed using:

```javascript
 npm ci
```

This ensures deterministic builds in CI environments.

### Linting

ESLint enforces coding standards and prevents common JavaScript issues.

Example command:

```javascript
npm run lint
```

If lint errors are detected, the CI pipeline fails.

### Automated Testing

Unit tests run using Jest.

```javascript
npm test
```

Tests verify that the application behaves as expected.

### Code Coverage Enforcement

Coverage reports are generated automatically.
Minimum coverage thresholds are enforced to prevent untested code from being merged.

Metrics enforced:

- Statements
- Branches
- Branches
- Lines

### Static Code Analysis (SAST)

Static analysis is performed using SonarQube Cloud.
It detects:

- Bugs
- Code smells
- Security vulnerabilities
- Technical debt

### Dependency Security Scanning

Dependency vulnerabilities are scanned using Snyk and npm audit.
This helps detect known vulnerabilities in third-party libraries.

### Filesystem Vulnerability Scanning

The project directory is scanned with Trivy to detect:

- Vulnerable packages
- Secrets
- Misconfigurations

## Running the Project Locally

** Install dependencies \***

```javascript
npm install
```

** Run the app **

```javascript
npm start
```

The application runs on:

```javascript
http://localhost:3000
```

** Run Test**

```javascript
npm test
```

** Run Lint **

```javascript
npm run lint
```

## CI Pipeline Triggers

The CI pipeline runs automatically when:

- Code is pushed to main\*
- A pull request is opened \*
  This ensures every change is validated before merging.

## Future improvements

Potential enhancements for this project include:

- Docker image build and scanning
- CD pipeline for automated deployments
