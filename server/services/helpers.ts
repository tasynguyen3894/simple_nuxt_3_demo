export async function readJSONBody(event: Parameters<Parameters<typeof eventHandler>[0]>[0]): Promise<[undefined | unknown, any]> {
  const body = await readBody(event);
  if(typeof body === 'object') {
    return [undefined, body];
  }
  try {
    const bodyJSON = JSON.parse(body);
    return [undefined, bodyJSON]
  } catch (error) {
    return [error, undefined]
  }
}
