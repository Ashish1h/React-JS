import React from 'react'

import Card from './components/card'

 
const App = () => {


  const jobs = [
  {
    brandlogo: "https://tse4.mm.bing.net/th/id/OIP.aoNGSVIqKHtM-NWf3QrvdwHaHa?rs=1&pid=ImgDetMain&o=7&rm=3",
    company: "Google",
    datePosted: "5 days ago",
    post: "Frontend Developer",
    tag1: "Full Time",
    tag2: "Junior Level",
    pay: "$45/hr",
    location: "Mumbai, India"
  },
  {
    brandlogo: "https://tse2.mm.bing.net/th/id/OIP.UwiBKJmZzP0ZWEMCpNhInQHaHa?w=600&h=600&rs=1&pid=ImgDetMain&o=7&rm=3",
    company: "Apple",
    datePosted: "2 weeks ago",
    post: "iOS Developer",
    tag1: "Full Time",
    tag2: "Senior Level",
    pay: "$60/hr",
    location: "Mumbai, India"
  },
  {
    brandlogo: "https://brandemia.org/contenido/subidas/2022/11/tipografia-y-paleta-de-color.png",
    company: "Amazon",
    datePosted: "10 days ago",
    post: "Backend Engineer",
    tag1: "Part Time",
    tag2: "Junior Level",
    pay: "$40/hr",
    location: "Mumbai, India"
  },
  {
    brandlogo: "https://tse1.mm.bing.net/th/id/OIP.N1GrvXlrCBYRjuPKChowigHaEK?rs=1&pid=ImgDetMain&o=7&rm=3",
    company: "Meta",
    datePosted: "3 weeks ago",
    post: "React Developer",
    tag1: "Full Time",
    tag2: "Senior Level",
    pay: "$55/hr",
    location: "Mumbai, India"
  },
  {
    brandlogo: "https://vignette2.wikia.nocookie.net/logopedia/images/b/b2/NetflixIcon2016.jpg/revision/latest/scale-to-width-down/2000?cb=20160620223003",
    company: "Netflix",
    datePosted: "1 week ago",
    post: "UI Engineer",
    tag1: "Part Time",
    tag2: "Senior Level",
    pay: "$65/hr",
    location: "Mumbai, India"
  },
  {
    brandlogo: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Microsoft_logo.svg/1024px-Microsoft_logo.svg.png?20210729021049",
    company: "Microsoft",
    datePosted: "4 days ago",
    post: "Cloud Engineer",
    tag1: "Full Time",
    tag2: "Junior Level",
    pay: "$50/hr",
    location: "Mumbai, India"
  },
  {
    brandlogo: "https://logodix.com/logo/80061.jpg",
    company: "Adobe",
    datePosted: "6 days ago",
    post: "UX Designer",
    tag1: "Full Time",
    tag2: "Senior Level",
    pay: "$48/hr",
    location: "Mumbai, India"
  },
  {
    brandlogo: "https://tse4.mm.bing.net/th/id/OIP.nhgxWKii6qWlvJDWWlhMdAHaHk?rs=1&pid=ImgDetMain&o=7&rm=3",
    company: "Salesforce",
    datePosted: "2 days ago",
    post: "CRM Developer",
    tag1: "Part Time",
    tag2: "Junior Level",
    pay: "$42/hr",
    location: "Mumbai, India"
  },
  {
    brandlogo: "https://static.vecteezy.com/system/resources/previews/020/190/499/original/nvidia-logo-nvidia-icon-free-free-vector.jpg",
    company: "NVIDIA",
    datePosted: "9 days ago",
    post: "AI Engineer",
    tag1: "Full Time",
    tag2: "Senior Level",
    pay: "$70/hr",
    location: "Mumbai, India"
  },
  {
    brandlogo: "https://logodownload.org/wp-content/uploads/2015/05/uber-logo-1-1.png",
    company: "Uber",
    datePosted: "12 days ago",
    post: "Mobile App Developer",
    tag1: "Full Time",
    tag2: "Junior Level",
    pay: "$38/hr",
    location: "Mumbai, India"
  }
];

console.log(jobs);

  return (
    <div className="parent">
      {jobs.map(function(elem){
        return <Card bandlogo={elem.brandlogo} company={elem.company} post={elem.post} datePosted={elem.datePosted} tag1={elem.tag1} tag2={elem.tag2} pay={elem.pay} location={elem.location}/>
      })}
      

    </div>
  )
}
export default App

