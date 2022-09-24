import html2canvas, { Options } from 'html2canvas';
import useToast from 'src/hooks/useToast';

type DownloadOptions = {
  fileName: string;
  imageQuality?: number;
  canvasOptions?: Partial<Options>;
};

const defaultOptions: DownloadOptions = {
  fileName: 'default',
  imageQuality: 1,
  canvasOptions: {},
};
const IMAGETYPE = 'image/png';

const download = (url: string, filename: string) => {
  const linkElement = document.createElement('a');
  linkElement.download = filename;
  linkElement.href = url;
  linkElement.style.display = 'none';

  document.body.appendChild(linkElement);
  linkElement.click();
  document.body.removeChild(linkElement);
  useToast().success('다운로드에 성공했습니다!');
};

export const downloadToPNG = async (
  element: React.RefObject<HTMLElement> | null,
  options: DownloadOptions
) => {
  if (!element || !element.current) return;

  const { fileName, imageQuality, canvasOptions } = options;
  const canvas = await html2canvas(element.current, {
    ...defaultOptions,
    ...canvasOptions,
    useCORS: true,
  });

  download(canvas.toDataURL(IMAGETYPE, imageQuality), fileName);
};
