class BaiTapChonKinh extends React.Component {

    state = {
        danhSachKinh: [],
        kinhDangChon: null
    };


    
    componentDidMount() {

        fetch("./dataGlasses.json")
            .then(response => response.json())
            .then(data => {

                this.setState({
                    danhSachKinh: data
                });

            })
            .catch(error => {
                console.log("Lỗi lấy dữ liệu:", error);
            });
    }


    
    chonKinh = (kinh) => {

        this.setState({
            kinhDangChon: kinh
        });

    };


    render() {

        const {
            danhSachKinh,
            kinhDangChon
        } = this.state;


        return (

            <div className="app">


                {/* ================= HEADER ================= */}

                <header className="header">

                    <h4>
                        TRY GLASSES APP ONLINE
                    </h4>

                </header>


                {/* ================= BODY ================= */}

                <div className="container">

                    <div className="row justify-content-center">


                        {/* ================= NGƯỜI MẪU GỐC ================= */}

                        <div className="col-md-4">

                            <div className="model-card">

                                <img
                                    src="./glassesImage/model.jpg"
                                    alt="Người mẫu"
                                    className="model-image"
                                />

                            </div>

                        </div>


                        {/* ================= NGƯỜI MẪU SAU KHI CHỌN KÍNH ================= */}

                        <div className="col-md-4">

                            <div className="model-card">

                                <img
                                    src="./glassesImage/model.jpg"
                                    alt="Người mẫu"
                                    className="model-image"
                                />


                                {/* Kính được chọn */}

                                {kinhDangChon && (

                                    <img
                                        src={kinhDangChon.url}
                                        alt={kinhDangChon.name}
                                        className="selected-glasses"
                                    />

                                )}


                                {/* Thông tin kính */}

                                {kinhDangChon && (

                                    <div className="glass-info">

                                        <h6>
                                            {kinhDangChon.name}
                                        </h6>

                                        <p>
                                            {kinhDangChon.desc}
                                        </p>

                                    </div>

                                )}

                            </div>

                        </div>

                    </div>


                    {/* ================= DANH SÁCH KÍNH ================= */}

                    <div className="glasses-list">

                        <div className="row justify-content-center">

                            {danhSachKinh.map((kinh) => (

                                <div
                                    className="col-6 col-sm-4 col-md-2"
                                    key={kinh.id}
                                >

                                    <div
                                        className="glass-item"
                                        onClick={() => this.chonKinh(kinh)}
                                    >

                                        <img
                                            src={kinh.url}
                                            alt={kinh.name}
                                        />

                                    </div>

                                </div>

                            ))}

                        </div>

                    </div>

                </div>

            </div>
        );
    }
}




const root = ReactDOM.createRoot(
    document.getElementById("root")
);

root.render(
    <BaiTapChonKinh />
);