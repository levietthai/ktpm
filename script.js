// DOM Elements
const questionText = document.getElementById('question-text');
const answerOptions = document.getElementById('answer-options');
const nextBtn = document.getElementById('next-btn');
const quizContainer = document.getElementById('quiz-container');
const resultsContainer = document.getElementById('results-container');
const scoreText = document.getElementById('score');
const totalQuestionsText = document.getElementById('total-questions');
const restartBtn = document.getElementById('restart-btn');

// Dữ liệu câu hỏi (Toàn bộ 100 câu từ tệp docx)
// Đáp án đúng được xác định bằng chỉ số (index) của mảng options (0 = A, 1 = B, 2 = C, 3 = D)
const questions = [
    // PHẦN 1
    {
        question: "Phân tích trong dự án phần mềm tập trung trả lời câu hỏi nào?",
        options: ["Làm thế nào để làm", "Cần làm cái gì", "Ai sẽ làm", "Khi nào làm"],
        answer: 1
    },
    {
        question: "Mục tiêu chính của giai đoạn thiết kế phần mềm là gì?",
        options: ["Xây dựng giao diện người dùng", "Tạo bản thiết kế kỹ thuật cho hệ thống", "Viết mã nguồn hoàn chỉnh", "Kiểm thử chương trình"],
        answer: 1
    },
    {
        question: "Phân tích và thiết kế trong quy trình phát triển phần mềm có mối quan hệ như thế nào?",
        options: ["Liên tiếp, chuyển hóa lẫn nhau", "Thực hiện song song", "Không liên quan", "Chỉ thực hiện một lần"],
        answer: 0
    },
    {
        question: "Quá trình chuyển mô hình thiết kế thành phần mềm thực thi được gọi là gì?",
        options: ["Phân tích", "Cài đặt (Implementation)", "Kiểm thử", "Bảo trì"],
        answer: 1
    },
    {
        question: "Factoring và Partitioning trong thiết kế phần mềm có tác dụng gì?",
        options: ["Chia nhỏ hệ thống để dễ quản lý và tái sử dụng", "Tăng tính bảo mật", "Giảm hiệu năng hệ thống", "Tạo lỗi kiểm thử"],
        answer: 0
    },
    {
        question: "Lớp nào trong kiến trúc phân tầng chịu trách nhiệm xử lý nghiệp vụ?",
        options: ["Tầng trình bày", "Tầng nghiệp vụ (Business Logic Layer)", "Tầng cơ sở dữ liệu", "Tầng giao tiếp người dùng"],
        answer: 1
    },
    {
        question: "Việc dùng kế thừa trong mô hình lớp mang lại lợi ích gì?",
        options: ["Tái sử dụng mã và mở rộng chức năng", "Giảm độ phức tạp", "Tăng bảo mật", "Giảm số lượng lớp"],
        answer: 0
    },
    {
        question: "Lợi thế nổi bật của phần mềm tùy chỉnh là gì?",
        options: ["Phù hợp chính xác với yêu cầu của doanh nghiệp", "Thời gian triển khai nhanh", "Chi phí thấp", "Không cần bảo trì"],
        answer: 0
    },
    {
        question: "Nguy cơ lớn nhất khi phát triển phần mềm tùy chỉnh là gì?",
        options: ["Khó sử dụng", "Chi phí và thời gian cao", "Không thể mở rộng", "Khó cập nhật"],
        answer: 1
    },
    {
        question: "Lợi ích khi dùng phần mềm đóng gói so với tùy chỉnh là gì?",
        options: ["Chi phí thấp và dễ triển khai", "Dễ bảo trì hơn", "Tùy biến cao", "Bảo mật tốt hơn"],
        answer: 0
    },
    // PHẦN 2
    {
        question: "SCM đảm nhận vai trò gì trong phát triển phần mềm?",
        options: ["Kiểm thử hệ thống", "Quản lý dự án", "Quản lý cấu hình và phiên bản phần mềm", "Thiết kế cơ sở dữ liệu"],
        answer: 2
    },
    {
        question: "Hệ thống quản lý phiên bản phổ biến nhất hiện nay là gì?",
        options: ["SVN", "Git", "Mercurial", "CVS"],
        answer: 1
    },
    {
        question: "Tính năng nổi bật của công cụ kiểm soát phiên bản là gì?",
        options: ["Theo dõi thay đổi và hợp nhất mã nguồn", "Tự động biên dịch chương trình", "Gửi lỗi về máy chủ", "Tạo tài liệu tự động"],
        answer: 0
    },
    {
        question: "Object Wrapper có tác dụng gì trong tích hợp hệ thống?",
        options: ["Giảm tốc độ xử lý", "Loại bỏ hệ thống cũ", "Cho phép hệ thống mới tương tác với hệ thống cũ", "Tăng chi phí phát triển"],
        answer: 2
    },
    {
        question: "Verification trong kiểm tra phần mềm đảm bảo điều gì?",
        options: ["Thiết kế được thực hiện đúng theo yêu cầu kỹ thuật", "Sản phẩm phù hợp với người dùng", "Phần mềm chạy nhanh hơn", "Giao diện đẹp hơn"],
        answer: 0
    },
    {
        question: "Validation xác nhận điều gì?",
        options: ["Phần mềm không có lỗi", "Hệ thống đáp ứng yêu cầu người dùng", "Hệ thống chạy đúng logic", "Mã nguồn được biên dịch"],
        answer: 1
    },
    // PHẦN 3
    {
        question: "UML được dùng để làm gì trong phát triển phần mềm?",
        options: ["Viết mã nguồn", "Lập trình giao diện", "Mô hình hóa cấu trúc và hành vi của hệ thống", "Quản lý dự án"],
        answer: 2
    },
    {
        question: "Biểu đồ nào thể hiện lớp, thuộc tính và phương thức của hệ thống?",
        options: ["Class Diagram", "Use Case Diagram", "Sequence Diagram", "Activity Diagram"],
        answer: 0
    },
    {
        question: "Biểu đồ mô tả trình tự tương tác giữa các đối tượng theo thời gian là gì?",
        options: ["Use Case Diagram", "Sequence Diagram", "Class Diagram", "Component Diagram"],
        answer: 1
    },
    {
        question: "Thiết kế hướng đối tượng giúp giảm chi phí bảo trì bằng cách nào?",
        options: ["Tái sử dụng mã và dễ mở rộng", "Giảm số lượng lớp", "Loại bỏ kế thừa", "Giảm tài liệu"],
        answer: 0
    },
    // PHẦN 4
    {
        question: "Mẫu thiết kế (Design Pattern) là gì?",
        options: ["Một ngôn ngữ lập trình", "Giải pháp tổng quát cho vấn đề tái diễn trong thiết kế phần mềm", "Công cụ lập trình", "Mô hình dữ liệu"],
        answer: 1
    },
    {
        question: "Bộ sưu tập mẫu thiết kế GoF gồm bao nhiêu mẫu?",
        options: ["20", "23", "30", "18"],
        answer: 1
    },
    {
        question: "Các mẫu thuộc nhóm Creational giải quyết vấn đề gì?",
        options: ["Tổ chức luồng xử lý", "Cách tạo đối tượng linh hoạt", "Giao tiếp giữa các module", "Kiểm thử hệ thống"],
        answer: 1
    },
    {
        question: "Mẫu thiết kế nào chỉ cho phép một thể hiện duy nhất của lớp tồn tại?",
        options: ["Singleton", "Factory", "Observer", "Adapter"],
        answer: 0
    },
    {
        question: "Mẫu Factory Method giúp ích điều gì?",
        options: ["Tạo đối tượng mà không cần biết lớp cụ thể", "Sao chép lớp cha", "Tăng tốc xử lý", "Giảm kế thừa"],
        answer: 0
    },
    {
        question: "Sử dụng quá nhiều mẫu thiết kế có thể dẫn đến điều gì?",
        options: ["Dễ bảo trì hơn", "Phức tạp hóa hệ thống", "Giảm hiệu suất", "Mất tính bảo mật"],
        answer: 1
    },
    // PHẦN 5
    {
        question: "Kiến trúc phần mềm xác định điều gì trong hệ thống?",
        options: ["Cấu trúc, thành phần và mối quan hệ giữa chúng", "Mã nguồn cụ thể", "Giao diện người dùng", "Ngôn ngữ lập trình"],
        answer: 0
    },
    {
        question: "Trong kiến trúc 3 tầng, lớp xử lý nghiệp vụ là gì?",
        options: ["Presentation Layer", "Business Logic Layer", "Data Access Layer", "Service Layer"],
        answer: 1
    },
    {
        question: "Đặc điểm nổi bật của Microservices là gì?",
        options: ["Tập trung toàn bộ dữ liệu", "Dịch vụ độc lập, giao tiếp qua API", "Không có cơ sở dữ liệu riêng", "Chạy trên cùng máy chủ"],
        answer: 1
    },
    {
        question: "Ba nguyên tắc cơ bản của mô hình bảo mật CIA là gì?",
        options: ["Confidentiality, Integrity, Availability", "Control, Integration, Automation", "Cloud, Interface, Access", "Connection, Input, Authorization"],
        answer: 0
    },
    {
        question: "Điện toán đám mây mạnh hơn On-Premise ở điểm nào?",
        options: ["Bảo mật cao hơn", "Rẻ hơn", "Khả năng mở rộng linh hoạt hơn", "Không cần internet"],
        answer: 2
    },
    {
        question: "Mô hình Waterfall có đặc điểm nổi bật nào?",
        options: ["Tuần tự và có tài liệu chi tiết ở mỗi giai đoạn", "Linh hoạt thay đổi liên tục", "Không cần kiểm thử", "Không cần phân tích"],
        answer: 0
    },
    {
        question: "Trong nguyên tắc Agile, điều gì được ưu tiên hơn hết?",
        options: ["Quy trình và công cụ", "Con người và sự tương tác", "Tài liệu chi tiết", "Hợp đồng chặt chẽ"],
        answer: 1
    },
    {
        question: "Chuẩn IEEE giúp gì trong thiết kế phần mềm?",
        options: ["Tự động hóa mã nguồn", "Thiết kế giao diện", "Đảm bảo chất lượng và tính thống nhất tài liệu thiết kế", "Quản lý cơ sở dữ liệu"],
        answer: 2
    },
    {
        question: "Mục tiêu chính của chuẩn IEEE trong phát triển phần mềm là gì?",
        options: ["Chuẩn hóa quy trình và tăng độ tin cậy phần mềm", "Giảm thời gian viết mã", "Giảm số lượng nhân viên", "Tự động sinh mã"],
        answer: 0
    },
    {
        question: "Chuẩn IEEE 1016 quy định về điều gì?",
        options: ["Giao diện người dùng", "Tài liệu thiết kế phần mềm (Software Design Description)", "Quản lý cấu hình", "Quy trình kiểm thử"],
        answer: 1
    },
    {
        question: "Phần thiết kế tổng quát trong tài liệu IEEE trình bày điều gì?",
        options: ["Chi tiết mã nguồn", "Kiến trúc tổng thể và phân chia thành phần hệ thống", "Cách viết mã", "Mô tả giao diện đồ họa"],
        answer: 1
    },
    {
        question: "Phần thiết kế kiến trúc mô tả điều gì?",
        options: ["Cấu trúc, module và mối liên kết giữa các phần", "Tên lớp và phương thức", "Giao diện người dùng", "Kế hoạch kiểm thử"],
        answer: 0
    },
    {
        question: "Mối quan hệ giữa chuẩn IEEE và tiến hóa thiết kế là gì?",
        options: ["Tách biệt hoàn toàn", "IEEE cung cấp khung chuẩn để hỗ trợ tiến hóa thiết kế có kiểm soát", "IEEE chỉ áp dụng khi hoàn thành dự án", "Không liên quan"],
        answer: 1
    },
    // PHẦN 7
    {
        question: "Mục đích chính của thiết kế giao diện người dùng là gì?",
        options: ["Trang trí phần mềm", "Giúp người dùng thao tác dễ dàng và hiệu quả", "Tối ưu cơ sở dữ liệu", "Giảm kích thước tệp"],
        answer: 1
    },
    {
        question: "Trong thiết kế giao diện, yếu tố nào được coi là trọng tâm?",
        options: ["Mã nguồn", "Giao diện đồ họa", "Người sử dụng (User-centered design)", "Cấu trúc cơ sở dữ liệu"],
        answer: 2
    },
    {
        question: "Thiết kế giao diện nhất quán giúp gì cho người dùng?",
        options: ["Dễ học, dễ nhớ và thao tác nhanh hơn", "Tăng tính phức tạp", "Giảm tính linh hoạt", "Tăng chi phí phát triển"],
        answer: 0
    },
    {
        question: "Phản hồi của hệ thống quan trọng vì sao?",
        options: ["Giúp người dùng biết trạng thái hiện tại và kết quả thao tác", "Làm giao diện sinh động hơn", "Giảm tốc độ phản hồi", "Không có tác dụng"],
        answer: 0
    },
    {
        question: "Thiết kế tối giản thể hiện ở điểm nào?",
        options: ["Nhiều màu sắc", "Đa dạng phông chữ", "Loại bỏ yếu tố không cần thiết, tập trung vào nội dung chính", "Sử dụng hoạt ảnh phức tạp"],
        answer: 2
    },
    {
        question: "Nguyên tắc linh hoạt trong thiết kế phục vụ ai?",
        options: ["Các nhóm người dùng khác nhau với nhu cầu đa dạng", "Lập trình viên", "Quản trị hệ thống", "Nhà đầu tư"],
        answer: 0
    },
    {
        question: "Cách giúp giảm thiểu lỗi người dùng là gì?",
        options: ["Giấu thông báo lỗi", "Xóa chức năng phức tạp", "Cung cấp cảnh báo và hướng dẫn rõ ràng trước thao tác quan trọng", "Không cho phép nhập dữ liệu"],
        answer: 2
    },
    {
        question: "Trước khi thiết kế giao diện, cần làm gì đầu tiên?",
        options: ["Lên màu giao diện", "Thu thập và phân tích yêu cầu người dùng", "Tạo mã HTML", "Tạo video mô phỏng"],
        answer: 1
    },
    {
        question: "Wireframe chủ yếu biểu diễn điều gì?",
        options: ["Bố cục và cấu trúc của giao diện người dùng", "Hành vi hệ thống", "Dữ liệu người dùng", "Giao thức kết nối"],
        answer: 0
    },
    {
        question: "Điểm khác biệt giữa Mockup và Wireframe là gì?",
        options: ["Không khác nhau", "Mockup thể hiện chi tiết màu sắc, font và hình ảnh", "Wireframe nhiều chi tiết hơn", "Mockup chỉ hiển thị dữ liệu"],
        answer: 1
    },
    {
        question: "Prototype giúp người dùng trải nghiệm điều gì?",
        options: ["Tính năng và hành vi tương tác của giao diện", "Mã nguồn hệ thống", "Cơ sở dữ liệu", "Phần mềm hoàn chỉnh"],
        answer: 0
    },
    {
        question: "Đánh giá chuyên gia (expert review) dựa trên điều gì?",
        options: ["Các nguyên tắc thiết kế và kinh nghiệm thực tế", "Ý kiến ngẫu nhiên", "Dữ liệu ảo", "Mã nguồn chương trình"],
        answer: 0
    },
    {
        question: "Giao diện tương tác chú trọng yếu tố nào?",
        options: ["Mã nguồn chương trình", "Dữ liệu hệ thống", "Hành vi và phản ứng của người dùng", "Tốc độ xử lý"],
        answer: 2
    },
    {
        question: "Mục đích của tính an toàn trong thiết kế giao diện là gì?",
        options: ["Ngăn lỗi và bảo vệ dữ liệu người dùng", "Làm đẹp phần mềm", "Giảm kích thước file", "Tăng tốc khởi động"],
        answer: 0
    },
    {
        question: "Việc áp dụng ràng buộc trong thiết kế tương tác giúp gì?",
        options: ["Hướng người dùng thao tác đúng, giảm lỗi nhập sai", "Tạo giao diện phức tạp hơn", "Giảm tính thẩm mỹ", "Giảm hiệu năng"],
        answer: 0
    },
    {
        question: "Giao diện nên làm gì khi người dùng nhập sai dữ liệu?",
        options: ["Bỏ qua lỗi", "Tự động đóng ứng dụng", "Hiển thị thông báo lỗi rõ ràng và hướng dẫn sửa", "Xóa dữ liệu"],
        answer: 2
    },
    {
        question: "Việc tối ưu backend ảnh hưởng thế nào đến trải nghiệm giao diện?",
        options: ["Tăng tốc độ phản hồi và giảm thời gian chờ của người dùng", "Không ảnh hưởng", "Giảm độ bảo mật", "Tăng lỗi hiển thị"],
        answer: 0
    },
    {
        question: "Tại sao nên tách phần giao diện và xử lý logic?",
        options: ["Giúp dễ bảo trì, tái sử dụng và mở rộng hệ thống", "Giảm hiệu năng", "Dễ viết mã hơn", "Tăng độ phức tạp"],
        answer: 0
    },
    // PHẦN 8
    {
        question: "Trong đặc tả phương thức, những thông tin nào được định nghĩa rõ ràng?",
        options: ["Tên, tham số, kiểu trả về và ràng buộc", "Chỉ tên và mô tả", "Chỉ kết quả đầu ra", "Chỉ kiểu dữ liệu"],
        answer: 0
    },
    {
        question: "Có bao nhiêu loại ràng buộc chính trong thiết kế phần mềm?",
        options: ["Tiền điều kiện, hậu điều kiện, bất biến", "Logic, dữ liệu, bảo mật", "Hiệu năng, chi phí, giao diện", "Phần cứng, phần mềm, người dùng"],
        answer: 0
    },
    {
        question: "Tiền điều kiện (Precondition) là gì?",
        options: ["Kết quả mong đợi", "Điều kiện phải thỏa trước khi thực hiện phương thức", "Quy tắc bảo mật", "Thông báo lỗi"],
        answer: 1
    },
    {
        question: "Hậu điều kiện (Postcondition) đảm bảo điều gì?",
        options: ["Trạng thái đúng sau khi phương thức thực thi xong", "Kiểm tra dữ liệu đầu vào", "Ràng buộc cấu trúc", "Xác nhận giao diện"],
        answer: 0
    },
    {
        question: "Bất biến (Invariant) là gì?",
        options: ["Giá trị thay đổi theo thời gian", "Trạng thái luôn đúng trong suốt vòng đời đối tượng", "Điều kiện tạm thời", "Hành vi bất định"],
        answer: 1
    },
    {
        question: "OCL dùng để làm gì?",
        options: ["Diễn tả ràng buộc logic chính xác trong UML", "Tạo giao diện người dùng", "Sinh mã Java", "Vẽ biểu đồ"],
        answer: 0
    },
    {
        question: "Trong OCL, “self” đại diện cho gì?",
        options: ["Đối tượng hiện tại đang được tham chiếu", "Biến toàn cục", "Phương thức cha", "Lớp cha"],
        answer: 0
    },
    {
        question: "“inv” trong OCL biểu diễn loại ràng buộc nào?",
        options: ["Bất biến (Invariant)", "Tiền điều kiện", "Hậu điều kiện", "Kiểu dữ liệu"],
        answer: 0
    },
    {
        question: "Trong OCL, “->size()” trả về thông tin gì?",
        options: ["Số lượng phần tử trong tập hợp", "Tổng giá trị", "Kích thước file", "Số dòng mã"],
        answer: 0
    },
    // PHẦN 9
    {
        question: "Đặc điểm nổi bật của mô hình tập trung là gì?",
        options: ["Dữ liệu và xử lý tập trung tại máy chủ chính", "Mỗi người dùng có bản sao riêng", "Không có máy chủ", "Phân tán hoàn toàn"],
        answer: 0
    },
    {
        question: "Lợi ích quan trọng nhất của mô hình tập trung là gì?",
        options: ["Dễ quản lý dữ liệu và bảo mật", "Chi phí thấp", "Phân tán tải tốt", "Không cần kết nối mạng"],
        answer: 0
    },
    {
        question: "Điểm yếu lớn nhất của mô hình tập trung là gì?",
        options: ["Dữ liệu đồng bộ", "Dễ quá tải và giảm hiệu năng khi mở rộng", "Khó quản lý người dùng", "Không lưu được dữ liệu"],
        answer: 1
    },
    {
        question: "Kiến trúc Client–Server hoạt động theo nguyên tắc nào?",
        options: ["Client gửi yêu cầu, Server xử lý và trả kết quả", "Server gửi dữ liệu liên tục", "Hai bên cùng xử lý song song", "Không cần mạng"],
        answer: 0
    },
    {
        question: "Loại ứng dụng phổ biến nhất áp dụng mô hình Client–Server là gì?",
        options: ["Phần mềm đồ họa", "Ứng dụng web và mạng", "Trình biên dịch", "Hệ điều hành"],
        answer: 1
    },
    {
        question: "Điểm mạnh của Client–Server so với mô hình tập trung là gì?",
        options: ["Dễ mở rộng và phân tán xử lý", "Giảm bảo mật", "Khó nâng cấp", "Không cần server"],
        answer: 0
    },
    {
        question: "Kiến trúc phân lớp được xây dựng như thế nào?",
        options: ["Chia hệ thống thành các tầng trình bày, nghiệp vụ và dữ liệu", "Chia theo nhóm người dùng", "Dựa theo giao thức mạng", "Theo phiên bản phần mềm"],
        answer: 0
    },
    {
        question: "Lợi ích của mô hình phân lớp là gì?",
        options: ["Dễ phát triển, bảo trì và mở rộng", "Tăng lỗi phần mềm", "Giảm tính độc lập", "Khó kiểm thử"],
        answer: 0
    },
    {
        question: "Nguyên lý cơ bản của hướng đối tượng gồm những gì?",
        options: ["Đóng gói, kế thừa, đa hình, trừu tượng", "Mở rộng, tái sử dụng, bảo mật", "Phân tầng, kế thừa, xử lý song song", "Phân tích, kiểm thử, bảo trì"],
        answer: 0
    },
    {
        question: "Đóng gói (Encapsulation) mang lại lợi ích gì?",
        options: ["Ẩn dữ liệu và giảm phụ thuộc giữa các lớp", "Tăng số lượng thuộc tính", "Tăng lỗi cú pháp", "Giảm hiệu suất"],
        answer: 0
    },
    {
        question: "Lớp con có thể làm gì thông qua kế thừa?",
        options: ["Sử dụng và mở rộng thuộc tính, phương thức của lớp cha", "Xóa lớp cha", "Ghi đè dữ liệu hệ thống", "Tự tạo cha mới"],
        answer: 0
    },
    {
        question: "Theo chuẩn IEEE 1016, tài liệu thiết kế phần mềm phải bao gồm mấy phần chính?",
        options: ["Chỉ phần tổng quát", "Tổng quát, Kiến trúc, Chi tiết", "Thiết kế và kiểm thử", "Kế hoạch và tài chính"],
        answer: 1
    },
    {
        question: "Trong phần thiết kế tổng quát, cần trình bày điều gì?",
        options: ["Cấu trúc mã nguồn", "Kiến trúc tổng thể, chức năng chính và mối quan hệ giữa các thành phần", "Giao diện đồ họa", "Dữ liệu mẫu"],
        answer: 1
    },
    {
        question: "Phần thiết kế kiến trúc mô tả nội dung nào trong hệ thống phần mềm?",
        options: ["Các thành phần chính và cách chúng tương tác với nhau", "Cấu trúc cơ sở dữ liệu", "Màu sắc giao diện", "Luồng dữ liệu đầu vào"],
        answer: 0
    },
    {
        question: "Theo chuẩn IEEE, nguyên tắc thiết kế kiến trúc cơ bản nào giúp tổ chức phần mềm tốt hơn?",
        options: ["Phân tách mối quan tâm, giảm phụ thuộc giữa các thành phần", "Gom tất cả logic vào một lớp", "Thiết kế chỉ dựa trên UI", "Bỏ qua tài liệu"],
        answer: 0
    },
    {
        question: "Lợi ích của việc tuân thủ chuẩn IEEE 1016 trong thiết kế phần mềm là gì?",
        options: ["Giảm tài liệu", "Giúp thống nhất và dễ bảo trì hệ thống", "Tăng độ phức tạp", "Giảm chất lượng sản phẩm"],
        answer: 1
    },
    {
        question: "Một trong những mục tiêu của thiết kế phần mềm theo IEEE là gì?",
        options: ["Giúp nhà phát triển hiểu và triển khai đúng yêu cầu đã phân tích", "Rút ngắn giai đoạn kiểm thử", "Giảm tài nguyên máy chủ", "Tự động hóa bảo trì"],
        answer: 0
    },
    // PHẦN 11
    {
        question: "Lý do quan trọng nhất để có một thiết kế phần mềm tốt là gì?",
        options: ["Giảm chi phí bảo trì và tăng khả năng mở rộng", "Tăng số dòng mã", "Giảm số lượng lập trình viên", "Hạn chế chức năng"],
        answer: 0
    },
    {
        question: "Thiết kế phần mềm tốt thường có đặc điểm nào?",
        options: ["Dễ hiểu, dễ mở rộng, ít phụ thuộc", "Càng nhiều lớp càng tốt", "Mã nguồn dài", "Cấu trúc phức tạp"],
        answer: 0
    },
    {
        question: "Thiết kế phần mềm kém có hậu quả gì?",
        options: ["Giảm thời gian bảo trì", "Gây lỗi dây chuyền, khó sửa đổi và mở rộng", "Tăng năng suất lập trình", "Dễ kiểm thử hơn"],
        answer: 1
    },
    {
        question: "Việc chia nhỏ thành phần phần mềm giúp gì cho phát triển?",
        options: ["Dễ quản lý, kiểm thử và tái sử dụng", "Tăng chi phí bảo trì", "Gây trùng lặp dữ liệu", "Giảm hiệu năng"],
        answer: 0
    },
    {
        question: "Nguyên tắc “Low Coupling – High Cohesion” thể hiện điều gì?",
        options: ["Liên kết lỏng giữa các module và tập trung chức năng trong từng module", "Kết nối chặt và phân tán chức năng", "Gộp nhiều chức năng không liên quan", "Tách biệt hoàn toàn giữa mọi phần"],
        answer: 0
    },
    {
        question: "Mục tiêu của kiến trúc phần mềm mô-đun là gì?",
        options: ["Dễ thay đổi, mở rộng và tái sử dụng các module", "Gộp tất cả thành phần thành một file", "Giảm khả năng kiểm thử", "Tăng phụ thuộc"],
        answer: 0
    },
    // PHẦN 12
    {
        question: "Trong kiến trúc Microservices, mỗi dịch vụ có đặc điểm gì?",
        options: ["Độc lập, có thể triển khai và mở rộng riêng biệt", "Phụ thuộc vào dịch vụ trung tâm", "Chạy chung một cơ sở dữ liệu", "Không thể mở rộng"],
        answer: 0
    },
    {
        question: "Khi tích hợp hệ thống, bước đầu tiên cần làm là gì?",
        options: ["Xác định các giao diện và định dạng dữ liệu cần kết nối", "Viết lại toàn bộ hệ thống", "Gộp cơ sở dữ liệu", "Xóa hệ thống cũ"],
        answer: 0
    },
    {
        question: "Quá trình tích hợp hệ thống bao gồm các công việc nào?",
        options: ["Kết nối, chuyển đổi dữ liệu và kiểm thử tích hợp", "Tạo file backup", "Lập kế hoạch tài chính", "Thiết kế UI"],
        answer: 0
    },
    {
        question: "Lợi ích chính của tích hợp hệ thống là gì?",
        options: ["Giúp chia sẻ dữ liệu và tối ưu quy trình nghiệp vụ", "Tăng độ phức tạp", "Giảm hiệu năng", "Ngăn truy cập dữ liệu"],
        answer: 0
    },
    {
        question: "Khó khăn phổ biến khi thuê ngoài (offshore outsourcing) là gì?",
        options: ["Khác biệt múi giờ, ngôn ngữ và quản lý tiến độ", "Không thể liên lạc", "Không chia sẻ tài liệu", "Lỗi phần cứng"],
        answer: 0
    },
    {
        question: "Outsourcing mang lại lợi ích gì?",
        options: ["Tiết kiệm chi phí và tiếp cận công nghệ mới", "Mất kiểm soát chất lượng", "Giảm bảo mật", "Giảm tính linh hoạt"],
        answer: 0
    },
    // PHẦN 13
    {
        question: "Nguyên tắc bảo mật CIA gồm những yếu tố nào?",
        options: ["Confidentiality, Integrity, Availability", "Control, Interaction, Authentication", "Code, Interface, Access", "Cloud, Internet, Analysis"],
        answer: 0
    },
    {
        question: "Mục tiêu của “Confidentiality” là gì?",
        options: ["Bảo đảm dữ liệu chỉ được truy cập bởi người có quyền", "Kiểm thử hiệu năng", "Tăng tốc độ xử lý", "Giảm lỗi giao diện"],
        answer: 0
    },
    {
        question: "“Integrity” trong bảo mật phần mềm đảm bảo điều gì?",
        options: ["Dữ liệu chính xác, không bị thay đổi trái phép", "Tốc độ xử lý nhanh hơn", "Sao lưu dữ liệu", "Giao diện ổn định"],
        answer: 0
    },
    {
        question: "“Availability” trong nguyên tắc CIA có nghĩa là gì?",
        options: ["Hệ thống luôn sẵn sàng cho người dùng hợp pháp truy cập", "Chỉ truy cập khi có lỗi", "Không cần trực tuyến", "Giới hạn người dùng"],
        answer: 0
    },
    {
        question: "Điểm mạnh lớn nhất của điện toán đám mây so với hệ thống On-Premise là gì?",
        options: ["Không cần internet", "Bảo mật tuyệt đối", "Khả năng mở rộng và linh hoạt cao", "Không cần bảo trì"],
        answer: 2
    }
];

