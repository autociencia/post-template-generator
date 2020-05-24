import { CardExample } from './data/index';
import { CardController } from './controller/index';
import { DownloadEvent, UploadEvent } from './events/index';

export class App {

    start(): void {
        this.loadExample();
        this.downloadPost();
        this.uploadBackground();
    }

    private loadExample(): void {
        let example = new CardExample();
        let controller = new CardController();
        controller.add(example.get());
    }

    private downloadPost(): void {
        let downloadEvent = new DownloadEvent();
        $('#download').on('click', downloadEvent.download);
    }

    private uploadBackground() {
        let uploadEvent = new UploadEvent();
        $('#btn-upload-img').on('change', uploadEvent.upload);
    }
}