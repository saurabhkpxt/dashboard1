/*eslint-disable*/
import React from "react";
import PropTypes from "prop-types";
// react plugin for creating charts
import ChartistGraph from "react-chartist";
// @material-ui/core
import withStyles from "@material-ui/core/styles/withStyles";
import Icon from "@material-ui/core/Icon";
// @material-ui/icons
import Store from "@material-ui/icons/Store";
import Warning from "@material-ui/icons/Warning";
import DateRange from "@material-ui/icons/DateRange";
import LocalOffer from "@material-ui/icons/LocalOffer";
import Update from "@material-ui/icons/Update";
import ArrowUpward from "@material-ui/icons/ArrowUpward";
import AccessTime from "@material-ui/icons/AccessTime";
import Accessibility from "@material-ui/icons/Accessibility";
import BugReport from "@material-ui/icons/BugReport";
import Code from "@material-ui/icons/Code";
import Cloud from "@material-ui/icons/Cloud";
// core components
import Button from "../../components/CustomButtons/Button.jsx";
import GridItem from "../../components/Grid/GridItem.jsx";
import GridContainer from "../../components/Grid/GridContainer.jsx";
import Table from "../../components/Table/Table.jsx";
import Tasks from "../../components/Tasks/Tasks.jsx";
import CustomTabs from "../../components/CustomTabs/CustomTabs.jsx";
import Danger from "../../components/Typography/Danger.jsx";
import Card from "../../components/Card/Card.jsx";
import CardHeader from "../../components/Card/CardHeader.jsx";
import CardAvatar from "../../components/Card/CardAvatar.jsx";
import CardIcon from "../../components/Card/CardIcon.jsx";
import CardBody from "../../components/Card/CardBody.jsx";
import CardFooter from "../../components/Card/CardFooter.jsx";
import SnackbarContent from "../../components/Snackbar/SnackbarContent.jsx";

import {
  dailySalesChart,
  emailsSubscriptionChart,
  completedTasksChart
} from "../../variables/charts.jsx";

import rtlStyle from "../../assets/jss/material-dashboard-react/views/rtlStyle.jsx";

import avatar from "../../assets/img/faces/marc.jpg";

