var express = require('express');
var router = express.Router();
const products = [
    {
        name: "iPhone 14pro",
        category: "Mobile",
        description: "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis ",
        image: "https://m.media-amazon.com/images/I/31Vle5fVdaL.jpg"
    },
    {
        name: "Pixel 7pro",
        category: "Mobile",
        description: "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis ",
        image: "https://rukminim1.flixcart.com/image/416/416/xif0q/mobile/t/u/m/-original-imaggsuehy3nyj3b.jpeg?q=70"
    },
    {
        name: "Samsung S22 ultra",
        category: "Mobile",
        description: "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis ",
        image: "https://m.media-amazon.com/images/I/71PvHfU+pwL._SL1500_.jpg"
    },
    {
        name: "realme 9pro",
        category: "Mobile",
        description: "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis ",
        image: "https://www.reliancedigital.in/medias/Realme-9-Pro-Smart-Phones-492849161-i-1-1200Wx1200H-300Wx300H?context=bWFzdGVyfGltYWdlc3w1ODAyNnxpbWFnZS9qcGVnfGltYWdlcy9oYjAvaDQ0Lzk3NzkzMjEyNzQzOTguanBnfGQ3MTY0N2Y1NmQ3MTMwMDI4YzhlYzUwNjRiZmZiNTUzODhkOThkZjk5NDk5MmIxMWViNjVlNTY0NGQ1MTUzZjc"
    },
    {
        name: "Nothing Phone1",
        category: "Mobile",
        description: "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis ",
        image: "https://rukminim1.flixcart.com/image/416/416/l5h2xe80/mobile/5/x/r/-original-imagg4xza5rehdqv.jpeg?q=70"
    },
    {
        name: "oneplus 10pro",
        category: "Mobile",
        description: "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis ",
        image: "https://m.media-amazon.com/images/I/61mIUCd-37L._SX679_.jpg"
    }

]
router.get('/', (req, res) =>{
    res.render('home', {products});
})



module.exports = router;
