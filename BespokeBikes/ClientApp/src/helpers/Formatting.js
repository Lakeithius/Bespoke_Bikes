export function FormatDate(date)
{
    var results = new Date(date);

    return results.toLocaleDateString();
}