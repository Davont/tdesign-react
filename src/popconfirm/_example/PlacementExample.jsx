import React from 'react';
import { Button } from '@tdesign/react';
import PopConfirm from '../PopConfirm';

export default function PlacementExample() {
  const $content = '请确认您要进行此操作';
  return (
    <>
      <PopConfirm content={$content} placement="left">
        <Button style={{ marginLeft: 8 }} theme="primary">Left</Button>
      </PopConfirm>


      <PopConfirm content={$content} placement="top">
        <Button style={{ marginLeft: 8 }}>Top</Button>
      </PopConfirm>

      <PopConfirm content={$content} placement="bottom">
        <Button style={{ marginLeft: 8 }}>Bottom</Button>
      </PopConfirm>
    </>
  );
}