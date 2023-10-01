import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DownloadService {

  constructor() {}

  static download(path:string,name_file:string,rename?:string) {
    const linkDownload = document.createElement('a');
    linkDownload.href  = `${path}${name_file}`;
    linkDownload.target = '_blank';
    if (rename) linkDownload.download = rename;
    else linkDownload.download = name_file;

    document.body.appendChild(linkDownload);
    linkDownload.click();
    document.body.removeChild(linkDownload);
  }
}
