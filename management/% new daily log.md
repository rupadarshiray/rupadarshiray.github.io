---
created: <% tp.file.creation_date("YYYY-MM-DDTHH:mm:ss") %>
modified: <% tp.file.last_modified_date("YYYY-MM-DDTHH:mm:ss") %>
tags: [log]
<%*
  let title = tp.file.title
  if (title.startsWith("Untitled")) {
    title = await tp.system.prompt("Title");
if (title) {
title = title
} else {
title = tp.file.creation_date("YYYYMMDDHHmmss")
}
  }
  const fname = title.toLowerCase().replaceAll(" ", "-").replaceAll(":", "-")
  await tp.file.rename(fname);
%><%* tR += `title: '${title}'` %>
aliases: '' 
---

parent:: [[logs]]


<% tp.file.cursor() %>