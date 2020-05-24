import { Card } from "../model/Card";

export class CardExample {
    get(): Card {
        return {
            title: 'Lorem Ipsum',
            content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce sit amet nulla sit amet lacus euismod sagittis. Praesent dapibus convallis elit, quis pretium ante efficitur at. Morbi quis elementum nisi. Aliquam tempor porttitor lacus, ac ornare metus tristique vel. Vivamus a sapien dolor. Cras laoreet nisl vitae pulvinar pulvinar. Suspendisse at maximus ante. Aenean porta tempor dolor, sed convallis ex pellentesque vel. Fusce in venenatis velit, ac blandit urna. Morbi ac luctus est, consectetur luctus tellus.',
            img: 'img/post-example.jpg'
        }
    }
}