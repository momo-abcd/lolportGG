function paging(totalData, dataPerPage, pageCount, currentPage){

  let totalPage = Math.ceil(totalData/dataPerPage);
  let pageGroup = Math.ceil(currentPage/pageCount);

  console.log("pageGroup : " + pageGroup);

  let last = pageGroup * pageCount;
  let first
  if (last > totalPage){
    last = totalPage;
     first = last - (pageCount-1)+1;
  }else{
     first = last - (pageCount-1);
  }

  let next = last+1;
  let prev = first-1;

  console.log("last : " + last);
  console.log("first : " + first);
  console.log("next : " + next);
  console.log("prev : " + prev);

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

