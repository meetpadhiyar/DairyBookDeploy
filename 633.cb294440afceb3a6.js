(self.webpackChunkLog=self.webpackChunkLog||[]).push([[633],{8633:(J,I,r)=>{"use strict";r.r(I),r.d(I,{RateTypeModule:()=>We});var y=r(6895),v=r(9299),m=r(4006),M=r(2673),F=r(8242),R=r(4859),T=r(811),S=r(3546),b=r(6709),s=r(7331),c=r(3238),f=r(9602),p=r(5938),_=r(4850),U=r(7084),x=r(9549),k=r(782),Z=r(7392),A=r(4144),w=r(6338),D=r(8739),H=r(3162),K=r(1572),P=r(7009),j=r(6308),W=r(6257),h=r(671),z=r(3848),q=r(266),X=r(1366),B=r(4385),N=r(5861),e=r(4650),V=r(338),ee=r(8112),L=r(529),E=r(3724);const G={headers:new L.WM({"Content-Type":"application/json"})};let te=(()=>{class n{constructor(t,o){this.http=t,this.constant=o}getRateMappingDropDown(t){var o=this;return(0,N.Z)(function*(){const a=o.constant.getRateMappingDropDown();try{const l=yield o.http.post(a,t,G).toPromise();return Promise.resolve(l)}catch(l){return Promise.reject(l)}})()}insertRateMapping(t){var o=this;return(0,N.Z)(function*(){const a=o.constant.insertRateMapping();try{const l=yield o.http.post(a,t,G).toPromise();return Promise.resolve(l)}catch(l){return Promise.reject(l)}})()}}return n.\u0275fac=function(t){return new(t||n)(e.LFG(L.eN),e.LFG(E.s))},n.\u0275prov=e.Yz7({token:n,factory:n.\u0275fac,providedIn:"root"}),n})();function ne(n,i){if(1&n&&(e.TgZ(0,"mat-option",23),e._uU(1),e.qZA()),2&n){const t=i.$implicit;e.Q6J("value",t.centerId),e.xp6(1),e.hij(" ",t.center," ")}}function oe(n,i){if(1&n&&(e.TgZ(0,"mat-option",23),e._uU(1),e.qZA()),2&n){const t=i.$implicit;e.Q6J("value",t.routeId),e.xp6(1),e.hij(" ",t.route," ")}}function ae(n,i){if(1&n&&(e.TgZ(0,"mat-option",23),e._uU(1),e.qZA()),2&n){const t=i.$implicit;e.Q6J("value",t.societyId),e.xp6(1),e.hij(" ",t.society," ")}}const ie={parse:{dateInput:"DD/MM/YYYY"},display:{dateInput:"DD/MM/YYYY",monthYearLabel:"MMMM YYYY",dateA11yLabel:"LL",monthYearA11yLabel:"MMMM YYYY"}};let re=(()=>{class n{constructor(t,o,a,l,g,u){this.fb=t,this.dialogRef=o,this.rateMappingServices=a,this.constant=l,this.datePipe=g,this.snackBar=u,this.rateObj1={},this.objRateMapping={},this.formTitle="Rate Mapping",this.societyList=[],this.societyList_Filter=[],this.RouteList=[],this.RouteList_Filter=[],this.centerList=[],this.centerList_Filter=[],this.companyId=0,this.userId=0,this.rateTypeId=0,this.rateId=0,this.companyId=Number(this.constant.getData("CompanyId")),this.userId=Number(this.constant.getData("userId")),this.formRateMapping=this.fb.group({center:["0",m.kI.required],route:["0",m.kI.required],society:["0",m.kI.required],effectiveDate:[new Date,m.kI.required],effectiveShift:["M",m.kI.required]}),this.formRateMapping.get("center")?.valueChanges.subscribe(d=>{const C=this.formRateMapping?.controls.center?.value;this.societyList_Filter=this.societyList.filter(O=>O.centerId==C)})}ngOnInit(){this.rateId=this.rateObj1.rateCode,this.rateTypeId=this.rateObj1.rateTypeId,this.getRateMappingDropDown()}getRateMappingDropDown(){var t=this;return(0,N.Z)(function*(){try{t.objRateMapping.companyCode=t.companyId;var o=yield t.rateMappingServices.getRateMappingDropDown(t.objRateMapping);t.societyList=o.data.society,t.societyList_Filter=t.societyList,t.centerList=o.data.center,t.centerList_Filter=t.centerList,t.RouteList=o.data.route,t.RouteList_Filter=t.RouteList,console.log(o)}catch{t.snackBar.open("Oops Something went wrong!!","close",{duration:2e3,panelClass:["error-snack-bar"],verticalPosition:"top"})}})()}insertRateMapping(){var t=this;return(0,N.Z)(function*(){try{t.objRateMapping.centerCode=t.formRateMapping.controls.center.value,t.objRateMapping.companyCode=t.companyId,t.objRateMapping.effectiveDate=t.formRateMapping.controls.effectiveDate.value,t.objRateMapping.effectiveShift=t.formRateMapping.controls.effectiveShift.value,t.objRateMapping.userId=t.userId,t.objRateMapping.rateCode=t.rateId,t.objRateMapping.rateTypeId=t.rateTypeId,t.objRateMapping.societyId=t.formRateMapping.controls.society.value;var o=yield t.rateMappingServices.insertRateMapping(t.objRateMapping);!0===o.is_successful?(t.dialogRef.close(),t.snackBar.open(o.message,"close",{duration:2e3,panelClass:["success-snack-bar"],verticalPosition:"top"})):t.snackBar.open(o.message,"close",{duration:2e3,panelClass:["success-snack-bar"],verticalPosition:"top"})}catch{t.snackBar.open("Oops Something went wrong!!","close",{duration:2e3,panelClass:["error-snack-bar"],verticalPosition:"top"})}})()}Dateformat(t){return this.datePipe.transform(t,"yyyy-MM-dd")??""}onClose(){this.dialogRef.close()}applyFilter(t){}}return n.\u0275fac=function(t){return new(t||n)(e.Y36(m.qu),e.Y36(p.so),e.Y36(te),e.Y36(E.s),e.Y36(y.uU),e.Y36(P.ux))},n.\u0275cmp=e.Xpm({type:n,selectors:[["app-rate-mapping"]],inputs:{rateObj1:"rateObj1"},features:[e._Bn([y.uU,{provide:c.sG,useValue:ie}])],decls:53,vars:8,consts:[[3,"formGroup"],[1,"card"],[1,"card-header","h10"],[1,"close-button",3,"click"],[1,"card-body"],[1,"row","mt-1"],[1,"col-lg-4","col-sm-12","col-xs-12"],["formControlName","center","placeholder","center","required",""],["value","0"],[3,"value",4,"ngFor","ngForOf"],["formControlName","route","placeholder","Route","required",""],["formControlName","society","placeholder","MPP","required",""],[1,"col-lg-4","col-sm-12"],["appearance","fill"],["matInput","","placeholder","dd/MM/yyyy","formControlName","effectiveDate",3,"matDatepicker"],["matSuffix","",3,"for"],["effectiveDatePicker",""],["formControlName","effectiveShift","placeholder","Shift","required",""],["value","M"],["value","E"],[1,"row"],[1,"col-sm"],[1,"btn","btn-primary",3,"disabled","click"],[3,"value"]],template:function(t,o){if(1&t&&(e.TgZ(0,"form",0)(1,"div",1)(2,"div",2),e._uU(3),e.TgZ(4,"button",3),e.NdJ("click",function(){return o.onClose()}),e._uU(5,"X"),e.qZA()(),e.TgZ(6,"div",4)(7,"div",5)(8,"div",6)(9,"mat-form-field")(10,"mat-label"),e._uU(11,"BMC"),e.qZA(),e.TgZ(12,"mat-select",7)(13,"mat-option",8),e._uU(14," All"),e.qZA(),e.YNc(15,ne,2,2,"mat-option",9),e.qZA()()(),e.TgZ(16,"div",6)(17,"mat-form-field")(18,"mat-label"),e._uU(19,"Route"),e.qZA(),e.TgZ(20,"mat-select",10)(21,"mat-option",8),e._uU(22," All"),e.qZA(),e.YNc(23,oe,2,2,"mat-option",9),e.qZA()()(),e.TgZ(24,"div",6)(25,"mat-form-field")(26,"mat-label"),e._uU(27,"Society"),e.qZA(),e.TgZ(28,"mat-select",11)(29,"mat-option",8),e._uU(30," All"),e.qZA(),e.YNc(31,ae,2,2,"mat-option",9),e.qZA()()(),e.TgZ(32,"div",12)(33,"mat-form-field",13)(34,"mat-label"),e._uU(35,"Effective Date"),e.qZA(),e._UZ(36,"input",14)(37,"mat-datepicker-toggle",15)(38,"mat-datepicker",null,16),e.qZA()(),e.TgZ(40,"div",12)(41,"mat-form-field",13)(42,"mat-label"),e._uU(43,"Effective Shift"),e.qZA(),e.TgZ(44,"mat-select",17)(45,"mat-option",18),e._uU(46,"Morning"),e.qZA(),e.TgZ(47,"mat-option",19),e._uU(48,"Evening"),e.qZA()()()(),e.TgZ(49,"div",20)(50,"div",21)(51,"button",22),e.NdJ("click",function(){return o.insertRateMapping()}),e._uU(52,"Save"),e.qZA()()()()()()()),2&t){const a=e.MAs(39);e.Q6J("formGroup",o.formRateMapping),e.xp6(3),e.hij(" ",o.formTitle," "),e.xp6(12),e.Q6J("ngForOf",o.centerList),e.xp6(8),e.Q6J("ngForOf",o.RouteList),e.xp6(8),e.Q6J("ngForOf",o.societyList),e.xp6(5),e.Q6J("matDatepicker",a),e.xp6(1),e.Q6J("for",a),e.xp6(14),e.Q6J("disabled",o.formRateMapping.invalid)}},dependencies:[x.KE,x.hX,x.R9,A.Nt,y.sg,m._Y,m.Fj,m.JJ,m.JL,m.Q7,m.sg,m.u,c.ey,f.Mq,f.hl,f.nW,B.gD],styles:[".close-button[_ngcontent-%COMP%]{position:absolute;color:red;background-color:#fff;border:white;border:none;top:0;right:0}"]}),n})();var Y=r(574),$=r(4327),le=r(201),ce=r(2075);function se(n,i){1&n&&(e.TgZ(0,"mat-header-cell",27),e._uU(1," Rate Type Code "),e.qZA())}function pe(n,i){if(1&n&&(e.ynx(0),e._uU(1),e.BQk()),2&n){const t=e.oxw().$implicit;e.xp6(1),e.hij(" ",t.otherCode," ")}}function me(n,i){1&n&&e.GkF(0)}function de(n,i){if(1&n&&(e.TgZ(0,"mat-cell"),e.YNc(1,pe,2,1,"ng-container",28),e.YNc(2,me,1,0,"ng-container",28),e.qZA()),2&n){const t=i.$implicit;e.xp6(1),e.Q6J("ngIf",!t.isNew),e.xp6(1),e.Q6J("ngIf",t.isNew)}}function ue(n,i){1&n&&(e.TgZ(0,"mat-header-cell",27),e._uU(1," Rate Type Id "),e.qZA())}function fe(n,i){if(1&n&&(e.ynx(0),e._uU(1),e.BQk()),2&n){const t=e.oxw().$implicit;e.xp6(1),e.hij(" ",t.rateTypeId," ")}}function _e(n,i){1&n&&e.GkF(0)}function ge(n,i){if(1&n&&(e.TgZ(0,"mat-cell"),e.YNc(1,fe,2,1,"ng-container",28),e.YNc(2,_e,1,0,"ng-container",28),e.qZA()),2&n){const t=i.$implicit;e.xp6(1),e.Q6J("ngIf",!t.isNew),e.xp6(1),e.Q6J("ngIf",t.isNew)}}function he(n,i){1&n&&(e.TgZ(0,"mat-header-cell",29),e._uU(1," Description "),e.qZA())}function Te(n,i){if(1&n&&(e.ynx(0),e._uU(1),e.BQk()),2&n){const t=e.oxw().$implicit;e.xp6(1),e.hij(" ",t.description," ")}}function ye(n,i){if(1&n){const t=e.EpF();e.TgZ(0,"mat-form-field")(1,"input",30),e.NdJ("ngModelChange",function(a){e.CHM(t);const l=e.oxw().$implicit;return e.KtG(l.description=a)}),e.qZA()()}if(2&n){const t=e.oxw().$implicit;e.xp6(1),e.Q6J("ngModel",t.description)}}function xe(n,i){if(1&n&&(e.TgZ(0,"mat-cell"),e.YNc(1,Te,2,1,"ng-container",28),e.ynx(2),e.YNc(3,ye,2,1,"mat-form-field",28),e.BQk(),e.qZA()),2&n){const t=i.$implicit;e.xp6(1),e.Q6J("ngIf",!t.isNew),e.xp6(2),e.Q6J("ngIf",t.isNew)}}function Re(n,i){1&n&&(e.TgZ(0,"mat-header-cell",29),e._uU(1," Same Rate For All Type "),e.qZA())}const Q=function(n,i){return{greenCard:n,redCard:i}};function Ce(n,i){if(1&n&&(e.ynx(0),e.TgZ(1,"span",31),e._uU(2),e.qZA(),e.BQk()),2&n){const t=e.oxw().$implicit;e.xp6(1),e.Q6J("ngClass",e.WLB(2,Q,t.isSameRateForAllMilkType,!t.isSameRateForAllMilkType)),e.xp6(1),e.hij(" ",t.isSameRateForAllMilkType," ")}}function ve(n,i){if(1&n){const t=e.EpF();e.ynx(0),e.TgZ(1,"mat-checkbox",32),e.NdJ("ngModelChange",function(a){e.CHM(t);const l=e.oxw().$implicit;return e.KtG(l.isSameRateForAllMilkType=a)})("click",function(a){e.CHM(t);const l=e.oxw().$implicit,g=e.oxw();return e.KtG(g.rateTypeChecked(a,l))}),e.qZA(),e.BQk()}if(2&n){const t=e.oxw().$implicit;e.xp6(1),e.Q6J("ngModel",t.isSameRateForAllMilkType)}}function Me(n,i){if(1&n&&(e.TgZ(0,"mat-cell"),e.YNc(1,Ce,3,5,"ng-container",28),e.YNc(2,ve,2,1,"ng-container",28),e.qZA()),2&n){const t=i.$implicit;e.xp6(1),e.Q6J("ngIf",!t.isNew),e.xp6(1),e.Q6J("ngIf",t.isNew)}}function be(n,i){1&n&&(e.TgZ(0,"mat-header-cell",29),e._uU(1," Same Rate For All Shift "),e.qZA())}function Ae(n,i){if(1&n&&(e.ynx(0),e.TgZ(1,"span",31),e._uU(2),e.qZA(),e.BQk()),2&n){const t=e.oxw().$implicit;e.xp6(1),e.Q6J("ngClass",e.WLB(2,Q,t.isSameRateForAllShift,!t.isSameRateForAllShift)),e.xp6(1),e.hij(" ",t.isSameRateForAllShift," ")}}function we(n,i){if(1&n){const t=e.EpF();e.ynx(0),e.TgZ(1,"mat-checkbox",33),e.NdJ("ngModelChange",function(a){e.CHM(t);const l=e.oxw().$implicit;return e.KtG(l.isSameRateForAllShift=a)}),e.qZA(),e.BQk()}if(2&n){const t=e.oxw().$implicit;e.xp6(1),e.Q6J("ngModel",t.isSameRateForAllShift)}}function Ze(n,i){if(1&n&&(e.TgZ(0,"mat-cell"),e.YNc(1,Ae,3,5,"ng-container",28),e.YNc(2,we,2,1,"ng-container",28),e.qZA()),2&n){const t=i.$implicit;e.xp6(1),e.Q6J("ngIf",!t.isNew),e.xp6(1),e.Q6J("ngIf",t.isNew)}}function Se(n,i){1&n&&(e.TgZ(0,"mat-header-cell",29),e._uU(1," Rate Structure "),e.qZA())}function ke(n,i){if(1&n&&(e.ynx(0),e._uU(1),e.BQk()),2&n){const t=e.oxw().$implicit;e.xp6(1),e.hij(" ",t.rateStructure," ")}}function Ne(n,i){if(1&n){const t=e.EpF();e.TgZ(0,"mat-form-field")(1,"mat-select",34),e.NdJ("ngModelChange",function(a){e.CHM(t);const l=e.oxw().$implicit;return e.KtG(l.rateStructure=a)}),e.TgZ(2,"mat-option",35),e._uU(3,"FAT AND SNF"),e.qZA(),e.TgZ(4,"mat-option",36),e._uU(5,"FAT AND LR"),e.qZA()()()}if(2&n){const t=e.oxw().$implicit;e.xp6(1),e.Q6J("ngModel",t.rateStructure)}}function Ie(n,i){if(1&n&&(e.TgZ(0,"mat-cell"),e.YNc(1,ke,2,1,"ng-container",28),e.ynx(2),e.YNc(3,Ne,6,1,"mat-form-field",28),e.BQk(),e.qZA()),2&n){const t=i.$implicit;e.xp6(1),e.Q6J("ngIf",!t.isNew),e.xp6(2),e.Q6J("ngIf",t.isNew)}}function Fe(n,i){1&n&&(e.TgZ(0,"mat-header-cell",29),e._uU(1," Mixed Milk Only "),e.qZA())}function De(n,i){if(1&n&&(e.ynx(0),e.TgZ(1,"span",31),e._uU(2),e.qZA(),e.BQk()),2&n){const t=e.oxw().$implicit;e.xp6(1),e.Q6J("ngClass",e.WLB(2,Q,t.isMixed,!t.isMixed)),e.xp6(1),e.hij(" ",t.isMixed," ")}}function je(n,i){if(1&n){const t=e.EpF();e.ynx(0),e.TgZ(1,"mat-checkbox",37),e.NdJ("ngModelChange",function(a){e.CHM(t);const l=e.oxw().$implicit;return e.KtG(l.isMixed=a)})("click",function(a){e.CHM(t);const l=e.oxw().$implicit,g=e.oxw();return e.KtG(g.rateTypeChecked(a,l))}),e.qZA(),e.BQk()}if(2&n){const t=e.oxw().$implicit;e.xp6(1),e.Q6J("ngModel",t.isMixed)}}function Ye(n,i){if(1&n&&(e.TgZ(0,"mat-cell"),e.YNc(1,De,3,5,"ng-container",28),e.YNc(2,je,2,1,"ng-container",28),e.qZA()),2&n){const t=i.$implicit;e.xp6(1),e.Q6J("ngIf",!t.isNew),e.xp6(1),e.Q6J("ngIf",t.isNew)}}function Qe(n,i){1&n&&(e.TgZ(0,"mat-header-cell",29),e._uU(1," Active "),e.qZA())}function Oe(n,i){if(1&n&&(e.ynx(0),e.TgZ(1,"span",31),e._uU(2),e.qZA(),e.BQk()),2&n){const t=e.oxw().$implicit;e.xp6(1),e.Q6J("ngClass",e.WLB(2,Q,t.isActive,!t.isActive)),e.xp6(1),e.hij(" ",t.isActive," ")}}function Je(n,i){if(1&n){const t=e.EpF();e.ynx(0),e.TgZ(1,"mat-checkbox",33),e.NdJ("ngModelChange",function(a){e.CHM(t);const l=e.oxw().$implicit;return e.KtG(l.isActive=a)}),e.qZA(),e.BQk()}if(2&n){const t=e.oxw().$implicit;e.xp6(1),e.Q6J("ngModel",t.isActive)}}function Ue(n,i){if(1&n&&(e.TgZ(0,"mat-cell"),e.YNc(1,Oe,3,5,"ng-container",28),e.YNc(2,Je,2,1,"ng-container",28),e.qZA()),2&n){const t=i.$implicit;e.xp6(1),e.Q6J("ngIf",!t.isNew),e.xp6(1),e.Q6J("ngIf",t.isNew)}}function Pe(n,i){1&n&&(e.TgZ(0,"mat-header-cell",29),e._uU(1," Action "),e.qZA())}function Be(n,i){if(1&n){const t=e.EpF();e.ynx(0),e.TgZ(1,"a",38),e.NdJ("click",function(){e.CHM(t);const a=e.oxw().$implicit,l=e.oxw();return e.KtG(l.importRate(a.rateTypeId,a.rateStructure,a.isSameRateForAllMilkType,a.isSameRateForAllShift,a.isMixed))}),e.TgZ(2,"mat-icon",39),e._uU(3,"import_export"),e.qZA()(),e.TgZ(4,"a",40),e.NdJ("click",function(){e.CHM(t);const a=e.oxw().$implicit,l=e.oxw();return e.KtG(l.generateRateChart(a.rateTypeId))}),e.TgZ(5,"mat-icon",39),e._uU(6,"assignment_returned"),e.qZA()(),e.TgZ(7,"a",41),e.NdJ("click",function(){e.CHM(t);const a=e.oxw().$implicit,l=e.oxw();return e.KtG(l.opneDialogRateMapping(a.rateTypeId))}),e.TgZ(8,"mat-icon",39),e._uU(9,"compare_arrows"),e.qZA()(),e.BQk()}if(2&n){const t=e.oxw().$implicit;e.xp6(1),e.Q6J("disabled",1===t.isRateDetailExists),e.xp6(3),e.Q6J("disabled",0===t.isRateDetailExists),e.xp6(3),e.Q6J("disabled",0===t.isRateDetailExists)}}function Le(n,i){if(1&n){const t=e.EpF();e.ynx(0),e.TgZ(1,"a",42),e.NdJ("click",function(){e.CHM(t);const a=e.oxw().$implicit,l=e.oxw();return e.KtG(l.insertData(a.description,a.isSameRateForAllMilkType,a.isSameRateForAllShift,a.rateStructure,a.isMixed,a.isActive))}),e.TgZ(2,"mat-icon",39),e._uU(3,"check"),e.qZA()(),e.TgZ(4,"a",42),e.NdJ("click",function(){e.CHM(t);const a=e.oxw(2);return e.KtG(a.onCloseAdd(a.i))}),e.TgZ(5,"mat-icon",43),e._uU(6,"close"),e.qZA()(),e.BQk()}}function Ee(n,i){if(1&n&&(e.TgZ(0,"mat-cell"),e.YNc(1,Be,10,3,"ng-container",28),e.YNc(2,Le,7,0,"ng-container",28),e.qZA()),2&n){const t=i.$implicit;e.xp6(1),e.Q6J("ngIf",!t.isNew),e.xp6(1),e.Q6J("ngIf",t.isNew)}}function $e(n,i){1&n&&e._UZ(0,"tr",44)}function qe(n,i){1&n&&e._UZ(0,"tr",45)}const Ge=function(n){return{color:n}},He=function(){return[10,20,30]},Ke=[{path:"",component:(()=>{class n{constructor(t,o,a,l,g,u,d,C){this.http=t,this.dialog=o,this.constant=a,this.route=l,this.snackBar=g,this.router=u,this.rateImportService=d,this.rateTypeServices=C,this.rateTypeIdSelected=new e.vpe,this.downloadSubscriptions=[],this.data=0,this.title="Rate Type",this.objRateType={},this.disable=!1,this._rateTypeDataSoruce=[],this.companyId=0,this.userId=0,this.rateExportObject={},this.columnsToDisplay=["rateTypeId","otherCode","description","isSameRateForAllMilkType","isSameRateForAllShift","rateStructure","isMixed","isActive","isNew"],this.companyId=this.constant.getData("CompanyId"),this.userId=this.constant.getData("userId"),this.rateId=this.rateImportService.Id}ngOnInit(){this.route.queryParams.subscribe(t=>{this.data=t.rateId}),this.getRateType()}addNewRateType(){const t={};this.disable=!0,t.rateTypeId=0,t.rateCode=0,t.isSameRateForAllMilkType=!0,t.isSameRateForAllShift=!0,t.description="",t.rateStructure="1",t.isMixed=!1,t.isActive=!0,t.otherCode="0",t.isNew=!0,this._rateTypeDataSoruce.data.splice(0,0,t),this._rateTypeDataSoruce.sort.direction="asc",this._rateTypeDataSoruce.sort=this.sort}applyFilter(t){this._rateTypeDataSoruce.filter=t.target.value.trim().toLowerCase()}onCloseAdd(t){this.disable=!1,this._rateTypeDataSoruce.data.map(o=>o.isNew=!1),this._rateTypeDataSoruce.data.splice(t,1),this._rateTypeDataSoruce.data=this._rateTypeDataSoruce.data}insertData(t,o,a,l,g,u){this.objRateType.description=t,this.objRateType.isSameRateForAllMilkType=o,this.objRateType.isSameRateForAllShift=a,this.objRateType.rateStructure=l,this.objRateType.isMixed=g,this.objRateType.isActive=u,this.objRateType.companyId=this.companyId,this.objRateType.userId=this.userId,this.objRateType.rateCode=this.data,(0,V.le)(this.objRateType.description)||""===this.objRateType.description?this.snackBar.open("please enter description","close",{duration:2e3,panelClass:["error-snack-bar"],verticalPosition:"top"}):this.rateTypeServices.insertRateType(this.objRateType).then(d=>{!0===d.is_successful&&(this.snackBar.open(d.message,"close",{duration:2e3,panelClass:["success-snack-bar"],verticalPosition:"top"}),this.getRateType(),this.disable=!1)})}rateTypeChecked(t,o){"isMixed"===t.target.name?o.isSameRateForAllMilkType=!1:o.isMixed=!1}generateRateChart(t){try{this.objRateType.rateCode=this.data,this.objRateType.rateTypeId=t,this.rateTypeServices.generateRateChart(this.objRateType).subscribe(o=>{const a=new Blob([o],{type:"application/zip"});$.saveAs(a,"Rate")})}catch(o){console.error("Error generating rate chart:",o)}}getFileNameFromUrl(t){const o=t.lastIndexOf("/");return t.substring(o+1)}unsubscribeDownloadSubscriptions(){this.downloadSubscriptions.forEach(t=>t.unsubscribe()),this.downloadSubscriptions=[]}downloadFileFromServer(t){this.http.get(t,{responseType:"blob"}).subscribe(o=>{(0,$.saveAs)(o,this.getFileNameFromUrl(t))},o=>{console.error("Error downloading the file:",o)})}getRateType(){this.objRateType.companyId=this.companyId,this.objRateType.userId=this.userId,this.objRateType.rateCode=this.data,this.rateTypeServices.getAllRateType(this.objRateType).then(t=>{this._rateTypeDataSoruce=new h.by(t.data),this._rateTypeDataSoruce.sort=this.sort,this._rateTypeDataSoruce.paginator=this.paginator})}importRate(t,o,a,l,g){const u=new p.vA;u.disableClose=!0,u.autoFocus=!0,u.closeOnNavigation=!0,u.maxHeight="100%",u.maxWidth="100%",u.width="1000px",u.height="fit-content";let d={};d.rateStructure=o,d.rateCode=this.data,d.rateTypeId=t,d.isSameRateForAllMilkType=a,d.isSameRateForAllShift=l,d.isMixed=g;const C=this.dialog.open(ee.N,u);C.componentInstance.rateObj1=d,C.afterClosed().subscribe(O=>{this.getRateType()})}opneDialogRateMapping(t){const o=new p.vA;o.disableClose=!0,o.autoFocus=!0,o.closeOnNavigation=!0,o.maxHeight="100%",o.maxWidth="100%",o.width="1000px",o.height="fit-content";let a={};a.rateCode=this.data,a.rateTypeId=t;const l=this.dialog.open(re,o);l.componentInstance.rateObj1=a,l.afterClosed().subscribe(g=>{this.getRateType()})}downloadRate(t){var o=this;return(0,N.Z)(function*(){try{o.objRateType.rateCode=o.data,o.objRateType.rateTypeId=t;const a=yield o.rateTypeServices.downloadRateExcel(o.objRateType),l="My Worksheet",g=Y.P6.book_new(),u=Y.P6.json_to_sheet(a.data);Y.P6.book_append_sheet(g,u,l);const d=Y.cW(g,{bookType:"xlsx",type:"array"}),C="my-data.xlsx",O=new Blob([d],{type:"application/octet-stream"});(0,$.saveAs)(O,C)}catch(a){console.log("Error Is:",a),o.snackBar.open("Oops Something went wrong","close",{duration:2e3,panelClass:["error-snack-bar"],verticalPosition:"top"})}})()}}return n.\u0275fac=function(t){return new(t||n)(e.Y36(L.eN),e.Y36(p.uw),e.Y36(E.s),e.Y36(v.gz),e.Y36(P.ux),e.Y36(v.F0),e.Y36(le.j),e.Y36(ce.L))},n.\u0275cmp=e.Xpm({type:n,selectors:[["app-rate-type"]],viewQuery:function(t,o){if(1&t&&(e.Gf(j.YE,7),e.Gf(D.NW,7)),2&t){let a;e.iGM(a=e.CRH())&&(o.sort=a.first),e.iGM(a=e.CRH())&&(o.paginator=a.first)}},outputs:{rateTypeIdSelected:"rateTypeIdSelected",rateCode:"rateCode",rateObj1:"rateObj1"},decls:46,vars:11,consts:[[1,"card"],[1,"card-header","h4"],[1,"card-body"],[1,"row"],[1,"col-lg-6","col-sm-6","col-xs-8"],["matInput","","placeholder","Filter",3,"keyup"],[1,"col-lg-6","col-sm-6","col-xs-4"],["mat-icon-button","","matTooltip","Add New Record",1,"float-right","mt-3",3,"disabled","click"],[3,"ngStyle"],[1,"col-12","mat-table-container"],["matSort","",1,"table-width","table-bordered",3,"dataSource"],["matColumnDef","otherCode"],["mat-sort-header","","class","col-lg-2",4,"matHeaderCellDef"],[4,"matCellDef"],["matColumnDef","rateTypeId"],["matColumnDef","description"],["mat-sort-header","",4,"matHeaderCellDef"],["matColumnDef","isSameRateForAllMilkType"],["matColumnDef","isSameRateForAllShift"],["matColumnDef","rateStructure"],["matColumnDef","isMixed"],["matColumnDef","isActive"],["matColumnDef","isNew"],["mat-header-row","","class","example-element-row",4,"matHeaderRowDef"],["mat-row","","class","example-element-row",4,"matRowDef","matRowDefColumns"],[1,"col-12","float-right"],[3,"pageSizeOptions","showFirstLastButtons"],["mat-sort-header","",1,"col-lg-2"],[4,"ngIf"],["mat-sort-header",""],["matInput","","placeholder","Description","required","",3,"ngModel","ngModelChange"],[3,"ngClass"],["color","primary","name","isSameRateForAllMilkType",3,"ngModel","ngModelChange","click"],["color","primary",3,"ngModel","ngModelChange"],[3,"ngModel","ngModelChange"],["value","1"],["value","2"],["color","primary","name","isMixed",3,"ngModel","ngModelChange","click"],["mat-icon-button","","matTooltip","Import Rate",3,"disabled","click"],[2,"color","#003b9a"],["mat-icon-button","","matTooltip","Rate Download",3,"disabled","click"],["mat-icon-button","","matTooltip","Rate Mapping ",3,"disabled","click"],["mat-icon-button","",3,"click"],["matSuffix","",2,"color","#990000"],["mat-header-row","",1,"example-element-row"],["mat-row","",1,"example-element-row"]],template:function(t,o){1&t&&(e.TgZ(0,"div",0)(1,"div",1),e._uU(2),e.qZA(),e.TgZ(3,"div",2)(4,"div",3)(5,"div",4)(6,"mat-form-field")(7,"input",5),e.NdJ("keyup",function(l){return o.applyFilter(l)}),e.qZA()()(),e.TgZ(8,"div",6)(9,"button",7),e.NdJ("click",function(){return o.addNewRateType()}),e.TgZ(10,"mat-icon",8),e._uU(11,"add_circle"),e.qZA()()()(),e.TgZ(12,"div",3)(13,"div",9)(14,"mat-table",10),e.ynx(15,11),e.YNc(16,se,2,0,"mat-header-cell",12),e.YNc(17,de,3,2,"mat-cell",13),e.BQk(),e.ynx(18,14),e.YNc(19,ue,2,0,"mat-header-cell",12),e.YNc(20,ge,3,2,"mat-cell",13),e.BQk(),e.ynx(21,15),e.YNc(22,he,2,0,"mat-header-cell",16),e.YNc(23,xe,4,2,"mat-cell",13),e.BQk(),e.ynx(24,17),e.YNc(25,Re,2,0,"mat-header-cell",16),e.YNc(26,Me,3,2,"mat-cell",13),e.BQk(),e.ynx(27,18),e.YNc(28,be,2,0,"mat-header-cell",16),e.YNc(29,Ze,3,2,"mat-cell",13),e.BQk(),e.ynx(30,19),e.YNc(31,Se,2,0,"mat-header-cell",16),e.YNc(32,Ie,4,2,"mat-cell",13),e.BQk(),e.ynx(33,20),e.YNc(34,Fe,2,0,"mat-header-cell",16),e.YNc(35,Ye,3,2,"mat-cell",13),e.BQk(),e.ynx(36,21),e.YNc(37,Qe,2,0,"mat-header-cell",16),e.YNc(38,Ue,3,2,"mat-cell",13),e.BQk(),e.ynx(39,22),e.YNc(40,Pe,2,0,"mat-header-cell",16),e.YNc(41,Ee,3,2,"mat-cell",13),e.BQk(),e.YNc(42,$e,1,0,"tr",23),e.YNc(43,qe,1,0,"tr",24),e.qZA()(),e.TgZ(44,"div",25),e._UZ(45,"mat-paginator",26),e.qZA()()()()),2&t&&(e.xp6(2),e.hij(" ",o.title," "),e.xp6(7),e.Q6J("disabled",o.disable),e.xp6(1),e.Q6J("ngStyle",e.VKq(8,Ge,o.disable?"#2d5ca8":"#003b9a")),e.xp6(4),e.Q6J("dataSource",o._rateTypeDataSoruce),e.xp6(28),e.Q6J("matHeaderRowDef",o.columnsToDisplay),e.xp6(1),e.Q6J("matRowDefColumns",o.columnsToDisplay),e.xp6(2),e.Q6J("pageSizeOptions",e.DdM(10,He))("showFirstLastButtons",!0))},dependencies:[y.mk,y.O5,y.PC,x.KE,x.R9,B.gD,c.ey,m.Fj,m.JJ,m.Q7,m.On,R.o6,R.RK,Z.Hw,q.gM,D.NW,j.YE,j.nU,h.BZ,h.fO,h.as,h.w1,h.Dz,h.nj,h.ge,h.ev,h.XQ,h.Gk,b.oG,A.Nt],styles:['mat-table[_ngcontent-%COMP%]{width:100%}mat-cell[_ngcontent-%COMP%], mat-header-cell[_ngcontent-%COMP%]{word-wrap:initial;display:table-cell;padding:0 10px;line-break:unset;white-space:nowrap;overflow:hidden;vertical-align:middle}mat-row[_ngcontent-%COMP%], mat-header-row[_ngcontent-%COMP%]{display:table-row}.padding-common[_ngcontent-%COMP%]{padding-left:20px;padding-right:20px}.mat-mdc-table[_ngcontent-%COMP%]   .mdc-data-table__header-row[_ngcontent-%COMP%]{height:35px!important;background-color:#3f51b5;color:#fff!important}.round-button[_ngcontent-%COMP%]{background-color:#00f;border-radius:50%}.icon-white[_ngcontent-%COMP%]{color:#fff}.divclaas[_ngcontent-%COMP%]{width:1000px;height:-moz-fit-content;height:fit-content;max-width:100%;max-height:100%;position:static;overflow:scroll}mat-header-row[_ngcontent-%COMP%]{height:35px!important;background-color:#003b9a}mat-header-cell[_ngcontent-%COMP%]{color:#fff;font-size:14px;font-family:Segoe UI,Tahoma,Geneva,Verdana,sans-serif}mat-footer-row[_ngcontent-%COMP%], mat-row[_ngcontent-%COMP%]{height:30px!important}mat-row[_ngcontent-%COMP%]:nth-child(even){background-color:#f8f5f5a8}.mat-column-rateTypeId[_ngcontent-%COMP%], .mat-column-otherCode[_ngcontent-%COMP%]{justify-content:flex-start!important;align-self:stretch;padding-left:5px;padding-right:5px;border-right:1px solid rgba(0,0,0,.12);word-break:break-word}.mat-column-description[_ngcontent-%COMP%], .mat-column-isSameRateForAllMilkType[_ngcontent-%COMP%], .mat-column-isSameRateForAllShift[_ngcontent-%COMP%], .mat-column-rateStructure[_ngcontent-%COMP%], .mat-column-isMixed[_ngcontent-%COMP%], .mat-column-isActive[_ngcontent-%COMP%]{justify-content:flex-end!important;text-align:left;align-self:stretch;padding-left:5px;padding-right:5px;border-right:1px solid rgba(0,0,0,.12);word-break:break-word}.mat-column-isNew[_ngcontent-%COMP%]{justify-content:flex-end!important;text-align:left;align-self:stretch;padding-left:5px;padding-right:5px;border-right:1px solid rgba(0,0,0,.12);word-break:break-word;min-width:100px;max-width:500px}  .mat-sort-header-arrow{color:#fff}.mat-table-container[_ngcontent-%COMP%]{max-height:402px;overflow:auto;max-width:100%}.mat-form-field-underline[_ngcontent-%COMP%]{background-color:#fff!important;border-top:none;border-left:none;border-right:none;border-bottom:1px solid "#3f51b"}.mat-form-field-ripple[_ngcontent-%COMP%], .mat-form-field-underline[_ngcontent-%COMP%]:hover   .mat-form-field-ripple[_ngcontent-%COMP%]{background-color:"#3f51b"}.mat-form-field-underline[_ngcontent-%COMP%]:hover{background-color:#fff!important;border-bottom:2px solid "#3f51b"}']}),n})()}];let We=(()=>{class n{}return n.\u0275fac=function(t){return new(t||n)},n.\u0275mod=e.oAB({type:n}),n.\u0275inj=e.cJS({providers:[{provide:c.Ad,useValue:"en-GB"}],imports:[y.ez,B.LD,v.Bz.forChild(Ke),m.u5,x.lN,S.QW,_.t,U.To,k.N6,w.ie,R.ot,T.vV,M.g,s.Hi,Z.Ps,K.Cq,H.Cv,c.si,F._r,p.Is,P.ZX,q.AV,D.TU,j.JX,h.p0,m.u5,W.T5,z.Nh,S.QW,p.Is,x.lN,X.IJ,m.u5,f.FA,m.UX,Z.Ps,h.p0,D.TU,b.p9,A.c,R.ot,h.p0]}),n})()},4327:function(J,I){var r,v;void 0!==(v="function"==typeof(r=function(){"use strict";function M(s,c,f){var p=new XMLHttpRequest;p.open("GET",s),p.responseType="blob",p.onload=function(){b(p.response,c,f)},p.onerror=function(){console.error("could not download file")},p.send()}function F(s){var c=new XMLHttpRequest;c.open("HEAD",s,!1);try{c.send()}catch{}return 200<=c.status&&299>=c.status}function R(s){try{s.dispatchEvent(new MouseEvent("click"))}catch{var c=document.createEvent("MouseEvents");c.initMouseEvent("click",!0,!0,window,0,0,0,80,20,!1,!1,!1,!1,0,null),s.dispatchEvent(c)}}var T="object"==typeof window&&window.window===window?window:"object"==typeof self&&self.self===self?self:"object"==typeof global&&global.global===global?global:void 0,S=T.navigator&&/Macintosh/.test(navigator.userAgent)&&/AppleWebKit/.test(navigator.userAgent)&&!/Safari/.test(navigator.userAgent),b=T.saveAs||("object"!=typeof window||window!==T?function(){}:"download"in HTMLAnchorElement.prototype&&!S?function(s,c,f){var p=T.URL||T.webkitURL,_=document.createElement("a");_.download=c=c||s.name||"download",_.rel="noopener","string"==typeof s?(_.href=s,_.origin===location.origin?R(_):F(_.href)?M(s,c,f):R(_,_.target="_blank")):(_.href=p.createObjectURL(s),setTimeout(function(){p.revokeObjectURL(_.href)},4e4),setTimeout(function(){R(_)},0))}:"msSaveOrOpenBlob"in navigator?function(s,c,f){if(c=c||s.name||"download","string"!=typeof s)navigator.msSaveOrOpenBlob(function m(s,c){return typeof c>"u"?c={autoBom:!1}:"object"!=typeof c&&(console.warn("Deprecated: Expected third argument to be a object"),c={autoBom:!c}),c.autoBom&&/^\s*(?:text\/\S*|application\/xml|\S*\/\S*\+xml)\s*;.*charset\s*=\s*utf-8/i.test(s.type)?new Blob(["\ufeff",s],{type:s.type}):s}(s,f),c);else if(F(s))M(s,c,f);else{var p=document.createElement("a");p.href=s,p.target="_blank",setTimeout(function(){R(p)})}}:function(s,c,f,p){if((p=p||open("","_blank"))&&(p.document.title=p.document.body.innerText="downloading..."),"string"==typeof s)return M(s,c,f);var _="application/octet-stream"===s.type,U=/constructor/i.test(T.HTMLElement)||T.safari,x=/CriOS\/[\d]+/.test(navigator.userAgent);if((x||_&&U||S)&&typeof FileReader<"u"){var k=new FileReader;k.onloadend=function(){var w=k.result;w=x?w:w.replace(/^data:[^;]*;/,"data:attachment/file;"),p?p.location.href=w:location=w,p=null},k.readAsDataURL(s)}else{var Z=T.URL||T.webkitURL,A=Z.createObjectURL(s);p?p.location=A:location.href=A,p=null,setTimeout(function(){Z.revokeObjectURL(A)},4e4)}});T.saveAs=b.saveAs=b,J.exports=b})?r.apply(I,[]):r)&&(J.exports=v)}}]);