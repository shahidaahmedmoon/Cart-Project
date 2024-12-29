const ProductList = () => {

    let data = [

        {
            "title": "iPhone 16 pro MAX",
            "description": "Lorem ipsum dolor sit amet,consetetur",
            "price": "150000",
            "image": "/banner2.jpg",
        },
        {
            "title": "iPhone 16 pro",
            "description": "Lorem ipsum dolor sit amet,consetetur",
            "price": "140000",
            "image": "/banner3.jpg",
        },
        {
            "title": "iPhone 16",
            "description": "Lorem ipsum dolor sit amet,consetetur",
            "price": "155000",
            "image": "/banner2.jpg",
        },
        {
            "title": "iPhone 15",
            "description": "Lorem ipsum dolor sit amet,consetetur",
            "price": "110000",
            "image": "/banner4.jpg",
        },
        {
            "title": "iPhone 16 pro MAX",
            "description": "Lorem ipsum dolor sit amet,consetetur",
            "price": "150000",
            "image": "/banner.jpg",
        },
        {
            "title": "iPhone 16 pro MAX",
            "description": "Lorem ipsum dolor sit amet,consetetur",
            "price": "150000",
            "image": "/banner2.jpg",
        },
        {
            "title": "iPhone 15 pro MAX",
            "description": "Lorem ipsum dolor sit amet,consetetur",
            "price": "150000",
            "image": "/banner3.jpg",
        },
        {
            "title": "iPhone 16 pro",
            "description": "Lorem ipsum dolor sit amet,consetetur",
            "price": "153300",
            "image": "/banner.jpg",
        },
        {
            "title": "iPhone 16 pro MAX",
            "description": "Lorem ipsum dolor sit amet,consetetur",
            "price": "158000",
            "image": "/banner4.jpg",
        },
        {
            "title": "iPhone 16 pro MAX",
            "description": "Lorem ipsum dolor sit amet,consetetur",
            "price": "160000",
            "image": "/banner5.jpg",
        },
        {
            "title": "iPhone 11 pro MAX",
            "description": "Lorem ipsum dolor sit amet,consetetur",
            "price": "80000",
            "image": "/banner6.jpg",
        },
        {
            "title": "iPhone 13 pro MAX",
            "description": "Lorem ipsum dolor sit amet,consetetur",
            "price": "100000",
            "image": "/banner4.jpg",
        },
        {
            "title": "iPhone 15 pro MAX",
            "description": "Lorem ipsum dolor sit amet,consetetur",
            "price": "150000",
            "image": "/banner.jpg",
        },
        {
            "title": "iPhone 16 pro MAX",
            "description": "Lorem ipsum dolor sit amet,consetetur",
            "price": "180000",
            "image": "/banner5.jpg",
        },
        {
            "title": "iPhone 16 pro MAX",
            "description": "Lorem ipsum dolor sit amet,consetetur",
            "price": "250000",
            "image": "/banner3.jpg",
        }
    ]


    return (

        <div className="container section">
            <div className="row">
                {
                    data.map((item, index) => {
                        return (
                            <div className="col-md-3 p-3">
                                <div className="card shadow-sm rounded-3 border-0 p-0">

                                    <img className="card-img-top w-100" src={item['image']} alt=""/>

                                    <div className="card-body">
                                        <p className="p-1 m-0 fw-light">{item['title']}</p>
                                        <p className="p-1 fw-bold">BDT {item['price']}</p>
                                    </div>

                                </div>
                            </div>
                        )
                    }) // Close the map function properly
                }
            </div>
        </div>
    );
};


    export default ProductList;