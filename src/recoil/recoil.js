import { atom } from "recoil";

// 내가 모집중인 프로젝트
export const RecruitState = atom({
    key:"RecruitState",
    default: [
        { 
            "id":1,
            "title":"모집1",
            "field" : ["웹개발"],
            "recruit":"PM1, 프론트엔드2, 백엔드2",
            "profile":"(모집자 프로필)",
            "contact":"waveit@gmail.com",
            "content":"개발자 매칭 서비스입니다. 프로젝트 분야, 모집 역할 별 필터링 기능을 제공합니다. wave-it에서 동료를 구해보세요!"
        },
        { 
            "id":2,
            "title":"모집2",
            "field" : ["데이터 분석"],
            "recruit":"데이터 분석1",
            "profile":"(모집자 프로필)",
            "contact":"waveit@gmail.com",
            "content":"데이터 분석 프로젝트에 참여할 팀원분 구합니다. 성실하게 참여할 분만 지원해주세요!"
        },
        { 
            "id":3,
            "title":"모집3",
            "field" : ["게임개발"],
            "recruit":"게임 개발자3, 디자이너1",
            "profile":"(모집자 프로필)",
            "contact":"waveit@gmail.com",
            "content":"배틀그라운드 디자이너 한분과 게임 개발자 3분 모십니다. Unity 사용 가능자."
        },
        { 
            "id":4,
            "title":"모집4",
            "field" : ["게임개발"],
            "recruit":"PM1, 프론트엔드2, 백엔드2",
            "profile":"(모집자 프로필)",
            "contact":"waveit@gmail.com",
            "content":"게임개발 프로젝트입니다. 프로젝트 분야, 모집 역할 별 필터링 기능을 제공합니다. wave-it에서 동료를 구해보세요!"
        },
        { 
            "id":5,
            "title":"모집5",
            "field" : ["기타"],
            "recruit":"AI 개발자",
            "profile":"(모집자 프로필)",
            "contact":"waveit@gmail.com",
            "content":"머신러닝 프로젝트에 참여할 AI 개발자를 모집합니다. 많은 지원 부탁드려요."
        },
        { 
            "id":6,
            "title":"모집6",
            "field" : ["웹개발", "앱개발"],
            "recruit":"프론트엔드1, 디자이너1, 백엔드2",
            "profile":"(모집자 프로필)",
            "contact":"waveit@gmail.com",
            "content":"ABCDEFGHIJKLMNOPQRSTUVWXYZ"
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
            "field" : ["게임개발"],
            "recruit":"PM1, 프론트엔드2, 백엔드2",
            "profile":"(모집자 프로필)",
            "contact":"waveit@gmail.com",
            "content":"게임개발 프로젝트입니다. 프로젝트 분야, 모집 역할 별 필터링 기능을 제공합니다. wave-it에서 동료를 구해보세요!"
        },
        { 
            "id":11,
            "title":"지원2",
            "field" : ["기타"],
            "recruit":"AI 개발자",
            "profile":"(모집자 프로필)",
            "contact":"waveit@gmail.com",
            "content":"머신러닝 프로젝트에 참여할 AI 개발자를 모집합니다. 많은 지원 부탁드려요."
        },
        { 
            "id":12,
            "title":"지원3",
            "field" : ["웹개발", "앱개발"],
            "recruit":"프론트엔드1, 디자이너1, 백엔드2",
            "profile":"(모집자 프로필)",
            "contact":"waveit@gmail.com",
            "content":"ABCDEFGHIJKLMNOPQRSTUVWXYZ"
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
            "field" : ["웹개발"],
            "recruit":"PM1, 프론트엔드2, 백엔드2",
            "profile":"(모집자 프로필)",
            "contact":"waveit@gmail.com",
            "content":"개발자 매칭 서비스입니다. 프로젝트 분야, 모집 역할 별 필터링 기능을 제공합니다. wave-it에서 동료를 구해보세요!"
        },
        { 
            "id":21,
            "title":"찜2",
            "field" : ["데이터 분석"],
            "recruit":"데이터 분석1",
            "profile":"(모집자 프로필)",
            "contact":"waveit@gmail.com",
            "content":"데이터 분석 프로젝트에 참여할 팀원분 구합니다. 성실하게 참여할 분만 지원해주세요!"
        },
        { 
            "id":22,
            "title":"찜3",
            "field" : ["게임개발"],
            "recruit":"게임 개발자3, 디자이너1",
            "profile":"(모집자 프로필)",
            "contact":"waveit@gmail.com",
            "content":"배틀그라운드 디자이너 한분과 게임 개발자 3분 모십니다. Unity 사용 가능자."
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
            "contact": "gildong@gmail.com",
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
            "contact": "gildong@gmail.com",
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
            "contact": "gildong@gmail.com",
            "projectExperience": "세번째 프로젝트입니다",
            "etc": "없음",
            "Java": "상",
            "Python": "상",
            "C": "상",
            "JS": "중",
        }
    ]
});

// 전체 모집 중인 프로젝트 
export const MatchDataState = atom({
    key: "MatchDataState",
    default :
        [
            { 
                "id":1,
                "title":"wave-it: 개발자 매칭 서비스",
                "field" : ["웹개발"],
                "recruit":"PM1, 프론트엔드2, 백엔드2",
                "profile":"(모집자 프로필)",
                "contact":"waveit@gmail.com",
                "content":"개발자 매칭 서비스입니다. 프로젝트 분야, 모집 역할 별 필터링 기능을 제공합니다. wave-it에서 동료를 구해보세요!"
            },
            { 
                "id":2,
                "title":"Data Analysis",
                "field" : ["데이터 분석"],
                "recruit":"데이터 분석1",
                "profile":"(모집자 프로필)",
                "contact":"waveit@gmail.com",
                "content":"데이터 분석 프로젝트에 참여할 팀원분 구합니다. 성실하게 참여할 분만 지원해주세요!"
            },
            { 
                "id":3,
                "title":"배틀그라운드",
                "field" : ["게임개발"],
                "recruit":"게임 개발자3, 디자이너1",
                "profile":"(모집자 프로필)",
                "contact":"waveit@gmail.com",
                "content":"배틀그라운드 디자이너 한분과 게임 개발자 3분 모십니다. Unity 사용 가능자."
            },
            { 
                "id":4,
                "title":"오버워치",
                "field" : ["게임개발"],
                "recruit":"PM1, 프론트엔드2, 백엔드2",
                "profile":"(모집자 프로필)",
                "contact":"waveit@gmail.com",
                "content":"게임개발 프로젝트입니다. 프로젝트 분야, 모집 역할 별 필터링 기능을 제공합니다. wave-it에서 동료를 구해보세요!"
            },
            { 
                "id":5,
                "title":"머신러닝 프로젝트",
                "field" : ["기타"],
                "recruit":"AI 개발자",
                "profile":"(모집자 프로필)",
                "contact":"waveit@gmail.com",
                "content":"머신러닝 프로젝트에 참여할 AI 개발자를 모집합니다. 많은 지원 부탁드려요."
            },
            { 
                "id":6,
                "title":"ABCDE",
                "field" : ["웹개발", "앱개발"],
                "recruit":"프론트엔드1, 디자이너1, 백엔드2",
                "profile":"(모집자 프로필)",
                "contact":"waveit@gmail.com",
                "content":"ABCDEFGHIJKLMNOPQRSTUVWXYZ"
            }
    ]
})