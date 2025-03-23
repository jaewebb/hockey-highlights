import Image from "next/image";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

export default function HockeyCard({
  altText,
  height,
  imgSrc,
  label,
  useExternalImageLoader,
  width,
}: {
  altText: string,
  height: number,
  imgSrc: string,
  label: string,
  useExternalImageLoader: boolean,
  width: number,
}) {
  const externalImageLoader = ({ src }: { src: string }) => src
  return (
    <Card sx={{ minWidth: 275 }}>
      <CardContent>
        <Typography gutterBottom sx={{ color: 'text.secondary', fontSize: 14 }}>
          {label}
        </Typography>
          <Image
            loader={useExternalImageLoader ? externalImageLoader : undefined}
            src={imgSrc ?? null}
            alt={altText}
            height={height}
            width={width}
            loading="lazy"
          />
      </CardContent>
    </Card>
  )
}
