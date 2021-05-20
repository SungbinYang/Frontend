##  Starbucks Clone Project

### 1. 사용하는 기술 스택
 * HTML
 * CSS
 * Javascript

## 2. 과정
   - 문자가 인코딩되는 방식을 설정합니다.
    
    <meta charset="UTF-8"/>
    
   UTF-8: 초성, 중성, 종성으로 구분하여 문자를 작성(권장)
   EUC-KR: 하나의 완성된 글자를 인식
   
   - 뷰포트(ViewPort) 렌더링 방식 설정
    
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
   
   *  width=device-width: 화면의 가로 너비를 각 디바이스(Device)의 가로 너비와 동일하게 적용
   * initial-scale=1.0: 화면의 초기 화면 배율(확대 정도)을 설정
   * user-scalable=no: 사용자가 디바이스 화면을 확대(yes)/축소(no)할 수 있는지 설정
   * maximum-scale=1: 사용자가 화면을 확대할 수 있는 최댓값
   * minimum-scale=1: 사용자가 화면을 축소할 수 있는 최솟값

   - 스타일 초기화 : https://www.jsdelivr.com/package/npm/reset-css
      * reset.min.css 적용을 하여 브라우저 스타일 초기화
  
