// DOM Elements
const questionText = document.getElementById('question-text');
const answerOptions = document.getElementById('answer-options');
const nextBtn = document.getElementById('next-btn');
const quizContainer = document.getElementById('quiz-container');
const resultsContainer = document.getElementById('results-container');
const scoreText = document.getElementById('score');
const totalQuestionsText = document.getElementById('total-questions');
const restartBtn = document.getElementById('restart-btn');

// Dữ liệu câu hỏi (trích từ tệp của bạn)
// Lưu ý: Đáp án đúng được xác định bằng chỉ số (index) của mảng options (0 = A, 1 = B, 2 = C, 3 = D)
const questions = [
    {
        question: "Phân tích trong dự án phần mềm tập trung trả lời câu hỏi nào?",
        options: ["Làm thế nào để làm", "Cần làm cái gì", "Ai sẽ làm", "Khi nào làm"],
        answer: 1 // B. Cần làm cái gì
    },
    {
        question: "Mục tiêu chính của giai đoạn thiết kế phần mềm là gì?",
        options: ["Xây dựng giao diện người dùng", "Tạo bản thiết kế kỹ thuật cho hệ thống", "Viết mã nguồn hoàn chỉnh", "Kiểm thử chương trình"],
        answer: 1 // B. Tạo bản thiết kế kỹ thuật cho hệ thống
    },
    {
        question: "Lớp nào trong kiến trúc phân tầng chịu trách nhiệm xử lý nghiệp vụ?",
        options: ["Tầng trình bày", "Tầng nghiệp vụ (Business Logic Layer)", "Tầng cơ sở dữ liệu", "Tầng giao tiếp người dùng"],
        answer: 1 // B. Tầng nghiệp vụ (Business Logic Layer)
    },
    {
        question: "Việc dùng kế thừa trong mô hình lớp mang lại lợi ích gì?",
        options: ["Tái sử dụng mã và mở rộng chức năng", "Giảm độ phức tạp", "Tăng bảo mật", "Giảm số lượng lớp"],
        answer: 0 // A. Tái sử dụng mã và mở rộng chức năng
    },
    {
        question: "SCM đảm nhận vai trò gì trong phát triển phần mềm?",
        options: ["Kiểm thử hệ thống", "Quản lý dự án", "Quản lý cấu hình và phiên bản phần mềm", "Thiết kế cơ sở dữ liệu"],
        answer: 2 // C. Quản lý cấu hình và phiên bản phần mềm
    },
    {
        question: "Hệ thống quản lý phiên bản phổ biến nhất hiện nay là gì?",
        options: ["SVN", "Git", "Mercurial", "CVS"],
        answer: 1 // B. Git
    },
    {
        question: "Verification trong kiểm tra phần mềm đảm bảo điều gì?",
        options: ["Thiết kế được thực hiện đúng theo yêu cầu kỹ thuật", "Sản phẩm phù hợp với người dùng", "Phần mềm chạy nhanh hơn", "Giao diện đẹp hơn"],
        answer: 0 // A. Thiết kế được thực hiện đúng theo yêu cầu kỹ thuật
    },
    {
        question: "Validation xác nhận điều gì?",
        options: ["Phần mềm không có lỗi", "Hệ thống đáp ứng yêu cầu người dùng", "Hệ thống chạy đúng logic", "Mã nguồn được biên dịch"],
        answer: 1 // B. Hệ thống đáp ứng yêu cầu người dùng
    },
    {
        question: "Biểu đồ nào thể hiện lớp, thuộc tính và phương thức của hệ thống?",
        options: ["Class Diagram", "Use Case Diagram", "Sequence Diagram", "Activity Diagram"],
        answer: 0 // A. Class Diagram
    },
    {
        question: "Biểu đồ mô tả trình tự tương tác giữa các đối tượng theo thời gian là gì?",
        options: ["Use Case Diagram", "Sequence Diagram", "Class Diagram", "Component Diagram"],
        answer: 1 // B. Sequence Diagram
    },
    {
        question: "Mẫu thiết kế (Design Pattern) là gì?",
        options: ["Một ngôn ngữ lập trình", "Giải pháp tổng quát cho vấn đề tái diễn trong thiết kế phần mềm", "Công cụ lập trình", "Mô hình dữ liệu"],
        answer: 1 // B. Giải pháp tổng quát cho vấn đề tái diễn trong thiết kế phần mềm
    },
    {
        question: "Mẫu thiết kế nào chỉ cho phép một thể hiện duy nhất của lớp tồn tại?",
        options: ["Singleton", "Factory", "Observer", "Adapter"],
        answer: 0 // A. Singleton
    },
    {
        question: "Đặc điểm nổi bật của Microservices là gì?",
        options: ["Tập trung toàn bộ dữ liệu", "Dịch vụ độc lập, giao tiếp qua API", "Không có cơ sở dữ liệu riêng", "Chạy trên cùng máy chủ"],
        answer: 1 // B. Dịch vụ độc lập, giao tiếp qua API
    },
    {
        question: "Ba nguyên tắc cơ bản của mô hình bảo mật CIA là gì?",
        options: ["Confidentiality, Integrity, Availability", "Control, Integration, Automation", "Cloud, Interface, Access", "Connection, Input, Authorization"],
        answer: 0 // A. Confidentiality, Integrity, Availability
    },
    {
        question: "Trong nguyên tắc Agile, điều gì được ưu tiên hơn hết?",
        options: ["Quy trình và công cụ", "Con người và sự tương tác", "Tài liệu chi tiết", "Hợp đồng chặt chẽ"],
        answer: 1 // B. Con người và sự tương tác
    },
    {
        question: "Wireframe chủ yếu biểu diễn điều gì?",
        options: ["Bố cục và cấu trúc của giao diện người dùng", "Hành vi hệ thống", "Dữ liệu người dùng", "Giao thức kết nối"],
        answer: 0 // A. Bố cục và cấu trúc của giao diện người dùng
    },
    {
        question: "Nguyên tắc “Low Coupling – High Cohesion” thể hiện điều gì?",
        options: ["Liên kết lỏng giữa các module và tập trung chức năng trong từng module", "Kết nối chặt và phân tán chức năng", "Gộp nhiều chức năng không liên quan", "Tách biệt hoàn toàn giữa mọi phần"],
        answer: 0 // A. Liên kết lỏng...
    }
];

// Trạng thái của trò chơi
let currentQuestionIndex = 0;
let score = 0;

// Bắt đầu trò chơi
function startQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    quizContainer.style.display = 'block';
    resultsContainer.style.display = 'none';
    nextBtn.style.display = 'none';
    nextBtn.innerHTML = "Câu Tiếp Theo";
    showQuestion();
}

// Hiển thị câu hỏi
function showQuestion() {
    // Xóa các tùy chọn cũ
    resetState();

    const currentQuestion = questions[currentQuestionIndex];
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
    const correctIndex = questions[currentQuestionIndex].answer;

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
    if (currentQuestionIndex < questions.length - 1) {
        nextBtn.style.display = 'block';
    } else {
        nextBtn.innerHTML = "Xem Kết Quả";
        nextBtn.style.display = 'block';
    }
}

// Xử lý khi nhấn nút "Câu Tiếp Theo"
function handleNextButton() {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
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
    totalQuestionsText.innerText = questions.length;
}

// Gán sự kiện cho các nút
nextBtn.addEventListener('click', handleNextButton);
restartBtn.addEventListener('click', startQuiz);

// Bắt đầu trò chơi khi tải trang
startQuiz();