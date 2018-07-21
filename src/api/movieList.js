// ES6创建一个类
// JAVA中习惯首字母大写这个和构造函数类似
let Base64 = require('js-base64').Base64

export default class Movie{
    // 类的参数需要constructor
    constructor({ id , title, director, casts, collectCount, rating, image, data, pubdates, subtype , photo}){
        this.id=id;//id 号
        this.title=title;//标题
        this.director = director; //导演
        this.casts = casts;//主演
        this.collectCount = collectCount || 0; //看过的人数
        this.rating  = rating;    //评分
        this.image = image;       //图片
        this.data = data ||"";    //时间戳
        this.pubdates = pubdates ||'';
        this.subtype = subtype ||'';
        this.photo = photo //获得高清图片
    }
}



// 创建包含电影类的通用电影信息列表
export function createMovieList(movieList){
    let ret = [];
    //movieList = res.subjects
    movieList.forEach((movie,index)=>{
        ret.push(new Movie({
            id: movie.id,
            title: movie.title,
            director: filterDirector(movie.directors),
            casts: filterCasts(movie.casts),
            collectCount: movie.collect_count,
            rating: movie.rating.average,
            image: movie.images.large,
            date: filterDate(movie.mainland_pubdate, movie.pubdates), // 该条目只用于首页热映电影和即将上映电影
            pubdates: movie.pubdates,
            photo:filterPhoto(movie.images.large)//获得高清图片
        }))
    })
    // console.dir(ret)
    return ret;
}
// 获取主导演
function filterDirector(directors){
    return directors.length ? directors[0].name : '';
}
// 获得高清图片
function filterPhoto(imgStr) {
    const baseImgUrl = 'https://images.weserv.nl/?url=img3.doubanio.com/view/photo/m/public/'
    
    let reg=/p\d+.jpg/g;
        imgStr.replace(reg,function(des,value){
            imgStr = des.slice(0,-4)
        });
    return `${baseImgUrl}${imgStr}.jpg`

}
// 演员信息
function filterCasts(casts){
    let ret = '';
    casts.forEach((item,index)=>{
        if (index < casts.length - 1) {
            ret += `${item.name}/`;
        } else {
            ret += item.name;
        }
    })
    return ret
}
// 过时间
function filterDate(date, pubdates) {
  // 在上映电影列表中出现重映电影的情况
  if (new Date().getTime() > new Date(date).getTime()) { // 如果是重映电影
    // 判断该重映电影是否为待定日期
    let reg = /^\d{4}[-]\d{2}[-]\d{2}/;
    for (let i = 0; i < pubdates.length; i++) {
      // 如果重映电影的日期数据完整，不需要待定显示
      if (pubdates[i].indexOf('中国大陆重映') !== -1 && reg.test(pubdates[i])) {
        return normalizeDate(pubdates[i].match(reg)[0]);
      }
    }
    return findShowTime(pubdates, '中国大陆重映');
  }
  if (!date) { // 电影时间不确定，数据为空返回了undefined
    return findShowTime(pubdates, '中国大陆');
  }
  return normalizeDate(date);
};

// 获取电影上映的待定时间
function findShowTime(pubdates, key) { // 获取待定的月份或年份
  let month = '';
  let year = '';
  pubdates.forEach((item) => {
    let index = item.indexOf(key);
    if (index > -1) {
      if (!item.split('-')[1]) { // 不存在月份信息
        year = item.split('-')[0].substr(0, 4);
      } else {
        month = (item.split('-'))[1].substr(0, 2);
        if (month.substr(0, 1) === '0') { // 月份去零
          month = month.substr(1, 1);
        }
      }
    }
  });
  if (!month) {
    return `${year}年待定`;
  }
  return `${month}月待定`;
}

// 判断是否需要显示年份
function needYear(date) {
  return parseInt(new Date(date).getFullYear()) > parseInt(new Date().getFullYear());
}
// 格式化日期
function normalizeDate(date) {
  const week = ['星期日', '星期一', '星期二', '星期三', '星期四', '星期五', '星期六'];
  let currentWeek = week[new Date(date).getDay()]; // 获取当天星期
  let time = `${date.split('-')[1]}月${date.split('-')[2]}日`;
  if (time.substr(0, 1) === '0') { // 月份去零
    time = time.substr(1);
  }
  let ret = time + ' ' + currentWeek;
  if (needYear(date)) { // 如果不是本年度电影
    return `${date.split('-')[0]}年${ret}`;
  }
  return ret;
}
