export class UploadEvent {
    upload(): void {
        const imageButton = document.querySelector('#btn-upload-img') as HTMLInputElement;
        let image: File;

        if (imageButton.files) {
            image = imageButton.files[0] as File;
        } else {
            return;
        }

        if (image) {
            const reader = new FileReader();
            reader.onload = (e) => {
                if (e && e.target) {
                    $('#post-background').attr('src', e.target.result as string)
                }
            }
            reader.readAsDataURL(image);
        }
    }

    static removeButtonLabel(): void {
        const label = $('#label-upload');
        if (label) label.remove();
    }

    static addButtonLabel(): void {
        const cardImage = $('.card-image');

        if (cardImage) {
            cardImage.append(
                `<label for="btn-upload-img" id="label-upload" title="Change background image">
                    Change
                </label>
                `
            );
        }
    }
}