  var totalData = 1000;    // 총 데이터 수
  var dataPerPage = 20;    // 한 페이지에 나타낼 데이터 수
  var pageCount = 10;
function paging(totalData, dataPerPage, pageCount, currentPage){

  let totalPage = Math.ceil(totalData/dataPerPage);
  let pageGroup = Math.ceil(currentPage/pageCount);

  console.log("pageGroup : " + pageGroup);

  let last = pageGroup * pageCount;
  if (last > totalPage)
    last = totalPage;
  let first = last - (pageCount-1);
  let next = last+1;
  let prev = first-1;

  console.log("last : " + last);
  console.log("first : " + first);
  console.log("next : " + next);
  console.log("prev : " + prev);

  let $pingingView = $("#paging");
  let html = "";

  for(let i=first;i <= last; i++){
    html += "<a herf='#' id=" + i + ">" + i + "</a>";
  }
  $("#paging").html(html);
}

$("document").ready(function(){
    paging(totalData,dataPerPage,pageCount,1);
    });

