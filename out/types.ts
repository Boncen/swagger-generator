
import {  KunlunMallServiceEntitiesNavigationJumpParameterType,  KunlunServiceCoreGender,  KunlunMallServiceEntitiesProductCooperativePickupState,  KunlunCoreMerchantAdminRoles,  KunlunServiceCoreCommerceStates,  KunlunMerchantServiceEntitiesShopGoodsType,  KunlunMallServiceEntitiesPurchaseOrderDeliveryType,  KunlunServiceCoreOrderStates,  KunlunServiceCoreMemberLevels,  KunlunMerchantServiceEntitiesCooperatorBenefitState,  KunlunServiceCoreMerchantAccountType,  KunlunServiceCoreInvitationTypes,  KunlunServiceCoreInvitationStates,  KunlunMallServiceEntitiesCooperativeAgreementState,  KunlunMemberServiceEntitiesTastingState,  KunlunServiceCoreMerchantTypes,  KunlunServiceCoreStockOutType,  KunlunMallServiceEntitiesProductCooperativeSettlementState,  KunlunMallServiceEntitiesStockInState,  KunlunMemberServiceEntitiesVisitType,  KunlunServiceCoreMerchantPurchaseBillType,  KunlunMerchantServiceEntitiesMerchantAccountState,  KunlunMerchantServiceEntitiesCommissionSettlementApplicationState,  KunlunServiceCoreReceivedCouponStates,  KunlunServiceCoreCouponTypes,  KunlunServiceCoreWithdrawalAccountState,  KunlunServiceCoreWithdrawalAccountType,  KunlunMallServiceEntitiesNavigationJumpType,  KunlunMerchantServiceEntitiesShopOrderCommissionSettingType,  KunlunMemberServiceEntitiesVisitState,  KunlunMallServiceEntitiesStockOutState,  KunlunServiceCoreMerchantReceiptSubject,  KunlunServiceCoreExtensionsVerificationCodeTypes,  KunlunServiceCoreOrderTypes,  } from './enum'
export interface KunlunMallServiceEntitiesNavigationJumpParameterModel {
	type?: KunlunMallServiceEntitiesNavigationJumpParameterType 
	value?: string 
	}
export interface KunlunCommerceServiceModelsMerchantInvitationListResponse {
	pending?: number 
	processing?: number 
	list?: KunlunCommerceServiceModelsMerchantInvitationListItem 
	total?: number 
	}
export interface KunlunMallServiceModelsMerchantProductCooperativeAgreementDetailResponseMerchantInfo {
	merchantName?: string 
	purchaseQty?: number 
	}
export interface KunlunMallServiceModelsMerchantProductCooperativeAgreementDetailResponsePriceInfo {
	beginDate?: string 
	endDate?: string 
	settlementPrice?: number 
	}
export interface KunlunMallServiceModelsMerchantStockOutDetailResponseItem {
	picture?: string 
	price?: number 
	qty?: number 
	productId?: string 
	skuId?: string 
	name?: string 
	spec?: string 
	}
export interface KunlunMerchantServiceModelsMerchantCouponGroupListItem {
	state?: number 
	stateName?: string 
	instruction?: string 
	couponName?: string 
	amount?: number 
	allowSuperposition?: boolean 
	endTime?: string 
	groupCount?: number 
	goodsScopeName?: string 
	beginTime?: string 
	}
export interface KunlunMemberServiceModelsMerchantCustomerListItemMemberInfo {
	areaName2?: string 
	areaName3?: string 
	company?: string 
	position?: string 
	nativePlace?: string 
	areaName?: string 
	}
export interface KunlunMemberServiceModelsMerchantSaveCustomerRequest {
	teaWays?: number 
	teaPeriod?: number 
	teaTypes?: number 
	teaScenes?: number 
	teaFrequency?: number 
	teaBrands?: number 
	principalId?: number 
	mobile: string 
	mobile3?: string 
	teaLevel?: number 
	id?: number 
	firstName: string 
	mobile2?: string 
	remark?: string 
	lastName?: string 
	gender?: KunlunServiceCoreGender 
	teaAttitude?: number 
	}
export interface KunlunBaseServiceModelsGlobalSettingsModel {
	gzhAppId?: string 
	}
export interface KunlunMallServiceModelsMerchantCooperativePickupDetailResponse {
	totalAmount?: number 
	applicantName?: string 
	deliveryTime?: string 
	expressCompanyName?: string 
	trackingNumber?: string 
	product?: KunlunMallServiceModelsMerchantCooperativeProductInfo 
	stateName?: string 
	qty?: number 
	price?: number 
	applicationTime?: string 
	finishTime?: string 
	id?: number 
	state?: KunlunMallServiceEntitiesProductCooperativePickupState 
	}
export interface KunlunMallServiceModelsMerchantPurchaseOrderDeliveryRequest {
	trackingNumber: string 
	orderId?: number 
	deliveryTime?: string 
	expressCompanyId: string 
	}
export interface KunlunMallServiceModelsUserCartListItem {
	id?: string 
	picture?: string 
	qty?: number 
	listPrice?: number 
	spec?: string 
	isOnline?: boolean 
	productId?: string 
	skuId?: string 
	title?: string 
	price?: number 
	}
export interface KunlunMarketingServiceModelsMerchantMembershipCardListResponseEquity {
	couponId?: string 
	couponName?: string 
	couponAmount?: number 
	couponQty?: number 
	couponRemark?: string 
	}
export interface KunlunMerchantServiceModelsMerchantCouponListResponse {
	list?: KunlunMerchantServiceModelsMerchantCouponListItem 
	total?: number 
	available?: number 
	}
export interface KunlunServiceCoreModelsAreaModel {
	province?: string 
	city?: string 
	county?: string 
	provinceName?: string 
	cityName?: string 
	countyName?: string 
	fullAreaName?: string 
	}
export interface KunlunBaseServiceModelsBrandModel {
	id?: number 
	name?: string 
	}
export interface KunlunMallServiceModelsMerchantPurchaseOrderTakeDeliveryRequest {
	orderId?: number 
	arrivalTime?: string 
	}
export interface KunlunMerchantServiceModelsMerchantSaveAddressRequest {
	address: string 
	isDefault?: boolean 
	id?: string 
	name: string 
	mobile: string 
	area?: KunlunServiceCoreModelsAreaModel 
	}
export interface KunlunMerchantServiceModelsMerchantGoodsCommissionSchemeModel {
	id?: number 
	name?: string 
	remark?: string 
	isDefault?: boolean 
	}
export interface AspireCoreModelsResult {
	msg?: string 
	success?: boolean 
	model?: any 
	errCode?: string 
	}
export interface KunlunMallServiceModelsMerchantCooperativeOrderListItem {
	orderQty?: number 
	settlementQty?: number 
	settlementPrice?: number 
	settlementAmount?: number 
	product?: KunlunMallServiceModelsMerchantCooperativeProductInfo 
	orderId?: string 
	isSettled?: boolean 
	}
export interface KunlunMemberServiceModelsMerchantSaveTastingRequest {
	id?: number 
	customerIds?: number 
	adminId?: number 
	time?: string 
	remark?: string 
	details?: KunlunMemberServiceModelsMerchantSaveTastingRequestDetail 
	}
export interface KunlunMerchantServiceModelsMerchantMerchantAdminListItem {
	creatorName?: string 
	id?: string 
	account?: string 
	name?: string 
	positionName?: string 
	creationTime?: string 
	isEnabled?: boolean 
	role?: KunlunCoreMerchantAdminRoles 
	roleName?: string 
	}
export interface KunlunMerchantServiceModelsMerchantPartnerParentListItem {
	id?: string 
	name?: string 
	isDefault?: boolean 
	}
export interface KunlunBaseServiceModelsIndustryModel {
	id?: number 
	name?: string 
	parentId?: number 
	childs?: KunlunBaseServiceModelsIndustryModel 
	}
export interface KunlunCommerceServiceModelsMerchantServiceListItem {
	contactNumber?: string 
	publisherName?: string 
	canContactCustomer?: boolean 
	content?: string 
	stateName?: string 
	name?: string 
	typeIcon?: string 
	merchantId?: string 
	fullAreaName?: string 
	contactName?: string 
	publishTime?: string 
	memberName?: string 
	publisherContactNumber?: string 
	state?: KunlunServiceCoreCommerceStates 
	id?: string 
	typeName?: string 
	merchantName?: string 
	}
export interface KunlunMerchantServiceModelsMerchantCooperatorListItem {
	lat?: number 
	lng?: number 
	levels?: object 
	picture?: string 
	name?: string 
	areaName?: string 
	fullAreaName?: string 
	address?: string 
	distance?: number 
	id?: string 
	}
export interface KunlunMerchantServiceModelsMerchantManagedMerchantListRequest {
	tempToken?: string 
	}
export interface KunlunMerchantServiceModelsMerchantSaveMerchantAdminRequest {
	account: string 
	password?: string 
	name: string 
	role: KunlunCoreMerchantAdminRoles 
	isEnabled?: boolean 
	positionId?: number 
	parentPromoterId?: number 
	id?: number 
	}
export interface KunlunMerchantServiceModelsSharedShopOrderContent {
	memberId?: number 
	merchantId?: number 
	merchantAdminId?: number 
	parentMerchantId?: number 
	items?: KunlunMerchantServiceModelsSharedShopOrderContentGoodsInfo 
	}
export interface KunlunMerchantServiceModelsMerchantSubmitCommissionSettlementApplicationRequest {
	month?: number 
	year?: number 
	}
export interface KunlunCommerceServiceModelsMerchantInvitationListItemInvitee {
	id?: string 
	name?: string 
	avatar?: string 
	company?: string 
	position?: string 
	mobile?: string 
	}
export interface KunlunMallServiceModelsMerchantPurchaseOrderUploadAttachmentsRequest {
	orderId?: number 
	attachments?: string 
	}
export interface KunlunMerchantServiceModelsMerchantGoodsDetailResponse {
	picture?: string 
	price?: number 
	listPrice?: number 
	description?: string 
	isOnline?: boolean 
	id?: string 
	name?: string 
	galleries?: string 
	type?: KunlunMerchantServiceEntitiesShopGoodsType 
	typeName?: string 
	}
export interface KunlunMerchantServiceModelsMerchantPositionDetailResponse {
	isEnabled?: boolean 
	id?: number 
	name?: string 
	remark?: string 
	}
export interface KunlunMallServiceModelsMerchantPurchaseOrderListItem {
	details?: KunlunMallServiceModelsMerchantPurchaseOrderListItemGoodsInfo 
	paidAmount?: number 
	deliveryType?: KunlunMallServiceEntitiesPurchaseOrderDeliveryType 
	deliveryTypeName?: string 
	stockInId?: string 
	purchaserName?: string 
	id?: string 
	serialNo?: string 
	amount?: number 
	address?: KunlunMallServiceModelsMerchantPurchaseOrderListItemAddressInfo 
	stateName?: string 
	stockOutId?: string 
	purchaserId?: string 
	supplierId?: string 
	supplierName?: string 
	state?: KunlunServiceCoreOrderStates 
	}
export interface KunlunMallServiceModelsMerchantSaveStockOutRequestItem {
	skuId?: number 
	qty?: number 
	}
export interface KunlunMerchantServiceModelsMerchantCooperatorDetailResponseBenefit {
	usedQty?: number 
	level?: KunlunServiceCoreMemberLevels 
	state?: KunlunMerchantServiceEntitiesCooperatorBenefitState 
	stateName?: string 
	id?: string 
	name?: string 
	rules?: string 
	qty?: number 
	}
export interface KunlunBaseServiceModelsLocationSearchRequest {
	pageSize?: number 
	pageIndex?: number 
	keyword?: string 
	cityName?: string 
	}
export interface KunlunBaseServiceModelsSearchConditionRequest {
	type?: string 
	}
export interface KunlunMallServiceModelsMerchantBuyRequestBuyItem {
	skuId?: number 
	qty?: number 
	}
export interface KunlunMallServiceModelsMerchantStockInListRequest {
	sortType?: string 
	sortField?: string 
	pageIndex?: number 
	pageSize?: number 
	searchText?: string 
	}
export interface KunlunMerchantServiceModelsMerchantAccountListRequest {
	isValid?: boolean 
	type?: KunlunServiceCoreMerchantAccountType 
	}
export interface KunlunMerchantServiceModelsMerchantSavePositionRequest {
	remark?: string 
	isEnabled?: boolean 
	id?: number 
	name: string 
	}
