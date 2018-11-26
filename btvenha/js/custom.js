/*Khai báo biến lưu số đáp án đúng và sai*/
var correctCount = 0;
var incorrectCount = 0;
/*Khai báo biến lưu danh sách các câu hỏi*/
var questionList = [];
/*khai báo chuỗi chứa câu hỏi , ds đáp án và key là đáp án đúng */
var QuestionSet = {
	question: null,
	answer1:  null,
	answer2:  null,
	answer3:  null,
	answer4:  null,
	key: 0,
	indexQS: 0,
}

/*Gán giá trị cho biến*/
var question1 = Object.create(QuestionSet);
question1.question = "Bài hát có đoạn “Một con đò sang ngang. Ôi lòng thầy mênh mang. Cho em biết yêu cánh cò trong câu ca dao…” là của tác giả nào?​";
question1.answer1 = "Trần Tiến​";
question1.answer2 = "Hàn Ngọc Bích​";
question1.answer3 = "Lưu Hà An";
question1.answer4 = "Trần Đức​";
question1.key = 3;
question1.indexQS=1;
questionList.push(question1);

var question2 = Object.create(QuestionSet);
question2.question = "Nền giáo dục Việt Nam là nền giáo dục xã hội chủ nghĩa có tính nhân dân, dân tộc, khoa học, hiện đại, lấy chủ nghĩa Mác – Lênin, tư tưởng Hồ Chí Minh làm nền tảng ghi trong văn bản nào sau đây?";
question2.answer1 = "Điều lệ trường Cao đẳng";
question2.answer2 = "Luật giáo dục";
question2.answer3 = "Nghị quyết của Đảng";
question2.answer4 = "Tất cả các văn bản trên";
question2.key = 4;
question2.indexQS=2;
questionList.push(question2);

var question3 = Object.create(QuestionSet);
question3.question = "Quy chế đào tạo đại học và cao đẳng hệ chính quy theo hệ thống tín chỉ được quy định tại:​";
question3.answer1 = "Luật giáo dục";
question3.answer2 = "Quy chế 43/2007/QĐ-GDĐT​";
question3.answer3 = "Quy chế 25/2006/ QĐ-GDĐT​";
question3.answer4 = "Quyết định số 31/2001/ QĐ-GDĐT​";
question3.key = 1;
question3.indexQS=3;
questionList.push(question3);
console.log(questionList);

var question4 = Object.create(QuestionSet);
question4.question = "Câu nói: “Một dân tộc muốn tồn tại và phát triển phải có Thứ (đông dân), Phú (giàu), Giáo (được giáo dục)” là của ai​";
question4.answer1 = "Lê Quý Đôn (1726 -1784)​";
question4.answer2 = "Khổng Tử (551- 479 trước CN)​";
question4.answer3 = "Mạnh Tử (trước CN 372 –trước CN 289)​";
question4.answer4 = "La Sơn Phu Tử Nguyễn Thiếp (1723 – 1804)​";
question4.key = 3;
question4.indexQS=4;
questionList.push(question4);

var question5 = Object.create(QuestionSet);
question5.question = "“Người thầy trung bình chỉ biết nói, Người thầy giỏi biết giải thích, Người thầy xuất chúng biết minh họa, Người thầy vĩ đại biết cách truyền cảm hứng ’’. Đây là câu nói của ai?​";
question5.answer1 = "V.A.Xukhomlinxki​";
question5.answer2 = "Usinxki​";
question5.answer3 = "William A. Warrd​";
question5.answer4 = "Comenxki​";
question5.key = 2;
question5.indexQS=5;
questionList.push(question5);

var question6 = Object.create(QuestionSet);
question6.question = "Trong dạy học hướng vào người học, thầy giáo và học sinh đóng vai trò như thế nào?​";
question6.answer1 = "Thầy chủ động, trò tích cực​";
question6.answer2 = "Thầy chủ đạo, trò chủ động​";
question6.answer3 = "Thầy chủ động, trò thụ động​";
question6.answer4 = "Thầy dạy, trò ghi nhớ​";
question6.key = 3;
question6.indexQS=6;
questionList.push(question6);

var question7 = Object.create(QuestionSet);
question7.question = "Hiện tượng nào chứng tỏ sinh lý có ảnh hưởng đến tâm lí?​";
question7.answer1 = "Lạnh làm run người.​";
question7.answer2 = "Buồn rầu làm ngưng hệ tiêu hóa.​";
question7.answer3 = "Tuyến nội tiết làm thay đổi tâm trạng.​";
question7.answer4 = "Cả A, B, C.​";
question7.key = 1;
question7.indexQS=7;
questionList.push(question7);

