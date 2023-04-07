function churchChange() {
    const wardLiEl = document.querySelector("#wardSelect");
    const selectEl = document.querySelector("#select");
    console.log(selectEl.value);
    if (selectEl.value === "The Church of Jesus Christ of Latter-day Saints") {
        wardLiEl.hidden = false;
    } else {
        wardLiEl.hidden = true;
    }
}
