
// function getNews(catagory,page){
//     const api = "pub_30647f724fbb0578f2d139ef3b083afedbde"
//     fetch("https://newsdata.io/api/1/news?apikey="+api+"&language=en&category="+catagory+"&page="+page).then((response)=>{
//         return response.json();
//     }).then((data)=>{}
// }

const arr=[1,2,3,3]

const fetchUsers = async ()=>{
  await  fetch("https://xlri.edu/api/xol/sample").then((response) => response.json())
  .then((data) => {
    console.log(data?.data)
  data?.data?.map((e)=>{
    document.getElementById('studentsBox').innerHTML += "<div class='studentCard'>"+
    "<img class='studentImg' src='https://xlri.edu/images/xol-2022/"+e?.sid+".jpg' alt=''>"+
    "<div class='studentdetails'>"+
        "<div class='studentName'>"+e?.name+"</div>"+
        "<div class='studentEmail'>"+e?.email+"</div>"+
        "<a href="+e?.linkedin_profile+">"+"<img class='studentLink' src='https://cdn-icons-png.flaticon.com/512/174/174857.png' alt=''>"+"</a>"+
    "</div>"+
"</div>"
  })
}
  );
}

fetchUsers();