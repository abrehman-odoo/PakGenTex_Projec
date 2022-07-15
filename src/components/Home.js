import React from "react";
import Bar from "./Bar";
import Footer from "./Footer";
import Team from './Team'

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
          <h5>Need of Building Pakistan Gender Text (PakGenText)</h5>
          <p>Human language is not static and uniform; but keeps on evolving with the passage of time. In consequence, language variation gradually develops due to a number of social variables. One of the most significant social variables is gender. Gender plays a significant role in generating language variation between men and women. In Pakistan, no such corpus has been developed so far which can distinctly focus on the language used by men and women. There is a dire need to develop a corpus by employing modern methods to develop and maintain corpus. So, this research project aims to develop a corpus (PakGenText) which will not only distinguish the use of language in different genre but also focuses on gender based language use in different genre. This corpus may also be used in various research paradigms like Gender Studies, Education, Sociology, Psychology, inter-Cultural Communication, Linguistics, Literature, English Language Teaching etc.  To meet the international criteria of education and research, this project will pave its ways in building positive international image of Pakistan in academic discourse community and professional industry. Keeping in view the modern trends and needs of learners, this research focused on the practical implications of online corpora for ELT and its utility in the Pakistani context (Zahra & Abbas, 2018). At international level, teams of professionals and experts are working in building corpora like British National Corpus, American National Corpus, and Michigan Corpus of Academic Spoken English. Some of them are updated on monthly basis.</p>
         <h5>For Citation</h5>
         <p>Shehzad,W and Zahra, T (2019, Ongoing research project), Pakistan Gender Text (PakGenText), Funded by Higher Education Commission Pakistan. </p>
        <Team/>
        </div>
        <div className="table-responsive">
          <table class="table">
            <thead style={{ backgroundColor: "#cfdfef" }}>
              <tr>
                <th scope="col">Thesis</th>
                <th scope="col">Sub Branches</th>
                <th scope="col">Male</th>
                <th scope="col">Female</th>
                <th scope="col">Total</th>
              </tr>
            </thead>
            <tbody>
              {/* 1st */}
              <tr>
                <th
                  scope="row"
                  rowSpan={4}
                  style={{ alignItems: "center", verticalAlign: "middle" }}
                >
                  <a href="https://firebasestorage.googleapis.com/v0/b/joiingmandarin.appspot.com/o/pakgentex%2FSocial%20Sciences.zip?alt=media&token=94b6aee9-e3d7-4be8-ad32-cd596c5106ad"
                  target={"_blank"}>Social Sciences</a>
                </th>
                <td>Education</td>
                <td>74231</td>
                <td>39643</td>
                <td>113874</td>
              </tr>
              <tr>
                <td>Political Science</td>
                <td>148021</td>
                <td>163562</td>
                <td>311583</td>
              </tr>
              <tr>
                <td>Psychology</td>
                <td>29343</td>
                <td>88643</td>
                <td>117986</td>
              </tr>
              <tr>
                <td>Sociology</td>
                <td>162896</td>
                <td>154786</td>
                <td>317682</td>
              </tr>
              {/* 2nd */}

              <tr>
                <th
                  scope="row"
                  rowSpan={2}
                  style={{ alignItems: "center", verticalAlign: "middle" }}
                >
                  <a href="https://firebasestorage.googleapis.com/v0/b/joiingmandarin.appspot.com/o/pakgentex%2FPhysical%20Sciences.zip?alt=media&token=21ca8542-35b5-43d7-a87d-d68623f0e29c"
                  target={"_blank"}>
                  Physical Sciences
                  </a>
                </th>
                <td>Chemistry</td>
                <td>11642</td>
                <td>81630</td>
                <td>93272</td>
              </tr>
              <tr>
                <td>Physics</td>
                <td>93550</td>
                <td></td>
                <td>93550</td>
              </tr>
              {/* 3rd */}
              <tr>
                <th
                  scope="row"
                  rowSpan={3}
                  style={{ alignItems: "center", verticalAlign: "middle" }}
                >
                  <a href="https://firebasestorage.googleapis.com/v0/b/joiingmandarin.appspot.com/o/pakgentex%2FNatural%20Sciences.zip?alt=media&token=28516596-2a96-40cd-88db-5d0c62e93ac0"
                  target={"_blank"}>
                  Natural Sciences
                  </a>
                </th>
                <td>Biotechnology</td>
                <td>95567+94009</td>
                <td>21836+56763</td>
                <td>268175</td>
              </tr>
              <tr>
                <td>Botanical Sciences</td>
                <td>61395</td>
                <td>107018</td>
                <td>168413</td>
              </tr>
              <tr>
                <td>Zoological Sciences</td>
                <td>49445</td>
                <td>105695</td>
                <td>155140</td>
              </tr>

              {/* 4th */}
              <tr>
                <th
                  scope="row"
                  style={{ alignItems: "center", verticalAlign: "middle" , color:'red'}}
                >
                  <a href="https://firebasestorage.googleapis.com/v0/b/joiingmandarin.appspot.com/o/pakgentex%2FLiterature.zip?alt=media&token=d40d64fd-a7a7-46b1-82e4-37dc3a1774ff"
                  target={"_blank"}>
                  Literature
                  </a>
                </th>
                <td></td>
                <td style={{color:'red'}}> 293092
