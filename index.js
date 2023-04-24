import express from "express"
const app = express()


import productRouter from "./routes/product.js"

//method - get(데이터 불러오는 것), post (데이터를 등록하는 것),put (데이터를 수정),delete (데이터를 삭제)/ 다음에 test 는 주소 (URL path)를 의미함
// app.get("/test", (req, res) => {
//     res.json({
//         msg: "data get all"
//     })
// })

app.use("/product", productRouter)


const port = 1000
app.listen(port, console.log("server start"))

// 코드 빌드 순서
// 1. 위에서 아래로
// 2. = 기준으로 오른쪽으로 왼쪽으로 치환
// 3. () 함수들의 모음
// 4. .은 하위 method 호출할 때 사용
// 5. ,는 그리고로 해석한다.
