// no react or anything
let state = {};

// state management
function updateState(newState) {
	state = { ...state, ...newState };
	console.log(state);
}

// event handlers
$("input").change(function (e) {
    console.log(document.getElementsByTagName('input')[4]);
    console.log(document.getElementById('upload'));
	let files = document.getElementsByTagName('input')[4].files;
	let filesArr = Array.from(files);
	updateState({ files: files, filesArr: filesArr });

	renderFileList();
});

$(".files").on("click", "li > i", function (e) {
	let key = $(this).parent().attr("key");
	let curArr = state.filesArr;
	curArr.splice(key, 1);
	updateState({ filesArr: curArr });
	renderFileList();
});

// $("form").on("submit", function (e) {
// 	e.preventDefault();
// 	console.log(state);
// 	renderFileList();
// });

// render functions
function renderFileList() {
	let fileMap = state.filesArr.map((file, index) => {
		let suffix = "bytes";
		let size = file.size;
		if (size >= 1024 && size < 1024000) {
			suffix = "KB";
			size = Math.round((size / 1024) * 100) / 100;
		} else if (size >= 1024000) {
			suffix = "MB";
			size = Math.round((size / 1024000) * 100) / 100;
		}

		return `<li key="${index}">${file.name} <span class="file-size">${size} ${suffix}</span><i class="material-icons md-48"><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000"><path d="M0 0h24v24H0z" fill="none"/><path d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z"/></svg></i></li>`;

	});
	$("#fileUl").html(fileMap);
}