+22889
</td>
                <td style={{color:'red'}}>66939</td>
                <td style={{color:'red'}}>382920</td>
              </tr>

              <tr>
                <th
                  scope="row"
                  style={{ alignItems: "center", verticalAlign: "middle" }}
                >
                  <a href="https://firebasestorage.googleapis.com/v0/b/joiingmandarin.appspot.com/o/pakgentex%2FLinguistics.zip?alt=media&token=d7ea360c-eafb-42d7-a6b1-3252eb833975"
                  target={"_blank"}>
                  Linguistics
                  </a>
                </th>
                <td></td>
                <td> 259110</td>
                <td>49648 </td>
                <td>308758</td>
              </tr>

              <tr>
                <th
                  scope="row"
                  style={{ alignItems: "center", verticalAlign: "middle" }}
                >
                  <a href="https://firebasestorage.googleapis.com/v0/b/joiingmandarin.appspot.com/o/pakgentex%2FLanguages.zip?alt=media&token=b1a44c2f-40d2-470e-aa89-f2c57713cb73"
                  target={"_blank"}>
                  Languages
                  </a>
                </th>
                <td></td>
                <td>208847</td>
                <td>
                228912{" "}
                </td>
                <td>437759</td>
              </tr>

              <tr>
                <th
                  scope="row"
                  style={{ alignItems: "center", verticalAlign: "middle" }}
                >
                  <a href="https://firebasestorage.googleapis.com/v0/b/joiingmandarin.appspot.com/o/pakgentex%2FHealth%20Sciences.zip?alt=media&token=390e275f-de50-41ad-8dc9-fbb0ec4ff69b"
                  target={"_blank"}>
                  Health Sciences
                  </a>
                </th>
                <td></td>
                <td>172113</td>
                <td> 134894 </td>
                <td>307007</td>
              </tr>

              <tr>
                <th
                  scope="row"
                  style={{ alignItems: "center", verticalAlign: "middle" }}
                >
                  <a href="https://firebasestorage.googleapis.com/v0/b/joiingmandarin.appspot.com/o/pakgentex%2FEngineering%20Technology.zip?alt=media&token=0100b5e9-db06-43d7-bcbc-7bf8a81c3bcf"
                  target={"_blank"}>
                  Engineering And Technology
                  </a>
                </th>
                <td></td>
                <td> 369500</td>
                <td>54444</td>
                <td>423944</td>
              </tr>

              <tr>
                <th
                  scope="row"
                  style={{ alignItems: "center", verticalAlign: "middle" }}
                >
                  <a href="https://firebasestorage.googleapis.com/v0/b/joiingmandarin.appspot.com/o/pakgentex%2FEnglish%20Language%20Teaching.zip?alt=media&token=77884648-fed5-4280-8382-dae58d3f296f"
                  target={"_blank"}>
                  English Language Teaching
                  </a>
                </th>
                <td></td>
                <td>185248</td>
                <td>33224</td>
                <td>218472</td>
              </tr>
              <tr>
                <th
                  scope="row"
                  style={{ alignItems: "center", verticalAlign: "middle"}}
                >
                  <span style={{backgroundColor:'yellow'}} className="p-2 px-4">

                  Total
                  </span>
                </th>
                <td></td>
                <td></td>
                <td></td>
                <td style={{backgroundColor:'yellow'}} className="px-3"> 3718535</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <br/>
      <Footer/>
    </div>
  );
}
