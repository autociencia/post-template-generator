export class DownloadUtil {

    private constructor() {
        throw 'Not instanciable';
    }

    static getTitleAsTimestamp(ext: string): string {
        const today = new Date();
        const pad = (n: number) => n < 10 ? '0' + n : n;

        return `${pad(today.getUTCFullYear())}-`+
            `${pad(today.getMonth() + 1)}-`+
            `${pad(today.getDate())}-`+
            `${pad(today.getHours())}`+
            `${pad(today.getMinutes())}`+
            `${pad(today.getSeconds())}`+
            `-post.${ext}`;
    }
}