// Trạng thái của trò chơi
let currentQuestionIndex = 0;
let score = 0;
let shuffledQuestions = [];

// Bắt đầu trò chơi
function startQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    quizContainer.style.display = 'block';
    resultsContainer.style.display = 'none';
    nextBtn.style.display = 'none';
    nextBtn.innerHTML = "Câu Tiếp Theo";
    
    // Xáo trộn câu hỏi để mỗi lần chơi khác nhau
    shuffledQuestions = questions.sort(() => Math.random() - 0.5);
    
    showQuestion();
}

// Hiển thị câu hỏi
function showQuestion() {
    // Xóa các tùy chọn cũ
    resetState();

    const currentQuestion = shuffledQuestions[currentQuestionIndex];
    questionText.innerText = `${currentQuestionIndex + 1}. ${currentQuestion.question}`;

    currentQuestion.options.forEach((option, index) => {
        const button = document.createElement('button');
        button.innerText = option;
        button.classList.add('btn');
        button.dataset.index = index; // Lưu chỉ số của đáp án
        button.addEventListener('click', selectAnswer);
        answerOptions.appendChild(button);
    });
}

// Xóa trạng thái câu hỏi trước
function resetState() {
    nextBtn.style.display = 'none';
    while (answerOptions.firstChild) {
        answerOptions.removeChild(answerOptions.firstChild);
    }
}

