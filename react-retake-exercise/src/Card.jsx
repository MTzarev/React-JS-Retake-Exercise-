import mops from "./assets/mops.jfif"
function Card (){

    return(
<div className="card">
<img className="card-img" src={mops} alt="Profile picture"></img>
<h2 className="card-title">Test Card</h2>
<p className="card-text">This is my exercise</p>
</div>
    );
}
export default Card;