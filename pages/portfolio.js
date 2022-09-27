import React from 'react'

const portfolio = () => {
  return (
    <div>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous"/>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM" crossorigin="anonymous"></script>
    <div class="card mb-3">
        <img src="/portfolio.jpg" height="600px" width="auto" style={{objectFit:"fill" }} padding="50px" class="card-img-top" alt="image"/>
        <h2 style={{marginLeft:"350px", marginTop:"30px", marginBottom:"20px"}}>Some of the projects which we have delivered</h2>
        <div class="card-body">
        <div class="row">
  <div class="col-sm-6">
    <div class="card">
      <div class="card-body">
        <h5 class="card-title">Atom Android App</h5>
        <p class="card-text">A social media app for doers.</p>
        <a href="https://play.google.com/store/apps/details?id=wiki.atom.app" class="btn btn-primary">Open</a>
      </div>
    </div>
  </div>
  <div class="col-sm-6">
    <div class="card">
      <div class="card-body">
        <h5 class="card-title">Atom IOS App</h5>
        <p class="card-text">A social media app for doers.</p>
        <a href="https://apps.apple.com/in/app/atom-community-for-startups/id1613877132" class="btn btn-primary">Open</a>
      </div>
    </div>
  </div>
</div>
           </div>
 </div>
</div>
  )
}

export default portfolio