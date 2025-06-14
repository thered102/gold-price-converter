const express = require('express');
const app = express();
const os = require('os');

app.use(express.static('public'));

const port = 3000;

// Lấy địa chỉ IP LAN của máy
function getLocalIP() {
  const interfaces = os.networkInterfaces();
  for (let name in interfaces) {
    for (let iface of interfaces[name]) {
      if (iface.family === 'IPv4' && !iface.internal) {
        return iface.address;
      }
    }
  }
}

app.listen(port, () => {
  const ip = getLocalIP();
  console.log(`Trang web đang chạy:`);
  console.log(`➤ http://localhost:${port}`);
  console.log(`➤ http://${ip}:${port} (truy cập từ điện thoại trong cùng Wi-Fi)`);
});
