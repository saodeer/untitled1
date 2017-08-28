/**
 * Created by Tianzhen on 2017/8/28.
 */
const express = require("express");
const router = express.Router();
const  lang = require('../lib/lang.json');
/*router.route('plus')
.get(function (req,res,next) {
  next();
});*/

router.route('/plus')
.get( (req,res,next) => {
    console.log(666);
    let num1 = +req.query.num1;
    let num2 = +req.query.num2;
    let sum = num1 + num2;
/*    res.json(200,{

    });*/
    res.status(200).json({
      status: 1,
      message: lang.OK,
      data: sum
    });
  });
module.exports = router;