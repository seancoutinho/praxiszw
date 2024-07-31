import CounterUp from "@/components/elements/CounterUp"


export default function Funfacts() {
    return (
        <>        
            <section className="funfact-section centred">
                <div className="auto-container">
                    <div className="inner-container">
                    <div className="shape">
                        <div
                        className="shape-1"
                        style={{ backgroundImage: 'url(assets/images/shape/shape-18.png)' }}
                        ></div>
                        <div
                        className="shape-2"
                        style={{ backgroundImage: 'url(assets/images/shape/shape-19.png)' }}
                        ></div>
                    </div>
                    <div className="row clearfix">
                        <div className="col-lg-3 col-md-6 col-sm-12 funfact-block">
                        <div className="funfact-block-one">
                            <div className="inner-box">
                            <div className="count-outer count-box">
                                <CounterUp end={30} /><span>k+</span>
                            </div>
                            <p>Satisfied People</p>
                            </div>
                        </div>
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-12 funfact-block">
                        <div className="funfact-block-one">
                            <div className="inner-box">
                            <div className="count-outer count-box">
                                <CounterUp end={250} /><span>+</span>
                            </div>
                            <p>Expert Member</p>
                            </div>
                        </div>
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-12 funfact-block">
                        <div className="funfact-block-one">
                            <div className="inner-box">
                            <div className="count-outer count-box">
                                <CounterUp end={10} /><span>k+</span>
                            </div>
                            <p>Successful Projects</p>
                            </div>
                        </div>
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-12 funfact-block">
                        <div className="funfact-block-one">
                            <div className="inner-box">
                            <div className="count-outer count-box">
                                <CounterUp end={30} /><span>+</span>
                            </div>
                            <p>Award Winning</p>
                            </div>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
            </section>
        </>
    )
}
