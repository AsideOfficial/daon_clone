#!/bin/bash

# AWS Amplify 배포 스크립트

echo "AWS Amplify CLI 설치 확인 중..."
if ! command -v amplify &> /dev/null; then
    echo "AWS Amplify CLI를 설치합니다..."
    npm install -g @aws-amplify/cli
fi

echo "Amplify 프로젝트 초기화 중..."
amplify init --yes

echo "정적 웹사이트 호스팅 추가 중..."
amplify add hosting

echo "배포 중..."
amplify publish

echo "배포 완료! Amplify Console에서 URL을 확인하세요." 