export interface KunlunMerchantServiceModelsMerchantShopOrderDetailResponse {
	id?: string 
	details?: KunlunMerchantServiceModelsMerchantShopOrderDetailResponseOrderDetail 
	memberId?: string 
	state?: KunlunServiceCoreOrderStates 
	sampleCouponAmount?: number 
	commonCouponAmount?: number 
	paymentTime?: string 
	memberName?: string 
	stateName?: string 
	actualAmount?: number 
	parentMerchantName?: string 
	totalAmount?: number 
	roomCouponAmount?: number 
	creatorName?: string 
	creationTime?: string 
	serialNo?: string 
	memberMobile?: string 
	parentMerchantId?: string 
	finishTime?: string 
	payments?: KunlunMerchantServiceModelsMerchantShopOrderDetailResponsePaymentItem 
	}
export interface KunlunMerchantServiceModelsMerchantWithdrawalListRequest {
	sortType?: string 
	sortField?: string 
	pageIndex?: number 
	pageSize?: number 
	searchText?: string 
	type?: KunlunServiceCoreMerchantAccountType 
	}
export interface KunlunMerchantServiceModelsSharedShopOrderContentGoodsInfo {
	remark?: string 
	goodsId?: number 
	isShopGoods?: boolean 
	qty?: number 
	actualAmount?: number 
	}
export interface KunlunCommerceServiceModelsMerchantInvitationListItem {
	inviteeId?: string 
	contactNumber?: string 
	id?: string 
	typeName?: string 
	inviteeMerchantContactName?: string 
	appointmentTime?: string 
	stateName?: string 
	canReject?: boolean 
	canClose?: boolean 
	commerceDetail?: KunlunCommerceServiceModelsMerchantInvitationListItemCommerce 
	type?: KunlunServiceCoreInvitationTypes 
	inviteeName?: string 
	inviteeMerchantName?: string 
	contactName?: string 
	invitedRemark?: string 
	state?: KunlunServiceCoreInvitationStates 
	inviteeMerchantId?: string 
	invitationRemark?: string 
	applicationTime?: string 
	canAccept?: boolean 
	canFinish?: boolean 
	inviteeDetail?: KunlunCommerceServiceModelsMerchantInvitationListItemInvitee 
	}
export interface KunlunMallServiceModelsMerchantProductCooperativeAgreementListItem {
	purchasePrice?: number 
	totalQty?: number 
	totalPurchaseQty?: number 
	purchaseQty?: number 
	purchaseAmount?: number 
	agreementId?: number 
	serialNo?: string 
	stateName?: string 
	product?: KunlunMallServiceModelsMerchantCooperativeProductInfo 
	state?: KunlunMallServiceEntitiesCooperativeAgreementState 
	}
export interface KunlunMemberServiceModelsMerchantCreateCustomerFromMemberRequest {
	memberId?: number 
	}
export interface KunlunMallServiceModelsMerchantCooperativeProductInfo {
	categoryName?: string 
	year?: number 
	productId?: string 
	skuId?: string 
	picture?: string 
	name?: string 
	}
export interface KunlunMallServiceModelsMerchantProductCooperativeAgreementListRequest {
	pageSize?: number 
	searchText?: string 
	sortType?: string 
	sortField?: string 
	pageIndex?: number 
	}
export interface KunlunMemberServiceModelsMerchantTastingDetailResponse {
	adminName?: string 
	stateName?: string 
	remark?: string 
	details?: KunlunMemberServiceModelsMerchantTastingDetailResponseDetail 
	time?: string 
	id?: number 
	customerIds?: string 
	customerNames?: string 
	adminId?: number 
	state?: KunlunMemberServiceEntitiesTastingState 
	}
export interface KunlunMerchantServiceModelsMerchantBillListItem {
	type?: number 
	amount?: number 
	couponAmount?: number 
	creationTime?: string 
	id?: string 
	title?: string 
	}
export interface KunlunMerchantServiceModelsMerchantSaveMerchantRequest {
	address?: string 
	industry?: number 
	area?: KunlunServiceCoreModelsAreaModel 
	type?: KunlunServiceCoreMerchantTypes 
	acreage?: number 
	contactName?: string 
	contactNumber?: string 
	rooms?: number 
	}
export interface KunlunMallServiceModelsMerchantPurchaseOrderDetailResponsePaymentItem {
	method?: string 
	amount?: number 
	}
export interface KunlunMemberServiceModelsMerchantMemberListRequest {
	pageSize?: number 
	searchText?: string 
	level?: KunlunServiceCoreMemberLevels 
	area?: KunlunServiceCoreModelsAreaModel 
	hasPrincipal?: boolean 
	sortType?: string 
	sortField?: string 
	pageIndex?: number 
	}
export interface KunlunMallServiceModelsMerchantProductRecommendListRequest {
	limit?: number 
	offset?: number 
	}
export interface KunlunMemberServiceModelsMerchantMemberListResponse {
	company?: string 
	id?: string 
	name?: string 
	areaName?: string 
	levelName?: string 
	requirements?: number 
	customerId?: string 
	mobile?: string 
	nativePlace?: string 
	areaName2?: string 
	levelPicture?: string 
	industryNames?: string 
	canGiveMembershipCard?: boolean 
	beInvited?: number 
	inviterName?: string 
	ageName?: string 
	fullAreaName?: string 
	areaName3?: string 
	services?: number 
	beInvitedTime?: string 
	position?: string 
	expirationTime?: string 
	address?: string 
	}
export interface KunlunMerchantServiceModelsMerchantMembershipCardGiftApplicationRequest {
	memberId?: number 
	cardId?: number 
	}
export interface KunlunMallServiceModelsMerchantSaveStockOutRequest {
	id?: string 
	stockroomId?: string 
	type?: KunlunServiceCoreStockOutType 
	outboundTime?: string 
	remark?: string 
	orderId?: number 
	items?: KunlunMallServiceModelsMerchantSaveStockOutRequestItem 
	}
export interface KunlunMerchantServiceModelsMerchantShopOrderListItemOrderDetail {
	actualAmount?: number 
	isRoom?: boolean 
	isSample?: boolean 
	price?: number 
	qty?: number 
	picture?: string 
	isShopGoods?: boolean 
	goodsId?: string 
	goodsName?: string 
	content?: any 
	}
export interface KunlunMerchantServiceModelsMerchantUnsettledCommissionListItem {
	account?: string 
	positionName?: string 
	amount?: number 
	adminId?: number 
	adminName?: string 
	}
export interface KunlunMallServiceModelsMerchantUpdateMerchantPurchasePolicyRequest {
	merchantId?: number 
	discount?: number 
	policyId?: number 
	}
export interface KunlunCommerceServiceModelsMerchantInvitationListItemCommerce {
	content?: string 
	fullAreaName?: string 
	publishTime?: string 
	id?: string 
	name?: string 
	contactNumber?: string 
	typeName?: string 
	typeIcon?: string 
	contactName?: string 
	}
export interface KunlunCommerceServiceModelsMerchantSaveCommerceRequirementRequest {
	name?: string 
	types?: number 
	content: string 
	contactName: string 
	publisherContactNumber: string 
	pictures?: string 
	publish?: boolean 
	id?: number 
	contactNumber: string 
	publisherName: string 
	remark?: string 
	memberId?: number 
	}
export interface KunlunMallServiceModelsMerchantBuyResponse {
	orderId?: string 
	}
export interface KunlunMallServiceModelsMerchantCooperativeSettlementListItem {
	confirmationTime?: string 
	id?: number 
	merchantName?: string 
	stateName?: string 
	totalAmount?: number 
	state?: KunlunMallServiceEntitiesProductCooperativeSettlementState 
	totalQty?: number 
	creationTime?: string 
	product?: KunlunMallServiceModelsMerchantCooperativeProductInfo 
	}
export interface KunlunMallServiceModelsMerchantStockInListItem {
	items?: KunlunMallServiceModelsMerchantStockInListItemItem 
	stateName?: string 
	stockroomName?: string 
	storageUserName?: string 
	storageTime?: string 
	confirmationTime?: string 
	confirmationUserName?: string 
	id?: string 
	serialNo?: string 
	state?: KunlunMallServiceEntitiesStockInState 
	}
export interface KunlunMallServiceModelsUserProductAttributeItem {
	id?: number 
	name?: string 
	options?: KunlunMallServiceModelsUserProductAttributeItemOption 
	}
export interface KunlunMemberServiceModelsMerchantSaveVisitRequest {
	executorId?: number 
	result?: string 
	id?: number 
	customerId?: number 
	plannerId?: number 
	planTime?: string 
	type?: KunlunMemberServiceEntitiesVisitType 
	purpose: string 
	executionTime?: string 
	}
export interface KunlunMerchantServiceModelsMerchantCooperatorBenefitUsageListRequest {
	pageSize?: number 
	searchText?: string 
	benefitId?: number 
	level?: KunlunServiceCoreMemberLevels 
	sortType?: string 
	sortField?: string 
	pageIndex?: number 
	}
export interface KunlunMerchantServiceModelsMerchantMerchantCheckAccountRequest {
	account: string 
	}
export interface KunlunCommerceServiceModelsMerchantCommerceRequirementDetailRequest {
	id?: number 
	isEdit?: boolean 
	}
export interface KunlunCommerceServiceModelsMerchantInvitationListRequest {
	searchText?: string 
	state?: KunlunServiceCoreInvitationStates 
	sortType?: string 
	sortField?: string 
	pageIndex?: number 
	pageSize?: number 
	}
export interface KunlunCommerceServiceModelsMerchantRequirementListRequest {
	sortType?: string 
	pageIndex?: number 
	pageSize?: number 
	searchText?: string 
	type?: number 
	state?: KunlunServiceCoreCommerceStates 
	memberId?: number 
	sortField?: string 
	area?: KunlunServiceCoreModelsAreaModel 
	}
export interface KunlunMerchantServiceModelsMerchantChooseMerchantResponse {
	picture?: string 
	token?: string 
	role?: string 
	id?: string 
	name?: string 
	merchantId?: string 
	account?: string 
	merchantName?: string 
	parentId?: string 
	}
export interface KunlunMerchantServiceModelsMerchantMerchantAdminListResponse {
	enabled?: number 
	list?: KunlunMerchantServiceModelsMerchantMerchantAdminListItem 
	total?: number 
	}
export interface KunlunMerchantServiceModelsMerchantPurchaseBillListItem {
	id?: string 
	title?: string 
	type?: KunlunServiceCoreMerchantPurchaseBillType 
	amount?: number 
	couponAmount?: number 
	creationTime?: string 
	}
export interface KunlunMerchantServiceModelsMerchantPurchaseDepositResponse {
	prepayId?: string 
	needPay?: boolean 
	timeStamp?: string 
	nonceStr?: string 
	package?: string 
	signType?: string 
	paySign?: string 
	payUrl?: string 
	}
export interface KunlunMerchantServiceModelsMerchantMerchantSubordinateItem {
	type?: KunlunServiceCoreMerchantTypes 
	typeName?: string 
	fullAreaName?: string 
	address?: string 
	picture?: string 
	id?: string 
	name?: string 
	}
export interface KunlunMallServiceModelsMerchantConfirmCooperativeSettlementAccountRequest {
	id?: number 
	accountId?: number 
	}
export interface KunlunMallServiceModelsMerchantCooperativeSettlementDetailResponseAccountModel {
	name?: string 
	bankName?: string 
	bankAccountNumber?: string 
	}
export interface KunlunMallServiceModelsMerchantInventorySkuListRequest {
	sortType?: string 
	pageSize?: number 
	searchText?: string 
	includeCommissionScheme?: boolean 
	parentMerchantId?: number 
	isSample?: boolean 
	sortField?: string 
	pageIndex?: number 
	categoryId?: number 
	commissionSchemeId?: number 
	}
export interface KunlunMerchantServiceModelsMerchantAccountDetailResponse {
	handBankCard?: string 
	isDefault?: boolean 
	name?: string 
	idCardNumber?: string 
	idCardBack?: string 
	bankCardBack?: string 
	stateName?: string 
	bankAccountNumber?: string 
	idCardFront?: string 
	bankCardFront?: string 
	email?: string 
	handIdCard?: string 
	state?: KunlunMerchantServiceEntitiesMerchantAccountState 
	id?: number 
	bankId?: string 
	mobile?: string 
	}
export interface KunlunMerchantServiceModelsMerchantCooperatorListItemBenefit {
	id?: string 
	name?: string 
	qty?: number 
	}
