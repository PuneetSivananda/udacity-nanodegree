interface IRequestItem {
  width?: string;
  height?: string;
  name?: string;
}

interface ICacheItem {
  destPath?: string;
  height?: string;
  width?: string;
}

export { IRequestItem, ICacheItem }