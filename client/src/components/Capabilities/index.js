import React from "react";
import map from "../../../assets/map-desctop2.png";
import exp from "../../../assets/exp.png";
import part from "../../../assets/2.png";
import grow from "../../../assets/3.png";
import intg from "../../../assets/4.png";
import "./index.css";


export default class Capabilities extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            show: true,
            showImage: true
        };
    }
    // export const Capabilities = (props) => {
    render() {
        const { show } = this.state;
        return (
            <div className="container" >
                <div className="block-container">
                    {show &&
                        <React.Fragment>
                            <div id="bk" className="block">
                                <img className="exp" src={exp} />
                                <p className="top">Опыт работы</p>
                                <p className="content">Опыт работы с передовыми технологиями разработки сложных и интересных продуктов и уникальной стратегией тестирования, обеспечивающей бесперебойную работу продукта.</p>
                            </div>
                            <div id="bk" className="block">
                                <img className="exp" src={grow} />
                                <p className="top">Карьерный рост</p>
                                <p className="content">Непременный карьерный рост, профессиональное развитие и общение с ведущими экспертами Massachusetts Institute of Technology.</p>
                            </div>
                        </React.Fragment>
                    }
                </div>
                <div className="img-wraper">
                    <img className="map" src={map} />
                </div>
                <div className="block-container">
                    {show &&
                        <React.Fragment>
                            <div id="bk" className="block">
                                <img className="exp" src={part} />
                                <p className="top">Участие в крупных проектах</p>
                                <p className="content">Прямое и косвенное участие в создании крупных проектов в соответствии с международными стандартами эксплуатации внедрения IT решений.</p>
                            </div>
                            <div id="bk" className="block">
                                <img className="exp" src={intg} />
                                <p className="top">Полная интеграция</p>
                                <p className="content">Полная интеграция в работу наших компаний-партнеров, крупнейших корпораций и лидеров мировых рынков отрасли финансовых технологий.</p>
                            </div>
                        </React.Fragment>
                    }
                </div>
            </div>
        );
    }
}
