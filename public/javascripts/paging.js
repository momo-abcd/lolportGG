function paging(totalData, dataPerPage, pageCount, currentPage){

  let totalPage = Math.ceil(totalData/dataPerPage);
  if(totalPage < currentPage){
    currentPage = totalPage;
  }
  //console.log("현재 페이지 인덱스 :", currentPage);
  let pageGroup = Math.ceil(currentPage/pageCount);

  // console.log("pageGroup : " + pageGroup);
  // console.log("totalData : " + totalData);
  // console.log("totalPage : " + totalPage);


let first,last,next,prev;
if(currentPage < 6 && totalPage < 6){
    last = totalPage;
    first = 1;
    prev = 0;
    next = 0;
}else if(currentPage < 6){
    last = 5;
    first = 1;
    prev = 0;
    next = 6;
}else {
    last = pageGroup * pageCount;
        // if (last > totalPage) {
        //     last = totalPage;
        //     // first = last - (pageCount - 1) + 1;
        //     first = (pageGroup*pageCount) - (pageGroup * pageCount - last)-1;
        // } else {
        //     first = last - (pageCount - 1);
        // }
        if(last == totalPage) {
          first = last -4;
          prev = first-1;
          next = last+1;
        }else {
          first = last -4;
          prev = first-1;
          // last = (pageGroup*pageCount) - (pageGroup * pageCount)
          last = pageGroup*pageCount;
        }
}

    next = last + 1;
    prev = first - 1;


  // console.log("last : " + last);
  // console.log("first : " + first);
  // console.log("next : " + next);
  // console.log("prev : " + prev);

  let $pingingView = $("#paging");
  let html = "";
  if(prev > 0)
    html += "<li class='page-item'><a class='page-link' href='/bbs/feedback?id=" + prev  + "'>◀</a></li>"


  for(let i=first;i <= last; i++){
    if(currentPage == i){
    html += "<li class='page-item active'><a class='page-link' href='/bbs/feedback?id=" + i  + "'>" + i + "</a></li>"
    }else{
    html += "<li class='page-item'><a class='page-link' href='/bbs/feedback?id=" + i  + "'>" + i + "</a></li>"
    }
  }
  if(last < totalPage)
    html += "<li class='page-item'><a class='page-link' href='/bbs/feedback?id=" + next  + "'>▶</a></li>"
  $(".pagination").html(html);
}

