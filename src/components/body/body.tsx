import shape from "../../../public/shape_1.svg";
import avatar from "../../../public/avatar.png"
import circle from "../../../public/circle.svg";
import search_icon from "../../../public/search.svg";
import schedule from "../../../public/schedule.svg";
import clock from "../../../public/clock.svg";
import option from "../../../public/option.svg";
import NewComp from "../new/new";
import Ongoing from "../ongoing/ongoing";
import Finished from "../finished/finished";
import Transit from "../transit/transit";
import "./body.css";
export default function Body(){


    return (
        <div className="body">
            <div className="body-side">
                <div className="body-btn-wrapper">
                   <div className="side-menu">
                       <img src={shape} alt="button" />
                   </div>
                </div>
                <div className="body-btn-wrapper">
                    <div className="body-btn">
                        <img src={circle} alt="settings" />
                    </div>
                </div>
                
                <div className="body-btn-wrapper">
                    <div className="user-img">
                        <img src={avatar} alt="" />
                    </div>
                </div>
            </div>
            <div className="main-wrapper">
                <div className="main-nav">
                    <div className="search-bar-wrapper">
                        <div className="search-bar">
                            <div className="search-icon">
                                <img src={search_icon} alt="search" />
                            </div>
                            <div>
                                <input type="text" placeholder="Поиск по ID"/>
                            </div>
                        </div>
                    </div>
                    <div className="total-wrapper">
                        <div className="total">
                            <div className="total-icon">
                                <img src={schedule} alt="schedule" />
                            </div>
                            <div className="total-number">
                                <option value="1">
                                    Всего: 115
                                </option>
                            </div>
                            <div className="total-icon">
                                <img src={option} alt="schedule" />
                            </div>
                        </div>
                        </div>
                        <div className="time-wrapper">
                            <div className="time">
                            <div className="time-icon">
                                <img src={clock} alt="clock" />
                            </div>
                            <div className="time-clock">
                                45:08
                            </div>
                            </div>

                        </div>
                   
                </div>
                <div className="main-orders">
                    <div className="new">
                        <div className="new-header-wrapper">
                            <div className="new-header">
                                Новый (5)
                            </div>
                        </div>
                        <NewComp/>
                    </div>
                    <div className="ongoing">
                        <div className="ongoing-header-wrapper">
                            <div className="ongoing-header">
                                Заготовка (3)
                            </div>
                        </div>
                        <Ongoing/>
                    </div>
                    <div className="finished">
                        <div className="finished-header-wrapper">
                            <div className="finished-header">
                                Готов (3)
                            </div>
                        </div>
                        <Finished/>
                    </div>
                    <div className="transit">
                        <div className="transit-header-wrapper">
                            <div className="transit-header">
                                Курьер в пути (1)
                            </div>
                        </div>
                        <Transit/>
                    </div>
                </div>
            </div>
        </div>
    )
}