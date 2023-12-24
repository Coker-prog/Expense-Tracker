import PropTypes from "prop-types";
import { MdCancel } from "react-icons/md";
import { delete_datas } from "../features/expenseSlice";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";


const Transaction = (data) => {
  const sign = data.data.amount < 0 ? "-" : "+";
  const dispatch = useDispatch();

  const { id } = useParams();
  const handleDelte = () => {
    fetch("http://localhost:3000/datas/" + id,{
      method: "DELETE",
    })
    .then((res) => {
      console.log(res)
      return dispatch(delete_datas(res.id));
    });
  };

  return (
    <>
      <div className="flex items-center">
        <MdCancel onClick={handleDelte} />
        <li className={data.data.amount < 0 ? "minus" : "plus"}>
          {data.data.text}
          <span>
            {sign}${Math.abs(data.data.amount)}
          </span>
        </li>
      </div>
    </>
  );
};
Transaction.propTypes = {
  data: PropTypes.object.isRequired,
};
export default Transaction;