export interface KunlunMerchantServiceModelsMerchantMerchantInvitationInfoResponse {
	code?: string 
	image?: string 
	}
export interface KunlunBaseServiceModelsDictionaryModel {
	sort?: number 
	value?: number 
	text?: string 
	remark?: string 
	id?: number 
	module?: string 
	}
export interface KunlunBaseServiceModelsGetAreasResponse {
	countyList?: object 
	provinceList?: object 
	cityList?: object 
	}
export interface KunlunCommerceServiceModelsMerchantServiceListRequest {
	pageIndex?: number 
	searchText?: string 
	state?: KunlunServiceCoreCommerceStates 
	memberId?: number 
	sortType?: string 
	sortField?: string 
	pageSize?: number 
	type?: number 
	area?: KunlunServiceCoreModelsAreaModel 
	}
export interface KunlunMallServiceModelsMerchantPurchaseOrderDetailResponseOrderDetail {
	goodsId?: string 
	goodsName?: string 
	content?: any 
	price?: number 
	qty?: number 
	picture?: string 
	}
export interface KunlunMallServiceModelsMerchantStockInDetailResponse {
	serialNo?: string 
	state?: KunlunMallServiceEntitiesStockInState 
	stateName?: string 
	storageTime?: string 
	storageUserName?: string 
	confirmationUserName?: string 
	remark?: string 
	id?: string 
	stockroomId?: string 
	confirmationTime?: string 
	items?: KunlunMallServiceModelsMerchantStockInDetailResponseItem 
	}
export interface KunlunMerchantServiceModelsMerchantMerchantLoginRequest {
	code: string 
	mpCode: string 
	account: string 
	}
export interface KunlunMallServiceModelsMerchantProductCooperativeAgreementDetailResponse {
	agreementId?: number 
	purchasePrice?: number 
	totalPurchaseQty?: number 
	purchaseQty?: number 
	paymentAttachments?: string 
	serialNo?: string 
	paymentAmount?: number 
	stateName?: string 
	totalQty?: number 
	purchaseAmount?: number 
	paymentTime?: string 
	prices?: KunlunMallServiceModelsMerchantProductCooperativeAgreementDetailResponsePriceInfo 
	state?: KunlunMallServiceEntitiesCooperativeAgreementState 
	merchants?: KunlunMallServiceModelsMerchantProductCooperativeAgreementDetailResponseMerchantInfo 
	product?: KunlunMallServiceModelsMerchantCooperativeProductInfo 
	}
export interface KunlunMerchantServiceModelsMerchantCommissionSettlementApplicationListRequest {
	pageSize?: number 
	searchText?: string 
	state?: KunlunMerchantServiceEntitiesCommissionSettlementApplicationState 
	sortType?: string 
	sortField?: string 
	pageIndex?: number 
	}
export interface KunlunMerchantServiceModelsMerchantGoodsListRequest {
	pageIndex?: number 
	pageSize?: number 
	searchText?: string 
	type?: KunlunMerchantServiceEntitiesShopGoodsType 
	isOnline?: boolean 
	commissionSchemeId?: number 
	sortType?: string 
	sortField?: string 
	}
export interface KunlunOrderServiceModelsMerchantSetAccountStateRequest {
	id?: number 
	isEnabled?: boolean 
	}
export interface KunlunMallServiceModelsMerchantCooperativeSettlementDetailResponse {
	id?: number 
	state?: KunlunMallServiceEntitiesProductCooperativeSettlementState 
	stateName?: string 
	product?: KunlunMallServiceModelsMerchantCooperativeProductInfo 
	merchantName?: string 
	orders?: KunlunMallServiceModelsMerchantCooperativeSettlementDetailResponseOrderInfo 
	accountId?: number 
	account?: KunlunMallServiceModelsMerchantCooperativeSettlementDetailResponseAccountModel 
	creationTime?: string 
	confirmationTime?: string 
	paymentAttachments?: string 
	totalQty?: number 
	totalAmount?: number 
	paymentTime?: string 
	}
export interface KunlunMallServiceModelsMerchantGetProductListBySkuIdsRequest {
	isSales?: boolean 
	skuIds?: number 
	}
export interface KunlunMallServiceModelsMerchantInventoryListRequest {
	searchText?: string 
	categoryId?: number 
	sortType?: string 
	sortField?: string 
	pageIndex?: number 
	pageSize?: number 
	}
export interface KunlunMallServiceModelsMerchantStockroomListRequest {
	sortType?: string 
	sortField?: string 
	pageIndex?: number 
	pageSize?: number 
	searchText?: string 
	}
export interface KunlunMallServiceModelsMerchantGetDefaultPickupAddressRequest {
	merchantId?: number 
	}
export interface KunlunMerchantServiceModelsMerchantCooperatorDetailResponse {
	lat?: number 
	lng?: number 
	galleries?: string 
	introduction?: string 
	contactName?: string 
	contactNumber?: string 
	benefits?: KunlunMerchantServiceModelsMerchantCooperatorDetailResponseBenefit 
	id?: string 
	name?: string 
	areaName?: string 
	fullAreaName?: string 
	address?: string 
	industryNames?: string 
	}
export interface KunlunServiceCoreModelsSearchConditionModel {
	label?: string 
	field?: string 
	isArea?: boolean 
	areaLevel?: number 
	isSort?: boolean 
	items?: KunlunServiceCoreModelsSearchConditionItem 
	sortItems?: KunlunServiceCoreModelsSearchSortItem 
	}
export interface KunlunCommerceServiceModelsMerchantCommerceRequirementDetailResponse {
	merchantId?: string 
	memberId?: string 
	remark?: string 
	pictures?: string 
	publisherContactNumber?: string 
	state?: KunlunServiceCoreCommerceStates 
	stateName?: string 
	merchantName?: string 
	merchantContactNumber?: string 
	typeIcon?: string 
	content?: string 
	publishTime?: string 
	canTakeOff?: boolean 
	publisherName?: string 
	id?: string 
	merchantContactName?: string 
	fullAreaName?: string 
	types?: number 
	typeName?: string 
	name?: string 
	contactName?: string 
	contactNumber?: string 
	isEditable?: boolean 
	canPublish?: boolean 
	}
export interface KunlunMallServiceModelsMerchantSaveStockInRequest {
	stockroomId?: string 
	storageTime?: string 
	remark?: string 
	orderId?: number 
	items?: KunlunMallServiceModelsMerchantSaveStockInRequestItem 
	id?: string 
	}
export interface KunlunMemberServiceModelsMerchantCustomerListItem {
	id?: string 
	name?: string 
	teaLevelName?: string 
	teaTypeNames?: string 
	visits?: number 
	tastings?: number 
	isMember?: boolean 
	member?: KunlunMemberServiceModelsMerchantCustomerListItemMemberInfo 
	mobile?: string 
	creatorName?: string 
	principalName?: string 
	isMyMember?: boolean 
	}
export interface KunlunMerchantServiceModelsMerchantUpdateCommissionSettingsRequest {
	managerPercent?: number 
	positionId?: number 
	promoterLevel1Percent?: number 
	promoterLevel2Percent?: number 
	promoterGreaterThanLevel2Percent?: number 
	positionPercent?: number 
	}
export interface KunlunMerchantServiceModelsMerchantCouponListRequest {
	searchText?: string 
	state?: KunlunServiceCoreReceivedCouponStates 
	type?: KunlunServiceCoreCouponTypes 
	types?: KunlunServiceCoreCouponTypes 
	sortType?: string 
	sortField?: string 
	pageIndex?: number 
	pageSize?: number 
	}
export interface KunlunBaseServiceModelsLocationSuggestionRequest {
	keyword: string 
	cityName?: string 
	}
export interface KunlunMallServiceModelsMerchantPurchaseOrderListItemAddressInfo {
	fullAreaName?: string 
	address?: string 
	name?: string 
	mobile?: string 
	}
export interface KunlunMerchantServiceModelsMerchantChooseMerchantRequest {
	tempToken?: string 
	merchantId?: number 
	}
export interface KunlunMerchantServiceModelsMerchantCommissionSettingItem {
	label?: string 
	value?: number 
	fieldName?: string 
	}
export interface KunlunMerchantServiceModelsMerchantWithdrawalListItem {
	remark?: string 
	creationTime?: string 
	state?: number 
	stateName?: string 
	id?: string 
	amount?: number 
	accountName?: string 
	adminName?: string 
	}
export interface KunlunOrderServiceModelsMerchantAccountListItem {
	idCardFront?: string 
	handBankCard?: string 
	isDefault?: boolean 
	typeName?: string 
	stateName?: string 
	bankId?: string 
	bankCardFront?: string 
	bankCardBack?: string 
	isEnabled?: boolean 
	merchantName?: string 
	mobile?: string 
	id?: number 
	state?: KunlunServiceCoreWithdrawalAccountState 
	idCardBack?: string 
	name?: string 
	bankAccountNumber?: string 
	idCardNumber?: string 
	email?: string 
	handIdCard?: string 
	merchantAdminName?: string 
	bankName?: string 
	type?: KunlunServiceCoreWithdrawalAccountType 
	}
export interface KunlunMerchantServiceModelsMerchantWalletDetailResponse {
	balance?: number 
	purchaseBalance?: number 
	}
export interface KunlunMallServiceModelsMerchantCategoryNavigationItem {
	jumpParameters?: KunlunMallServiceEntitiesNavigationJumpParameterModel 
	children?: KunlunMallServiceModelsMerchantCategoryNavigationItem 
	name?: string 
	icon?: string 
	jumpType?: KunlunMallServiceEntitiesNavigationJumpType 
	}
export interface KunlunMallServiceModelsMerchantStockInListItemItem {
	productId?: string 
	skuId?: string 
	name?: string 
	spec?: string 
	picture?: string 
	qty?: number 
	}
export interface KunlunMallServiceModelsUserFavoriteRequest {
	skuId?: number 
	}
export interface KunlunMerchantServiceModelsMerchantCouponListItem {
	couponName?: string 
	amount?: number 
	goodsScopeName?: string 
	state?: KunlunServiceCoreReceivedCouponStates 
	instruction?: string 
	id?: string 
	beginTime?: string 
	endTime?: string 
	allowSuperposition?: boolean 
	stateName?: string 
	couponId?: string 
	}
export interface KunlunCommerceServiceModelsMerchantCommerceSummaryResponse {
	invitations?: any 
	services?: any 
	requirements?: any 
	}
export interface KunlunMallServiceModelsMerchantProductDetailResponseSku {
	skuId?: string 
	name?: string 
	price?: number 
	listPrice?: number 
	picture?: string 
	}
export interface KunlunMallServiceModelsMerchantStockOutListItemItem {
	qty?: number 
	productId?: string 
	skuId?: string 
	name?: string 
	spec?: string 
	picture?: string 
	}
export interface KunlunMerchantServiceModelsMerchantGoodsCommissionSchemeDetailResponse {
	id?: number 
	name?: string 
	remark?: string 
	isDefault?: boolean 
	settings?: KunlunMerchantServiceModelsMerchantCommissionSettingModel 
	}
export interface KunlunMallServiceModelsUserUpdateCartItem {
	id?: string 
	skuId?: number 
	qty?: number 
	}
export interface KunlunOrderServiceModelsAdminExpressCompanyModel {
	id?: string 
	name?: string 
	}
export interface KunlunMallServiceModelsMerchantSavePickupAddressRequest {
	name: string 
	mobile: string 
	area?: KunlunServiceCoreModelsAreaModel 
	address: string 
	isDefault?: boolean 
	id?: string 
	}
export interface KunlunMallServiceModelsMerchantProductListRequest {
	sortType?: string 
	pageIndex?: number 
	year?: number 
	isSales?: boolean 
	searchText?: string 
	sortField?: string 
	pageSize?: number 
	categoryId?: number 
	attributes?: object 
	minPrice?: number 
	maxPrice?: number 
	}
export interface KunlunMemberServiceModelsMerchantCustomerDetailResponse {
	id?: string 
	teaAttitude?: number 
	teaFrequency?: number 
	teaBrands?: number 
	isMember?: boolean 
	mobile?: string 
	teaTypes?: number 
	principalName?: string 
	firstName?: string 
	mobile2?: string 
	mobile3?: string 
	teaLevel?: number 
	remark?: string 
	creatorId?: string 
	creatorName?: string 
	lastName?: string 
	gender?: KunlunServiceCoreGender 
	teaScenes?: number 
	teaWays?: number 
	teaPeriod?: number 
	principalId?: string 
	}
