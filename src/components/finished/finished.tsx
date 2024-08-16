
import alert_icon from "../../../public/alert-circle.svg";
import market_icon from "../../../public/market.svg";
import order_clock from "../../../public/order-clock.svg";
import cash from "../../../public/cash.svg";
import human from "../../../public/human.svg";
import "./finished.css"
export default function Finished(){
    
    return (
        <div className="finished-wrapper">
                    <div className="finished-order">
                            <div className="order-header">
                                <div className="order-header-id-wrapper">
                                    <div className="order-header-id">
                                    ID: 321545
                                    </div>
                                    <div className="order-header-id-icon">
                                        <img src={alert_icon} alt="" />
                                    </div>
                                </div>
                                <div className="order-header-details-wrapper">
                                    <div className="order-header-price">
                                    300 560 сум
                                    </div>
                                        <img src={cash} alt="" />
                                        <img src={human} alt="" />
                                 
                                </div>
                            </div>
                            <div className="order-body">
                                <div className="order-info">
                                    <div className="order-desc">
                                        2 x Лаваш мясной Standart острый
                                    </div>
                                </div>
                                <div className="order-time-wrapper">
                                    <div className="order-time">
                                        <div className="order-time-icon">
                                            <img src={order_clock} alt="order-clock" />
                                        </div>
                                        <div className="order-time-clock">
                                            15:22
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    <div className="finished-order">
                            <div className="order-header">
                                <div className="order-header-id-wrapper">
                                    <div className="order-header-id">
                                    ID: 321545
                                    </div>
                                    <div className="order-header-id-icon">
                                        <img src={alert_icon} alt="" />
                                    </div>
                                </div>
                                <div className="order-header-details-wrapper">
                                    <div className="order-header-price">
                                    300 560 сум
                                    </div>
                                        <img src={cash} alt="" />
                                        <img src={market_icon} alt="" />
                                 
                                </div>
                            </div>
                            <div className="order-body">
                            <div className="order-info">
                                    <div className="order-desc">
                                        1 x Big Gamburger
                                    </div>
                                    <div className="order-comment">
                                    С сыром
                                    </div>
                                    <div className="order-comment">
                                    Без лука
                                    </div>
                                </div>
                                <div className="order-info">
                                    <div className="order-desc">
                                        4 x Пепси 0,5
                                    </div>
                                </div>

                                <div className="order-info">
                                    <div className="order-desc">
                                        2 x Лаваш мясной Standart острый
                                    </div>
                                </div>
                                <div className="order-info">
                                    <div className="order-desc">
                                        1 x Дабл бургер
                                    </div>
                                    <div className="order-comment">
                                    С сыром
                                    </div>
                                    <div className="order-comment">
                                    Без лука
                                    </div>
                                </div>
                                <div className="order-time-wrapper">
                                    <div className="order-time">
                                        <div className="order-time-icon">
                                            <img src={order_clock} alt="order-clock" />
                                        </div>
                                        <div className="order-time-clock">
                                            15:22
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                        <div className="finished-order">
                            <div className="order-header">
                                <div className="order-header-id-wrapper">
                                    <div className="order-header-id">
                                    ID: 321545
                                    </div>
                                    <div className="order-header-id-icon">
                                        <img src={alert_icon} alt="" />
                                    </div>
                                </div>
                                <div className="order-header-details-wrapper">
                                    <div className="order-header-price">
                                    300 560 сум
                                    </div>
                                        <img src={cash} alt="" />
                                        <img src={market_icon} alt="" />
                                 
                                </div>
                            </div>
                            <div className="order-body">
                                <div className="order-info">
                                    <div className="order-desc">
                                        2 x Лаваш мясной Standart острый
                                    </div>
                                </div>
                                <div className="order-time-wrapper">
                                    <div className="order-time">
                                        <div className="order-time-icon">
                                            <img src={order_clock} alt="order-clock" />
                                        </div>
                                        <div className="order-time-clock">
                                            15:22
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="finished-order">
                            <div className="order-header">
                                <div className="order-header-id-wrapper">
                                    <div className="order-header-id">
                                    ID: 321545
                                    </div>
                                    <div className="order-header-id-icon">
                                        <img src={alert_icon} alt="" />
                                    </div>
                                </div>
                                <div className="order-header-details-wrapper">
                                    <div className="order-header-price">
                                    300 560 сум
                                    </div>
                                        <img src={cash} alt="" />
                                        <img src={human} alt="" />
                                 
                                </div>
                            </div>
                            <div className="order-body">
                                <div className="order-info">
                                    <div className="order-desc">
                                        2 x Лаваш мясной Standart острый
                                    </div>
                                </div>
                                <div className="order-time-wrapper">
                                    <div className="order-time">
                                        <div className="order-time-icon">
                                            <img src={order_clock} alt="order-clock" />
                                        </div>
                                        <div className="order-time-clock">
                                            15:22
                                        </div>
                                    </div>
                                </div>
                                <div className="order-status">
                                    <div className="comment-status-wrapper">
                                        <div className="comment-status">
                                            <div className="comment-text">
                                                Завершить
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
        </div>
                        
    )
}