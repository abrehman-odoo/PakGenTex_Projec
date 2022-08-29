import React, { useState ,useEffect} from 'react'
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import axios from "axios";
import { useLocation } from 'react-router-dom'
import Bar from '../components/Bar'
import { url } from '../components/Variable'


export default function Sresult() {

  const [page, setpage] = useState(1)
  const load = async () => {
    
    await axios.post(`https://e728-185-202-239-227.ngrok.io/pakgentex/searchWord/${page}`);
  };
  useEffect(() => {
    load();
  }, []);
  const location = useLocation()

  const abc = location.state.rehman.data
  const WordSave = location.state.Word;
  return (
    <div>
      {/* {console.log("Location is ",abc)} */}
      {console.log(page)}
        <Bar/>
        <div style={{ }}>
        <div className="container">
          <div className="row">

            <div className="col-md-12 col-sm-12 p-5">
              <div className="container row">
              &nbsp;
              
                <div className="float-start col-md-4 col-sm-4">
                  <p>Word: <strong className="text-danger"> {WordSave}</strong></p>
                </div>
                &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;  &nbsp; &nbsp; 
                &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp;
                &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;  &nbsp; &nbsp; 
                <div className="float-end col-md-3 col-sm-3">
                  
                <Stack spacing={2}>
      <Pagination count={30} color="primary" 
      onChange={(e, value) =>setpage(value)}/>
    </Stack>
                </div>
              </div>
              <br/>
              <div className="pt-3 border border-2 p-2 border-danger pb-3">
                <br />
                <div className='table-responsive'>

                <table class="table table-bordered">
                  <thead>
                      <tr>
                        <th scope="col" className='text-center'>Context (Left)</th>
                        <th scope="col" className='text-center'>Context (Matched)</th>
                        <th scope="col" className='text-center'>Context (Right)</th>
                        <th scope="col" className='text-center'>Click (View or Download)</th>
                      </tr>
                  </thead>

                  {abc.map((item)=>(
                    
                  <tbody>
                          <tr>
                            <td className='text-center'>{item.preText}</td>
                            <td className='text-danger text-center' ><strong>{item.complete}</strong></td>
                            <td className='text-center'>{item.postText}</td>
                          <td className="text-center"><a href=''>{item.filename}</a></td>
                          </tr>
                  </tbody>
                  ))}
                </table>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  )
}
