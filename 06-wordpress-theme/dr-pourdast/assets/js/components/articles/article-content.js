/**
 * Article content typography and block rendering.
 */

/**
 * Renders a single content block within article body.
 * @param {Object} block
 * @returns {string}
 */
function renderArticleBlock(block) {
  switch (block.type) {
    case "heading":
      return (
        '<h' +
        block.level +
        ' class="article-prose__heading article-prose__heading--h' +
        block.level +
        '" id="' +
        (block.id || "") +
        '">' +
        block.text +
        "</h" +
        block.level +
        ">"
      );

    case "paragraph":
      return '<p class="article-prose__paragraph">' + block.text + "</p>";

    case "list":
      var tag = block.ordered ? "ol" : "ul";
      var itemsHtml = block.items
        .map(function (item) {
          return "<li>" + item + "</li>";
        })
        .join("");

      return (
        "<" +
        tag +
        ' class="article-prose__list' +
        (block.ordered ? " article-prose__list--ordered" : "") +
        '" role="list">' +
        itemsHtml +
        "</" +
        tag +
        ">"
      );

    case "blockquote":
      return (
        '<blockquote class="article-prose__blockquote">' +
        block.text +
        "</blockquote>"
      );

    case "table":
      var headerHtml = block.headers
        .map(function (header) {
          return "<th scope=\"col\">" + header + "</th>";
        })
        .join("");

      var rowsHtml = block.rows
        .map(function (row) {
          var cells = row
            .map(function (cell) {
              return "<td>" + cell + "</td>";
            })
            .join("");

          return "<tr>" + cells + "</tr>";
        })
        .join("");

      return (
        '<div class="article-prose__table-wrap">' +
        '<table class="article-prose__table">' +
        "<thead><tr>" +
        headerHtml +
        "</tr></thead>" +
        "<tbody>" +
        rowsHtml +
        "</tbody></table></div>"
      );

    case "image":
      var captionHtml = block.caption
        ? "<figcaption>" + block.caption + "</figcaption>"
        : "";

      return (
        '<figure class="article-prose__figure">' +
        '<img src="' +
        block.src +
        '" alt="' +
        (block.alt || "") +
        '" class="article-prose__image" loading="lazy" decoding="async"' +
        (block.width ? ' width="' + block.width + '"' : "") +
        (block.height ? ' height="' + block.height + '"' : "") +
        ">" +
        captionHtml +
        "</figure>"
      );

    case "callout":
      return renderArticleCallout(block);

    default:
      return "";
  }
}

/**
 * Renders the article prose content from blocks.
 * @param {Object} body
 * @returns {string}
 */
function renderArticleProse(body) {
  if (!body || !body.blocks) return "";

  return body.blocks
    .map(function (block) {
      return renderArticleBlock(block);
    })
    .join("");
}
