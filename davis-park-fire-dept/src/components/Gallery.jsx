import Lightbox from 'yet-another-react-lightbox';
import { useEffect, useState } from "react";
import { Container } from 'react-bootstrap';
import Row from "react-bootstrap/Row"
import Col from 'react-bootstrap/esm/Col';
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
// import "../Gallery.css"

function Gallery() {

    const [allGallaryContent, setAllGallaryContent] = useState([]);
    const [selectedImageIndex, setSelectedImageIndex] = useState(-1);
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
    console.log("allGallaryContent: ", allGallaryContent);
    return (
        <Container fluid>
            <section className="hero-news">
                <Row class="hero-content ">
                    <h1 className=" " >Gallery</h1>
                </Row>
            </section >
            <Container>
                <Row  >
                    {
                        allGallaryContent.map((item, index) => (
                            <Col xs={12} sm={6} md={3} lg={3} key={index}>
                                <Image src={item.src} alt={item.description} thumbnail fluid onClick={() => handleImageClick(index)} />
                            </Col>
                        ))
                    }
                    < Lightbox
                        open={selectedImageIndex >= 0
                        }
                        close={() => setSelectedImageIndex(-1)}
                        slides={allGallaryContent}
                        index={selectedImageIndex}
                        plugins={[Captions, Counter, Fullscreen, Thumbnails]}
                        Captions={{ showToggle: true, descriptionTextAlign: "end" }}
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

                </Row>
        </Container >
</Container>
    );
}
export default Gallery;