export interface KunlunMerchantServiceModelsMerchantCommissionListItem {
	typeName?: string 
	percent?: number 
	totalAmount?: number 
	commissionAmount?: number 
	creationTime?: string 
	isSettled?: boolean 
	id?: number 
	sourceName?: string 
	}
export interface KunlunMallServiceModelsMerchantCooperativePickupListItem {
	qty?: number 
	finishTime?: string 
	state?: KunlunMallServiceEntitiesProductCooperativePickupState 
	stateName?: string 
	price?: number 
	product?: KunlunMallServiceModelsMerchantCooperativeProductInfo 
	id?: number 
	totalAmount?: number 
	applicationTime?: string 
	}
export interface KunlunMallServiceModelsMerchantSaveStockInRequestItem {
	skuId?: number 
	qty?: number 
	}
export interface KunlunMemberServiceModelsMerchantTastingListItem {
	state?: KunlunMemberServiceEntitiesTastingState 
	details?: KunlunMemberServiceModelsMerchantTastingListItemDetail 
	time?: string 
	adminId?: number 
	adminName?: string 
	stateName?: string 
	id?: number 
	customerIds?: string 
	customerNames?: string 
	}
export interface KunlunMerchantServiceModelsMerchantUpdateGoodsCommissionSchemeRequest {
	settings?: KunlunMerchantServiceModelsMerchantUpdateCommissionSettingsRequest 
	name: string 
	remark?: string 
	isDefault?: boolean 
	id?: number 
	}
export interface KunlunMallServiceModelsMerchantCooperativeInventoryListRequest {
	sortType?: string 
	sortField?: string 
	pageIndex?: number 
	pageSize?: number 
	searchText?: string 
	}
export interface KunlunMallServiceModelsMerchantCooperativeSettlementDetailResponseOrderInfo {
	orderId?: string 
	serialNo?: string 
	orderTime?: string 
	orderQty?: number 
	settlementQty?: number 
	settlementPrice?: number 
	settlementAmount?: number 
	product?: KunlunMallServiceModelsMerchantCooperativeProductInfo 
	}
export interface KunlunMerchantServiceModelsMerchantConfirmBenefitUsageRequest {
	memberId?: number 
	id?: string 
	benefitId?: number 
	}
export interface KunlunMerchantServiceModelsMerchantCooperatorListRequest {
	sortType?: string 
	sortField?: string 
	pageIndex?: number 
	pageSize?: number 
	searchText?: string 
	}
export interface KunlunMerchantServiceModelsMerchantMerchantAdminListRequest {
	sortType?: string 
	sortField?: string 
	pageIndex?: number 
	pageSize?: number 
	searchText?: string 
	isEnabled?: boolean 
	positionId?: number 
	}
export interface KunlunMerchantServiceModelsMerchantMerchantOverviewResponse {
	role?: KunlunCoreMerchantAdminRoles 
	picture?: string 
	balance?: number 
	coupons?: number 
	giftApplications?: number 
	adminName?: string 
	adminAccount?: string 
	merchantId?: string 
	merchantName?: string 
	admins?: number 
	adminId?: string 
	roleName?: string 
	}
export interface KunlunMerchantServiceModelsMerchantUpdateShopOrderCommissionSettingsRequest {
	promoterGreaterThanLevel2Percent?: number 
	positionPercent?: number 
	managerPercent?: number 
	type?: KunlunMerchantServiceEntitiesShopOrderCommissionSettingType 
	promoterLevel1Percent?: number 
	promoterLevel2Percent?: number 
	}
export interface KunlunMallServiceModelsMerchantCooperativeSettlementListRequest {
	sortType?: string 
	sortField?: string 
	pageIndex?: number 
	pageSize?: number 
	searchText?: string 
	}
export interface KunlunMemberServiceModelsMerchantVisitListItem {
	customerId?: string 
	customerName?: string 
	purpose?: string 
	result?: string 
	state?: KunlunMemberServiceEntitiesVisitState 
	stateName?: string 
	id?: number 
	plannerName?: string 
	planTime?: string 
	executorName?: string 
	executionTime?: string 
	typeName?: string 
	}
export interface KunlunOrderServiceModelsMerchantSaveAccountRequest {
	type?: KunlunServiceCoreWithdrawalAccountType 
	email: string 
	handBankCard: string 
	name: string 
	idCardBack: string 
	bankCardFront: string 
	bankCardBack: string 
	idCardNumber: string 
	bankId: string 
	bankAccountNumber: string 
	idCardFront: string 
	isDefault?: boolean 
	id?: number 
	mobile: string 
	handIdCard: string 
	isEnabled?: boolean 
	}
export interface KunlunBaseServiceModelsBankModel {
	id?: string 
	name?: string 
	shortName?: string 
	}
export interface KunlunMerchantServiceModelsMerchantGetBenefitQrCodeContentResponse {
	benefitName?: string 
	rules?: string 
	qty?: number 
	memberId?: string 
	memberName?: string 
	memberAvatar?: string 
	usedQty?: number 
	benefitId?: string 
	}
export interface KunlunMallServiceModelsMerchantGetPurchasePolicyListByMerchantRequest {
	merchantId?: number 
	}
export interface KunlunMallServiceModelsMerchantStockOutDetailResponse {
	stateName?: string 
	type?: KunlunServiceCoreStockOutType 
	outboundTime?: string 
	outboundUserName?: string 
	remark?: string 
	serialNo?: string 
	state?: KunlunMallServiceEntitiesStockOutState 
	confirmationTime?: string 
	confirmationUserName?: string 
	items?: KunlunMallServiceModelsMerchantStockOutDetailResponseItem 
	id?: string 
	stockroomId?: string 
	}
export interface KunlunMerchantServiceModelsMerchantSaveGoodsRequest {
	name: string 
	picture: string 
	type?: KunlunMerchantServiceEntitiesShopGoodsType 
	price?: number 
	id?: number 
	galleries?: string 
	listPrice?: number 
	isOnline?: boolean 
	description: string 
	}
export interface KunlunMallServiceModelsMerchantCooperativePickupListRequest {
	state?: KunlunMallServiceEntitiesProductCooperativePickupState 
	sortType?: string 
	sortField?: string 
	pageIndex?: number 
	pageSize?: number 
	searchText?: string 
	}
export interface KunlunMallServiceModelsMerchantInventoryListItem {
	skuId?: string 
	stockroomName?: string 
	categoryName?: string 
	year?: number 
	qty?: number 
	productId?: string 
	name?: string 
	picture?: string 
	spec?: string 
	}
export interface KunlunMallServiceModelsUserProductAttributeItemOption {
	id?: number 
	name?: string 
	}
export interface KunlunMerchantServiceModelsMerchantQueryReceiptStatusResponse {
	id?: string 
	memberName?: string 
	amount?: number 
	couponAmount?: number 
	}
export interface KunlunMemberServiceModelsMerchantVisitListRequest {
	searchText?: string 
	state?: KunlunMemberServiceEntitiesVisitState 
	type?: KunlunMemberServiceEntitiesVisitType 
	customerId?: number 
	sortType?: string 
	sortField?: string 
	pageIndex?: number 
	pageSize?: number 
	}
export interface KunlunMemberServiceModelsMerchantSaveMemberRequest {
	companyProducts?: string 
	mobile?: string 
	company?: string 
	industry?: number 
	id?: number 
	gender?: KunlunServiceCoreGender 
	area?: KunlunServiceCoreModelsAreaModel 
	nativePlace?: KunlunServiceCoreModelsAreaModel 
	position?: string 
	customerGroups?: string 
	isEnabled?: boolean 
	lastName?: string 
	area2?: KunlunServiceCoreModelsAreaModel 
	area3?: KunlunServiceCoreModelsAreaModel 
	servicesProvided?: string 
	firstName: string 
	address?: string 
	interest?: string 
	}
export interface KunlunMemberServiceModelsMerchantTastingListRequest {
	pageSize?: number 
	searchText?: string 
	customerId?: number 
	sortType?: string 
	sortField?: string 
	pageIndex?: number 
	}
export interface KunlunMerchantServiceModelsMerchantMembershipCardGiftListResponse {
	list?: KunlunMerchantServiceModelsMerchantMembershipCardGiftListItem 
	total?: number 
	underReview?: number 
	}
export interface KunlunMerchantServiceModelsMerchantSaveAccountRequest {
	type?: KunlunServiceCoreMerchantAccountType 
	email: string 
	idCardFront: string 
	bankCardFront: string 
	handBankCard: string 
	id?: number 
	idCardNumber: string 
	bankCardBack: string 
	name: string 
	bankId: string 
	bankAccountNumber: string 
	mobile: string 
	idCardBack: string 
	handIdCard: string 
	}
export interface KunlunMerchantServiceModelsMerchantShopOrderDetailResponsePaymentItem {
	method?: string 
	amount?: number 
	}
export interface KunlunMerchantServiceModelsMerchantGenerateMpQrCodeRequest {
	amount?: number 
	subject?: KunlunServiceCoreMerchantReceiptSubject 
	}
export interface KunlunCommerceServiceModelsMerchantSaveCommerceServiceRequest {
	pictures?: string 
	publish?: boolean 
	id?: number 
	memberId?: number 
	types?: number 
	content: string 
	contactNumber: string 
	publisherContactNumber: string 
	name?: string 
	contactName: string 
	publisherName: string 
	remark?: string 
	}
export interface KunlunMallServiceModelsMerchantProductCooperativeAgreementDetailRequest {
	agreementId?: number 
	}
export interface KunlunMallServiceModelsUserFavoriteListRequest {
	sortType?: string 
	sortField?: string 
	pageIndex?: number 
	pageSize?: number 
	searchText?: string 
	}
export interface KunlunMerchantServiceModelsMerchantCommissionSettlementApplicationDetailResponse {
	positionName?: string 
	year?: number 
	applicationTime?: string 
	state?: KunlunMerchantServiceEntitiesCommissionSettlementApplicationState 
	stateName?: string 
	approvalTime?: string 
	adminName?: string 
	month?: number 
	totalAmount?: number 
	rejectReason?: string 
	commissions?: KunlunMerchantServiceModelsMerchantCommissionListItem 
	id?: number 
	}
export interface KunlunMerchantServiceModelsMerchantEncodeReceiptRequest {
	amount?: number 
	subject?: KunlunServiceCoreMerchantReceiptSubject 
	}
export interface KunlunMerchantServiceModelsMerchantMembershipCardGiftListItem {
	cardId?: string 
	state?: number 
	stateName?: string 
	memberCompany?: string 
	id?: number 
	memberId?: string 
	memberName?: string 
	cardAmount?: number 
	memberLevel?: KunlunServiceCoreMemberLevels 
	memberLevelName?: string 
	memberPosition?: string 
	cardName?: string 
	applicationTime?: string 
	cardPrice?: number 
	approvalTime?: string 
	validityPeriod?: number 
	memberMobile?: string 
	}
export interface KunlunBaseServiceModelsWxSignatureRequest {
	noncestr?: string 
	timestamp?: number 
	url?: string 
	}
export interface KunlunCommerceServiceModelsMerchantRequirementListItem {
	typeName?: string 
	merchantName?: string 
	fullAreaName?: string 
	stateName?: string 
	id?: string 
	name?: string 
	typeIcon?: string 
	contactName?: string 
	publisherName?: string 
	publisherContactNumber?: string 
	merchantId?: string 
	memberName?: string 
	contactNumber?: string 
	publishTime?: string 
	content?: string 
	canContactCustomer?: boolean 
	state?: KunlunServiceCoreCommerceStates 
	}
export interface KunlunMallServiceModelsMerchantPurchasePolicyItem {
	discount?: number 
	remark?: string 
	id?: number 
	name?: string 
	}
export interface KunlunMallServiceModelsMerchantProductPolicyItem {
	balancePercent?: number 
	remark?: string 
	id?: number 
	name?: string 
	}
export interface KunlunMerchantServiceModelsMerchantMerchantDetailResponse {
	parkingLot?: boolean 
	contactNumber?: string 
	acreage?: number 
	rooms?: number 
	washroom?: boolean 
	floors?: number 
	restDays?: string 
	introduction?: string 
	members?: number 
	name?: string 
	contactName?: string 
	fullAreaName?: string 
	address?: string 
	id?: string 
	typeName?: string 
	industryNames?: string 
	galleries?: string 
	type?: KunlunServiceCoreMerchantTypes 
	businessTimeBegin?: string 
	businessTimeEnd?: string 
	isPartner?: boolean 
	}
