const express = require("express");
const app = express();
const cors = require("cors");

app.use(cors());
app.set("port", process.env.PORT || 8099);
const PORT = app.get("port");

app.get("/items", (req, res) => {
  // db에 연결하고 데이터 긁어와서 json으로 리턴
  res.json([
    { imgSrc: "https://gdimg.gmarket.co.kr/2519021969/still/400?ver=1661741365", title: "삼육두유 검은콩호두와아몬드 190m16입", price: "15,380원" },
    {
      imgSrc: "https://gdimg.gmarket.co.kr/2519435583/still/400?ver=1661734111",
      title: "쓱배송)1+1엘지 생활의감동 스페셜 1호",
      price: "42,900원",
    },
    { imgSrc: "https://gdimg.gmarket.co.kr/2519433321/still/400?ver=1661734419", title: "쓱배송)1+1엘지 생활의감동 샴푸바디세트", price: "31,900원" },
    { imgSrc: "https://gdimg.gmarket.co.kr/2522389738/still/400?ver=1661741864", title: "CJ 고메너겟 550g", price: "9,980원" },
    { imgSrc: "https://gdimg.gmarket.co.kr/2518649331/still/400?ver=1661705420", title: "질러 크레이지 핫 육포 100g", price: "9,880원" },
    { imgSrc: "https://gdimg.gmarket.co.kr/2518575175/still/400?ver=1661730930", title: "존슨즈베이비 탑투토 워시 500mL", price: "12,900원" },
  ]);
});

app.listen(PORT, () => {
  console.log(`${PORT}에서 서버 대기중5`);
});
