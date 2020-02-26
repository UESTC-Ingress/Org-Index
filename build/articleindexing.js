var fs = require("fs");
var path = require("path");

var catagory = [
  {
    name: "news",
    sub: ["conference", "generic", "headline", "projects", "research"]
  }
];

for (var c in catagory) {
  for (var i in catagory[c].sub) {
    var output_obj = [];
    var filePath = path.resolve(
      "public/doc/" + catagory[c].name + "/" + catagory[c].sub[i]
    );
    if (!fs.existsSync(filePath)) {
      fs.mkdirSync(filePath);
    }
    var files = fs.readdirSync(filePath);
    files.forEach(function(filename) {
      var fileobj = readFileInfo(filePath, filename);
      if (fileobj != null) output_obj.push(fileobj);
    });
    var json = JSON.stringify(output_obj);
    fs.writeFileSync(
      "public/doc/catagory/" +
        catagory[c].name +
        "/" +
        catagory[c].sub[i] +
        ".json",
      json,
      "utf8"
    );
  }
}

function readFileInfo(path, file) {
  var fileContent = fs.readFileSync(path + "/" + file, "utf8");
  var title = fileContent.match(/(?<=\[title\]: <> \().*?(?=\))/g);
  var url = file.replace(".md", "");
  var time = fileContent.match(/(?<=\[time\]: <> \().*?(?=\))/g);
  if (title == null || time == null) {
    return null;
  }
  return {
    title: title[0],
    url: url,
    time: time[0]
  };
}
