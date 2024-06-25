import { Flex, Link, Image, Box, Text, HStack } from "@chakra-ui/react";

export function UserPost() {
	return (
		<Link w={"57%"} to={"/mustafa/post/1"} mt={5}>
			<Flex justifyContent={"space-between"} gap={3}>
				<Box flex={1}>
					<Image
						src="https://yt3.googleusercontent.com/gtKyyf28tXVtyjap_Oy8GhJoPh9KewrudUjjdDSEgSu7BI0fDsTwGsqlu_VekNt0xUqgeX0YLg=s176-c-k-c0x00ffffff-no-rj"
						width="50px"
						borderRadius="100%"
						mr={2}
					/>
				</Box>
				<Box flex={11}>
					<Flex justifyContent={"space-between"}>
						<HStack>
							<Text fontWeight={"bold"}>mustafa</Text>
							<Text>1d</Text>
						</HStack>
						<Box>...</Box>
					</Flex>
					<Box>
						<Text>Delicious Food! </Text>
					</Box>
				</Box>
			</Flex>
		</Link>
	);
}
