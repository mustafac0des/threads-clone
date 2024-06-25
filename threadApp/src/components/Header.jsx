import { HStack, Button, ButtonGroup, useColorMode } from "@chakra-ui/react";
import { Link } from "react-router-dom";

const ThreadsLogo = ({ onClick, colorMode }) => (
	<Button style={{ background: "transparent" }} onClick={onClick}>
		<svg
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 448 512"
			style={styles.threadsLogo(colorMode)}
		>
			<path d="M331.5 235.7c2.2 .9 4.2 1.9 6.3 2.8c29.2 14.1 50.6 35.2 61.8 61.4c15.7 36.5 17.2 95.8-30.3 143.2c-36.2 36.2-80.3 52.5-142.6 53h-.3c-70.2-.5-124.1-24.1-160.4-70.2c-32.3-41-48.9-98.1-49.5-169.6V256v-.2C17 184.3 33.6 127.2 65.9 86.2C102.2 40.1 156.2 16.5 226.4 16h.3c70.3 .5 124.9 24 162.3 69.9c18.4 22.7 32 50 40.6 81.7l-40.4 10.8c-7.1-25.8-17.8-47.8-32.2-65.4c-29.2-35.8-73-54.2-130.5-54.6c-57 .5-100.1 18.8-128.2 54.4C72.1 146.1 58.5 194.3 58 256c.5 61.7 14.1 109.9 40.3 143.3c28 35.6 71.2 53.9 128.2 54.4c51.4-.4 85.4-12.6 113.7-40.9c32.3-32.2 31.7-71.8 21.4-95.9c-6.1-14.2-17.1-26-31.9-34.9c-3.7 26.9-11.8 48.3-24.7 64.8c-17.1 21.8-41.4 33.6-72.7 35.3c-23.6 1.3-46.3-4.4-63.9-16c-20.8-13.8-33-34.8-34.3-59.3c-2.5-48.3 35.7-83 95.2-86.4c21.1-1.2 40.9-.3 59.2 2.8c-2.4-14.8-7.3-26.6-14.6-35.2c-10-11.7-25.6-17.7-46.2-17.8H227c-16.6 0-39 4.6-53.3 26.3l-34.4-23.6c19.2-29.1 50.3-45.1 87.8-45.1h.8c62.6 .4 99.9 39.5 103.7 107.7l-.2 .2zm-156 68.8c1.3 25.1 28.4 36.8 54.6 35.3c25.6-1.4 54.6-11.4 59.5-73.2c-13.2-2.9-27.8-4.4-43.4-4.4c-4.8 0-9.6 .1-14.4 .4c-42.9 2.4-57.2 23.2-56.2 41.8l-.1 .1z" />
		</svg>
	</Button>
);

const HomeLogo = ({ colorMode }) => (
	<Button style={styles.logoButton}>
		<svg
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 576 512"
			style={styles.svgLogo(colorMode)}
		>
			<path d="M575.8 255.5c0 18-15 32.1-32 32.1h-32l.7 160.2c0 2.7-.2 5.4-.5 8.1V472c0 22.1-17.9 40-40 40H456c-1.1 0-2.2 0-3.3-.1c-1.4 .1-2.8 .1-4.2 .1H416 392c-22.1 0-40-17.9-40-40V448 384c0-17.7-14.3-32-32-32H256c-17.7 0-32 14.3-32 32v64 24c0 22.1-17.9 40-40 40H160 128.1c-1.5 0-3-.1-4.5-.2c-1.2 .1-2.4 .2-3.6 .2H104c-22.1 0-40-17.9-40-40V360c0-.9 0-1.9 .1-2.8V287.6H32c-18 0-32-14-32-32.1c0-9 3-17 10-24L266.4 8c7-7 15-8 22-8s15 2 21 7L564.8 231.5c8 7 12 15 11 24z" />
		</svg>
	</Button>
);

const SearchLogo = ({ colorMode }) => (
	<Button style={styles.logoButton}>
		<svg
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 512 512"
			style={styles.svgLogo(colorMode)}
		>
			<path d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z" />
		</svg>
	</Button>
);

