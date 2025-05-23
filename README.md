# Todo Summary Assistant

## Description

A full-stack web app where user can manage todos, summarise the all incomplete/pending todos with Large Language Model (LLM) cohere, after summarising we can send it to the Slack channel using slack webhoook.

## Tech Stack

### **Frontend:**

- React.js
- Tailwind CSS

### **Backend:**

- Node.js
- MongoDB
- Express.js

## Setup of LLM API and Slack channel integration via webhook

### LLM (Cohere)

Go to https://dashboard.cohere.com

Create an API key

Add it to your .env as COHERE_API_KEY

### Slack webhook integration

Go to https://api.slack.com/apps

Create an app and Enable Incoming Webhooks

Add a new webhook for needed channel

Copy the webhook URL and use it in .env as SLACK_WEBHOOK_URL

Guide to Sending messages using incoming webhooks https://api.slack.com/messaging/webhooks

## Setup Instructions

### Clone the repo

```bash
git clone https://github.com/Vinay14Newbie/Todo-Summary-Assistant.git
cd Todo-Summary-Assistant
```

### Backend SEtup

```bash
    cd backend
```

#### Install Dependencies

```bash
    npm install
```

#### Create .env File

```bash
    DB_URL=your_db_url
    COHERE_API_KEY=your_api_key
    SLACK_WEBHOOK_URL=your_slack_webhook_url
```

#### Start the backend server

```bash
    npm start
```

### Frontend Setup

#### Install dependencies

```bash
    npm install
```

#### Start the frontend server

```bash
    npm run dev
```

## Features

Add / edit / delete todos

View live todo list

One-click summary with LLM

Slack channel integration
