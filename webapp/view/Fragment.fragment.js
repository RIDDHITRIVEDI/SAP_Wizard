sap.ui.jsfragment("WizardApplication.WizardApplication.view.Fragment", {
	createContent: function (oController) {
		
		//For Wizard 0
		var WorkOrederNoScan = new sap.m.Label({
			text: "Work Order"
		});
		var WorkOrderScanValue = new sap.m.Text(
			"T-WorkOrderScanValue", {
				text: "{/WorkOrderScanValue}"
			});
		var PlantScan = new sap.m.Label({
			text: "Plant"
		});
		var PlantScanvalue = new sap.m.Text(
			"T-PlantScanValue", {
				text: "{/PlantScanValue}"
			});
		var LinkScan = new sap.m.Link(
			"LinkScan", // string
			{
				text: "Edit", // string
				press: [oController.BackToWizard, oController] // function|array
			}
		);

		var SimpleFormScan = new sap.ui.layout.form.SimpleForm(
			"simpleFormScan", {
				editable: false,
				layout: sap.ui.layout.form.SimpleFormLayout.ResponsiveGridLayout,
				backgroundDesign: sap.ui.layout.BackgroundDesign.Translucent,
				content: [
					WorkOrederNoScan,
					WorkOrderScanValue,
					PlantScan,
					PlantScanvalue,
					LinkScan
				],
				title: "1. Scan/Enter the Work Order"
			}
		);

		//Form for wizard 1

		var WorkOrederNo = new sap.m.Label({
			text: "Work Order"
		});
		var WorkOrderValue = new sap.m.Text(
			"T-WorkOrderValue", {
				text: "{/WorkOrderValue}"

			});
		var Material = new sap.m.Label({
			text: "Material"
		});
		var MaterialValue = new sap.m.Text(
			"T-MaterialValue", {
				text: "{/MaterialValue}"

			});
		var MaterialDesc = new sap.m.Label({
			text: "Material Description"
		});
		var MaterialDescValue = new sap.m.Text(
			"T-MaterialDescValue", {
				text: "{/MaterialDescValue}"

			});
		var Plant = new sap.m.Label({
			text: "Plant"
		});
		var Plantvalue = new sap.m.Text(
			"T-PlantValue", {
				text: "{/PlantValue}"

			});
		var Department = new sap.m.Label({
			text: "Department"
		});
		var DepartmentValue = new sap.m.Text(
			"T-DepartmentValue", {
				text: "{/DepartmentValue}"

			});
		var Line = new sap.m.Label({
			text: "Line"
		});
		var LineValue = new sap.m.Text(
			"T-LineValue", {
				text: "{/LineValue}"

			});
		var BIUB = new sap.m.Label({
			text: "BIUB"
		});
		var BIUBValue = new sap.m.Text(
			"T-BIUBValue", {
				text: "{/BIUBValue}"

			});
		var Supervisor = new sap.m.Label({
			text: "Supervisor"
		});
		var SupervisorValue = new sap.m.Text(
			"T-SupervisorValue", {
				text: "{/SupervisorValue}"

			});
		var InspectionDateTime = new sap.m.Label({
			text: "Inspection Date Time"
		});
		var InspectionDateTimeValue = new sap.m.Text(
			"T-InspectionDateTimeValue", {
				text: "{/InspectionDateTimeValue}"

			});
		var Link = new sap.m.Link(
			"sId", // string
			{
				text: "Edit", // string
				press: [oController.editStepOne, oController] // function|array
			}
		);

		var SimpleForm = new sap.ui.layout.form.SimpleForm(
			"simpleForm", {
				editable: false,
				layout: sap.ui.layout.form.SimpleFormLayout.ResponsiveGridLayout,
				backgroundDesign: sap.ui.layout.BackgroundDesign.Translucent,
				content: [WorkOrederNo,
					WorkOrderValue,
					Material,
					MaterialValue,
					MaterialDesc,
					MaterialDescValue,
					Plant,
					Plantvalue,
					Department,
					DepartmentValue,
					Line,
					LineValue,
					BIUB,
					BIUBValue,
					Supervisor,
					SupervisorValue,
					InspectionDateTime,
					InspectionDateTimeValue,
					Link
				],
				title: "2. Header - Manufacturing Quality Control Inspection"
			}
		);

		//Form for wizard 2

		var SKUIssues = new sap.m.Label({
			text: "SKU Issues"
		});
		var SKUIssuesValue = new sap.m.Text(
			"T-SKUIssuesValue", {
				text: "{/SKUIssuesValue}"

			});
		var LotJulian = new sap.m.Label({
			text: "Lot/Julian"
		});
		var LotJulianValue = new sap.m.Text(
			"T-LotJulianValue", {
				text: "{/LotJulianValue}"

			});
		var ShipperInfo = new sap.m.Label({
			text: "Shipper Info"
		});
		var ShipperInfoValue = new sap.m.Text(
			"T-ShipperInfoValue", {
				text: "{/ShipperInfoValue}"

			});
		var BIUBLI = new sap.m.Label({
			text: "BIUB"
		});
		var BIUBLIvalue = new sap.m.Text(
			"T-BIUBLIValue", {
				text: "{/BIUBLIValue}"

			});
		var Nutritional = new sap.m.Label({
			text: "Nutritional"
		});
		var NutritionalValue = new sap.m.Text(
			"T-NutritionalValue", {
				text: "{/NutritionalValue}"

			});
		var WOMaterialSheet = new sap.m.Label({
			text: "WO/MaterialSheet"
		});
		var WOMaterialSheetValue = new sap.m.Text(
			"T-WOMaterialSheetValue", {
				text: "{/WOMaterialSheetValue}"

			});
		var LabelProcedures = new sap.m.Label({
			text: "LabelProcedures"
		});
		var LabelProceduresValue = new sap.m.Text(
			"T-LabelProceduresValue", {
				text: "{/LabelProceduresValue}"

			});
		var MAVWeights = new sap.m.Label({
			text: "MAVWeights"
		});
		var MAVWeightsValue = new sap.m.Text(
			"T-MAVWeightsValue", {
				text: "{/MAVWeightsValue}"

			});
		var MetalDetector = new sap.m.Label({
			text: "MetalDetector"
		});
		var MetalDetectorValue = new sap.m.Text(
			"T-MetalDetectorValue", {
				text: "{/MetalDetectorValue}"

			});
		var LabelScanTest = new sap.m.Label({
			text: "LabelScanTest"
		});
		var LabelScanTestValue = new sap.m.Text(
			"T-LabelScanTestValue", {
				text: "{/LabelScanTestValue}"

			});
		var LineClearance = new sap.m.Label({
			text: "LineClearance"
		});
		var LineClearanceValue = new sap.m.Text(
			"T-LineClearanceValue", {
				text: "{/LineClearanceValue}"

			});
		var QltyAuditSheet = new sap.m.Label({
			text: "QltyAuditSheet"
		});
		var QltyAuditSheetValue = new sap.m.Text(
			"T-QltyAuditSheetValue", {
				text: "{/QltyAuditSheetValue}"

			});
		var WhiteBoardTankVatSKU = new sap.m.Label({
			text: "WhiteBoardTankVatSKU"
		});
		var WhiteBoardTankVatSKUValue = new sap.m.Text(
			"T-WhiteBoardTankVatSKUValue", {
				text: "{/WhiteBoardTankVatSKUValue}"

			});
		var AllergenProcedureFollowed = new sap.m.Label({
			text: "AllergenProcedureFollowed"
		});
		var AllergenProcedureFollowedValue = new sap.m.Text(
			"T-AllergenProcedureFollowedValue", {
				text: "{/AllergenProcedureFollowedValue}"

			});
		var SanitationandCrossContaminationprotocols = new sap.m.Label({
			text: "SanitationandCrossContaminationprotocols"
		});
		var SanitationandCrossContaminationprotocolsValue = new sap.m.Text(
			"T-SanitationandCrossContaminationprotocolsValue", {
				text: "{/SanitationandCrossContaminationprotocolsValue}"

			});
		var HourlyCheck = new sap.m.Label({
			text: "HourlyCheck"
		});
		var HourlyCheckValue = new sap.m.Text(
			"T-HourlyCheckValue", {
				text: "{/HourlyCheckValue}"

			});
		var Enclosure = new sap.m.Label({
			text: "Enclosure"
		});
		var EnclosureValue = new sap.m.Text(
			"T-EnclosureValue", {
				text: "{/EnclosureValue}"

			});
		var LineDefects = new sap.m.Label({
			text: "Line Defects"
		});
		var LineDefectsValue = new sap.m.Text(
			"T-LineDefectsValue", {
				text: "{/LineDefectsValue}"

			});
		var InputTotalPossible = new sap.m.Label({
			text: "InputTotalPossible"
		});
		var InputTotalPossibleValue = new sap.m.Text(
			"T-InputTotalPossibleValue", {
				text: "{/InputTotalPossibleValue}"

			});
		var LineDefectsNotes = new sap.m.Label({
			text: "Line Defects Notes"
		});
		var LineDefectsNotesValue = new sap.m.Text(
			"T-LineDefectsNotesValue", {
				text: "{/LineDefectsNotesValue}"

			});

		var LinkLineInspec = new sap.m.Link(
			"LineInspec", // string
			{
				text: "Edit", // string
				press: [oController.editStepTwo, oController] // function|array
			}
		);

		var SimpleFormLineInspection = new sap.ui.layout.form.SimpleForm(
			"simpleFormLineInspection", {
				editable: false,
				layout: sap.ui.layout.form.SimpleFormLayout.ResponsiveGridLayout,
				backgroundDesign: sap.ui.layout.BackgroundDesign.Translucent,
				content: [
					SKUIssues,
					SKUIssuesValue,
					LotJulian,
					LotJulianValue,
					ShipperInfo,
					ShipperInfoValue,
					BIUBLI,
					BIUBLIvalue,
					Nutritional,
					NutritionalValue,
					WOMaterialSheet,
					WOMaterialSheetValue,
					LabelProcedures,
					LabelProceduresValue,
					MAVWeights,
					MAVWeightsValue,
					MetalDetector,
					MetalDetectorValue,
					LabelScanTest,
					LabelScanTestValue,
					LineClearance,
					LineClearanceValue,
					QltyAuditSheet,
					QltyAuditSheetValue,
					WhiteBoardTankVatSKU,
					WhiteBoardTankVatSKUValue,
					AllergenProcedureFollowed,
					AllergenProcedureFollowedValue,
					SanitationandCrossContaminationprotocols,
					SanitationandCrossContaminationprotocolsValue,
					HourlyCheck,
					HourlyCheckValue,
					Enclosure,
					EnclosureValue,
					LineDefects,
					LineDefectsValue,
					InputTotalPossible,
					InputTotalPossibleValue,
					LineDefectsNotes,
					LineDefectsNotesValue,
					LinkLineInspec
				],
				title: "3. Line Inspection"
			}
		);
		//Form for wizard 3

		var SampleWeightUntit = new sap.m.Label({
			text: "SampleWeightUntit"
		});
		var SampleWeightUntitValue = new sap.m.Text(
			"T-SampleWeightUntitValue", {
				text: "{/SampleWeightUntitValue}"

			});
		var NetWeight = new sap.m.Label({
			text: "Net Weight"
		});
		var NetWeightValue = new sap.m.Text(
			"T-NetWeightValue", {
				text: "{/NetWeightValue}"

			});
		var MAVWeight = new sap.m.Label({
			text: "MAV Weight"
		});
		var MAVWeightValue = new sap.m.Text(
			"T-MAVWeightValue", {
				text: "{/MAVWeightValue}"

			});
		var ProductDefects = new sap.m.Label({
			text: "Product Defects"
		});
		var ProductDefectsvalue = new sap.m.Text(
			"T-ProductDefectsValue", {
				text: "{/ProductDefectsValue}"

			});
		var TotalPossible = new sap.m.Label({
			text: "Total Possible"
		});
		var TotalPossibleValue = new sap.m.Text(
			"T-TotalPossibleValue", {
				text: "{/TotalPossibleValue}"

			});
		var ProductDefectComments = new sap.m.Label({
			text: "Product Defect Comments"
		});
		var ProductDefectCommentsValue = new sap.m.Text(
			"T-ProductDefectCommentsValue", {
				text: "{/ProductDefectCommentsValue}"

			});
		var Avg = new sap.m.Label({
			text: "Avg"
		});
		var AvgValue = new sap.m.Text(
			"T-AvgValue", {
				text: "{/AvgValue}"

			});

		var LinkProdInspec = new sap.m.Link(
			"L-LinkProdInspec", // string
			{
				text: "Edit", // string
				press: [oController.editStepThree, oController] // function|array
			}
		);

		var SimpleFormProdInspec = new sap.ui.layout.form.SimpleForm(
			"simpleFormProdInspec", {
				editable: false,
				layout: sap.ui.layout.form.SimpleFormLayout.ResponsiveGridLayout,
				backgroundDesign: sap.ui.layout.BackgroundDesign.Translucent,
				content: [
					SampleWeightUntit,
					SampleWeightUntitValue,
					NetWeight,
					NetWeightValue,
					MAVWeight,
					MAVWeightValue,
					ProductDefects,
					ProductDefectsvalue,
					TotalPossible,
					TotalPossibleValue,
					ProductDefectComments,
					ProductDefectCommentsValue,
					Avg,
					AvgValue,
					LinkProdInspec
				],
				title: "4.Product Inspection"
			}
		);

		//Form for wizard 4

		var UnResolvedComments = new sap.m.Label({
			text: "Un-Resolved Comments"
		});
		var UnResolvedCommentsValue = new sap.m.Text(
			"T-UnResolvedCommentsValue", {
				text: "{/UnResolvedCommentsValue}"

			});
		var ResolvedComments = new sap.m.Label({
			text: "Resolved Comments"
		});
		var ResolvedCommentsValue = new sap.m.Text(
			"T-ResolvedCommentsValue", {
				text: "{/ResolvedCommentsValue}"

			});
		var HUReference = new sap.m.Label({
			text: "HUReference"
		});
		var HUReferenceValue = new sap.m.Text(
			"T-HUReferenceValue", {
				text: "{/HUReferenceValue}"

			});
		var Comments = new sap.m.Label({
			text: "Comments"
		});
		var Commentsvalue = new sap.m.Text(
			"T-CommentsValue", {
				text: "{/CommentsValue}"

			});

		var LinkAdminArea = new sap.m.Link(
			"L-LinkAdminArea", // string
			{
				text: "Edit", // string
				press: [oController.editStepFour, oController] // function|array
			}
		);

		var SimpleFormAdminArea = new sap.ui.layout.form.SimpleForm(
			"simpleFormAdminArea", {
				editable: false,
				layout: sap.ui.layout.form.SimpleFormLayout.ResponsiveGridLayout,
				backgroundDesign: sap.ui.layout.BackgroundDesign.Translucent,
				content: [
					UnResolvedComments,
					UnResolvedCommentsValue,
					ResolvedComments,
					ResolvedCommentsValue,
					HUReference,
					HUReferenceValue,
					Comments,
					Commentsvalue,
					LinkAdminArea
				],
				title: "5.Admin Area"
			}
		);

		var oButtonSubmit = new sap.m.Button({
			id: 'B-Submit',
			text: 'Submit',
			press: [oController.handleWizardSubmit, oController]
		});
		var oButtonCancel = new sap.m.Button({
			id: 'B-Cancel',
			text: 'Cancel',
			press: [oController.handleWizardCancel, oController]
		});
		var oBarHeader = new sap.m.Bar({

			contentLeft: [new sap.m.Button({

					type: sap.m.ButtonType.Transparent, //sap.m.ButtonType.Back,
					icon: "sap-icon://log",
					enabled: true,
					press: function () {}
				}),
				new sap.m.Label({

					width: '100%',
					text: 'Riddhi Trivedi'
				}).addStyleClass("ClassForLabelUserName")
			],
			contentMiddle: [new sap.m.Label({

				fontSize: "100px",
				width: '100%',
				text: 'Manufacturing Quality Control Inspection'
			}).addStyleClass("ClassForLabel")],
			contentRight: [new sap.m.Image({

				src: "Images/newlogo_dark.png",
				width: "200px",
				press: function () {}
			})]
		}).addStyleClass("BackgroundForBar");

		var Bar = new sap.m.Bar(
			"FooterBar", // string
			{
				contentRight: [oButtonSubmit, oButtonCancel]
			}
		);

		var oPageReview = new sap.m.Page({
			id: "wizardReviewPage",
			showHeard: false,
			content: [SimpleFormScan, SimpleForm, SimpleFormLineInspection, SimpleFormProdInspec, SimpleFormAdminArea],
			footer: [Bar]
		});
		
		
		oPageReview.setCustomHeader(oBarHeader);
		return oPageReview;

	}
});