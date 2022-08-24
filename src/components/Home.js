import React from "react";
import Bar from "./Bar";
import Footer from "./Footer";
import Team from './Team'
import About from '../pages/About'

export default function Home() {
  return (
    <div style={{ backgroundColor: "#cccccc", height: "100%" }}>
      <div className="container" style={{ backgroundColor: "white" }}>
        <Bar />
        <br/>
        <br/>
        {/* <div className="py-4 px-2">
          Laravel Livewire is a library that makes it simple to build modern,
          reactive, dynamic interfaces using Laravel Blade as your ternplating
          language.Migration uses to create database in tablecreate custom user
          by moving in fortify Laravel Livewire is a library that makes it
          simple to build modern, reactive, dynamic interfaces using Laravel
          Blade as your Wmplating language.Migration uses to create database in
          tablecreate custom user by moving in fortify Laravel Livewire is a
          library that makes it simple to build modern, reactive, dynamic
          interfaces using Laravel Blade as your templating language.
        </div> */}
        <div className="container">
          <h5>Introduction</h5>
          <p>
          There is a plethora of researches conducted on various issues related to social sciences by using corpus based approaches. The variations in language used by men and women have intrigued the scholars since long. However the utilization of corpus-based techniques for such research is infrequent especially in Pakistan. After the advent of the concept of World Englishes, corpora are developed to show the identity of different countries, individuals, regions and areas of the world. Likewise English spoken and written in Pakistan is different from the English language used in various countries/areas of the world. There is not only the worldwide differences in spoken and written discourses, researches show that language used by men and women is also different.
 
 The increasing availability of large annotated data on written and spoken languages has triggered the interests of corpus linguists in exploring various issues related to society and language such as exploring culture, religion and identity through language used by men and women. There are many online corpora available such as British National Corpus, American National Corpus, Michigan Corpus of Academic Spoken English, British National Corpus-14, Asian Corpus of English and Pakistan National Corpus of English. However, gender is one of the variables of few of the corpora available online but there is a scarcity of corpora available on the language used by men and women in Pakistan. This project is an effort to determine the various features and issues raised through language used by Pakistani men and women in both written and spoken discourses. 
          </p>
          <About/>
          <Team/>
        </div>
      </div>
      <br/>
      <Footer/>
    </div>
  );
}
