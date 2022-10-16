import React, { useState, useEffect, useRef } from 'react'
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import axios from "axios";
import { useLocation } from 'react-router-dom'
import Bar from '../components/Bar'
import { url, headers } from '../components/Variable'
import { useReactToPrint } from 'react-to-print';


import { ColorRing } from 'react-loader-spinner'
var _ = require('lodash');
// import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";

const halfString = (str) => {
    if (str.length % 2 == 0) {
        return str.slice(0, str.length / 2);
    }
    return str;
}
const Highlighted = ({ text = '', highlight = '' }) => {
    if (!highlight.trim()) {
        return <span>{text}</span>
    }
    const regex = new RegExp(`(${_.escapeRegExp(highlight)})`, 'gi')
    const parts = text.split(regex)
    return (
        <span>
            {parts.filter(part => part).map((part, i) => (
                regex.test(part) ? <mark key={i}>{part}</mark> : <span key={i}>{part}</span>
            ))}...
        </span>
    )
}
export default function Concordance() {
    const location = useLocation()
    const WordSave = location.state !== null ? location.state.Word : "";
    const criteria = location.state !== null ? location.state.criteria : ""
    const [page, setpage] = useState(1)
    const [data, setData] = useState([])
    const [showText, setshowText] = useState(false)
    const [filepath, setfilepath] = useState('')
    const [fileText, setfileText] = useState('')
    const [numberOfPages, setnumberOfPages] = useState(1)
    const [showLoader, setshowLoader] = useState(false)
    const [totalHits, setTotalHits] = useState(0)
    const [LN, setLN] = useState(100)
    const [RN, setRN] = useState(100)
    const componentRef = useRef();
    const handlePrint = useReactToPrint({
        content: () => componentRef.current,
    });
    const load = async (word) => {
        setshowLoader(true)
        let data = {
            "word": word,
            "criteria": criteria,
            LN,
            RN
        }
        fetch(`${url}/pakgentex/concordnace/${page}`, {
            method: "POST",
            body: JSON.stringify(data),
            headers
        }).then((res) => res.json())
            .then((response) => {
                // console.log('response --->', response)
                if (response.message === 'Success') {
                    setData(response.doc.data)
                    setnumberOfPages(response.doc.numberOfPages)
                    setTotalHits(response.doc.totalResults)
                    setshowLoader(false)
                }
            })
    };
    useEffect(() => {
        if (location.state !== null && location.state !== undefined) {
            load(location.state.Word);
        }
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
                                <h3 style={{ textAlign: "center" }}>KWIC</h3>
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

                                    {showLoader === false && showText == false && <Stack spacing={1}>
                                        <Pagination count={numberOfPages} page={page} color="primary"
                                            onChange={(e, value) => {
                                                setpage(value)
                                                load(WordSave)
                                            }} />
                                    </Stack>}
                                    <br />
                                </div>

                            </div>
                            <div style={{ display: "flex", justifyContent: "space-evenly" }}>
                                <div>
                                    <label><strong>Left Word Number{"    "}</strong></label>
                                    <select onChange={e => {
                                        e.preventDefault()
                                        if (e.target.value !== 'all') {
                                            setLN(parseInt(e.target.value))
                                        }
                                        else {
                                            setLN(100)
                                        }
                                    }} name="cars" id="cars">
                                        <option value="all">--Select Number--</option>{" "}
                                        <option value="1">1</option>{" "}
                                        <option value="2">2</option>{" "}
                                        <option value="3">3</option>{" "}
                                        <option value="4">4</option>{" "}
                                        <option value="5">5</option>{" "}
                                        <option value="6">6</option>{" "}
                                        <option value="7">7</option>{" "}
                                        <option value="8">8</option>{" "}
                                        <option value="9">9</option>{" "}
                                        <option value="10">11</option>{" "}
                                        <option value="12">12</option>{" "}
                                        <option value="13">13</option>{" "}
                                        <option value="14">14</option>{" "}
                                        <option value="15">15</option>{" "}
                                        <option value="16">16</option>{" "}
                                        <option value="17">17</option>{" "}
                                        <option value="18">18</option>{" "}
                                        <option value="19">19</option>{" "}
                                        <option value="20">20</option>{" "}
                                        <option value="21">21</option>{" "}
                                        <option value="22">22</option>{" "}
                                        <option value="23">23</option>{" "}
                                        <option value="24">24</option>{" "}
                                        <option value="25">25</option>{" "}
                                    </select>
                                </div>
                                <div>
                                    <label><strong>Right Word Number{"    "}</strong></label>
                                    <select onChange={e => {
                                        e.preventDefault()
                                        if (e.target.value !== 'all') {
                                            setRN(parseInt(e.target.value))
                                        }
                                        else {
                                            setRN(100)
                                        }
                                    }} name="cars" id="cars">
                                        <option value="all">--Select Number--</option>{" "}
                                        <option value="1">1</option>{" "}
                                        <option value="2">2</option>{" "}
                                        <option value="3">3</option>{" "}
                                        <option value="4">4</option>{" "}
                                        <option value="5">5</option>{" "}
                                        <option value="6">6</option>{" "}
                                        <option value="7">7</option>{" "}
                                        <option value="8">8</option>{" "}
                                        <option value="9">9</option>{" "}
                                        <option value="10">11</option>{" "}
                                        <option value="12">12</option>{" "}
                                        <option value="13">13</option>{" "}
                                        <option value="14">14</option>{" "}
                                        <option value="15">15</option>{" "}
                                        <option value="16">16</option>{" "}
                                        <option value="17">17</option>{" "}
                                        <option value="18">18</option>{" "}
                                        <option value="19">19</option>{" "}
                                        <option value="20">20</option>{" "}
                                        <option value="21">21</option>{" "}
                                        <option value="22">22</option>{" "}
                                        <option value="23">23</option>{" "}
                                        <option value="24">24</option>{" "}
                                        <option value="25">25</option>{" "}
                                    </select>
                                </div>
                                <div>
                                    <button
                                        className="p-1 px-5 rounded border text-white"
                                        style={{ backgroundColor: "#c40404" }}
                                        onClick={() => {
                                            load(WordSave)
                                        }}
                                    >
                                        Sort
                                    </button>
                                </div>
                            </div>
                            <br />
                            <div className="pt-3 border border-2 p-2 border-danger pb-3">
                                <br />
                                {showLoader === false &&showText===false && <div style={{ display: "flex", justifyContent: 'space-between' }}>
                                    <p style={{fontWeight:'bold',color:'red'}}>Click on highlighted text to view context</p>
                                    <button className='p-1 px-5 rounded border text-white' style={{ backgroundColor: "darkblue", width: 200 }} onClick={() => {
                                        handlePrint()
                                    }}>Print Results</button>
                                </div>}
                                <br />
                                <div className='table-responsive'>

                                    {showText === false && showLoader == false && <table ref={componentRef} className="table table-bordered">
                                        <thead>
                                            <tr>
                                                {/* <th scope="col" className='text-center'>Click (View or Download)</th> */}
                                                <th scope="col" className='text-center'>Context (Left)</th>
                                                <th scope="col" className='text-center'>Context (Matched)</th>
                                                <th scope="col" className='text-center'>Context (Right)</th>
                                            </tr>
                                        </thead>

                                        {showLoader === false && data.length > 0 && data.map((item) => (

                                            <tbody>
                                                <tr>
                                                    {/* <td className="text-center"><a onClick={e => {
                                                        e.preventDefault()
                                                        setshowLoader(true)
                                                        console.log('item---->', item.filename)
                                                        let data = {
                                                            filepath: item.filename
                                                        }
                                                        fetch(url + '/pakgentex/getFileText', {
                                                            method: "POST",
                                                            headers,
                                                            body: JSON.stringify(data)
                                                        }).then(res => res.json())
                                                            .then((response) => {
                                                                setshowLoader(false)
                                                                console.log('respkhifds-->', response)
                                                                if (response.message === 'Success') {
                                                                    console.log('result --->', response.doc)
                                                                    let file = response.doc.fileName
                                                                    setfileText(response.doc.text)
                                                                    setshowText(true)
                                                                    setfilepath(file.split('/')[file.split('/').length - 1])
                                                                }
                                                            })
                                                    }} href=''>{item.filename.split('/')[item.filename.split('/').length - 1]}</a></td> */}
                                                    <td className='text-center'>{item.preText}</td>
                                                    <td className='text-danger text-center' ><strong style={{textDecoration:'underline'}} onClick={e => {
                                                        e.preventDefault()
                                                        setshowLoader(true)
                                                        // console.log('item---->', item.filename)
                                                        let data = {
                                                            filepath: item.filename
                                                        }
                                                        fetch(url + '/pakgentex/getFileText', {
                                                            method: "POST",
                                                            headers,
                                                            body: JSON.stringify(data)
                                                        }).then(res => res.json())
                                                            .then((response) => {
                                                                setshowLoader(false)
                                                                // console.log('respkhifds-->', response)
                                                                if (response.message === 'Success') {
                                                                    // console.log('result --->', response.doc)
                                                                    let file = response.doc.fileName
                                                                    setfileText(response.doc.text)
                                                                    setfilepath(file.split('/')[file.split('/').length - 1])
                                                                    setshowText(true)
                                                                }
                                                            })
                                                    }}>{WordSave}</strong></td>
                                                    <td className='text-center'>{item.postText}</td>
                                                </tr>
                                            </tbody>
                                        ))}
                                    </table>}
                                    {showText === true && showLoader === false &&
                                        <div>
                                            <span onClick={e => {
                                                e.preventDefault()
                                                setfileText('')
                                                setfilepath('')
                                                setshowText(false)
                                            }} style={{ color: 'blue', textDecoration: 'underline', paddingLeft: "10" }}>Go Back {"     "} </span>
                                            <p style={{ textAlign: "center", fontWeight: 'bolder', fontSize: 18 }}>{filepath}</p>
                                            {/* <p style={{ padding: 20, textAlign: 'justify' }}>{fileText}</p> */}
                                            <Highlighted text={fileText.split(' ').length>500?fileText.split(' ').slice(0,1000).join(' '):halfString(fileText)} highlight={WordSave} />
                                        </div>}
                                    {showLoader === true && <ColorRing
                                        visible={showLoader}
                                        height="80"
                                        width="80"
                                        ariaLabel="blocks-loading"
                                        wrapperStyle={{ marginLeft: '50%' }}
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
