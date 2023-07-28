import React, { useEffect, useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import useSound from 'use-sound';

const PlayButton = ({ audioUrl }) => {
  return (
    <div>
      <button onClick={() => {}}>Play</button>
      <button onClick={() => {}}>Stop</button>
    </div>
  );
};

export default PlayButton;
