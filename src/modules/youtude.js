import axios from "axios";

// const instance = axios.create({
//   // 기본적으로 우리가 바라볼 서버의 주소
//   baseURL: "https://test.daground.io",

//   // 헤더에 넣을 정보
//   headers: {
//     "content-type": "application/json;charset=UTF-8",
//     "Access-Control-Allow-Origin": "*",
//     "Access-Control-Allow-Methods": "GET",
//     "TEST-AUTH": "wantedpreonboarding",
//   },
// });

// instance.interceptors.request.use(function (config) {
//   config.headers.common["Authorization"] = {
//     "TEST-AUTH": "wantedpreonboarding",
//   };
//   return config;
// });

// const apis = {
//   // 정보조회
//   getInfos: () => instance.get(`/info/contents`),
// };

// export const getInfosFB = async () => {
//   try {
//     const response = await apis.getInfos();
//     const result = response.data;
//     console.log(result);
//   } catch (error) {
//     console.log(error);
//   }
// };

// export async function getContent(){
//     const response = await axios.get("https://test.daground.io/info/contents",
//     headers: {
//              "content-type": "application/json;charset=UTF-8",
//              "Access-Control-Allow-Origin": "*",
//              "Access-Control-Allow-Methods": "GET",
//              "TEST-AUTH": "wantedpreonboarding",
//           },
// )
// }

