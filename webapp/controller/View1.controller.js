sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/ui/model/json/JSONModel",
	"sap/m/MessageToast",
	"sap/m/MessageBox",
	"sap/ui/core/Fragment"
], function (Controller, JSONModel, MessageToast, MessageBox, Fragment) {
	"use strict";

	return Controller.extend("WizardApplication.WizardApplication.controller.View1", {
		onInit: function () {

			

			Fragment.load({
				name: "WizardApplication.WizardApplication.view.Fragment",
				controller: this,
				type: "JS"
			}).then(function (oWizardReviewPage) {
				var Container = sap.ui.getCore().byId("myContainer");
				var ReveiwPage = sap.ui.getCore().byId("wizardReviewPage");
				Container.addPage(ReveiwPage);
			}.bind(this));
		},

		onSubmit: function () {
			var Container = sap.ui.getCore().byId("myContainer");
			var ReveiwPage = sap.ui.getCore().byId("wizardReviewPage");
			Container.to(ReveiwPage);

		},
		BackToWizard: function () {
			//First we will go from wizardreviewpage to mainpage which is wizards 
			//For that we will use container to come to main wizard
			var Container = sap.ui.getCore().byId("myContainer");
			var pageMian = sap.ui.getCore().byId("page");
			Container.to(pageMian);
			this.handleNavigationToStep(1);
		},
		editStepOne: function () {
			//First we will go from wizardreviewpage to mainpage which is wizards 
			//For that we will use container to come to main wizard
			var Container = sap.ui.getCore().byId("myContainer");
			var pageMian = sap.ui.getCore().byId("page");
			Container.to(pageMian);
			this.handleNavigationToStep(2);

		},
		editStepTwo: function () {
			//First we will go from wizardreviewpage to mainpage which is wizards 
			//For that we will use container to come to main wizard
			var Container = sap.ui.getCore().byId("myContainer");
			var pageMian = sap.ui.getCore().byId("page");
			Container.to(pageMian);
			this.handleNavigationToStep(3);

		},
		editStepThree: function () {
			//First we will go from wizardreviewpage to mainpage which is wizards 
			//For that we will use container to come to main wizard
			var Container = sap.ui.getCore().byId("myContainer");
			var pageMian = sap.ui.getCore().byId("page");
			Container.to(pageMian);
			this.handleNavigationToStep(4);
		},
		editStepFour: function () {
			//First we will go from wizardreviewpage to mainpage which is wizards 
			//For that we will use container to come to main wizard
			var Container = sap.ui.getCore().byId("myContainer");
			var pageMian = sap.ui.getCore().byId("page");
			Container.to(pageMian);
			this.handleNavigationToStep(5);
		},

		handleNavigationToStep: function (iStepNumber) {
			var Wizard = sap.ui.getCore().byId("CreateProductWizard");
			var WizardStepToGo = sap.ui.getCore().byId("WizardStep" + iStepNumber);
			Wizard.goToStep(WizardStepToGo); // wizard to wizard1

		},
		handleMessageBoxOpen : function(sMessage, sMessageBoxType){
				MessageBox[sMessageBoxType](sMessage, {
				actions: [MessageBox.Action.YES, MessageBox.Action.NO],
				onClose: function (oAction) {
					if (oAction === MessageBox.Action.YES) {
					this.BackToWizard();
					}
				}.bind(this)
			});
		},
		handleWizardCancel : function(){
			this.handleMessageBoxOpen("Are you sure you want to cancel your report?",  "warning");
		},
		handleWizardSubmit : function(){
			this.handleMessageBoxOpen("Are you sure you want to submit your report?", "confirm");
		}
	});
});