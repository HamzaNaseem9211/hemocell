import HomePage from "./components/pages/home/home-page";
import { Routes, Route } from "react-router-dom";
import DonateBloodPage from "./components/pages/donate-blood/donate-blood-page";
import NeedBloodPage from "./components/pages/need-blood/need-blood-page";

export default function App() {
	return (
		<>	
			<Routes>
				<Route exact path="/" element={<HomePage />} />
				
				<Route path="/donate-blood" element={<DonateBloodPage />} />
				<Route path="/need-blood" element={<NeedBloodPage />} />
				
			</Routes>		
		</>
	);
}
