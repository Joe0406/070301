function draw() {
    const canvas = document.getElementById("canvas");  // 取得畫布
    if (canvas.getContext) {                           // 確認網站有支援canvas（最好做這一步）
        const ctx = canvas.getContext("2d");             // 規格為2D平面，這行設定的變數名稱將用來呼叫畫布。（設定一次就好）
        
        ctx.beginPath();
        ctx.fillRect(50, 50, 50, 50);
        ctx.beginPath();
        ctx.moveTo(40, 50);
        ctx.lineTo(75, 25);
        ctx.lineTo(110, 50);
        ctx.fill();
        
    }
  }
  draw();