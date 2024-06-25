import { Card, CardBody, Image, Heading, Text, Button, Link, Box } from "@chakra-ui/react";
import { useState } from "react";
import Swal from "sweetalert2";
import BotonFav from "../Favoritos/BotonFav";

const TarjetaEscrtorio = ({ prod, addToCart, addToFav }) => {

    const [fav, setFav] = useState(true)    //estado para visualizar el boton de favorito con y sin color

    const [visible, setVisible] = useState(false)

    function over(e) {
        setVisible(true);
    }
    function out(e) {
        setVisible(false);
    }

    const modalCarrito = (prod) => {
        Swal.fire({
            title: prod.titulo,
            text: "Producto agregado correctamente",
            imageUrl: prod.img,
            imageWidth: 250,
            imageHeight: 250,
            imageAlt: 'Custom image',
        }) 

        addToCart(prod)

    }
    const caracteristicas = (prod) => {
        Swal.fire({
            width: "500px",
            title: "Caracteristicas Generales",
            text: prod.caracteristicas
        })
    }

    return (

            <Card
                w="250px"
                h="360px"
                _hover={{
                    h:"515px",
                    boxShadow: "dark-lg",
                }}
                transition= "0.1s"
                onMouseOver={over}
                onMouseOut={out}
                display={["none", "none", "block"]}
                justify="center"
                align="center"
                bg="--white-color"
                >
                <Box
                    visibility={visible ? "visible" : "hidden"}
                    filter={ fav ? "brightness(0) saturate(100%) invert(0%) sepia(1%) saturate(10%) hue-rotate(279deg) brightness(93%) contrast(101%)" : null}
                    >
                    <BotonFav fav={fav} setFav={setFav} addToFav={addToFav} prod={prod}
                    />
                </Box>
                <CardBody
                    display="flex"
                    flexDirection="column"
                    justify="center"
                    align="center"
                    >
                    <Image
                        borderRadius="10px"
                        src={prod.img}
                        alt={prod.alt}
                        maxW="100%"
                        h="auto"
                        alignSelf="center"
                        objectFit="cover"
                        />

                    <Heading
                        as="h3"
                        fontSize="1.5rem"
                        mt="30px"
                        color="--backg-color"
                        fontFamily='--first-font'
                        fontWeight="extrabold"
                            >{prod.titulo}</Heading>

                    <Text
                        fontFamily="--first-font"
                        fontWeight="semibold"
                        color="--backg-color"
                        textAlign="left"
                        mt="10px"
                        fontSize=".9rem"
                        textOverflow="ellipsis"
                        display={visible ? "inline" : "none"}
                            >{prod.descripcion}</Text>

                    <Text
                        fontWeight="semibold"
                        fontSize="1.25rem"
                        mt="10px"
                        color="--backg-color"
                        fontFamily='--first-font'
                        display={visible ? "inline" : "none"}
                        textAlign="left"
                            >$ {prod.precio}</Text>

                        <Button
                            onClick={() => modalCarrito(prod)}
                            borderRadius="20px"
                            color="--first-color"
                            bg="--backg-second-color"
                            _hover={{
                                boxShadow:"dark-lg",
                            }}
                            fontFamily="--second-font"
                            fontSize="1rem"
                            w="100px"
                            alignSelf="center"
                            mt="20px"
                            display={visible ? "inline" : "none"}
                                >{prod.boton}</Button>
                            
                        <Link
                            alignSelf="center"
                            w="100px"
                            display={visible ? "inline" : "none"}
                            fontFamily="--second-font"
                            color="--backg-color"
                            fontWeight="bold"
                            m="8px"
                            _hover={{
                                color:"--third-color"
                            }}
                            onClick={() => caracteristicas(prod)}
                            >
                                Ver Detalles</Link>
                </CardBody>
            </Card>
    )
}

export default TarjetaEscrtorio