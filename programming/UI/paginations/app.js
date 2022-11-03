"use strict";
const container = document.getElementById("root");
const ajax = new XMLHttpRequest();
const NEWS_URL = "https://api.hnpwa.com/v0/news/1.json";
const CONTENT_URL = "https://api.hnpwa.com/v0/item/@id.json";
const store = {
  currentPage: 1,
  data: [],
};


function getData(url){
    ajax.open('GET', url, false)
    ajax.send()
    return JSON.parse(ajax.response)
}

function getList() {
  const newsList = [];
  let template = `
    <div class="bg-gray-600 min-h-screen">
      <div class="bg-white text-xl">
        <div class="mx-auto px-4">
          <div class="flex justify-between items-center py-6">
            <div class="flex justify-start">
              <h1 class="font-extrabold">Hacker News</h1>
            </div>
            <div class="items-center justify-end">
              <a href="#/page/{{__prev_page__}}" class="text-gray-500">
                Previous
              </a>
              <a href="#/page/{{__next_page__}}" class="text-gray-500 ml-4">
                Next
              </a>
            </div>
          </div> 
        </div>
      </div>
      <div class="p-4 text-2xl text-gray-700">
        {{__news_feed__}}        
      </div>
    </div>
  `;
  if (newsList.length === 0) {
    store.data = getData(NEWS_URL);
  }
  console.log(store);
  const data = store.data;

  for (let i = store.currentPage - 1; i < 30; i++) {
    newsList.push(`
    <div class="p-6 bg-white mt-6 rounded-lg shadow-md transition-colors duration-500 hover:bg-green-100">
        <div class="flex">
          <div class="flex-auto">
            <a href="#/show/${data[i].id}">${data[i].title}</a>  
          </div>
          <div class="text-center text-sm">
            <div class="w-10 text-white bg-green-300 rounded-lg px-0 py-2">${data[i].comments_count}</div>
          </div>
        </div>
        <div class="flex mt-3">
          <div class="grid grid-cols-3 text-sm text-gray-500">
            <div><i class="fas fa-user mr-1"></i>${data[i].user}</div>
            <div><i class="fas fa-heart mr-1"></i>${data[i].points}</div>
            <div><i class="far fa-clock mr-1"></i>${data[i].time_ago}</div>
          </div>  
        </div>
      </div>    
    `);
  }

  //   template = newsList.join('')
  template = template.replace("{{__news_feed__}}", newsList.join("")); //news_feed란 자리에 newsList를 넣는다~
  template = template.replace("{{__next_page__}}", store.currentPage + 1); //nextpage => haschange event
//   template = template.replace(
//     "{{__prev_page__}}",
//     store.currentPage === 1 ? 1 : store.currentPage - 1
//   ); //이거는 -1을 url에 입력할경우 가드 불가
  template = template.replace("{{__prev_page__}}",store.currentPage > 1 ? store.currentPage - 1 : 1);
  container.innerHTML = template;
}



function router() {
  const routePath = location.hash;

  if (routePath === "") {
    getList();
  } else if (routePath.indexOf("#/page/") >= 0) {
    //하나도 안포함한다 => false:-1
    store.currentPage = parseInt(routePath.substring(7));
    getList();
  }
}
window.addEventListener("hashchange", router);
router();