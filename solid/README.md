Solid principle

Giúp app dễ maintain
Dễ mở rộng
Tránh hoặc hạn chế các small error

1. Simple responsibility principle
-> Ex: MVC, 3-layers...
Mỗi thành phần chịu trách nhiệm 1 nhiệm vụ
Controller -> Chỉ chịu trách nhiệm nhận và trả kết quả, Kiểm tra và thay đỏi http code, điều hướng call service....
Service -> Xử lý logic
Repository -> Call DB

2. Open/Closed Principle
Không sửa trực tiếp các thành phần đã hoạt động trong 1 phương thức. Gây ra hậu quả khó lường
Chỉ nên kế thừa và sử dụng lại

3. Liskov Substitution principle
-> Các instance của lớp con có thẻ thay thế được các instance của lớp cha mà vẫn đảm bảo tính đúng đắn của chương trình.
Vd: Con vịt bao gồm: Vịt trời, Vịt cỏ, Vịt xiêm, Vịt cao su,... Các con vịt đều BAY ĐƯỢC TRỪ VỊT CAO SU.

Thông thường: Kiểm tra hành động bay của vịt chỉ khi có hành động gọi bay thì vịt sẽ bay -> Sẽ gây ra crash vì vịt Cao su không bay được.
Giải pháp: Mỗi loại vịt có thể implements 1 interface để có thể kiểm tra đầu vào của bầy vịt

Input interface sẽ kiểm tra các instance của vịt có khả năng bay hay không mới được thêm vào

4. Interface segregation principle
Tách các Interface thành từng phần interface nhỏ 
-> reusable

5. Dependency inversion principle
Sử dụng dependency injection
Mỗi thành phần hệ thống (class, module, …) chỉ nên phụ thuộc vào các abstractions, không nên phụ thuộc vào các concretions hoặc implementations cụ thể.
Dependency injection: Cách implement
Dependency inversion: Nguyên tẵc thiết kế





