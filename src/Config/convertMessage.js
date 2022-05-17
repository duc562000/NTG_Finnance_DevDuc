const convertMessage = (code) => {
  switch (code) {
    case "ERROR_CREDIT_CARD_ID_MISSING":
      return "Thiếu Thẻ tín dụng";
    case "ERROR_DATE_LIMIT_MISSING":
      return "Thiếu ngày đáo hạn";
    case "ERROR_AMOUNT_MISSING":
      return "Thiếu số tiền";
    case "ERROR_CUSTOMER_HAVE_REQUEST_NOT_FINISH":
      return "Khách hàng đã tồn tại yêu cầu vay chưa được giải quyết";
    case "ERROR_CREDIT_CARD_NOT_FOUND":
      return "Thẻ tín dụng không được tìm thấy";
    case "ERROR_CREDIT_CARD_NOT_APPROVED":
      return "Thẻ tín dụng chưa được phê duyệt";
    case "ERROR_CUSTOMER_NOT_FOUND":
      return "Không tìm thấy khách hàng";
    case "ERROR_CUSTOMER_NOT_VERIFY":
      return "Khách hàng chưa xác thực";
    case "ERROR_DATE_LIMIT_MORE_THAN_NOW":
      return "Ngày tạo yêu cầu phải lớn hơn hoặc bằng ngày hôm nay";
    case "ERROR_INVESTOR_NOT_FOUND":
      return "Không tìm thấy Nhà đầu tư";
    case "ERROR_INVESTOR_NOT_VERIFY":
      return "Nhà đầu tư chưa xác thực tài khoản";
    case "ERROR_INVESTOR_REQUIRE_HAVE_LEAST_100K":
      return "Nhà đầu tư phải có ít nhất 100.000đ trong tài khoản";
    case "ERROR_COUNT_PER_DAY_NOT_ENOUGH":
      return "Đã vượt quá số lượt cho vay trong ngày";
    case "ERROR_CARD_FIT_NOT_FOUND":
      return "Không tìm thấy yêu cầu vay tương ứng";
    case "ERROR_REQUEST_ID_MISSING":
      return "Thiếu ID yêu cầu vay";
    case "ERROR_TRANS_PASS_MISSING":
      return "Thiếu mật khẩu giao dịch";
    case "ERROR_INVESTOR_NOT_FOUND":
      return "Không tìm thấy Nhà đầu tư";
    case "ERROR_INVESTOR_NOT_VERIFY":
      return "Nhà đầu tư chưa xác thực tài khoản";
    case "ERROR_INVESTOR_HAVE_NOT_TRANS_PASSWORD":
      return "Khách hàng chưa có mật khẩu giao dịch";
    case "ERROR_TRANS_PASS_INCORRECT":
      return "Mật khẩu giao dịch không chính xác";
    case "ERROR_REQUEST_HAD_PROCESS":
      return "Yêu cầu vay đã được xử lý. Yêu cầu tìm yêu cầu vay khác";

    default:
      return "Tạo yêu cầu thất bại";
  }
};
export default convertMessage;
