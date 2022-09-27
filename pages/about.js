import React from 'react'
//import Image from 'next/image'
const about = () => {
  return (
    <div>
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous"/>
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM" crossorigin="anonymous"></script>
        <div class="card mb-3">
            <img src="/about1.jpg" height="500px" width="auto" style={{objectFit:"cover" }} padding="50px" class="card-img-top" alt="..."/>
            <div class="card-body">
                <div class="card-text"  style={{marginLeft:"230px", marginRight:"230px", marginTop:"50px", fontFamily:"sans-serif", fontSize:"20px"}} >
                <p>Data shows that almost 80% of the entrepreneurs are not able to launch their 1st version of the idea due to the lack of technical knowledge or high amount of money needed to build the 1st version of their app/website.</p>
                <br></br>
                <p>Atomx is a tech company with the aim to solve above problem.</p>
                <br></br>
                    <p>We help all the entrepreneurs with their 1st version of tech at a very affordable rate so that they can launch their MVP easily and can have initial traction.</p>
      </div>
               </div>
     </div>
    </div>
  )
}

export default about