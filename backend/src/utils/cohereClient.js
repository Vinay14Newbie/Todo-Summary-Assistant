import { CohereClient } from 'cohere-ai';
import { COHERE_API_KEY } from '../config/serverConfig.js';

const cohere = new CohereClient({
  token: COHERE_API_KEY
});

export default cohere;
