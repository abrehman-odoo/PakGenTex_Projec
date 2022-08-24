import React from 'react'
import Bar from '../components/Bar'

export default function Sresult() {

  const dummy = [
    {
      l:"are" , c:'you' , r:'good' , download:'File to View/Download',
    },
    {
      l:"are" , c:'you' , r:'good' , download:'File to View/Download',
    },
    {
      l:"are" , c:'you' , r:'good' , download:'File to View/Download',
    },   {
      l:"are" , c:'you' , r:'good' , download:'File to View/Download',
    },
    {
      l:"are" , c:'you' , r:'good' , download:'File to View/Download',
    },
    {
      l:"are" , c:'you' , r:'good' , download:'File to View/Download',
    },   {
      l:"are" , c:'you' , r:'good' , download:'File to View/Download',
    },   {
      l:"are" , c:'you' , r:'good' , download:'File to View/Download',
    },
    
  ]
  return (
    <div>
        <Bar/>
        <div style={{ }}>
        <div className="container">
          <div className="row">

            <div className="col-md-12 col-sm-12 p-5">
              <div className="container row">
              &nbsp;
              
                <div className="float-start col-md-4 col-sm-4">
                  <p>Word: <strong className="text-danger"> ARE</strong></p>
                </div>
                &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;  &nbsp; &nbsp; 
                &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp;
                &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;  &nbsp; &nbsp; 
                <div className="float-end col-md-3 col-sm-3">
                  
                <select class="form-select">
                    <option value="all">Sort By</option>{" "}
                    <option value="fiction">A</option>{" "}
                    <option value="news">B</option>{" "}
                    <option value="articles">C</option>{" "}
                  </select>
                  
                </div>
              </div>
              <br/>
              <div className="pt-3 border border-2 p-2 border-danger pb-3">
                <br />
                <div className='table-responsive'>

                <table class="table">
                  <thead>
                      <tr>
                        <th scope="col" className='text-center'>Context (Left)</th>
                        <th scope="col" className='text-center'>Context (Matched)</th>
                        <th scope="col" className='text-center'>Context (Right)</th>
                        <th scope="col" className='text-center'>Click (View or Download)</th>
                      </tr>
                  </thead>

                  {dummy.map((item)=>(
                    
                  <tbody>
                          <tr>
                            <td className='text-center'>{item.l}</td>
                            <td className='text-danger text-center' ><strong>{item.c}</strong></td>
                            <td className='text-center'>{item.r}</td>
                          <td className="text-center"><a href=''>{item.download}</a></td>
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
