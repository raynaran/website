import React from "react";
import {GridList, GridTile} from "material-ui/GridList";
import {officers} from "../year-info";
import Paper from "material-ui/Paper";

const tilesData = [
	{
		name: "Facebook",
		picture: "https://en.facebookbrand.com/wp-content/uploads/2016/05/FB-fLogo-Blue-broadcast-2.png",
		link: "https://www.facebook.com/groups/PurdueACMSigApp/"
	},
	{
		name: "Slack",
		picture: "https://assets.brandfolder.com/ubhnmsn4/original/Slack_Mark_Web.png",
		link: "https://purdueacmsigapp.slack.com"
	},
	{
		name: "GitHub",
		picture: "https://assets-cdn.github.com/images/modules/logos_page/GitHub-Mark.png",
		link: "https://github.com/purdue-acm-sigapp"
	},
	{
		name: "Google Drive",
		picture: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ad/Logo_of_Google_Drive.svg/2000px-Logo_of_Google_Drive.svg.png",
		link: "https://drive.google.com/drive/folders/0ByBsXZAwFI0qSzY4NGFWeUZqeEU?usp=sharing"
	},
];

const styles = {
	display: 'flex',
	flexWrap: 'nowrap',
	overflowX: 'auto'
};

export default () => {
	let officerList = [];
	Object.keys(officers).forEach(k => {
		let officer = officers[k];
		if (officer.constructor === Array) {
			officer.forEach(officerInner => {
				officerList.push(<GridTile
					key={officerInner.picture}
					title={officerInner.name}
					titleBackground="linear-gradient(to top, rgba(0,0,0,0.7) 0%,rgba(0,0,0,0.3) 70%,rgba(0,0,0,0) 100%)">
					{/*containerElement={<Link to={officer.link}/>}*/}
					<img src={officerInner.picture}/>
				</GridTile>);
				console.log(officerInner.picture);
			});
		} else {
			officerList.push(<GridTile
				key={officer.picture}
				title={officer.name}
				titleBackground="linear-gradient(to top, rgba(0,0,0,0.7) 0%,rgba(0,0,0,0.3) 70%,rgba(0,0,0,0) 100%)">
				{/*containerElement={<Link to={officer.link}/>}*/}
				<img src={officer.picture}/>
			</GridTile>);
			console.log(officer.picture);
		}
	});

	return (
		<div className="my-tab contact">
			{/*<Router history={{}}>*/}
			<Paper className="paper">
				<h2>Officers</h2>
				<GridList style={styles} cols={2.2}>{officerList}</GridList>
			</Paper>
			<br />
			<Paper className="paper">
				<h2>Social Media</h2>
				<GridList style={styles}>
					{tilesData.map((tile) => (
						<GridTile
							key={tile.picture}
							title={tile.name}
							titleBackground="linear-gradient(to top, rgba(0,0,0,0.7) 0%,rgba(0,0,0,0.3) 70%,rgba(0,0,0,0) 100%)">
							{/*containerElement={<Link to={tile.link}/>},*/}
							<img src={tile.picture}/>
						</GridTile>
					))}
				</GridList>
			</Paper>
			{/*</Router>*/}
		</div>
	);
}