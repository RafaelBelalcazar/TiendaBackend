var express = require("express");
var router = express.Router();

router.get("/", (req, res, next) => {
    let nombre = req.query.q;
    let limit = req.query.limit;
    limit = limit ? parseInt(limit) : 0;
    res.send({ nombre: nombre, limite: limit });

    /*Otra forma a tener en cuenta y estudiar
    if (limit) {
        limit = parseInt(limit);
    } else {
        limit = 0;
    }
    */
});

router.get("/:id", (req, res, next) => {
    let id = req.params.id;
    if (id == '1') {
        res.send({ item: id });
    } else {
        res.status(404).send({ err: "Item no encontrado" });
    }
    res.send({ item: id });

});

router.post("/", (req, res, next) => {
    let item = req.body;
    res.send({ sucess: true, inserted: item });
});

router.put("/:id", (req, res, next) => {
    let id = req.params.id;
    let item = req.body;
    res.send({ sucess: true, id:id, update: item});    
});

router.delete("/:id", (req, res, next) => {
    let id = req.params.id;
    res.send({ sucess:true, deleted: id});
});

module.exports = router;
