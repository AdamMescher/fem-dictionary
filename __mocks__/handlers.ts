import * as fs from 'fs';
import * as path from 'path';
import { rest } from 'msw';
import { definitionResponseSuccess } from './api/definition/success';

const yuckAudioPath = path.resolve(
  __dirname,
  '../public/assets/audio/yuck.mp3'
);
