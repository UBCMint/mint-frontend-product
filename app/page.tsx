import { TypographyH1 } from '@/components/typography/typography';
import RecentButton from '@/components/ui/recent-button';

export default function Home() {
    return (
        <div className="p-8">
            <TypographyH1>MINT Frontend-Product</TypographyH1>
            
            <div className="mt-8">
                <RecentButton 
                    label="Node Name" 
                    description="Node Description Lorem Ipsum dolor sitamet Node Description Lorem Ipsum dolor sitamet"
                />

                <RecentButton 
                    label="Node Name" 
                    description="A different node description"
                />
            </div>
        </div>
    );
}
