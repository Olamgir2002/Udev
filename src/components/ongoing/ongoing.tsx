
import alert_icon from "../../../public/alert-circle.svg";
import market_icon from "../../../public/market.svg";
import order_clock from "../../../public/order-clock.svg";
import comment_btn from "../../../public/comment-btn.svg";
import comment_stat from "../../../public/comment-status-icon.svg";
import cash2 from "../../../public/cash2.svg";
import "./ongoing.css"
export default function Ongoing(){
    
    return (
        <div className="ongoing-wrapper">
            <div className="ongoing-order">
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
                                        <img src={cash2} alt="" />
                                        <img src={market_icon} alt="" />
                                 
                                </div>
                            </div>
                            <div className="order-body">
                                <div className="order-info">
                                    <div className="order-desc">
                                        3 x Пепси 0,5
                                    </div>
                                </div>
                                <div className="order-info">
                                    <div className="order-desc">
                                        1 x Гамбургер
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
                                        1 x Лаваш мясной Standart острый
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
                                    <div className="comment-wrapper">
                                        <div className="comment-text">
                                            Комментарии(1) <span>+3</span>
                                        </div>
                                        <div className="comment-btn">
                                            <img src={comment_btn} alt="comment-btn" />
                                        </div>
                                    </div>
                                    <div className="comment-status-wrapper">
                                        <div className="comment-status">
                                            <div className="comment-status-icon">
                                                <img src={comment_stat} alt="comment-status-icon" />
                                            </div>
                                            <div className="comment-text">
                                                Готово
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="ongoing-order">
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
                                        <img src={cash2} alt="" />
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
                        <div className="ongoing-order">
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
                                        <img src={cash2} alt="" />
                                        <img src={market_icon} alt="" />
                                 
                                </div>
                            </div>
                            <div className="order-body">
                            <div className="order-info">
                                    <div className="order-desc">
                                        1 x Гамбургер
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
                        
        </div>
                        
    )
}