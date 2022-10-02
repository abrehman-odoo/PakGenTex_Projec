import React from "react";
import Bar from "../components/Bar";
import Footer from "../components/Footer";
import Team from '../components/Team'
import About from '../pages/About'

export default function AboutUs() {
    return (
        <div style={{ backgroundColor: "#cccccc", height: "100%" }}>
            <div className="container" style={{ backgroundColor: "white" }}>
                <Bar />
                <br />
                <br />
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
                <div style={{textAlign:"justify"}} className="container">
                    <h5>Pakistan Gender Text (PakGenText)</h5>
                    <p>
                        Human language is not static and uniform; but keeps on evolving with the passage of time. In consequence, language variation gradually develops due to a number of social variables. One of the most significant social variables is gender. Gender plays a significant role in generating language variation between men and women. In Pakistan, no such corpus has been developed so far which can distinctly focus on the language used by men and women. There is a dire need to develop a corpus by employing modern methods to develop and maintain corpus. So, this research project aims to develop a corpus (PakGenText) which will not only distinguish the use of language in different genre but also focuses on gender-based language use in different genre.
                        <p><span><b>Principal Investigator:</b></span> Prof Dr Wasima Shehzad</p>
                        <p><span><b>Co-Principal Investigator:</b></span> Dr. Tehseen Zahra</p>
                    </p>
                    <h5>Data Collection</h5>
                    <p>Data for this study has been collected from spoken and written texts of various disciplines. Written texts consist of two major discourses, academic discourse and media discourse. The academic discourse is taken from the genres of research papers, dissertations, and research proposals whereas the media discourse is taken from the genres of book reviews, newspaper articles, magazine articles, editorials and newspaper blogs. Spoken texts are taken from the academic discourse having the genres of synopsis defence presentations and classroom lectures.</p>
                    <ol>
                        <li>Written Discourse</li>
                        <li>Spoken Discourse</li>
                    </ol>
                    <h5>Written Discourse</h5>
                    <p>The selected texts belong to Pakistani male or female authors and writers. Following table shows the data collected for PakGenText in the first year of the project.</p>
                    <p>Table 1: Details of Written Texts of PakGenText</p>
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
                    </div>
                    <p>We are also collecting data of other disciplines and will try to make it available online for the end users.</p>
                    <br />
                    <h5>Process of Corpus Cleaning of Written Discourse</h5>
                    <p>Corpus Cleaning is a significant part of corpus building. It is mandatory to process the data through software. Following procedure was used to clean the data.</p>
                    <ol>
                        <li>Files were downloaded for cleaning from authentic sources (e.g. for research articles search for authentic journals).</li>
                        <li>The files were downloaded in PDF format are given a code or a text ID which is also used for the DOC and TXT files (e.g. RA-SS-F-001 or BR-PHY-M-004).</li>
                        <li>The PDF file was then converted into DOC format.</li>
                        <li><span><a href='https://pdftotext.com/' target={'_blank'}>https://pdftotext.com/</a></span> is used to convert PDF files into DOC files.</li>
                        <li>The cleaning of the text was done in the Word or DOC file.</li>
                        <li>Following items were removed from the DOC file manually:</li>
                        <ol>
                            <li>Title of document</li>
                            <li>Author’s name</li>
                            <li>Author’s details (i.e. contact number, email ID, affiliation etc.)</li>
                            <li>Pagination</li>
                            <li>Headings</li>
                            <li>Subheadings</li>
                            <li>Bullets & numbers from lists</li>
                            <li>Tables</li>
                            <li>Figures</li>
                            <li>Equations</li>
                            <li>Unreadable symbols</li>
                            <li>Any text from the header and footer</li>
                            <li>Any unnecessary numbers within the text (e.g. Islamic Emirate of Afghanistan.[2][3][4])</li>
                        </ol>
                        <li>After cleaning the files manually, text was copied and pasted in the Text Fixer, online tool to remove lines’ and paragraphs’ spacing. The second option ‘Remove line breaks and paragraph breaks’ was selected in order to do that.</li>
                        <li>Then, the completely cleaned text was copied from the Text Fixer and pasted in the same word document.</li>
                        <li>The word count was noted from the bottom left corner of the document and mentioned in the markup file.</li>
                        <li>The DOC file was converted into .txt file by clicking ‘save as’ from the top left corner of the word document.</li>
                        <li>From the available formats, the option ‘Plain Text (*txt)’ was chosen and saved.</li>
                        <li>After clicking save, when a dialog box appears, ‘Other encoding’ was chosen and from the drop down list ‘UTF-8’ was selected and saved.</li>

                    </ol>
                    <br />
                    <h5>Structural Annotation of Written Data</h5>
                    <p>Annotation provides details about the data such as discipline, gender, code of files.</p>
                    <p>A markup file is created that includes the following information related to each text file:</p>
                    <ol>
                        <li>File Code (e.g. SS-M-001) <br />The file code includes:</li>
                        <ol>
                            <li>The initials of the source i.e. journal or newspaper etc. for example in ‘SS-M-
                                001’, ‘SS’ stands for ‘Social Sciences’ journal. If a text belongs to a thesis, then the file is named as ‘PhD-Ling-F-012’. Here ‘PhD’ is the degree of the thesis, ‘Ling’ stands for linguistics that is the field of studies that the thesis belong to, ‘F’ refers to the gender of the author whereas ‘012’ is the file number.</li>
                            <li>Speaker code (i.e. M for Male or F for Female)</li>
                            <li>File no e.g. 001, 010, 011 etc.</li>
                        </ol>
                        <li>Word Count</li>
                        <li>Gender</li>
                        <li>Year</li>
                        <li>Title (where necessary)</li>
                    </ol>
                    <br />
                    <p>Annotation keeps track of all the files that are part of the corpus. It also helps in locating any particular files when needed through file code. Genre based mark-up files including the annotation informs you about the progress made in developing the corpus of that genre specifically.</p>
                    <br />
                    <h5>Spoken Data</h5>
                    <p>Spoken data has been collected from synopsis defense presentations and classroom lectures so far. First of all the recorded (audio and visual) data was transcribed. As compared to written data, collection of spoken data for any project is quite a challenging task because the spoken language is relatively more spontaneous to grasp each and every chunk attentively. So as not to skip any word or phrase, transcription of spoken data demands a vigilant listener even at eavesdrop. The available spoken data has been transcribed and divided according to the speech event title, word count, matches and gender wise distribution of speech event.</p>
                    <p>Table 2: Spoken data collected for the project of PakGenText</p>
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
                    <h5>Selection Criteria</h5>
                    <p>Gender specific spoken data is collected for this study. Undergraduate classroom sessions of various disciplines such as English, Engineering, Ethics and business studies were recorded so far.</p>

                    <h5>Tools</h5>
                    <p>Audio and visual data have been recorded by using recorders. Before recording the audios/videos the speakers were assured that the collected data will be used for academic purposes only. For data storage different computers have been used, every computer has the record for every file. For listening to the audios and videos clearly, different headsets, handsfree or ear plugs were used.</p>
                    <h5>Data Transcription</h5>
                    <p>The first step after data collection was to transcribe it by using a single parameter throughout. To accomplish this task a transcription parameter was designed by mutual consultation in which different symbols were decided for the speakers and different speech gestures. The following parameter was designed:</p>
                    <table>
                        <thead>
                            <th><b>Label</b></th>
                            <th><b>Symbol</b></th>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Male</td>
                                <td>M</td>
                            </tr>
                            <tr>
                                <td>Female</td>
                                <td>F</td>
                            </tr>
                            <tr>
                                <td>Interruption</td>
                                <td>[int]</td>
                            </tr>
                            <tr>
                                <td>Hesitation</td>
                                <td>{"<h>"}</td>
                            </tr>
                            <tr>
                                <td>Inaudible</td>
                                <td>{"<i>"}</td>
                            </tr>
                            <tr>
                                <td>Repetition</td>
                                <td>{"<r>"}</td>
                            </tr>
                            <tr>
                                <td>Silent Pause</td>
                                <td>[...]</td>
                            </tr>
                            <tr>
                                <td>Vocal Pause</td>
                                <td>{"<er>, <em>, <hm>, <mm> etc."}</td>
                            </tr>
                            <tr>
                                <td>Cough</td>
                                <td>{"<C>"}</td>
                            </tr>
                            <tr>
                                <td>Laugh</td>
                                <td>{"<L>"}</td>
                            </tr>
                            <tr>
                                <td>Overlap Speech</td>
                                <td>{"<o>"}</td>
                            </tr>
                            <tr>
                                <td>Languages other than English</td>
                                <td>Bold</td>
                            </tr>
                        </tbody>
                    </table>
                    <p>Appropriate symbols were added where required along with the translation of Urdu into English (for the convenience of international scholars).</p>
                    <h5>Limitations</h5>
                    <ol>
                        <li>
                            Only audible data has been transcribed. When we found that the data is inaudible, {"<i>"} is used.
                        </li>
                        <li>
                            It was not possible to know the names of each and every speaker because there were more than 30 students in the classroom so they were labelled with different speaker codes as M1, M2 for male speakers. And female speakers were labelled as F1, F2, F3 and if there were many students talking at one time they were labelled as S (for students) and the speech was marked as {"<int>"} symbol as interruption.
                        </li>
                    </ol>
                    <h5>Data Cleaning and Conversion of files</h5>
                    <p>In order to keep the record, the original text was kept safe in a folder labelled as uncleaned data, and for cleaning process the same files were copied in a separate folder labelled as cleaned data and those files went through cleaning process.</p>
                    <p>After cleaning all the files were separated according to gender-based categories; male and female. The files were assigned a code and converted into .txt files by Uni-coding (Unicode UTF-8). .txt files are machine readable, so for using corpus in a software, it is saved in machine readable form. The same procedure was used to store files in PDF format as well, therefore, collectively, files are stored in three formats, Word, PDF and .txt, with the same file codes in all formats.</p>
                    <h5>Annotation of Spoken Data</h5>
                    <p>This is the last step of data handling; it is called structural annotation. In this step, the files were given a code which comprised of letters and numbers. The parameter for coding included the first letters of the genre such as CL was used for classroom lectures, then M for male and F for female and then the number of recording. For example, the file code of first classroom lectures of a male speaker was CL-M-001. The same parameter was followed for all kinds of data files. The next step of annotation was storing of the relevant information of the text in a tabular form using MS Excel.</p>
                    <p>The relevant information includes, the file codes which were given to the files, speaker codes M1, F1 etc., word count, date or the year of text production, name of institution etc. the annotation helps us to locate the files easily. Another reason is that dealing with multiple genres and large size corpora, we cannot memorize the information of every single file, so annotation helps us to keep a track of the files.</p>
                    <h5>Challenges faced</h5>
                    <br />
                    <p>Following are the challenges faced by the researchers during the corpus building process.</p>
                    <h5>Selection and Availability of Text</h5>
                    <ol>
                        <li>Unavailability of the data is one of the major issues while developing a corpus. For example, we develop a corpus of synopsis/research proposals that was not available online. Hence we visited different universities to collect data.</li>
                        <li> Diversity of disciplines is another problem. For example, in academic discourse, there are multiple disciplines. It is difficult rather impossible to include every discipline in PakGenText. Although, the team of researchers including PI, Co-PI, research assistants, data contributors and scholars are working to build the corpus including the texts from various disciplines.</li>
                        <li>We often came across a fair amount of unauthentic material that we had to discard.</li>
                        <li> Sometimes the sources offered incomplete data and the researchers had to look for further sources.</li>

                    </ol>
                    <h5>
                        Spoken Data Collection and Transcription
                    </h5>
                    <p>Working on any language whether written or spoken possesses a number of challenges and complications when it comes to practically implementing the mechanics. Dealing with spoken data also hold multiple technicalities to be adhered cautiously while transcribing the text. The transcription technicalities involve different symbols, transliteration of different languages into English and being attentive to every single chunk of the sounds present in the recordings. Following are some of the frequent issues while handling the spoken data of PakGenText.</p>
                    <ol>
                        <li>The foremost challenge for the collection of recordings was of getting permission from the respective speakers and relative institutions so as to maintain the ethics.</li>
                        <li>Another main challenge was the observer paradox, as part of the ethical consideration, it is necessary to inform the speakers before recording their speech but the behavior of the speaker changes when s/he comes to know that they are being recorded. It is difficult to record the original behavior of the speakers once they are being informed. As a result, it becomes challenging to maintain both ethics and originality.</li>
                        <li>Moving towards the issues while transcribing the data, in some of the recordings there were distortions which hindered the understanding of the speech.</li>
                        <li>Presence of multiple speakers led to the interruptions which resulted in inaudible speech. Some of the speakers were not loud enough to be deciphered easily, so it was hard for the listener to play that particular part of the recording repeatedly.</li>
                        <li>Translation of different languages into English was again a difficult task because there were some metaphorical phrases which cannot be translated literally by maintaining their original meaning.</li>
                        <li>Men usually have bleat and breathy sound. If male presenters lowered their voice at any place, it became hard to understand whereas female presenters have a little high-pitched voice. When female speakers lowered their volume, it was still audible. Female speakers were easier to understand as compared to male speakers at low volume.</li>
                    </ol>
                    <h5>Research Assistants</h5>
                    <ol>
                        <li>Ms. Anum Karim</li>
                        <li>Ms. Haleema Majeed</li>
                        <li>Ms. Javeria Maqsood</li>
                        <li>Ms. Memoona Khatoon</li>
                    </ol>
                    <h5>
                        Data Contributors
                    </h5>
                    <ol>
                        <li>Muhammad Saleem</li>
                        <li>Dr. Akhtar Abbas</li>
                        <li>Rimsha Jehangir</li>
                        <li>Rabia Gul</li>
                        <li>Muhammad Junaid</li>
                        <li>Mahwish Shamim</li>
                    </ol>
                    <h5>{"                      "}Research Works</h5>
                    <h5>Theses</h5>
                    <ul>
                        <li>Syntactic Analysis of Classroom Discourse: A Minimalist Perspective</li>
                        <li>Corpus Pragmatics Analysis of Pakistani Morning Shows</li>
                        <li>Personal Metadiscoursive Markers in Classroom Lectures: A comparative Study of
                            Pakistani and British Spoken Academic Discourse</li>
                        <li>A Corpus-based Analysis of hedges and boosters in students' essays</li>
                        <li>Personal Metadiscursive markers in classroom: a comparative study of Pakistan and British
                            academic spoken discourse</li>
                    </ul>
                    <h5>Research Papers</h5>
                    <ol>
                        <li>Zahra, T., & Abbas, A. (2020). Development of Gender-based Pakistani Academic Word List (G-PAWL). Journal of Social Sciences & Humanities. 28(2). 113-34.</li>
                        <li>Zahra, T & Shehzad, W. (2017). Syllogism and Relevance: A Pragmatic Analysis of Classroom Discourse. Kashmir Journal of Language Research. 20(2). 123-13.</li>

                    </ol>
                </div>
            </div>
            <br />
            <Footer />
        </div>
    );
}
