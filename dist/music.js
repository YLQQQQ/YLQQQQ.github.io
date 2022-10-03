const ap = new APlayer({
  container: document.getElementById('aplayer'),
  fixed: true,
  autoplay: false,
  audio: [
    {
      name: '願い~あの頃のキミへ~',
      artist: '當山みれい',
      url: 'http://music.163.com/song/media/outer/url?id=488388942.mp3',
      cover: 'https://p2.music.126.net/TBJ9yAhUs8UKWGFWuIJgxw==/109951165946337053.jpg',
    },
    {
      name: '天外来物',
      artist: '薛之谦',
      url: 'http://music.163.com/song/media/outer/url?id=1463165983.mp3',
      cover: 'http://p2.music.126.net/MgH6SepYHboKPr6FR8yg-w==/109951167040040692.jpg',
    },
    {
      name: '陪你去流浪',
      artist: '薛之谦',
      url: 'http://music.163.com/song/media/outer/url?id=1374056689.mp3',
      cover: 'http://p2.music.126.net/DHUrNjC-1d6Snpcfg20Umw==/109951164583315133.jpg',
    },
    {
      name: 'Lemon',
      artist: '米津玄师',
      url: '/music/Lemon - 米津玄師.flac',
      cover: 'http://p2.music.126.net/jtPZRUFrSS-nRCjW_LYowQ==/109951166521931227.jpg',   
    },
    {
      name: '所念皆星河',
      artist: '房东的猫',
      url: '/music/房东的猫 - 所念皆星河.flac',
      cover: 'http://p2.music.126.net/JtevaRk1N7ecpmwZCIvwzQ==/109951165293262893.jpg',
    },
    {
      name: '那些你很冒险的梦',
      artist: '林俊杰',
      url: '/music/林俊杰 - 那些你很冒险的梦.flac',
      cover: 'http://p2.music.126.net/1xByYChHOHC0IEg_TkyGOg==/109951165627866740.jpg',
    },
    {
      name: '关键词',
      artist: '林俊杰',
      url: '/music/林俊杰 - 关键词.flac',
      cover: 'http://p1.music.126.net/CKcTyKux_UTt0sO_5VWR9w==/16561943649388272.jpg',
    },
    {
      name: '交换余生',
      artist: '林俊杰',
      url: '/music/林俊杰 - 交换余生.flac',
      cover: 'http://p1.music.126.net/4WuOpPZeK7hH8bqn28G-Dg==/109951165315490238.jpg',
    },
    {
      name: '起风了',
      artist: '吴青峰',
      url: 'http://music.163.com/song/media/outer/url?id=1338695683.mp3',
      cover: 'http://p2.music.126.net/aMVPsO00OqlVTS2yMH8RgA==/109951163785600029.jpg',
    },
    {
      name: '阿拉斯加海湾',
      artist: '蓝心羽',
      url: '/music/蓝心羽 - 阿拉斯加海湾.flac',
      cover: 'http://p2.music.126.net/CbWwREaA22LmAv1oOtJt2w==/109951165518862422.jpg',
    },
    {
      name: '可',
      artist: '薛之谦/张靓颖',
      url: 'http://music.163.com/song/media/outer/url?id=1954420092.mp3',
      cover: 'http://p1.music.126.net/71lWKKX2Lv2PTFJpy2mVUg==/109951167527804392.jpg',
    },
    {
      name: 'LOSER',
      artist: '米津玄师',
      url: 'http://music.163.com/song/media/outer/url?id=512359195.mp3',
      cover: 'http://p2.music.126.net/IeyCexR3Hg9NnVY9TDCD3w==/109951166530781958.jpg',
    },
    {
      name: '有幸',
      artist: '赵砚卿',
      url: '/music/有幸 - 赵砚卿.flac',
      cover: 'http://p2.music.126.net/RdxQ7Y2R9Iurtq8UrVnGBQ==/109951164269550591.jpg',
    },
    {
      name: '打上花火',
      artist: 'Daoko / 米津玄師',
      url: '/music/打上花火 - Daoko,米津玄師.flac',
      cover: 'http://p2.music.126.net/ZUCE_1Tl_hkbtamKmSNXEg==/109951163009282836.jpg'
    },
    {
      name: '恋愛サーキュレーション',
      artist: '花澤香菜',
      url: '/music/恋愛サーキュレーション - 花澤香菜.flac',
      cover: 'http://p2.music.126.net/wImDxYDsJcWDIH9znDhEPA==/109951165561008752.jpg?param=130y130'
    },
    {
      name: '疑心病',
      artist: '任然',
      url: '/music/疑心病 - 任然.flac',
      cover: 'http://p2.music.126.net/L8SZ53Nf5le4JDvG6qVB6g==/1424967072083597.jpg',   
    },
    {
      name: '修炼爱情',
      artist: '林俊杰',
      url: '/music/修炼爱情 - 林俊杰.flac',
      cover: 'http://p2.music.126.net/D_hiKMwrdQlqD36LoKLO2w==/109951163187408030.jpg',   
    },
    {
      name: '飛行艇',
      artist: 'King Gnu',
      url: '/music/飛行艇 - King Gnu.mp3',
      cover: 'http://p1.music.126.net/2AXIYZc6R3uNuh8_iPq9vQ==/109951165048672640.jpg',   
    },
    {
      name: '无人之岛',
      artist: '任然',
      url: '/music/任然 - 无人之岛.flac',
      cover: 'http://p1.music.126.net/mIUtHBPTJ52H78_FhHzcWg==/19188676928210304.jpg',   
    },
    {
      name: 'unravel',
      artist: '凛として時雨',
      url: '/music/unravel - TK from 凛として時雨.mp3',
      cover: 'http://p1.music.126.net/9dRhDO4gjN0_KgTjPafIrw==/109951163316078250.jpg',   
    },
    {
      name: '银河与星斗',
      artist: 'yihuik苡慧',
      url: '/music/yihuik苡慧 - 银河与星斗.flac',
      cover: 'http://p2.music.126.net/4fGSYK5S1SskrZjkyCJfJw==/109951166035185227.jpg',   
    },
    {
      name: 'Not Angry',
      artist: 'Chris James',
      url: '/music/Not Angry - Chris James.flac',
      cover: 'http://p2.music.126.net/8u9G6-hnZZV3HFZxU7RqHw==/109951165528742706.jpg',
    },
    {
      name: '星茶会',
      artist: '灰澈',
      url: '/music/灰澈 - 星茶会.mp3',
      cover: 'http://p1.music.126.net/4uar7szJc5_yhJ_LLymxHA==/109951162981239981.jpg',
    }
  ]
});