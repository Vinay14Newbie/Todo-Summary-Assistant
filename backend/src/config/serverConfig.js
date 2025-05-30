import dotenv from 'dotenv';

dotenv.config();

export const DB_URL = process.env.DB_URL;

export const COHERE_API_KEY = process.env.COHERE_API_KEY;

export const SLACK_WEBHOOK_URL = process.env.SLACK_WEBHOOK_URL;
