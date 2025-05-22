import axios from 'axios';
import { SLACK_WEBHOOK_URL } from '../config/serverConfig.js';

export const sendToSlack = async (message) => {
  try {
    if (!SLACK_WEBHOOK_URL) {
      throw new Error('Slack Webhook URL is not defined in .env');
    }

    await axios.post(SLACK_WEBHOOK_URL, {
      text: `📝 *Todo Summary:*\n${message}`
    });

    console.log('Message sent successfully :|');
  } catch (error) {
    console.log('Error while sending the message to Slack');

    throw error;
  }
};
