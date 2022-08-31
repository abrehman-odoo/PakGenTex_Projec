import React from "react";
import Bar from "../components/Bar";

export default function Resource() {
  return (
    <div>
      <Bar />
      <br />
      <div className="table-responsive">
        <table class="table">
          <thead style={{ backgroundColor: "#cfdfef" }}>
            <tr>
              <th scope="col" className="text-center" colSpan={3}>
                TEXT
              </th>
              <th scope="col" className="text-center" colSpan={3}>
                WRITTEN
              </th>
              <th></th>
              {/* <th scope="col">Thesis</th>
          <th scope="col">Sub Branches</th>
          <th scope="col">Male</th>
          <th scope="col">Female</th>
          <th scope="col">Total</th> */}
            </tr>
          </thead>
          <tbody>
            {/* 1st */}
            <tr>
              <th className="text-center" colSpan={2}>
                Type Of Discourse
              </th>
              <th className="text-center" colSpan={4}>
                Academic
              </th>
            </tr>

            <tr>
              <th colSpan={6} className="text-center">
                Phd Thesis
              </th>
            </tr>

            <tr>
              <th colSpan={1} className="text-center">
                Area
              </th>
              <th colSpan={1}>Discipline</th>
              <th colSpan={4} className="text-center">
                Word Count
              </th>
            </tr>

            <tr>
              <th
                scope="row"
                className="text-center"
                rowSpan={5}
                style={{ alignItems: "center", verticalAlign: "middle" }}
              >
                <a
                  href="https://firebasestorage.googleapis.com/v0/b/joiingmandarin.appspot.com/o/pakgentex%2FSocial%20Sciences.zip?alt=media&token=94b6aee9-e3d7-4be8-ad32-cd596c5106ad"
                  target={"_blank"}
                >
                  Social Sciences
                </a>
              </th>
              <td></td>
              <th>Male</th>
              <th>Female</th>
              <th>Total</th>
              <td></td>
            </tr>

            <tr>
              <td>Education</td>
              <td>74231</td>
              <td>39643</td>
              <td>113874</td>
              <td></td>
            </tr>

            <tr>
              <td>Political Science</td>
              <td>148021</td>
              <td>163562</td>
              <td>311583</td>
              <td></td>
            </tr>
            <tr>
              <td>Psychology</td>
              <td>29343</td>
              <td>88643</td>
              <td>117986</td>
              <td></td>
            </tr>
            <tr >
              <td>Sociology</td>
              <td>162896</td>
              <td>154786</td>
              <td>317682</td>
              <td></td>
            </tr>
            {/* 2nd */}

            <tr>
              <th
                className="text-center"
                scope="row"
                rowSpan={2}
                style={{ alignItems: "center", verticalAlign: "middle" }}
              >
                <a
                  href="https://firebasestorage.googleapis.com/v0/b/joiingmandarin.appspot.com/o/pakgentex%2FPhysical%20Sciences.zip?alt=media&token=21ca8542-35b5-43d7-a87d-d68623f0e29c"
                  target={"_blank"}
                >
                  Physical Sciences
                </a>
              </th>
              <td>Chemistry</td>
              <td>11642</td>
              <td>81630</td>
              <td>93272</td>
              <td></td>
            </tr>
            <tr>
              <td>Physics</td>
              <td>93550</td>
              <td></td>
              <td>93550</td>
              <td></td>
            </tr>
            {/* 3rd */}
            <tr>
              <th
                className="text-center"
                scope="row"
                rowSpan={3}
                style={{ alignItems: "center", verticalAlign: "middle" }}
              >
                <a
                  href="https://firebasestorage.googleapis.com/v0/b/joiingmandarin.appspot.com/o/pakgentex%2FNatural%20Sciences.zip?alt=media&token=28516596-2a96-40cd-88db-5d0c62e93ac0"
                  target={"_blank"}
                >
                  Natural Sciences
                </a>
              </th>
              <td>Biotechnology</td>
              <td>95567+94009</td>
              <td>21836+56763</td>
              <td>268175</td>
              <td></td>
            </tr>
            <tr>
              <td>Botanical Sciences</td>
              <td>61395</td>
              <td>107018</td>
              <td>168413</td>
              <td></td>
            </tr>
            <tr>
              <td>Zoological Sciences</td>
              <td>49445</td>
              <td>105695</td>
              <td>155140</td>
              <td></td>
            </tr>

            {/* 4th */}
            <tr>
              <th
                className="text-center"
                scope="row"
                style={{
                  alignItems: "center",
                  verticalAlign: "middle",
                  color: "red",
                }}
              >
                <a
                  href="https://firebasestorage.googleapis.com/v0/b/joiingmandarin.appspot.com/o/pakgentex%2FLiterature.zip?alt=media&token=d40d64fd-a7a7-46b1-82e4-37dc3a1774ff"
                  target={"_blank"}
                >
                  Literature
                </a>
              </th>
              <td></td>
              <td > 293092 +22889</td>
              <td >66939</td>
              <td >382920</td>
              <td></td>
            </tr>

            <tr>
              <th
                className="text-center"
                scope="row"
                style={{ alignItems: "center", verticalAlign: "middle" }}
              >
                <a
                  href="https://firebasestorage.googleapis.com/v0/b/joiingmandarin.appspot.com/o/pakgentex%2FLinguistics.zip?alt=media&token=d7ea360c-eafb-42d7-a6b1-3252eb833975"
                  target={"_blank"}
                >
                  Linguistics
                </a>
              </th>
              <td></td>
              <td> 259110</td>
              <td>49648 </td>
              <td>308758</td>
              <td></td>
            </tr>

            <tr>
              <th
                className="text-center"
                scope="row"
                style={{ alignItems: "center", verticalAlign: "middle" }}
              >
                <a
                  href="https://firebasestorage.googleapis.com/v0/b/joiingmandarin.appspot.com/o/pakgentex%2FLanguages.zip?alt=media&token=b1a44c2f-40d2-470e-aa89-f2c57713cb73"
                  target={"_blank"}
                >
                  Languages
                </a>
              </th>
              <td></td>
              <td>208847</td>
              <td>228912 </td>
              <td>437759</td>
              <td></td>
            </tr>

            <tr>
              <th
                className="text-center"
                scope="row"
                style={{ alignItems: "center", verticalAlign: "middle" }}
              >
                <a
                  href="https://firebasestorage.googleapis.com/v0/b/joiingmandarin.appspot.com/o/pakgentex%2FHealth%20Sciences.zip?alt=media&token=390e275f-de50-41ad-8dc9-fbb0ec4ff69b"
                  target={"_blank"}
                >
                  Health Sciences
                </a>
              </th>
              <td></td>
              <td>172113</td>
              <td> 134894 </td>
              <td>307007</td>
              <td></td>
            </tr>

            <tr>
              <th
                className="text-center"
                scope="row"
                style={{ alignItems: "center", verticalAlign: "middle" }}
              >
                <a
                  href="https://firebasestorage.googleapis.com/v0/b/joiingmandarin.appspot.com/o/pakgentex%2FEngineering%20Technology.zip?alt=media&token=0100b5e9-db06-43d7-bcbc-7bf8a81c3bcf"
                  target={"_blank"}
                >
                  Engineering And Technology
                </a>
              </th>
              <td></td>
              <td> 369500</td>
              <td>54444</td>
              <td>423944</td>
              <td></td>
            </tr>

            <tr>
              <th
                className="text-center"
                scope="row"
                style={{ alignItems: "center", verticalAlign: "middle" }}
              >
                <a
                  href="https://firebasestorage.googleapis.com/v0/b/joiingmandarin.appspot.com/o/pakgentex%2FEnglish%20Language%20Teaching.zip?alt=media&token=77884648-fed5-4280-8382-dae58d3f296f"
                  target={"_blank"}
                >
                  English Language Teaching
                </a>
              </th>
              <td></td>
              <td>185248</td>
              <td>33224</td>
              <td>218472</td>
              <td></td>
            </tr>

            <tr>
              <th
                scope="row"
                style={{ alignItems: "center", verticalAlign: "middle" }}
                className="text-center"
              >
                <span
                  className="p-2 px-4"
                >
                  Total
                </span>
              </th>
              <td></td>
              <td></td>
              <td></td>
              <td className="px-3">
                {" "}
                3718535
              </td>
              <td></td>
            </tr>

            <tr>
              <th colSpan={4} className="text-center">
                

                MPhil Research Proposal
              </th>
              <td></td>
              <td></td>
            </tr>

            <tr>
              <th>MPhil Synopsis</th>
              <td>English</td>
              <td>24721</td>
              <td>130398</td>
              <th>155119</th>
              <td></td>
            </tr>

            <tr>
              <th colSpan={4}>Total</th>
              <th>155119</th>
              <td></td>
            </tr>

            <tr>
              <th colSpan={6} className="text-center">
                Research Articles
              </th>
              <td></td>
            </tr>

            <tr>
              <td rowSpan={5} className="text-center">
                <br /> <br /> <a href="https://drive.google.com/drive/folders/1ofUDXKVDhndpYNjbVQKeE2aMILbu0Xp6?usp=sharing">Arts and Humanities</a>
              </td>
              <th colSpan={2} className="text-center">
                Discipline
              </th>
              <th>Male</th>
              <th>Female</th>
              <th>Total</th>
            </tr>

            <tr>
              <td>English Language Teaching</td>
              <td>14874</td>
              <td>15288</td>
              <td>14100</td>
              <td>44262</td>
            </tr>

            <tr>
              <td>Linguistics</td>
              <td>15929</td>
              <td>25258</td>
              <td>8545</td>
              <td>49732</td>
            </tr>

            <tr>
              <td>Literature</td>
              <td>14672</td>
              <td>18685</td>
              <td>16460</td>
              <td>49817</td>
            </tr>

            <tr>
              <td>Social Sciences - Humanities</td>
              <td>81204</td>
              <td>190578</td>
              <td>102600</td>
              <td>374382</td>
            </tr>

            <tr>
              <td rowSpan={3} className="text-center">
                <a href="https://drive.google.com/drive/folders/1SMg-ZGrWaQC_wkW8LHrwfH8BGnmPpfR6?usp=sharing">
                Engineering
                </a>
              </td>
              <td>Civil Engineering</td>
              <td>12220</td>
              <td>12736</td>
              <td>18235</td>
              <td>43191</td>
            </tr>

            <tr>
              <td>Electrical Engineering</td>
              <td>4616</td>
              <td>16748</td>
              <td></td>
              <td>21364</td>
            </tr>

            <tr>
              <td>Mechanical Engineering</td>
              <td>13126</td>
              <td>11777</td>
              <td></td>
              <td>24903</td>
            </tr>

            <tr>
              <td className="text-center"><a href="https://drive.google.com/drive/folders/1r-yqdBJlHs38H759bXn6M4Z3GyfIYBWN?usp=sharing">Legal Discourse</a></td>
              <td>Legal Articles</td>
              <td></td>
              <td>244246</td>
              <td>30657</td>
              <td>274903</td>
            </tr>

            <tr>
              <td className="text-center"><a href="https://drive.google.com/drive/folders/1mg-FQ7UcLssKqmr9g_PX59GkijBe9MTJ?usp=sharing">Life and Health Sciences</a></td>
              <td></td>
              <td>8144</td>
              <td>8806</td>
              <td></td>
              <td>16950</td>
            </tr>

            <tr>
              <td className="text-center"><a href="https://drive.google.com/drive/folders/1bF6yfsIFYpMl-6KrNSZO1Gnvv26nFqhA?usp=sharing">Multiple</a></td>
              <td></td>
              <td>95430</td>
              <td>212905</td>
              <td>71674</td>
              <td>380009</td>
            </tr>

            <tr>
              <td rowSpan={3} className="text-center">
                <a href="https://drive.google.com/drive/folders/1XrGB4F3x8RRPzX5AYTtjgw_AOi32Sv_J?usp=sharing">Natural Sciences</a>
                
              </td>
              <td>Biotechnology</td>
              <td>13026</td>
              <td>8766</td>
              <td>1521</td>
              <td>23313</td>
            </tr>

            <tr>
              <td>Botany</td>
              <td>19736</td>
              <td>5235</td>
              <td>2719</td>
              <td>27690</td>
            </tr>

            <tr>
              <td>Zoology</td>
              <td>16190</td>
              <td></td>
              <td></td>
              <td>16190</td>
            </tr>

            <tr>
              <td rowSpan={2} className="text-center">
                <a href="https://drive.google.com/drive/folders/14ANeNlfPVrEhsJ5OlNls8jfbTsoshiZh?usp=sharing">Physical Sciences</a>
                
              </td>
              <td>Chemistry</td>
              <td>25300</td>
              <td>3934</td>
              <td></td>
              <td>29234</td>
            </tr>

            <tr>
              <td>Physics</td>
              <td>12290</td>
              <td>5385</td>
              <td>3871</td>
              <td>21544</td>
            </tr>

            <tr>
              <td rowSpan={4} className="text-center">
                <a href="https://drive.google.com/drive/folders/17f9zhGPwsZ9OFP_9z40ona8BzyfWhWst?usp=sharing">

                Social Sciences
                </a>
              </td>
              <td>Education</td>
              <td>24391</td>
              <td>3736</td>
              <td>8120</td>
              <td>36247</td>
            </tr>

            <tr>
              <td>Pak Studies</td>
              <td>41884</td>
              <td>108965</td>
              <td>39468</td>
              <td>190317</td>
            </tr>
            <tr>
              <td>Political Science</td>
              <td>18234</td>
              <td>22363</td>
              <td>15123</td>
              <td>55720</td>
            </tr>

            <tr>
              <td>Psychology</td>
              <td>7660</td>
              <td>15511</td>
              <td>19263</td>
              <td>42434</td>
            </tr>

            <tr>
              <th colSpan={5}>Total</th>
              <th>1682402</th>
            </tr>

            <tr>
              <th colSpan={6} className="text-center">
                Novels
              </th>
            </tr>

            <tr>
              <th colSpan={3}>
                <a href="Novels">
                Novels
                  </a></th>
              <td>233558</td>
              <td>743049+158252 +298989+</td>
              <th>1433848</th>
            </tr>

            <tr>
              <th colSpan={5}>Total</th>
              <th>1433848</th>
            </tr>

            <tr>
              <th colSpan={6} className="text-center">
                Pakistani TextBooks
              </th>
            </tr>

            <tr>
              <td colSpan={3}><a href="https://drive.google.com/drive/folders/1jIpHWseWuVf-KRslw2pJzHaxIqj-Yw_k?usp=sharing">Pakistani Textbooks</a></td>
              <td>197986</td>
              <td></td>
              <th>197986</th>
            </tr>

            <tr>
              <th colSpan={5}>Total</th>
              <td>197986</td>
            </tr>

            <tr>
              <th colSpan={3} className="text-center">
                Type of Text
              </th>
              <th colSpan={3} className="text-center">
                Written
              </th>
            </tr>

            <tr>
              <th colSpan={3} className="text-center">
                Type of Discourse
              </th>
              <th colSpan={3} className="text-center">
                Arts and Literature
              </th>
            </tr>

            <tr>
              <th colSpan={6}><a href="
https://drive.google.com/drive/folders/1zHpBAl80LFWsmWBV3MrwACkOcFpJLgUe?usp=sharing">Book Reviews</a></th>
            </tr>

            <tr>
              <td colSpan={2}><a href="https://drive.google.com/drive/folders/1W9HS2Te32jKP4Xagg58DtvAkVGyA87YC?usp=sharing">Newspapers</a></td>
              <td>DAWN, The Express Tribune, The Nation</td>
              <td> 11413 +24268</td>
              <td> 47939 36677+</td>
              <th> 120297</th>
            </tr>

            <tr>
              <th colSpan={5}>Total</th>
              <th>120297</th>
            </tr>

            <tr>
              <th colSpan={6}><a href="https://drive.google.com/drive/folders/1W9HS2Te32jKP4Xagg58DtvAkVGyA87YC?usp=sharing">Newspaper Articles</a></th>
            </tr>

            <tr>
              <td colSpan={2}><a href="https://drive.google.com/drive/folders/18X1sVtf4gmpPSXTbTW0caJSJgEJ1RRVU?usp=sharing">Business News Articles</a></td>
              <td>DAWN, The Express Tribune, The Nation</td>
              <td>66772+53654+251868</td>
              <td>5608+11884</td>
              <td>389786</td>
            </tr>

            <tr>
              <td colSpan={2}><a href="https://drive.google.com/drive/folders/1xCcwZOTJo2y5-pDYGPr41eZJ3WrbNCVy?usp=sharing">Corruption & Economy</a></td>
              <td>DAWN</td>
              <td>35622</td>
              <td></td>
              <td>35622</td>
            </tr>

            <tr>
              <td colSpan={2}>
                <a href="https://drive.google.com/drive/folders/1Egr_yLhkwdVxjw-Gq4OL2YGIXC6Jw4fN?usp=sharing">
                
                National News
                </a>
              </td>
              <td>
                DAWN, The Express Tribune
              </td>
              <td>164263</td>
              <td>3272</td>
              <td>167535</td>
            </tr>

            <tr>
              <td colSpan={2} >
                <a href="https://drive.google.com/drive/folders/1Egr_yLhkwdVxjw-Gq4OL2YGIXC6Jw4fN?usp=sharing">

                International News
                </a>
              </td>
              <td>
                DAWN, The Express Tribune
              </td>
              <td></td>
              <td></td>
              <td></td>
            </tr>

            <tr>
              <td colSpan={2}><a href="https://drive.google.com/drive/folders/1AThdHlXXEySWQ89qMdHebbxw90XaBj7C?usp=sharing">COVID 19</a></td>
              <td>DAWN, Express, The News</td>
              <td>26500+23597 +46549+</td>
              <td>11854+1470 +5229</td>
              <td>115199</td>
            </tr>

            <tr>
              <td colSpan={2}>
                <a href="https://drive.google.com/drive/folders/1bQM_SVXSNF2gbYbJ8LNgEf8MT8RoBoSE?usp=sharing">Noor Mukaddam Case</a>
                
                </td>
              <td>DAWN</td>
              <td>44828</td>
              <td>4163</td>
              <td>48991</td>
            </tr>

            <tr>
              <td colSpan={2}><a href="https://drive.google.com/drive/folders/1Fur3VQvD51bF2zc9V-E04WDXsxwrEokF?usp=sharing">Arts & Culture</a></td>
              <td>DAWN</td>
              <td>20965</td>
              <td>45991</td>
              <td>66956</td>
            </tr>

            <tr>
              <th colSpan={5}>Total</th>
              <td>824089</td>
            </tr>

            <tr>
              <th colSpan={6} className="text-center">
                Magazines Articles
              </th>
            </tr>

            <tr>
              <td colSpan={2}><a href="https://drive.google.com/drive/folders/1nAcGhvabj-tPkON00WWOQDKQWcodhW3A?usp=sharing">Entertainment</a></td>
              <td>DAWN, The News</td>
              <td>17423+109681</td>
              <td>15725+188203</td>
              <th>331032</th>
            </tr>

            <tr>
              <th colSpan={5}>Total</th>
              <th>331032</th>
            </tr>

            <tr>
              <th colSpan={6} className="text-center">
                Editorials
              </th>
            </tr>

            <tr>
              <td colSpan={2}><a href="https://drive.google.com/drive/folders/1FRU_YiAs92a8XeHyOjYnHFzBC1xhmUFO?usp=sharing">Opinion Articles</a></td>
              <td>DAWN, The Nation, The News</td>
              <td>229323+ 282572+ 321424</td>
              <td>37939+7755 +6652</td>
              <th>885665</th>
            </tr>

            <tr>
              <th colSpan={6} className="text-center">
                Newspaper Blogs
              </th>
            </tr>

            <tr>
              <td colSpan={2}><a href="https://drive.google.com/drive/folders/1frMqQyJmQpieyGo6hYD7TdL13TL9Qikv?usp=sharing">
              Transgender</a></td>
              <td>The Express Tribune</td>
              <td>15337</td>
              <td>18131</td>
              <td>33468</td>
            </tr>

            <tr>
              <td colSpan={2}><a href="https://drive.google.com/drive/folders/1RsL-n3kVF42HuIA6yiwOIJXQZtUOWLVS?usp=sharing">Aurat March</a></td>
              <td>Dailytimes, Dunya News</td>
              <td>10908+6468+594+ 1887+1959</td>
              <td>9153+2715+ 5541+897</td>
              <td>40122</td>
            </tr>

            <tr>
              <td colSpan={2}><a href="https://drive.google.com/drive/folders/1RVhjvZ_VZA97rN2xmuYjxMkzOiGwpkhW?usp=sharing">Health Care</a></td>
              <td>The Nation, Dunya News, Tribune Blogs</td>
              <td>4820+1099+873+ 16032+</td>
              <td>3636+1264+ 10124+</td>
              <td> 37848</td>
            </tr>

            <tr>
              <td colSpan={2}><a href="https://drive.google.com/drive/folders/1AThdHlXXEySWQ89qMdHebbxw90XaBj7C?usp=sharing">COVID-19</a></td>
              <td>Dailytimes, Dunya News, Tribune Blogs, </td>
              <td>30207+7321+5652+ 14768+2466</td>
              <td>19336+5502+ 5791+6127+ 2416</td>
              <td>99586</td>
            </tr>

            <tr>
              <td colSpan={2}><a href="https://drive.google.com/drive/folders/1FHG-LjBYbrJudJJODjSrtEN2US0cnn3d?usp=sharing">Arts & Culture</a></td>
              <td>DAWN</td>
              <td>20965</td>
              <td>45991</td>
              <td>66956</td>
            </tr>

            <tr>
              <th colSpan={5}>Total</th>
              <th>277980</th>
            </tr>

            <tr>
              <th colSpan={5} className="text-center">
                Written Total
              </th>
              <th>13,347,969</th>
            </tr>
          </tbody>
        </table>

        <strong>
          <h5 className="justify-content-center d-flex">
            Table 2: Spoken data collected for the project of PakGenText
          </h5>
        </strong>
        <div className="table-responsive">
          <table className="table">
            <thead>
              <tr>
                <th colSpan={3} className="text-center">
                  Type of Text
                </th>
                <th colSpan={3} className="text-center">
                  Spoken
                </th>
              </tr>
              <tr>
                <th colSpan={3} className="text-center">
                  Type of Text
                </th>
                <th colSpan={3} className="text-center">
                  Spoken
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th colSpan={6} className="text-center">
                  MPhil Synopsis Defense presentations
                </th>
              </tr>

              <tr>
                <th colSpan={2}>Genre</th>
                <th>Discipline</th>
                <th colSpan={3} className="text-center">
                  Word Count
                </th>
              </tr>

              <tr>
                <th colSpan={2}></th>
                <th></th>
                <th>Male</th>
                <th>Female</th>
                <th>Total</th>
              </tr>

              <tr>
                <td colSpan={2}><a href="https://drive.google.com/drive/folders/1Fur3VQvD51bF2zc9V-E04WDXsxwrEokF?usp=sharing">Synopsis Defense Presentations</a></td>
                <td>Arts and humanities</td>
                <td>13419</td>
                <td>14274</td>
                <td>27693</td>
              </tr>

              <tr>
                <th colSpan={6} className="text-center">
                  Classroom Lectures
                </th>
              </tr>

              <tr>
                <td colSpan={2}><a href="https://drive.google.com/drive/folders/1VW67ng9oOhOdjZ7cq2wTaA0yiomrTjJW?usp=sharing">Classroom Lectures</a></td>
                <td>Arts and Humanities</td>
                <td>33714+62141</td>
                <td>17376+83289</td>
                <td>196520</td>
              </tr>

              <tr>
                <th colSpan={6} className="text-center">
                  Conference Presentations
                </th>
              </tr>

              <tr>
                <td colSpan={2}><a href="https://drive.google.com/drive/folders/1ja2y4AeclgfqNgh_TH15YRO1wyLah9L1?usp=sharing">Conference Presentations</a></td>
                <td></td>
                <td>18897</td>
                <td>15199</td>
                <td>34096</td>
              </tr>

              <tr>
                <th colSpan={6} className="text-center">
                  Motivational Speeches
                </th>
              </tr>

              <tr>
                <td colSpan={2}>
                  <a href="https://drive.google.com/drive/folders/1MJKiKno5dfxr-RZZjaEn6IB0EXjuBiev?usp=sharing">
                  Motivational Speeches
                  </a>
                  </td>
                <td></td>
                <td>37976</td>
                <td>33286</td>
                <td>71262</td>
              </tr>

              <tr>
                <th colSpan={3} className="text-center">
                  Spoken Total
                </th>
                <td></td>
                <td></td>
                <th>329571</th>
              </tr>

              <tr>
                <th colSpan={3} className="text-center">
                  Grand Total
                </th>
                <td></td>
                <td></td>
                <th>13,677,540</th>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
