import 'dotenv/config';
import { InstallGlobalCommands } from './utils.js';

// Simple co-command
const CO_COMMAND = {
  name: 'coco',
  description: 'Basic command',
  type: 1,
};

const ALL_COMMANDS = [CO_COMMAND];

InstallGlobalCommands(process.env.APP_ID, ALL_COMMANDS);