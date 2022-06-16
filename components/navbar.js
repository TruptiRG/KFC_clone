

function navbar(){
    return `
    <div id="nav1">
        <a href="index.html"><img id="logo" src="https://online.kfc.co.in/static/media/kfcLogo.492728c6.svg" alt=""></a>
        <a href="./menu.html"id="menu">Menu</a>
        <a href="deals.html"id="deals">Deals</a>
    </div>
    <div id="nav2">
        <img id="sign" src="https://images.ctfassets.net/wtodlh47qxpt/6bJdGLRkksNvWP4LI9ZiFF/cb89d6393492fd093e0f99980abfa39e/Account_Icon.svg" alt="">
        <a href="signup.html" id="sig">Sign In</a>
        <hr id="hr">
        <h4 id="price"></h4>
        <a id="cc" href="cart.html"><img id="qty" src="./bucket_cart_icon.svg" alt=""><p id="cartpa"></p></a>
    </div>
    `;
}

export  {navbar} ;