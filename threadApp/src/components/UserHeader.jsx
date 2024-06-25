import {
	VStack,
	Flex,
	Text,
	Button,
	Image,
	Box,
	ButtonGroup,
	Link,
	Popover,
	PopoverTrigger,
	PopoverContent,
	PopoverBody,
} from "@chakra-ui/react";

function UserHeader() {
	const InstagramLogo = () => (
		<Button
			as="a"
			href="https://www.instagram.com/must_f4/"
			target="_blank"
			rel="noopener noreferrer"
			style={styles.svgLogo}
		>
			<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
				<path
					fill="#FFFFFF"
					d="M224 141c-63.6 0-114.9 51.3-114.9 114.9S160.4 370.9 224 370.9 338.9 319.6 338.9 256 287.6 141 224 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"
				/>
			</svg>
		</Button>
	);

	const MoreLogo = () => (
		<Popover placement="bottom-start">
			<PopoverTrigger>
				<Button style={styles.svgLogo}>
					<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
						<path
							fill="#FFFFFF"
							d="M8 256a56 56 0 1 1 112 0A56 56 0 1 1 8 256zm160 0a56 56 0 1 1 112 0 56 56 0 1 1 -112 0zm216-56a56 56 0 1 1 0 112 56 56 0 1 1 0-112z"
						/>
					</svg>
				</Button>
			</PopoverTrigger>
			<PopoverContent
				w={60}
				h={55}
				justifyContent="center"
				bg="#181818"
				borderRadius={15}
			>
				<PopoverBody p={2} m={2} borderRadius={10} _hover={{ bg: "#212121" }}>
					<Text color="red">Report</Text>
				</PopoverBody>
			</PopoverContent>
		</Popover>
	);

	return (
		<VStack width="60%" alignItems="start" spacing={4} mt={10}>
			<Flex alignItems="center" justifyContent="space-between" width="full">
				<VStack spacing={2} alignItems="start">
					<Text fontSize="3xl" fontWeight="bold">
						Mustafa AmanUllah
					</Text>
					<Flex
						gap={1}
						ml={1}
						alignItems="center"
						justifyContent="space-between"
					>
						<Text>mustafa</Text>
						<Button
							width="65px"
							height="25px"
							fontSize="10px"
							borderRadius="50px"
							backgroundColor="#1E1E1E"
							color="#7A7A7A"
						>
							threads.net
						</Button>
					</Flex>
				</VStack>
				<Image
					src="https://yt3.googleusercontent.com/gtKyyf28tXVtyjap_Oy8GhJoPh9KewrudUjjdDSEgSu7BI0fDsTwGsqlu_VekNt0xUqgeX0YLg=s176-c-k-c0x00ffffff-no-rj"
					width="100px"
					borderRadius="100%"
				/>
			</Flex>
			<Box maxW="80%" ml={1}>
				<Text>
					Software Engineer, learning MERN Stack before my graduation and after
					completing 5th semester. \mustafa357yt@gmail.com
					https://wa.me/923246500736
				</Text>
			</Box>
			<Flex
				width="100%"
				ml={1}
				color="#919191"
				alignItems="center"
				justifyContent="space-between"
			>
				<Flex gap={1} justifyContent="space-between" fontSize="sm">
					<Text>9,122 followers</Text>
					<Box>・</Box>
					<Link>https://youtube.com/@must_f4?si=pfcf8S4ZBPCvM5H7</Link>
				</Flex>
				<ButtonGroup>
					<InstagramLogo />
					<MoreLogo />
				</ButtonGroup>
			</Flex>
			<Flex w="100%">
				<Flex
					flex={1}
					justifyContent="center"
					borderBottom={"1.5px solid gray"}
					color={"gray.light"}
				>
					<Text fontWeight="bold" pb={3}>
						Threads
					</Text>
				</Flex>
				<Flex
					flex={1}
					justifyContent="center"
					borderBottom={"1.5px solid gray"}
					color={"gray.light"}
				>
					<Text fontWeight="bold" pb={3}>
						Replies
					</Text>
				</Flex>
				<Flex
					flex={1}
					justifyContent="center"
					borderBottom={"1.5px solid gray"}
					color={"gray.light"}
				>
					<Text fontWeight="bold" pb={3}>
						Reposts
					</Text>
				</Flex>
			</Flex>
		</VStack>
	);
}

const styles = {
	svgLogo: {
		width: "55px",
		height: "55px",
		backgroundColor: "transparent",
		fill: "#FFFFFF",
	},
};

export default UserHeader;
