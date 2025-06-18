'use strict';

exports.handler = (event, context, callback) => {
    const request = event.Records[0].cf.request;
    const uri = request.uri;
    
    // URI가 /로 끝나거나 확장자가 없는 경우 .html을 추가
    if (uri.endsWith('/')) {
        request.uri += 'index.html';
    } else if (!uri.includes('.')) {
        request.uri += '.html';
    }
    
    // 요청을 계속 진행
    callback(null, request);
}; 