let bugs = [
  "Ø·Ø±Ø§Ø­ Ú¯Ø±Ø§ÙÛÚ© Ø§Ø² Ø§ÛÙ ÙØªÙ Ø¨Ù Ø¹ÙÙØ§Ù Ø¹ÙØµØ±Û Ø§Ø² ØªØ±Ú©ÛØ¨ Ø¨ÙØ¯Û Ø¨Ø±Ø§Û Ù¾Ø± Ú©Ø±Ø¯ÙØ",
  "	ÙØ®Ø³Øª Ø§Ø² ÙØªÙâÙØ§Û Ø¢Ø²ÙØ§ÛØ´Û Ù Ø¨ÛâÙØ¹ÙÛ Ø§Ø³ØªÙØ§Ø¯Ù ÙÛâÚ©ÙÙØ¯ ØªØ§ ØµØ±ÙØ§ Ø¨Ù ÙØ´ØªØ±Û ÛØ§ ØµØ§Ø­Ø¨ Ú©Ø§Ø± Ø®ÙØ¯ ÙØ´Ø§Ù Ø¯ÙÙØ¯Ø",
  "ÙÙØ§Ù Ø­Ø§Ù Ú©Ø§Ø± Ø¢ÙÙØ§ Ø¨Ù ÙÙØ¹Û ÙØ§Ø¨Ø³ØªÙ Ø¨Ù ÙØªÙ ÙÛâØ¨Ø§Ø´Ø¯",
  "	Ø¢ÙÙØ§ Ø¨Ø§ Ø§Ø³ØªÙØ§Ø¯Ù Ø§Ø² ÙØ­ØªÙÛØ§Øª Ø³Ø§Ø®ØªÚ¯ÛØ ØµÙØ­Ù Ú¯Ø±Ø§ÙÛÚ©Û Ø®ÙØ¯ Ø±Ø§ ØµÙØ­ÙâØ¢Ø±Ø§ÛÛ ÙÛâÚ©ÙÙØ¯"
];
let website = [
  "Ø¨Ø¹Ø¯ Ø§Ø² Ø§ÛÙÚ©Ù ÙØªÙ Ø¯Ø± Ø¢Ù ÙØ±Ø§Ø± Ú¯ÛØ±Ø¯ ÚÚ¯ÙÙÙ Ø¨Ù ÙØ¸Ø± ÙÛâØ±Ø³Ø¯ Ù ÙÙÙâÙØ§ Ù Ø§ÙØ¯Ø§Ø²ÙâØ¨ÙØ¯ÛâÙØ§ ÚÚ¯ÙÙÙ Ø¯Ø± ÙØ¸Ø± Ú¯Ø±ÙØªÙ",
  "Ø§ÙÙÛÙ Ø´Ú©Ù Ø¸Ø§ÙØ±Û Ù Ú©ÙÛ Ø·Ø±Ø­ Ø³ÙØ§Ø±Ø´ Ú¯Ø±ÙØªÙ Ø´Ø¯Ù Ø§Ø³ØªÙØ§Ø¯Ù ÙÛ ÙÙØ§ÛØ¯Ø"
];
let server = [
  "Ú¯Ø±Ø§ÙÛÚ©Û ÙØ´Ø§ÙÚ¯Ø± ÚÚ¯ÙÙÚ¯Û ÙÙØ¹ Ù Ø§ÙØ¯Ø§Ø²Ù ÙÙÙØª Ù Ø¸Ø§ÙØ± ÙØªÙ Ø¨Ø§Ø´Ø¯. ÙØ¹ÙÙÙØ§ Ø·Ø±Ø§Ø­Ø§Ù Ú¯Ø±Ø§ÙÛÚ© Ø¨Ø±Ø§Û ØµÙØ­ÙâØ¢Ø±Ø§ÛÛØ ÙØ®Ø³Øª Ø§Ø² ÙØªÙâÙØ§Û Ø¢Ø²ÙØ§ÛØ´ÛØ",
  "Ø§Ø² Ø§ÛÙ ÙØªÙ Ø¨Ù Ø¹ÙÙØ§Ù Ø¹ÙØµØ±Û Ø§Ø² ØªØ±Ú©ÛØ¨ Ø¨ÙØ¯Û Ø¨Ø±Ø§Û Ù¾Ø± Ú©Ø±Ø¯Ù ØµÙØ­Ù Ù Ø§Ø±Ø§ÛÙ Ø§ÙÙÛÙ Ø´Ú©Ù Ø¸Ø§ÙØ±Û Ù Ú©ÙÛ Ø·Ø±Ø­ Ø³ÙØ§Ø±Ø´ Ú¯Ø±ÙØªÙ Ø´Ø¯Ù Ø§Ø³ØªÙØ§Ø¯Ù ÙÛ ÙÙØ§ÛØ¯Ø ØªØ§ Ø§Ø² ÙØ¸Ø± Ú¯Ø±Ø§ÙÛÚ©Û ÙØ´Ø§ÙÚ¯Ø± ÚÚ¯ÙÙÚ¯Û ÙÙØ¹ Ù Ø§ÙØ¯Ø§Ø²Ù ÙÙÙØª Ù Ø¸Ø§ÙØ± ÙØªÙ Ø¨Ø§Ø´Ø¯. ÙØ¹ÙÙÙØ§ Ø·Ø±Ø§Ø­Ø§Ù Ú¯Ø±Ø§ÙÛÚ© Ø¨Ø±Ø§Û ØµÙØ­ÙâØ¢Ø±Ø§ÛÛØ ÙØ®Ø³Øª Ø§Ø² ÙØªÙâÙØ§Û Ø¢Ø²ÙØ§ÛØ´Û Ø",
  "Ø§Ø² ÙØªÙâÙØ§Û Ø¢Ø²ÙØ§ÛØ´Û Ù Ø¨ÛâÙØ¹ÙÛ Ø§Ø³ØªÙØ§Ø¯Ù ÙÛâÚ©ÙÙØ¯ ØªØ§ ØµØ±ÙØ§ Ø¨Ù ÙØ´ØªØ±Û ÛØ§ ØµØ§Ø­Ø¨ Ú©Ø§Ø± Ø®ÙØ¯ ÙØ´Ø§Ù Ø¯ÙÙØ¯Ø"
];

