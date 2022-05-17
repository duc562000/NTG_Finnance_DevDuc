// export const root = "http://123.25.24.165:8443/api/";
export const root = "https://apigw.dcvfinance.com/api/";

export default {
  // user
  checkPhoneNumber: `${root}app/auth/checkPhone`,

  verifyOTP: `${root}app/auth/checkOtp`,

  signUp: `${root}app/auth/loginNewUser`,

  login: `${root}app/auth/login`,
  urlrequestSendOTP: `${root}app/auth/sendCodeVerify`,
  urlConfirmOTP: `${root}app/auth/confirmCodeVerify`,
  urlFontIdentify: `${root}upload/uploadEkycFront`,
  urlBackIdentify: `${root}upload/uploadEkycBack`,
  verifyCustomer: `${root}app/auth/verifyCustomer`,
  logout: `${root}app/auth/logout`,
  changePass: `${root}app/auth/changePass`,
  sendCodeChangePass: `${root}app/auth/sendCodeChangePassword`,
  updateCusInfor: `${root}app/auth/updateCusInfo`,
  sendOTPChangePhone: `${root}app/auth/sendCodeUpdateCusPhone`,
  myTeam: `${root}app/home/getTeam`,
  myContract: `${root}app/report/getListContract`,
  reportCustomer: `${root}app/report/getCustomerReport`,

  inforBankTrans: `${root}app/trans/getCustomerBankCK`,

  changePhone: `${root}app/auth/updateCusPhone`,
  historyInvest: `${root}app/request/getListInInvestor`,
  dataInvestToday: `${root}app/request/getListInInvestorToday`,
  changeAvatart: `${root}app/auth/updateCusAvatar`,
  sendCodeForgetPassword: `${root}app/auth/sendCodeForgetPassword`,
  updateCusForgetPassword: `${root}app/auth/updateCusForgetPassword`,
  //rank
  listRanking: `${root}app/report/getListRanking`,
  detailRanking: `${root}app/report/detailRanking`,
  //SecretCode
  createSecretCode: `${root}app/auth/createSecretKey`,
  updateSecretCode: `${root}app/auth/changeSecretKey`,
  sendCodeSecret: `${root}app/auth/sendCodeForgetSecretKey`,
  renewSecret: `${root}app/auth/renewSecretKey`,

  //bank
  getListBankAccount: `${root}app/bankaccount/list`,
  addBankAccount: `${root}app/bankaccount/create`,
  updateBankAccount: `${root}app/bankaccount/update`,
  deleteBankAccount: `${root}app/bankaccount/delete`,
  detailBankAccount: `${root}app/bankaccount`,
  //Credit
  getListCredit: `${root}app/creditcard/list`,
  addCredit: `${root}app/creditcard/create`,
  updateCredit: `${root}app/creditcard/update`,
  deleteCredit: `${root}app/creditcard/delete`,
  detailCredit: `${root}app/creditcard`,

  //Dropdown
  listProvince: `${root}dropdown/province`,
  dropdownBank: `${root}dropdown/bank`,
  dropdownCreditType: `${root}dropdown/cardType`,
  dropdownBankCredit: `${root}dropdown/bankActive`,

  //Home
  getInforGeneral: `${root}app/home/generalInfo`,
  getListInvestPackage: `${root}app/home/listInvestPackage`,
  getConfigPoint: `${root}app/home/pointConfigs`,
  getListNoti: `${root}app/notification/getList`,
  detailNoti: `${root}app/notification/detail`,
  changePoint: `${root}app/home/changePoint`,
  listBanner: `${root}app/home/getListBanner`,
  systemConfig: `${root}app/home/systemConfig`,

  // card
  deleteBankInfo: `${root}card-service/finBankInfo/deleteBankInfo`,
  newBankInfo: `${root}card-service/finBankInfo/newBankInfo`,
  updateBankAccountInfo: `${root}card-service/finBankInfo/updateBankInfo`,
  newCreditCard: `${root}card-service/finCard/newCard`,
  updateCreditCard: `${root}card-service/finCard/updateCard`,
  deleteCreditCard: `${root}card-service/finCard/deleteCard`,
  getBankAccountList: `${root}card-service/finBankInfo/findByMemberId`,
  getCreditCardList: `${root}card-service/finCard/findByMemberId`,
  getBankList: `${root}card-service/SysBank/findAll`,
  acceptSession: `${root}card-service/finSession/acceptSession`,
  getActionToday: `${root}card-service/finSession/findByMemAndType`,
  getPaymentHistory: `${root}card-service/finSession/findByMemAndType`,
  getPaymentHistoryDetail: `${root}card-service/finSession/findById`,
  detailInvest: `${root}app/request/getDetailInCreditCardByInvestor`,

  inforSetting: `${root}app/notification/getInfoSettings`,
  changeSetting: `${root}app/notification/updateSettings`,
  caculateBenifit: `${root}app/home/caculateBenifit`,

  //common
  getProvinceList: `${root}card-service/sysAddress/findByLv`,

  //Previous
  getWalletInfo: `${root}app/trans/customerWallet`,
  depositsRequest: `${root}app/trans/createPushCash`,
  withdrawRequest: `${root}app/trans/createPullCash`,
  getListTrans: `${root}app/trans/getListTrans`,
  detailTrans: `${root}app/trans`,

  createTransactionPassword: `${root}card-service/finMember/createPwd`,
  updateTransactionPassword: `${root}card-service/finMember/updatePwd`,
  depositWithdrawFromWallet: `${root}card-service/finTranferRequest/newTranfer`,
  transferHistory: `${root}card-service/finTranferRequest/findByMemberId`,
  getTransferHistoryDetailAPI: `${root}card-service/finTranferRequest/findByMemberId`,

  // borrow request
  createBorrowRequest: `${root}app/request/create`,
  listBorrowRequest: `${root}app/request/getListInCustomer`,
  detailBorrowRequest: `${root}app/request/getDetailInCreditCardByCustomer`,
  loanRequest: `${root}app/request/loanRequestFit`,

  getBorrowRequestNotCompleted: `${root}card-service/finSession/findRequestCard`,

  findBorrowRequest: `${root}app/request/findRequestFit`,

  //decrypt
  urlDecryptData: `${root}common/decryptDataInMobile`,
  getKey: `${root}common/getkey`,
  // url webview
  urlTerm: "https://policies.google.com/privacy?hl=vi",
  urlPolicy: "https://policies.google.com/privacy?hl=vi",

  // config
  getPackageList: `${root}card-service/finRank/findAll`,
  uploadFile: `${root}upload/uploadfile`,

  getStaticPage: `${root}app/auth/getStaticPage`,
  getNewestVersionInfo: `${root}app/home/getVersionByPlatform`,
};