export const MOCK_DATA = {
  ok: "true",

  sector: [
    {
      id: 1,
      sector_kr: "알쓸B잡",
      sector_en: "Opinion",
      type: "News",
      title: "알쓸B잡",
      url: "https://medium.com/sandbank-kr",
      script_kr: "더 많은 글은 샌드뱅크 미디엄에서 만나보세요.",
      script_en: "You can read more articles on Sandbank Medium.",
      sort: 2,
    },
    {
      id: 2,
      sector_kr: "유튜브",
      sector_en: "Youtube",
      type: "Youtube",
      title: "블록체인 NOW",
      url: "https://www.youtube.com/channel/UC2tM460k4I6vSxktyDDkSsA",
      script_kr: "더 많은 영상은 샌드뱅크 채널에서 만나보세요.",
      script_en: "You can read more articles on Sandbank Medium.",
      sort: 1,
    },
    {
      id: 3,
      sector_kr: "인사이트",
      sector_en: "Insight",
      type: "Report",
      title: "어떻게 투자할까",
      url: "https://medium.com/sandbank-kr",
      script_kr: "더 많은 글은 샌드뱅크 미디엄에서 만나보세요.",
      script_en: "You can read more articles on Sandbank Medium.",
      sort: 3,
    },
  ],
  content: [
    {
      id: 63,
      sector_id: 1,
      title: "디지털 위안화 나오면 비트코인 더 필요해진다",
      body: null,
      image:
        "https://sandbank-image.s3.ap-northeast-2.amazonaws.com/info/bjob_024.png",
      link: "https://medium.com/sandbank-kr/46cd56322be6",
      upload_date: "2022-02-16",
      like_cnt: 0,
      like_top: 1,
    },
    {
      id: 59,
      sector_id: 1,
      title: "왜 주식과 비트코인은 함께 떨어질까",
      body: null,
      image:
        "https://sandbank-image.s3.ap-northeast-2.amazonaws.com/info/bjob_023.png",
      link: "https://medium.com/sandbank-kr/c7b31c05301b",
      upload_date: "2022-01-29",
      like_cnt: 0,
      like_top: 1,
    },
    {
      id: 58,
      sector_id: 1,
      title: "[칼럼] 비트코인 도미넌스 바로알기",
      body: null,
      image:
        "https://sandbank-image.s3.ap-northeast-2.amazonaws.com/info/bjob_022.png",
      link: "https://medium.com/sandbank-kr/946d87433d4",
      upload_date: "2022-01-21",
      like_cnt: 0,
      like_top: 1,
    },
    {
      id: 56,
      sector_id: 1,
      title: "[칼럼] 비트코인은 강하다, 제롬 파월이 가격을 결정하지 않는다",
      body: null,
      image:
        "https://sandbank-image.s3.ap-northeast-2.amazonaws.com/info/bjob_021.png",
      link: "https://medium.com/sandbank-kr/3e35a51d20e8",
      upload_date: "2022-01-20",
      like_cnt: 0,
      like_top: 0,
    },
    {
      id: 55,
      sector_id: 1,
      title: "[칼럼] 코인값 예측하는 ‘차트 분석’, 믿어야 할까 말아야 할까",
      body: null,
      image:
        "https://sandbank-image.s3.ap-northeast-2.amazonaws.com/info/bjob_020.png",
      link: "https://medium.com/sandbank-kr/299260f2fb89",
      upload_date: "2022-01-19",
      like_cnt: 0,
      like_top: 0,
    },
    {
      id: 47,
      sector_id: 1,
      title: "[칼럼] 2022년 코인투자 전략 — 포트폴리오에 브랜드를 담자",
      body: null,
      image:
        "https://sandbank-image.s3.ap-northeast-2.amazonaws.com/info/bjob_019.png",
      link: "https://medium.com/sandbank-kr/cd88702c1241",
      upload_date: "2022-01-04",
      like_cnt: 1,
      like_top: 0,
    },
    {
      id: 46,
      sector_id: 1,
      title: "[칼럼] 크리스마스 가족 모임 전에 꼭 알아두어야 할 상식들",
      body: null,
      image:
        "https://sandbank-image.s3.ap-northeast-2.amazonaws.com/info/bjob_018.png",
      link: "https://medium.com/sandbank-kr/87934fb8ce89",
      upload_date: "2021-12-23",
      like_cnt: 0,
      like_top: 0,
    },
    {
      id: 45,
      sector_id: 1,
      title: "[칼럼] 플랜비의 예상이 틀린 이유",
      body: null,
      image:
        "https://sandbank-image.s3.ap-northeast-2.amazonaws.com/info/bjob_017.png",
      link: "https://medium.com/sandbank-kr/eaccf284e65f",
      upload_date: "2021-12-16",
      like_cnt: 0,
      like_top: 0,
    },
    {
      id: 44,
      sector_id: 1,
      title: "[칼럼] Web 3.0을 대하는 잭 도시와 마크 저커버그의 차이",
      body: null,
      image:
        "https://sandbank-image.s3.ap-northeast-2.amazonaws.com/info/bjob_016.png",
      link: "https://medium.com/sandbank-kr/dc2f95885fa2",
      upload_date: "2021-12-16",
      like_cnt: 0,
      like_top: 0,
    },
    {
      id: 37,
      sector_id: 1,
      title: "[칼럼] 디지털 세상에서 ‘세계 최고층 빌딩의 저주’가 일어날까",
      body: null,
      image:
        "https://sandbank-image.s3.ap-northeast-2.amazonaws.com/info/bjob_015.png",
      link: "https://medium.com/sandbank-kr/e77ceae008c3",
      upload_date: "2021-12-05",
      like_cnt: 0,
      like_top: 0,
    },
    {
      id: 38,
      sector_id: 1,
      title: "[칼럼] 메타버스는 청년실업 문제의 대안이 될 수 있을까",
      body: null,
      image:
        "https://sandbank-image.s3.ap-northeast-2.amazonaws.com/info/bjob_014.png",
      link: "https://medium.com/sandbank-kr/8d8f64051a3d",
      upload_date: "2021-11-25",
      like_cnt: 0,
      like_top: 0,
    },
    {
      id: 39,
      sector_id: 1,
      title: "[오피니언] 비트코인은 세상을 고친다",
      body: null,
      image:
        "https://sandbank-image.s3.ap-northeast-2.amazonaws.com/info/bjob_013.png",
      link: "https://medium.com/sandbank-kr/f3f50e02463f",
      upload_date: "2021-11-17",
      like_cnt: 0,
      like_top: 0,
    },
    {
      id: 32,
      sector_id: 1,
      title: "[오피니언] 야, 너두 ‘비트코인 노드‘ 할 수 있어",
      body: null,
      image:
        "https://sandbank-image.s3.ap-northeast-2.amazonaws.com/info/bjob_012.png",
      link: "https://medium.com/sandbank-kr/b52c6f5521c3",
      upload_date: "2021-11-11",
      like_cnt: 3,
      like_top: 0,
    },
    {
      id: 11,
      sector_id: 1,
      title: "[오피니언] “그래서 뭐 사면 돼?”…이랬다간 코인 ‘강제 장투’한다",
      body: null,
      image:
        "https://sandbank-image.s3.ap-northeast-2.amazonaws.com/info/bjob_011.png",
      link: "https://medium.com/sandbank-kr/3e49712ca20e",
      upload_date: "2021-11-01",
      like_cnt: 1,
      like_top: 0,
    },
    {
      id: 10,
      sector_id: 1,
      title: "[오피니언] 크루그먼의 위험한 상상, 1000조 코인",
      body: null,
      image:
        "https://sandbank-image.s3.ap-northeast-2.amazonaws.com/info/bjob_010.png",
      link: "https://medium.com/sandbank-kr/49b3ed9b0168",
      upload_date: "2021-10-21",
      like_cnt: 2,
      like_top: 0,
    },
    {
      id: 9,
      sector_id: 1,
      title: "[오피니언] 중국이 금지하면 더 오른다…비트코인 규제의 역설",
      body: null,
      image:
        "https://sandbank-image.s3.ap-northeast-2.amazonaws.com/info/bjob_009.png",
      link: "https://medium.com/sandbank-kr/9ac1c45d6d74",
      upload_date: "2021-10-20",
      like_cnt: 0,
      like_top: 0,
    },
    {
      id: 8,
      sector_id: 1,
      title: "[오피니언] 비트코인 대신…‘비트코인 채굴기업’ 주식을 샀더라면",
      body: null,
      image:
        "https://sandbank-image.s3.ap-northeast-2.amazonaws.com/info/bjob_008.png",
      link: "https://medium.com/sandbank-kr/9eae61e7233f",
      upload_date: "2021-10-20",
      like_cnt: 0,
      like_top: 0,
    },
    {
      id: 7,
      sector_id: 1,
      title: "[오피니언]“비트코인 그거 너무 비싸잖아”",
      body: null,
      image:
        "https://sandbank-image.s3.ap-northeast-2.amazonaws.com/info/bjob_007.png",
      link: "https://medium.com/sandbank-kr/399df66c4784",
      upload_date: "2021-10-20",
      like_cnt: 1,
      like_top: 0,
    },
    {
      id: 6,
      sector_id: 1,
      title: "[오피니언] 부자들이 대부분 다주택자인 이유",
      body: null,
      image:
        "https://sandbank-image.s3.ap-northeast-2.amazonaws.com/info/bjob_006.png",
      link: "https://medium.com/sandbank-kr/4aa4dad6ca84",
      upload_date: "2021-09-24",
      like_cnt: 1,
      like_top: 0,
    },
    {
      id: 5,
      sector_id: 1,
      title: "[오피니언] ‘주식회사 비트코인’이 제공하는 서비스는?",
      body: null,
      image:
        "https://sandbank-image.s3.ap-northeast-2.amazonaws.com/info/bjob_005.png",
      link: "https://medium.com/sandbank-kr/dd517ff98344",
      upload_date: "2021-09-24",
      like_cnt: 0,
      like_top: 0,
    },
    {
      id: 4,
      sector_id: 1,
      title: "[오피니언] 비트코인이 신용카드를 대체한다면?",
      body: null,
      image:
        "https://sandbank-image.s3.ap-northeast-2.amazonaws.com/info/bjob_004.png",
      link: "https://medium.com/sandbank-kr/21413de6ef86",
      upload_date: "2021-09-24",
      like_cnt: 0,
      like_top: 0,
    },
    {
      id: 3,
      sector_id: 1,
      title: "[오피니언] 재정확장이 촉발한 인플레이션",
      body: null,
      image:
        "https://sandbank-image.s3.ap-northeast-2.amazonaws.com/info/bjob_003.png",
      link: "https://medium.com/sandbank-kr/df716fb865a2",
      upload_date: "2021-08-03",
      like_cnt: 1,
      like_top: 0,
    },
    {
      id: 2,
      sector_id: 1,
      title: "[오피니언] 비트코인의 전력 사용, 이대로 괜찮을까?",
      body: null,
      image:
        "https://sandbank-image.s3.ap-northeast-2.amazonaws.com/info/bjob_002.png",
      link: "https://medium.com/sandbank-kr/b3fb3e4e50a6",
      upload_date: "2021-06-24",
      like_cnt: 1,
      like_top: 0,
    },
    {
      id: 1,
      sector_id: 1,
      title: "[오피니언] 씨티은행 보고서 ‘변곡점에 서 있는 비트코인’ 을 읽고",
      body: null,
      image:
        "https://sandbank-image.s3.ap-northeast-2.amazonaws.com/info/bjob_001.png",
      link: "https://medium.com/sandbank-kr/86fd063d4397",
      upload_date: "2021-04-08",
      like_cnt: 2,
      like_top: 0,
    },
    {
      id: 62,
      sector_id: 2,
      title:
        "부동산 시장에도 번진 크립토 금융! 이제 비트코인으로 모기지론 받는다?",
      body: "최근 암호화폐 가격이 전반적으로 모두 하락하자 비트코인, 이더리움 등 메이저 코인을 장기로 보유하려는 사람들은 오히려 더욱 늘고있습니다. \n\n캐나다 스타트업인 Ledn(레든)은 이런 투자자들을 위해 '비트코인 담보 모기지론' 상품을 내놓는다고 하는데요. 과연 크립토를 부동산 대출에 어떻게 이용하는 것일까요? 함께 알아봅니다.",
      image:
        "https://sandbank-image.s3.ap-northeast-2.amazonaws.com/info/block_033.png",
      link: "FyUSkHccOq4",
      upload_date: "2022-01-29",
      like_cnt: 0,
      like_top: 1,
    },
    {
      id: 61,
      sector_id: 2,
      title: "비트코인 도미넌스 하락에 숨어있는 통계의 오류?",
      body: "전체 암호화폐 시가총액에서 비트코인의 비중을 계산하는 지표인 ‘비트코인 도미넌스’. 지금 암호화폐 시장의 관심이 어디로 향해있는지 알려주는 지표로 자주 사용됩니다. \n\n헌데 이 지표를 사용할때 반드시 유의해야할 점이 있다는데? 과연 무엇을 주의해야하는지 알아봅니다.",
      image:
        "https://sandbank-image.s3.ap-northeast-2.amazonaws.com/info/block_032.png",
      link: "i2spBpHUpJU",
      upload_date: "2022-01-29",
      like_cnt: 0,
      like_top: 1,
    },
    {
      id: 60,
      sector_id: 2,
      title: "금리인상이 지배하는 연초 코인시장. 연말이 기대되는 이유는?",
      body: "비트코인 가격이 작년 11월 고점 대비 50% 넘게 내려왔지만, 아직 하락장은 아니다!\n\n금리인상 때문에 변동성은 커지겠지만, 결국 수조원 단위의 큰 돈을 굴리는 기관들의 관심이 비트코인으로 넘어올 수밖에 없는 이유를 알아봅니다.",
      image:
        "https://sandbank-image.s3.ap-northeast-2.amazonaws.com/info/block_031.png",
      link: "39cP4T71gxg",
      upload_date: "2022-01-29",
      like_cnt: 0,
      like_top: 1,
    },
    {
      id: 57,
      sector_id: 2,
      title: "웹 3.0은 사기일까, 미래의 인터넷일까?",
      body: "웹 3.0은 무엇일까요? 읽기만 가능했던 1세대, 읽기와 쓰기가 모두 가능했던 2세대를 지나 이제 인터넷이 3세대로 진입하는 중이라는데? 블록체인과 암호화폐 산업의 발전과 맞물려 급부상 중인 웹 3.0의 현 주소와 미래를 확인해보세요!",
      image:
        "https://sandbank-image.s3.ap-northeast-2.amazonaws.com/info/block_30.png",
      link: "tnJwx53uLEU",
      upload_date: "2022-01-20",
      like_cnt: 0,
      like_top: 0,
    },
    {
      id: 54,
      sector_id: 2,
      title: "연준은 기준금리를 인상할 수 있을까?",
      body: "연준 의장 연임에 성공하자마자 연일 강도높은 매파적 발언을 쏟아낸 제롬 파월. 그는 정말 '인플레이션 파이터'로 변신한걸까요? \n2022년 예상되는 그의 행보와 암호화폐 시장에 미칠 영향을 짚어봅니다.",
      image:
        "https://sandbank-image.s3.ap-northeast-2.amazonaws.com/info/block_29.png",
      link: "MW0Stj4GKH8",
      upload_date: "2021-12-28",
      like_cnt: 0,
      like_top: 0,
    },
    {
      id: 53,
      sector_id: 2,
      title: "본격 규제 시작되면 살아남을 암호화폐는?",
      body: "엘리자베스 워렌 상원의원, 힐러리 클린턴 전 국무 장관 등 많은 정치인들이 연일 암호화폐 규제에 대한 목소리를 높이고 있는 요즘. 앞으로 암호화폐 산업 규제는 어떤 방향으로 진행되며, 과연 어떤 코인이 규제의 풍파속에서 살아 남을까요? 함께 알아보시죠!",
      image:
        "https://sandbank-image.s3.ap-northeast-2.amazonaws.com/info/block_28.png",
      link: "TIu5NKb7oEc",
      upload_date: "2021-12-28",
      like_cnt: 0,
      like_top: 0,
    },
    {
      id: 52,
      sector_id: 2,
      title: "엘살바도르, 현실판 와칸다가 될것인가!",
      body: "국채를 발행해서 반은 비트코인을 매수하는데 쓰고, 나머지 절반은 비트코인 도시에 필요한 인프라 건설에 쓰겠다고 밝힌 엘살바도르 대통령. 그는 정말 중남미 한복판에 마블 영화에 나오는 가상의 국가 '와칸다'를 건설할 수 있을까요? 엘살바도르의 계획을 자세히 짚어봅니다.",
      image:
        "https://sandbank-image.s3.ap-northeast-2.amazonaws.com/info/block_27.png",
      link: "ropHh8muQeE",
      upload_date: "2021-12-28",
      like_cnt: 0,
      like_top: 0,
    },
    {
      id: 51,
      sector_id: 2,
      title: "SEC의 소송은 앞으로도 계속된다 쭈~~욱!",
      body: "법이 없으니 소송이라도 해서 막겠다!\n크립토 세상을 '서부개척 시대'와 비슷하다고 한 개리 겐슬러 위원장.\n리플, 루나에 이어 앞으로도 소송은 계속될까요?",
      image:
        "https://sandbank-image.s3.ap-northeast-2.amazonaws.com/info/block_26.png",
      link: "3IYrMTKnxTQ",
      upload_date: "2021-12-17",
      like_cnt: 0,
      like_top: 0,
    },
    {
      id: 50,
      sector_id: 2,
      title: "wXRP로 재포장된 리플! 재상장 될까?",
      body: "리플이 랩드토큰 형태로 화려한 컴백 무대를 가질 수 있을 것인가!",
      image:
        "https://sandbank-image.s3.ap-northeast-2.amazonaws.com/info/block_25.png",
      link: "sJZeQmtzRaM",
      upload_date: "2021-12-17",
      like_cnt: 0,
      like_top: 0,
    },
    {
      id: 49,
      sector_id: 2,
      title: "이더리움의 랩드(wrapped)토큰은 무엇인가?",
      body: "조만간 리플이 이더리움 디파이에서 거래될 수 있다는데요.\n이더리움의 랩핑 토큰은 무엇이고, 장점과 단점은 무엇일까요?\nwXRP 토큰이 나오면 리플에는 어떤것이 좋을까요? 함께 알아봅시다.",
      image:
        "https://sandbank-image.s3.ap-northeast-2.amazonaws.com/info/block_24.png",
      link: "kroJKlLldo4",
      upload_date: "2021-12-17",
      like_cnt: 0,
      like_top: 0,
    },
    {
      id: 48,
      sector_id: 2,
      title: "SEC 소송에도 불구하고 인기높은 리플! 비결은?",
      body: "리또속~ 리또속 해도 역시 리플이다!\nSEC한테 소송당하고 코인베이스에서 상폐 당해도 굳건히 살아있는 풍운아 리플!\n어떤 매력이 있길래 아직도 시총 10위권을 유지 중일까요?",
      image:
        "https://sandbank-image.s3.ap-northeast-2.amazonaws.com/info/block_23.png",
      link: "0nO0Hw0Jf_g",
      upload_date: "2021-12-17",
      like_cnt: 0,
      like_top: 0,
    },
    {
      id: 43,
      sector_id: 2,
      title: "세계 최대규모 게임 ETF 보유종목이 국내 게임사?",
      body: "국내보다 해외에서 더 많은 유저를 끌어들이며 그 능력을 인정받은 국내 게임사들. 이제 블록체인과 코인까지 접목하여 아예 메타버스 세상을 만들려고 한다는데? 과연 세계 최대규모의 게임 ETF는 왜 국내 게임사들을 주요 종목으로 보유하고 있을까요? 국내 게임사들의 특별한 경쟁력에 대해 알아봅니다.",
      image:
        "https://sandbank-image.s3.ap-northeast-2.amazonaws.com/info/block-22.png",
      link: "Z4zu77sMThk",
      upload_date: "2021-11-29",
      like_cnt: 0,
      like_top: 0,
    },
    {
      id: 42,
      sector_id: 2,
      title: "게임산업, 플레이투언으로 청년실업 문제 해결한다?",
      body: "OECD 국가중 청년실업률이 다섯번째로 높은 우리나라. 갈곳없는 청년들에게 게임이 새로운 돈벌이 수단으로 각광받고 있다는데? 블록체인이 접목되며 완전히 색다른 가능성을 보여주고 있는 게임 산업에 대해 살펴봅니다.",
      image:
        "https://sandbank-image.s3.ap-northeast-2.amazonaws.com/info/block-21.png",
      link: "xqhWWFVAFpQ",
      upload_date: "2021-11-29",
      like_cnt: 1,
      like_top: 0,
    },
    {
      id: 41,
      sector_id: 2,
      title: "K-POP, 글로벌을 넘어 우주로 진출하나?",
      body: "포르투갈 리스본에서 열린 솔라나 컨퍼런스에 깜짝 등장하여 메타버스 진출을 선언한 SM 이수만 회장! 우리는 앞으로 어떤 세상을 기대해볼 수 있을까요? 소속 가수들을 활용한 막강한 IP와 컨텐츠로 무장한 국내 엔터사들. 블록체인과 함께 광야로 걸어가는 이들을 재조명해봅니다.",
      image:
        "https://sandbank-image.s3.ap-northeast-2.amazonaws.com/info/block-20.png",
      link: "zma4M8FCL64",
      upload_date: "2021-11-29",
      like_cnt: 0,
      like_top: 0,
    },
    {
      id: 40,
      sector_id: 2,
      title: "NFT 투자할때 조심해야할 점!",
      body: '코인 투자자들 사이에 선풍적인 인기를 끌고있는 NFT!\n\n얼마전엔 국내 최대 거래소 업비트까지 NFT 마켓을 열며 뜨거운 인기를 이어가고 있습니다. 미술품, 게임 캐릭터, 연예인 사진까지.다양한 형태로 발행되고있는 NFT. 종류가 다양한 만큼 리스크도 있을것 같은데... 투자자들이 유의해야할 점은 없을까요? \n\n지금 "나도 NFT 하나 사볼까?"를 고민하고 있다면 꼭 끝까지 시청해보세요!',
      image:
        "https://sandbank-image.s3.ap-northeast-2.amazonaws.com/info/block-19.png",
      link: "stryVmgMybE",
      upload_date: "2021-11-29",
      like_cnt: 0,
      like_top: 0,
    },
    {
      id: 35,
      sector_id: 2,
      title: "요소수 가격도 10배씩 오르는 인플레이션 시대. 해법은 비트코인!",
      body: "인플레이션은 잠시 머물다 갈 것이라는 제롬 파월 미 연준의장의 말과는 달리, 요즘 분위기가 심상치 않습니다. 리터당 1000 원하던 요소수 가격이 일부 중고사이트에서 리터당 1만 원에 팔리고, 휘발유 값도 리터당 2,000원까지 올랐습니다. \n모든 것의 가격이 오르는 인플레이션 시대. 우리는 지금 그 한 가운데와 있는 걸까요? 우리는 인플레이션 환경에 어떻게 대처해야 하는지 그 해법을 짚어봅니다.",
      image:
        "https://sandbank-image.s3.ap-northeast-2.amazonaws.com/info/block-18.png",
      link: "KgfYqQLdMx4",
      upload_date: "2021-11-10",
      like_cnt: 2,
      like_top: 0,
    },
    {
      id: 34,
      sector_id: 2,
      title: "인플레이션 논쟁에 트위터 사장님도 숟가락을 내민 이유는?",
      body: "미국에 하이퍼인플레이션이 온다?\n하이퍼인플레이션은 매월 50%씩 물가가 상승하는 초유의 사태를 말하는데요,\n경제학자도 아니고 금융 전문가도 아닌 트위터 사장님 잭 도시가 하이퍼인플레이션을 예상했습니다. 그는 왜 이런 예언을 한 걸까요? \n현재 미국의 경제 상황과 더불어 그가 한 발언의 취지를 자세히 짚어봅니다.",
      image:
        "https://sandbank-image.s3.ap-northeast-2.amazonaws.com/info/block-17.png",
      link: "-ir50k1BM_Q",
      upload_date: "2021-11-10",
      like_cnt: 1,
      like_top: 0,
    },
    {
      id: 33,
      sector_id: 2,
      title: "행배야! 비트코인 마스터카드로 빵사먹기 억수로 좋은 날씨다!",
      body: "마스터카드가 비트코인 선물 거래소 백트(Bakkt)와 협업하여 비트코인만 있어도 결제되는 신용/체크카드를 출시한다고 발표했습니다.\n\n카드 실적에 따른 캐시백이나 포인트도 비트코인으로 받을 수 있다고 하네요. 갈수록 높아지는 비트코인의 위상! 비트코인 마스터카드가 나오면 어떤 것을 기대해볼 수 있는지 알아볼까요?",
      image:
        "https://sandbank-image.s3.ap-northeast-2.amazonaws.com/info/block-16.png",
      link: "iM06gthzezk",
      upload_date: "2021-11-10",
      like_cnt: 1,
      like_top: 0,
    },
    {
      id: 26,
      sector_id: 2,
      title: "못먹어도 고! 페이스북(메타)가 노비월렛에 사활을 거는 이유!",
      body: "메타로 사명을 변경하며 메타버스 플랫폼으로의 피봇을 천명한 저커버그 CEO. 그런 와중에 자체 암호화폐 지갑인 노비월렛이 드디어 시범 런칭을 마쳤는데요, 갖은 욕을 먹어가면서도 암호화폐 사업을 포기하지 않는 저커버그의 속내는 뭘까요?",
      image:
        "https://sandbank-image.s3.ap-northeast-2.amazonaws.com/info/block-15.png",
      link: "fNEdetWtoJg",
      upload_date: "2021-11-01",
      like_cnt: 0,
      like_top: 0,
    },
    {
      id: 25,
      sector_id: 2,
      title: "비트코인 채굴을 누구나 할 수 있도록 쉽게 만들겠다는 잭 형에게",
      body: "트위터 CEO 잭 도시. 비트코인의 열렬한 지지자로도 유명한데요. 대규모 시설투자가 필요한 산업이 되어버린 비트코인 채굴을 개인이 누구나 콘센트에 충전기를 꽂듯 할 수 있을 정도로 쉬워지게 만들겠다는 포부를 밝혔어요. 과연 잭 도시의 계획이 기술적으로, 그리고 도덕적으로 가능할까요?",
      image:
        "https://sandbank-image.s3.ap-northeast-2.amazonaws.com/info/block-13.png",
      link: "hVwug6gC_Bg&t",
      upload_date: "2021-11-01",
      like_cnt: 1,
      like_top: 0,
    },
    {
      id: 24,
      sector_id: 2,
      title: "브라질도 비트코인 법정화폐 도입 준비중!",
      body: "과연 엘살바도르에 이어 두 번째 비트코인 법정화폐 도입 국가가 탄생할 것인가!\n\n인구 2억 명, 명목 GDP 규모 세계 12위의 브라질이 비트코인 법정화폐 도입을 준비 중이라는 소식이에요. 지금 의회에 상정되어있는 법안이 통과되면 공식화된다고 해요! 브라질은 왜 비트코인을 화폐로 받아들이려 하는 걸까요?",
      image:
        "https://sandbank-image.s3.ap-northeast-2.amazonaws.com/info/block-14.png",
      link: "PDNrA90Wcdw&t",
      upload_date: "2021-10-28",
      like_cnt: 0,
      like_top: 0,
    },
    {
      id: 23,
      sector_id: 2,
      title:
        "투자자라면 인플레이션 절대치와 상대치의 차이를 반드시 알아야 합니다!",
      body: '제롬 파월 미국 연준 의장이 밥 먹듯이 말하는 "Inflation is transitory (인플레이션은 한시적이다)". 이 말의 진짜 의미는 무엇일까요? 자세히 들여다보면 전혀 다른 두 가지 의미가 함께 내포되어있어 듣는 사람을 헷갈리게 하는 말입니다. 두 의미의 차이가 무엇인지 지금 확인해보세요.',
      image:
        "https://sandbank-image.s3.ap-northeast-2.amazonaws.com/info/block-12.png",
      link: "Po0U2dgEsKM&t",
      upload_date: "2021-10-27",
      like_cnt: 0,
      like_top: 0,
    },
    {
      id: 22,
      sector_id: 2,
      title: "미국발 경제충격이 비트코인 가격에 미칠 영향은?",
      body: "미국 부채한도 설정 기한이 12월 초에 또 돌아옵니다. 잊을 만 하면 찾아오는 불청객 때문에 투자하기 겁이 나는데...\n\n과연 이번에도 미국 정부는 초유의 디폴트 사태를 피할 수 있을까요? 샌드뱅크 백훈종 이사가 미국이 처한 경제 위기와 비트코인 가격에 미칠 영향을 알기 쉽게 풀어 설명해드립니다. 코인 투자자라면 꼭 시청하세요!",
      image:
        "https://sandbank-image.s3.ap-northeast-2.amazonaws.com/info/block-11.png",
      link: "yHgjzTnsMIY&t",
      upload_date: "2021-10-20",
      like_cnt: 1,
      like_top: 0,
    },
    {
      id: 21,
      sector_id: 2,
      title: "엄청난 성장전망! 비트코인 채굴기업에 주목해보자",
      body: "비트코인 채굴산업의 주 무대가 중국에서 미국으로 빠르게 넘어오고 있어요. 나스닥에 상장된 북미기반 채굴기업 중 특히 높은 성장세를 보이는 종목! 마라톤 디지털과 HUT 8의 성장세를 전망해 봤습니다.",
      image:
        "https://sandbank-image.s3.ap-northeast-2.amazonaws.com/info/block-10.png",
      link: "EkVYHJirDz8",
      upload_date: "2021-10-15",
      like_cnt: 2,
      like_top: 0,
    },
    {
      id: 20,
      sector_id: 2,
      title: "중국은 왜 자꾸 비트코인을 금지할까?",
      body: "중국이 올해에만 벌써 두 번째 비트코인 금지조치를 발표했어요. 지난 3월에는 비트코인 채굴 영업을 금지하더니, 이번에는 아예 암호화폐 거래 자체를 금지해버렸네요...2013년부터 벌써 4번째 이어지고 있는 암호화폐 금지조치! 중국은 대체 왜 그러는 걸까요?",
      image:
        "https://sandbank-image.s3.ap-northeast-2.amazonaws.com/info/block-9.png",
      link: "W4tFlrB19Eo&t",
      upload_date: "2021-10-15",
      like_cnt: 1,
      like_top: 0,
    },
    {
      id: 19,
      sector_id: 2,
      title:
        "제 2의 리먼브라더스 사태로 번질까? 중국 헝다그룹 파산위기가 코인시장에 미치는 영향은?",
      body: "중국 최대의 부동산 개발회사인 헝다그룹의 파산이 코인 시장의 주요 악재로 떠올랐어요. 만약 수백조 원대의 부채를  가진 이 회사가 이자를 상환하지 못해 파산하면, 여기에 연관된 수많은 하청업체, 은행, 그리고 채권자들도 줄도산을 면치 못한다는 것이에요.\n\n중국에서 학창 시절을 보낸 덕분에 중국 내 사정에 밝은 샌드뱅크의 백훈종 이사가 이번에도 생방송 '블록체인 나우' 에서 해당 이슈를 점검해 봤어요!",
      image:
        "https://sandbank-image.s3.ap-northeast-2.amazonaws.com/info/block-8.png",
      link: "NrtZFAFqHHg&t",
      upload_date: "2021-10-01",
      like_cnt: 1,
      like_top: 0,
    },
    {
      id: 18,
      sector_id: 2,
      title:
        "비트코인 송금을 번개처럼 빠르게! 미국에서 핫한 라이트닝 네트워크 전망은?",
      body: "세계 최초로 비트코인을 법정화폐로 도입한 엘살바도르에서는 이미 피자헛, 맥도날드, 스타벅스 등 대형 프랜차이즈들이 비트코인으로 결제를 받고 있다고 해요. \n그런데 비트코인은 1초에 몇 건의 거래가 이뤄지는지 나타내는 TPS가 고작 7건으로 실생활 결제에 사용하기엔 너무 느린 것으로 알려져 있는데...?\n비트코인 결제 속도를 번개처럼 빠르게 만들어주는 라이트닝 네트워크! 지금 영상에서 확인해보세요 😄",
      image:
        "https://sandbank-image.s3.ap-northeast-2.amazonaws.com/info/block-7.png",
      link: "uF9_ODiJwbo",
      upload_date: "2021-09-24",
      like_cnt: 0,
      like_top: 0,
    },
    {
      id: 17,
      sector_id: 2,
      title: "스타벅스 맥도날드 피자헛이 비트코인 받는나라! 엘살바도르",
      body: "9/8(수) 한국시간으로 오전 6시, 중남미의 작은 나라 엘살바도르는 공식적으로 비트코인을 법정화폐로 사용하기 시작했습니다. 나이브 부켈레 대통령은 이날 공식 비트코인 결제 앱인 '치보'를 다운받고 지갑을 생성하는 국민들에게 $30 상당의 비트코인을 '에어드랍' 하겠다고 공언하기도 했죠.\n이를 기념하기 위해 비트코인 커뮤니티에선 법안이 발효되는 오전 6시(한국시간), 다 함께 $30 어치의 비트코인을 매수하는 이벤트를 진행하기도 했습니다. 드디어 비트코인이 한 국가에서 공식적으로 쓰는 '돈'이 된 역사적인 순간! 엘살바도르 현지 분위기는 어땠고, 또 다른 나라들의 반응은 어땠을까요?",
      image:
        "https://sandbank-image.s3.ap-northeast-2.amazonaws.com/info/block-6.png",
      link: "qyrAvH0vGcM",
      upload_date: "2021-09-14",
      like_cnt: 0,
      like_top: 0,
    },
    {
      id: 16,
      sector_id: 2,
      title: "피델리티 2026년 비트코인 가격 100만 달러 예상! 근거는?",
      body: "코인 투자자들에겐 익숙한 플랜B의 Stock-to-flow 모델은 2035년 비트코인 가격이 1억 달러까지 올라간다고 예측합니다. 그러나 일각에선 이 가격이 터무니없이 높다며 비난하기도 하는데요, 미국 최대의 자산운용사 피델리티의 매크로 분석가인 Jurrien Timmer가 나섰습니다.\n그는 기존 Stock-to-flow 모델을 자신만의 방법으로 개선하여 비트코인 가격이 2026년에 100만 달러까지 오를 것이라고 주장합니다. 원래 모델보다 다소 보수적이긴 하지만 왠지 그래서 더 믿음이 가기도 하는 숫자! 과연 그는 어떤 계산을 통해 100만 불을 예측했을까요?",
      image:
        "https://sandbank-image.s3.ap-northeast-2.amazonaws.com/info/block-5.png",
      link: "qGQGjxGai9A",
      upload_date: "2021-09-09",
      like_cnt: 0,
      like_top: 0,
    },
    {
      id: 15,
      sector_id: 2,
      title: "속도내는 한국은행 CBDC 출시! 전문가가 생각하는 전망은?",
      body: "한국은행의 디지털 화폐, CBDC 연구가 속도를 내고 있습니다. 카카오의 자회사 그라운드 X를 연구용역 파트너로 선정하며 연내 시범 테스트를 완료할 계획을 내비쳤는데요.\n샌드뱅크 백훈종 이사가 생각하는 한은 CBDC가 출시된 미래!\n우리의 일상생활은 과연 어떤 모습일까요? 어떤 장단점이 있을지 지금부터 확인해보세요!",
      image:
        "https://sandbank-image.s3.ap-northeast-2.amazonaws.com/info/block-4.png",
      link: "WN0YUzRH89s",
      upload_date: "2021-09-01",
      like_cnt: 0,
      like_top: 0,
    },
    {
      id: 14,
      sector_id: 2,
      title:
        "김프는 우스운 나이지리아 프리미엄! 비트코인의 폭발적인 인기 원인은?",
      body: "아프리카 1위, 전 세계 28위 GDP 규모를 자랑하는 나이지리아. 최근 이곳에선 비트코인 가격이 50% 넘는 프리미엄에 거래된다는데?! 우리나라는 김프도 꺼진 마당에... 나이지리아에 무슨 일이라도 벌어진 걸까요?\n비트코인의 인기가 들불처럼 번져나가는 나이지리아 이야기. 재미있게 시청해주세요!",
      image:
        "https://sandbank-image.s3.ap-northeast-2.amazonaws.com/info/block-3.png",
      link: "A7c1-3d9XDA ",
      upload_date: "2021-09-01",
      like_cnt: 1,
      like_top: 0,
    },
    {
      id: 13,
      sector_id: 2,
      title: "은행들이 앞다투어 가상자산 커스터디 사업에 나서는 이유는?",
      body: "지난 7월, 우리은행은 블록체인 기업 코인플러그와 합작사를 세우고 디지털 자산 커스터디(수탁) 사업에 뛰어들겠다고 밝혔습니다. 이로써 하나은행을 제외한 KB국민, 신한, NH농협, 우리은행 등 4대 주요 은행 모두가 가상자산 커스터디 사업에 진출한 것입니다.\n은행들이 이토록 앞다투어 가상자산 커스터디 사업에 진출하는 이유는 뭘까요? 가상자산 커스터디가 무엇인지, 그리고 어떤 파급력이 있는지 알면 답을 알 수 있습니다. 오늘은 은행들의 커스터디 사업 진출의 속내를 알아봅니다!",
      image:
        "https://sandbank-image.s3.ap-northeast-2.amazonaws.com/info/block-2.png",
      link: "eaMVMvHmVSE&t",
      upload_date: "2021-08-17",
      like_cnt: 3,
      like_top: 0,
    },
    {
      id: 12,
      sector_id: 2,
      title:
        "나의 비트코인, 이더리움이 불어난다. 샌드뱅크의 창립 이념은? 다른 금융 서비스와 다른점은?",
      body: "샌드뱅크의 서비스가 기존 금융 서비스와 다른 점은 무엇일까요? 시중의 다른 가상자산 투자 서비스들에 비해 샌드뱅크만의 강점은 또 뭘까요?\n가상자산에 장기적으로 투자하는 고객들이 믿고 사용하는 서비스를 만들고, 국내에 성숙한 가상자산 투자 문화를 조성하려는 샌드뱅크의 노력에 대해 이야기합니다.",
      image:
        "https://sandbank-image.s3.ap-northeast-2.amazonaws.com/info/block-1.png",
      link: "A09Ghs9z5rg&t",
      upload_date: "2021-08-10",
      like_cnt: 5,
      like_top: 0,
    },
    {
      id: 36,
      sector_id: 3,
      title:
        "[Research Report] #3 암호화폐 공포 탐욕 지수로 트레이딩하면 위험한 이유",
      body: "암호화폐 시장의 침체, 활황 분위기를 한눈에 알 수 있는 ‘암호화폐 공포 탐욕 지수’가 존재합니다.\n\n공포 탐욕 지수를 이용해서 시장의 저점, 고점을 파악하는 것은 위험한데, 이는 1. 공포 탐욕 지수가 암호화폐의 가격 변동과 강한 상관관계를 지니기에 최근 가격 흐름을 보는 것과 별 차이가 없고 (미래 예측력 매우 약함), 2. 시장이 탐욕 상태여도 예전, 혹은 미래의 공포 상태의 암호화폐 가격보다 낮을 수 있기 때문입니다.\n\n공포 탐욕 지수는 최근 암호화폐 시장의 가격 흐름을 파악하데만 유용합니다.",
      image:
        "https://sandbank-image.s3.ap-northeast-2.amazonaws.com/info/sb-inisht-106.png",
      link: "https://sandbankofficial.notion.site/Research-Report-3-0fc6994a31c244d1a16eceb2d27ab5f3",
      upload_date: "2021-11-14",
      like_cnt: 1,
      like_top: 1,
    },
    {
      id: 31,
      sector_id: 3,
      title: "[투자 길잡이] #3 코인 증거금 선물의 손익 계산 쉽게 이해하기",
      body: "사용하는 증거금 종류에 따라 선물에는 ‘USD 스테이블 코인 증거금 선물‘과 ‘코인 증거금 선물’이 존재합니다.\n\n선물은 증거금으로 받는 통화와 가격을 표시하는 통화가 동일해야 하는데, 코인 증거금 선물은 코인(암호화폐)를 증거금으로 사용하지만 USD로 가격을 표시한다. 이는 USD로 가격을 표시하는 것에 사람들이 더 익숙하기 때문입니다.\n\n위의 이유로 코인 증거금 선물의 손익을 계산하는 방법이 상대적으로 더 복잡하지만, 가격을 코인으로 바꾸어 생각한다면 코인 증거금 선물의 손익 계산이 쉬워집니다.",
      image:
        "https://sandbank-image.s3.ap-northeast-2.amazonaws.com/info/sb-inisht-103.png",
      link: "https://sandbankofficial.notion.site/3-5445cc8312bb4af0b1b12db45512ddde",
      upload_date: "2021-10-28",
      like_cnt: 1,
      like_top: 1,
    },
    {
      id: 30,
      sector_id: 3,
      title:
        "[Research Report] #2 포트폴리오에 비트코인을 추가하면 오히려 손해보는 날이 적어진다?",
      body: "비트코인은 다른 자산들과 낮은 상관관계를 가지며, 이는 주식, 채권, 금 등 기존 금융 자산에서 발견할 수 없는 독특한 특성입니다.\n\n낮은 상관관계의 이유 세 가지는 다음과 같습니다: \n1) 기존 금융자산과 다른 리스크 팩터 \n2) 비트코인 역할에 대한 다양한 기대감 3) 비트코인 투자자층과 기존 금융 자산 투자자층의 괴리\n\n비트코인의 낮은 상관관계로 포트폴리오의 안정성 향상에 기여할 수 있습니다. → 미국, 한국 60/40 포트폴리오의 손해를 보는 날이 줄어드는 효과 확인할 수 있습니다.",
      image:
        "https://sandbank-image.s3.ap-northeast-2.amazonaws.com/info/sb-inisht-105.png",
      link: "https://sandbankofficial.notion.site/Research-Report-2-4d47efc744fa463696b0dc5e8bc8fa4f",
      upload_date: "2021-10-19",
      like_cnt: 1,
      like_top: 1,
    },
    {
      id: 29,
      sector_id: 3,
      title: "[Research Report] #1 펀딩 비율을 통해 엿보는 미래 수익률",
      body: "영구 선물 펀딩 비율(funding rate)은 현물과 영구 선물의 가격 차이가 얼마나 큰지 알려주는 지표로 사용할 수 있습니다.\n\n선물과 현물의 가격 차이가 비정상적으로 커질 시, 고평가된 상품을 매도하고 저평가된 상품을 매수하는 차익 거래 때문에 둘의 가격 차이가 줄어듭니다. 즉, 펀딩 비율도 커진 뒤에는 반드시 작아지게 됩니다.\n\n투자 제안: 펀딩 비율을 이용해서 현물이 상대적으로 저평가되었을 때를 판단하고 이때 현물을 매수하는 방식으로 투자하면 더욱 안전한 투자를 꾀할 수 있습니다.",
      image:
        "https://sandbank-image.s3.ap-northeast-2.amazonaws.com/info/sb-inisht-104.png",
      link: "https://sandbankofficial.notion.site/Research-Report-1-d9c43266b88048779e4d94e2704e2b99",
      upload_date: "2021-10-07",
      like_cnt: 0,
      like_top: 0,
    },
    {
      id: 28,
      sector_id: 3,
      title: "[투자 길잡이] #2 어떤 자산을 포트폴리오에 편입할까?",
      body: '보유 중인 포트폴리오에 새로운 자산을 편입할 때, 새로운 자산의\n    1. 기대 수익이 높으면 높을수록,\n    2. 위험(변동성)이 낮으면 낮을수록,\n    3. 기존 포트폴리오와의 상관관계가 낮으면 낮을수록\n동일한 위험을 감수하면서 더 높은 수익률을 기대할 수 있습니다. 즉 더 우수한 포트폴리오가 됩니다.\n\n포트폴리오에 편입을 고려 중인 자산("특정 자산")이 아래 부등식의 조건을 만족한다면, 포트폴리오의 수익/위험 비율을 개선할 수 있는 가능성이 높으므로 포트폴리오 편입을 적극적으로 고려해야 합니다.',
      image:
        "https://sandbank-image.s3.ap-northeast-2.amazonaws.com/info/sb-inisht-102.png",
      link: "https://sandbankofficial.notion.site/2-4e31bf6eb5c2465f9334f2075398da82",
      upload_date: "2021-09-28",
      like_cnt: 2,
      like_top: 0,
    },
    {
      id: 27,
      sector_id: 3,
      title: "[투자 길잡이] #1 분산투자 관점에서 본 상관관계의 중요성과 한계",
      body: '분산 투자의 핵심인 상관관계. 이것은 두 변수의 움직임이 얼마나 같은 방향 또는 다른 방향으로 움직이는지를 수치화한 것입니다.\n\n그러나 상관관계만으로 투자를 결정하는 건 위험합니다. 상관관계가 같아도 각 자산의 수익률 평균 및 변동성의 크기에 따라 포트폴리오 투자성과는 매우 달라집니다. \n\n변동성의 크기를 고려하지 않는 것은 한 변수가 10만큼 변할 때, 다른 변수가 1만큼 변하는지 혹은 100만큼 변하는지 알려주지 못하고, 얼마나 같은 또는 다른 방향으로 움직이는지만 알려주는 상관관계의 한계입니다. 변동성의 크기는 꾸준한 포트폴리오를 만드는 핵심입니다. \n\n수익률 또한 중요합니다. 평균 수익률은 돈을 버는 포트폴리오의 기준이 되기 때문입니다. 아무리 변동성이 작은 "안정적인 포트폴리오"를 만들더라도 평균 수익률이 너무 작다면 포트폴리오 성과에 불만이 생기기 마련입니다.',
      image:
        "https://sandbank-image.s3.ap-northeast-2.amazonaws.com/info/sb-inisht-101.png",
      link: "https://sandbankofficial.notion.site/1-85cf2ea076d24db59f924611367e5337",
      upload_date: "2021-09-14",
      like_cnt: 2,
      like_top: 0,
    },
  ],
};