class RTLPage extends React.Component {
  state = {
    value: 0
  };
  handleChange = (event, value) => {
    this.setState({ value });
  };

  handleChangeIndex = index => {
    this.setState({ value: index });
  };
  render() {
    const { classes } = this.props;
    return (
      <div>
        <GridContainer>
          <GridItem xs={12} sm={6} md={3}>
            <Card>
              <CardHeader color="warning" stats icon>
                <CardIcon color="warning">
                  <Icon>content_copy</Icon>
                </CardIcon>
                <p className={classes.cardCategory}>ÙØ¶Ø§ ÙØµØ±Ù Ø´Ø¯Ù</p>
                <h3 className={classes.cardTitle}>
                  49/50 <small>GB</small>
                </h3>
              </CardHeader>
              <CardFooter stats>
                <div className={classes.stats}>
                  <Danger>
                    <Warning />
                  </Danger>
                  <a href="#pablo" onClick={e => e.preventDefault()}>
                    ÙØ¶Ø§Û Ø¨ÛØ´ØªØ±Û Ø¯Ø§Ø´ØªÙ Ø¨Ø§Ø´ÛØ¯...
                  </a>
                </div>
              </CardFooter>
            </Card>
          </GridItem>
          <GridItem xs={12} sm={6} md={3}>
            <Card>
              <CardHeader color="success" stats icon>
                <CardIcon color="success">
                  <Store />
                </CardIcon>
                <p className={classes.cardCategory}>Ø³ÙØ¯</p>
                <h3 className={classes.cardTitle}>$34,245</h3>
              </CardHeader>
              <CardFooter stats>
                <div className={classes.stats}>
                  <DateRange />
                  Û²Û´ Ø³Ø§Ø¹Øª Ø§Ø®ÛØ±
                </div>
              </CardFooter>
            </Card>
          </GridItem>
          <GridItem xs={12} sm={6} md={3}>
            <Card>
              <CardHeader color="danger" stats icon>
                <CardIcon color="danger">
                  <Icon>info_outline</Icon>
                </CardIcon>
                <p className={classes.cardCategory}>ÙØ´Ú©ÙØ§Øª Ø­Ù Ø´Ø¯Ù</p>
                <h3 className={classes.cardTitle}>75</h3>
              </CardHeader>
              <CardFooter stats>
                <div className={classes.stats}>
                  <LocalOffer />
                  ØªÙØ³Ø· Ú¯ÛØªâÙØ§Ø¨
                </div>
              </CardFooter>
            </Card>
          </GridItem>
          <GridItem xs={12} sm={6} md={3}>
            <Card>
              <CardHeader color="info" stats icon>
                <CardIcon color="info">
                  <Accessibility />
                </CardIcon>
                <p className={classes.cardCategory}>Ø¯ÙØ¨Ø§ÙâÚ©ÙÙØ¯Ù</p>
                <h3 className={classes.cardTitle}>+245</h3>
              </CardHeader>
              <CardFooter stats>
                <div className={classes.stats}>
                  <Update />
                  ÙÙâØ§Ú©ÙÙÙ
                </div>
              </CardFooter>
            </Card>
          </GridItem>
        </GridContainer>
        <GridContainer>
          <GridItem xs={12} sm={12} md={4}>
            <Card chart>
              <CardHeader color="success">
                <ChartistGraph
                  className="ct-chart"
                  data={dailySalesChart.data}
                  type="Line"
                  options={dailySalesChart.options}
                  listener={dailySalesChart.animation}
                />
              </CardHeader>
              <CardBody>
                <h4 className={classes.cardTitle}>ÙØ±ÙØ´ Ø±ÙØ²Ø§ÙÙ</h4>
                <p className={classes.cardCategory}>
                  <span className={classes.successText}>
                    <ArrowUpward className={classes.upArrowCardCategory} /> 55%
                  </span>{" "}
                  Ø±Ø´Ø¯ Ø¯Ø± ÙØ±ÙØ´ Ø§ÙØ±ÙØ².
                </p>
              </CardBody>
              <CardFooter chart>
                <div className={classes.stats}>
                  <AccessTime /> Û´ Ø¯ÙÛÙÙ Ù¾ÛØ´
                </div>
              </CardFooter>
            </Card>
          </GridItem>
          <GridItem xs={12} sm={12} md={4}>
            <Card chart>
              <CardHeader color="warning">
                <ChartistGraph
                  className="ct-chart"
                  data={emailsSubscriptionChart.data}
                  type="Bar"
                  options={emailsSubscriptionChart.options}
                  responsiveOptions={emailsSubscriptionChart.responsiveOptions}
                  listener={emailsSubscriptionChart.animation}
                />
              </CardHeader>
              <CardBody>
                <h4 className={classes.cardTitle}>
                  Ø¯ÙØ¨Ø§Ù Ú©ÙÙØ¯ÙâÙØ§Û Ø§ÛÙÛÙÛ
                </h4>
                <p className={classes.cardCategory}>
                  Ú©Ø§Ø±Ø§ÛÛ Ø¢Ø®Ø±ÛÙ Ú©ÙÙ¾ÛÙ
                </p>
              </CardBody>
              <CardFooter chart>
                <div className={classes.stats}>
                  <AccessTime /> Ú©ÙÙ¾ÛÙ Ø¯Ù Ø±ÙØ² Ù¾ÛØ´ Ø§Ø±Ø³Ø§Ù Ø´Ø¯
                </div>
              </CardFooter>
            </Card>
          </GridItem>
          <GridItem xs={12} sm={12} md={4}>
            <Card chart>
              <CardHeader color="danger">
                <ChartistGraph
                  className="ct-chart"
                  data={completedTasksChart.data}
                  type="Line"
                  options={completedTasksChart.options}
                  listener={completedTasksChart.animation}
                />
              </CardHeader>
              <CardBody>
                <h4 className={classes.cardTitle}>ÙØ¸Ø§ÛÙ Ø§ÙØ¬Ø§Ù Ø´Ø¯Ù</h4>
                <p className={classes.cardCategory}>
                  Ú©Ø§Ø±Ø§ÛÛ Ø¢Ø®Ø±ÛÙ Ú©ÙÙ¾ÛÙ
                </p>
              </CardBody>
              <CardFooter chart>
                <div className={classes.stats}>
                  <AccessTime /> Ú©ÙÙ¾ÛÙ Ø¯Ù Ø±ÙØ² Ù¾ÛØ´ Ø§Ø±Ø³Ø§Ù Ø´Ø¯
                </div>
              </CardFooter>
            </Card>
          </GridItem>
        </GridContainer>
        <GridContainer>
          <GridItem xs={12} sm={12} md={6}>
            <CustomTabs
              title="ÙØ¸Ø§ÛÙ:"
              headerColor="primary"
              rtlActive
              tabs={[
                {
                  tabName: "Ø¨Ø§Ú¯âÙØ§",
                  tabIcon: BugReport,
                  tabContent: (
                    <Tasks
                      checkedIndexes={[0, 3]}
                      tasksIndexes={[0, 1, 2, 3]}
                      tasks={bugs}
                      rtlActive
                    />
                  )
                },
                {
                  tabName: "ÙØ¨Ø³Ø§ÛØª",
                  tabIcon: Code,
                  tabContent: (
                    <Tasks
                      checkedIndexes={[0]}
                      tasksIndexes={[0, 1]}
                      tasks={website}
                      rtlActive
                    />
                  )
                },
                {
                  tabName: "Ø³Ø±ÙØ±",
                  tabIcon: Cloud,
                  tabContent: (
                    <Tasks
                      checkedIndexes={[1]}
                      tasksIndexes={[0, 1, 2]}
                      tasks={server}
                      rtlActive
                    />
                  )
                }
              ]}
            />
          </GridItem>
          <GridItem xs={12} sm={12} md={6}>
            <Card>
              <CardHeader color="warning">
                <h4 className={classes.cardTitleWhite}>Ø¢ÙØ§Ø± Ú©Ø§Ø±Ú©ÙØ§Ù</h4>
                <p className={classes.cardCategoryWhite}>
                  Ú©Ø§Ø±Ú©ÙØ§Ù Ø¬Ø¯ÛØ¯ Ø§Ø² Û±Ûµ Ø¢Ø¨Ø§Ù Û±Û³Û¹Û¶
                </p>
              </CardHeader>
              <CardBody>
                <Table
                  tableHeaderColor="warning"
                  tableHead={["Ú©Ø¯", "ÙØ§Ù", "Ø­ÙÙÙ", "Ø§Ø³ØªØ§Ù"]}
                  tableData={[
                    ["1", "Ø§Ø­ÙØ¯ Ø­Ø³ÛÙÛ	", "$36,738", "ÙØ§Ø²ÙØ¯Ø±Ø§Ù"],
                    ["2", "ÙÛÙØ§ Ø±Ø¶Ø§ÛÛ	", "$23,789", "Ú¯ÙØ³ØªØ§Ù"],
                    ["3", "ÙØ¨ÛÙØ§ Ø§Ø­ÙØ¯Ù¾ÙØ±	", "$56,142", "ØªÙØ±Ø§Ù"],
                    ["4", "Ø¬ÙØ§Ù Ø¢ÙØ§ÛÛ	", "$38,735", "Ø´ÙØ±Ú©Ø±Ø¯"]
                  ]}
                />
              </CardBody>
            </Card>
          </GridItem>
        </GridContainer>
        <GridContainer>
          <GridItem xs={12} sm={12} md={6}>
            <Card>
              <CardHeader color="primary">
                <h4 className={classes.cardTitleWhite}>Ø§Ø¹ÙØ§Ù ÙØ§</h4>
                <p className={classes.cardCategoryWhite}>
                  ÙØ¯ÙÙØ§ ÙÙ ÙØ¨Ù Ø£ØµØ¯ÙØ§Ø¦ÙØ§ ÙÙ{" "}
                  <a target="_blank" href="https://material-ui-next.com/">
                    ÙØ§Ø¬ÙØ© Ø§ÙÙØ³ØªØ®Ø¯Ù Ø§ÙÙØ§Ø¯ÙØ©
                  </a>{" "}
                  ÙÙØµØ¨ ÙÙ ÙØ¨Ù{" "}
                  <a target="_blank" href="https://www.creative-tim.com/">
                    Ø§ÙØ¥Ø¨Ø¯Ø§Ø¹ÙØ© ØªÙÙ
                  </a>
                  . ÙØ±Ø¬Ù Ø§ÙØªØ­ÙÙ ÙÙ{" "}
                  <a href="#pablo" target="_blank">
                    ÙØ«Ø§Ø¦Ù ÙØ§ÙÙØ©
                  </a>
                  .
                </p>
              </CardHeader>
              <CardBody>
                <SnackbarContent
                  message={
                    'Ø§ÛÙ ÛÚ© Ø§Ø¹ÙØ§Ù Ø§Ø³Øª Ú©Ù Ø¨Ø§ Ú©ÙØ§Ø³ color="warning" Ø§ÛØ¬Ø§Ø¯ Ø´Ø¯Ù Ø§Ø³Øª.'
                  }
                  close
                  rtlActive
                  color="warning"
                />
                <SnackbarContent
                  message={
                    'Ø§ÛÙ ÛÚ© Ø§Ø¹ÙØ§Ù Ø§Ø³Øª Ú©Ù Ø¨Ø§ Ú©ÙØ§Ø³ color="primary" Ø§ÛØ¬Ø§Ø¯ Ø´Ø¯Ù Ø§Ø³Øª.'
                  }
                  close
                  rtlActive
                  color="primary"
                />
                <SnackbarContent
                  message={
                    "Ø§ÛÙ ÛÚ© Ø§Ø¹ÙØ§Ù Ø¨Ø§ Ø¯Ú©ÙÙ Ø¨Ø³ØªÙ Ù Ø¢ÛÚ©Ù Ø§Ø³Øª"
                  }
                  close
                  rtlActive
                  color="info"
                />
              </CardBody>
            </Card>
          </GridItem>
          <GridItem xs={12} sm={12} md={6}>
            <Card profile>
              <CardAvatar profile>
                <a href="#pablo" onClick={e => e.preventDefault()}>
                  <img src={avatar} alt="..." />
                </a>
              </CardAvatar>
              <CardBody profile>
                <h6 className={classes.cardCategory}>
                  ÙØ¯ÛØ±Ø¹Ø§ÙÙ / ÙØ¯ÛØ±ÙÙÛ
                </h6>
                <h4 className={classes.cardTitle}>Ø®Ø¯Ø§Ø¯Ø§Ø¯ Ø¹Ø²ÛØ²Û</h4>
                <p className={classes.description}>
                  Ø·Ø±Ø§Ø­ Ú¯Ø±Ø§ÙÛÚ© Ø§Ø² Ø§ÛÙ ÙØªÙ Ø¨Ù Ø¹ÙÙØ§Ù Ø¹ÙØµØ±Û Ø§Ø²
                  ØªØ±Ú©ÛØ¨ Ø¨ÙØ¯Û Ø¨Ø±Ø§Û Ù¾Ø± Ú©Ø±Ø¯Ù ØµÙØ­Ù Ù Ø§Ø±Ø§ÛÙ Ø§ÙÙÛÙ
                  Ø´Ú©Ù Ø¸Ø§ÙØ±Û Ù Ú©ÙÛ Ø·Ø±Ø­ Ø³ÙØ§Ø±Ø´ Ú¯Ø±ÙØªÙ Ø´Ø¯Ù
                  Ø§Ø³ØªÙØ§Ø¯Ù ÙÛ ÙÙØ§ÛØ¯Ø ØªØ§ Ø§Ø² ÙØ¸Ø± Ú¯Ø±Ø§ÙÛÚ©Û
                  ÙØ´Ø§ÙÚ¯Ø± ÚÚ¯ÙÙÚ¯Û ÙÙØ¹ Ù Ø§ÙØ¯Ø§Ø²Ù ÙÙÙØª Ù Ø¸Ø§ÙØ± ÙØªÙ
                  Ø¨Ø§Ø´Ø¯. ÙØ¹ÙÙÙØ§ Ø·Ø±Ø§Ø­Ø§Ù Ú¯Ø±Ø§ÙÛÚ© Ø¨Ø±Ø§Û
                  ØµÙØ­ÙâØ¢Ø±Ø§ÛÛØ ÙØ®Ø³Øª Ø§Ø² ÙØªÙâÙØ§Û Ø¢Ø²ÙØ§ÛØ´Û Ù
                  Ø¨ÛâÙØ¹ÙÛ Ø§Ø³ØªÙØ§Ø¯Ù ÙÛâÚ©ÙÙØ¯ ...
                </p>
                <Button color="primary" round>
                  Ø¯ÙØ¨Ø§ÙâÚ©Ø±Ø¯Ù
                </Button>
              </CardBody>
            </Card>
          </GridItem>
        </GridContainer>
      </div>
    );
  }
}

RTLPage.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(rtlStyle)(RTLPage);
