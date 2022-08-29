import React from 'react'
import { Scrollbars } from "react-custom-scrollbars-2";
import { useNavigate } from 'react-router-dom';
import Bar from '../components/Bar';
import { useState } from 'react';


export default function Search() {

  const [Word, setWord] = useState('')
  let navigation = useNavigate()
  const Searchword = async (e) => {
    // setIsLoading(true)
    var myHeaders = new Headers();
myHeaders.append("Content-Type", "application/json");

var raw = JSON.stringify({
  "word": Word,
  "criteria": "Academic"
});

var requestOptions = {
  method: 'POST',
  headers: myHeaders,
  body: raw,
  redirect: 'follow'
};

fetch("https://e728-185-202-239-227.ngrok.io/pakgentex/searchWord/1", requestOptions)

  .then(response => response.json())
  .then((result) => {

    console.log('Data received search word --->', result);
    // after
    if (result.message === 'Success') {
      // setIsLoading(false)
     navigation('/Sresult' ,{state: {rehman : result.doc,Word:Word,criteria:"Academics"}})
     
      // setData(response.doc);
    }
  })
  .catch(error => console.log('error', error));
  
  }
  return (
    <div>
        <Bar/>
    <div className='container'>
        <br/>
        <strong> &nbsp; &nbsp; Find the key words through typing in the box. This tool provides key word list along with the frequency of occurance in the data sets.</strong>
        <div className="row">
        <div className="col-md-6 col-sm-6 p-5">
            <div className="pt-3 border border-1 p-1">
              <h6 className="p-3">
              This research project aims to provide a corpus (PakGenText) which will not only distinguish the use of language in different genre but also focuses on gender based language use in different genre. This corpus may also be used in various research paradigms like Gender Studies, Education, Sociology, Psychology, inter-Cultural Communication, Linguistics, Literature, English Language Teaching etc.  To meet the international criteria of education and research, this project will pave its ways in building positive international image of Pakistan in academic discourse community and professional industry.
              </h6>
              <br />
            </div>
          </div>

          <div className="col-md-6 col-sm-6 p-5">
            <div className="pt-3">
            <div className="d-flex">
                <input
                  placeholder="Find Word"
                  className="m-1 rounded border w-75"
                  onChange={(e)=>setWord(e.target.value)}
                />
                <button
                  className="p-1 px-5 rounded border text-white"
                  style={{ backgroundColor: "#c40404" }}
                  onClick={Searchword}
                >
                  <i class="fa fa-search"></i>
                </button>

              </div>
              <div className="d-flex justify-content-center">
                <h5 className="pb-2 py-1">Categories</h5>
              </div>
              <div className="d-flex justify-content-center pb-4">
                <Scrollbars
                  style={{
                    height: "170px",
                    width: "280px",
                    paddingLeft: "19px",
                  }}
                  className="bg-white border border-2 border-black"
                >
                  <p>Ph.D Theses</p>
                  <p>MPhil Research Proposal</p>
                  <p>Research Articles</p>
                  <p>Novels</p>
                  <p>Pakistani Textbooks</p>
                  <p>Newspaper Articles</p>
                  <p>Magazines Articles</p>
                  <p>Editorials</p>
                </Scrollbars>
              </div>
            </div>
          </div>
          </div>
    </div>
    </div>
  )
}
