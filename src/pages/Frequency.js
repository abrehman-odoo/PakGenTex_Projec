import React, { useState, useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import Bar from '../components/Bar'
import { url, headers } from '../components/Variable'
import { categories as allCategories } from "../components/Variable";
import { Scrollbars } from "react-custom-scrollbars-2";

import { ColorRing } from 'react-loader-spinner'
// import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";

export default function Frequency() {
    const location = useLocation()
    const [data, setData] = useState([])
    const [showLoader, setshowLoader] = useState(false)
    const [showFrequencyLoader, setshowFrequencyLoader] = useState(false)
    const [selectedCategoryIndex, setselectedCategoryIndex] = useState(-1);
    const [selectedIndex2, setselectedIndex2] = useState(-1);
    const [selectedIndex3, setselectedIndex3] = useState(-1);
    const [selectedIndex4, setselectedIndex4] = useState(-1);

    const [showCat1, setshowCat1] = useState(true);
    const [showCat2, setshowCat2] = useState(false);
    const [showCat3, setshowCat3] = useState(false);
    const [showCat4, setshowCat4] = useState(false);
    const [selectedFileIndex, setSelectedFileIndex] = useState(-1)
    const [catLevel1, setcatLevel1] = useState(
        allCategories.map((cat) => cat.name)
    );
    const [catLevel2, setcatLevel2] = useState([]);
    const [catLevel3, setcatLevel3] = useState([]);
    const [catLevel4, setcatLevel4] = useState([]);

    const [selectedCategory, setselectedCategory] = useState("");
    const [selectedCat2, setselectedCat2] = useState("");
    const [selectedCat3, setselectedCat3] = useState("");
    const [selectedCat4, setselectedCat4] = useState("");
    const [criteriaa, setcriteriaa] = useState(location.state !== null ? location.state.criteria : "academics");
    const [fileList, setfileList] = useState([])
    const load = async (criteria) => {
        setshowLoader(true)
        let check = criteria
        if(criteria.indexOf('/')>-1){
            check=criteria.split('/')[criteria.split('/').length-2]
        }
        console.log('checkkkkk-->',check)
        let data = {
            "criteria": check,
        }
        // console.log('dataaaaaa--->', data)
        fetch(`${url}/pakgentex/filesByCriteria`, {
            method: "POST",
            body: JSON.stringify(data),
            headers
        }).then((res) => res.json())
            .then((response) => {
                // console.log('responseee--->', response)
                if (response.message === 'Success') {
                    setshowLoader(false)
                    setfileList(response.doc)
                }
            })
    };
    useEffect(() => {
        load(criteriaa)
    }, []);

    const getFileFrequency = (selectedFile) => {
        setshowFrequencyLoader(true)
        let data = {
            filepath: selectedFile
        }
        // console.log('dataaaaaa--->',data)
        fetch(`${url}/pakgentex/fileWordFrequency`, {
            method: "POST",
            body: JSON.stringify(data),
            headers
        }).then((res) => res.json())
            .then((response) => {
                setshowFrequencyLoader(false)
                if (response.message === 'Success') {
                    setData(response.doc.wordList)
                }
            })
    }
    const handleCatSelection = (
        cat1 = selectedCategory,
        cat2 = selectedCat2,
        cat3 = selectedCat3,
        cat4 = selectedCat4
    ) => {
        let filePath = cat1 + "/";
        if (cat2.length > 0) {
            filePath += cat2 + "/";
        }
        if (cat3.length > 0) {
            filePath += cat3 + "/";
        }
        if (cat4.length > 0) {
            filePath += cat4;
        }
        // console.log("in handle change --->", filePath);
        setcriteriaa(filePath);
        load(filePath)
    };
    return (
        <div>
            <Bar />
            <div style={{}}>
                <div className="container">
                    <div className="row">
                        <div className="container row">
                            &nbsp;
                            <h3 style={{ textAlign: "center" }}>FREQUENCY</h3>
                        </div>
                        <div style={{ display: "flex", justifyContent: 'flex-start' }}>
                            <div className="container row d-flex col-md-12 col-sm-12">
                                <div className="col-sm-3 col-md-3">
                                    <br />
                                    {showCat1 === true && (
                                        <div className="d-flex justify-content-center">
                                            <h5 className="">Select Category</h5>
                                        </div>
                                    )}
                                    {showCat1 == true && (
                                        <div className="d-flex justify-content-center pb-4 ">
                                            <Scrollbars
                                                style={{
                                                    height: "170px",
                                                    width: "200px",
                                                    paddingLeft: "19px",
                                                }}
                                                className="bg-white border border-2 border-black"
                                            >
                                                {catLevel1.map((cat, index) => {
                                                    return (
                                                        <p
                                                            onClick={() => {
                                                                setselectedCategoryIndex(index);
                                                                setselectedCategory(cat);
                                                                let secondCategories = allCategories[
                                                                    index
                                                                ].subcategories.map((subb) => subb.name);
                                                                // console.log('subbbb ---> ', secondCategories)
                                                                if (secondCategories.length > 0) {
                                                                    setshowCat2(true);
                                                                    setcatLevel2(secondCategories);

                                                                    setselectedCat2("");
                                                                    setselectedCat3("");
                                                                    setselectedCat4("");
                                                                    setshowCat3(false);
                                                                    setshowCat4(false);
                                                                    setcatLevel3([]);
                                                                    setcatLevel4([]);
                                                                    handleCatSelection(cat, "", "", "");
                                                                } else {
                                                                    setshowCat2(false);
                                                                    setcatLevel2([]);
                                                                    setshowCat3(false);
                                                                    setcatLevel3([]);
                                                                    setshowCat4(false);
                                                                    setcatLevel4([]);
                                                                    handleCatSelection(cat, "", "", "");
                                                                }
                                                            }}
                                                            style={{
                                                                backgroundColor:
                                                                    index === selectedCategoryIndex
                                                                        ? "lightblue"
                                                                        : "transparent",
                                                            }}
                                                        >
                                                            {cat}
                                                        </p>
                                                    );
                                                })}
                                            </Scrollbars>
                                        </div>
                                    )}
                                </div>

                                <div className="col-sm-3 col-md-3">
                                    <br />
                                    {showCat2 === true && (
                                        <div className="d-flex justify-content-center">
                                            <h5 className="">{selectedCategory}</h5>
                                        </div>
                                    )}
                                    {showCat2 === true && (
                                        <div className="d-flex justify-content-center pb-4">
                                            <Scrollbars
                                                style={{
                                                    height: "170px",
                                                    width: "200px",
                                                    paddingLeft: "19px",
                                                    marginTop: "15px",
                                                }}
                                                className="bg-white border border-2 border-black"
                                            >
                                                {catLevel2.map((cat, index) => {
                                                    return (
                                                        <p
                                                            onClick={() => {
                                                                setselectedIndex2(index);
                                                                setselectedCat2(cat);
                                                                let catlev3 = allCategories[
                                                                    selectedCategoryIndex
                                                                ].subcategories[index].subcategories.map(
                                                                    (catt) => catt.name
                                                                );
                                                                // console.log('cat lev 3---->', catlev3)
                                                                if (catlev3.length > 0) {
                                                                    setcatLevel3(catlev3);
                                                                    setshowCat3(true);

                                                                    setselectedCat3("");
                                                                    setselectedCat4("");
                                                                    setshowCat4(false);
                                                                    setcatLevel4([]);
                                                                    handleCatSelection(
                                                                        selectedCategory,
                                                                        cat,
                                                                        "",
                                                                        ""
                                                                    );
                                                                } else {
                                                                    setshowCat3(false);
                                                                    setcatLevel3([]);
                                                                    setshowCat4(false);
                                                                    setcatLevel4([]);
                                                                    handleCatSelection(
                                                                        selectedCategory,
                                                                        cat,
                                                                        "",
                                                                        ""
                                                                    );
                                                                }
                                                            }}
                                                            style={{
                                                                backgroundColor:
                                                                    index === selectedIndex2
                                                                        ? "lightblue"
                                                                        : "transparent",
                                                            }}
                                                        >
                                                            {cat}
                                                        </p>
                                                    );
                                                })}
                                            </Scrollbars>
                                        </div>
                                    )}
                                </div>

                                <div className="col-sm-3 col-md-3">
                                    <br />
                                    {showCat3 === true && (
                                        <div className="d-flex justify-content-center">
                                            <h5 className="pb-2 py-1">{selectedCat2}</h5>
                                        </div>
                                    )}
                                    {showCat3 === true && (
                                        <div className="d-flex justify-content-center pb-4">
                                            <Scrollbars
                                                style={{
                                                    height: "170px",
                                                    width: "200px",
                                                    paddingLeft: "19px",
                                                }}
                                                className="bg-white border border-2 border-black"
                                            >
                                                {catLevel3.map((cat, index) => {
                                                    return (
                                                        <p
                                                            onClick={() => {
                                                                setselectedIndex3(index);
                                                                setselectedCat3(cat);
                                                                let catLev4 = allCategories[
                                                                    selectedCategoryIndex
                                                                ].subcategories[selectedIndex2].subcategories[
                                                                    index
                                                                ].subcategories.map((subb) => subb.name);
                                                                console.log("cat 4444--->", catLev4);
                                                                if (catLev4.length > 0) {
                                                                    setshowCat4(true);
                                                                    setcatLevel4(catLev4);
                                                                    setselectedCat4("");
                                                                    handleCatSelection(
                                                                        selectedCategory,
                                                                        selectedCat2,
                                                                        cat,
                                                                        ""
                                                                    );
                                                                } else {
                                                                    setshowCat4(false);
                                                                    setcatLevel4([]);
                                                                    handleCatSelection(
                                                                        selectedCategory,
                                                                        selectedCat2,
                                                                        cat,
                                                                        ""
                                                                    );
                                                                }
                                                            }}
                                                            style={{
                                                                backgroundColor:
                                                                    index === selectedIndex3
                                                                        ? "lightblue"
                                                                        : "transparent",
                                                            }}
                                                        >
                                                            {cat}
                                                        </p>
                                                    );
                                                })}
                                            </Scrollbars>
                                        </div>
                                    )}
                                </div>

                                <div className="col-sm-3 col-md-3">
                                    <br />
                                    {showCat4 === true && (
                                        <div className="d-flex justify-content-center">
                                            <h5 className="pb-2 py-1">{selectedCat3}</h5>
                                        </div>
                                    )}
                                    {showCat4 === true && (
                                        <div className="d-flex justify-content-center pb-4">
                                            <Scrollbars
                                                style={{
                                                    height: "170px",
                                                    width: "280px",
                                                    paddingLeft: "19px",
                                                }}
                                                className="bg-white border border-2 border-black"
                                            >
                                                {catLevel4.map((cat, index) => {
                                                    return (
                                                        <p
                                                            onClick={() => {
                                                                setselectedIndex4(index);
                                                                setselectedCat4(cat);
                                                                handleCatSelection(
                                                                    selectedCategory,
                                                                    selectedCat2,
                                                                    selectedCat3,
                                                                    cat
                                                                );
                                                            }}
                                                            style={{
                                                                backgroundColor:
                                                                    index === selectedIndex4
                                                                        ? "lightblue"
                                                                        : "transparent",
                                                            }}
                                                        >
                                                            {cat}
                                                        </p>
                                                    );
                                                })}
                                            </Scrollbars>
                                        </div>
                                    )}
                                </div>
                            </div>
                        </div>
                        {/* File List */}
                        <div className='col-md-6 col-sm-6 p-5'>
                            <div className='container row'>
                                <div className="pt-3 border border-2 p-2 border-danger pb-3">
                                    <br />
                                    <h4 style={{ textAlign: "center" }}>File List</h4>
                                    <h5 style={{ textAlign: "center" }}>Select file to show frequency</h5>
                                    <div className="d-flex justify-content-center pb-4">
                                        {showLoader === false && <Scrollbars
                                            style={{
                                                height: "800px",
                                                width: "100%",
                                                paddingLeft: "19px",
                                            }}
                                            className="bg-white border border-2 border-black"
                                        >
                                            {fileList.length > 0 && fileList.map((cat, index) => {
                                                return (
                                                    <p
                                                        onClick={() => {
                                                            // console.log('file--->', cat)
                                                            setSelectedFileIndex(index)
                                                            getFileFrequency(cat)
                                                        }}
                                                        style={{
                                                            backgroundColor:
                                                                index === selectedFileIndex
                                                                    ? "lightblue"
                                                                    : "transparent",
                                                            paddingLeft: 10
                                                        }}
                                                    >
                                                        {cat}
                                                    </p>
                                                );
                                            })}
                                        </Scrollbars>}
                                        {showLoader === true && <ColorRing
                                            visible={showLoader}
                                            height="80"
                                            width="80"
                                            ariaLabel="blocks-loading"
                                            wrapperClass="blocks-wrapper"
                                            colors={['#e15b64', '#f47e60', '#f8b26a', '#abbd81', '#849b87']}
                                        />}
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 col-sm-6 p-5">
                            <div className="pt-3 border border-2 p-2 border-danger pb-3">
                                <h4 style={{ textAlign: 'center' }}>Keyword Frequency</h4>
                                <br />
                                <div className='table-responsive'>

                                    {showFrequencyLoader == false && <table class="table table-bordered">
                                        <thead>
                                            <tr>
                                                <th scope="col" className='text-center'>Word</th>
                                                <th scope="col" className='text-center'>Frequency</th>
                                                <th scope="col" className='text-center'>Rank</th>
                                            </tr>
                                        </thead>

                                        {showFrequencyLoader === false && data.length > 0 && data.map((item, index) => (

                                            <tbody>
                                                <tr>
                                                    <td className='text-center'>{item.key}</td>
                                                    <td className='text-center'>{item.value}</td>
                                                    <td>{index + 1}</td>
                                                </tr>
                                            </tbody>
                                        ))}

                                    </table>}
                                    {showFrequencyLoader === true && <ColorRing
                                        visible={showFrequencyLoader}
                                        wrapperStyle={{ marginLeft: '40%' }}
                                        height="80"
                                        width="80"
                                        ariaLabel="blocks-loading"
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
