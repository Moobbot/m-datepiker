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
		//The list of abbreviated day names
		dayNamesShort: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
		//Column headings for days starting at Sunday
		dayNamesMin: ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'],
		weekHeader: 'Wk', // Column header for week of the year
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

		prevText: 'MM', //Display text for previous month link
		nextText: 'MM', //Display text for next month link
		currentText: 'Today', // Display text for current month link

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
		iconDate: '&#x279C;',
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
		var toDay = Date.UTC(y, m, d.getDate()); // UTCtimeStamp
		var toDayDf = ConvertTimeStamptoDf(toDay);
		// console.log(toDayDf);
		// toDay = d.getDate() + '-' + (m + 1) + '-' + y; // dd/mm/yy
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
		// Các giá trị update phải gán trước khi merge Object vì sử dụng ConvertUTCString() format dd-mm-yy trước.
		update_options.dateFormat =
			update_options.dateFormat || Defaults.dateFormat;
		var current_dateFormat = update_options.dateFormat;

		//Định dạng ngày được áp dụng cho các liên kết trước/hôm nay/tiếp theo
		// update_options.navigationAsDateFormat = update_options.navigationAsDateFormat || Defaults.navigationAsDateFormat;
		//Văn bản hiển thị cho liên kết the next/prev month trước
		// update_options.nextText = update_options.nextText || Defaults.nextText;
		// update_options.prevText = update_options.prevText || Defaults.prevText;
		//Name of jQuery animation for popup
		// update_options.showAnim = update_options.showAnim || Defaults.showAnim;
		//hiển thị tháng sau năm trong tiêu đề.
		// update_options.showMonthAfterYear = update_options.showMonthAfterYear || Defaults.showMonthAfterYear;

		//placeholder - input CI, CO
		var titleCheckIn, titleCheckOut;
		update_options.titleCheckIn =
			update_options.titleCheckIn || Defaults.titleCheckIn;
		// titleCheckIn = update_options.titleCheckIn; delete update_options['titleCheckIn'];
		update_options.titleCheckOut =
			update_options.titleCheckOut || Defaults.titleCheckOut;
		// titleCheckOut = update_options.titleCheckOut; delete update_options['titleCheckOut'];

		// setStart (minDate) là ngày đầu tiên của cuốn lịch, những ngày trước nó sẽ disbale,
		// nếu không set giá trị default là toDay
		// Nếu ko minDate thì sẽ lấy ngày toDay làm mặc định
		update_options.minDate = update_options.minDate || toDayDf;
		if (update_options.minDate === '' || update_options.minDate === 'null') {
			update_options.minDate = toDayDf;
		}
		if (pr_el === 'minDate' && typeof pr_el === 'string') {
			update_options.minDate = options;
		}
		if (pr_el === 'maxDate' && typeof pr_el === 'string') {
			update_options.maxDate = options;
		}
		var sd = new Date(update_options.minDate);
		var nextDay = Date.UTC(sd.getFullYear(), sd.getMonth(), sd.getDate() + 1); // UTC

		// update_options.maxDate = update_options.maxDate || null;

		// Check giá trị truyền vào phải là ngày nếu === null or empty thì trả về null
		var dateCheckIn, dateCheckOut;
		if (pr_el === 'dateCheckIn' && typeof pr_el === 'string') {
			update_options.dateCheckIn = options;
		}
		if (
			update_options.dateCheckIn === '' ||
			update_options.dateCheckIn === 'null'
		) {
			update_options.dateCheckIn = null;
			// dateCheckIn = update_options.dateCheckIn;
			// delete update_options['dateCheckIn'];
		}

		if (pr_el === 'dateCheckOut' && typeof pr_el === 'string') {
			update_options.dateCheckOut = options;
		}
		if (
			update_options.dateCheckOut === '' ||
			update_options.dateCheckOut === 'null'
		) {
			update_options.dateCheckOut = null;
			// dateCheckOut = update_options.dateCheckOut;
			// delete update_options['dateCheckOut'];
		}
		// dateCheckIn = update_options.dateCheckIn = update_options.dateCheckIn || update_options.minDate;
		// dateCheckOut = update_options.dateCheckOut;

		if (options !== undefined) {
			// Update for CI - CO
			if (pr_el === 'update') {
				// console.log(options);
				// update_options.dateCheckIn  = ConvertUTCString(ConvertTimeStamptoDf(options[0]));
				// update_options.dateCheckOut = ConvertUTCString(ConvertTimeStamptoDf(options[1]));
				// Update for CI - CO
				if (options.length === 2) {
					checkCI(options[0]);
					checkCO(options[1]);
				} else {
					// Update for CI
					checkCI(options);
				}
				if (options === '') {
					update_options.dateCheckIn = null;
					update_options.dateCheckOut = null;
				}
			}
			// Update only for CI
			if (pr_el === 'updateCI') {
				checkCI(options);
			}
			// Update only for CO
			if (pr_el === 'updateCO') {
				checkCO(options);
			}
		}

		// Update for CI
		function checkCI(pr_options) {
			// Xét default khi CI = ''
			if (pr_options === '') {
				update_options.dateCheckIn = null;
				update_options.dateCheckOut = null;
				return;
			}
			var CI = ConvertUTCString(ConvertTimeStamptoDf(pr_options));
			// - update CI nhỏ hơn update_options.minDate thì lấy ngày update_options.minDate
			update_options.dateCheckIn = CI;
			if (CI < update_options.minDate) {
				update_options.dateCheckIn = update_options.minDate;
			}
			dateCheckIn = update_options.dateCheckIn;
		}
		// Update for CO
		function checkCO(pr_options) {
			var op_CI = ConvertUTCString(
				ConvertTimeStamptoDf(update_options.dateCheckIn),
			);
			// Bắt buộc phải có CI
			// - update CO nhỏ hơn CI thì CO = null -> CI = ngày hiện tại
			// - update CO không được === CI
			// Xét default khi CO = ''
			if (pr_options === '') {
				update_options.dateCheckIn = op_CI;
				if (isNaN(op_CI)) {
					update_options.dateCheckIn = null;
				}
				update_options.dateCheckOut = null;
				return;
			}
			var CO = ConvertUTCString(pr_options);
			if (CO > update_options.minDate) {
				// Gọi lần đầu chưa có CI
				if (
					update_options.dateCheckIn === undefined ||
					update_options.dateCheckIn === null
				) {
					update_options.dateCheckOut = CO;
					// Cố định chọn CI
					update_options.dateCheckIn = update_options.minDate;
				}
			} else {
				update_options.dateCheckIn = update_options.minDate;
				update_options.dateCheckOut = nextDay;
			}
		}
		// ### ###
		// ### MERGE OBJECT MAIN OPTIONS DEFAULT ####
		var this_el = this;
		var settings = $.extend({}, Defaults, update_options);
		/* ---------- Một số options tự tạo không có trong Jquery datepicker ---------- */
		var iconDate = settings.iconDate;
		dateCheckIn = settings.dateCheckIn;
		dateCheckOut = settings.dateCheckOut;
		titleCheckIn = settings.titleCheckIn;
		titleCheckOut = settings.titleCheckOut;

		// FUNCTION UTILITY  - Chức năng tiện ích
		function check_num_10(pr_el) {
			if (pr_el < 10) {
				return (pr_el = '0' + pr_el);
			} else {
				return pr_el;
				// iconDate;
			}
		}
		function convertArrayToString(pr_array) {
			pr_array = pr_array.toString();
			pr_array = pr_array.replace(/,/g, '');
			return pr_array;
		}
		// Theme m-check-in && m-check-out default show for website
		function setThemeCheckDate(
			pr_title,
			pr_class,
			pr_data_utc,
			pr_input,
			pr_fm_input,
		) {
			return (
				'<div class="m-dates m-date-' +
				pr_class +
				'">' +
				iconDate +
				'<label class="m-date-info-title">' +
				pr_title +
				'</label>' +
				showThemeDate(pr_class, pr_data_utc) +
				'</div>' +
				'<input type="text" class="m-input m-input-' +
				pr_class +
				' js-input-' +
				pr_class +
				'"' +
				' value="' +
				pr_fm_input +
				'" name="' +
				pr_input +
				'"' +
				'>'
			);
		}
		function editThemeCheckDate(pr_title, pr_class, pr_data_utc) {
			return (
				iconDate +
				'<label class="m-date-info-title">' +
				pr_title +
				'</label>' +
				showThemeDate(pr_class, pr_data_utc)
			);
		}
		function showThemeDate(pr_class, pr_data_utc) {
			if (pr_data_utc !== 0 && pr_data_utc !== null) {
				var d = new Date(pr_data_utc);
				var showDate = check_num_10(d.getDate()); // 19 Jul 2018
				var showMonths = check_num_10(d.getMonth() + 1); // 19 Jul 2018
				var showYear = check_num_10(d.getFullYear()); // 19 Jul 2018
				var separator = current_dateFormat.includes('/') ? '/' : '&#8211;'; //'-'
				var c_dateFormat = current_dateFormat.replaceAll('-', '/').split('/');
				// var show = iconDate;
				var show = '';
				c_dateFormat.forEach((element) => {
					if (show !== '') {
						show += separator + '</span>';
					}
					if (element === 'dd')
						show += '<span class="m-day-' + pr_class + '">' + showDate;
					if (element === 'mm')
						show += '<span class="m-month-' + pr_class + '">' + showMonths;
					if (element === 'yy')
						show += '<span class="m-year-' + pr_class + '">' + showYear;
				});
				return show;
			} else {
				return '';
			}
		}

		/*----------------------------------------------------------------*/
		//Hàm trả về ngày kiểu UTC với dateFormat
		//dateFormat:'dd-mm-yy' && pr_date = 21-12-2022 => output: Wed Dec 21 2022 00:00:00 GMT+0700
		function ConvertUTCString(pr_date) {
			var date;
			try {
				date = $.datepicker.parseDate(current_dateFormat, pr_date);
			} catch (error) {
				date = null;
				// console.log(
				// 	"'Thank you for using m-datepicker. Please, check dateFormat:'%c " +
				// 		settings.dateFormat +
				// 		' ',
				// 	'background: #f16d99; color: #fff',
				// );
			}
			return date;
		}

		//Hàm chuyển UTC sang timeStamp
		//Wed Dec 21 2022 00:00:00 GMT+0700 => 1671580800000
		function ConvertUTCtimeStamp(date_UTC) {
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
		//dateFormat:'dd-mm-yy' && pr_date = 1671580800000 => output: 21-12-2022
		function ConvertTimeStamptoDf(pr_date) {
			if (pr_date !== null) {
				var date = new Date(pr_date);
				var dd = check_num_10(date.getDate());
				var mm = check_num_10(Number(date.getMonth() + 1));
				var yy = date.getFullYear();
				if (current_dateFormat === 'dd-mm-yy') date = dd + '-' + mm + '-' + yy;
				if (current_dateFormat === 'mm-dd-yy') date = mm + '-' + dd + '-' + yy;
				if (current_dateFormat === 'yy-dd-mm') date = yy + '-' + dd + '-' + m;
				if (current_dateFormat === 'yy-mm-dd') date = yy + '-' + mm + '-' + d;
				//
				if (current_dateFormat === 'dd/mm/yy') date = dd + '/' + mm + '/' + yy;
				if (current_dateFormat === 'mm/dd/yy') date = mm + '/' + dd + '/' + yy;
				if (current_dateFormat === 'yy/dd/mm') date = yy + '/' + dd + '/' + m;
				if (current_dateFormat === 'yy/mm/dd') date = yy + '/' + mm + '/' + d;
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

		//Nếu có giá trị dateCheckIn truyền vào thì cập nhật minDate = dateCheckIn
		// settings.minDate = settings.dateCheckIn || settings.minDate;

		/*-------------------------------- Xử lý trường hợp in/out --------------------------------*/
		// Function get && show default theme for website include (2018/02/27 || 1519689600000)
		function getDateUTC(pr_in, pr_out) {
			var Array_In_Out = ['check-in', 'check-out'];
			Array_In_Out.forEach(function (e) {
				var label_title = settings.titleCheckIn;
				var getDay = pr_in;
				var Input = 'm-start';
				// Check CI có giá trị ngày thì remove label CheckIn
				if (pr_in !== null && pr_in !== undefined && pr_out !== '') {
					label_title = '';
				}
				if (e === 'check-out') {
					label_title = settings.titleCheckOut;
					getDay = pr_out;
					// Giá trị CI lớn hơn ngày CO nếu đã có CO -> CO sẽ không có chọn ngày ở dates
					// Null không có add dates và Dom
					if (pr_in === pr_out) {
						getDay = null;
					} else if (pr_out !== null && pr_out !== undefined && pr_out !== '') {
						label_title = ''; // Xoá title khi có giá trị
					}
					Input = 'm-end';
				}
				// console.log(getDay);
				getDay = ConvertUTCString(getDay);
				// console.log(getDay);
				var formatDate = ConvertTimeStamptoDf(getDay) || '';
				// console.log(getDay);
				getDay = ConvertUTCtimeStamp(getDay);
				this_el
					.find('.m-' + e)
					.html(setThemeCheckDate(label_title, e, getDay, Input, formatDate));
				formatDate = '';
			});
			// Nếu không có data, data default sẽ là toDay và nextDays - null
			if (pr_in === null && pr_out === null) {
				pr_in = settings.minDate;
				// next Day form dataCheckIn
				var date = new Date(pr_in);
				pr_out = Date.UTC(
					date.getFullYear(),
					date.getMonth(),
					date.getDate() + 1,
				);
				// console.log('a')
			}
			// Có data
			if (pr_in !== null && pr_out !== null) {
				// Có data, mà CO < CI thì đưa check CO = CI
				if (
					ConvertUTCtimeStamp(ConvertUTCString(pr_in)) >
					ConvertUTCtimeStamp(ConvertUTCString(pr_out))
				) {
					pr_in = pr_out;
				}
			}
			// Nếu CI có giá trị mà CO không có thì gôm chung là 1
			if (pr_in !== null && pr_out === null) {
				pr_out = pr_in;
			}
			// Nếu CO có giá trị mà CI không có thì CI = CO
			if (pr_in === null && pr_out !== null) {
				pr_in = pr_out;
			}
			return [
				ConvertUTCtimeStamp(ConvertUTCString(pr_in)),
				ConvertUTCtimeStamp(ConvertUTCString(pr_out)),
			];
		}
		var dataUTC = getDateUTC(settings.dateCheckIn, settings.dateCheckOut);
		var check_in_div = $(this).find('.m-check-in');
		var check_out_div = $(this).find('.m-check-out');
		// var input_CI =
		// 	"<input type='text' class='m-input-check-in js-input-check-in' placeholder = '" +
		// 	settings.titleCheckIn +
		// 	"'>";
		// var input_CO =
		// 	"<input type='text' class='m-input-check-out js-input-check-out'placeholder = '" +
		// 	settings.titleCheckOut +
		// 	"'>";

		/* ---------- Xóa một số options tự tạo không có trong Jquery datepicker ---------- */
		delete settings['dateCheckIn'];
		delete settings['dateCheckOut'];
		delete settings['titleCheckIn'];
		delete settings['titleCheckOut'];
		delete settings['iconDate'];
		/* ------------------------------------------------------------------------------------------ */

		//Kiểm tra xem tồn tại m-check-in/m-check-out
		// if (check_in_div) check_in_div.html(input_CI);
		// if (check_out_div) check_out_div.html(input_CO);

		//Biến xử lý ngày tháng
		var date_CI_select, date_CO_select;
		//Ngày bắt đầu và ngày kết thúc
		var startDate, endDate;
		//Biến hiển thị date cho người dùng
		var startDate_show, endDate_show;

		startDate = ConvertUTCtimeStamp(settings.minDate);
		endDate = ConvertUTCtimeStamp(increase_date(settings.minDate, 1));
		startDate_show = ConvertTimeStamptoDf(startDate);
		endDate_show = ConvertTimeStamptoDf(endDate);

		//Highlight từ startDate đến endDate
		settings.beforeShowDay = function (date) {
			if (date != null && date != '') {
				var theday = Date.UTC(
					date.getFullYear(),
					date.getMonth(),
					date.getDate(),
				);
				if (startDate && theday >= startDate) {
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
		settings.onHover = function (date) {
			endDate = date;
		};
		// Nếu có cả dateCheckIn & dateCheckOut
		if (check_in_div.length !== 0 && check_out_div.length !== 0) {
			//Sự kiện click date
			settings.onSelect = function (dateText, inst) {
				// console.clear();
				date_CI_select =
					$(this).hasClass('js-input-check-in') == true ? $(this).val() : '';
				date_CO_select =
					$(this).hasClass('js-input-check-out') == true ? $(this).val() : '';
				//Xác định ngày được chọn
				if (date_CI_select != '' && date_CI_select != null) {
					//Cập nhật startDate
					startDate = ConvertUTCtimeStamp(ConvertUTCString(date_CI_select));
					startDate_show = ConvertTimeStamptoDf(startDate);
					//Cập nhật minDate cho dateCheckOut
					// settings.minDate = startDate_show;
					//Cập nhật endDate
					endDate =
						endDate >= startDate
							? endDate
							: ConvertUTCtimeStamp(
									increase_date(
										ConvertUTCString(ConvertTimeStamptoDf(startDate)),
										1,
									),
							  );
					// console.log('endDate-up: ' + endDate);
					endDate_show = ConvertTimeStamptoDf(endDate);
					// console.log('endDate_show-up: ' + endDate_show);
					//Cập nhật minDate cho dateCheckOut
					$(this)
						.parents('.m-datepicker')
						.find('.m-check-out .js-input-check-out')
						.datepicker('option', 'minDate', startDate_show);
					//Cập nhật endDate hiển thị cho người dùng
					$(this)
						.parents('.m-datepicker')
						.find('.m-check-out .js-input-check-out')
						.val(endDate_show);
					//
					if (
						!$(this)
							.parents('.m-datepicker')
							.find('.js-input-check-out')
							.hasClass('.js-input-check-out-show')
					) {
						$(this)
							.parents('.m-datepicker')
							.find('.js-input-check-out')
							.addClass('js-input-check-out-show');
					}
					$(this)
						.siblings('.m-date-check-in')
						.html(
							editThemeCheckDate(
								'',
								'check-in',
								ConvertUTCString(date_CI_select),
							),
						);
					$(this)
						.parents('.m-datepicker')
						.find('.m-date-check-out')
						.html(
							editThemeCheckDate(
								'',
								'check-out',
								ConvertUTCString(endDate_show),
							),
						);
				}
				if (date_CO_select != '' && date_CO_select != null) {
					// console.log('date_CO_select: ' + date_CO_select);
					endDate = ConvertUTCtimeStamp(ConvertUTCString(date_CO_select));
					endDate_show = ConvertTimeStamptoDf(endDate);
					// console.log(endDate_show);
					// $(this)
					// 	.siblings('.m-date-check-out')
					// 	.html(showThemeDate('check-out', ConvertUTCString(date_CO_select)));
					$(this)
						.siblings('.m-date-check-out')
						.html(
							editThemeCheckDate(
								'',
								'check-out',
								ConvertUTCString(date_CO_select),
							),
						);
				}
			};
			//Sự kiện hiển thị dateCheckOut sau khi dateCheckIn đóng
			settings.onClose = function (dateText, inst) {
				if ($(this).parents('.m-datepicker').find('.js-input-check-out-show')) {
					// $(this).parents('.m-datepicker').find('.js-input-check-out-show').datepicker('show');

					$(this)
						.parents('.m-datepicker')
						.find('.js-input-check-out-show')
						.trigger('focus');

					$(this)
						.parents('.m-datepicker')
						.find('.js-input-check-out-show')
						.removeClass('js-input-check-out-show');
				}
			};
		}
		// Chỉ có dateCheckIn
		if (check_in_div.length !== 0 && check_out_div.length === 0) {
			endDate = null;
			endDate_show = null;
			//Sự kiện click date
			settings.onSelect = function (dateText, inst) {
				date_CI_select =
					$(this).hasClass('js-input-check-in') == true ? $(this).val() : '';
				//Xác định ngày được chọn
				if (date_CI_select != '' && date_CI_select != null) {
					//Cập nhật startDate
					startDate = ConvertUTCtimeStamp(ConvertUTCString(date_CI_select));
					startDate_show = ConvertTimeStamptoDf(startDate);
					//Cập nhật minDate cho dateCheckOut
					// settings.minDate = startDate_show;
					$(this)
						.siblings('.m-date-check-in')
						.html(
							editThemeCheckDate(
								'',
								'check-in',
								ConvertUTCString(date_CI_select),
							),
						);
				}
			};
		}
		// Chỉ có dateCheckOut
		if (check_in_div.length === 0 && check_out_div.length !== 0) {
			//Sự kiện click date
			settings.onSelect = function (dateText, inst) {
				date_CO_select =
					$(this).hasClass('js-input-check-out') == true ? $(this).val() : '';
				//Xác định ngày được chọn
				if (date_CO_select != '' && date_CO_select != null) {
					endDate = ConvertUTCtimeStamp(ConvertUTCString(date_CO_select));
					endDate_show = ConvertTimeStamptoDf(endDate);
					$(this)
						.siblings('.m-date-check-out')
						.html(
							editThemeCheckDate(
								'',
								'check-out',
								ConvertUTCString(date_CO_select),
							),
						);
				}
			};
		}

		// settings.onSelect = function (dateText, inst) {
		// 	// console.clear();
		// 	date_CI_select =
		// 		$(this).hasClass('js-input-check-in') == true ? $(this).val() : '';
		// 	date_CO_select =
		// 		$(this).hasClass('js-input-check-out') == true ? $(this).val() : '';
		// 	//Xác định ngày được chọn
		// 	if (date_CI_select != '' && date_CI_select != null) {
		// 		console.log(date_CI_select);
		// 	}
		// 	if (date_CO_select != '' && date_CO_select != null) {
		// 		console.log(date_CO_select);
		// 	}
		// };
		//Khởi tạo datepicker Check In
		if (check_in_div) {
			if (check_in_div)
				$(check_in_div).find('.js-input-check-in').datepicker(settings);
		}
		//Khởi tạo datepicker Check Out
		if (check_out_div) {
			if (check_out_div)
				$(check_out_div).find('.js-input-check-out').datepicker(settings);
		}
		$('.ui-datepicker').addClass('m-datepicker');
		//
		if (settings.showOn === 'both' || settings.showOn === 'button') {
			if (Defaults.iconDate !== iconDate) {
				$(this).find('.js-input-check-in').siblings('button').html(iconDate);
				$(this).find('.js-input-check-out').siblings('button').html(iconDate);
			}
		}
		// Delete settings old
		settings = [];
		update_options = [];
	};
	$('body').delegate('.m-check-in', 'click', function () {
		$(this).find('.m-input').trigger('focus');
	});
	$('body').delegate('.m-check-out', 'click', function () {
		$(this).find('.m-input').trigger('focus');
	});
})(jQuery);
