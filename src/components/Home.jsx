 // Flux clone
 import '../App.css'
 import Countries from './Countries'
 import Article from './Article'
 import Partners from './Partners'
 import Cards from './Cards'
 import Send from './Send'
 import Spend from './Spend'
 import Bank from './Bank'
 import Started from './Started'
 import Banner from './Banner'
 import Faq from './Faq'
 import Featured from './Featured'

 function Home() {

   return (
     <div  id='Home'>
       <Article />
       <Countries />
       <Partners />
       <Cards />
       <Send />
       <Spend />
       <Bank />
       <Started />
       <Banner />
       <Faq />
       <Featured />
     </div>
   )
 }

 export default Home
