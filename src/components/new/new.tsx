
import alert_icon from "../../../public/alert-circle.svg";
import market_icon from "../../../public/market.svg";
import payme from "../../../public/payme.png";
import order_clock from "../../../public/order-clock.svg";
import cancel_red from "../../../public/cancel-red.svg";
import confirm_icon from "../../../public/confirm-icon.svg";
import qiwi from "../../../public/qiwi.png";
import upay from "../../../public/upay.png";
import cash from "../../../public/cash.svg";
import cash2 from "../../../public/cash2.svg";
import human from "../../../public/human.svg";
import "./new.css"
export default function NewComp(){
    
    return (
        <div className="new-wrapper">
            <div className="new-order">
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
                                        <img src={payme} alt="" />
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
                                <div className="order-confirm-wrapper">
                                    <div className="order-confirm-cancel">
                                        <div className="order-confirm-cancel-icon">
                                            <img src={cancel_red} alt="cancel-icon" />
                                        </div>
                                        <div className="order-confirm-cancel-text">
                                        Отменить
                                        </div>
                                    </div>
                                    <div className="order-confirm-confirm">
                                        <div className="order-confirm-confirm-icon">
                                            <img src={confirm_icon} alt="confirm-icon" />
                                        </div>
                                        <div className="order-confirm-confirm-text">
                                        Принять
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="new-order">
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
                                        <img src={qiwi} alt="" />
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
                                <div className="order-confirm-wrapper">
                                    <div className="order-confirm-cancel">
                                        <div className="order-confirm-cancel-icon">
                                            <img src={cancel_red} alt="cancel-icon" />
                                        </div>
                                        <div className="order-confirm-cancel-text">
                                        Отменить
                                        </div>
                                    </div>
                                    <div className="order-confirm-confirm">
                                        <div className="order-confirm-confirm-icon">
                                            <img src={confirm_icon} alt="confirm-icon" />
                                        </div>
                                        <div className="order-confirm-confirm-text">
                                        Принять
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="new-order">
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
                                <div className="order-confirm-wrapper">
                                    <div className="order-confirm-cancel">
                                        <div className="order-confirm-cancel-icon">
                                            <img src={cancel_red} alt="cancel-icon" />
                                        </div>
                                        <div className="order-confirm-cancel-text">
                                        Отменить
                                        </div>
                                    </div>
                                    <div className="order-confirm-confirm">
                                        <div className="order-confirm-confirm-icon">
                                            <img src={confirm_icon} alt="confirm-icon" />
                                        </div>
                                        <div className="order-confirm-confirm-text">
                                        Принять
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="new-order">
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
                                        <img src={human} alt="" />
                                 
                                </div>
                            </div>
                            <div className="order-body">
                                <div className="order-info">
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
                                <div className="order-confirm-wrapper">
                                    <div className="order-confirm-cancel">
                                        <div className="order-confirm-cancel-icon">
                                            <img src={cancel_red} alt="cancel-icon" />
                                        </div>
                                        <div className="order-confirm-cancel-text">
                                        Отменить
                                        </div>
                                    </div>
                                    <div className="order-confirm-confirm">
                                        <div className="order-confirm-confirm-icon">
                                            <img src={confirm_icon} alt="confirm-icon" />
                                        </div>
                                        <div className="order-confirm-confirm-text">
                                        Принять
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="new-order">
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
                                        <img src={upay} alt="" />
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
                                <div className="order-confirm-wrapper">
                                    <div className="order-confirm-cancel">
                                        <div className="order-confirm-cancel-icon">
                                            <img src={cancel_red} alt="cancel-icon" />
                                        </div>
                                        <div className="order-confirm-cancel-text">
                                        Отменить
                                        </div>
                                    </div>
                                    <div className="order-confirm-confirm">
                                        <div className="order-confirm-confirm-icon">
                                            <img src={confirm_icon} alt="confirm-icon" />
                                        </div>
                                        <div className="order-confirm-confirm-text">
                                        Принять
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
        </div>
                        
    )
}