var question8 = Object.create(QuestionSet);
question8.question = "“Chú trọng nội dung giáo dục đạo đức, pháp luật, thể chất, quốc phòng - an ninh và các giá trị văn hóa truyền thống; giáo dục kĩ năng sống, giáo dục lao động và hướng nghiệp học sinh phổ thông” là nội dung của giải pháp nào trong Chiến lược phát triển giáo dục 2011 – 2020?​";
question8.answer1 = "Đổi mới quản lí giáo dục - đào tạo​";
question8.answer2 = "Đổi mới nội dung, phương pháp dạy học";
question8.answer3 = "Tăng cường gắn đào tạo với sử dụng, nghiên cứu khoa học";
question8.answer4 = "Tăng cường hỗ trợ phát triển giáo dục đối với các vùng khó khăn.​";
question8.key = 2;
question8.indexQS=8;
questionList.push(question8);
/*biến lưu giữ thứ tự câu hỏi trong danh sách*/
var curQuestion = 0;
/*hàm lấy ra đáp án đúng trong 4 đáp án*/
$(document).ready(function() {
	function mapKey2Choice(key) {
		var str =null;
		switch (key) {
			case 1: {
				str = questionList[curQuestion].answer1;
				break;
			}
			case 2: {
				str = questionList[curQuestion].answer2;
				break;
			}
			case 3: {
				str = questionList[curQuestion].answer3;
				break;
			}
			case 4: {
				str = questionList[curQuestion].answer4;
				break;
			}
		}
		return (str);
	}
	/*hàm in câu hỏi và đáp án lên page*/
	function showQuestionPage(curQuestion) {
		$('#question').show();
		$('#index-qs').html('<h3>Câu: ' + questionList[curQuestion].indexQS + '</h3>');
		$('#span-header-qs').html('<h3>' + questionList[curQuestion].question + '</h3>');
		$('#answer1-text').html('<h3>' + questionList[curQuestion].answer1 + '</h3>');
		$('#answer2-text').html('<h3>' + questionList[curQuestion].answer2 + '</h3>');
		$('#answer3-text').html('<h3>' + questionList[curQuestion].answer3 + '</h3>');
		$('#answer4-text').html('<h3>' + questionList[curQuestion].answer4 + '</h3>');
		$('#result').html('<h2 class="text-center">'+'</h2>');
	}
	/*hàm trả về đáp án*/
	function showResult(correct) {
		if (correct) {
			$('#result').html('<h2 class="text-center">' + 'Bạn trả lời đúng!' + '</h2>');
		}
		else {
			var str = mapKey2Choice(questionList[curQuestion].key);
			$('#result').html('<h2 class="text-center">Bạn trả lời sai! <br>' + 'Đáp án đúng là: ' + str + '</h2>');
		}
		$('#result').show();
	}
	/*Hàm trả về kết quả cuối cùng*/
	function endGame(){
		$('#question').hide();
		$('#end-game').show();
		$('#correct-stat').html('<h3>Đáp án đúng: ' + correctCount + '</h3>');
		$('#incorrect-stat').html('<h3>Đáp án sai: ' + incorrectCount + '</h3>');
	}
	/*bắt sự kiện khi bấm nút bắt đầu sẽ chuyển về form câu hỏi*/
	$('#btn-start').click(function() {
		$('#home').hide();
		showQuestionPage(curQuestion);
	});
	/*bắt sự kiện khi bấm nút tiếp theo để chuyển sang câu tiếp theo*/
	$('#btn-next').click(function() {
		if ((curQuestion++)< questionList.length-1) {
			showQuestionPage(curQuestion);
		}
		else{
			endGame();
		}
	});
	/*Bắt sự kiện khi bấm vào rồi gọi hàm trả về đáp án cho người dùng*/
	$('.value-qs').click(function() {
		/*Lấy giá trị của key gán cho biến userVal*/
		var userVal = parseInt(($(this)[0].id).charAt(6));
		var correct = false;
		if (userVal === questionList[curQuestion].key) {
			correct = true;
			correctCount++;
		}
		else {
			correct=false;
			incorrectCount++;
		}
		showResult(correct);
		waitSecond();
	});
});