import { View } from './index';
import { Card } from '../model/index';

export class CardView extends View<Card> {

    template(card: Card): string {
        return `
            <div class="card-container">
                <div class="card-header">
                    <div class="card-image">
                        <img src="${card.img}" id="post-background">
                        <label for="btn-upload-img" id="label-upload" title="Change background image">
                            Change
                        </label>
                        <input type="file" id="btn-upload-img" name="upload" accept="image/png, image/jpeg">
                        <div id="autologo"></div>
                    </div>
                </div>
                <div class="card-title" contentEditable="true">${card.title}</div>
                <div class="card-body" contentEditable="true">${card.content}</div>
            </div>
        `;
    }
    
}