export interface KunlunMerchantServiceModelsMerchantMyCommissionListRequest {
	pageIndex?: number 
	pageSize?: number 
	searchText?: string 
	isSettled?: boolean 
	sortType?: string 
	sortField?: string 
	}
export interface KunlunMallServiceModelsMerchantUpdateMerchantPolicyRequest {
	policyId?: number 
	merchantId?: number 
	balancePercent?: number 
	}
export interface KunlunMerchantServiceModelsMerchantMyCommissionSummaryRequest {
	year?: number 
	month?: number 
	}
export interface KunlunMerchantServiceModelsMerchantShopOrderListItem {
	creationTime?: string 
	state?: KunlunServiceCoreOrderStates 
	totalAmount?: number 
	actualAmount?: number 
	details?: KunlunMerchantServiceModelsMerchantShopOrderListItemOrderDetail 
	id?: string 
	serialNo?: string 
	memberName?: string 
	memberMobile?: string 
	stateName?: string 
	}
export interface KunlunMallServiceModelsUserFavoriteListItem {
	productId?: string 
	skuId?: string 
	picture?: string 
	title?: string 
	price?: number 
	listPrice?: number 
	}
export interface KunlunMallServiceModelsMerchantCreateCooperativePickupRequest {
	productSkuId?: number 
	qty?: number 
	addressId?: string 
	}
export interface KunlunMallServiceModelsMerchantCooperativeOrderListRequest {
	pageSize?: number 
	searchText?: string 
	sortType?: string 
	sortField?: string 
	pageIndex?: number 
	}
export interface KunlunMerchantServiceModelsMerchantCooperatorBenefitUsageListItem {
	memberAvatar?: string 
	memberLevel?: KunlunServiceCoreMemberLevels 
	creationTime?: string 
	benefitId?: string 
	benefitName?: string 
	rules?: string 
	memberId?: string 
	memberName?: string 
	}
export interface KunlunMerchantServiceModelsMerchantWithdrawRequest {
	remark?: string 
	type?: KunlunServiceCoreMerchantAccountType 
	amount?: number 
	accountId?: number 
	}
export interface KunlunBaseServiceModelsGeocoderRequest {
	radius?: number 
	pageSize?: number 
	pageIndex?: number 
	lat?: number 
	lng?: number 
	getPoi?: boolean 
	}
export interface KunlunBaseServiceModelsSendVerificationCodeRequest {
	type?: KunlunServiceCoreExtensionsVerificationCodeTypes 
	mobile?: string 
	}
export interface KunlunMallServiceModelsMerchantBuyRequest {
	merchantCouponIds?: number 
	items?: KunlunMallServiceModelsMerchantBuyRequestBuyItem 
	fromCart?: boolean 
	deliveryType?: KunlunMallServiceEntitiesPurchaseOrderDeliveryType 
	addressId?: string 
	}
export interface KunlunMerchantServiceModelsMerchantPayRequest {
	amount?: number 
	merchantCouponIds?: number 
	remark?: string 
	}
export interface KunlunMerchantServiceModelsMerchantPurchaseDepositRequest {
	amount?: number 
	}
export interface KunlunMerchantServiceModelsMerchantSetDefaultAccountRequest {
	id?: number 
	type?: KunlunServiceCoreMerchantAccountType 
	}
export interface KunlunMerchantServiceModelsMerchantSetGoodsCommissionSchemeRequest {
	goodsIds?: number 
	schemeId?: number 
	}
export interface AspireCoreModelsBaseSearchModel {
	pageIndex?: number 
	pageSize?: number 
	searchText?: string 
	sortType?: string 
	sortField?: string 
	}
export interface KunlunMallServiceModelsMerchantPickupAddressListItem {
	address?: string 
	isDefault?: boolean 
	id?: string 
	name?: string 
	cityName?: string 
	fullAreaName?: string 
	mobile?: string 
	provinceName?: string 
	countyName?: string 
	}
export interface KunlunMerchantServiceModelsMerchantMerchantAdminDetailResponse {
	positionId?: number 
	parentPromoterId?: string 
	isEnabled?: boolean 
	id?: string 
	account?: string 
	name?: string 
	role?: KunlunCoreMerchantAdminRoles 
	}
export interface KunlunOrderServiceModelsMerchantOrderListRequest {
	sortType?: string 
	sortField?: string 
	pageIndex?: number 
	pageSize?: number 
	searchText?: string 
	}
export interface KunlunBaseServiceModelsDictionaryRequest {
	module?: string 
	}
export interface KunlunMallServiceModelsMerchantInventorySkuListItem {
	categoryName?: string 
	listPrice?: number 
	isSample?: boolean 
	productId?: string 
	skuId?: string 
	spec?: string 
	year?: number 
	qty?: number 
	price?: number 
	commissionSchemeId?: number 
	commissionSchemeName?: string 
	name?: string 
	picture?: string 
	}
export interface KunlunMallServiceModelsMerchantSaveStockroomRequest {
	remark?: string 
	id?: string 
	name: string 
	}
export interface KunlunMerchantServiceModelsMerchantAccountListItem {
	stateName?: string 
	bankAccountNumber?: string 
	isDefault?: boolean 
	id?: number 
	name?: string 
	state?: KunlunMerchantServiceEntitiesMerchantAccountState 
	}
export interface KunlunMerchantServiceModelsMerchantManagedMerchantListItem {
	picture?: string 
	id?: string 
	name?: string 
	creationTime?: string 
	}
export interface KunlunServiceCoreModelsSearchSortItem {
	sortType?: string 
	value?: string 
	text?: string 
	sortField?: string 
	}
export interface KunlunMallServiceModelsMerchantGetPolicyListByMerchantRequest {
	merchantId?: number 
	}
export interface KunlunMallServiceModelsMerchantCooperativeInventoryListItem {
	year?: number 
	qty?: number 
	purchasePrice?: number 
	productId?: string 
	skuId?: string 
	picture?: string 
	name?: string 
	categoryName?: string 
	}
export interface KunlunMallServiceModelsMerchantPurchaseOrderDetailResponse {
	state?: KunlunServiceCoreOrderStates 
	stateName?: string 
	supplierName?: string 
	paymentTime?: string 
	expressCompanyName?: string 
	finishTime?: string 
	address?: KunlunMallServiceModelsMerchantPurchaseOrderDetailResponseAddressInfo 
	payments?: KunlunMallServiceModelsMerchantPurchaseOrderDetailResponsePaymentItem 
	purchaserName?: string 
	supplierId?: string 
	deliveryTypeName?: string 
	stockInId?: string 
	stockOutId?: string 
	trackingNumber?: string 
	details?: KunlunMallServiceModelsMerchantPurchaseOrderDetailResponseOrderDetail 
	id?: string 
	amount?: number 
	purchaserId?: string 
	remark?: string 
	creationTime?: string 
	attachments?: string 
	serialNo?: string 
	deliveryType?: KunlunMallServiceEntitiesPurchaseOrderDeliveryType 
	reason?: string 
	deliveryTime?: string 
	}
export interface KunlunMallServiceModelsMerchantStockroomModel {
	id?: string 
	name?: string 
	remark?: string 
	}
export interface KunlunMemberServiceModelsMerchantVisitDetailResponse {
	stateName?: string 
	customerName?: string 
	type?: KunlunMemberServiceEntitiesVisitType 
	executorName?: string 
	result?: string 
	executorId?: number 
	executionTime?: string 
	state?: KunlunMemberServiceEntitiesVisitState 
	id?: number 
	plannerId?: number 
	planTime?: string 
	purpose?: string 
	customerId?: string 
	typeName?: string 
	plannerName?: string 
	}
export interface KunlunMerchantServiceModelsMerchantShopOrderCommissionSettingModel {
	type?: KunlunMerchantServiceEntitiesShopOrderCommissionSettingType 
	typeName?: string 
	items?: KunlunMerchantServiceModelsMerchantCommissionSettingItem 
	}
export interface KunlunMerchantServiceModelsMerchantCommissionListRequest {
	sortType?: string 
	sortField?: string 
	pageIndex?: number 
	pageSize?: number 
	searchText?: string 
	adminId?: number 
	}
export interface KunlunMerchantServiceModelsMerchantQueryReceiptStatusRequest {
	content?: string 
	}
export interface KunlunOrderServiceModelsMerchantAccountListRequest {
	type?: KunlunServiceCoreWithdrawalAccountType 
	}
export interface KunlunMemberServiceModelsMerchantCustomerListRequest {
	sortType?: string 
	sortField?: string 
	pageIndex?: number 
	pageSize?: number 
	searchText?: string 
	teaLevel?: number 
	}
export interface KunlunMallServiceModelsMerchantPurchaseOrderReturnRequest {
	orderId?: number 
	reason: string 
	}
export interface KunlunMallServiceModelsMerchantStockOutListItem {
	stateName?: string 
	type?: KunlunServiceCoreStockOutType 
	typeName?: string 
	stockroomName?: string 
	outboundUserName?: string 
	confirmationTime?: string 
	confirmationUserName?: string 
	id?: string 
	items?: KunlunMallServiceModelsMerchantStockOutListItemItem 
	state?: KunlunMallServiceEntitiesStockOutState 
	outboundTime?: string 
	serialNo?: string 
	}
export interface KunlunMallServiceModelsUserAddToCartRequest {
	skuId?: number 
	qty?: number 
	}
export interface KunlunMemberServiceModelsMerchantTastingDetailResponseDetail {
	skuId?: number 
	productName?: string 
	spec?: string 
	picture?: string 
	qty?: number 
	comment?: string 
	}
export interface KunlunMerchantServiceModelsMerchantCommissionSettingModel {
	positionId?: number 
	positionName?: string 
	items?: KunlunMerchantServiceModelsMerchantCommissionSettingItem 
	}
export interface KunlunMemberServiceModelsMerchantSaveTastingRequestDetail {
	skuId?: number 
	qty?: number 
	comment?: string 
	}
export interface KunlunMerchantServiceModelsMerchantCreateGoodsCommissionSchemeRequest {
	name: string 
	remark?: string 
	isDefault?: boolean 
	}
export interface KunlunServiceCoreModelsSearchConditionItem {
	text?: string 
	value?: any 
	items?: KunlunServiceCoreModelsSearchConditionItem 
	}
export interface KunlunCommerceServiceModelsSharedCommerceTypeItem {
	id?: number 
	name?: string 
	icon?: string 
	sort?: number 
	children?: KunlunCommerceServiceModelsSharedCommerceTypeItem 
	}
export interface KunlunMallServiceModelsMerchantProductRecommendListItem {
	productId?: string 
	skuId?: string 
	picture?: string 
	title?: string 
	price?: number 
	listPrice?: number 
	}
export interface KunlunMallServiceModelsMerchantPurchaseOrderDetailResponseAddressInfo {
	provinceName?: string 
	cityName?: string 
	countyName?: string 
	fullAreaName?: string 
	address?: string 
	name?: string 
	mobile?: string 
	}
export interface KunlunMerchantServiceModelsMerchantCommissionSettlementApplicationListItem {
	adminName?: string 
	positionName?: string 
	applicationTime?: string 
	stateName?: string 
	approvalTime?: string 
	rejectReason?: string 
	id?: number 
	year?: number 
	month?: number 
	state?: KunlunMerchantServiceEntitiesCommissionSettlementApplicationState 
	totalAmount?: number 
	}
export interface KunlunMallServiceModelsMerchantPurchaseOrderListItemGoodsInfo {
	content?: any 
	price?: number 
	qty?: number 
	picture?: string 
	goodsId?: string 
	goodsName?: string 
	}
export interface KunlunMallServiceModelsMerchantStockInDetailResponseItem {
	qty?: number 
	productId?: string 
	skuId?: string 
	name?: string 
	spec?: string 
	picture?: string 
	price?: number 
	}
export interface KunlunMemberServiceModelsMerchantFinishVisitRequest {
	id?: number 
	executorId?: number 
	executionTime?: string 
	result: string 
	}
export interface KunlunCommerceServiceModelsSharedCommerceTypeRequest {
	showInShortcut?: boolean 
	}
export interface KunlunMallServiceModelsMerchantCategoryNavigationRequest {
	isHomePage?: boolean 
	}
export interface KunlunMallServiceModelsMerchantProductListItem {
	name?: string 
	listPrice?: number 
	price?: number 
	spec?: string 
	year?: number 
	isSample?: boolean 
	skuId?: string 
	picture?: string 
	categoryName?: string 
	age?: number 
	attributes?: object 
	productId?: string 
	}
