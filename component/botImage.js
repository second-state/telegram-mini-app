class botImage extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({mode: 'open'});
    }

    get value() {
        const thisName = this.shadowRoot.querySelector("#roleValue").textContent;
        const thisValue = this.shadowRoot.querySelector("#role").value;
        if (thisName === thisValue) {
            return thisValue;
        } else {
            return {name: thisName, value: thisValue};
        }
    }

    render() {
        this.shadowRoot.innerHTML = `
        <style>
            .mobile {
                margin: 2.5vw;
            }
            .mobile #botImg {
                border-radius: 2.5vw;
            }
            .mobile #text {
                bottom: 2.5vw;
                font-size: 2.5vw;
                padding: 1.125vw 1.25vw;
                margin:0 1.25vw;
                border-radius: 2.5vw;
            }
            .mobile #name {
                font-size: 3.75vw;
            }
            .mobile #desc {
                margin-top: 1.25vw;
            }
            .mobile #number {
                margin-top: 1.25vw;
            }
            .mobile #number img {
                width: 3.75vw;
                
            }
            .mobile #number div {
                margin-left: 0.75vw;
            }
            .pc {
                margin: 1vw;
            }
            .pc #text {
                bottom: 1vw;
                font-size: 1vw;
                padding: 0.25vw 0.5vw;
                margin:0 0.5vw;
                border-radius: 1vw;
            }
            .pc #botImg {
                border-radius: 1vw;
            }
            .pc #name {
                font-size: 1.5vw;
            }
            .pc #desc {
                margin-top: 0.5vw;
            }
            .pc #number {
                margin-top: 0.5vw;
            }
            .pc #number img {
                width: 1.5vw;
                border-radius: 2vw;
            }
            .pc #number div {
                margin-left: 0.3vw;
            }
        </style>
        <a class="${this.isMobile ? 'mobile' : 'pc'}" style="width: 100%;" href="javascript:Telegram.WebApp.openTelegramLink('https://t.me/${this.botLink}');">
            <div style="position: relative;width: 100%;display: flex;">
                <div id="text" style="position: absolute;color: white;background-color: rgba(0,0,0,0.4);flex:1;">
                    <div id="name" style="font-weight: 600;">${this.name}</div>
                    <div id="desc">${this.desc}</div>
                    <div id="number" style="display: flex;align-items: center;"><img src="/img/message.svg"><div>${this.chatNumber}</div></div>
                </div>
                <img id="botImg" style="width: 100%;" src="${this.imgUrl}"/>
            </div>
        </a>
        `
    }

    connectedCallback() {
        this.render()
    }
}

customElements.define('bot-component', botImage);
