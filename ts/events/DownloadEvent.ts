import { DownloadUtil } from "../util/index";
import { UploadEvent } from "./UploadEvent";

export class DownloadEvent {
    download(): void {
        const post = document.querySelector('.card-container') as HTMLElement;

        DownloadEvent.disableDownloadButton();
        UploadEvent.removeButtonLabel();

        html2canvas(post, {scrollY: -window.scrollY}).then((canvas) => {
            const ext = 'png';
            const contentType = `data:image/${ext}`;
            const imageData: string = canvas.toDataURL(`image/${ext}`, 1.0)
                .replace(contentType, "data:application/octet-stream");

            $("#download-link")
                .attr("download", DownloadUtil.getTitleAsTimestamp(ext))
                .attr("href", imageData);

            $("#download-link")[0].click();
            UploadEvent.addButtonLabel();
            DownloadEvent.enableDownloadButton();
        });

    }

    static enableDownloadButton(): void {
        const button = $('#download');

        if (button) {
            console.info("foi");
            button.prop("disabled", false);
        }
    }

    static disableDownloadButton(): void {
        const button = $('#download');

        if (button) {
            button.prop("disabled", true);
        }
    }
}