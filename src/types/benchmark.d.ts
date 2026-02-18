interface Server {
	key: string;
	label: string;
	color: string;
	tps: TPSData[];
	start_up_time: number;
	memory_usage: number;
	chunks: number;
	cpu: number;
	capacity: number;
}

interface TPSData {
	players: number;
	time_stamp: number;
}

