export function openGoogleCalendar({
    title,
    details,
    location,
    start,
    end
}) {

    const url =
        `https://calendar.google.com/calendar/render?action=TEMPLATE` +
        `&text=${encodeURIComponent(title)}` +
        `&details=${encodeURIComponent(details)}` +
        `&location=${encodeURIComponent(location)}` +
        `&dates=${start}/${end}`;

    window.open(url, "_blank");
}