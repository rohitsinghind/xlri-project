let x = 9;

const fetchUsers = async ()=>{
  await  fetch("https://xlri.edu/api/xol/sample").then((response) => response.json())
  .then((data) => {
    console.log(data?.data)
  data?.data?.filter((item, idx) => idx < x).map((e)=>{
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

loadMoreButton.addEventListener('click',()=>{
  x+=9;
 fetchUsers();
})

fetchUsers();