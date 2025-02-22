import { TypographyH1 } from '@/components/typography/typography';
import RecentButton from '@/components/sidebar/recent-button';
import AppHeader from '@/components/ui-header/app-header';
import SettingsBar from '@/components/ui-header/settings-bar';

export default function Home() {
    return (
        <div className="flex p-2 flex-col min-h-screen">
            <AppHeader />
            <SettingsBar />

            <div className="p-8"></div>
        </div>
    );
}
