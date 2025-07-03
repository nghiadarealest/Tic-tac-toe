# 🎮 Game Tic Tac Toe với Thuật Toán Minimax

## Giới Thiệu Chương Trình

### Về Game Tic Tac Toe
**Tic Tac Toe** là một trò chơi cổ điển hai người chơi (người vs người hoặc người vs máy), với mục tiêu là xếp được 3 ký hiệu giống nhau theo hàng ngang, dọc hoặc chéo trên bảng 3x3.

Trong dự án này, **người chơi là 'O'** và **AI là 'X'**. Trò chơi sử dụng thuật toán **Minimax** để giúp AI đưa ra quyết định thông minh nhất ở mỗi lượt đi.

### Thuật Toán Minimax
**Minimax** là một thuật toán tìm kiếm được sử dụng trong các trò chơi hai người với tổng điểm không đổi (zero-sum game). Mục tiêu:
- **Maximizing player (AI)** sẽ chọn nước đi làm **tối đa điểm số** có thể.
- **Minimizing player (người chơi)** sẽ chọn nước đi làm **giảm thiểu điểm số** của AI.

Quy trình hoạt động:
- Duyệt tất cả các khả năng có thể xảy ra từ vị trí hiện tại.
- Gán điểm số cho từng khả năng: `+1` nếu AI thắng, `-1` nếu người chơi thắng, `0` nếu hòa.
- Đệ quy quay lui từng nước đi để tìm ra giá trị tốt nhất.

### Giao Diện Người Dùng

**Hình 1.1**: Giao diện khởi đầu của trò chơi.  
![image](https://github.com/user-attachments/assets/dace9c94-13ed-426d-b266-59ed3883e99c)

**Hình 1.2**: Sau khi người chơi O và máy X đã đi nước đầu tiên.  
![image](https://github.com/user-attachments/assets/02e6aec3-f546-45bf-9c52-472ffedc875d)

#### Trường Hợp Thắng:

**Hình 1.3**: Máy AI (X) thắng.  
![image](https://github.com/user-attachments/assets/8f6d226a-dc3f-421d-8e26-ee0317652aa5)

**Hình 1.4**: Người chơi (O) thắng.  
![image](https://github.com/user-attachments/assets/3b28095b-e2cd-483c-af10-b3bf15f939d8)

#### Trường Hợp Hòa:

**Hình 1.5**: Cả 2 đều hòa, không ai thắng.  
![image](https://github.com/user-attachments/assets/b8f49c20-4c32-48b4-93d7-9114c409b011)

---

## 🔧 Công Nghệ Sử Dụng

- HTML + JavaScript  
- Thư viện **p5.js** để tạo giao diện vẽ bảng và nhận tương tác.  
- Thuật toán **Minimax** để xử lý logic AI.

---

## ▶️ Cách Chạy Chương Trình

1. Tạo file `.html` và chèn mã JavaScript ở trên.  
2. Nhúng thư viện [p5.js](https://cdnjs.cloudflare.com/ajax/libs/p5.js/1.4.0/p5.js).  
3. Mở file bằng trình duyệt để chơi.

---

## 🎥 Video Demo

[![Xem demo Tic Tac Toe Minimax](https://img.youtube.com/vi/VJ0srC_TE5M/hqdefault.jpg)](https://www.youtube.com/watch?v=VJ0srC_TE5M)