export interface KunlunMallServiceModelsUserGetCategoryAttributeListRequest {
	categoryId?: number 
	selectable?: boolean 
	}
export interface KunlunMerchantServiceModelsMerchantMerchantLoginResponse {
	tempToken?: string 
	}
export interface KunlunMerchantServiceModelsMerchantAddressListItem {
	mobile?: string 
	countyName?: string 
	fullAreaName?: string 
	id?: string 
	provinceName?: string 
	cityName?: string 
	address?: string 
	isDefault?: boolean 
	name?: string 
	}
export interface KunlunMerchantServiceModelsMerchantGenerateMpQrCodeResponse {
	data?: string 
	content?: string 
	}
export interface KunlunMerchantServiceModelsMerchantPositionListItem {
	id?: number 
	name?: string 
	remark?: string 
	isCustom?: boolean 
	isEnabled?: boolean 
	}
export interface KunlunCommerceServiceModelsMerchantCommerceServiceDetailRequest {
	id?: number 
	isEdit?: boolean 
	}
export interface KunlunCommerceServiceModelsMerchantHandleInvitationRequest {
	id?: number 
	remark: string 
	}
export interface KunlunMerchantServiceModelsMerchantCouponGroupListResponse {
	available?: number 
	list?: KunlunMerchantServiceModelsMerchantCouponGroupListItem 
	}
export interface KunlunMerchantServiceModelsMerchantAddressDetailResponse {
	province?: string 
	cityName?: string 
	countyName?: string 
	name?: string 
	mobile?: string 
	area?: KunlunServiceCoreModelsAreaModel 
	provinceName?: string 
	city?: string 
	county?: string 
	address?: string 
	isDefault?: boolean 
	id?: string 
	}
export interface KunlunMerchantServiceModelsMerchantCooperatorBenefitListItem {
	id?: string 
	name?: string 
	rules?: string 
	levels?: object 
	remark?: string 
	usedQty?: number 
	isEnabled?: boolean 
	state?: KunlunMerchantServiceEntitiesCooperatorBenefitState 
	stateName?: string 
	}
export interface KunlunMerchantServiceModelsMerchantMembershipCardGiftListRequest {
	sortField?: string 
	pageIndex?: number 
	pageSize?: number 
	searchText?: string 
	state?: number 
	sortType?: string 
	}
export interface KunlunMerchantServiceModelsMerchantRejectCommissionSettlementApplicationRequest {
	id?: number 
	rejectReason: string 
	}
export interface KunlunMallServiceModelsMerchantPurchaseOrderListRequest {
	isSales?: boolean 
	state?: KunlunServiceCoreOrderStates 
	sortType?: string 
	sortField?: string 
	pageIndex?: number 
	pageSize?: number 
	searchText?: string 
	}
export interface KunlunMallServiceModelsMerchantUpdateCooperativePickupRequest {
	id?: number 
	qty?: number 
	addressId?: string 
	}
export interface KunlunMallServiceModelsUserCategoryListItem {
	id?: number 
	name?: string 
	sort?: number 
	}
export interface KunlunMerchantServiceModelsMerchantMyCommissionSummaryResponse {
	totalUnsettledAmount?: number 
	currentMonthUnsettledAmount?: number 
	}
export interface KunlunMerchantServiceModelsMerchantSaveCooperatorBenefitRequest {
	levels?: object 
	remark?: string 
	submit?: boolean 
	id?: number 
	cooperatorId?: number 
	name: string 
	rules: string 
	}
export interface KunlunMerchantServiceModelsMerchantShopOrderDetailResponseOrderDetail {
	picture?: string 
	goodsName?: string 
	content?: any 
	qty?: number 
	actualAmount?: number 
	isSample?: boolean 
	remark?: string 
	goodsId?: string 
	price?: number 
	isShopGoods?: boolean 
	isRoom?: boolean 
	}
export interface KunlunCommerceServiceModelsMerchantCommerceServiceDetailResponse {
	merchantId?: string 
	merchantContactNumber?: string 
	memberId?: string 
	publishTime?: string 
	contactName?: string 
	contactNumber?: string 
	publisherName?: string 
	isEditable?: boolean 
	canTakeOff?: boolean 
	remark?: string 
	pictures?: string 
	merchantName?: string 
	content?: string 
	stateName?: string 
	canPublish?: boolean 
	name?: string 
	types?: number 
	typeIcon?: string 
	id?: string 
	merchantContactName?: string 
	fullAreaName?: string 
	typeName?: string 
	publisherContactNumber?: string 
	state?: KunlunServiceCoreCommerceStates 
	}
export interface KunlunMallServiceModelsMerchantPickupAddressDetailResponse {
	name?: string 
	area?: KunlunServiceCoreModelsAreaModel 
	city?: string 
	county?: string 
	countyName?: string 
	isDefault?: boolean 
	id?: string 
	province?: string 
	provinceName?: string 
	cityName?: string 
	address?: string 
	mobile?: string 
	}
export interface KunlunMemberServiceModelsMerchantMemberDetailResponse {
	id?: string 
	merchantName?: string 
	interest?: string 
	companyProducts?: string 
	isMember?: boolean 
	area2?: KunlunServiceCoreModelsAreaModel 
	area3?: KunlunServiceCoreModelsAreaModel 
	levelName?: string 
	merchantId?: string 
	address?: string 
	firstName?: string 
	mobile?: string 
	position?: string 
	industry?: number 
	lastName?: string 
	gender?: KunlunServiceCoreGender 
	customerGroups?: string 
	servicesProvided?: string 
	name?: string 
	area?: KunlunServiceCoreModelsAreaModel 
	nativePlace?: KunlunServiceCoreModelsAreaModel 
	company?: string 
	industryNames?: string 
	isEnabled?: boolean 
	isMyMember?: boolean 
	}
export interface KunlunOrderServiceModelsMerchantAccountDetailResponse {
	handIdCard?: string 
	isDefault?: boolean 
	idCardNumber?: string 
	idCardFront?: string 
	idCardBack?: string 
	state?: KunlunServiceCoreWithdrawalAccountState 
	name?: string 
	mobile?: string 
	bankCardFront?: string 
	id?: number 
	typeName?: string 
	merchantName?: string 
	bankName?: string 
	type?: KunlunServiceCoreWithdrawalAccountType 
	bankId?: string 
	bankCardBack?: string 
	isEnabled?: boolean 
	merchantAdminName?: string 
	stateName?: string 
	bankAccountNumber?: string 
	email?: string 
	handBankCard?: string 
	}
export interface KunlunMerchantServiceModelsMerchantShopOrderListRequest {
	sortType?: string 
	sortField?: string 
	pageIndex?: number 
	pageSize?: number 
	searchText?: string 
	state?: KunlunServiceCoreOrderStates 
	customerId?: number 
	}
export interface KunlunMallServiceModelsMerchantProductDetailResponse {
	year?: number 
	attributes?: object 
	skus?: KunlunMallServiceModelsMerchantProductDetailResponseSku 
	galleries?: string 
	name?: string 
	categoryName?: string 
	age?: number 
	description?: string 
	id?: string 
	}
export interface KunlunMarketingServiceModelsMerchantMembershipCardListResponse {
	equities?: KunlunMarketingServiceModelsMerchantMembershipCardListResponseEquity 
	id?: string 
	name?: string 
	price?: number 
	amount?: number 
	picture?: string 
	validityPeriod?: number 
	}
export interface KunlunMerchantServiceModelsMerchantGoodsListItem {
	commissionSchemeName?: string 
	picture?: string 
	isOnline?: boolean 
	commissionSchemeId?: number 
	typeName?: string 
	price?: number 
	listPrice?: number 
	id?: string 
	name?: string 
	type?: KunlunMerchantServiceEntitiesShopGoodsType 
	}
export interface KunlunMerchantServiceModelsMerchantMerchantBasicInfoResponse {
	isKunlun?: boolean 
	lat?: number 
	lng?: number 
	isPartner?: boolean 
	id?: string 
	picture?: string 
	type?: KunlunServiceCoreMerchantTypes 
	typeName?: string 
	fullAreaName?: string 
	address?: string 
	contactName?: string 
	contactNumber?: string 
	name?: string 
	}
export interface KunlunMerchantServiceModelsMerchantMerchantSubordinateRequest {
	sortField?: string 
	pageIndex?: number 
	searchText?: string 
	area?: KunlunServiceCoreModelsAreaModel 
	type?: KunlunServiceCoreMerchantTypes 
	sortType?: string 
	pageSize?: number 
	industry?: number 
	isKunlun?: boolean 
	}
export interface KunlunOrderServiceModelsMerchantOrderListItemOrderDetail {
	picture?: string 
	policyName?: string 
	settlementAmount?: number 
	goodsId?: string 
	goodsName?: string 
	content?: any 
	price?: number 
	qty?: number 
	}
export interface KunlunMallServiceModelsMerchantStockOutListRequest {
	searchText?: string 
	sortType?: string 
	sortField?: string 
	pageIndex?: number 
	pageSize?: number 
	}
export interface KunlunMemberServiceModelsMerchantTastingListItemDetail {
	comment?: string 
	skuId?: number 
	productName?: string 
	spec?: string 
	picture?: string 
	qty?: number 
	}
export interface KunlunOrderServiceModelsMerchantOrderListItem {
	actualAmount?: number 
	details?: KunlunOrderServiceModelsMerchantOrderListItemOrderDetail 
	serialNo?: string 
	creationTime?: string 
	state?: KunlunServiceCoreOrderStates 
	stateName?: string 
	amount?: number 
	id?: string 
	type?: KunlunServiceCoreOrderTypes 
	typeName?: string 
	}
export interface AspireCoreModelsResult$1__KunlunMerchantServiceModelsMerchantMyCommissionSummaryResponseKunlunMerchantService {
	msg?: string 
	success?: boolean 
	model?: KunlunMerchantServiceModelsMerchantMyCommissionSummaryResponse 
	errCode?: string 
	}
export interface AspireCoreModelsResult$1__SystemCollectionsGenericList$1__KunlunMerchantServiceModelsMerchantAccountListItemKunlunMerchantService {
	msg?: string 
	success?: boolean 
	model?: KunlunMerchantServiceModelsMerchantAccountListItem 
	errCode?: string 
	}
export interface AspireCoreModelsListModel$1__KunlunMallServiceModelsMerchantCooperativeOrderListItemKunlunMallService {
	total?: number 
	list?: KunlunMallServiceModelsMerchantCooperativeOrderListItem 
	}
export interface AspireCoreModelsResult$1__KunlunMerchantServiceModelsMerchantAddressDetailResponseKunlunMerchantService {
	success?: boolean 
	model?: KunlunMerchantServiceModelsMerchantAddressDetailResponse 
	errCode?: string 
	msg?: string 
	}
export interface SystemValueTuple$2__SystemInt32_SystemInt32 {
	}
export interface AspireCoreModelsResult$1__KunlunMerchantServiceModelsMerchantPurchaseDepositResponseKunlunMerchantService {
	model?: KunlunMerchantServiceModelsMerchantPurchaseDepositResponse 
	errCode?: string 
	msg?: string 
	success?: boolean 
	}
export interface AspireCoreModelsListModel$1__KunlunMallServiceModelsMerchantCooperativePickupListItemKunlunMallService {
	list?: KunlunMallServiceModelsMerchantCooperativePickupListItem 
	total?: number 
	}
export interface AspireCoreModelsListModel$1__KunlunMemberServiceModelsMerchantTastingListItemKunlunMemberService {
	total?: number 
	list?: KunlunMemberServiceModelsMerchantTastingListItem 
	}
export interface AspireCoreModelsResult$1__SystemCollectionsGenericList$1__KunlunMerchantServiceModelsMerchantCommissionSettingModelKunlunMerchantService {
	msg?: string 
	success?: boolean 
	model?: KunlunMerchantServiceModelsMerchantCommissionSettingModel 
	errCode?: string 
	}
export interface AspireCoreModelsResult$1__SystemCollectionsGenericList$1__KunlunMerchantServiceModelsMerchantPositionListItemKunlunMerchantService {
	msg?: string 
	success?: boolean 
	model?: KunlunMerchantServiceModelsMerchantPositionListItem 
	errCode?: string 
	}
export interface AspireCoreModelsResult$1__SystemCollectionsGenericList$1__SystemDecimal {
	errCode?: string 
	msg?: string 
	success?: boolean 
	model?: number 
	}
