export function getStringQueryParams(params: OptionalRecord<string, string>) {
    const searchParams = new URLSearchParams(window.location.search);
    Object.entries(params).forEach(([name, value]) => {
        if (value !== undefined) {
            searchParams.set(name, value);
        } else if (searchParams.has(name)) {
            searchParams.delete(name);
        }
    });

    return `?${searchParams.toString()}`;
}

export function getQueryParams() {
    const params: Record<string, string> = {};
    const searchParams = new URLSearchParams(window.location.search);

    for (const [key, value] of searchParams.entries()) {
        params[key] = value;
    }

    return params;
}

// Функция добавления параметров строки запроса в URL

export function addQueryParams(params: OptionalRecord<string, string>) {
    window.history.pushState(null, '', getStringQueryParams(params));
}
