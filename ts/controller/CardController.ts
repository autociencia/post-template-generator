import { CardView } from '../view/index';
import { Card } from '../model/index';

export class CardController {

    add(card: Card): void {
        const view = new CardView('#card-view');
        view.updateList(card);
    }

}