export interface AspireCoreModelsResult$1__KunlunMerchantServiceModelsMerchantMembershipCardGiftListResponseKunlunMerchantService {
	success?: boolean 
	model?: KunlunMerchantServiceModelsMerchantMembershipCardGiftListResponse 
	errCode?: string 
	msg?: string 
	}
export interface AspireCoreModelsListModel$1__KunlunMerchantServiceModelsMerchantCooperatorBenefitUsageListItemKunlunMerchantService {
	list?: KunlunMerchantServiceModelsMerchantCooperatorBenefitUsageListItem 
	total?: number 
	}
export interface AspireCoreModelsListModel$1__KunlunCommerceServiceModelsMerchantRequirementListItemKunlunCommerceService {
	list?: KunlunCommerceServiceModelsMerchantRequirementListItem 
	total?: number 
	}
export interface AspireCoreModelsResult$1__AspireCoreModelsListModel$1__KunlunMemberServiceModelsMerchantCustomerListItemKunlunMemberServiceAspireCore {
	model?: any 
	errCode?: string 
	msg?: string 
	success?: boolean 
	}
export interface AspireCoreModelsResult$1__KunlunMerchantServiceModelsMerchantCommissionSettlementApplicationDetailResponseKunlunMerchantService {
	success?: boolean 
	model?: KunlunMerchantServiceModelsMerchantCommissionSettlementApplicationDetailResponse 
	errCode?: string 
	msg?: string 
	}
export interface AspireCoreModelsListModel$1__KunlunMallServiceModelsUserFavoriteListItemKunlunMallService {
	list?: KunlunMallServiceModelsUserFavoriteListItem 
	total?: number 
	}
export interface AspireCoreModelsResult$1__AspireCoreModelsListModel$1__KunlunMemberServiceModelsMerchantMemberListResponseKunlunMemberServiceAspireCore {
	msg?: string 
	success?: boolean 
	model?: any 
	errCode?: string 
	}
export interface AspireCoreModelsResult$1__KunlunMerchantServiceModelsMerchantMerchantDetailResponseKunlunMerchantService {
	msg?: string 
	success?: boolean 
	model?: KunlunMerchantServiceModelsMerchantMerchantDetailResponse 
	errCode?: string 
	}
export interface AspireCoreModelsResult$1__AspireCoreModelsListModel$1__KunlunMerchantServiceModelsMerchantMerchantSubordinateItemKunlunMerchantServiceAspireCore {
	msg?: string 
	success?: boolean 
	model?: any 
	errCode?: string 
	}
export interface AspireCoreModelsResult$1__SystemBoolean {
	msg?: string 
	success?: boolean 
	model?: boolean 
	errCode?: string 
	}
export interface AspireCoreModelsListModel$1__KunlunMerchantServiceModelsMerchantCooperatorListItemKunlunMerchantService {
	list?: KunlunMerchantServiceModelsMerchantCooperatorListItem 
	total?: number 
	}
export interface AspireCoreModelsListModel$1__KunlunCommerceServiceModelsMerchantServiceListItemKunlunCommerceService {
	list?: KunlunCommerceServiceModelsMerchantServiceListItem 
	total?: number 
	}
export interface KunlunServiceCoreModelsBaseIdModel$1__SystemInt32 {
	id?: number 
	}
export interface AspireCoreModelsResult$1__SystemString__ {
	msg?: string 
	success?: boolean 
	model?: string 
	errCode?: string 
	}
export interface AspireCoreModelsResult$1__KunlunMerchantServiceModelsMerchantCooperatorBenefitListItemKunlunMerchantService {
	msg?: string 
	success?: boolean 
	model?: KunlunMerchantServiceModelsMerchantCooperatorBenefitListItem 
	errCode?: string 
	}
export interface AspireCoreModelsResult$1__SystemCollectionsGenericList$1__KunlunMerchantServiceModelsMerchantUnsettledCommissionListItemKunlunMerchantService {
	msg?: string 
	success?: boolean 
	model?: KunlunMerchantServiceModelsMerchantUnsettledCommissionListItem 
	errCode?: string 
	}
export interface AspireCoreModelsListModel$1__KunlunMallServiceModelsMerchantProductListItemKunlunMallService {
	list?: KunlunMallServiceModelsMerchantProductListItem 
	total?: number 
	}
export interface AspireCoreModelsResult$1__KunlunMerchantServiceModelsMerchantGoodsCommissionSchemeDetailResponseKunlunMerchantService {
	msg?: string 
	success?: boolean 
	model?: KunlunMerchantServiceModelsMerchantGoodsCommissionSchemeDetailResponse 
	errCode?: string 
	}
export interface KunlunServiceCoreModelsBaseIdModel$1__SystemInt64 {
	id?: number 
	}
export interface AspireCoreModelsResult$1__KunlunMerchantServiceModelsMerchantMerchantLoginResponseKunlunMerchantService {
	msg?: string 
	success?: boolean 
	model?: KunlunMerchantServiceModelsMerchantMerchantLoginResponse 
	errCode?: string 
	}
export interface AspireCoreModelsResult$1__KunlunMerchantServiceModelsMerchantShopOrderDetailResponseKunlunMerchantService {
	msg?: string 
	success?: boolean 
	model?: KunlunMerchantServiceModelsMerchantShopOrderDetailResponse 
	errCode?: string 
	}
export interface AspireCoreModelsResult$1__AspireCoreModelsListModel$1__KunlunMerchantServiceModelsMerchantWithdrawalListItemKunlunMerchantServiceAspireCore {
	errCode?: string 
	msg?: string 
	success?: boolean 
	model?: any 
	}
export interface AspireCoreModelsResult$1__KunlunMerchantServiceModelsMerchantMerchantInvitationInfoResponseKunlunMerchantService {
	msg?: string 
	success?: boolean 
	model?: KunlunMerchantServiceModelsMerchantMerchantInvitationInfoResponse 
	errCode?: string 
	}
export interface AspireCoreModelsResult$1__SystemCollectionsGenericList$1__KunlunBaseServiceModelsDictionaryModelKunlunBaseService {
	msg?: string 
	success?: boolean 
	model?: KunlunBaseServiceModelsDictionaryModel 
	errCode?: string 
	}
export interface AspireCoreModelsResult$1__KunlunBaseServiceModelsGlobalSettingsModelKunlunBaseService {
	errCode?: string 
	msg?: string 
	success?: boolean 
	model?: KunlunBaseServiceModelsGlobalSettingsModel 
	}
export interface AspireCoreModelsResult$1__KunlunMerchantServiceModelsMerchantAccountDetailResponseKunlunMerchantService {
	success?: boolean 
	model?: KunlunMerchantServiceModelsMerchantAccountDetailResponse 
	errCode?: string 
	msg?: string 
	}
export interface AspireCoreModelsListModel$1__KunlunOrderServiceModelsMerchantOrderListItemKunlunOrderService {
	list?: KunlunOrderServiceModelsMerchantOrderListItem 
	total?: number 
	}
export interface AspireCoreModelsResult$1__KunlunMerchantServiceModelsMerchantPositionDetailResponseKunlunMerchantService {
	msg?: string 
	success?: boolean 
	model?: KunlunMerchantServiceModelsMerchantPositionDetailResponse 
	errCode?: string 
	}
export interface AspireCoreModelsResult$1__AspireCoreModelsListModel$1__KunlunMerchantServiceModelsMerchantCommissionListItemKunlunMerchantServiceAspireCore {
	model?: any 
	errCode?: string 
	msg?: string 
	success?: boolean 
	}
export interface AspireCoreModelsResult$1__AspireCoreModelsListModel$1__KunlunMerchantServiceModelsMerchantGoodsListItemKunlunMerchantServiceAspireCore {
	model?: any 
	errCode?: string 
	msg?: string 
	success?: boolean 
	}
export interface AspireCoreModelsListModel$1__KunlunMemberServiceModelsMerchantMemberListResponseKunlunMemberService {
	list?: KunlunMemberServiceModelsMerchantMemberListResponse 
	total?: number 
	}
export interface AspireCoreModelsResult$1__AspireCoreModelsListModel$1__KunlunMemberServiceModelsMerchantVisitListItemKunlunMemberServiceAspireCore {
	msg?: string 
	success?: boolean 
	model?: any 
	errCode?: string 
	}
export interface AspireCoreModelsResult$1__KunlunMerchantServiceModelsMerchantWalletDetailResponseKunlunMerchantService {
	msg?: string 
	success?: boolean 
	model?: KunlunMerchantServiceModelsMerchantWalletDetailResponse 
	errCode?: string 
	}
export interface AspireCoreModelsResult$1__KunlunMerchantServiceModelsMerchantMerchantBasicInfoResponseKunlunMerchantService {
	msg?: string 
	success?: boolean 
	model?: KunlunMerchantServiceModelsMerchantMerchantBasicInfoResponse 
	errCode?: string 
	}
export interface AspireCoreModelsListModel$1__KunlunMemberServiceModelsMerchantVisitListItemKunlunMemberService {
	list?: KunlunMemberServiceModelsMerchantVisitListItem 
	total?: number 
	}
export interface AspireCoreModelsResult$1__AspireCoreModelsListModel$1__KunlunMerchantServiceModelsMerchantBillListItemKunlunMerchantServiceAspireCore {
	model?: any 
	errCode?: string 
	msg?: string 
	success?: boolean 
	}
export interface AspireCoreModelsListModel$1__KunlunMallServiceModelsMerchantInventorySkuListItemKunlunMallService {
	list?: KunlunMallServiceModelsMerchantInventorySkuListItem 
	total?: number 
	}
export interface AspireCoreModelsResult$1__KunlunMerchantServiceModelsMerchantMerchantAdminDetailResponseKunlunMerchantService {
	model?: KunlunMerchantServiceModelsMerchantMerchantAdminDetailResponse 
	errCode?: string 
	msg?: string 
	success?: boolean 
	}
export interface AspireCoreModelsListModel$1__KunlunMerchantServiceModelsMerchantMerchantSubordinateItemKunlunMerchantService {
	list?: KunlunMerchantServiceModelsMerchantMerchantSubordinateItem 
	total?: number 
	}
export interface AspireCoreModelsResult$1__SystemCollectionsGenericList$1__KunlunBaseServiceModelsIndustryModelKunlunBaseService {
	msg?: string 
	success?: boolean 
	model?: KunlunBaseServiceModelsIndustryModel 
	errCode?: string 
	}
export interface AspireCoreModelsResult$1__SystemGuid {
	msg?: string 
	success?: boolean 
	model?: string 
	errCode?: string 
	}
export interface AspireCoreModelsResult$1__KunlunMerchantServiceModelsMerchantQueryReceiptStatusResponseKunlunMerchantService {
	errCode?: string 
	msg?: string 
	success?: boolean 
	model?: KunlunMerchantServiceModelsMerchantQueryReceiptStatusResponse 
	}
export interface AspireCoreModelsResult$1__KunlunMerchantServiceModelsMerchantChooseMerchantResponseKunlunMerchantService {
	msg?: string 
	success?: boolean 
	model?: KunlunMerchantServiceModelsMerchantChooseMerchantResponse 
	errCode?: string 
	}
export interface AspireCoreModelsResult$1__KunlunMerchantServiceModelsMerchantGetBenefitQrCodeContentResponseKunlunMerchantService {
	msg?: string 
	success?: boolean 
	model?: KunlunMerchantServiceModelsMerchantGetBenefitQrCodeContentResponse 
	errCode?: string 
	}
export interface AspireCoreModelsListModel$1__KunlunMallServiceModelsMerchantPurchaseOrderListItemKunlunMallService {
	total?: number 
	list?: KunlunMallServiceModelsMerchantPurchaseOrderListItem 
	}
export interface AspireCoreModelsResult$1__KunlunMerchantServiceModelsMerchantGenerateMpQrCodeResponseKunlunMerchantService {
	msg?: string 
	success?: boolean 
	model?: KunlunMerchantServiceModelsMerchantGenerateMpQrCodeResponse 
	errCode?: string 
	}
export interface AspireCoreModelsResult$1__AspireCoreModelsListModel$1__KunlunMerchantServiceModelsMerchantCooperatorBenefitUsageListItemKunlunMerchantServiceAspireCore {
	msg?: string 
	success?: boolean 
	model?: any 
	errCode?: string 
	}
export interface AspireCoreModelsListModel$1__KunlunMallServiceModelsMerchantInventoryListItemKunlunMallService {
	list?: KunlunMallServiceModelsMerchantInventoryListItem 
	total?: number 
	}