// Xử lý khi người dùng chọn đáp án
function selectAnswer(e) {
    const selectedBtn = e.target;
    const selectedIndex = parseInt(selectedBtn.dataset.index);
    const correctIndex = shuffledQuestions[currentQuestionIndex].answer;

    // Kiểm tra đáp án
    if (selectedIndex === correctIndex) {
        selectedBtn.classList.add('correct');
        score++;
    } else {
        selectedBtn.classList.add('incorrect');
        // Hiển thị đáp án đúng nếu chọn sai
        Array.from(answerOptions.children).forEach(btn => {
            if (parseInt(btn.dataset.index) === correctIndex) {
                btn.classList.add('correct');
            }
        });
    }

    // Vô hiệu hóa tất cả các nút sau khi đã chọn
    Array.from(answerOptions.children).forEach(btn => {
        btn.disabled = true;
    });

    // Hiển thị nút "Câu Tiếp Theo"
    if (currentQuestionIndex < shuffledQuestions.length - 1) {
        nextBtn.style.display = 'block';
    } else {
        nextBtn.innerHTML = "Xem Kết Quả";
        nextBtn.style.display = 'block';
    }
}

// Xử lý khi nhấn nút "Câu Tiếp Theo"
function handleNextButton() {
    currentQuestionIndex++;
    if (currentQuestionIndex < shuffledQuestions.length) {
        showQuestion();
    } else {
        showResults();
    }
}

// Hiển thị màn hình kết quả
function showResults() {
    quizContainer.style.display = 'none';
    resultsContainer.style.display = 'block';
    scoreText.innerText = score;
    totalQuestionsText.innerText = shuffledQuestions.length;
}

// Gán sự kiện cho các nút
nextBtn.addEventListener('click', handleNextButton);
restartBtn.addEventListener('click', startQuiz);

// Bắt đầu trò chơi khi tải trang
startQuiz();