'use client';

import Button from '@mui/material/Button';
import * as React from 'react';

export default function Home() {
  return (
    <>
      <div className="text-red-400">축구 보고 싶다</div>

      <button className="text-gray-300">버튼</button>
      <Button
        variant="contained"
        onClick={() => {
          alert('버튼 클릭 됨');
        }}>
        contained
      </Button>
    </>
  );
}
