sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/json/JSONModel",
    "sap/ui/model/Filter",
    "sap/ui/model/FilterOperator"
], function (Controller, JSONModel, Filter, FilterOperator) {
    "use strict";

    return Controller.extend("naruto.github.controller.View1", {

        onInit: function () {
            var oModel = new JSONModel();
            oModel.loadData("../model/data.json");
            this.getView().setModel(oModel);
        },

        onItemPress: function (oEvent) {

            var oItem = oEvent.getParameter("listItem");
            var oContext = oItem.getBindingContext();

            var oDetailPage = this.byId("detailPage");
            oDetailPage.bindElement(oContext.getPath());

            this.byId("SplitApp").toDetail(oDetailPage);
        },

        // 🔍 Search Function
        onSearch: function (oEvent) {

            var sQuery = oEvent.getParameter("newValue");
            var oList = this.byId("orderList");
            var oBinding = oList.getBinding("items");

            if (!sQuery) {
                oBinding.filter([]);
                return;
            }

            var aFilters = [
                new Filter("OrderID", FilterOperator.Contains, sQuery),
                new Filter("CustomerName", FilterOperator.Contains, sQuery)
            ];

            oBinding.filter(new Filter({
                filters: aFilters,
                and: false   // OR condition
            }));
        }

    });
});