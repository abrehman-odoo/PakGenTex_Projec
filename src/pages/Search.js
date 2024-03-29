import React,{Fragment} from "react";
import { Scrollbars } from "react-custom-scrollbars-2";
import { useNavigate } from "react-router-dom";
import Bar from "../components/Bar";
import { useState, useEffect } from "react";
import {response as dataa} from './RTF'
import { categories as allCategories } from "../components/Variable";
import escapeHTML from 'escape-html';
import { Text } from 'slate';
const serialize = (children) => children.map((node, i) => {
  if (Text.isText(node)) {
    let text = <span dangerouslySetInnerHTML={{ __html: escapeHTML(node.text) }} />;

    if (node.bold) {
      text = (
        <strong key={i}>
          {text}
        </strong>
      );
    }

    if (node.code) {
      text = (
        <code key={i}>
          {text}
        </code>
      );
    }

    if (node.italic) {
      text = (
        <em key={i}>
          {text}
        </em>
      );
    }

    // Handle other leaf types here...

    return (
      <Fragment key={i}>
        {text}
      </Fragment>
    );
  }

  if (!node) {
    return null;
  }

  switch (node.type) {
    case 'h1':
      return (
        <h1 key={i}>
          {serialize(node.children)}
        </h1>
      );
    // Iterate through all headings here...
    case 'h6':
      return (
        <h6 key={i}>
          {serialize(node.children)}
        </h6>
      );
    case 'quote':
      return (
        <blockquote key={i}>
          {serialize(node.children)}
        </blockquote>
      );
    case 'ul':
      return (
        <ul key={i}>
          {serialize(node.children)}
        </ul>
      );
    case 'ol':
      return (
        <ol key={i}>
          {serialize(node.children)}
        </ol>
      );
    case 'li':
      return (
        <li key={i}>
          {serialize(node.children)}
        </li>
      );
    case 'link':
      return (
        <a
          href={escapeHTML(node.url)}
          key={i}
        >
          {serialize(node.children)}
        </a>
      );

    default:
      return (
        <p key={i}>
          {serialize(node.children)}
        </p>
      );
  }
});
export default function Search() {
  const [Word, setWord] = useState("");
  const [selectedCategoryIndex, setselectedCategoryIndex] = useState(-1);
  const [selectedIndex2, setselectedIndex2] = useState(-1);
  const [selectedIndex3, setselectedIndex3] = useState(-1);
  const [selectedIndex4, setselectedIndex4] = useState(-1);

  const [showCat1, setshowCat1] = useState(true);
  const [showCat2, setshowCat2] = useState(false);
  const [showCat3, setshowCat3] = useState(false);
  const [showCat4, setshowCat4] = useState(false);

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

  const [criteria, setcriteria] = useState("");
  const categories = [
    "Ph.D Theses",
    "MPhil Research Proposal",
    "Novels",
    "Pakistani Textbooks",
    "Newspaper Articles",
    "Magazines Articles",
    "Editorials",
  ];
  let navigation = useNavigate();
  const Searchword = async (e) => {
    // setIsLoading(true)
    navigation("/Sresult", {
      state: {
        Word: Word,
        criteria: criteria !== "" ? criteria : "Academics",
      },
    });
  };
  // useEffect(() => {
  //   fetch('https://1489-2406-da1a-33b-2900-369d-b3a6/api/vmeals-header', {
  //     method: "GET",
  //     headers: {
  //       "Content-Type": "application/json",
  //       "Bypass-Tunnel-Reminder": "true"
  //     }
  //   })
  //     .then(response => {
  //       console.log('response--->', response)
  //     })
  // })

  const searchKWIC = async (e) => {
    // setIsLoading(true)
    navigation("/KWIC", {
      state: {
        Word: Word,
        criteria: criteria !== "" ? criteria : "Academics",
      },
    });
  };
  const getFrequency = async (e) => {
    // setIsLoading(true)
    navigation("/Frequency", {
      state: {
        criteria: criteria !== "" ? criteria : "Academics",
      },
    });
  };
  const SearchConcordance = async (e) => {
    // setIsLoading(true)
    if (Word !== '') {
      navigation("/Concordance", {
        state: {
          Word: Word,
          criteria: criteria !== "" ? criteria : "Academics",
        },
      });
    }
  };
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
    console.log("in handle change --->", filePath);
    setcriteria(filePath);
  };
  return (
    <div>
      <Bar />
      <div className="container">
        <br />
        <strong>
          {" "}
          &nbsp; &nbsp; Find the key words through typing in the box. This tool
          provides key word list along with the frequency of occurance in the
          data sets.
        </strong>
        <div className="row">
          <div className="col-md-6 col-sm-6 p-5">
            <div className="pt-3 border border-1 p-1">
              <h6 className="p-3">
                {/* {serialize(dataa.docs[0].VMealsClassicDietdescriptionParagraphs)} */}
                Human language is not static and uniform; but keeps on evolving with the passage of time. In consequence, language variation gradually develops due to a number of social variables. One of the most significant social variables is gender. Gender plays a significant role in generating language variation between men and women. In Pakistan, no such corpus has been developed so far which can distinctly focus on the language used by men and women. There is a dire need to develop a corpus by employing modern methods to develop and maintain corpus. So, this research project aims to develop a corpus (PakGenText) which will not only distinguish the use of language in different genre but also focuses on gender-based language use in different genre.
              </h6>
              <br />
            </div>
          </div>

          <div className="col-md-6 col-sm-6 p-5">
            <div className="pt-3">
              <input
                placeholder="Find Word"
                className="m-1 rounded border w-75"
                onChange={(e) => setWord(e.target.value)}
              />
              <div className="d-flex" style={{ justifyContent: 'center', width: '60%' }}>
                {/* <button
                  className="p-1 px-5 rounded border text-white"
                  style={{ backgroundColor: "#c40404" }}
                  onClick={Searchword}
                >
                  <i class="fa fa-search"></i>
                </button> */}
                <button
                  className="p-1 px-5 rounded border text-white"
                  style={{ backgroundColor: "darkblue", color: "white" }}
                  onClick={SearchConcordance}
                >
                  Concordance
                  {/* <i class="fa fa-search"></i> */}
                </button>

              </div>
              <div style={{ marginTop: 10 }} className="d-flex">
                <button
                  className="p-1 px-5 rounded border text-white"
                  style={{ backgroundColor: "green" }}
                  onClick={searchKWIC}
                >
                  {/* <i class="fa fa-search"></i> */}
                  KWIC
                </button>
                <button
                  className="p-1 px-5 rounded border text-white"
                  style={{ backgroundColor: "brown" }}
                  onClick={getFrequency}
                >
                  {/* <i class="fa fa-search"></i> */}
                  Frequency
                </button>
              </div>
              {showCat1 === true && (
                <div className="d-flex justify-content-center">
                  <h5>
                    <br />
                    Select Category
                  </h5>
                </div>
              )}
              <div className="container row d-flex col-md-12 col-sm-12">
                <div className="col-sm-6 col-md-6">
                  <br />
                  <br />
                  <br />
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

                <div className="col-sm-6 col-md-6">
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

                <div className="col-sm-6 col-md-6">
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

                <div className="col-sm-6 col-md-6">
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
          </div>
        </div>
      </div>
    </div>
  );
}
