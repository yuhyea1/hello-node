let doWork = function (job, timer, cb) {
  setTimeout(() => {
    let dt = new Date();
    cb(0, `完成工作: ${job} at ${dt.toLocaleString()}`);
  }, timer);
};
let dt = new Date();
console.log(`開始工作 at ${dt.toLocaleString()}`);

doWork("刷牙", 3000, function (err, data) {
  if (err) {
    console.error(err);
  } else {
    console.log(data);
    doWork("魯拉拉", 3000, function (err, data) {
      if (err) {
        console.error(err);
      } else {
        console.log(data);
        doWork("在睡五分鐘", 5000, function (err, data) {
          if (err) {
            console.error(err);
          } else {
            console.log(data);
          }
        });
      }
    });
  }
});
