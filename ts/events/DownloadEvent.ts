import { DownloadUtil } from "../util/index";
import { UploadEvent } from "./UploadEvent";

export class DownloadEvent {
    download(): void {
        const post = document.querySelector('.card-container') as HTMLElement;
        const label = post.querySelector('label-upload') as HTMLElement;

        UploadEvent.removeLabelButton();

        html2canvas(post).then((canvas) => {
            const ext = 'png';
            const contentType = `data:image/${ext}`;
            const imageData: string = canvas.toDataURL(`image/${ext}`, 1.0)
            .replace(/^contentType/, "data:application/octet-stream");

            $("#download-link")
                .attr("download", DownloadUtil.getTitleAsTimestamp(ext))
                .attr("href", imageData);

            $("#download-link")[0].click();
        });

        UploadEvent.addLabelButton();

    }
}