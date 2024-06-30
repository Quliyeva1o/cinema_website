import { Button, Result } from "antd";
// import { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
// import MainContext from '../../../context/context'
// import "./Success.css"

const Success = () => {
//   const { setBasket } = useContext(MainContext);

//   useEffect(() => {
//     setBasket([]);
//   }, [setBasket]);

  return (
    <div className="success-page">
      <div className="container">
        salam
        {/* <Result
          status="success"
          title="Ödəniş uğurla edildi!"
          subTitle="Sifarişiniz uğurlu tamamlandı"
          extra={[
            <Link to={"/"} key="home">
              <Button type="primary">Ana Səhifə</Button>
            </Link>,

            <Link to={"/CheckOut"}><Button  key="buy">Sifarişlərim</Button></Link>,
          ]}
        /> */}
      </div>
    </div>
  );
};

export default Success;