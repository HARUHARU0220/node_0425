import express from "express";
const router = express.Router()

// product 관련된 API를 이곳에 설계한다.
// product와 관련된 데이터를 불러오고 등록하고 수정하고 삭제하는 기능을 만든다.

// product 데이터를 가져오는 API
router.get("/all", (req, res) => {
    res.json({
        msg: "product get all"
    })
})

// product 등록하는 API
router.post("/cre", (req, res) => {
    res.json({
        msg: "create product"
    })
})


//product를 수정하는 API
router.put("/upload",(req,res) => {
    res.json({
        msg: "upload product"
    })
})

//product를 삭제하는 API
router.delete("/del", (req, res)=> {
    res.json({
        msg: "del product"
    })
})
export default router