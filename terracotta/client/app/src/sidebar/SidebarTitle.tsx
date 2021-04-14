import React, { CSSProperties, useState, FC } from 'react'
import { Box, Typography, Paper } from '@material-ui/core'
import HeaderImage from "./../common/images/header.svg"
import ExpandMoreOutlinedIcon from '@material-ui/icons/ExpandMoreOutlined';
import ExpandLessOutlinedIcon from '@material-ui/icons/ExpandLessOutlined';
import InfoOutlinedIcon from '@material-ui/icons/InfoOutlined';
import { makeStyles } from "@material-ui/core/styles"

const useStyles = makeStyles(() => ({
	icon: {
		width: 20,
		height: 22,
		"&:hover":{
			opacity: .7
		}
	},
	infoIcon: {
		marginLeft: 4
	},
	detailsBox: {
		padding: 8,
		marginTop: 8,
		"&:hover":{
			cursor: 'pointer'
		}
	},
	detailsText: {
		marginTop: 6
	},
	hostText: {
		fontSize: 12,
		wordBreak: 'break-all'
	}
}))

interface Props {
	host?: string,
	style?: CSSProperties,
	details?: string
}
const SidebarTitle: FC<Props> = ({
	style,
	host,
	details
}) => {

	const [ showDetails, setShowDetails ] = useState<boolean>(false)
	const classes = useStyles()

	return (
		<Box
			style={{
				padding: 16,
				backgroundColor: '#FFFFFF',
				...style,
			}}
		>
			<Box display={'flex'} flexWrap={'nowrap'} justifyContent={'space-between'} alignItems={'center'}>
				<img src={HeaderImage} alt={'Teracotta preview app'} />
			</Box>
			<Paper
				className={classes.detailsBox}
				onClick={() => setShowDetails(!showDetails)}
				elevation={showDetails ? 2 : 0}
			>
				<Box 
					display={'flex'}
					justifyContent={'space-between'}
					alignItems={'center'}
				>
					<Box display={'flex'} alignItems={'center'}>
						<Typography variant={'body1'}>
							{'Details'}
						</Typography>
						<InfoOutlinedIcon className={`${classes.icon} ${classes.infoIcon}`}/>
					</Box>
					{ !showDetails ? 
						<ExpandMoreOutlinedIcon className={classes.icon} /> : 
						<ExpandLessOutlinedIcon className={classes.icon} />
					}
				</Box>
				{showDetails && (
					<Typography className={classes.detailsText} variant={'body2'}>
						{details}
					</Typography>
				)}
			</Paper>
			{
				host && (
					<Box p={1}>
						<Typography variant={'body1'} className={classes.hostText}>
							<b>Host: </b>
							<span>
								{host}	
							</span>
						</Typography>
					</Box>
				)
			}
			
		</Box>
	)
}


export default SidebarTitle
