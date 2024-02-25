// src/api/axios.js
import axios from "./axios"; // Axios 기본 설정 임포트

// 내가 찜한 프로젝트 정보 가져오는 함수 
export const fetchLikeProject = async () => {
    try {
      const response = await axios.get("/api/~~~~");
      console.log(response);
      return response.data;
    } catch (error) {
      throw error;
    }
  };

// 내가 작성한 포트폴리오 정보 가져오는 함수
export const fetchPortfolio = async () => {
    try {
      const response = await axios.get("/api/~~~~");
      console.log(response);
      return response.data;
    } catch (error) {
      throw error;
    }
  };

