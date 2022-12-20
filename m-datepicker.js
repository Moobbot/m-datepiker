/*
 * Tam Jquery Datepicker
 * Refer Tuds tDatepicker 2018
 * Licensed under: LICENSE
 * Version: v1.0.0
 * Use: jquery 1.13
 * https://api.jqueryui.com/datepicker
 * https://www.tutorialspoint.com/jqueryui/jqueryui_datepicker.htm#:~:text=Option%20%26%20Description
 */
(function ($) {
	'use strict';
	/*
    Init - Default options (Tùy chọn mặc định)

    Chỉnh sửa Global defaults cho tất cả các trường hợp datepicker Datepicker Jquery
  */
	var Defaults = {
		//Tùy chọn altField được sử dụng để đặt một trường thay thế
		//trong đó giá trị được cập nhật mỗi lần trong Trình chọn ngày của giao diện người dùng jQuery.
		altField: '', // Selector for an alternate field to store selected dates into
		altFormat: '', // The date format to use for the alternate field

		appendText: '', // Display text following the input box, e.g. showing the format

		autoSize: false, // True to size the input for the date format, false to leave as is

		beforeShow: null, // Function that takes an input field and
		beforeShowDay: null, // Function that takes a date and returns an array with
		// [0] = true if selectable, false if not, [1] = custom CSS class name(s) or "",
		// [2] = cell title (optional), e.g. $.datepicker.noWeekends

		buttonImage: '', // URL for trigger button image
		buttonImageOnly: false, // True if the image appears alone, false if it appears on a button
		buttonText: '...', // Text for trigger button

		// Quy định ngày hiển thị ra input value
		// yy-dd-mm, yy-mm-dd, dd-mm-yy, mm-dd-yy
		dateFormat: 'dd-mm-yy',

		//Day
		//The list of long day names,
		dayNames: [
			'Sunday',
			'Monday',
			'Tuesday',
			'Wednesday',
			'Thursday',
			'Friday',
			'Saturday',
		],
		//The list of minimised day names
		dayNamesMin: ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'],
		//The list of abbreviated day names
		dayNamesShort: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
		firstDay: 1, // Set the first day of the week: Sunday is 0, Monday is 1, etc

		//Month
		changeMonth: false, // True if month can be selected directly, false if only prev/next
		//The list of full month names
		monthNames: [
			'January',
			'February',
			'March',
			'April',
			'May',
			'June',
			'July',
			'August',
			'September',
			'October',
			'November',
			'December',
		],
		//The list of abbreviated month names
		monthNamesShort: [
			'Jan',
			'Feb',
			'Mar',
			'Apr',
			'Maj',
			'Jun',
			'Jul',
			'Aug',
			'Sep',
			'Okt',
			'Nov',
			'Dec',
		],

		// Số tháng được hiển thị
		numberOfMonths: 1, // Number of months to show at a time or [Số hàng, Số tháng 1 hàng]
		//Ex: numberOfMonths: [2, 3]
		showCurrentAtPos: 0, // The position in multipe months at which to show the current month (starting at 0)

		//Year
		changeYear: false, // True if year can be selected directly, false if only prev/next
		closeText: 'Done', //The text to display for the close link.

		constrainInput: true, // The input is constrained by the current date format
		currentText: 'Today', //The text to display for the current day link

		gotoCurrent: false, // When true, the current day link moves to the currently selected date instead of today.
		hideIfNoPrevNext: false, // True to hide next/previous month links
		isRTL: false, // Whether the current language is drawn from right to left.

		// if not applicable, false to just disable them
		navigationAsDateFormat: true, // True if date formatting applied to prev/today/next links
		//The text to display for the next month link
		nextText: 'MM',
		//The text to display for the prev month link
		prevText: 'MM',

		onChangeMonthYear: null, // Define a callback function when the month or year is changed
		onClose: null, // Define a callback function when the datepicker is closed
		onSelect: null, // Define a callback function when a date is selected
		onUpdateDatepicker: null, // Define a callback function when the datepicker is updated (version added: 1.13)

		showAnim: 'blind', // Name of jQuery animation for popup
		//Show[default] , fadeIn, blind, bounce, clip, drop, fold, slide, None
		showMonthAfterYear: true, //Whether to show the month after the year in the header.
		showButtonPanel: false, // True to show button panel, false to not show it

		showOn: 'focus', // "focus" for popup on focus, "button" for trigger button, or "both" for either
		duration: 'fast', // Duration of display/closure  - "slow", "normal", "fast" || it may be a time in milliseconds

		showOptions: {}, // Options for enhanced animations
		//Ex: { direction: "up" }

		showOtherMonths: false, // True to show dates in other months, false to leave blank
		showWeek: false, // True to show week of the year, false to not show it
		stepMonths: 1, // Number of months to step back/forward
		stepBigMonths: 12, // Number of months to step back/forward for the big links

		disabled: false, // The initial disabled state

		//Giới hạn ngày được chọn
		//"y" for years, "m" for months, "w" for weeks, and "d" for days. For example, "+1m +7d" represents one month and seven days from today.
		minDate: null, // The earliest selectable date, or null for no limit
		maxDate: null, // The latest selectable date, or null for no limit

		//DATE
		// Setup ngày m-check-in và ngày m-check-out khi đã có ngày, ngày m-check-out không được lớn hơn m-check-in - mặc định show ngày toDay
		// dateCheckIn: '25/06/2018',  // DD/MM/YY
		// dateCheckOut: '26/06/2018', // DD/MM/YY
		dateCheckIn: null,
		dateCheckOut: null,
		titleCheckIn: 'Check In',
		titleCheckOut: 'Check Out',
	};
	// getDate() lấy ngày (1 - 31)
	// getDay() lấy ngày trong tuần (0-6)
	// getFullYear() lấy năm đầy đủ (YYYY)
	// getYear() lấy năm 2 số cuối (YY)
	// getHours() lấy số giờ (0 - 23)
	// getMiliSeconds() lấy số mili giây (0 - 999)
	// getMinutes() lấy số phút (0 - 59)
	// getMonth() lấy tháng (0 - 11)
	// getSeconds() lấy số giây (0 - 59)
	// getTime() thời gian đã được convert sang dạng miliseconds.
	var update_options = [];

	$.fn.mDatePicker = function (pr_el, options) {
		// Get date Today
		var d = new Date();
		var m = d.getMonth(); // 0 - 11
		var y = d.getFullYear();
		// var toDay = Date.UTC(d.getFullYear(), d.getMonth(), d.getDate()); // UTC
		var toDay = d.getDate() + '-' + (d.getMonth() + 1) + '-' + d.getFullYear(); // dd/mm/yy
		// console.log(this);
		// console.log(pr_el); // options first call

		// Check update options and Methods, Object or string
		if (
			options === undefined &&
			typeof pr_el !== 'string' &&
			pr_el !== undefined
		) {
			update_options = pr_el;
		}
		// Các giá trị update phải gán trước khi merge Object vì sử dụng ConvertUTC() format dd-mm-yy trước.
		update_options.dateFormat =
			update_options.dateFormat || Defaults.dateFormat;
		var current_dateFormat = update_options.dateFormat;

		//Định dạng ngày được áp dụng cho các liên kết trước/hôm nay/tiếp theo
		update_options.navigationAsDateFormat =
			update_options.navigationAsDateFormat || Defaults.navigationAsDateFormat;

		//Văn bản hiển thị cho liên kết the next/prev month trước
		update_options.nextText = update_options.nextText || Defaults.nextText;
		update_options.prevText = update_options.prevText || Defaults.prevText;

		//Name of jQuery animation for popup
		update_options.showAnim = update_options.showAnim || Defaults.showAnim;

		//hiển thị tháng sau năm trong tiêu đề.
		update_options.showMonthAfterYear =
			update_options.showMonthAfterYear || Defaults.showMonthAfterYear;

		//placeholder - input CI, CO
		var titleCheckIn, titleCheckOut;
		titleCheckIn = update_options.titleCheckIn || Defaults.titleCheckIn;
		delete update_options['titleCheckIn'];
		titleCheckOut = update_options.titleCheckOut || Defaults.titleCheckOut;
		delete update_options['titleCheckOut'];

		// setStart (minDate) là ngày đầu tiên của cuốn lịch, những ngày trước nó sẽ disbale,
		// nếu không set giá trị default là toDay
		// Nếu ko minDate thì sẽ lấy ngày toDay làm mặc định
		update_options.minDate = update_options.minDate || toDay;
		if (update_options.minDate === '' || update_options.minDate === 'null') {
			update_options.minDate = toDay;
		}
		if (pr_el === 'minDate' && typeof pr_el === 'string') {
			update_options.minDate = options;
		}
		// var sd = update_options.minDate.split('-');
		// var nextDay = Number(Number(sd[0]) + 1) + '-' + sd[1] + '-' + sd[2]; // dd/mm/yy

		// update_options.maxDate = update_options.maxDate || null;

		// Check giá trị truyền vào phải là ngày nếu === null or empty thì trả về null
		var dateCheckIn, dateCheckOut;
		if (pr_el === 'dateCheckIn' && typeof pr_el === 'string') {
			update_options.dateCheckIn = options;
		}
		if (
			update_options.dateCheckIn !== '' ||
			update_options.dateCheckIn !== 'null'
		) {
			dateCheckIn = update_options.dateCheckIn;
			delete update_options['dateCheckIn'];
		}
		//Nếu có giá trị dateCheckIn truyền vào thì cập nhật minDate = dateCheckIn
		update_options.minDate = dateCheckIn || update_options.minDate;

		if (pr_el === 'dateCheckOut' && typeof pr_el === 'string') {
			update_options.dateCheckOut = options;
		}
		if (
			update_options.dateCheckOut !== '' ||
			update_options.dateCheckOut !== 'null'
		) {
			dateCheckOut = update_options.dateCheckOut;
			delete update_options['dateCheckOut'];
		}
		/*----------------------------------------------------------------*/
		//Hàm trả về ngày kiểu UTC với dateFormat
		function ConvertUTC(pr_date) {
			var date;
			try {
				date = $.datepicker.parseDate(current_dateFormat, pr_date);
			} catch (error) {
				date = null;
			}
			return date;
		}

		//Hàm chuyển UTC sang timeStamp
		//Wed Dec 21 2022 00:00:00 GMT+0700 => 1671580800000
		function Convert_timeStamp(date_UTC) {
			var timeStamp;
			try {
				timeStamp = Date.UTC(
					date_UTC.getFullYear(),
					date_UTC.getMonth(),
					date_UTC.getDate(),
				);
			} catch (error) {
				timeStamp = null;
			}
			return timeStamp;
		}

		//Hàm chuyển đổi ngày về dạng ngày được Format
		//Ex: Đầu vào dateFormat:'dd-mm-yy' && pr_date = 1671580800000 => output: 21-12-2022
		function ConvertFormatDf(pr_date) {
			var date = new Date(pr_date);
			if (current_dateFormat === 'dd-mm-yy') {
				date =
					date.getDate() +
					'-' +
					Number(date.getMonth() + 1) +
					'-' +
					date.getFullYear();
			}
			if (current_dateFormat === 'mm-dd-yy') {
				date =
					Number(date.getMonth() + 1) +
					'-' +
					date.getDate() +
					'-' +
					date.getFullYear();
			}
			if (current_dateFormat === 'yy-dd-mm') {
				date =
					date.getFullYear() +
					'-' +
					date.getDate() +
					'-' +
					Number(date.getMonth() + 1);
			}
			if (current_dateFormat === 'yy-mm-dd') {
				date =
					date.getFullYear() +
					'-' +
					Number(date.getMonth() + 1) +
					'-' +
					date.getDate();
			}
			return date;
		}

		//Hàm tăng thêm add ngày so với ngày truyền vào dạng UTC
		//Wed Dec 21 2022 00:00:00 GMT+0700 => Thu Dec 22 2022 00:00:00 GMT+0700
		function increase_date(pr_date, add) {
			var date;
			try {
				date = new Date(
					pr_date.getFullYear(),
					pr_date.getMonth(),
					pr_date.getDate() + add,
				); // +add vào tháng năm sẽ tăng theo thang nam.
			} catch (error) {
				date = null;
			}
			return date;
		}

		/*-------------------------------- Xử lý trường hợp in/out --------------------------------*/
		var check_in_div = $(this).find('.m-check-in');
		var check_out_div = $(this).find('.m-check-out');
		var input_CI =
			"<input type='text' class='js-CI' placeholder = '" + titleCheckIn + "'>";
		var input_CO =
			"<input type='text' class='js-CO'placeholder = '" + titleCheckOut + "'>";

		//Kiểm tra xem tồn tại m-check-in/m-check-out
		if (check_in_div) check_in_div.html(input_CI);
		if (check_out_div) check_out_div.html(input_CO);

		//Biến xử lý ngày tháng
		var date_CI_select, date_CO_select;
		//Ngày bắt đầu và ngày kết thúc
		var startDate, endDate;
		//Biến hiển thị date cho người dùng
		var startDate_show, endDate_show;

		startDate = Convert_timeStamp(ConvertUTC(update_options.minDate));
		endDate = Convert_timeStamp(
			increase_date(ConvertUTC(update_options.minDate), 1),
		);
		startDate_show = ConvertFormatDf(startDate);
		endDate_show = ConvertFormatDf(endDate);

		//Highlight từ startDate đến endDate
		update_options.beforeShowDay = function (date) {
			if (date != null && date != '') {
				var theday = Date.UTC(
					date.getFullYear(),
					date.getMonth(),
					date.getDate(),
				);
				if (theday >= startDate) {
					if (theday <= endDate) {
					}
					return [true, theday <= endDate ? 'Highlighted' : ''];
				} else {
					return [true, '', ''];
				}
			} else {
				return [true, '', ''];
			}
		};

		// Nếu có cả dateCheckIn & dateCheckOut
		if (check_in_div.length !== 0 && check_out_div.length !== 0) {
			//Sự kiện click date
			update_options.onSelect = function (dateText, inst) {
				// console.clear();
				date_CI_select = $(this).hasClass('js-CI') == true ? $(this).val() : '';
				date_CO_select = $(this).hasClass('js-CO') == true ? $(this).val() : '';
				//Xác định ngày được chọn
				if (date_CI_select != '' && date_CI_select != null) {
					//Cập nhật startDate
					startDate = Convert_timeStamp(ConvertUTC(date_CI_select));
					startDate_show = ConvertFormatDf(startDate);
					//Cập nhật minDate cho dateCheckOut
					// update_options.minDate = startDate_show;
					//Cập nhật endDate
					endDate =
						endDate >= startDate
							? endDate
							: Convert_timeStamp(
									increase_date(ConvertUTC(ConvertFormatDf(startDate)), 1),
							  );
					// console.log('endDate-up: ' + endDate);
					endDate_show = ConvertFormatDf(endDate);
					// console.log('endDate_show-up: ' + endDate_show);
					//Cập nhật minDate cho dateCheckOut
					$(this)
						.parents('.m-datepicker')
						.find('.m-check-out .js-CO')
						.datepicker('option', 'minDate', startDate_show);
					//Cập nhật endDate hiển thị cho người dùng
					$(this)
						.parents('.m-datepicker')
						.find('.m-check-out .js-CO')
						.val(endDate_show);
					//
					if (
						!$(this)
							.parents('.m-datepicker')
							.find('.js-CO')
							.hasClass('.js-CO-show')
					) {
						$(this)
							.parents('.m-datepicker')
							.find('.js-CO')
							.addClass('js-CO-show');
					}
				}
				if (date_CO_select != '' && date_CO_select != null) {
					// console.log('date_CO_select: ' + date_CO_select);
					endDate = Convert_timeStamp(ConvertUTC(date_CO_select));
					endDate_show = ConvertFormatDf(endDate);
					// console.log(endDate_show);
				}
			};
			//Sự kiện hiển thị dateCheckOut sau khi dateCheckIn đóng
			update_options.onClose = function (dateText, inst) {
				if ($(this).parents('.m-datepicker').find('.js-CO-show')) {
					// $(this).parents('.m-datepicker').find('.js-CO-show').datepicker('show');

					$(this).parents('.m-datepicker').find('.js-CO-show').trigger('focus');

					$(this)
						.parents('.m-datepicker')
						.find('.js-CO-show')
						.removeClass('js-CO-show');
				}
			};
		}
		// Chỉ có dateCheckIn
		if (check_in_div.length !== 0 && check_out_div.length === 0) {
			endDate = null;
			//Sự kiện click date
			update_options.onSelect = function (dateText, inst) {
				date_CI_select = $(this).hasClass('js-CI') == true ? $(this).val() : '';
				//Xác định ngày được chọn
				if (date_CI_select != '' && date_CI_select != null) {
					//Cập nhật startDate
					startDate = Convert_timeStamp(ConvertUTC(date_CI_select));
					startDate_show = ConvertFormatDf(startDate);
					//Cập nhật minDate cho dateCheckOut
					// update_options.minDate = startDate_show;
					//Cập nhật endDate
				}
				if (date_CO_select != '' && date_CO_select != null) {
					// console.log('date_CO_select: ' + date_CO_select);
					endDate = Convert_timeStamp(ConvertUTC(date_CO_select));
					endDate_show = ConvertFormatDf(endDate);
					// console.log(endDate_show);
				}
			};
		}
		// Chỉ có dateCheckOut
		if (check_in_div.length === 0 && check_out_div.length !== 0) {
			//Sự kiện click date
			update_options.onSelect = function (dateText, inst) {
				date_CO_select = $(this).hasClass('js-CO') == true ? $(this).val() : '';
				//Xác định ngày được chọn
				if (date_CO_select != '' && date_CO_select != null) {
					endDate = Convert_timeStamp(ConvertUTC(date_CO_select));
					endDate_show = ConvertFormatDf(endDate);
				}
			};
		}
		//Khởi tạo datepicker Check In
		if (check_in_div) {
			if (check_in_div)
				$(check_in_div).find('.js-CI').datepicker(update_options);
		}

		//Khởi tạo datepicker Check Out
		if (check_out_div) {
			if (check_out_div)
				$(check_out_div).find('.js-CO').datepicker(update_options);
		}
		$('.ui-datepicker').addClass('m-datepiker');
		// Delete update_options old
		update_options = [];
	};
})(jQuery);
