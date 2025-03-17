import Image from "next/image";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

import { type League } from '@/app/types/League'

export default function LeagueCard({ league }: { league: League }) {
  return (
    <Card sx={{ minWidth: 275 }}>
      <CardContent>
        <Typography gutterBottom sx={{ color: 'text.secondary', fontSize: 14 }}>
        {league.name}
        </Typography>
          <Image
            src={league.logo ?? null}
            alt={`League logo of ${league.name}`}
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
