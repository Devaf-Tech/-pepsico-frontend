@import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,200;0,300;0,400;0,500;0,600;0,700;0,800;1,200;1,300;1,400;1,500;1,600;1,700;1,800&display=swap');

*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Poppins', sans-serif;
    transition: 0.3s ease-in-out; /* Added transition for smoother effects */
}

section{
    position: relative;
    width: 100%;
    min-height: 100vh;
    padding: 100px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background: #0062be;
    transition: 0.5s;
}

header{
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    padding: 20px 100px;
    display: flex;
    justify-content: space-between;
    align-items: center;
}

header .logo{
    position: relative;
    max-width: 80px;
}

header ul{
    position: relative;
    display: flex;
}

header ul li{
    list-style: none;
}

header ul li a{
    display: inline-block;
    color: #fff;
    font-weight: 400;
    margin-left: 40px;
    text-decoration: none;
}

.content{
    position: relative;
    width: 100%;
    display: flex;
    justify-content: space-between;
    justify-items: center;
}

.content .textBox{
    position: relative;
    max-width: 600px;
    margin-top: 6%;
}

.content .textBox h2{
    color: #fff;
    font-size: 4em;
    line-height: 1.5em;
    font-weight: 900;
    text-transform: uppercase;
}

.content .textBox h2 span{
    font-size: 2em;
}

.content .textBox p{
    color: #fff;
}

.content .textBox a{
    display: inline-block;
    margin-top: 20px;
    padding: 8px 20px;
    background: #fff;
    color: #111;
    border-radius: 40px;
    font-weight: 500;
    letter-spacing: 1px;
    text-decoration: none;
    text-transform: uppercase;
}

.content .imgBox{
    width: 600px;
    display: flex;
    padding-right: 50px;
    margin-top: 50px;
    justify-content: flex-end;
}

.content .imgBox img{
    max-width: 260px;
}

.thumb{
    position: absolute;
    left: 50%;
    bottom: 20px;
    transform: translateX(-50%);
    display: flex;
}

.thumb li{
    list-style: none;
    display: inline-block;
    margin: 0 20px;
    cursor: pointer;
    transition: 0.5s;
}

.thumb li:hover{
    transform: translateY(-15px);
}

.thumb li img{
    max-width: 40px;
}

.sci{
    position: absolute;
    top: 50%;
    right: 30px;
    transform: translateY(-50%);
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
}

.sci li{
    list-style: none;
}

.sci li a{
    display: inline-block;
    filter: invert(1);
    margin: 5px 0;
    transform: scale(0.6);
}

@media(max-width: 991px){
    section{
        padding: 40px;
        padding-bottom: 150px;
    }
    header{
        padding: 20px 40px;
    }
    header .logo{
        position: relative;
        max-width: 60px;
    }
    header ul{
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: #fff;
        z-index: 1;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        transition: 0.2s;
        visibility: hidden;
        opacity: 0;
    }
    header ul.active{
        visibility: visible;
        opacity: 1;
    }
    header ul li a{
        display: inline-block;
        color: #111;
        font-weight: 400;
        margin-left: 0;
        text-decoration: none;
        font-size: 2em;
        margin: 10px 0;
    }
    header ul li a:hover{
        color: #ed0023;
    }
    .toggleMenu{
        position: relative;
        width: 40px;
        height: 40px;
        background: url(img/menu.png);
        background-position: center;
        background-size: 30px;
        background-repeat: no-repeat;
        z-index: 2;
        cursor: pointer;
    }
    .toggleMenu.active{
        background: url(img/close.png);
        background-position: center;
        background-size: 25px;
        background-repeat: no-repeat;
        filter: invert(1);
    }
    .content{
        flex-direction: column;
        margin-top: 80px;
    }
    .content .textBox{
        position: relative;
        max-width: 100%;
        padding-right: 20px;
    }
    .content .textBox h2{
        font-size: 3em;
    }
    .content .textBox a{
        font-size: 14px;
        padding: 8px 15px;
    }
    .content .imgBox{
        width: 100%;
        display: flex;
        padding-right: 0;
        margin-top: 50px;
        justify-content: center;
    }
    .content .imgBox img{
        max-width: 150px;
    }
    .thumb li img{
        max-width: 37px;
    }
    .sci{
        right: 0;
        width: 50px;
        background: rgba(0,0,0,0.2);
    }
}

/* Slider Transitions */
.slider-container {
    overflow: hidden;
}

.slider-container img {
    width: 100%;
    height: auto;
    transition: transform 0.5s ease-in-out;
}

/* Menu Responsive Transitions */
.navigation {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: #fff;
    z-index: 1;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    transition: 0.2s;
    visibility: hidden;
    opacity: 0;
}

.navigation.active {
    visibility: visible;
    opacity: 1;
}
