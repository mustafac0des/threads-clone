import { Container } from "@chakra-ui/react";

import UserHeader from "../components/UserHeader";
import UserPost from "../components/UserPost";

function UserPage() {
	return (
		<Container maxW={1240} centerContent>
			<UserHeader />
			<UserPost />
		</Container>
	);
}

export default UserPage;
