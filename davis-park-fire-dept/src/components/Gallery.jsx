import Lightbox from 'yet-another-react-lightbox';
import { useEffect, useState } from "react";
import { Container } from 'react-bootstrap';
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col";
import Image from 'react-bootstrap/Image';
import axios from 'axios';
import "yet-another-react-lightbox/styles.css";
import Captions from "yet-another-react-lightbox/plugins/captions";
import Counter from "yet-another-react-lightbox/plugins/counter";
import Fullscreen from "yet-another-react-lightbox/plugins/fullscreen";
import Thumbnails from "yet-another-react-lightbox/plugins/thumbnails";

import "yet-another-react-lightbox/plugins/captions.css";
import "yet-another-react-lightbox/plugins/counter.css";
import "yet-another-react-lightbox/plugins/thumbnails.css";

// import ReactPaginate from "react-paginate";
import ReactPaginateModule from 'react-paginate';
const ReactPaginate = ReactPaginateModule.default || ReactPaginateModule;

import "../Gallery.css"
/**
 * Uses Yet Another React Lightbox (MIT License)
 * Copyright (c) 2020-present, the YARL authors
 * https://github.com/igordanchenko/yet-another-react-lightbox
 */

function Gallery() {

    const [allGallaryContent, setAllGallaryContent] = useState([]);
    const [selectedImageIndex, setSelectedImageIndex] = useState(-1);

    // Pagination state
    const itemsPerPage = 12; // adjust as needed
    const [currentPage, setCurrentPage] = useState(0);

    useEffect(() => {
        console.log("Getting Gallary Items");
        getAllGallaryItems();

    }, []);

    const getAllGallaryItems = async () => {
        await axios.get("/Content/gallary.json").then((res) => {
            let allgallaryItems = res.data.gallaryItems;
            setAllGallaryContent(allgallaryItems);
        }).catch(function (error) {
            console.log("No Gallary Items")
        })
    };

    function handleImageClick(index) {
        // 
        setSelectedImageIndex(index);
    }

    // Pagination calculations
    const pageCount = Math.ceil(allGallaryContent.length / itemsPerPage);
    const start = currentPage * itemsPerPage;
    const currentItems = allGallaryContent.slice(start, start + itemsPerPage);

    const handlePageChange = (selected) => {
        setCurrentPage(selected.selected);
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    return (
        <Container fluid>
            <section className="hero-news">
                <Row className="hero-content ">
                    <h1 className=" " >Gallery</h1>
                </Row>
            </section >
            <Container>
                <Row  >
                    {
                        currentItems.map((item, index) => (
                            <Col xs={12} sm={6} md={3} lg={3} key={start + index}>
                                <Image src={item.src} alt={item.description} thumbnail fluid onClick={() => handleImageClick(start + index)} />
                            </Col>
                        ))
                    }
                </Row>

                {/* Pagination */}
                <Row className="mt-4">
                    <Col className="d-flex justify-content-center">
                        <ReactPaginate
                            previousLabel={"← Previous"}
                            nextLabel={"Next →"}
                            pageCount={pageCount}
                            onPageChange={handlePageChange}

                            /* Bootstrap pagination classes */
                            containerClassName={"pagination custom-pagination"}
                            pageClassName={"page-item"}
                            pageLinkClassName={"page-link"}
                            previousClassName={"page-item"}
                            previousLinkClassName={"page-link"}
                            nextClassName={"page-item"}
                            nextLinkClassName={"page-link"}
                            breakClassName={"page-item"}
                            breakLinkClassName={"page-link"}
                            activeClassName={"active"}

                            pageRangeDisplayed={3}
                            marginPagesDisplayed={1}
                        />
                    </Col>
                </Row>


                < Lightbox
                    open={selectedImageIndex >= 0
                    }
                    close={() => setSelectedImageIndex(-1)}
                    slides={allGallaryContent}
                    index={selectedImageIndex}
                    plugins={[Captions, Counter, Fullscreen, Thumbnails]}
                    Captions={{ showToggle: true, descriptionTextAlign: "center",titleTextAlign: "center"}}
                    counter={{
                        container: {
                            style: {
                                top: "unset",    // Overrides the default top positioning
                                left: "unset",   // Overrides the default left positioning
                                bottom: "16px",  // Pins it to the bottom (adjust spacing as desired)
                                right: "16px",   // Pins it to the right (adjust spacing as desired)
                            },
                        }
                    }}
                />

            </Container >
        </Container>
    );
}
export default Gallery;