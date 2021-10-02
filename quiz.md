## event loop 作業

程式 1: 請問以下執行結果為何？ after 會在什麼數字後印出？ 為什麼？  
提示: 手動自己畫畫看整段程式的執行過程，call stack 的變化為何？

```javascript
function readData(idx) {
  for (let i = 0; i < 100; i++) {
    idx++;
    console.log(idx);
  }
  if (idx < 500) {
    readData(idx);
  }
}

readData(0);
console.log("after");
```

---

### 程式 1 結果:

> 1.執行結果為:500, after 會在 500 後印出  
> 2. 因為第一段 for 會先跑一百次所以執行完是 1~100 每次跑完會印出來 3. for 後會到 if 判斷如果 idx 小於 500 的時候會再執行一次 readData 函式 4.所以 idx 還會列一百次出來，在跑到 if，直到 idx 等於 500，然後 stack 空了之後就會再跑 after 出來了。

程式 2: 請問以下執行結果為何？ after 會在什麼數字後印出？ 為什麼？  
提示: 手動自己畫畫看整段程式的執行過程，call stack 的變化為何？

```javascript
function readData(idx) {
  for (let i = 0; i < 100; i++) {
    idx++;
    console.log(idx);
  }
  if (idx < 500) {
    setTimeout(function () {
      readData(idx);
    }, 0);
  }
}

readData(0);
console.log("after");
```

---

### 程式 2 結果 :

> 1. 100>after>500
> 2. after 會在 100 後印出
> 3. readData 先跑完 100 次後到下個判斷 if
> 4. if 第一次判斷 idx 小於 500 時會先到 WebAPIs 內，跑完 0 秒後會先到 Queue 內等待
> 5. 因為此時 STACK 內還有內容，所以並不會將 Queue 給放到 stack 內
> 6. 所以程式會先往下繼續跑 console.log("after");
>    跑完後 stack 內清空會繼續 if 判斷式就會再將數字印出來直到等於 500
