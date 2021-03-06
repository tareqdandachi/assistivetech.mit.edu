function saveChanges(object, didDelete, didCreateFromCode) {

  var json = JSON.stringify(object);

  $.post("/helpers/writeJSON.php", {"file": 'teams.json',"json_data": json}, function() {
    $('#form').addClass('success')

    if (didDelete == false && didCreateFromCode == false) {

      return

    }

    if (didDelete || didCreateFromCode) {

      location.href = "/admin/projects";

    } else {clearForm()}

  })
    .done(function() {
      $('#form').removeClass('loading')
    })
    .fail(function() {
      $('#form').addClass('error')
    })

}

function clearForm() {

  var elements = document.getElementsByTagName("input");
  for (var ii=0; ii < elements.length; ii++) {
    if (elements[ii].type == "text") {
      elements[ii].value = "";
    }
  }

  var elements = document.getElementsByTagName("textarea");
  for (var ii=0; ii < elements.length; ii++) {
      elements[ii].value = "";
  }

  $('.dropdown')
    .dropdown('restore defaults')
  ;

  $('.checkbox')
    .dropdown('uncheck')
  ;

}

function loadJSON(year) {

  // teamData is the raw JSON imported from PHP! It will be used to write to /teams.json

  style = teamData[year+" Style"]

  winners = teamData[year+" Winners"]

  teams = teamData[year+" Teams"]

  teamMap = {}

  for (i = 0, len = teams.length; i < len; i++) {

    teamMap[teams[i]["id"]] = teams[i]

  }

  return [teamData, teamMap]

}

function appendProjectToYear(name, desc, detail, category, place, useTable, documentation, photo, year, id, calledFromCode) {

  console.log("HIIII"+place)

  if (!calledFromCode) { [item, map] = loadJSON(year) }

  if (id == undefined) {id = 1+Number(Object.keys(map).reduce(function(a, b){ return map[a] > map[b] ? a : b }));}

  appendable = ""

  if (place == 0) { category = "" } else {

    win_item = [place, id]

    if (category != "") {

      win_item.unshift(category)

    }

    item = appendObjectToKey(win_item, year+" Winners", item)

  }

  if (Math.floor((id+1)/100) > Math.floor(id/100)) {

    alert("ERROR ID Out Of Bound "+id)

  }

  for (i = 0, len = teams.length; i < len; i++) {

    if (name == teams[i]["Team Name"]) {

      appendable = "_" + id

    }

  }

  object =
  { "Team Name": name,
    "Project Description": desc,
    "Project Detail": detail,
    "Category": category,
    "Documentation": documentation,
    "Place": place,
    "Use Table": useTable,
    "image_append": appendable,
    "id": id }

  item = appendObjectToKey(object, year+" Teams", item)

  saveChanges(item, false, calledFromCode)

}

function getProjectData(predefinedID, calledFromCode) {

  form = $('#form')

  form.removeClass('error');
  form.removeClass('success');
  form.removeClass('loading');
  form.removeClass('warning');

  name = document.getElementById("name").value

  desc = document.getElementById("desc").value

  detail = document.getElementById("detail").value

  category = document.getElementById("category").value

  documentation = document.getElementById("docLink").value

  place = $('#place').dropdown('get value');

  if (place == "") { place = 0 }

  checkTable = $('#checkboxTable:checked').val() == "on";

  photo = ""

  year = document.getElementById("yearID").innerHTML

  data = [name, desc, detail, category, place, checkTable, year]

  empty = jQuery.inArray("", data) == 0

  console.log(empty)

  if (empty) {

    form.addClass('warning');
    return

  }

  form.addClass('loading');

  appendProjectToYear(name, desc, detail, category, place, checkTable, documentation, "FIX ME LATER", year, predefinedID, true)

}

function loadData() {

  [item, map] = loadJSON(project_year)

  document.getElementById("name").value = map[project_id]["Team Name"]

  document.getElementById("desc").value = map[project_id]["Project Description"]

  document.getElementById("detail").value = map[project_id]["Project Detail"]

  document.getElementById("category").value = map[project_id]["Category"]

  if (map[project_id]["Documentation"] == undefined) {

    map[project_id]["Documentation"] = ""

  }

  document.getElementById("docLink").value = map[project_id]["Documentation"]

  $('#place').dropdown('set selected', map[project_id]["Place"]);

  if (map[project_id]["Use Table"] == true) {

    $('#checkboxTable').checkbox('set checked');

  } else {

    $('#checkboxTable').checkbox('set unchecked');

  }

}

function performEditsOnProject() {

  $('#form').addClass('loading')

  deleteProject(true)

  getProjectData(project_id, true)

}

function deleteProject(calledFromCode) {

  $('#form').addClass('loading')

  [item, map] = loadJSON(project_year)

  if (map[project_id]["place"] != 0) {

    var new_winners = item[project_year+" Winners"].filter(function(arr) {

      console.log(arr[arr.length-1])
      return arr[arr.length-1]!=project_id;
    });

    console.log(new_winners)

    item[project_year+" Winners"] = new_winners

  }

  var new_arr = item[project_year+" Teams"].filter(function(dict) {
    return dict["id"]!=project_id;
  });

  item[project_year+" Teams"] = new_arr

  saveChanges(item, !(calledFromCode), false)

}

function appendObjectToKey(object, key, json) {

  json[key].push(object)

  return json

}

$('.ui.checkbox')
  .checkbox()
;

$('.dropdown')
  .dropdown()
;
