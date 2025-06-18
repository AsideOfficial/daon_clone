# EmailJS 설정 가이드

## 1. EmailJS 계정 생성 및 설정

### 1.1 EmailJS 계정 생성
1. [EmailJS 웹사이트](https://www.emailjs.com/)에 접속
2. 무료 계정 생성 (월 200건 무료 발송 가능)
3. 이메일 인증 완료

### 1.2 Email Service 설정
1. Dashboard에서 **Email Services** 클릭
2. **Add New Service** 선택
3. **Gmail** 선택
4. Gmail 계정으로 연결 (kmid.contact@gmail.com 계정 사용)
5. Service ID 기록 (예: `service_abc123`)

### 1.3 Email Template 생성
1. **Email Templates** 클릭
2. **Create New Template** 선택
3. 다음 템플릿 설정:

```
Subject: 검체검사 발송시스템 신청서 - {{hospital_name}}

Content:
검체검사 발송시스템 신청서가 접수되었습니다.

=== 병원정보 ===
요양기관번호: {{license_number}}
병원명: {{hospital_name}}
대표자: {{representative}}
전화번호: {{hospital_phone}}

=== 신청자 정보 ===
신청자명: {{applicant_name}}
이메일: {{email}}

=== 이용요금 ===
기본 운영비: 무료
카카오 알림톡 발송료: 건당 8원(VAT 별도)

신청일시: {{submission_date}}

---
한국의료정보데이터 검체검사 발송시스템
```

4. Template ID 기록 (예: `template_xyz789`)

### 1.4 Public Key 확인
1. **Account** → **General** 클릭
2. **Public Key** 복사 (예: `abc123xyz789`)

## 2. 코드 적용

### 2.1 apply.html 수정
다음 코드의 주석을 해제하고 설정값을 입력:

```javascript
// EmailJS 초기화 부분 수정
(function() {
    emailjs.init('YOUR_PUBLIC_KEY'); // 실제 Public Key 입력
})();

// sendApplicationEmail 함수 내 주석 해제
emailjs.send('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', {
    to_email: 'kmid.contact@gmail.com',
    from_name: formData.applicantName,
    hospital_name: formData.hospitalName,
    license_number: formData.licenseNumber,
    representative: formData.representative,
    hospital_phone: formData.hospitalPhone,
    applicant_name: formData.applicantName,
    email: formData.email,
    submission_date: new Date().toLocaleString('ko-KR'),
    message: emailContent
}).then(function(response) {
    console.log('SUCCESS!', response.status, response.text);
    alert('검체검사 발송시스템 신청이 완료되었습니다!\n\n신청해주셔서 감사합니다.\n담당자가 검토 후 연락드리겠습니다.');
    window.location.href = 'index.html';
}, function(error) {
    console.log('FAILED...', error);
    alert('신청서 발송 중 오류가 발생했습니다. 다시 시도해주세요.');
});
```

### 2.2 설정값 변경
- `YOUR_PUBLIC_KEY`: EmailJS Public Key
- `YOUR_SERVICE_ID`: Gmail Service ID
- `YOUR_TEMPLATE_ID`: 생성한 Template ID

## 3. 테스트

### 3.1 Development Mode
현재 Development Mode에서는:
- 콘솔에 이메일 내용이 출력됨
- 실제 이메일은 발송되지 않음
- 1초 후 성공 메시지 표시

### 3.2 Production Mode 활성화
1. 위의 설정값을 모두 입력
2. 주석 처리된 EmailJS 코드 활성화
3. Development Mode 코드 비활성화

## 4. 보안 고려사항

### 4.1 Public Key 보호
- Public Key는 클라이언트 사이드에 노출되므로 절대적으로 안전하지 않음
- 도메인 제한 설정으로 무단 사용 방지

### 4.2 스팸 방지
- EmailJS 계정에서 도메인 화이트리스트 설정
- 사용량 모니터링 및 제한 설정

### 4.3 대안 (권장)
보다 안전한 구현을 위해서는:
1. 백엔드 서버 구축
2. 서버 사이드에서 이메일 발송
3. 클라이언트에서는 AJAX로 서버에 데이터 전송

## 5. 백엔드 서버 예제 (Node.js)

```javascript
// server.js
const express = require('express');
const nodemailer = require('nodemailer');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

const transporter = nodemailer.createTransporter({
    service: 'gmail',
    auth: {
        user: 'kmid.contact@gmail.com',
        pass: 'your-app-password' // Gmail 앱 비밀번호
    }
});

app.post('/send-application', async (req, res) => {
    try {
        const { formData } = req.body;
        
        const mailOptions = {
            from: 'kmid.contact@gmail.com',
            to: 'kmid.contact@gmail.com',
            subject: `검체검사 발송시스템 신청서 - ${formData.hospitalName}`,
            text: `
검체검사 발송시스템 신청서

=== 병원정보 ===
요양기관번호: ${formData.licenseNumber}
병원명: ${formData.hospitalName}
대표자: ${formData.representative}
전화번호: ${formData.hospitalPhone}

=== 신청자 정보 ===
신청자명: ${formData.applicantName}
이메일: ${formData.email}

신청일시: ${new Date().toLocaleString('ko-KR')}
            `
        };

        await transporter.sendMail(mailOptions);
        res.json({ success: true });
    } catch (error) {
        console.error('Email sending failed:', error);
        res.status(500).json({ success: false, error: error.message });
    }
});

app.listen(3000, () => {
    console.log('Server running on port 3000');
});
```

## 6. 현재 상태

현재 코드는 **Development Mode**로 설정되어 있습니다:
- 폼 제출 시 콘솔에 이메일 내용이 출력됨
- 실제 이메일은 발송되지 않음
- 브라우저 개발자 도구(F12)에서 콘솔 탭으로 확인 가능

실제 이메일 발송을 원하시면 위의 설정 과정을 따라 EmailJS를 설정하시거나, 백엔드 서버를 구축하여 사용하시기 바랍니다. 