const PostLogo = ({ colorMode }) => (
	<Button style={styles.logoButton}>
		<svg
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 448 512"
			style={styles.svgLogo(colorMode)}
		>
			<path d="M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32V224H48c-17.7 0-32 14.3-32 32s14.3 32 32 32H192V432c0 17.7 14.3 32 32 32s32-14.3 32-32V288H400c17.7 0 32-14.3 32-32s-14.3-32-32-32H256V80z" />
		</svg>
	</Button>
);

const HeartLogo = ({ colorMode }) => (
	<Button style={styles.logoButton}>
		<svg
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 512 512"
			style={styles.svgLogo(colorMode)}
		>
			<path d="M225.8 468.2l-2.5-2.3L48.1 303.2C17.4 274.7 0 234.7 0 192.8v-3.3c0-70.4 50-130.8 119.2-144C158.6 37.9 198.9 47 231 69.6c9 6.4 17.4 13.8 25 22.3c4.2-4.8 8.7-9.2 13.5-13.3c3.7-3.2 7.5-6.2 11.5-9c0 0 0 0 0 0C313.1 47 353.4 37.9 392.8 45.4C462 58.6 512 119.1 512 189.5v3.3c0 41.9-17.4 81.9-48.1 110.4L288.7 465.9l-2.5 2.3c-8.2 7.6-19 11.9-30.2 11.9s-22-4.2-30.2-11.9zM239.1 145c-.4-.3-.7-.7-1-1.1l-17.8-20c0 0-.1-.1-.1-.1c0 0 0 0 0 0c-23.1-25.9-58-37.7-92-31.2C81.6 101.5 48 142.1 48 189.5v3.3c0 28.5 11.9 55.8 32.8 75.2L256 430.7 431.2 268c20.9-19.4 32.8-46.7 32.8-75.2v-3.3c0-47.3-33.6-88-80.1-96.9c-34-6.5-69 5.4-92 31.2c0 0 0 0-.1 .1s0 0-.1 .1l-17.8 20c-.3 .4-.7 .7-1 1.1c-4.5 4.5-10.6 7-16.9 7s-12.4-2.5-16.9-7z" />
		</svg>
	</Button>
);

const ProfileLogo = ({ colorMode }) => (
	<Button style={styles.logoButton}>
		<svg
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 448 512"
			style={styles.svgLogo(colorMode)}
		>
			<path d="M304 128a80 80 0 1 0 -160 0 80 80 0 1 0 160 0zM96 128a128 128 0 1 1 256 0A128 128 0 1 1 96 128zM49.3 464H398.7c-8.9-63.3-63.3-112-129-112H178.3c-65.7 0-120.1 48.7-129 112zM0 482.3C0 383.8 79.8 304 178.3 304h91.4C368.2 304 448 383.8 448 482.3c0 16.4-13.3 29.7-29.7 29.7H29.7C13.3 512 0 498.7 0 482.3z" />
		</svg>
	</Button>
);

function Header() {
	const { colorMode, toggleColorMode } = useColorMode();

	return (
		<>
			<HStack style={styles.headerContainer}>
				<ThreadsLogo onClick={toggleColorMode} colorMode={colorMode} />
				<ButtonGroup variant={"outline"} spacing={2}>
					<HomeLogo colorMode={colorMode} />
					<SearchLogo colorMode={colorMode} />
					<PostLogo colorMode={colorMode} />
					<HeartLogo colorMode={colorMode} />
					<Link to={"/mustafa"}>
						<ProfileLogo colorMode={colorMode} />
					</Link>
				</ButtonGroup>
				<Button
					style={{
						backgroundColor: colorMode == "dark" ? "#FFFFFF" : "#000000",
						color: colorMode == "dark" ? "#000000" : "#FFFFFF",
					}}
				>
					Log in
				</Button>
			</HStack>
		</>
	);
}

const styles = {
	headerContainer: {
		width: "80%",
		marginTop: "5px",
		display: "flex",
		alignItems: "center",
		justifyContent: "space-between",
	},
	threadsLogo: (colorMode) => ({
		width: "100%",
		height: "100%",
		fill: colorMode === "dark" ? "#FFFFFF" : "#000000",
	}),
	logoButton: {
		width: "100px",
		height: "70px",
		borderRadius: "15px",
		borderColor: "transparent",
	},
	svgLogo: (colorMode) => ({
		width: "20px",
		height: "60px",
		fill: colorMode === "dark" ? "#FFFFFF" : "#000000",
	}),
};

export default Header;
