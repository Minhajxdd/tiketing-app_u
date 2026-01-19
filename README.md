# Ticketing Microservices Application

This project is a ticketing platform built using a microservices architecture.  
It is designed to demonstrate how independent services can communicate with each other using events while remaining loosely coupled.

Each service is responsible for a specific part of the system and runs independently inside Docker containers managed with Kubernetes.

## Project Structure

The repository contains multiple services:

- **api-gateway**  
  Acts as the entry point for the application. All client requests go through this service and are routed to the appropriate backend service.

- **auth**  
  Handles user authentication including signup, signin, and signout.  
  Uses JWT-based authentication.

- **tickets**  
  Manages ticket creation, updates, and retrieval.  
  Publishes events when tickets are created or modified.

- **orders**  
  Responsible for creating and managing orders for tickets.  
  Listens to ticket events and tracks order status.

- **payments**  
  Handles payment processing using Stripe.  
  Publishes events when payments are completed.

- **expiration**  
  Automatically expires orders that are not paid within a defined time window.

- **client**  
  Frontend application built with React.  
  Communicates with the backend through the API Gateway.

- **common**  
  A shared package used across services for common logic such as error handling, middleware, and event definitions.

- **infra/k8s**  
  Kubernetes configuration files for deploying services and managing secrets.

## Technologies Used

- Node.js, Express, TypeScript
- React / Next.js
- MongoDB
- NATS Streaming Server
- Docker
- Kubernetes
- Skaffold
- Stripe for payments

## Running the Project Locally

### Requirements

- Docker and Docker Desktop
- Kubernetes enabled
- Skaffold
- Node.js

### Setup

1. Clone the repository:
   ```bash
   git clone https://github.com/qoofa/tickets-microservice
   cd tickets-microservice
