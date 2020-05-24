System.register("ts/model/Card", [], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [],
        execute: function () {
        }
    };
});
System.register("ts/data/CardExample", [], function (exports_2, context_2) {
    "use strict";
    var CardExample;
    var __moduleName = context_2 && context_2.id;
    return {
        setters: [],
        execute: function () {
            CardExample = class CardExample {
                get() {
                    return {
                        title: 'Lorem Ipsum',
                        content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce sit amet nulla sit amet lacus euismod sagittis. Praesent dapibus convallis elit, quis pretium ante efficitur at. Morbi quis elementum nisi. Aliquam tempor porttitor lacus, ac ornare metus tristique vel. Vivamus a sapien dolor. Cras laoreet nisl vitae pulvinar pulvinar. Suspendisse at maximus ante. Aenean porta tempor dolor, sed convallis ex pellentesque vel. Fusce in venenatis velit, ac blandit urna. Morbi ac luctus est, consectetur luctus tellus.',
                        img: 'img/post-example.jpg'
                    };
                }
            };
            exports_2("CardExample", CardExample);
        }
    };
});
System.register("ts/data/index", ["ts/data/CardExample"], function (exports_3, context_3) {
    "use strict";
    var __moduleName = context_3 && context_3.id;
    function exportStar_1(m) {
        var exports = {};
        for (var n in m) {
            if (n !== "default") exports[n] = m[n];
        }
        exports_3(exports);
    }
    return {
        setters: [
            function (CardExample_1_1) {
                exportStar_1(CardExample_1_1);
            }
        ],
        execute: function () {
        }
    };
});
System.register("ts/view/View", [], function (exports_4, context_4) {
    "use strict";
    var View;
    var __moduleName = context_4 && context_4.id;
    return {
        setters: [],
        execute: function () {
            View = class View {
                constructor(selector) {
                    this._element = $(selector);
                }
                updateList(model) {
                    let template = this.template(model);
                    this._element.html(template + this._element.html());
                }
            };
            exports_4("View", View);
        }
    };
});
System.register("ts/model/index", [], function (exports_5, context_5) {
    "use strict";
    var __moduleName = context_5 && context_5.id;
    return {
        setters: [],
        execute: function () {
        }
    };
});
System.register("ts/view/CardView", ["ts/view/index"], function (exports_6, context_6) {
    "use strict";
    var index_1, CardView;
    var __moduleName = context_6 && context_6.id;
    return {
        setters: [
            function (index_1_1) {
                index_1 = index_1_1;
            }
        ],
        execute: function () {
            CardView = class CardView extends index_1.View {
                template(card) {
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
            };
            exports_6("CardView", CardView);
        }
    };
});
System.register("ts/view/index", ["ts/view/View", "ts/view/CardView"], function (exports_7, context_7) {
    "use strict";
    var __moduleName = context_7 && context_7.id;
    function exportStar_2(m) {
        var exports = {};
        for (var n in m) {
            if (n !== "default") exports[n] = m[n];
        }
        exports_7(exports);
    }
    return {
        setters: [
            function (View_1_1) {
                exportStar_2(View_1_1);
            },
            function (CardView_1_1) {
                exportStar_2(CardView_1_1);
            }
        ],
        execute: function () {
        }
    };
});
System.register("ts/controller/CardController", ["ts/view/index"], function (exports_8, context_8) {
    "use strict";
    var index_2, CardController;
    var __moduleName = context_8 && context_8.id;
    return {
        setters: [
            function (index_2_1) {
                index_2 = index_2_1;
            }
        ],
        execute: function () {
            CardController = class CardController {
                add(card) {
                    const view = new index_2.CardView('#card-view');
                    view.updateList(card);
                }
            };
            exports_8("CardController", CardController);
        }
    };
});
System.register("ts/controller/index", ["ts/controller/CardController"], function (exports_9, context_9) {
    "use strict";
    var __moduleName = context_9 && context_9.id;
    function exportStar_3(m) {
        var exports = {};
        for (var n in m) {
            if (n !== "default") exports[n] = m[n];
        }
        exports_9(exports);
    }
    return {
        setters: [
            function (CardController_1_1) {
                exportStar_3(CardController_1_1);
            }
        ],
        execute: function () {
        }
    };
});
System.register("ts/util/DownloadUtil", [], function (exports_10, context_10) {
    "use strict";
    var DownloadUtil;
    var __moduleName = context_10 && context_10.id;
    return {
        setters: [],
        execute: function () {
            DownloadUtil = class DownloadUtil {
                constructor() {
                    throw 'Not instanciable';
                }
                static getTitleAsTimestamp(ext) {
                    const today = new Date();
                    const pad = (n) => n < 10 ? '0' + n : n;
                    return `${pad(today.getUTCFullYear())}-` +
                        `${pad(today.getMonth() + 1)}-` +
                        `${pad(today.getDate())}-` +
                        `${pad(today.getHours())}` +
                        `${pad(today.getMinutes())}` +
                        `${pad(today.getSeconds())}` +
                        `-post.${ext}`;
                }
            };
            exports_10("DownloadUtil", DownloadUtil);
        }
    };
});
System.register("ts/util/index", ["ts/util/DownloadUtil"], function (exports_11, context_11) {
    "use strict";
    var __moduleName = context_11 && context_11.id;
    function exportStar_4(m) {
        var exports = {};
        for (var n in m) {
            if (n !== "default") exports[n] = m[n];
        }
        exports_11(exports);
    }
    return {
        setters: [
            function (DownloadUtil_1_1) {
                exportStar_4(DownloadUtil_1_1);
            }
        ],
        execute: function () {
        }
    };
});
System.register("ts/events/UploadEvent", [], function (exports_12, context_12) {
    "use strict";
    var UploadEvent;
    var __moduleName = context_12 && context_12.id;
    return {
        setters: [],
        execute: function () {
            UploadEvent = class UploadEvent {
                upload() {
                    const imageButton = document.querySelector('#btn-upload-img');
                    let image;
                    if (imageButton.files) {
                        image = imageButton.files[0];
                    }
                    else {
                        return;
                    }
                    if (image) {
                        const reader = new FileReader();
                        reader.onload = (e) => {
                            if (e && e.target) {
                                $('#post-background').attr('src', e.target.result);
                            }
                        };
                        reader.readAsDataURL(image);
                    }
                }
                static removeLabelButton() {
                    const label = $('#label-upload');
                    if (label)
                        label.remove();
                }
                static addLabelButton() {
                    const cardImage = $('.card-image');
                    if (cardImage) {
                        cardImage.append(`<label for="btn-upload-img" id="label-upload" title="Change background image">
                    Change
                </label>
                `);
                    }
                }
            };
            exports_12("UploadEvent", UploadEvent);
        }
    };
});
System.register("ts/events/DownloadEvent", ["ts/util/index", "ts/events/UploadEvent"], function (exports_13, context_13) {
    "use strict";
    var index_3, UploadEvent_1, DownloadEvent;
    var __moduleName = context_13 && context_13.id;
    return {
        setters: [
            function (index_3_1) {
                index_3 = index_3_1;
            },
            function (UploadEvent_1_1) {
                UploadEvent_1 = UploadEvent_1_1;
            }
        ],
        execute: function () {
            DownloadEvent = class DownloadEvent {
                download() {
                    const post = document.querySelector('.card-container');
                    const label = post.querySelector('label-upload');
                    UploadEvent_1.UploadEvent.removeLabelButton();
                    html2canvas(post).then((canvas) => {
                        const ext = 'png';
                        const contentType = `data:image/${ext}`;
                        const imageData = canvas.toDataURL(`image/${ext}`, 1.0)
                            .replace(/^contentType/, "data:application/octet-stream");
                        $("#download-link")
                            .attr("download", index_3.DownloadUtil.getTitleAsTimestamp(ext))
                            .attr("href", imageData);
                        $("#download-link")[0].click();
                    });
                    UploadEvent_1.UploadEvent.addLabelButton();
                }
            };
            exports_13("DownloadEvent", DownloadEvent);
        }
    };
});
System.register("ts/events/index", ["ts/events/DownloadEvent", "ts/events/UploadEvent"], function (exports_14, context_14) {
    "use strict";
    var __moduleName = context_14 && context_14.id;
    function exportStar_5(m) {
        var exports = {};
        for (var n in m) {
            if (n !== "default") exports[n] = m[n];
        }
        exports_14(exports);
    }
    return {
        setters: [
            function (DownloadEvent_1_1) {
                exportStar_5(DownloadEvent_1_1);
            },
            function (UploadEvent_2_1) {
                exportStar_5(UploadEvent_2_1);
            }
        ],
        execute: function () {
        }
    };
});
System.register("ts/app", ["ts/data/index", "ts/controller/index", "ts/events/index"], function (exports_15, context_15) {
    "use strict";
    var index_4, index_5, index_6, App;
    var __moduleName = context_15 && context_15.id;
    return {
        setters: [
            function (index_4_1) {
                index_4 = index_4_1;
            },
            function (index_5_1) {
                index_5 = index_5_1;
            },
            function (index_6_1) {
                index_6 = index_6_1;
            }
        ],
        execute: function () {
            App = class App {
                start() {
                    this.loadExample();
                    this.downloadPost();
                    this.uploadBackground();
                }
                loadExample() {
                    let example = new index_4.CardExample();
                    let controller = new index_5.CardController();
                    controller.add(example.get());
                }
                downloadPost() {
                    let downloadEvent = new index_6.DownloadEvent();
                    $('#download').on('click', downloadEvent.download);
                }
                uploadBackground() {
                    let uploadEvent = new index_6.UploadEvent();
                    $('#btn-upload-img').on('change', uploadEvent.upload);
                }
            };
            exports_15("App", App);
        }
    };
});
//# sourceMappingURL=app.js.map