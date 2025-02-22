import AppHeader from '@/components/ui-header/app-header';
import SettingsBar from '@/components/ui-header/settings-bar';
import Sidebar from '@/components/ui-sidebar/sidebar';

export default function Home() {
    return (
        <div className="h-screen">
            <AppHeader />
            <SettingsBar />
            <Sidebar />
        </div>
    );
}
