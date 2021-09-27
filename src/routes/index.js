import React from "react";
import { Redirect } from "react-router-dom";





// Authentication related pages
import Login from "../pages/Authentication/Login";
import Logout from "../pages/Authentication/Logout";
import Register from "../pages/Authentication/Register";
import ForgetPwd from "../pages/Authentication/ForgetPassword";
import AuthLockScreen from "../pages/Authentication/AuthLockScreen";

// Dashboard
// import Dashboard from "../pages/Dashboard/index";

// // Charts
// import ChartApex from "../pages/Charts/Apexcharts";
// import ChartjsChart from "../pages/Charts/ChartjsChart";
// import SparklineChart from "../pages/Charts/SparklineChart";
// import ChartsKnob from "../pages/Charts/jquery-knob";


// //Icons
// import RemixIcons from "../pages/Icons/RemixIcons";
// import FontAwesome from "../pages/Icons/FontAwesome";

// //Utility
// import StarterPage from "../pages/Utility/StarterPage";
// import Maintenance from "../pages/Utility/Maintenance";
// import CommingSoon from "../pages/Utility/CommingSoon";
// import Timeline from "../pages/Utility/Timeline";
// import FAQs from "../pages/Utility/FAQs";
// import Pricing from "../pages/Utility/Pricing";
// import Error404 from "../pages/Utility/Error404";
// import Error500 from "../pages/Utility/Error500";

// // Forms
// import FormElements from "../pages/Forms/FormElements";
// import FormAdvanced from "../pages/Forms/FormAdvanced";
// import FormEditors from "../pages/Forms/FormEditors";
// import FormValidations from "../pages/Forms/FormValidations";
// import FormMask from "../pages/Forms/FormMask";
// import FormUpload from "../pages/Forms/FormUpload";
// import FormWizard from "../pages/Forms/FormWizard";
// import FormXeditable from "../pages/Forms/FormXeditable";

// //Ui
// import UiAlert from "../pages/Ui/UiAlert";
// import UiButtons from "../pages/Ui/UiButtons";
// import UiCards from "../pages/Ui/UiCards";
// import UiCarousel from "../pages/Ui/UiCarousel";
// import UiDropdown from "../pages/Ui/UiDropdown";
// import UiGeneral from "../pages/Ui/UiGeneral";
// import UiGrid from "../pages/Ui/UiGrid";
// import UiImages from "../pages/Ui/UiImages";
// import UiLightbox from "../pages/Ui/UiLightbox";
// import UiModal from "../pages/Ui/UiModal";
// import UiProgressbar from "../pages/Ui/UiProgressbar";
// import UiSweetAlert from "../pages/Ui/UiSweetAlert";
// import UiTabsAccordions from "../pages/Ui/UiTabsAccordions";
// import UiTypography from "../pages/Ui/UiTypography";
// import UiVideo from "../pages/Ui/UiVideo";
// import UiSessionTimeout from "../pages/Ui/UiSessionTimeout";
// import UiRating from "../pages/Ui/UiRating";
// import UiRangeSlider from "../pages/Ui/UiRangeSlider";
// import UiNotifications from "../pages/Ui/ui-notifications";
// import UIRoundSlider from "../pages/Ui/UIRoundSlider";

// //Tables
// import BasicTables from "../pages/Tables/BasicTables";
// import DatatableTables from "../pages/Tables/DatatableTables";
// import ResponsiveTables from "../pages/Tables/ResponsiveTables";
// import EditableTables from "../pages/Tables/EditableTables";

// // Inner Authentication
// import Login1 from "../pages/AuthenticationInner/Login";
// import Register1 from "../pages/AuthenticationInner/Register";
// import ForgetPwd1 from "../pages/AuthenticationInner/ForgetPassword";

//Organization
import Organization from "../pages/organization";
import Users from "../pages/users";
import Roles from "../pages/roles";
import Workspace from "../pages/workspace";
import AwsKeys from "../pages/awsKeys";




