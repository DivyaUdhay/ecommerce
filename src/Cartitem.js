function Cartitem(props){
    return(
        <li className="list-group-item d-flex justify-content-between align-items-start">
                  <div className="ms-2 me-auto">
                    <div className="fw-bold">{props.data.title}</div>
                    {props.data.price}
                  </div>
                  <span onClick={() => props.handleRemoveCart(props.data.id)} className="badge bg-primary rounded-pill">X</span>
                </li>
    );
}
export default Cartitem;