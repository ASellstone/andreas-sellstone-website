export function hasContentWrapper() {
    if (document.querySelector(".content-wrapper")) {
        document.body.classList.add("has-content-wrapper");
    }
}