import React, { FC } from 'react';
import { observer } from 'mobx-react';
import {
  deepOrange,
  green,
  red,
  purple,
  pink,
  blue,
} from '@material-ui/core/colors';
import html2canvas from 'html2canvas';
import domtoimage from 'dom-to-image';

import store from '@commonStore/test';
import AppRoot from '@commonComp/app-root';
import { Button } from '@material-ui/core';

interface IProps {}
interface IState {}

const Home: FC = (props: IProps, state: IState) => {

  const base64ToBlob = (content: any) => {
    let parts = content.split(';base64,');
    let contentType = parts[0].split(':')[1];
    let raw = window.atob(parts[1]);
    let rawLength = raw.length;

    let uInt8Array = new Uint8Array(rawLength);
    for(let i = 0; i < rawLength; ++i) {
      uInt8Array[i] = raw.charCodeAt(i);
    }
    return new Blob([uInt8Array], { type: contentType });
  }

  const downloadFile = (filename: string, content: any) => {
    let link = document.createElement('a');
    let blob = base64ToBlob(content);
    link.download = filename;
    link.href = URL.createObjectURL(blob);
    link.click();
  }

  const saveAsCanvas = () => {
    // @ts-ignore
    html2canvas(document.body).then(function(canvas) {
      let img = canvas.toDataURL('image/jpeg');
      let filename = `Image${new Date().getTime()}.jpeg`;
      downloadFile(filename, img);
    });
  }

  const saveAsImage = () => {
    let node = document.body;
    // @ts-ignore
    domtoimage.toJpeg(node, { quality: 1.0 }).then(dataUrl => {
      let link = document.createElement('a');
      link.download = `DomToImage${new Date().getTime()}.jpeg`;
      link.href = dataUrl;
      link.click();
    });
  }

  return (
    <AppRoot>
      <p>Home: {store.count}</p>
      <p>
        <Button variant="contained" color="primary" onClick={store.increment}>华新镇华南路555号</Button>
      </p>
      <p>Hyphen</p>
      <p>
        <Button variant="contained" color="secondary" onClick={store.decrement}>华新镇华南路555号</Button>
      </p>
      <p>Hyphen</p>
      <p>
        <Button variant="contained" color="default" onClick={saveAsCanvas}>Canvas转Image</Button>
      </p>
      <p>Hyphen</p>
      <p>
        <Button variant="contained" color="primary" disabled>华新镇华南路555号</Button>
      </p>
      <p>
        <Button variant="contained" color="secondary" onClick={saveAsImage}>保存为图片</Button>
      </p>
      <p style={{color: pink['A400']}}>
        <label className="demo-label">pink:</label>
        <span className="demo-span">Here are some examples of customizing the component.</span>
      </p>
      <p style={{color: blue['A400']}}>
        <label className="demo-label">blue:</label>
        <span className="demo-span">Here are some examples of customizing the component.</span>
      </p>
      <p style={{color: purple['A400']}}>
        <label className="demo-label">purple:</label>
        <span className="demo-span">Here are some examples of customizing the component.</span>
      </p>
      <p style={{color: red['A400']}}>
        <label className="demo-label">red:</label>
        <span className="demo-span">Here are some examples of customizing the component.</span>
      </p>
      <p style={{color: green['A400']}}>
        <label className="demo-label">green:</label>
        <span className="demo-span">Here are some examples of customizing the component.</span>
      </p>
      <p style={{color: deepOrange['A400']}}>
        <label className="demo-label">deepOrange:</label>
        <span className="demo-span">Here are some examples of customizing the component.</span>
      </p>
      <p>
        <label className="demo-label">Open Sans:</label>
        <span className="demo-span" style={{fontFamily: 'Open Sans'}}>Here are some examples of customizing the component.</span>
      </p>
      <p>
        <label className="demo-label">Lato:</label>
        <span className="demo-span" style={{fontFamily: 'Lato'}}>Here are some examples of customizing the component.</span>
      </p>
      <p>
        <label className="demo-label">Ubuntu:</label>
        <span className="demo-span" style={{fontFamily: 'Ubuntu'}}>Here are some examples of customizing the component.</span>
      </p>
    </AppRoot>
  )
}

export default observer(Home);
