
const forms1 = () =>{
        return `
<div class="row">
    <div class="col-9">
<input type="text" class="form-control movie text-center clear" placeholder="Movie Title" aria-label="Movie">
</div>
<div class="col-2">
<button type="submit" class="btn btn-outline-success btn-block make">Submit</button>   
</div>
</div>
    `
}
const forms2 = () =>{
    return `
<div class="row">
<button type="submit" class="btn btn-outline-danger btn-block">Clear</button>
    `
}
export {forms1, forms2};