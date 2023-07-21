import * as React from 'react'
import ReactMarkdown from 'react-markdown'

import Grid from '@mui/material/Unstable_Grid2'
import Box from '@mui/material/Box'
import Paper from '@mui/material/Paper'
import Container from '@mui/material/Container'
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

const ChurchNews = () => {
  // Markdown syntax: https://commonmark.org/help/
  const churchNews = {
    "2023-07-16": [
      "**College Summer Hangout** Sundays, 6pm for dinner, *The Compelling Community* book study, and hangout. [Schedule and book PDF](https://docs.google.com/spreadsheets/u/0/d/1LBt5VU7scEmssBQvSBKXA077QnPAIBGmUT1GqgXZid8/htmlview#gid=0). [Email Keith](mailto:english.college@gpccc.org) for info.",
      "**Church Membership Class** is today, 1:30pm. [Email P. Larry](mailto:larrylee@gpccc.org) to register.",
      "**Friday Fellowship and Awana start time** will move from 7:30pm up to 7:00pm starting July 21. Dinner served that night at 6pm in Fellowship Hall.",
      "**AWANA** registration is open. AWANA begins Fri., Aug. 11, 7pm. Please [register](https://forms.gle/RLTdtJLBqGM5NvQN6) before Aug. 1 to get the discount.",
      "**Patchwork Sisters** is hosting a Cardmaking and Shaved Ice Fellowship on Sat., July 22, 1-4pm in the Fellowship Hall. All ladies are welcome, including our youth! [Email Pam](mailto:meilipelangi@gmail.com) for details.",
      "The **Chinese Pastoral Search Committee** is Elder Hsi-an Kwong, Sylvia Hay, Hank Huang, Pi Lin Liu, Esther Wong and P. Chienhua Chen. This pastor will lead the Mandarin and Cantonese ministries. For details or recommendations, [email Elder Kwong](mailto:MandarinPSC.2023@gpccc.org) or any PSC member.",
      "**Prayer Meeting** is Wednesdays, 7:30-8:30pm (Zoom: 233 085 786; PW 007276). [Email P. Larry](mailto:larrylee@gpccc.org) for info.",
      "**Chinese School** starts Sun., July 30, 1:30pm. Register in person Sat., July 29, 1:30-3:00pm in Fellowship Hall or [online](http://gpccs.org/) (4 year olds up to adults). Classes include simplified & traditional Chinese, bilingual, and adult conversation. Extracurricular: go chess, chess, drawing, Judo, speech, and ping pong.",
    ],
    // https://english.gpccc.org/2022/09/16/9-18-2022/
    "2022-09-21": [
      "**We thank Pastor Bobby Cox for sharing with us this weekend. We have a combined GROW from 11:15-12:25pm in the Youth Center today.**",
      "[**Electronic voting is coming to Greater Phoenix Chinese Christian Church**](https://gpccc.org/2022/07/24/electronic-voting-is-coming-%e6%95%99%e6%9c%83%e6%8a%95%e7%a5%a8%e9%9b%bb%e5%ad%90%e5%8c%96/). In order to promote the office efficiency, the church will soon migrate to electronic voting.  Members will receive eBallot via email and text message.  To facilitate this task, members please fill in your email and mobile number via the [Google form](https://forms.gle/gzLS6xb2BG8nkaBc7) below. **The information will not be used for other purposes.**",
      "**The Student Pastoral Search Committee has unanimously invited Pastor Chris Sung to interview Sep. 30- Oct. 2 (Fri-Sun).**",
      "Calling all YOUTH! **The Lunch Ministry** would love help each week to set up chairs and tables in the Fellowship Hall before lunch. Drop by the fellowship hall right after English worship and before Sunday GROW (10:45-11:10am), Mike McCabe or a team member will have set-up instructions.",
      "**Youth Group** Fri., Sep. 23 is Postcamp and meets at 7pm in the Youth Center. All teens welcome. For info, [email youth.ministry@gpccc.org](mailto:youth.ministry@gpccc.org).",
      "Church **PA Ministry** volunteers needed to help with video and livestreaming of the church service. No experience necessary. Please [email Chong-Jin](mailto:ong_chong_jin@hotmail.com).",
      "**Prayer Meeting** is Wednesdays, 7:30-8:30pm (Zoom: 233 085 786; PW 007276). [Email P. Larry](mailto:larrylee@gpccc.org) for info.",
      "**Reader’s Circle** book is Knowing God by J.I. Packer for Sep. 24 meeting at Phu & Henna's. Contact P. Larry or [Sheng Peng](mailto:sypeng123@yahoo.com) for info.",
      "**Christmas Cantata** starts practicing Sep. 25, 2:30-3:30pm, in the sanctuary. [Email Sue Chiou](mailto:suechiou@gmail.com) for info.",
      "**Church Membership Class** Sun., Sep. 25, 1-2pm. Register with the church office.",
    ]
  }

  const [week, setWeek] = React.useState("")
  const handleChange = (event) => {
    setWeek(event.target.value)
  }

  const news = churchNews["2022-09-21"]
  const newsItems = news.map((n, index) =>
    <Grid xs={12} sm={6} md={4} lg={3} xl={2} key={index}>
      <Box><ReactMarkdown linkTarget="_blank">{`${index+1}. ${n}`}</ReactMarkdown></Box>
    </Grid>
  )

  return (
    <Paper sx={{m: {xs:2, sm:3}, pt:2}}>
      <Container maxWidth="false">
        <FormControl sx={{ minWidth: 292 }} fullWidth={true}> {/* Width 292 is big enough for Wednesday, September 21, 2022 */}
          <InputLabel id="church-news-label">Church news for</InputLabel>
          <Select
            labelId="church-news-label"
            id="church-news-select"
            value={week}
            label="Church news for"
            onChange={handleChange}
          >
            <MenuItem value="2023-07-16">Sunday, July 16, 2023</MenuItem>
            <MenuItem value="2022-09-21">Wednesday, September 21, 2022</MenuItem>
          </Select>
        </FormControl>

        <Grid container rowSpacing={0} columnSpacing={2}>
          {newsItems}
        </Grid>
      </Container>
    </Paper>
  )
}

export default ChurchNews