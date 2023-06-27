import { useDispatch, useSelector } from "react-redux";
// import { deposite, withdrow } from "../redux/actions/atm-action";
import { useState } from "react";
import { deposite, withdraw } from "../rtk/slices/atm-slice";

function BankTransactions() {
  const state = useSelector(state => state.atm);
  const [amount, setAmount] = useState(0);
  const dispatch = useDispatch();
  return (
    <>
      <div className="container mt-5">
        <h1>Bank Account Balance</h1>
        <div className="row justify-content-md-center mt-4">
          <div className="col col-md-3">
            <label for="Title" className="form-label">  {state} </label>
            <input type="number" className="form-control" id="Title"  onChange={(e) => setAmount(e.target.value)}/>
          </div>
        </div>
        <button className="btn btn-primary m-2" onClick={ ()=> dispatch(withdraw(+amount))}>  withdraw </button>
        <button className="btn btn-primary m-2" onClick={ ()=> dispatch(deposite(+amount))}>  deposite </button>
      </div>
    </>
  );
}

export default BankTransactions;
