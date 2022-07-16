// const AWS = require("aws-sdk");
// const dynamoDbClient = new AWS.DynamoDB.DocumentClient();

// const axios = require("axios");

// exports.handler = async (event, context, callback) => {
//   const options = {
//     method: "GET",
//     url: "https://bing-news-search1.p.rapidapi.com/news/trendingtopics",
//     params: { textFormat: "Raw", safeSearch: "Off" },
//     headers: {
//       "X-BingApis-SDK": "true",
//       "X-RapidAPI-Key": "1590a46347mshb23a072dfa11de1p158860jsn90a834d78065",
//       "X-RapidAPI-Host": "bing-news-search1.p.rapidapi.com",
//     },
//   };

//   const resultData = await axios.request(options).then((response) => {
//     return response.data.value.map((data2) => ({
//       name: data2.name,
//       image: data2.image.url,
//       source: data2.newsSearchUrl,
//     }));
//   });

//   const result = addData(resultData);
//   callback(null, result);
// };

const resultData = [
  {
    name: "Parents lose battle",
    image:
      "https://www.bing.com/th?id=OPN.RTNews_Myy2KUZSSLEoeZs36b0BxQ&c=14&rs=2&qlt=80&pcl=f9f9f9&pid=News",
    source:
      "https://www.bing.com/news/topicview?q=Archie+Battersbee+life+support&nvaug=%5bNewsVertical+topicviewtype%3d%222%22%5d&form=TNSA02&filters=tnTID%3a%2268CCE074-B3AB-41bb-8C07-931C401AECB4%22+tnVersion%3a%224665594%22+Segment%3a%22popularnow.carousel%22+tnCol%3a%220%22+tnScenario%3a%22TrendingTopicsAPI%22+tnOrder%3a%221abe4771-c643-4046-bad6-6febaff131da%22",
  },
  {
    name: "Arrest warrant lifted",
    image:
      "https://www.bing.com/th?id=OPN.RTNews__Fm7wKYX0qCLouNReY3SvA&c=14&rs=2&qlt=80&pcl=f9f9f9&pid=News",
    source:
      "https://www.bing.com/news/topicview?q=Judge+Tina+Peters&nvaug=%5bNewsVertical+topicviewtype%3d%222%22%5d&form=TNSA02&filters=tnTID%3a%2271757313-7D95-4662-9521-75D7DF1873E5%22+tnVersion%3a%224665594%22+Segment%3a%22popularnow.carousel%22+tnCol%3a%221%22+tnScenario%3a%22TrendingTopicsAPI%22+tnOrder%3a%221abe4771-c643-4046-bad6-6febaff131da%22",
  },
  {
    name: "Sued for unpaid fees",
    image:
      "https://www.bing.com/th?id=OPN.RTNews_bYDensz-4FMYhQNFVsLScA&c=14&rs=2&qlt=80&pcl=f9f9f9&pid=News",
    source:
      "https://www.bing.com/news/topicview?q=Phantom+Labs+Kanye&nvaug=%5bNewsVertical+topicviewtype%3d%222%22%5d&form=TNSA02&filters=tnTID%3a%223D9AA2B3-2112-4854-BC15-0B2029A31FFB%22+tnVersion%3a%224665594%22+Segment%3a%22popularnow.carousel%22+tnCol%3a%222%22+tnScenario%3a%22TrendingTopicsAPI%22+tnOrder%3a%221abe4771-c643-4046-bad6-6febaff131da%22",
  },
  {
    name: "Dropped from movie",
    image:
      "https://www.bing.com/th?id=OPN.RTNews_voPwMUyWQMj9hwdURGreGQ&c=14&rs=2&qlt=80&pcl=f9f9f9&pid=News",
    source:
      "https://www.bing.com/news/topicview?q=Kevin+Spacey+dropped+Gateway&nvaug=%5bNewsVertical+topicviewtype%3d%222%22%5d&form=TNSA02&filters=tnTID%3a%22D532F4CD-8976-4195-8E02-D644F5BCDD17%22+tnVersion%3a%224665594%22+Segment%3a%22popularnow.carousel%22+tnCol%3a%223%22+tnScenario%3a%22TrendingTopicsAPI%22+tnOrder%3a%221abe4771-c643-4046-bad6-6febaff131da%22",
  },
  {
    name: "Appears in campaign ad",
    image:
      "https://www.bing.com/th?id=OPN.RTNews_OcNrExeTGM4eZ_fUpR7PWA&c=14&rs=2&qlt=80&pcl=f9f9f9&pid=News",
    source:
      "https://www.bing.com/news/topicview?q=Snooki+Dr+Oz&nvaug=%5bNewsVertical+topicviewtype%3d%222%22%5d&form=TNSA02&filters=tnTID%3a%22FC8543BE-F8F1-4dde-A1D9-23A75C2791FC%22+tnVersion%3a%224665594%22+Segment%3a%22popularnow.carousel%22+tnCol%3a%224%22+tnScenario%3a%22TrendingTopicsAPI%22+tnOrder%3a%221abe4771-c643-4046-bad6-6febaff131da%22",
  },
  {
    name: "Massive python nest",
    image:
      "https://www.bing.com/th?id=OPN.RTNews_2JJMAIhfs0v0mOIo-49TJQ&c=14&rs=2&qlt=80&pcl=f9f9f9&pid=News",
    source:
      "https://www.bing.com/news/topicview?q=Big+Cypress+python+nest&nvaug=%5bNewsVertical+topicviewtype%3d%222%22%5d&form=TNSA02&filters=tnTID%3a%222C45DCD7-D930-410f-B46D-68BDE660E86B%22+tnVersion%3a%224665594%22+Segment%3a%22popularnow.carousel%22+tnCol%3a%225%22+tnScenario%3a%22TrendingTopicsAPI%22+tnOrder%3a%221abe4771-c643-4046-bad6-6febaff131da%22",
  },
  {
    name: "Ruled accidental",
    image:
      "https://www.bing.com/th?id=OPN.RTNews_i3yMomK9dE3tuGiUnBXE3A&c=14&rs=2&qlt=80&pcl=f9f9f9&pid=News",
    source:
      "https://www.bing.com/news/topicview?q=Ivana+Trump+accidental&nvaug=%5bNewsVertical+topicviewtype%3d%222%22%5d&form=TNSA02&filters=tnTID%3a%224D007B10-E672-4a09-9799-A6AD66A5DF49%22+tnVersion%3a%224665594%22+Segment%3a%22popularnow.carousel%22+tnCol%3a%226%22+tnScenario%3a%22TrendingTopicsAPI%22+tnOrder%3a%221abe4771-c643-4046-bad6-6febaff131da%22",
  },
  {
    name: "‘Scared’ to play Jones",
    image:
      "https://www.bing.com/th?id=OPN.RTNews_zihmP5F3we_SW0_5SyErPQ&c=14&rs=2&qlt=80&pcl=f9f9f9&pid=News",
    source:
      "https://www.bing.com/news/topicview?q=Pratt+scared+Indiana+Jones&nvaug=%5bNewsVertical+topicviewtype%3d%222%22%5d&form=TNSA02&filters=tnTID%3a%22783E1192-9FBB-48ef-9632-CD1D30C5358E%22+tnVersion%3a%224665594%22+Segment%3a%22popularnow.carousel%22+tnCol%3a%227%22+tnScenario%3a%22TrendingTopicsAPI%22+tnOrder%3a%221abe4771-c643-4046-bad6-6febaff131da%22",
  },
  {
    name: "Epstein ties explored",
    image:
      "https://www.bing.com/th?id=OPN.RTNews_n13JFuFAyp4p_Fwdn0c5tg&c=14&rs=2&qlt=80&pcl=f9f9f9&pid=News",
    source:
      "https://www.bing.com/news/topicview?q=Wexner+Epstein&nvaug=%5bNewsVertical+topicviewtype%3d%222%22%5d&form=TNSA02&filters=tnTID%3a%224BB6B864-47A4-4e46-8C74-317574D7E0CF%22+tnVersion%3a%224665594%22+Segment%3a%22popularnow.carousel%22+tnCol%3a%228%22+tnScenario%3a%22TrendingTopicsAPI%22+tnOrder%3a%221abe4771-c643-4046-bad6-6febaff131da%22",
  },
  {
    name: "Mystery disease",
    image:
      "https://www.bing.com/th?id=OPN.RTNews_ZWQ1XdxMv0-mfVF7Mq51tQ&c=14&rs=2&qlt=80&pcl=f9f9f9&pid=News",
    source:
      "https://www.bing.com/news/topicview?q=Tanzania+mystery+disease&nvaug=%5bNewsVertical+topicviewtype%3d%222%22%5d&form=TNSA02&filters=tnTID%3a%22912B6F35-E189-438a-BF6C-3E27914A9406%22+tnVersion%3a%224665594%22+Segment%3a%22popularnow.carousel%22+tnCol%3a%229%22+tnScenario%3a%22TrendingTopicsAPI%22+tnOrder%3a%221abe4771-c643-4046-bad6-6febaff131da%22",
  },
  {
    name: "Second-round leaders",
    image:
      "https://www.bing.com/th?id=OPN.RTNews_QCI_hSTnab5wNHIexJQjvA&c=14&rs=2&qlt=80&pcl=f9f9f9&pid=News",
    source:
      "https://www.bing.com/news/topicview?q=Open+Championship+2022&nvaug=%5bNewsVertical+topicviewtype%3d%222%22%5d&form=TNSA02&filters=tnTID%3a%22869C6B27-E182-4ac0-8679-2BA1D9419E6D%22+tnVersion%3a%224665594%22+Segment%3a%22popularnow.carousel%22+tnCol%3a%2210%22+tnScenario%3a%22TrendingTopicsAPI%22+tnOrder%3a%221abe4771-c643-4046-bad6-6febaff131da%22",
  },
  {
    name: "Best guess is garbage",
    image:
      "https://www.bing.com/th?id=OPN.RTNews_0Lu8mV9bJUORpTlCy_Bz9g&c=14&rs=2&qlt=80&pcl=f9f9f9&pid=News",
    source:
      "https://www.bing.com/news/topicview?q=Mars+tangled+object&nvaug=%5bNewsVertical+topicviewtype%3d%222%22%5d&form=TNSA02&filters=tnTID%3a%229398009A-CD23-4d25-BC74-AD9DFF88D668%22+tnVersion%3a%224665594%22+Segment%3a%22popularnow.carousel%22+tnCol%3a%2211%22+tnScenario%3a%22TrendingTopicsAPI%22+tnOrder%3a%221abe4771-c643-4046-bad6-6febaff131da%22",
  },
  {
    name: "Pilot arrested",
    image:
      "https://www.bing.com/th?id=OPN.RTNews_RWJzbAAfVD6a0zGg11d_rg&c=14&rs=2&qlt=80&pcl=f9f9f9&pid=News",
    source:
      "https://www.bing.com/news/topicview?q=Pilot+arrested+Missouri&nvaug=%5bNewsVertical+topicviewtype%3d%222%22%5d&form=TNSA02&filters=tnTID%3a%2233836A15-6900-4576-A394-C999FBF828D9%22+tnVersion%3a%224665594%22+Segment%3a%22popularnow.carousel%22+tnCol%3a%2212%22+tnScenario%3a%22TrendingTopicsAPI%22+tnOrder%3a%221abe4771-c643-4046-bad6-6febaff131da%22",
  },
  {
    name: "Misses cut",
    image:
      "https://www.bing.com/th?id=OPN.RTNews_82INc7wU3k4Hne9JwcP-Yw&c=14&rs=2&qlt=80&pcl=f9f9f9&pid=News",
    source:
      "https://www.bing.com/news/topicview?q=Tiger+Woods+misses+cut&nvaug=%5bNewsVertical+topicviewtype%3d%222%22%5d&form=TNSA02&filters=tnTID%3a%22B8CD8FF1-BE8C-4d25-BB14-B7A82F45EF67%22+tnVersion%3a%224665594%22+Segment%3a%22popularnow.carousel%22+tnCol%3a%2213%22+tnScenario%3a%22TrendingTopicsAPI%22+tnOrder%3a%221abe4771-c643-4046-bad6-6febaff131da%22",
  },
  {
    name: "Refusing to treat?",
    image:
      "https://www.bing.com/th?id=OPN.RTNews_penfqZ8eqLsZesc0ACySEw&c=14&rs=2&qlt=80&pcl=f9f9f9&pid=News",
    source:
      "https://www.bing.com/news/topicview?q=Texas+pregnancy+complications&nvaug=%5bNewsVertical+topicviewtype%3d%222%22%5d&form=TNSA02&filters=tnTID%3a%2280B2F549-21B2-4e8d-816D-CADC75127397%22+tnVersion%3a%224665594%22+Segment%3a%22popularnow.carousel%22+tnCol%3a%2214%22+tnScenario%3a%22TrendingTopicsAPI%22+tnOrder%3a%221abe4771-c643-4046-bad6-6febaff131da%22",
  },
  {
    name: "‘Most contagious’",
    image:
      "https://www.bing.com/th?id=OPN.RTNews_IkPkuyEEcqKyMM9sTXE-Wg&c=14&rs=2&qlt=80&pcl=f9f9f9&pid=News",
    source:
      "https://www.bing.com/news/topicview?q=BA.5+variant&nvaug=%5bNewsVertical+topicviewtype%3d%222%22%5d&form=TNSA02&filters=tnTID%3a%2287FF3095-6D3F-43ae-A6E1-B3EDC0946331%22+tnVersion%3a%224665594%22+Segment%3a%22popularnow.carousel%22+tnCol%3a%2215%22+tnScenario%3a%22TrendingTopicsAPI%22+tnOrder%3a%221abe4771-c643-4046-bad6-6febaff131da%22",
  },
  {
    name: "'Princess Doe' ID'd",
    image:
      "https://www.bing.com/th?id=OPN.RTNews_PZ_uFycO-_YVs6cX9XtwpQ&c=14&rs=2&qlt=80&pcl=f9f9f9&pid=News",
    source:
      "https://www.bing.com/news/topicview?q=Princess+Doe+identified&nvaug=%5bNewsVertical+topicviewtype%3d%222%22%5d&form=TNSA02&filters=tnTID%3a%2223BA39C0-E47D-469e-BEDA-FC28AED5FACF%22+tnVersion%3a%224665594%22+Segment%3a%22popularnow.carousel%22+tnCol%3a%2216%22+tnScenario%3a%22TrendingTopicsAPI%22+tnOrder%3a%221abe4771-c643-4046-bad6-6febaff131da%22",
  },
  {
    name: "Fundraising record",
    image:
      "https://www.bing.com/th?id=OPN.RTNews_KrT3jsunRTrp0_bPQ5qcfA&c=14&rs=2&qlt=80&pcl=f9f9f9&pid=News",
    source:
      "https://www.bing.com/news/topicview?q=Beto+O%27Rourke+27+million&nvaug=%5bNewsVertical+topicviewtype%3d%222%22%5d&form=TNSA02&filters=tnTID%3a%2232C33D00-3CD9-45cc-8566-68DF1E7A40FC%22+tnVersion%3a%224665594%22+Segment%3a%22popularnow.carousel%22+tnCol%3a%2217%22+tnScenario%3a%22TrendingTopicsAPI%22+tnOrder%3a%221abe4771-c643-4046-bad6-6febaff131da%22",
  },
  {
    name: "Says character is gay",
    image:
      "https://www.bing.com/th?id=OPN.RTNews_xWw6KbCxXbb_Rm0eiciuMg&c=14&rs=2&qlt=80&pcl=f9f9f9&pid=News",
    source:
      "https://www.bing.com/news/topicview?q=Noah+Schnapp+Will+gay&nvaug=%5bNewsVertical+topicviewtype%3d%222%22%5d&form=TNSA02&filters=tnTID%3a%22783091FD-9794-4a41-9BF3-F03680440051%22+tnVersion%3a%224665594%22+Segment%3a%22popularnow.carousel%22+tnCol%3a%2218%22+tnScenario%3a%22TrendingTopicsAPI%22+tnOrder%3a%221abe4771-c643-4046-bad6-6febaff131da%22",
  },
  {
    name: "Heartbreaking casualty",
    image:
      "https://www.bing.com/th?id=OPN.RTNews_aisfbCk55Zhaveld-Vto2w&c=14&rs=2&qlt=80&pcl=f9f9f9&pid=News",
    source:
      "https://www.bing.com/news/topicview?q=Missile+attack+Liza&nvaug=%5bNewsVertical+topicviewtype%3d%222%22%5d&form=TNSA02&filters=tnTID%3a%22D9C1D7F9-F2EE-4f28-A2DC-CAAC2F9BFA5B%22+tnVersion%3a%224665594%22+Segment%3a%22popularnow.carousel%22+tnCol%3a%2219%22+tnScenario%3a%22TrendingTopicsAPI%22+tnOrder%3a%221abe4771-c643-4046-bad6-6febaff131da%22",
  },
  {
    name: "Big rebound for Dow",
    image:
      "https://www.bing.com/th?id=OPN.RTNews_SRgJ8oSs5iIQBjUpzujt9g&c=14&rs=2&qlt=80&pcl=f9f9f9&pid=News",
    source:
      "https://www.bing.com/news/topicview?q=Dow+Jones+today&nvaug=%5bNewsVertical+topicviewtype%3d%222%22%5d&form=TNSA02&filters=tnTID%3a%226FE175CD-A022-4763-B1D0-BDF2BF12AD92%22+tnVersion%3a%224665594%22+Segment%3a%22popularnow.carousel%22+tnCol%3a%2220%22+tnScenario%3a%22TrendingTopicsAPI%22+tnOrder%3a%221abe4771-c643-4046-bad6-6febaff131da%22",
  },
  {
    name: "Boy shoots brother",
    image:
      "https://www.bing.com/th?id=OPN.RTNews_8Qj37Jvebg63bPew3apiEA&c=14&rs=2&qlt=80&pcl=f9f9f9&pid=News",
    source:
      "https://www.bing.com/news/topicview?q=Arkansas+boy+shoots+brother&nvaug=%5bNewsVertical+topicviewtype%3d%222%22%5d&form=TNSA02&filters=tnTID%3a%22BA21E01D-723C-45da-9B41-67FE7402541D%22+tnVersion%3a%224665594%22+Segment%3a%22popularnow.carousel%22+tnCol%3a%2221%22+tnScenario%3a%22TrendingTopicsAPI%22+tnOrder%3a%221abe4771-c643-4046-bad6-6febaff131da%22",
  },
  {
    name: "Copyright lawsuit",
    image:
      "https://www.bing.com/th?id=OPN.RTNews_0ZAwhj0ytxUvpPGz5en93A&c=14&rs=2&qlt=80&pcl=f9f9f9&pid=News",
    source:
      "https://www.bing.com/news/topicview?q=Abbott+Elementary+lawsuit+news&nvaug=%5bNewsVertical+topicviewtype%3d%222%22%5d&form=TNSA02&filters=tnTID%3a%22F02C03A4-AD3E-4a9d-94AC-C7B18E81C78D%22+tnVersion%3a%224665594%22+Segment%3a%22popularnow.carousel%22+tnCol%3a%2222%22+tnScenario%3a%22TrendingTopicsAPI%22+tnOrder%3a%221abe4771-c643-4046-bad6-6febaff131da%22",
  },
  {
    name: "Sharing ISS flights",
    image:
      "https://www.bing.com/th?id=OPN.RTNews_ei6OWH6iRJZQuwvTFjTQYw&c=14&rs=2&qlt=80&pcl=f9f9f9&pid=News",
    source:
      "https://www.bing.com/news/topicview?q=Russia+NASA+ISS+flights&nvaug=%5bNewsVertical+topicviewtype%3d%222%22%5d&form=TNSA02&filters=tnTID%3a%226494B210-C5E3-4ecd-B8F0-3BC7E86D8B80%22+tnVersion%3a%224665594%22+Segment%3a%22popularnow.carousel%22+tnCol%3a%2223%22+tnScenario%3a%22TrendingTopicsAPI%22+tnOrder%3a%221abe4771-c643-4046-bad6-6febaff131da%22",
  },
  {
    name: "Rejects plea deal",
    image:
      "https://www.bing.com/th?id=OPN.RTNews_cGJqZ-crfaxUQ8PI1UzQ4w&c=14&rs=2&qlt=80&pcl=f9f9f9&pid=News",
    source:
      "https://www.bing.com/news/topicview?q=Peter+Navarro+plea+deal&nvaug=%5bNewsVertical+topicviewtype%3d%222%22%5d&form=TNSA02&filters=tnTID%3a%22419F6ECB-2677-4ea2-825C-B8CBD031D76D%22+tnVersion%3a%224665594%22+Segment%3a%22popularnow.carousel%22+tnCol%3a%2224%22+tnScenario%3a%22TrendingTopicsAPI%22+tnOrder%3a%221abe4771-c643-4046-bad6-6febaff131da%22",
  },
  {
    name: "Inflation ‘spin’ claim",
    image:
      "https://www.bing.com/th?id=OPN.RTNews_zrscObAgAwe0zSs79Ml9fg&c=14&rs=2&qlt=80&pcl=f9f9f9&pid=News",
    source:
      "https://www.bing.com/news/topicview?q=Elissa+Slotkin+inflation+spin&nvaug=%5bNewsVertical+topicviewtype%3d%222%22%5d&form=TNSA02&filters=tnTID%3a%2202EBF697-5DFE-42c2-B587-7CAF34A01C92%22+tnVersion%3a%224665594%22+Segment%3a%22popularnow.carousel%22+tnCol%3a%2225%22+tnScenario%3a%22TrendingTopicsAPI%22+tnOrder%3a%221abe4771-c643-4046-bad6-6febaff131da%22",
  },
  {
    name: "Sent ‘target’ letters",
    image:
      "https://www.bing.com/th?id=OPN.RTNews_b9b02b4O0A76bGz5T_T-YA&c=14&rs=2&qlt=80&pcl=f9f9f9&pid=News",
    source:
      "https://www.bing.com/news/topicview?q=Fulton+DA+target+letters&nvaug=%5bNewsVertical+topicviewtype%3d%222%22%5d&form=TNSA02&filters=tnTID%3a%22D70EC4FD-684B-4b15-8222-0AD00C4DB5E2%22+tnVersion%3a%224665594%22+Segment%3a%22popularnow.carousel%22+tnCol%3a%2226%22+tnScenario%3a%22TrendingTopicsAPI%22+tnOrder%3a%221abe4771-c643-4046-bad6-6febaff131da%22",
  },
  {
    name: "Giving ‘virtually all’",
    image:
      "https://www.bing.com/th?id=OPN.RTNews_on_5Rad_tCrP9gfiorpZCQ&c=14&rs=2&qlt=80&pcl=f9f9f9&pid=News",
    source:
      "https://www.bing.com/news/topicview?q=Bill+Gates+virtually+all&nvaug=%5bNewsVertical+topicviewtype%3d%222%22%5d&form=TNSA02&filters=tnTID%3a%2217347F5A-894C-48c1-A80A-6D8BAF5ADE5C%22+tnVersion%3a%224665594%22+Segment%3a%22popularnow.carousel%22+tnCol%3a%2227%22+tnScenario%3a%22TrendingTopicsAPI%22+tnOrder%3a%221abe4771-c643-4046-bad6-6febaff131da%22",
  },
  {
    name: "Playing Branson",
    image:
      "https://www.bing.com/th?id=OPN.RTNews_q1LMjdvFkDIaL92DV6SC3w&c=14&rs=2&qlt=80&pcl=f9f9f9&pid=News",
    source:
      "https://www.bing.com/news/topicview?q=Andrew+Garfield+Hot+Air&nvaug=%5bNewsVertical+topicviewtype%3d%222%22%5d&form=TNSA02&filters=tnTID%3a%228494E48E-2040-4776-95CD-1DAF1D1D2762%22+tnVersion%3a%224665594%22+Segment%3a%22popularnow.carousel%22+tnCol%3a%2228%22+tnScenario%3a%22TrendingTopicsAPI%22+tnOrder%3a%221abe4771-c643-4046-bad6-6febaff131da%22",
  },
  {
    name: "Two suspects arrested",
    image:
      "https://www.bing.com/th?id=OPN.RTNews_Hc7iw12_YsQ0owiv7LhDOQ&c=14&rs=2&qlt=80&pcl=f9f9f9&pid=News",
    source:
      "https://www.bing.com/news/topicview?q=7-Eleven+suspects+arrested&nvaug=%5bNewsVertical+topicviewtype%3d%222%22%5d&form=TNSA02&filters=tnTID%3a%22F07F9F5A-FB9B-41e6-A81E-A9E2901B3773%22+tnVersion%3a%224665594%22+Segment%3a%22popularnow.carousel%22+tnCol%3a%2229%22+tnScenario%3a%22TrendingTopicsAPI%22+tnOrder%3a%221abe4771-c643-4046-bad6-6febaff131da%22",
  },
  {
    name: "Cleared of 1995 murder",
    image:
      "https://www.bing.com/th?id=OPN.RTNews_x6q0gEBGaoyCowtlLRauyQ&c=14&rs=2&qlt=80&pcl=f9f9f9&pid=News",
    source:
      "https://www.bing.com/news/topicview?q=1995+New+York+subway+murder&nvaug=%5bNewsVertical+topicviewtype%3d%222%22%5d&form=TNSA02&filters=tnTID%3a%22DE7A7F64-E6BA-4ddc-AAA1-28F175045687%22+tnVersion%3a%224665594%22+Segment%3a%22popularnow.carousel%22+tnCol%3a%2230%22+tnScenario%3a%22TrendingTopicsAPI%22+tnOrder%3a%221abe4771-c643-4046-bad6-6febaff131da%22",
  },
  {
    name: "Delfonics lead singer",
    image:
      "https://www.bing.com/th?id=OPN.RTNews_LdsuPKMbxeEyGiz8KWOcDg&c=14&rs=2&qlt=80&pcl=f9f9f9&pid=News",
    source:
      "https://www.bing.com/news/topicview?q=William+Hart+Delfonics&nvaug=%5bNewsVertical+topicviewtype%3d%222%22%5d&form=TNSA02&filters=tnTID%3a%22924E4686-8156-4cec-83D9-D02B431175F2%22+tnVersion%3a%224665594%22+Segment%3a%22popularnow.carousel%22+tnCol%3a%2231%22+tnScenario%3a%22TrendingTopicsAPI%22+tnOrder%3a%221abe4771-c643-4046-bad6-6febaff131da%22",
  },
  {
    name: "Drug lord arrested",
    image:
      "https://www.bing.com/th?id=OPN.RTNews_cqEQzsNsDbzPIicfoFOcbg&c=14&rs=2&qlt=80&pcl=f9f9f9&pid=News",
    source:
      "https://www.bing.com/news/topicview?q=+Rafael+Caro+Quintero+arrested&nvaug=%5bNewsVertical+topicviewtype%3d%222%22%5d&form=TNSA02&filters=tnTID%3a%22DAD66B54-0CC6-4d84-91CC-C0C07DB9CFDA%22+tnVersion%3a%224665594%22+Segment%3a%22popularnow.carousel%22+tnCol%3a%2232%22+tnScenario%3a%22TrendingTopicsAPI%22+tnOrder%3a%221abe4771-c643-4046-bad6-6febaff131da%22",
  },
  {
    name: "‘Rings’ show trailer",
    image:
      "https://www.bing.com/th?id=OPN.RTNews_jPy84-f7PdZ4O74BpEWENg&c=14&rs=2&qlt=80&pcl=f9f9f9&pid=News",
    source:
      "https://www.bing.com/news/topicview?q=Rings+of+Power+news&nvaug=%5bNewsVertical+topicviewtype%3d%222%22%5d&form=TNSA02&filters=tnTID%3a%22AE0455F7-23F5-4035-8295-01909080639B%22+tnVersion%3a%224665594%22+Segment%3a%22popularnow.carousel%22+tnCol%3a%2233%22+tnScenario%3a%22TrendingTopicsAPI%22+tnOrder%3a%221abe4771-c643-4046-bad6-6febaff131da%22",
  },
  {
    name: "Mandela Day address",
    image:
      "https://www.bing.com/th?id=OPN.RTNews_91iftNoq3NYv77MzfiBKZA&c=14&rs=2&qlt=80&pcl=f9f9f9&pid=News",
    source:
      "https://www.bing.com/news/topicview?q=Prince+Harry+UN&nvaug=%5bNewsVertical+topicviewtype%3d%222%22%5d&form=TNSA02&filters=tnTID%3a%22EB13C40F-2F48-4abb-A6A5-33FBF2D45E9D%22+tnVersion%3a%224665594%22+Segment%3a%22popularnow.carousel%22+tnCol%3a%2234%22+tnScenario%3a%22TrendingTopicsAPI%22+tnOrder%3a%221abe4771-c643-4046-bad6-6febaff131da%22",
  },
  {
    name: "'Mass casualty' crash",
    image:
      "https://www.bing.com/th?id=OPN.RTNews_4ER3PzWZUw3kTuQ5UPBlDg&c=14&rs=2&qlt=80&pcl=f9f9f9&pid=News",
    source:
      "https://www.bing.com/news/topicview?q=Montana+vehicle+pileup&nvaug=%5bNewsVertical+topicviewtype%3d%222%22%5d&form=TNSA02&filters=tnTID%3a%22370B022D-ADCD-4278-92F2-9CFA5A7AF8E4%22+tnVersion%3a%224665594%22+Segment%3a%22popularnow.carousel%22+tnCol%3a%2235%22+tnScenario%3a%22TrendingTopicsAPI%22+tnOrder%3a%221abe4771-c643-4046-bad6-6febaff131da%22",
  },
  {
    name: "Demand exceeds supply",
    image:
      "https://www.bing.com/th?id=OPN.RTNews_m7ByhU63AJts1zDWj35Thg&c=14&rs=2&qlt=80&pcl=f9f9f9&pid=News",
    source:
      "https://www.bing.com/news/topicview?q=Monkeypox+vaccine+supply&nvaug=%5bNewsVertical+topicviewtype%3d%222%22%5d&form=TNSA02&filters=tnTID%3a%227EEC1C1D-F9F7-4433-A0B4-12E67262346C%22+tnVersion%3a%224665594%22+Segment%3a%22popularnow.carousel%22+tnCol%3a%2236%22+tnScenario%3a%22TrendingTopicsAPI%22+tnOrder%3a%221abe4771-c643-4046-bad6-6febaff131da%22",
  },
  {
    name: "Biden abandons plans",
    image:
      "https://www.bing.com/th?id=OPN.RTNews_XuD3DZ_yf0N8zampmCJUGA&c=14&rs=2&qlt=80&pcl=f9f9f9&pid=News",
    source:
      "https://www.bing.com/news/topicview?q=Biden+Chad+Meredith&nvaug=%5bNewsVertical+topicviewtype%3d%222%22%5d&form=TNSA02&filters=tnTID%3a%228C47C185-7B5D-46be-82BF-66BC61CA2346%22+tnVersion%3a%224665594%22+Segment%3a%22popularnow.carousel%22+tnCol%3a%2237%22+tnScenario%3a%22TrendingTopicsAPI%22+tnOrder%3a%221abe4771-c643-4046-bad6-6febaff131da%22",
  },
  {
    name: "Panel subpoenas USSS",
    image:
      "https://www.bing.com/th?id=OPN.RTNews_ifmbKi9YGbQjL203xhrfhA&c=14&rs=2&qlt=80&pcl=f9f9f9&pid=News",
    source:
      "https://www.bing.com/news/topicview?q=Secret+Service+subpoena&nvaug=%5bNewsVertical+topicviewtype%3d%222%22%5d&form=TNSA02&filters=tnTID%3a%224D8EB0A0-A897-4ed4-A340-10376896AFD6%22+tnVersion%3a%224665594%22+Segment%3a%22popularnow.carousel%22+tnCol%3a%2238%22+tnScenario%3a%22TrendingTopicsAPI%22+tnOrder%3a%221abe4771-c643-4046-bad6-6febaff131da%22",
  },
  {
    name: "Talk Khashoggi murder",
    image:
      "https://www.bing.com/th?id=OPN.RTNews_9VU3LhZd2wqNDh_mtFcm5Q&c=14&rs=2&qlt=80&pcl=f9f9f9&pid=News",
    source:
      "https://www.bing.com/news/topicview?q=Biden+Khashoggi+Saudi+crown+prince&nvaug=%5bNewsVertical+topicviewtype%3d%222%22%5d&form=TNSA02&filters=tnTID%3a%22F6F8FFAD-17E4-4996-94B0-479528DBF2E7%22+tnVersion%3a%224665594%22+Segment%3a%22popularnow.carousel%22+tnCol%3a%2239%22+tnScenario%3a%22TrendingTopicsAPI%22+tnOrder%3a%221abe4771-c643-4046-bad6-6febaff131da%22",
  },
];

const addData = async () => {
  //   const trendingData = {
  //     TableName: "Trending-34kezkovijhklohndelo6dyf74-dev",
  //     Item: {
  //       id: event.request.userAttributes.sub,
  //       username: event.userName,
  //       name: event.userName,
  //       email: event.request.userAttributes.email,
  //       owner: event.request.userAttributes.sub,
  //       createdAt: new Date().getTime(),
  //     },
  //   };

  const newData = resultData.slice(0, 10);

  console.log(newData);
};

addData();
