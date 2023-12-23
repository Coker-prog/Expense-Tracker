import PropTypes from "prop-types";
import { MdCancel } from "react-icons/md";

const Transaction = (data) => {
    const sign = data.data.amount < 0 ? '-' : '+';
  console.log(data);
  return (
    <>
    <div className="flex items-center">
    <MdCancel/>
    <li   className={data.data.amount <  0 ? 'minus' : 'plus'}>
        {data.data.text} <span> {sign}${Math.abs(data.data.amount)}</span>
      </li>
    </div>
    </>
  );
};
Transaction.propTypes = {
  data: PropTypes.object.isRequired,
};
export default Transaction;
