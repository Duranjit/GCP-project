# GCP Hello World Application

This project demonstrates a simple "Hello World" web application built with Node.js and Express, deployed on Google Cloud Platform (GCP) using Cloud Run.

## Features
- Minimal setup with Node.js and Express.
- Dockerized for containerized deployment.
- Easily deployable to GCP's serverless Cloud Run.

---

## Prerequisites

- Google Cloud Account with a project set up.
- GCP SDK installed ([Install GCP SDK](https://cloud.google.com/sdk/docs/install)).
- Docker installed ([Install Docker](https://docs.docker.com/get-docker/)).
- Node.js (>=14.0.0) and npm installed ([Install Node.js](https://nodejs.org/)).

---

## Getting Started

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd gcp-hello-world
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Run the application locally:
   ```bash
   npm start
   ```

4. Open your browser at [http://localhost:8080](http://localhost:8080) to view the app.

---

## Deploying to Google Cloud Run

1. Authenticate with GCP:
   ```bash
   gcloud auth login
   gcloud config set project [PROJECT_ID]
   ```

2. Build the Docker image:
   ```bash
   docker build -t gcp-hello-world .
   ```

3. Test the container locally (optional):
   ```bash
   docker run -p 8080:8080 gcp-hello-world
   ```

4. Deploy the application to Cloud Run:
   ```bash
   gcloud run deploy gcp-hello-world \
     --source . \
     --region us-central1 \
     --platform managed \
     --allow-unauthenticated
   ```

5. Once deployed, GCP will provide a URL. Open it in your browser to view the app.

---

# Project Structure

```
.
├── Dockerfile          # Docker configuration for containerizing the app
├── package.json        # Node.js dependencies and scripts
├── server.js           # Main server file
└── README.md           # Project documentation
```

---

# Built With

- **Node.js**: JavaScript runtime for building scalable applications.
- **Express**: Web framework for building the application.
- **Docker**: Containerization of the application.
- **Google Cloud Run**: Serverless compute platform for deploying the app.

---

# License

This project is licensed under the MIT License.
