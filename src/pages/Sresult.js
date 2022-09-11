import React, { useState, useEffect } from 'react'
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import axios from "axios";
import { useLocation } from 'react-router-dom'
import Bar from '../components/Bar'
import { url, headers } from '../components/Variable'

import { ColorRing } from 'react-loader-spinner'
// import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";

export default function Sresult() {
  const location = useLocation()
  const WordSave = location.state.Word;
  const criteria = location.state.criteria
  const [page, setpage] = useState(1)
  const [data, setData] = useState([])
  const [showText, setshowText] = useState(false)
  const [filepath, setfilepath] = useState('')
  const [fileText, setfileText] = useState('')
  const [numberOfPages, setnumberOfPages] = useState(1)
  const [showLoader, setshowLoader] = useState(false)
  const [totalHits, setTotalHits] = useState(0)
  const load = async (word) => {
    setshowLoader(true)
    let data = {
      "word": word,
      "criteria": criteria
    }
    fetch(`${url}/pakgentex/searchWord/${page}`, {
      method: "POST",
      body: JSON.stringify(data),
      headers
    }).then((res) => res.json())
      .then((response) => {
        console.log('response --->', response)
        if (response.message === 'Success') {
          setData(response.doc.data)
          setnumberOfPages(response.doc.numberOfPages)
          setTotalHits(response.doc.totalResults)
          setshowLoader(false)
        }
      })
  };
  useEffect(() => {
    load(location.state.Word);
  }, []);
  return (
    <div>
      {/* {console.log("Location is ",abc)} */}
      {console.log(page)}
      <Bar />
      <div style={{}}>
        <div className="container">
          <div className="row">

            <div className="col-md-12 col-sm-12 p-5">
              <div className="container row">
                &nbsp;

                <div className="float-start col-md-4 col-sm-4">
                  <p>Word: <strong className="text-danger"> {WordSave}</strong></p>
                  <p>Total Hits: <strong className="text-danger"> {totalHits}</strong></p>
                </div>
                &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;  &nbsp; &nbsp;
                &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp;
                &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;  &nbsp; &nbsp;
                <div className="float-end col-md-3 col-sm-3">

                {showLoader===false && showText==false &&<Stack spacing={1}>
                    <Pagination count={numberOfPages} page={page} color="primary"
                      onChange={(e, value) => {
                        setpage(value)
                        load(WordSave)
                      }} />
                  </Stack>}
                </div>
              </div>
              <br />
              <div className="pt-3 border border-2 p-2 border-danger pb-3">
                <br />
                <div className='table-responsive'>

                  {showText===false && showLoader ==false && <table class="table table-bordered">
                    <thead>
                      <tr>
                        <th scope="col" className='text-center'>Context (Left)</th>
                        <th scope="col" className='text-center'>Context (Matched)</th>
                        <th scope="col" className='text-center'>Context (Right)</th>
                        <th scope="col" className='text-center'>Click (View or Download)</th>
                      </tr>
                    </thead>

                    {showLoader === false && data.length > 0 && data.map((item) => (

                      <tbody>
                        <tr>
                          <td className='text-center'>{item.preText}</td>
                          <td className='text-danger text-center' ><strong>{WordSave}</strong></td>
                          <td className='text-center'>{item.postText}</td>
                          <td className="text-center"><a onClick={e=>{
                            e.preventDefault()
                            setshowLoader(true)
                            console.log('item---->',item.filename)
                            let data = {
                              filepath:item.filename
                            }
                            fetch(url+'/pakgentex/getFileText',{
                              method:"POST",
                              headers,
                              body:JSON.stringify(data)
                            }).then(res=>res.json())
                            .then((response)=>{
                              setshowLoader(false)
                              console.log('respkhifds-->',response)
                              if(response.message==='Success'){
                                console.log('result --->',response.doc)
                                let file = response.doc.fileName
                                setfileText(response.doc.text)
                                setshowText(true)
                                setfilepath(file.split('/')[file.split('/').length - 1])
                              }
                            })
                          }} href=''>{item.filename.split('/')[item.filename.split('/').length - 1]}</a></td>
                        </tr>
                      </tbody>
                    ))}
                  </table>}
                  {showText===true &&showLoader ===false && 
                    <div>
                      <span onClick={e=>{
                        e.preventDefault()
                        setfileText('')
                        setfilepath('')
                        setshowText(false)
                      }} style={{color:'blue',textDecoration:'underline',paddingLeft:"10"}}>Go Back {"     "} </span>
                      <p style={{textAlign:"center",fontWeight:'bolder',fontSize:18}}>{filepath}</p>
                      <p style={{padding:20,textAlign:'justify'}}>{fileText}</p>
                    </div>}
                  {showLoader === true && <ColorRing
                      visible={showLoader}
                      height="80"
                      width="80"
                      ariaLabel="blocks-loading"
                      wrapperStyle={{marginLeft:'50%'}}
                      wrapperClass="blocks-wrapper"
                      colors={['#e15b64', '#f47e60', '#f8b26a', '#abbd81', '#849b87']}
                    />}
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  )
}
