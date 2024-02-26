import { atom } from "recoil";

// 내가 모집중인 프로젝트
export const RecruitState = atom({
    key:"RecruitState",
    /*atom에 어떤 변화가 있으면, atom을 구독하는 컴포넌트가 재렌더링*/
    default: [
        { 
            "id":1,
            "title":"모집1",
            "category" : ["웹개발"],
            "part":"PM1, 프론트엔드2, 백엔드2",
            "profile":"(모집자 프로필)",
            "cnt":"waveit@gmail.com",
            "description":"개발자 매칭 서비스입니다. 프로젝트 분야, 모집 역할 별 필터링 기능을 제공합니다. wave-it에서 동료를 구해보세요!"
        },
        { 
            "id":2,
            "title":"모집2",
            "category" : ["데이터 분석"],
            "part":"데이터 분석1",
            "profile":"(모집자 프로필)",
            "cnt":"waveit@gmail.com",
            "description":"데이터 분석 프로젝트에 참여할 팀원분 구합니다. 성실하게 참여할 분만 지원해주세요!"
        },
        { 
            "id":3,
            "title":"모집3",
            "category" : ["게임개발"],
            "part":"게임 개발자3, 디자이너1",
            "profile":"(모집자 프로필)",
            "cnt":"waveit@gmail.com",
            "description":"배틀그라운드 디자이너 한분과 게임 개발자 3분 모십니다. Unity 사용 가능자."
        },
        { 
            "id":4,
            "title":"모집4",
            "category" : ["게임개발"],
            "part":"PM1, 프론트엔드2, 백엔드2",
            "profile":"(모집자 프로필)",
            "cnt":"waveit@gmail.com",
            "description":"게임개발 프로젝트입니다. 프로젝트 분야, 모집 역할 별 필터링 기능을 제공합니다. wave-it에서 동료를 구해보세요!"
        },
        { 
            "id":5,
            "title":"모집5",
            "category" : ["기타"],
            "part":"AI 개발자",
            "profile":"(모집자 프로필)",
            "cnt":"waveit@gmail.com",
            "description":"머신러닝 프로젝트에 참여할 AI 개발자를 모집합니다. 많은 지원 부탁드려요."
        },
        { 
            "id":6,
            "title":"모집6",
            "category" : ["웹개발", "앱개발"],
            "part":"프론트엔드1, 디자이너1, 백엔드2",
            "profile":"(모집자 프로필)",
            "cnt":"waveit@gmail.com",
            "description":"ABCDEFGHIJKLMNOPQRSTUVWXYZ"
        }
    ],
});

// 내가 지원한 프로젝트
export const ApplicationState = atom({
    key:"ApplicationState",
    default: [
        { 
            "id":10,
            "title":"지원1",
            "category" : ["게임개발"],
            "part":"PM1, 프론트엔드2, 백엔드2",
            "profile":"(모집자 프로필)",
            "cnt":"waveit@gmail.com",
            "description":"게임개발 프로젝트입니다. 프로젝트 분야, 모집 역할 별 필터링 기능을 제공합니다. wave-it에서 동료를 구해보세요!"
        },
        { 
            "id":11,
            "title":"지원2",
            "category" : ["기타"],
            "part":"AI 개발자",
            "profile":"(모집자 프로필)",
            "cnt":"waveit@gmail.com",
            "description":"머신러닝 프로젝트에 참여할 AI 개발자를 모집합니다. 많은 지원 부탁드려요."
        },
        { 
            "id":12,
            "title":"지원3",
            "category" : ["웹개발", "앱개발"],
            "part":"프론트엔드1, 디자이너1, 백엔드2",
            "profile":"(모집자 프로필)",
            "cnt":"waveit@gmail.com",
            "description":"ABCDEFGHIJKLMNOPQRSTUVWXYZ"
        }
    ],
});

// 내가 찜한 프로젝트
export const LikeState = atom({
    key:"LikeState",
    default: [
        { 
            "id":20,
            "title":"찜1",
            "category" : ["웹개발"],
            "part":"PM1, 프론트엔드2, 백엔드2",
            "profile":"(모집자 프로필)",
            "cnt":"waveit@gmail.com",
            "description":"개발자 매칭 서비스입니다. 프로젝트 분야, 모집 역할 별 필터링 기능을 제공합니다. wave-it에서 동료를 구해보세요!"
        },
        { 
            "id":21,
            "title":"찜2",
            "category" : ["데이터 분석"],
            "part":"데이터 분석1",
            "profile":"(모집자 프로필)",
            "cnt":"waveit@gmail.com",
            "description":"데이터 분석 프로젝트에 참여할 팀원분 구합니다. 성실하게 참여할 분만 지원해주세요!"
        },
        { 
            "id":22,
            "title":"찜3",
            "category" : ["게임개발"],
            "part":"게임 개발자3, 디자이너1",
            "profile":"(모집자 프로필)",
            "cnt":"waveit@gmail.com",
            "description":"배틀그라운드 디자이너 한분과 게임 개발자 3분 모십니다. Unity 사용 가능자."
        }
    ],
});

// 내가 작성한 포트폴리오
export const PortfolioState = atom({
    key:"Portfolio",
    default: [
        {
            "portfolioname": "첫번째 포트폴리오",
            "name": "홍길동",
            "universityAndMajor": "서울대학교 컴퓨터공학과",
            "cnt": "gildong@gmail.com",
            "projectExperience": "첫 프로젝트입니다",
            "etc": "없음",
            "Java": "하",
            "Python": "상",
            "C": "상",
            "JS": "중",
        },
        {
            "portfolioname": "두번째 포트폴리오",
            "name": "홍길동",
            "universityAndMajor": "서울대학교 컴퓨터공학과",
            "cnt": "gildong@gmail.com",
            "projectExperience": "두번째 프로젝트입니다",
            "etc": "없음",
            "Java": "하",
            "Python": "하",
            "C": "하",
            "JS": "중",
        },
        {
            "portfolioname": "세번째 포트폴리오",
            "name": "홍길동",
            "universityAndMajor": "서울대학교 컴퓨터공학과",
            "cnt": "gildong@gmail.com",
            "projectExperience": "세번째 프로젝트입니다",
            "etc": "없음",
            "Java": "상",
            "Python": "상",
            "C": "상",
            "JS": "중",
        }
    ]
});

