import { Box, Text, Heading, Image, Button, Flex, Link } from "@chakra-ui/react"


const ShoppingTarjeta = ({ prod, addToCart, deleteFromCart }) => {

    return (
        <Box>

        <Box
            fontWeight="bold"
            fontFamily="--second-font"
            p="20px"
            w="100%"
            display="flex"
            justifyContent="space-between"
            alignItems="center"
            >
                <Image
                    maxW="40px"
                    src={prod.img}
                    />
                <Heading
                    w="100px"
                    as="h4"
                    textAlign="center"
                    fontSize="0.8rem"
                    color="--backg-color"
                    >{prod.titulo}</Heading>
                <Flex
                    flexDir="column"
                    justify="center"
                    align="center"
                    >
                    <Button
                        bg="--grey-light-color"
                        onClick={() => addToCart(prod)}
                        w="5px"
                        h="25px"
                        color="--backg-color"
                        >+</Button>
                    <Text
                        w="65px"
                        textAlign="center"
                        color="--backg-color"
                        >{prod.cantidad}</Text>
                    <Button
                        bg="--grey-light-color"
                        onClick={() => deleteFromCart(prod)}
                        w="5px"
                        h="25px"
                        color="--backg-color"
                        >-</Button>
                </Flex>
                <Link
                    onClick={() => deleteFromCart(prod, true)}
                    >🗑️
                </Link>
        </Box>
            <Flex
                justify="center"
                fontWeight="bold"
                fontFamily="--second-font"
                borderBottom="solid 1.5px black"
                >
                <Text
                    p="0px 0px 10px 10px"        
                    fontSize="0.8rem"
                    w="65px"
                    textAlign="center"
                    color="--backg-color"
                    >SubTotal: </Text>
                <Text
                    fontSize="0.8rem"
                    w="65px"
                    textAlign="center"
                    color="--backg-color"
                    >{(prod.precio * prod.cantidad).toFixed(3)}
                </Text>
            </Flex>
        </Box>
    )
}

export default ShoppingTarjeta
