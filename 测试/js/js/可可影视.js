var rule = {
    作者:'陈木匠',
title:'可可影视',
    host:'https://www.keke4.app/',
       url:'/show/fyclass-----3-fypage.html',
     searchUrl: '/search?os=pc&k=**',
headers:{        'User-Agent':'MOBILE_UA' , "Cookie": "searchneed=ok" },
    searchable: 2,//是否启用全局搜索,
            quickSearch: 1,//是否启用快速搜索,
            filterable: 1,//是否启用分类筛选,
                  推荐: '.module-box-inner&&.module-item;.v-item-title&&Text;img&&data-original;.v-item-bottom&&Text;a&&href',
      class_name:'电影&电视剧&动漫&综艺',
              class_url:'1&2&3&4',

  limit:18,
    play_parse:true,
    lazy:'',
    一级:'.module-box-inner&&.module-item;.v-item-title&&Text;img&&data-original;.v-item-bottom&&Text;a&&href',
     二级: {
                "title": ".detail-title&&Text;",
                "img": ".lazy&&data-original",
                "desc": ".detail-info-row-main:eq(1)&&Text;.detail-info-row-main:eq(2)&&Text;.detail-info-row-side:eq(3)&&Text",
                "content": ".detail-desc&&Text",
                "tabs": "#detail-source-swiper&&.source-item-label",
                 "lists": ".episode-box-main&&.episode-list:eq(#id) a"
            },


搜索: '.search-result-list;.lazy&&title;img&&data-original;.tags&&Text;a&&href',
  }