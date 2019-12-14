/**
 * 将页面保存为 image
 */
import html2canvas from 'html2canvas';
// import domtoimage from 'dom-to-image';

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

const saveAsImage = () => {
  // @ts-ignore
  html2canvas(document.body).then(function(canvas) {
    let img = canvas.toDataURL('image/jpeg');
    let filename = `Van-${new Date().getTime()}.jpeg`;
    downloadFile(filename, img);
  });
}

/** --- domtoimage 插件的实现方法 ---
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
*/

export default saveAsImage;
