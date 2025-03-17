import Image from "next/image";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

import { type Highlight } from '@/app/types/Highlight'

export default function HighlightCard({ highlight }: { highlight: Highlight }) {
  return (
    <Card sx={{ minWidth: 275 }}>
      <CardContent>
        <Typography gutterBottom sx={{ color: 'text.secondary', fontSize: 14 }}>
        {highlight.title}
        </Typography>
          <Image
            src={highlight.imgUrl ?? null}
            alt={`Thumbnail preview of ${highlight.title}`}
            height={100}
            width={100}
            loading="lazy"
          />
      </CardContent>
      {/* <CardActions>
        <Button size="small">Learn More</Button>
      </CardActions> */}
    </Card>
  )
}
