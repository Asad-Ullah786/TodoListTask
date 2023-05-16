const express = require("express");
const router = express.Router();
const db = require("../config/Db");
router.get("/all-task", (req, res) => {
    db.query("select * from todotask ",(error,resss)=>{
        if(resss.length===0){
            res.send({
                data:[]
            })
        }
        else{
            res.status(200).json({
                data:resss
            })
        }
    })
});
router.post("/insert-task", (req, res) => {
  try {
    const { task } = req.body;
    db.query(
      `insert into todotask (task,createtion_time)values('${task}', CURRENT_TIME())`,
      function (insertError, insertResult) {
        if (insertError) {
          console.log(insertError);
          res.status(500).json({
            Message: "inserting failed",
            Error: insertError.message,
          });
        } else {
          {
            db.query(
              `select id,task,completed from todotask ORDER BY createtion_time DESC`,
              (err, result) => {
                if (err) {
                  res.status(500).json({
                    Message: "inserting failed",
                    Error: err.message,
                  });
                } else {
                  res.status(200).json({
                    Message: "sucess",
                    data: result,
                  });
                }
              }
            );
          }
        }
      }
    );
  } catch (error) {
    res.status(500).send({
      Message: "inserting failed",
      Error: error.message,
    });
  }
});
router.patch("/complete", (req, res) => {
    try {
      const { id } = req.body;
      db.query(
        // `insert into todotask (task,createtion_time)values('${task}', CURRENT_TIME())`,
        `UPDATE todotask SET completed = '1',completed_time = CURRENT_TIME() WHERE id=${id}`,
        function (insertError, insertResult) {
          if (insertError) {
            console.log(insertError);
            res.status(500).json({
              Message: "updating failed",
              Error: insertError.message,
            });
          } else {
            {
              db.query(
                `select id,task,completed from todotask ORDER BY createtion_time DESC`,
                (err, result) => {
                  if (err) {
                    res.status(500).json({
                      Message: "inserting failed",
                      Error: err.message,
                    });
                  } else if(result.length===0){
                    res.status(200).json({
                        Message: "sucess",
                        data: result,
                      });
                  }
                  
                  else {
                    res.status(200).json({
                      Message: "sucess",
                      data: result,
                    });
                  }
                }
              );
            }
          }
        }
      );
    } catch (error) {
      res.status(500).send({
        Message: "inserting failed",
        Error: error.message,
      });
    }
  });
router.delete("/delete-task", (req, res) => {
  try {
    const { id } = req.body;
    db.query(
      `DELETE FROM todotask WHERE id = ${id};`,
      function (insertError, insertResult) {
        if (insertError) {
          console.log(insertError);
          res.status(500).json({
            Message: "inserting failed",
            Error: insertError.message,
          });
        } else {
          {
            db.query(
              `select id,task,completed from todotask ORDER BY createtion_time DESC`,
              (err, result) => {
                if (err) {
                  res.status(500).json({
                    Message: "deleting failed",
                    Error: err.message,
                  });
                }
                else if(result.length===0){
                    res.status(200).json({
                        Message: "sucess",
                        data: result,
                      });
                  }
                else {
                  res.status(200).json({
                    Message: "sucess",
                    data: result,
                  });
                }
              }
            );
          }
        }
      }
    );
  } catch (error) {
    res.status(500).send({
      Message: "inserting failed",
      Error: error.message,
    });
  }
});
module.exports = router;
