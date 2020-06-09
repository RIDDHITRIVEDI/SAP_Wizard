sap.ui.jsview("WizardApplication.WizardApplication.view.View1", {

	getControllerName: function () {
		return "WizardApplication.WizardApplication.controller.View1";
	},

	createContent: function (oController) {

		// Wizard Step 1

		var oLabel_Plant_Scan = new sap.m.Label({
			id: 'L-Plant_Scan',
			width: '100%',
			text: ' Select Plant',
			layoutData: new sap.ui.layout.GridData({
				span: "L12 M12 S12"
			})
		}).addStyleClass("sapUiSmallMarginEnd");
		
		
		

		var oCombo_Plant_Scan = new sap.m.Select({
			id: 'combo_Plant_Scan',
			width: '100%',
			placeholder: 'Select Plant ..',
			enabled: true,
			visible: true,
			layoutData: new sap.ui.layout.GridData({
				span: "L10 M12 S12"
			}),
			change: function (oEvent) {
				//doOnChange_Plant_Scan();
			}
		});

		var oButtonUpdateLatLong = new sap.m.Button({
			id: 'B-UpdateLatLong',
			icon: 'sap-icon://functional-location',
			//text: 'Update Location',
			enabled: true,
			width: '100%',
			layoutData: new sap.ui.layout.GridData({
				span: "L2 M12 S12"
			}),
			press: function () {
				//	updateLatLong();
			}
		});

		var oInput_WorkOrderNo_Scan = new sap.m.Input({
			id: 'input_WorkOrderNo_Scan',
			placeholder: 'Enter Work Order No ..',
			width: '100%',
			layoutData: new sap.ui.layout.GridData({
				span: "L10 M12 S12"
			}),
			visible: true,
			change: function () {
				//	this.setValue(this.getValue().padStart(12, '0'))
			}
		});

		var oBarcodeImage = new sap.m.Button({
			icon: 'sap-icon://bar-code',
			width: '100%',
			layoutData: new sap.ui.layout.GridData({
				span: "L2 M12 S12"
			}),
			press: function () {
				//	dialog.open();
			}
		});

		var oGridForm = new sap.ui.layout.Grid({
			width: '100%',
			hSpacing: 1,
			vSpacing: 1,
			position: 'Left',
			content: [
				oLabel_Plant_Scan,
				oCombo_Plant_Scan,
				oButtonUpdateLatLong,
				oInput_WorkOrderNo_Scan,
				oBarcodeImage

			]
		});

		var oVLayoutPageScan = new sap.ui.layout.VerticalLayout({
			id: 'vLayoutPageScan',
			width: '30%'
		});

		//oVLayoutPageScan.addContent(oHLayoutRow0_Scan);
		oVLayoutPageScan.addContent(oGridForm);

		var wizardstep1 = new sap.m.WizardStep(
			"WizardStep1", // string
			{
				id: "ProductTypeStep", // sap.ui.core.ID
				title: "Please Scan/Enter the Work Order", // string
				validated: true, // boolean,
				content: [oVLayoutPageScan]
			}
		);

		//WizardStep 2

		// Row 1
		var oLabel_WorkOrderNo = new sap.m.Label({
			id: 'L_WorkOrderNo',
			width: '100%',
			text: ' Work Order'
		});
		var oInput_WorkOrderNo = new sap.m.Input({
			id: 'input_WorkOrderNo',
			placeholder: 'Input Work Order ..',
			width: '100%',
			enabled: false,
			visible: true
		});
		var oVLayoutRow1H_1 = new sap.m.VBox({
			id: 'vLayoutRow1H_1',
			width: '100%',
			items: [
				oLabel_WorkOrderNo,
				oInput_WorkOrderNo
			]
		}).addStyleClass("sapUiSmallMarginEnd");

		var oLabel_Material = new sap.m.Label({
			id: 'L_Material',
			width: '100%',
			text: 'Material'
		});
		var oInput_Material = new sap.m.Input({
			id: 'input_Material',
			placeholder: 'Input Material ..',
			width: '100%',
			enabled: false,
			visible: true
		});
		var oVLayoutRow1H_2 = new sap.m.VBox({
			id: 'vLayoutRow1H_2',
			width: '100%',
			items: [
				oLabel_Material,
				oInput_Material
			]
		}).addStyleClass("sapUiSmallMarginEnd");

		var oLabel_Description = new sap.m.Label({
			id: 'L_Description',
			width: '100%',
			text: 'Description'
		});
		var oInput_Description = new sap.m.Input({
			id: 'input_Description',
			placeholder: 'Input Description ..',
			width: '100%',
			enabled: false,
			visible: true
		});
		var oVLayoutRow1H_3 = new sap.m.VBox({
			id: 'vLayoutRow1H_3',
			width: '90%',
			items: [
				oLabel_Description,
				oInput_Description
			]
		});

		var oHLayoutRow1H = new sap.m.HBox({
			id: 'hLayoutRow1H',
			width: '100%',
			items: [
				oVLayoutRow1H_1,
				oVLayoutRow1H_2,
				oVLayoutRow1H_3
			]
		});

		// Row 2
		var oLabel_Plant = new sap.m.Label({
			id: 'L_Plant',
			width: '100%',
			text: ' Plant'
		});
		var oCombo_Plant = new sap.m.Select({
			id: 'combo_Plant',
			placeholder: 'Select Plant ..',
			width: '100%',
			enabled: false,
			visible: true
		});
		var oVLayoutRow2H_1 = new sap.m.VBox({
			id: 'vLayoutRow2H_1',
			width: '100%',
			items: [
				oLabel_Plant,
				oCombo_Plant
			]
		}).addStyleClass("sapUiSmallMarginEnd");

		var oLabel_Department = new sap.m.Label({
			id: 'L_Department',
			width: '100%',
			text: ' Department'
		});
		var oCombo_Department = new sap.m.Select({
			id: 'combo_Department',
			placeholder: 'Select Department ..',
			width: '100%',
			enabled: false,
			visible: true,
			change: function () {
				//	updateDefectCodes();
			}
		});
		var oVLayoutRow2H_2 = new sap.m.VBox({
			id: 'vLayoutRow2H_2',
			width: '100%',
			items: [
				oLabel_Department,
				oCombo_Department
			]
		}).addStyleClass("sapUiSmallMarginEnd");

		var oLabel_GiftBIUB = new sap.m.Label({
			id: 'L_GiftBIUB',
			width: '100%',
			text: 'BIUB'
		});

		var oDTPicker_GiftBIUB = new sap.m.DatePicker({
			id: 'DTPicker_GiftBIUB',
			width: '100%',
			layoutData: [new sap.m.FlexItemData({
				growFactor: 1
			})],
			displayFormat: "MM/dd/yyyy",
			editable: true,
			placeholder: "Enter Date .."
		});

		var oVLayoutGiftBIUB = new sap.m.VBox({
			id: 'vLayoutGiftBIUB',
			width: '100%',
			items: [
				oLabel_GiftBIUB,
				oDTPicker_GiftBIUB
			]
		}).addStyleClass("sapUiSmallMarginEnd");

		var oLabel_Line = new sap.m.Label({
			id: 'L_Line',
			width: '100%',
			text: 'Line'
		});
		var oCombo_Line = new sap.m.Select({
			id: 'combo_Line',
			placeholder: 'Select Line ..',
			width: '100%',
			enabled: false,
			visible: true,
			change: function () {
				//updateDefectCodes();
			}
		});
		var oVLayoutRow2H_3 = new sap.m.VBox({
			id: 'vLayoutRow2H_3',
			width: '100%',
			items: [
				oLabel_Line,
				oCombo_Line
			]
		}).addStyleClass("sapUiSmallMarginEnd");

		var oLabel_Supervisor = new sap.m.Label({
			id: 'L_Supervisor',
			width: '100%',
			text: 'Supervisor'
		});
		var oInput_Supervisor = new sap.m.Input({
			id: 'input_Supervisor',
			placeholder: 'Select Supervisor ..',
			showSuggestion: true,
			suggest: [function (oEvent) {}, this],
			width: '100%',
			enabled: true,
			visible: true,
			suggestionItemSelected: function (oEvent) {
				//	oCore.byId("input_Supervisor").setValue(oEvent.getParameter("selectedItem").getText().trim());
			}
		});
		var oVLayoutRow2H_4 = new sap.m.VBox({
			id: 'vLayoutRow2H_4',
			width: '100%',
			items: [
				oLabel_Supervisor,
				oInput_Supervisor
			]
		}).addStyleClass("sapUiSmallMarginEnd");

		var oLabel_InspectionDateTime = new sap.m.Label({
			id: 'L_InspectionDateTime',
			width: '100%',
			layoutData: [new sap.m.FlexItemData({
				growFactor: 1
			})],
			//textAlign : sap.ui.core.TextAlign.Left,
			text: 'Inspection Date Time'
		});

		var oDTPicker_InspectionDateTime = new sap.m.DatePicker({
			id: 'DTPicker_InspectionDateTime',
			width: '100%',
			layoutData: [new sap.m.FlexItemData({
				growFactor: 1
			})],
			//displayFormat: "dd MMMM yyyy hh:mm",
			displayFormat: "MM/dd/yyyy",
			//valueFormat:"yyyy-MM-dd",
			enabled: false,
			placeholder: "Enter Date .."
		});
		var oVLayoutRow2H_5 = new sap.m.VBox({
			id: 'vLayoutRow2H_5',
			width: '100%',
			items: [
				oLabel_InspectionDateTime,
				oDTPicker_InspectionDateTime
			]
		});
		var oHLayoutRow2H = new sap.m.HBox({
			id: 'hLayoutRow2H',
			alignContent: sap.m.FlexAlignContent.Center,
			alignItems: sap.m.FlexAlignItems.Center,
			justifyContent: sap.m.FlexJustifyContent.Center,
			width: '100%',
			items: [
				oVLayoutRow2H_1,
				oVLayoutRow2H_2,
				oVLayoutRow2H_3,
				oVLayoutGiftBIUB,
				oVLayoutRow2H_4,
				oVLayoutRow2H_5
			]
		});

		var oVLayoutHeader = new sap.m.VBox({
			id: 'vLayoutHeader',
			width: '100%',
			items: [
				oHLayoutRow1H,
				oHLayoutRow2H
			]
		});
		var wizardstep2 = new sap.m.WizardStep(
			"WizardStep2", // string
			{
				id: "ProductTypeStep2", // sap.ui.core.ID
				title: "Header - Manufacturing Quality Control Inspection", // string
				validated: true, // boolean,
				content: [oVLayoutHeader]
			}
		);
		// WizardStep 3 Line Inspection

		//Row 2 Drop-down boxes
		var oLabel_SkuIssues = new sap.m.Label({
			id: 'L_SkuIssues',
			width: '100%',
			text: 'SKU Issues'
		});
		var oCombo_SkuIssues = new sap.m.Select({
			id: 'combo_SkuIssues',
			placeholder: 'Select Sku Issue ..',
			width: '100%',
			enabled: true,
			visible: true,
			change: function (oEvent) {}
		});
		var oVLayoutRowSkuIssues = new sap.m.VBox({
			id: 'vLayoutRowSkuIssues',
			width: '100%',
			items: [
				oLabel_SkuIssues,
				oCombo_SkuIssues
			]
		}).addStyleClass("sapUiSmallMarginEnd");

		var oLabel_LotJulian = new sap.m.Label({
			id: 'Label_LotJulian',
			width: '100%',
			text: ' Lot/Julian'
		});
		var oCombo_LotJulian = new sap.m.Select({
			id: 'combo_LotJulian',
			placeholder: 'Select Lot/Julian ..',
			width: '100%',
			enabled: true,
			visible: true,
			change: function (oEvent) {}
		});
		var oVLayoutRowLotJulian = new sap.m.VBox({
			id: 'vLayoutRowLotJulian',
			width: '100%',
			items: [
				oLabel_LotJulian,
				oCombo_LotJulian
			]
		}).addStyleClass("sapUiSmallMarginEnd");

		var oLabel_ShipperInfo = new sap.m.Label({
			id: 'L_ShipperInfo',
			width: '100%',
			text: ' Shipper Info'
		});
		var oCombo_ShipperInfo = new sap.m.Select({
			id: 'combo_ShipperInfo',
			placeholder: 'Select Shipper Info ..',
			width: '100%',
			enabled: true,
			visible: true,
			change: function (oEvent) {}
		});
		var oVLayoutRowShipperInfo = new sap.m.VBox({
			id: 'vLayoutRowShipperInfo',
			width: '100%',
			items: [
				oLabel_ShipperInfo,
				oCombo_ShipperInfo
			]
		}).addStyleClass("sapUiSmallMarginEnd");

		var oLabel_BIUB = new sap.m.Label({
			id: 'L_BIUB',
			width: '100%',
			text: 'BIUB'
		});
		var oCombo_BIUB = new sap.m.Select({
			id: 'combo_BIUB',
			placeholder: 'Select BIUB ..',
			width: '100%',
			enabled: true,
			visible: true,
			change: function (oEvent) {}
		});
		var oVLayoutRowBIUB = new sap.m.VBox({
			id: 'vLayoutRowBIUB',
			width: '100%',
			items: [
				oLabel_BIUB,
				oCombo_BIUB
			]
		});

		var oHLayoutRow2LI = new sap.m.HBox({
			id: 'hLayoutRow2LI',
			alignContent: sap.m.FlexAlignContent.Center,
			alignItems: sap.m.FlexAlignItems.Center,
			justifyContent: sap.m.FlexJustifyContent.Center,
			width: '100%',
			items: [
				oVLayoutRowSkuIssues,
				oVLayoutRowLotJulian,
				oVLayoutRowShipperInfo,
				oVLayoutRowBIUB
			]
		});

		//Row 3
		var oLabel_Nutritional = new sap.m.Label({
			id: 'L_Nutritional',
			width: '100%',
			text: 'Nutritional'
		});
		var oCombo_Nutritional = new sap.m.Select({
			id: 'combo_Nutritional',
			placeholder: 'Select Nutritional ..',
			width: '100%',
			enabled: true,
			visible: true,
			change: function (oEvent) {}
		});
		var oVLayoutRowNutritional = new sap.m.VBox({
			id: 'vLayoutRowNutritional',
			width: '100%',
			items: [
				oLabel_Nutritional,
				oCombo_Nutritional
			]
		}).addStyleClass("sapUiSmallMarginEnd");

		var oLabel_WOMaterialSheet = new sap.m.Label({
			id: 'Label_WOMaterialSheet',
			width: '100%',
			text: ' WO/Material Sheet'
		});
		var oCombo_WOMaterialSheet = new sap.m.Select({
			id: 'combo_WOMaterialSheet',
			placeholder: 'Select WO/Material Sheet ..',
			width: '100%',
			enabled: true,
			visible: true,
			change: function (oEvent) {}
		});
		var oVLayoutRowWOMaterialSheet = new sap.m.VBox({
			id: 'vLayoutRowWOMaterialSheet',
			width: '100%',
			items: [
				oLabel_WOMaterialSheet,
				oCombo_WOMaterialSheet
			]
		}).addStyleClass("sapUiSmallMarginEnd");

		var oLabel_LabelProcedures = new sap.m.Label({
			id: 'L_LabelProcedures',
			width: '100%',
			text: ' Label Procedures'
		});
		var oCombo_LabelProcedures = new sap.m.Select({
			id: 'combo_LabelProcedures',
			placeholder: 'Select Label Procedures ..',
			width: '100%',
			enabled: true,
			visible: true,
			change: function (oEvent) {}
		});
		var oVLayoutRowLabelProcedures = new sap.m.VBox({
			id: 'vLayoutRowLabelProcedures',
			width: '100%',
			items: [
				oLabel_LabelProcedures,
				oCombo_LabelProcedures
			]
		}).addStyleClass("sapUiSmallMarginEnd");

		var oLabel_MAVWeights = new sap.m.Label({
			id: 'L_MAVWeights',
			width: '100%',
			text: 'MAV Weights'
		});
		var oCombo_MAVWeights = new sap.m.Select({
			id: 'combo_MAVWeights',
			placeholder: 'Select MAV Weights ..',
			width: '100%',
			enabled: true,
			visible: true,
			change: function (oEvent) {}
		});

		var oVLayoutRowMAVWeights = new sap.m.VBox({
			id: 'vLayoutRowMAVWeights',
			width: '100%',
			items: [
				oLabel_MAVWeights,
				oCombo_MAVWeights
			]
		});

		var oHLayoutRow3LI = new sap.m.HBox({
			id: 'hLayoutRow3LI',
			alignContent: sap.m.FlexAlignContent.Center,
			alignItems: sap.m.FlexAlignItems.Center,
			justifyContent: sap.m.FlexJustifyContent.Center,
			width: '100%',
			items: [
				oVLayoutRowNutritional,
				oVLayoutRowWOMaterialSheet,
				oVLayoutRowLabelProcedures,
				oVLayoutRowMAVWeights
			]
		});

		//Row 4
		var oLabel_MetalDetector = new sap.m.Label({
			id: 'L_MetalDetector',
			width: '100%',
			text: 'Metal Detector'
		});
		var oCombo_MetalDetector = new sap.m.Select({
			id: 'combo_MetalDetector',
			placeholder: 'Select Metal Detector ..',
			width: '100%',
			enabled: true,
			visible: true,
			change: function (oEvent) {}
		});
		var oVLayoutRowMetalDetector = new sap.m.VBox({
			id: 'vLayoutMetalDetector',
			width: '100%',
			items: [
				oLabel_MetalDetector,
				oCombo_MetalDetector
			]
		}).addStyleClass("sapUiSmallMarginEnd");

		var oLabel_LabelScanTest = new sap.m.Label({
			id: 'Label_LabelScanTest',
			width: '100%',
			text: ' Label Scan Test'
		});
		var oCombo_LabelScanTest = new sap.m.Select({
			id: 'combo_LabelScanTest',
			placeholder: 'Select Label Scan Test ..',
			width: '100%',
			enabled: true,
			visible: true,
			change: function (oEvent) {}
		});
		var oVLayoutRowLabelScanTest = new sap.m.VBox({
			id: 'vLayoutRowLabelScanTest',
			width: '100%',
			items: [
				oLabel_LabelScanTest,
				oCombo_LabelScanTest
			]
		}).addStyleClass("sapUiSmallMarginEnd");

		var oLabel_LineClearance = new sap.m.Label({
			id: 'L_LineClearance',
			width: '100%',
			text: ' Line Clearance'
		});
		var oCombo_LineClearance = new sap.m.Select({
			id: 'combo_LineClearance',
			placeholder: 'Select Line Clearance ..',
			width: '100%',
			enabled: true,
			visible: true,
			change: function (oEvent) {}
		});
		var oVLayoutRowLineClearance = new sap.m.VBox({
			id: 'vLayoutRowLineClearance',
			width: '100%',
			items: [
				oLabel_LineClearance,
				oCombo_LineClearance
			]
		}).addStyleClass("sapUiSmallMarginEnd");

		var oLabel_QltyAuditSheet = new sap.m.Label({
			id: 'L_QltyAuditSheet',
			width: '100%',
			text: 'Qlty Audit Sheet'
		});
		var oCombo_QltyAuditSheet = new sap.m.Select({
			id: 'combo_QltyAuditSheet',
			placeholder: 'Select Qlty Audit Sheet ..',
			width: '100%',
			enabled: true,
			visible: true,
			change: function (oEvent) {}
		});
		var oVLayoutRowQltyAuditSheet = new sap.m.VBox({
			id: 'vLayoutRowQltyAuditSheet',
			width: '100%',
			items: [
				oLabel_QltyAuditSheet,
				oCombo_QltyAuditSheet
			]
		});

		var oHLayoutRow4LI = new sap.m.HBox({
			id: 'hLayoutRow4LI',
			alignContent: sap.m.FlexAlignContent.Center,
			alignItems: sap.m.FlexAlignItems.Center,
			justifyContent: sap.m.FlexJustifyContent.Center,
			width: '100%',
			items: [
				oVLayoutRowMetalDetector,
				oVLayoutRowLabelScanTest,
				oVLayoutRowLineClearance,
				oVLayoutRowQltyAuditSheet
			]
		});

		//Row 5
		var oLabel_WhiteBoard = new sap.m.Label({
			id: 'L_WhiteBoard',
			width: '100%',
			text: 'White Board/Tank/VAT SKU'
		});
		var oCombo_WhiteBoard = new sap.m.Select({
			id: 'combo_WhiteBoard',
			placeholder: 'Select White Board/Tank/VAT SKU ..',
			width: '100%',
			enabled: true,
			visible: true,
			change: function (oEvent) {}
		});
		var oVLayoutRowWhiteBoard = new sap.m.VBox({
			id: 'vLayoutRowWhiteBoard',
			width: '100%',
			items: [
				oLabel_WhiteBoard,
				oCombo_WhiteBoard
			]
		}).addStyleClass("sapUiSmallMarginEnd");

		var oLabel_AllergenProcFollowed = new sap.m.Label({
			id: 'Label_AllergenProcFollowed',
			width: '100%',
			text: ' Allergen Procedure Followed'
		});
		var oCombo_AllergenProcFollowed = new sap.m.Select({
			id: 'combo_AllergenProcFollowed',
			placeholder: 'Select Allergen Procedure Followed ..',
			width: '100%',
			enabled: true,
			visible: true,
			change: function (oEvent) {}
		});
		var oVLayoutRowAllergenProcFollowed = new sap.m.VBox({
			id: 'vLayoutRowAllergenProcFollowed',
			width: '100%',
			items: [
				oLabel_AllergenProcFollowed,
				oCombo_AllergenProcFollowed
			]
		}).addStyleClass("sapUiSmallMarginEnd");

		var oLabel_Sanitation = new sap.m.Label({
			id: 'L_Sanitation',
			width: '100%',
			text: ' Sanitation and Cross Contamination protocols'
		});
		var oCombo_Sanitation = new sap.m.Select({
			id: 'combo_Sanitation',
			placeholder: 'Select Sanitation and Cross Contamination protocols ..',
			width: '100%',
			enabled: true,
			visible: true,
			change: function (oEvent) {}
		});
		var oVLayoutRowSanitation = new sap.m.VBox({
			id: 'vLayoutRowSanitation',
			width: '100%',
			items: [
				oLabel_Sanitation,
				oCombo_Sanitation
			]
		}).addStyleClass("sapUiSmallMarginEnd");

		var oLabel_HourlyCheck = new sap.m.Label({
			id: 'L_HourlyCheck',
			width: '100%',
			text: 'Hourly Check'
		});
		var oCombo_HourlyCheck = new sap.m.Select({
			id: 'combo_HourlyCheck',
			placeholder: 'Select Hourly Check..',
			width: '100%',
			enabled: true,
			visible: true,
			change: function (oEvent) {}
		});
		var oVLayoutRowHourlyCheck = new sap.m.VBox({
			id: 'vLayoutRowHourlyCheck',
			width: '100%',
			items: [
				oLabel_HourlyCheck,
				oCombo_HourlyCheck
			]
		});

		var oHLayoutRow5LI = new sap.m.HBox({
			id: 'hLayoutRow5LI',
			alignContent: sap.m.FlexAlignContent.Center,
			alignItems: sap.m.FlexAlignItems.Center,
			justifyContent: sap.m.FlexJustifyContent.Center,
			width: '100%',
			items: [
				oVLayoutRowWhiteBoard,
				oVLayoutRowAllergenProcFollowed,
				oVLayoutRowSanitation,
				oVLayoutRowHourlyCheck
			]
		});

		// Row 6
		var oLabel_Enclosure = new sap.m.Label({
			id: 'L_Enclosure',
			width: '100%',
			text: 'Enclosure'
		});
		var oCombo_Enclosure = new sap.m.Select({
			id: 'combo_Enclosure',
			placeholder: 'Select Enclosure ..',
			width: '100%',
			enabled: true,
			visible: true,
			change: function (oEvent) {}
		});
		var oVLayoutEnclosure = new sap.m.VBox({
			id: 'vLayoutEnclosure',
			width: '100%',
			items: [
				oLabel_Enclosure,
				oCombo_Enclosure
			]
		}).addStyleClass("sapUiSmallMarginEnd");

		var oHLayoutRow6LI = new sap.m.HBox({
			id: 'hLayoutRow6LI',
			//alignContent: sap.m.FlexAlignContent.Center,
			alignItems: sap.m.FlexAlignItems.Center,
			//justifyContent: sap.m.FlexJustifyContent.End,
			width: '25%',
			items: [
				oVLayoutEnclosure
			]
		});

		var oLabel_LineDefects = new sap.m.Label({
			id: 'L_LineDefects',
			width: '100%',
			text: 'Line Defects'
		});
		var oInput_LineDefects = new sap.m.Input({
			id: 'input_LineDefects',
			type: 'Number',
			//placeholder: '0',
			width: '100%',
			layoutData: [new sap.m.FlexItemData({
				growFactor: 1
			})],
			visible: true
		});
		var oVLayouLineDefects = new sap.m.VBox({
			id: 'vLayoutLineDefects',
			width: '100%',
			items: [
				oLabel_LineDefects,
				oInput_LineDefects
			]
		});

		var oLabel_TotalPossible = new sap.m.Label({
			id: 'L_TotalPossible',
			width: '100%',
			text: 'Input Total Possible'
		});
		var oInput_TotalPossible = new sap.m.Input({
			id: 'input_TotalPossible',
			type: 'Number',
			//placeholder: '0',
			width: '100%',
			layoutData: [new sap.m.FlexItemData({
				growFactor: 1
			})],
			visible: true
		});
		var oVLayoutTotalPossible = new sap.m.VBox({
			id: 'vLayoutTotalPossible',
			width: '100%',
			items: [
				oLabel_TotalPossible,
				oInput_TotalPossible
			]
		});

		var oVLayoutRow7LI_1 = new sap.m.VBox({
			id: 'vLayoutRow7LI_1',
			alignContent: sap.m.FlexAlignContent.End,
			alignItems: sap.m.FlexAlignItems.End,
			justifyContent: sap.m.FlexJustifyContent.End,
			width: '33%',
			items: [
				//oVLayoutGiftBIUB,
				oVLayouLineDefects,
				oVLayoutTotalPossible
			]
		}).addStyleClass("sapUiSmallMarginEnd");

		var oLabel_LineDefectNotes = new sap.m.Label({
			id: 'L_LineDefectNotes',
			width: '100%',
			text: 'Line Defect Notes'
		});
		var oInput_LineDefectNotes = new sap.m.TextArea({
			id: 'input_LineDefectNotes',
			placeholder: 'Multi-line Notes ..',
			width: '100%',
			visible: true
		});
		var oVLayoutRow7LI_2 = new sap.m.VBox({
			id: 'vLayoutRow7LI_2',
			width: '100%',
			items: [
				oLabel_LineDefectNotes,
				oInput_LineDefectNotes
			]
		});

		var oHLayoutRow7LI = new sap.m.HBox({
			id: 'hLayoutRow7LI',
			width: '100%',
			items: [
				oVLayoutRow7LI_1,
				oVLayoutRow7LI_2
			]
		});

		var oFileUploader_LineInsp = new sap.ui.unified.FileUploader('picsForLineInspection', {
			placeholder: '',
			width: '100%',
			multiple: true,
			//uploadUrl: "/XMII/CM/NS/u.jsp?file_path=OQ__" + "ASSY__ "  + WorkOrderNo + "__LineInspPics__img_" + imagesGlobalCnt,
			uploadOnChange: true,
			buttonOnly: true,
			buttonText: "Add Pictures",
			style: "Emphasized",
			useMultipart: false,
			additionalData: "IQ",
			name: "IQ",
			sameFilenameAllowed: true,
			icon: "sap-icon://add-photo",
			iconFirst: false
		});
		//uploadComplete: (evt) => {

		///////////////////////////////////Image upload : End LineInspection//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

		var oHLayoutRow8LI_Image = new sap.m.HBox({
			id: 'hLayoutRow8LI_Image',
			//alignContent: sap.m.FlexAlignContent.Center,
			//alignItems: sap.m.FlexAlignItems.Center,
			justifyContent: sap.m.FlexJustifyContent.SpaceBetween,
			width: '100%',
			items: [

			]
		});
		var oVLayoutLine_Inspection_Parent = new sap.m.VBox({
			id: 'vLayoutLine_Inspection_Parent',
			width: '100%',
			items: [
				oHLayoutRow2LI,
				oHLayoutRow3LI,
				oHLayoutRow4LI,
				oHLayoutRow5LI,
				oHLayoutRow6LI,
				oHLayoutRow7LI,
				//oHLayoutRow8LI,
				oFileUploader_LineInsp,
				oHLayoutRow8LI_Image,

			]
		});
		var wizardstep3 = new sap.m.WizardStep(
			"WizardStep3", // string
			{
				id: "ProductTypeStep3", // sap.ui.core.ID
				title: "Line Inspection", // string
				validated: true, // boolean,
				content: [oVLayoutLine_Inspection_Parent]
			}
		);
		// WizardStep 4

		//Row 2_4
		var oLabel_SampleWeightUnit = new sap.m.Label({
			id: 'L_SampleWeightUnit',
			width: '100%',
			text: 'Sample Weight Unit'
		}).addStyleClass("sapUiSmallMarginEnd");

		var oCombo_SampleWeightUnit = new sap.m.Select({
			id: 'combo_SampleWeightUnit',
			placeholder: 'Select Sample Weight ..',
			layoutData: [new sap.m.FlexItemData({
				growFactor: 1
			})],
			width: '100%',
			enabled: true,
			visible: true,
			change: function (oEvent) {

			}
		}).addStyleClass("sapUiSmallMarginEnd");

		oCombo_SampleWeightUnit.addItem(new sap.ui.core.Item({
			key: "Grams",
			text: "ounce"
		}));
		oCombo_SampleWeightUnit.addItem(new sap.ui.core.Item({
			key: "Pounds",
			text: "Pounds"
		}));

		var oHLayoutRow2PI_4 = new sap.m.HBox({
			id: 'hLayoutRow2PI_4',
			//alignContent: sap.m.FlexAlignContent.Center,
			alignItems: sap.m.FlexAlignItems.Center,
			//justifyContent: sap.m.FlexJustifyContent.End,
			width: '100%',
			items: [
				oLabel_SampleWeightUnit,
				oCombo_SampleWeightUnit
			]
		});

		//Row 2_1
		var oLabel_NetWeight = new sap.m.Label({
			id: 'L_NetWeight',
			width: '100%',
			text: 'Net Weight'
		});
		var oLabel_NetWeightUnit = new sap.m.Label({
			id: 'L_NetWeightUnit',
			width: '100%',
			text: 'In Ounce'
		});

		var oHLayoutRowNetWeightLabels = new sap.m.HBox({
			id: 'LayoutRowNetWeightLabels',
			width: '100%',
			height: '100%',
			items: [
				oLabel_NetWeight,
				oLabel_NetWeightUnit
			]
		});

		var oInput_NetWeight = new sap.m.Input({
			id: 'input_NetWeight',
			type: 'Number',
			placeholder: 'Enter Net Weight ..',
			width: '100%',
			layoutData: [new sap.m.FlexItemData({
				growFactor: 1
			})],
			visible: true,
			liveChange: function () {
				//	getMAVWeights();
			}
		});

		var oVLayoutNetWeight = new sap.m.VBox({
			id: 'vLayoutNetWeight',
			width: '100%',
			items: [
				oHLayoutRowNetWeightLabels,
				oInput_NetWeight
			]
		}).addStyleClass("sapUiSmallMarginEnd");

		var oLabel_ProductDefects = new sap.m.Label({
			id: 'L_ProductDefects',
			width: '100%',
			text: 'Product Defects'
		});
		var oInput_ProductDefects = new sap.m.Input({
			id: 'input_ProductDefects',
			type: 'Number',
			placeholder: 'Enter Product Defects ..',
			width: '100%',
			layoutData: [new sap.m.FlexItemData({
				growFactor: 1
			})],
			visible: true
		});

		var oVLayoutProductDefects = new sap.m.VBox({
			id: 'vLayoutProductDefects',
			width: '100%',
			items: [
				oLabel_ProductDefects,
				oInput_ProductDefects
			]
		});

		var oHLayoutRow2PI_1 = new sap.m.HBox({
			id: 'hLayoutRow2PI_1',
			//alignContent: sap.m.FlexAlignContent.Center,
			alignItems: sap.m.FlexAlignItems.Center,
			//justifyContent: sap.m.FlexJustifyContent.End,
			width: '100%',
			items: [
				oVLayoutNetWeight,
				oVLayoutProductDefects
			]
		});

		//Row 2_2
		var oLabel_MAVWeight = new sap.m.Label({
			id: 'L_MAVWeight',
			width: '100%',
			text: 'MAV Weight'
		});
		var oLabel_MAVWeightUnit = new sap.m.Label({
			id: 'L_MAVWeightUnit',
			width: '100%',
			text: 'In Ounce'
		});

		var oHLayoutRowMAVWeightLabels = new sap.m.HBox({
			id: 'LayoutRowMAVWeightLabels',
			width: '100%',
			height: '100%',
			items: [
				oLabel_MAVWeight,
				oLabel_MAVWeightUnit
			]
		});
		var oInput_MAVWeight = new sap.m.Input({
			id: 'input_MAVWeight',
			type: 'Number',
			//placeholder: 'Enter MAV Weight ..',
			width: '100%',
			layoutData: [new sap.m.FlexItemData({
				growFactor: 1
			})],
			visible: true,
			enabled: false
		});

		var oVLayoutMAVWeight = new sap.m.VBox({
			id: 'vLayoutMAVWeight',
			width: '100%',
			items: [
				oHLayoutRowMAVWeightLabels,
				oInput_MAVWeight
			]
		}).addStyleClass("sapUiSmallMarginEnd");

		var oLabel_TotalPossible_PI = new sap.m.Label({
			id: 'L_TotalPossible_PI',
			width: '100%',
			text: 'Total Possible'
		});
		var oInput_TotalPossible_PI = new sap.m.Input({
			id: 'input_TotalPossible_PI',
			type: 'Number',
			placeholder: 'Enter Total Possible ..',
			width: '100%',
			layoutData: [new sap.m.FlexItemData({
				growFactor: 1
			})],
			visible: true
		});

		var oVLayoutTotalPossible_PI = new sap.m.VBox({
			id: 'vLayoutTotalPossible_PI',
			width: '100%',
			items: [
				oLabel_TotalPossible_PI,
				oInput_TotalPossible_PI
			]
		});

		var oHLayoutRow2PI_2 = new sap.m.HBox({
			id: 'hLayoutRow2PI_2',
			//alignContent: sap.m.FlexAlignContent.Center,
			alignItems: sap.m.FlexAlignItems.Center,
			//justifyContent: sap.m.FlexJustifyContent.End,
			width: '100%',
			items: [
				oVLayoutMAVWeight,
				oVLayoutTotalPossible_PI
			]
		});

		//Row 2_3
		var oLabel_ProductDefectComments = new sap.m.Label({
			id: 'L_ProductDefectComments',
			width: '100%',
			text: 'Product Defect Comments'
		});
		var oInput_ProductDefectComments = new sap.m.TextArea({
			id: 'input_ProductDefectComments',
			placeholder: 'Multi-line Notes ..',
			width: '100%',
			height: '142px',
			visible: true
		});

		var oVLayoutRow2PI_3 = new sap.m.VBox({
			id: 'vLayoutRow2PI_3',
			width: '100%',
			items: [
				oLabel_ProductDefectComments,
				oInput_ProductDefectComments
			]
		});

		var oHLayoutRow2PI_3 = new sap.m.HBox({
			id: 'hLayoutRow2PI_3',
			//alignContent: sap.m.FlexAlignContent.Center,
			alignItems: sap.m.FlexAlignItems.Center,
			//justifyContent: sap.m.FlexJustifyContent.End,
			width: '100%',
			items: [
				oVLayoutRow2PI_3
			]
		});

		var oVLayoutRow2PI_1 = new sap.m.VBox({
			id: 'vLayoutRow2PI_1',
			width: '100%',
			items: [
				oHLayoutRow2PI_4,
				oHLayoutRow2PI_1,
				oHLayoutRow2PI_2,
				oHLayoutRow2PI_3
			]
		}).addStyleClass("sapUiSmallMarginEnd");

		//Row 2_5
		var oInput_SampleWeights1 = new sap.m.Input({
			id: 'input_SampleWeights1',
			type: 'Number',
			width: '100%',
			layoutData: new sap.ui.layout.GridData({
				span: "L3 M3 S3"
			}),
			visible: true,
			liveChange: function () {
				//	ValidateSampleWeights();
				//	FindsAndValidateAVGWeights();
			}
		});
		var oInput_SampleWeights2 = new sap.m.Input({
			id: 'input_SampleWeights2',
			type: 'Number',
			width: '100%',
			layoutData: new sap.ui.layout.GridData({
				span: "L3 M3 S3"
			}),
			visible: true,
			liveChange: function () {
				//	ValidateSampleWeights();
				//	FindsAndValidateAVGWeights();
			}
		});
		var oInput_SampleWeights3 = new sap.m.Input({
			id: 'input_SampleWeights3',
			type: 'Number',
			width: '100%',
			layoutData: new sap.ui.layout.GridData({
				span: "L3 M3 S3"
			}),
			visible: true,
			liveChange: function () {
				//ValidateSampleWeights();
				//	FindsAndValidateAVGWeights();
			}

		});
		var oInput_SampleWeights4 = new sap.m.Input({
			id: 'input_SampleWeights4',
			type: 'Number',
			width: '100%',
			layoutData: new sap.ui.layout.GridData({
				span: "L3 M3 S3"
			}),
			visible: true,
			liveChange: function () {
				//	ValidateSampleWeights();
				//	FindsAndValidateAVGWeights();
			}

		});

		//Row 2_6
		var oInput_SampleWeights5 = new sap.m.Input({
			id: 'input_SampleWeights5',
			type: 'Number',
			width: '100%',
			layoutData: new sap.ui.layout.GridData({
				span: "L3 M3 S3"
			}),
			visible: true,
			liveChange: function () {
				//ValidateSampleWeights(); FindsAndValidateAVGWeights();
			}
		});
		var oInput_SampleWeights6 = new sap.m.Input({
			id: 'input_SampleWeights6',
			type: 'Number',
			width: '100%',
			layoutData: new sap.ui.layout.GridData({
				span: "L3 M3 S3"
			}),
			visible: true,
			liveChange: function () {
				//ValidateSampleWeights(); FindsAndValidateAVGWeights();
			}
		});
		var oInput_SampleWeights7 = new sap.m.Input({
			id: 'input_SampleWeights7',
			type: 'Number',
			width: '100%',
			layoutData: new sap.ui.layout.GridData({
				span: "L3 M3 S3"
			}),
			visible: true,
			liveChange: function () {
				//ValidateSampleWeights(); FindsAndValidateAVGWeights();
			}
		});

		var oInput_SampleWeights8 = new sap.m.Input({
			id: 'input_SampleWeights8',
			type: 'Number',
			width: '100%',
			layoutData: new sap.ui.layout.GridData({
				span: "L3 M3 S3"
			}),
			visible: true,
			liveChange: function () {
				//ValidateSampleWeights(); FindsAndValidateAVGWeights();
			}
		});

		//Row 2_7
		var oInput_SampleWeights9 = new sap.m.Input({
			id: 'input_SampleWeights9',
			type: 'Number',
			width: '100%',
			layoutData: new sap.ui.layout.GridData({
				span: "L3 M3 S3"
			}),
			visible: true,
			liveChange: function () {
				//ValidateSampleWeights(); FindsAndValidateAVGWeights();
			}
		});
		var oInput_SampleWeights10 = new sap.m.Input({
			id: 'input_SampleWeights10',
			type: 'Number',
			width: '100%',
			layoutData: new sap.ui.layout.GridData({
				span: "L3 M3 S3"
			}),
			visible: true,
			liveChange: function () {
				//ValidateSampleWeights(); FindsAndValidateAVGWeights();
			}
		});
		var oInput_SampleWeights11 = new sap.m.Input({
			id: 'input_SampleWeights11',
			type: 'Number',
			width: '100%',
			layoutData: new sap.ui.layout.GridData({
				span: "L3 M3 S3"
			}),
			visible: true,
			liveChange: function () {
				//ValidateSampleWeights(); FindsAndValidateAVGWeights();
			}
		});
		var oInput_SampleWeights12 = new sap.m.Input({
			id: 'input_SampleWeights12',
			type: 'Number',
			width: '100%',
			layoutData: new sap.ui.layout.GridData({
				span: "L3 M3 S3"
			}),
			visible: true,
			liveChange: function () {
				//ValidateSampleWeights(); FindsAndValidateAVGWeights();
			}
		});

		//Row 2_8
		var oInput_SampleWeights13 = new sap.m.Input({
			id: 'input_SampleWeights13',
			width: '100%',
			type: 'Number',
			layoutData: new sap.ui.layout.GridData({
				span: "L3 M3 S3"
			}),
			visible: true,
			liveChange: function () {
				//ValidateSampleWeights(); FindsAndValidateAVGWeights();
			}
		});
		var oInput_SampleWeights14 = new sap.m.Input({
			id: 'input_SampleWeights14',
			type: 'Number',
			width: '100%',
			layoutData: new sap.ui.layout.GridData({
				span: "L3 M3 S3"
			}),
			visible: true,
			liveChange: function () {
				//ValidateSampleWeights(); FindsAndValidateAVGWeights();
			}
		});
		var oInput_SampleWeights15 = new sap.m.Input({
			id: 'input_SampleWeights15',
			type: 'Number',
			width: '100%',
			layoutData: new sap.ui.layout.GridData({
				span: "L3 M3 S3"
			}),
			visible: true,
			liveChange: function () {
				//ValidateSampleWeights(); FindsAndValidateAVGWeights();
			}
		});
		var oInput_SampleWeights16 = new sap.m.Input({
			id: 'input_SampleWeights16',
			type: 'Number',
			width: '100%',
			layoutData: new sap.ui.layout.GridData({
				span: "L3 M3 S3"
			}),
			visible: true,
			liveChange: function () {
				//ValidateSampleWeights(); FindsAndValidateAVGWeights();
			}
		});

		//Row 2_9
		var oInput_SampleWeights17 = new sap.m.Input({
			id: 'input_SampleWeights17',
			type: 'Number',
			width: '100%',
			layoutData: new sap.ui.layout.GridData({
				span: "L3 M3 S3"
			}),
			visible: true,
			liveChange: function () {
				//ValidateSampleWeights(); FindsAndValidateAVGWeights();
			}
		});
		var oInput_SampleWeights18 = new sap.m.Input({
			id: 'input_SampleWeights18',
			type: 'Number',
			width: '100%',
			layoutData: new sap.ui.layout.GridData({
				span: "L3 M3 S3"
			}),
			visible: true,
			liveChange: function () {
				//ValidateSampleWeights(); FindsAndValidateAVGWeights();
			}
		});
		var oInput_SampleWeights19 = new sap.m.Input({
			id: 'input_SampleWeights19',
			type: 'Number',
			width: '100%',
			layoutData: new sap.ui.layout.GridData({
				span: "L3 M3 S3"
			}),
			visible: true,
			liveChange: function () {
				//ValidateSampleWeights(); FindsAndValidateAVGWeights();
			}
		});
		var oInput_SampleWeights20 = new sap.m.Input({
			id: 'input_SampleWeights20',
			type: 'Number',
			width: '100%',
			layoutData: new sap.ui.layout.GridData({
				span: "L3 M3 S3"
			}),
			visible: true,
			liveChange: function () {
				//ValidateSampleWeights(); FindsAndValidateAVGWeights();
			}
		});

		var oGridFormSampleWeights = new sap.ui.layout.Grid({
			width: '100%',
			hSpacing: 1,
			vSpacing: 1,
			position: 'Left',
			content: [
				oInput_SampleWeights1,
				oInput_SampleWeights2,
				oInput_SampleWeights3,
				oInput_SampleWeights4,
				oInput_SampleWeights5,
				oInput_SampleWeights6,
				oInput_SampleWeights7,
				oInput_SampleWeights8,
				oInput_SampleWeights9,
				oInput_SampleWeights10,
				oInput_SampleWeights11,
				oInput_SampleWeights12,
				oInput_SampleWeights13,
				oInput_SampleWeights14,
				oInput_SampleWeights15,
				oInput_SampleWeights16,
				oInput_SampleWeights17,
				oInput_SampleWeights18,
				oInput_SampleWeights19,
				oInput_SampleWeights20,
			]
		});

		//Row 2_10
		var oLabel_Avg = new sap.m.Label({
			id: 'L_Avg',
			width: '100%',
			text: 'Avg'
		}).addStyleClass("sapUiSmallMarginBeginEnd");

		var oInput_Avg = new sap.m.Input({
			id: 'input_Avg',
			type: 'Number',
			width: '100%',
			layoutData: [new sap.m.FlexItemData({
				growFactor: 1
			})],
			visible: true,
			enabled: false
		});

		var oHLayoutRow2PI_10 = new sap.m.HBox({
			id: 'hLayoutRow2PI_10',
			//alignContent: sap.m.FlexAlignContent.Center,
			alignItems: sap.m.FlexAlignItems.Center,
			//justifyContent: sap.m.FlexJustifyContent.End,
			width: '100%',
			items: [
				oLabel_Avg,
				oInput_Avg
			]
		});

		var oVLayoutRow2PI_2 = new sap.m.VBox({
			id: 'vLayoutRow2PI_2',
			width: '100%',
			items: [
				//oHLayoutRow2PI_4,
				oGridFormSampleWeights,
				oHLayoutRow2PI_10
			]
		});

		var oHLayoutRow2PI = new sap.m.HBox({
			id: 'hLayoutRow2PI',
			width: '100%',
			items: [
				oVLayoutRow2PI_1,
				oVLayoutRow2PI_2
			]
		});

		///////////////////////////////////////////////Image upload : Start ProductInsp////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

		var oFileUploader_ProductInsp = new sap.ui.unified.FileUploader('picsForProductInspection', {
			placeholder: '',
			width: '100%',
			layoutData: [new sap.m.FlexItemData({
				growFactor: 1
			})],
			multiple: true,
			//uploadUrl: "/XMII/CM/NS/u.jsp?file_path=OQ__" + "ASSY__ "  + WorkOrderNo + "__LineInspPics__img_" + imagesGlobalCnt,
			uploadOnChange: true,
			buttonOnly: true,
			buttonText: "Add Pictures",
			style: "Emphasized",
			useMultipart: false,
			additionalData: "IQ",
			name: "IQ",
			sameFilenameAllowed: true,
			icon: "sap-icon://add-photo",
			iconFirst: false,
			//uploadComplete: (evt) => {
			uploadComplete: function (evt) {

			}
		});

		///////////////////////////////////Image upload : End ProductInsp//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

		var oHLayoutRow3PI = new sap.m.HBox({
			id: 'hLayoutRow3PI',
			//alignContent: sap.m.FlexAlignContent.Center,
			//alignItems: sap.m.FlexAlignItems.Center,
			justifyContent: sap.m.FlexJustifyContent.Stretch,
			width: '100%',
			items: [
				//oButtonAddPicturesProductInspection
				oFileUploader_ProductInsp
			]
		});

		var oHLayoutRow3PI_Image = new sap.m.HBox({
			id: 'hLayoutRow3PI_Image',
			//alignContent: sap.m.FlexAlignContent.Center,
			//alignItems: sap.m.FlexAlignItems.Center,
			//justifyContent: sap.m.FlexJustifyContent.SpaceBetween,
			width: '100%',
			items: [

			]
		});

		var oVLayoutProduct_Inspection_Parent = new sap.m.VBox({
			id: 'vLayoutProduct_Inspection_Parent',
			alignContent: sap.m.FlexAlignContent.End,
			alignItems: sap.m.FlexAlignItems.End,
			justifyContent: sap.m.FlexJustifyContent.End,
			width: '100%',
			items: [
				oHLayoutRow2PI,
				oHLayoutRow3PI,
				//oFileUploader_ProductInsp,
				oHLayoutRow3PI_Image

			]
		});

		var wizardstep4 = new sap.m.WizardStep(
			"WizardStep4", // string
			{
				id: "ProductTypeStep4", // sap.ui.core.ID
				title: "Product Inspection", // string
				validated: true, // boolean,
				content: [oVLayoutProduct_Inspection_Parent]
			}
		);

		//	WizardStep 5

		var oLabel_UnResolvedComments = new sap.m.Label({
			id: 'L_UnResolvedComments',
			width: '100%',
			text: 'Un-Resolved Comments'
		});
		var oInput_UnResolvedComments = new sap.m.TextArea({
			id: 'input_UnResolvedComments',
			placeholder: 'Enter Un-Resolved Comments ..',
			width: '100%',
			visible: true
		});

		var oLabel_HUReference = new sap.m.Label({
			id: 'L_HUReference',
			width: '100%',
			text: 'HU Reference'
		}).addStyleClass("sapUiSmallMarginEnd");
		var oInput_HUReference = new sap.m.Input({
			id: 'input_HUReference',
			placeholder: 'Enter HU Reference ..',
			width: '100%',
			layoutData: [new sap.m.FlexItemData({
				growFactor: 1
			})],
			visible: true
		});
		var oHLayoutRow1A = new sap.m.HBox({
			id: 'hLayoutRow1A',
			//alignContent: sap.m.FlexAlignContent.Center,
			alignItems: sap.m.FlexAlignItems.Center,
			//justifyContent: sap.m.FlexJustifyContent.End,
			width: '100%',
			items: [
				oLabel_HUReference,
				oInput_HUReference
			]
		});

		var oVLayoutRow1A = new sap.m.VBox({
			id: 'vLayoutRow1A',
			width: '100%',
			items: [
				oLabel_UnResolvedComments,
				oInput_UnResolvedComments,
				oHLayoutRow1A
			]
		}).addStyleClass("sapUiSmallMarginEnd");

		var oLabel_ResolvedComments = new sap.m.Label({
			id: 'L_ResolvedComments',
			width: '100%',
			text: 'Resolved Comments'
		});
		var oInput_ResolvedComments = new sap.m.TextArea({
			id: 'input_ResolvedComments',
			placeholder: 'Enter Resolved Comments ..',
			width: '100%',
			visible: true
		});

		var oRbg_Status = new sap.m.RadioButtonGroup({
			id: 'rbg_Status',
			width: '100%',
			visible: true,
			columns: 3,
			buttons: [
				new sap.m.RadioButton({
					id: 'rb_StatusResolved',
					text: 'Resolved',
					select: function () {}
				}),
				new sap.m.RadioButton({
					id: 'rb_StatusUnresolved',
					text: 'Unresolved',
					//selected: true,
					select: function () {}
				}),
				new sap.m.RadioButton({
					id: 'rb_StatusNoIssues',
					text: 'NoIssue',
					select: function () {}
				})
			]
		});

		// Row 3
		var oHLayoutRow2A = new sap.m.HBox({
			id: 'hLayoutRow2A',
			//alignContent: sap.m.FlexAlignContent.Center,
			//alignItems: sap.m.FlexAlignItems.Center,
			justifyContent: sap.m.FlexJustifyContent.Stretch,
			width: '100%',
			items: [
				oRbg_Status
			]
		});

		var oVLayoutRow2A = new sap.m.VBox({
			id: 'vLayoutRow2A',
			width: '100%',
			items: [
				oLabel_ResolvedComments,
				oInput_ResolvedComments,
				oRbg_Status,
				oHLayoutRow2A
			]
		});

		var oHLayoutRow3A = new sap.m.HBox({
			id: 'hLayoutRow3A',
			//alignContent: sap.m.FlexAlignContent.Center,
			//alignItems: sap.m.FlexAlignItems.Center,
			//justifyContent: sap.m.FlexJustifyContent.Stretch,
			width: '100%',
			items: [
				oVLayoutRow1A,
				oVLayoutRow2A
			]
		});

		var oLabel_DshComments = new sap.m.Label({
			id: 'L_DshComments',
			width: '100%',
			text: 'Comments'
		});
		var oInput_DshComments = new sap.m.TextArea({
			id: 'input_DshComments',
			placeholder: 'Enter Comments ..',
			width: '100%',
			visible: true
		});

		var oVLayoutComments = new sap.m.VBox({
			id: 'vLayoutComments',
			width: '100%',
			visible: true,
			items: [
				oLabel_DshComments,
				oInput_DshComments
			]
		});

		var oVLayoutAdmin_Inspection_Parent = new sap.m.VBox({
			id: 'vLayoutAdmin_Inspection_Parent',
			//alignContent: sap.m.FlexAlignContent.End,
			//alignItems: sap.m.FlexAlignItems.End,
			//justifyContent: sap.m.FlexJustifyContent.End,
			width: '100%',
			items: [
				oHLayoutRow3A,
				oVLayoutComments
			]
		});

		var wizardstep5 = new sap.m.WizardStep(
			"WizardStep5", // string
			{
				id: "ProductTypeStep5", // sap.ui.core.ID
				title: "Admin Area", // string
				validated: true, // boolean,
				content: [oVLayoutAdmin_Inspection_Parent]
			}
		);

		var wizard = new sap.m.Wizard(
			"CreateProductWizard", {
				complete: [oController.onSubmit, oController],
				steps: [wizardstep1, wizardstep2, wizardstep3, wizardstep4, wizardstep5]
			}
		);


		var oBar = new sap.m.Bar({
			id: 'barMain',
			contentLeft: [new sap.m.Button({
					id: 'B-logOutP1',
					type: sap.m.ButtonType.Transparent, //sap.m.ButtonType.Back,
					icon: "sap-icon://log",
					enabled: true,
					press: function () {}
				}),
				new sap.m.Label({
					id: 'L_User',
					width: '100%',
					text: 'Riddhi Trivedi'
				}).addStyleClass("ClassForLabelUserName")
			],
			contentMiddle: [new sap.m.Label({
				id: 'L_AppName',
				fontSize: "100px",
				width: '100%',
				text: 'Manufacturing Quality Control Inspection'
			}).addStyleClass("ClassForLabel")],
			contentRight: [new sap.m.Image({
				id: 'companyLogo',
				src: "Images/newlogo_dark.png",
				width: "200px",
				press: function () {}
			})]
		}).addStyleClass("BackgroundForBar");

		var oPage = new sap.m.Page({
			id: "page",
			showHeard: false,
			content: [wizard]
		});

		var NavCon = new sap.m.NavContainer(
			"myContainer", // string
			{
				pages: [oPage] // sap.ui.core.Control[]
					//	initialPage: "oPage" // (sap.ui.core.Control|string)

			}
		).addStyleClass("ContainerCSS");

		//	var app = new sap.m.App(this.createId("app"), {
		//			initialPage: "oPage"
		//		});
		oPage.setCustomHeader(oBar);
		//app.addPage(oPage);
		return NavCon;

	}
});