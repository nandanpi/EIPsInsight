import { Badge, Box, Link, Table, TableContainer, Tbody, Td, Text, Th, Thead, Tr, Wrap, WrapItem, useColorModeValue } from "@chakra-ui/react";
import { motion } from "framer-motion";
import React, { useEffect, useState } from "react";
import DateTime from "@/components/DateTime";



interface EIP {
    forksCount: number;
    watchlistCount:number;
    stars: number;
    openIssuesCount: number;
  }

const OtherBox = () => {
  const [data, setData] = useState<EIP>({
    forksCount: 0,
    watchlistCount: 0,
    stars: 0,
    openIssuesCount: 0,
  });
  
    const bg = useColorModeValue("#f6f6f7", "#171923");
  
    useEffect(() => {
      const fetchData = async () => {
        try {
          const response = await fetch(`/api/info`);
          const jsonData = await response.json();
          setData(jsonData);
        } catch (error) {
          console.error('Error fetching data:', error);
        }
      };
  
      fetchData();
    }, []);

  const numRows = 4 + 4;
  const rowHeight = 40; // Assuming each row has a height of 40px
  const maxHeight = `${numRows * rowHeight}px`;
    console.log(data)
  return (
    <Box
      bgColor={bg}
      marginTop={"2rem"}
      p="1rem 1rem"
      borderRadius="0.55rem"
      overflowX="auto"
      _hover={{
        border: "1px",
        borderColor: "#30A0E0",
      }}
      maxH={maxHeight}
      as={motion.div}
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 } as any}
      className="hover: cursor-pointer ease-in duration-200 overflow-y-hidden"
    >
      <TableContainer>
        <Table variant="simple" minW="50%" maxH={"50%"} layout="fixed">
          <Thead>
            <Tr>
              <Th minW="50px">Other Stats</Th>
              <Th minW="200px">Numbers</Th>
            </Tr>
          </Thead>
          <Tbody>
              <Tr key="forks">
                <Td minW="100px">
                  <Wrap>
                    <WrapItem>
                      <Badge colorScheme="orange">Forks</Badge>
                    </WrapItem>
                  </Wrap>
                </Td>
                <Td>
                  <Link
                    href={`https://github.com/ethereum/EIPs`}
                    className="text-blue-400 hover:cursor-pointer font-semibold"
                  >
                    {data.forksCount}
                  </Link>
                </Td>
              </Tr>
              <Tr key="watchlist">
                <Td minW="100px">
                  <Wrap>
                    <WrapItem>
                      <Badge colorScheme="orange">Watchlist</Badge>
                    </WrapItem>
                  </Wrap>
                </Td>
                <Td>
                  <Link
                    href={`https://github.com/ethereum/EIPs`}
                    className="text-blue-400 hover:cursor-pointer font-semibold"
                  >
                    {data.watchlistCount}
                  </Link>
                </Td>
              </Tr>
              <Tr key="stars">
                <Td minW="100px">
                  <Wrap>
                    <WrapItem>
                      <Badge colorScheme="orange">Stars</Badge>
                    </WrapItem>
                  </Wrap>
                </Td>
                <Td>
                  <Link
                    href={`https://github.com/ethereum/EIPs`}
                    className="text-blue-400 hover:cursor-pointer font-semibold"
                  >
                    {data.stars}
                  </Link>
                </Td>
              </Tr>
              <Tr key="openissues">
                <Td minW="100px">
                  <Wrap>
                    <WrapItem>
                      <Badge colorScheme="orange">Open Issues & PR</Badge>
                    </WrapItem>
                  </Wrap>
                </Td>
                <Td>
                  <Link
                    href={`https://github.com/ethereum/EIPs`}
                    className="text-blue-400 hover:cursor-pointer font-semibold"
                  >
                    {data.openIssuesCount}
                  </Link>
                </Td>
              </Tr>
          </Tbody>
        </Table>
      </TableContainer>
      <Box className={'w-full'}>
        <DateTime />
      </Box>
    </Box>
  );
};

export default OtherBox;