export interface AspireCoreModelsResult$1__KunlunMerchantServiceModelsMerchantCouponListResponseKunlunMerchantService {
	msg?: string 
	success?: boolean 
	model?: KunlunMerchantServiceModelsMerchantCouponListResponse 
	errCode?: string 
	}
export interface AspireCoreModelsResult$1__SystemInt32 {
	msg?: string 
	success?: boolean 
	model?: number 
	errCode?: string 
	}
export interface AspireCoreModelsResult$1__KunlunMerchantServiceModelsMerchantManagedMerchantListResponseKunlunMerchantService {
	model?: KunlunMerchantServiceModelsMerchantManagedMerchantListItem 
	errCode?: string 
	msg?: string 
	success?: boolean 
	}
export interface AspireCoreModelsResult$1__KunlunMerchantServiceModelsMerchantMerchantAdminListResponseKunlunMerchantService {
	errCode?: string 
	msg?: string 
	success?: boolean 
	model?: KunlunMerchantServiceModelsMerchantMerchantAdminListResponse 
	}
export interface KunlunServiceCoreModelsBaseIdModel$1__SystemGuid {
	id?: string 
	}
export interface AspireCoreModelsListModel$1__KunlunMallServiceModelsMerchantProductCooperativeAgreementListItemKunlunMallService {
	total?: number 
	list?: KunlunMallServiceModelsMerchantProductCooperativeAgreementListItem 
	}
export interface AspireCoreModelsResult$1__KunlunMerchantServiceModelsMerchantCooperatorDetailResponseKunlunMerchantService {
	msg?: string 
	success?: boolean 
	model?: KunlunMerchantServiceModelsMerchantCooperatorDetailResponse 
	errCode?: string 
	}
export interface AspireCoreModelsListModel$1__KunlunMallServiceModelsMerchantCooperativeInventoryListItemKunlunMallService {
	list?: KunlunMallServiceModelsMerchantCooperativeInventoryListItem 
	total?: number 
	}
export interface AspireCoreModelsResult$1__SystemDecimal {
	success?: boolean 
	model?: number 
	errCode?: string 
	msg?: string 
	}
export interface AspireCoreModelsResult$1__KunlunMerchantServiceModelsMerchantGoodsDetailResponseKunlunMerchantService {
	msg?: string 
	success?: boolean 
	model?: KunlunMerchantServiceModelsMerchantGoodsDetailResponse 
	errCode?: string 
	}
export interface AspireCoreModelsResult$1__AspireCoreModelsListModel$1__KunlunMerchantServiceModelsMerchantCooperatorListItemKunlunMerchantServiceAspireCore {
	model?: any 
	errCode?: string 
	msg?: string 
	success?: boolean 
	}
export interface AspireCoreModelsListModel$1__KunlunMallServiceModelsMerchantCooperativeSettlementListItemKunlunMallService {
	list?: KunlunMallServiceModelsMerchantCooperativeSettlementListItem 
	total?: number 
	}
export interface AspireCoreModelsResult$1__SystemCollectionsGenericList$1__KunlunMarketingServiceModelsMerchantMembershipCardListResponseKunlunMarketingService {
	msg?: string 
	success?: boolean 
	model?: KunlunMarketingServiceModelsMerchantMembershipCardListResponse 
	errCode?: string 
	}
export interface AspireCoreModelsResult$1__AspireCoreModelsListModel$1__KunlunMerchantServiceModelsMerchantCommissionSettlementApplicationListItemKunlunMerchantServiceAspireCore {
	msg?: string 
	success?: boolean 
	model?: any 
	errCode?: string 
	}
export interface AspireCoreModelsResult$1__KunlunBaseServiceModelsGetAreasResponseKunlunBaseService {
	success?: boolean 
	model?: KunlunBaseServiceModelsGetAreasResponse 
	errCode?: string 
	msg?: string 
	}
export interface AspireCoreModelsResult$1__KunlunMerchantServiceModelsMerchantCouponGroupListResponseKunlunMerchantService {
	msg?: string 
	success?: boolean 
	model?: KunlunMerchantServiceModelsMerchantCouponGroupListResponse 
	errCode?: string 
	}
export interface AspireCoreModelsResult$1__SystemCollectionsGenericList$1__KunlunMerchantServiceModelsMerchantPartnerParentListItemKunlunMerchantService {
	errCode?: string 
	msg?: string 
	success?: boolean 
	model?: KunlunMerchantServiceModelsMerchantPartnerParentListItem 
	}
export interface AspireCoreModelsResult$1__AspireCoreModelsListModel$1__KunlunMerchantServiceModelsMerchantPurchaseBillListItemKunlunMerchantServiceAspireCore {
	msg?: string 
	success?: boolean 
	model?: any 
	errCode?: string 
	}
export interface AspireCoreModelsListModel$1__KunlunMerchantServiceModelsMerchantPurchaseBillListItemKunlunMerchantService {
	list?: KunlunMerchantServiceModelsMerchantPurchaseBillListItem 
	total?: number 
	}
export interface AspireCoreModelsListModel$1__KunlunMemberServiceModelsMerchantCustomerListItemKunlunMemberService {
	list?: KunlunMemberServiceModelsMerchantCustomerListItem 
	total?: number 
	}
export interface AspireCoreModelsResult$1__SystemCollectionsGenericList$1__KunlunBaseServiceModelsBankModelKunlunBaseService {
	msg?: string 
	success?: boolean 
	model?: KunlunBaseServiceModelsBankModel 
	errCode?: string 
	}
export interface AspireCoreModelsListModel$1__KunlunMerchantServiceModelsMerchantGoodsListItemKunlunMerchantService {
	total?: number 
	list?: KunlunMerchantServiceModelsMerchantGoodsListItem 
	}
export interface AspireCoreModelsResult$1__SystemString {
	errCode?: string 
	msg?: string 
	success?: boolean 
	model?: string 
	}
export interface AspireCoreModelsResult$1__KunlunMemberServiceModelsMerchantCustomerDetailResponseKunlunMemberService {
	msg?: string 
	success?: boolean 
	model?: KunlunMemberServiceModelsMerchantCustomerDetailResponse 
	errCode?: string 
	}
export interface AspireCoreModelsResult$1__SystemCollectionsGenericDictionary$2__SystemString_SystemCollectionsGenericList$1__KunlunBaseServiceModelsDictionaryModelKunlunBaseService {
	errCode?: string 
	msg?: string 
	success?: boolean 
	model?: object 
	}
export interface AspireCoreModelsListModel$1__KunlunMerchantServiceModelsMerchantCommissionListItemKunlunMerchantService {
	total?: number 
	list?: KunlunMerchantServiceModelsMerchantCommissionListItem 
	}
export interface AspireCoreModelsResult$1__KunlunMerchantServiceModelsMerchantAddressListItemKunlunMerchantService {
	success?: boolean 
	model?: KunlunMerchantServiceModelsMerchantAddressListItem 
	errCode?: string 
	msg?: string 
	}
export interface AspireCoreModelsListModel$1__KunlunMallServiceModelsMerchantStockInListItemKunlunMallService {
	list?: KunlunMallServiceModelsMerchantStockInListItem 
	total?: number 
	}
export interface AspireCoreModelsResult$1__AspireCoreModelsListModel$1__KunlunMemberServiceModelsMerchantTastingListItemKunlunMemberServiceAspireCore {
	msg?: string 
	success?: boolean 
	model?: any 
	errCode?: string 
	}
export interface AspireCoreModelsResult$1__SystemCollectionsGenericList$1__KunlunBaseServiceModelsBrandModelKunlunBaseService {
	model?: KunlunBaseServiceModelsBrandModel 
	errCode?: string 
	msg?: string 
	success?: boolean 
	}
export interface AspireCoreModelsResult$1__SystemObject__ {
	model?: any 
	errCode?: string 
	msg?: string 
	success?: boolean 
	}
export interface AspireCoreModelsResult$1__SystemCollectionsGenericList$1__KunlunMerchantServiceModelsMerchantShopOrderCommissionSettingModelKunlunMerchantService {
	msg?: string 
	success?: boolean 
	model?: KunlunMerchantServiceModelsMerchantShopOrderCommissionSettingModel 
	errCode?: string 
	}
export interface AspireCoreModelsResult$1__KunlunMerchantServiceModelsMerchantMerchantOverviewResponseKunlunMerchantService {
	msg?: string 
	success?: boolean 
	model?: KunlunMerchantServiceModelsMerchantMerchantOverviewResponse 
	errCode?: string 
	}
export interface AspireCoreModelsResult$1__AspireCoreModelsListModel$1__KunlunMerchantServiceModelsMerchantGoodsCommissionSchemeModelKunlunMerchantServiceAspireCore {
	msg?: string 
	success?: boolean 
	model?: any 
	errCode?: string 
	}
export interface AspireCoreModelsListModel$1__KunlunMerchantServiceModelsMerchantBillListItemKunlunMerchantService {
	list?: KunlunMerchantServiceModelsMerchantBillListItem 
	total?: number 
	}
export interface AspireCoreModelsResult$1__SystemCollectionsGenericIDictionary$2__SystemString_SystemString {
	success?: boolean 
	model?: object 
	errCode?: string 
	msg?: string 
	}
export interface AspireCoreModelsListModel$1__KunlunMerchantServiceModelsMerchantCommissionSettlementApplicationListItemKunlunMerchantService {
	list?: KunlunMerchantServiceModelsMerchantCommissionSettlementApplicationListItem 
	total?: number 
	}
export interface AspireCoreModelsListModel$1__KunlunMerchantServiceModelsMerchantWithdrawalListItemKunlunMerchantService {
	list?: KunlunMerchantServiceModelsMerchantWithdrawalListItem 
	total?: number 
	}
export interface AspireCoreModelsResult$1__KunlunMemberServiceModelsMerchantTastingDetailResponseKunlunMemberService {
	msg?: string 
	success?: boolean 
	model?: KunlunMemberServiceModelsMerchantTastingDetailResponse 
	errCode?: string 
	}
export interface KunlunServiceCoreModelsBaseIdModel$1__SystemString {
	id?: string 
	}
export interface AspireCoreModelsListModel$1__KunlunMerchantServiceModelsMerchantShopOrderListItemKunlunMerchantService {
	list?: KunlunMerchantServiceModelsMerchantShopOrderListItem 
	total?: number 
	}
export interface AspireCoreModelsResult$1__SystemByte__ {
	msg?: string 
	success?: boolean 
	model?: string 
	errCode?: string 
	}
export interface AspireCoreModelsResult$1__SystemCollectionsGenericList$1__KunlunServiceCoreModelsSearchConditionModelKunlunServiceShared {
	msg?: string 
	success?: boolean 
	model?: KunlunServiceCoreModelsSearchConditionModel 
	errCode?: string 
	}
export interface AspireCoreModelsListModel$1__KunlunMerchantServiceModelsMerchantGoodsCommissionSchemeModelKunlunMerchantService {
	list?: KunlunMerchantServiceModelsMerchantGoodsCommissionSchemeModel 
	total?: number 
	}
export interface AspireCoreModelsListModel$1__KunlunMallServiceModelsMerchantStockroomModelKunlunMallService {
	list?: KunlunMallServiceModelsMerchantStockroomModel 
	total?: number 
	}
export interface AspireCoreModelsListModel$1__KunlunMallServiceModelsMerchantStockOutListItemKunlunMallService {
	list?: KunlunMallServiceModelsMerchantStockOutListItem 
	total?: number 
	}
export interface AspireCoreModelsResult$1__KunlunMemberServiceModelsMerchantVisitDetailResponseKunlunMemberService {
	msg?: string 
	success?: boolean 
	model?: KunlunMemberServiceModelsMerchantVisitDetailResponse 
	errCode?: string 
	}
export interface AspireCoreModelsResult$1__AspireCoreModelsListModel$1__KunlunMerchantServiceModelsMerchantShopOrderListItemKunlunMerchantServiceAspireCore {
	success?: boolean 
	model?: any 
	errCode?: string 
	msg?: string 
	}
export interface AspireCoreModelsResult$1__KunlunMemberServiceModelsMerchantMemberDetailResponseKunlunMemberService {
	msg?: string 
	success?: boolean 
	model?: KunlunMemberServiceModelsMerchantMemberDetailResponse 
	errCode?: string 
	}
export interface AspireCoreModelsResult$1__SystemCollectionsGenericList$1__KunlunMerchantServiceModelsMerchantAddressListItemKunlunMerchantService {
	success?: boolean 
	model?: KunlunMerchantServiceModelsMerchantAddressListItem 
	errCode?: string 
	msg?: string 
	}
