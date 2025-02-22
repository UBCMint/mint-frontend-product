import AppHeader from '@/components/ui-header/app-header';
import SettingsBar from '@/components/ui-header/settings-bar';
import Sidebar from '@/components/ui-sidebar/sidebar';
import ReactFlowView from '@/components/ui-react-flow/react-flow-view';
export default function Home() {
    return (
        <div className="h-screen flex flex-col">
            <div className="flex flex-col">
                <AppHeader />
                <SettingsBar />
            </div>

            {/* Bottom section for workspace and sidebar */}
            <div className="flex-1 flex">
                <ReactFlowView />
            </div>
        </div>
    );
}