import Diagram  from "../pages/diagram";
// import Diagram  from "../container/gojs/index";
// import Diagram  from "../container/gojs";
import CodeEditor from "../container/codeEditor";




const authProtectedRoutes = [

	

	// Tables
	// { path: "/basic-tables", component: BasicTables },
	// { path: "/datatable-table", component: DatatableTables },
	// { path: "/responsive-table", component: ResponsiveTables },
	// { path: "/editable-table", component: EditableTables },

	// // Ui
	// { path: "/ui-alerts", component: UiAlert },
	// { path: "/ui-buttons", component: UiButtons },
	// { path: "/ui-cards", component: UiCards },
	// { path: "/ui-carousel", component: UiCarousel },
	// { path: "/ui-dropdowns", component: UiDropdown },
	// { path: "/ui-general", component: UiGeneral },
	// { path: "/ui-grid", component: UiGrid },
	// { path: "/ui-images", component: UiImages },
	// { path: "/ui-lightbox", component: UiLightbox },
	// { path: "/ui-modals", component: UiModal },
	// { path: "/ui-progressbars", component: UiProgressbar },
	// { path: "/ui-sweet-alert", component: UiSweetAlert },
	// { path: "/ui-tabs-accordions", component: UiTabsAccordions },
	// { path: "/ui-typography", component: UiTypography },
	// { path: "/ui-video", component: UiVideo },
	// { path: "/ui-session-timeout", component: UiSessionTimeout },
	// { path: "/ui-rating", component: UiRating },
	// { path: "/ui-rangeslider", component: UiRangeSlider },
	// { path: "/ui-notifications", component: UiNotifications },
	// { path: "/ui-roundslider", component: UIRoundSlider },

	// // Forms
	// { path: "/form-elements", component: FormElements },
	// { path: "/form-advanced", component: FormAdvanced },
	// { path: "/form-editors", component: FormEditors },
	// { path: "/form-mask", component: FormMask },
	// { path: "/form-file-upload", component: FormUpload },
	// { path: "/form-wizard", component: FormWizard },
	// { path: "/form-validation", component: FormValidations },
	// { path: "/form-xeditable", component: FormXeditable },

	// //Utility
	// { path: "/starter", component: StarterPage },
	// { path: "/timeline", component: Timeline },
	// { path: "/faqs", component: FAQs },
	// { path: "/pricing", component: Pricing },

	// //Icons
	// { path: "/icons-remix", component: RemixIcons },
	// { path: "/font-awesome-5", component: FontAwesome },

	

	// //Charts
	// { path: "/apex-charts", component: ChartApex },
	// { path: "/chartjs", component: ChartjsChart },
	// { path: "/charts-sparkline", component: SparklineChart },
	// { path: "/charts-knob", component: ChartsKnob },

	


	//
	{ path: "/organization", component: Organization },
	{ path: "/users", component: Users },
	{ path: "/roles", component: Roles },
	{ path: "/workspace", component: Workspace },
	{ path: "/keys", component: AwsKeys },

	

	{ path: "/code", component: CodeEditor },

	{ path: "/canvas/:id", component:Diagram},

	// { path: "/dashboard", component: Dashboard },

	// this route should be at the end of all other routes
	{ path: "/", exact: true, component: () => <Redirect to="/organization" /> }
];

const publicRoutes = [
	{ path: "/logout", component: Logout },
	{ path: "/login", component: Login },
	{ path: "/forgot-password", component: ForgetPwd },
	{ path: "/register", component: Register },
	{ path: "/lock-screen", component: AuthLockScreen },

	// Authentication Inner
	// { path: "/auth-login", component: Login1 },
	// { path: "/auth-register", component: Register1 },
	// { path: "/auth-recoverpw", component: ForgetPwd1 },

	// { path: "/maintenance", component: Maintenance },
	// { path: "/comingsoon", component: CommingSoon },
	// { path: "/404", component: Error404 },
	// { path: "/500", component: Error500 },
];

export { authProtectedRoutes, publicRoutes };
