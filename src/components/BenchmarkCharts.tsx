'use client';

import React from 'react';
import {
	ResponsiveContainer,
	LineChart,
	Line,
	BarChart,
	Bar,
	XAxis,
	YAxis,
	CartesianGrid,
	Tooltip,
	Legend,
	ReferenceLine,
	Cell,
} from 'recharts';

/* ─── Types ───────────────────────────────────────────── */

interface TPSData {
	players: number;
	time_stamp: number;
}

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

interface BarPoint {
	server: string;
	value: number;
	fill: string;
}

interface Props {
	servers: Server[];
}

/* ─── Shared chart config ─────────────────────────────── */

const AXIS_STYLE = {
	fontSize: 11,
	fontFamily: 'Karla, sans-serif',
	fill: 'var(--color-text-muted)',
};

const GRID_STROKE = 'var(--color-border)';

const TOOLTIP_STYLE: React.CSSProperties = {
	backgroundColor: 'var(--color-bg-secondary)',
	border: '1px solid var(--color-border-hover)',
	borderRadius: '1rem',
	fontFamily: 'Karla, sans-serif',
	fontSize: '0.8rem',
	color: 'var(--color-text-primary)',
	boxShadow: 'var(--shadow-lg)',
};

/* ─── Section wrapper ─────────────────────────────────── */

function Section({
	                 title,
	                 gradient,
	                 children,
                 }: {
	title: string;
	gradient: string;
	children: React.ReactNode;
}) {
	return (
		<section className="mb-10">
			<div className="flex items-center gap-3 mb-4">
				<div
					className="w-1 h-6 rounded-full"
					style={{ background: gradient }}
				/>

				<h2
					className="font-display font-semibold text-xl"
					style={{ color: 'var(--color-text-primary)' }}
				>
					{title}
				</h2>
			</div>

			<div className="card p-4 md:p-6">{children}</div>
		</section>
	);
}

/* ─── Shared bar chart ────────────────────────────────── */

function SingleBarChart({
	                        data,
	                        unit,
	                        suffix = '',
	                        lowerBetter = false,
	                        domain,
                        }: {
	data: BarPoint[];
	unit: string;
	suffix?: string;
	lowerBetter?: boolean;
	domain?: [number, number];
}) {
	return (
		<ResponsiveContainer width="100%" height={240}>
			<BarChart
				data={data}
				layout="vertical"
				margin={{ top: 0, right: 40, left: 8, bottom: 0 }}
			>
				<CartesianGrid
					horizontal={false}
					stroke={GRID_STROKE}
					strokeDasharray="3 3"
				/>

				<XAxis
					type="number"
					domain={domain}
					tick={AXIS_STYLE}
					tickLine={false}
					axisLine={false}
					tickFormatter={(v) => `${v}${suffix}`}
				/>

				<YAxis
					type="category"
					dataKey="server"
					tick={AXIS_STYLE}
					tickLine={false}
					axisLine={false}
					width={72}
				/>

				<Tooltip
					contentStyle={TOOLTIP_STYLE}
					cursor={{
						fill: 'var(--color-border)',
						opacity: 0.5,
					}}
					formatter={(v?: number) => {
						if (v == null) return ['', ''];
						return [`${v}${suffix} ${unit}`, ''];
					}}
				/>

				<Bar
					dataKey="value"
					radius={[0, 6, 6, 0]}
					maxBarSize={28}
				>
					{data.map((entry) => (
						<Cell
							key={entry.server}
							fill={entry.fill}
							opacity={0.9}
						/>
					))}
				</Bar>
			</BarChart>
		</ResponsiveContainer>
	);
}

/* ─── Transform Servers into BarPoints ────────────────── */

function serverToBarPoint(servers: Server[], key: keyof Server): BarPoint[] {
	return servers.map((s) => ({
		server: s.label,
		value: s[key] as number,
		fill: s.color,
	}));
}

/* ─── Main export ─────────────────────────────────────── */

export default function BenchmarkCharts({ servers }: Props) {
	return (
		<div className="space-y-2">

			{/* ── TPS Line Chart ── */}

			<Section
				title="TPS Under Player Load"
				gradient="linear-gradient(to right, var(--color-info), var(--color-primary))"
			>
				<p className="text-xs text-text-muted mb-4">
					20 TPS = perfect
				</p>

				<ResponsiveContainer width="100%" height={300}>
					<LineChart
						data={servers.map((v) => v.tps)}
						margin={{ top: 4, right: 16, left: 0, bottom: 0 }}
					>
						<CartesianGrid
							stroke={GRID_STROKE}
							strokeDasharray="3 3"
						/>

						<XAxis
							dataKey="players"
							tick={AXIS_STYLE}
							tickLine={false}
							axisLine={false}
							label={{
								value: 'Players online',
								position: 'insideBottom',
								offset: -2,
								style: AXIS_STYLE,
							}}
							height={40}
						/>

						<YAxis
							domain={[0, 20]}
							tick={AXIS_STYLE}
							tickLine={false}
							axisLine={false}
							label={{
								value: 'TPS',
								angle: -90,
								position: 'insideLeft',
								style: AXIS_STYLE,
							}}
						/>

						<ReferenceLine
							y={20}
							stroke="var(--color-surface)"
							strokeDasharray="4 4"
							label={{
								value: 'Perfect',
								position: 'right',
								style: {
									...AXIS_STYLE,
									fill: 'var(--color-surface)',
								},
							}}
						/>

						<Tooltip
							contentStyle={TOOLTIP_STYLE}
							formatter={(v?: number, name?: string) => {
								if (v == null) return ['', ''];
								const s = servers.find((x) => x.key === name);
								return [`${v.toFixed(1)} TPS`, s?.label ?? name ?? ''];
							}}
							labelFormatter={(l) => `${l} players`}
						/>

						<Legend
							wrapperStyle={{
								fontFamily: 'Karla, sans-serif',
								fontSize: '0.8rem',
								paddingTop: '12px',
							}}
							formatter={(value) =>
								servers.find((s) => s.key === value)?.label ?? value
							}
						/>

						{servers.map((s) => (
							<Line
								key={s.key}
								type="monotone"
								dataKey={s.key}
								stroke={s.color}
								strokeWidth={s.key === 'temper' ? 3 : 1.5}
								dot={false}
								activeDot={{
									r: 4,
									strokeWidth: 0,
								}}
								strokeOpacity={s.key === 'temper' ? 1 : 0.65}
							/>
						))}
					</LineChart>
				</ResponsiveContainer>
			</Section>

			{/* ── Bar Charts ── */}

			<div className="grid grid-cols-1 md:grid-cols-2 gap-4">

				<Section
					title="Startup Time"
					gradient="linear-gradient(to right, var(--color-accent), var(--color-info))"
				>
					<p className="text-xs text-text-muted mb-4">
						Seconds to first player-ready state. Lower is better.
					</p>

					<SingleBarChart
						data={serverToBarPoint(servers, 'start_up_time')}
						unit="seconds"
						suffix="s"
						lowerBetter
						domain={[0, 16]}
					/>
				</Section>

				<Section
					title="Memory Usage @ 100 Players"
					gradient="linear-gradient(to right, var(--color-primary), var(--color-surface))"
				>
					<p className="text-xs text-text-muted mb-4">
						Heap + off-heap in MB. Lower is better.
					</p>

					<SingleBarChart
						data={serverToBarPoint(servers, 'memory_usage')}
						unit="MB"
						suffix=" MB"
						lowerBetter
						domain={[0, 1500]}
					/>
				</Section>

				<Section
					title="Chunk Loading Speed"
					gradient="linear-gradient(to right, var(--color-surface), var(--color-secondary))"
				>
					<p className="text-xs text-text-muted mb-4">
						Chunks generated per second. Higher is better.
					</p>

					<SingleBarChart
						data={serverToBarPoint(servers, 'chunks')}
						unit="chunks/s"
						domain={[0, 520]}
					/>
				</Section>

				<Section
					title="CPU Usage @ 100 Players"
					gradient="linear-gradient(to right, var(--color-info), var(--color-surface))"
				>
					<p className="text-xs text-text-muted mb-4">
						Average across all cores under load. Lower is better.
					</p>

					<SingleBarChart
						data={serverToBarPoint(servers, 'cpu')}
						unit="%"
						suffix="%"
						lowerBetter
						domain={[0, 100]}
					/>
				</Section>
			</div>

			{/* ── Capacity ── */}

			<Section
				title="Max Stable Player Capacity"
				gradient="linear-gradient(to right, var(--color-primary), var(--color-accent))"
			>
				<p className="text-xs text-text-muted mb-4">
					Maximum concurrent players before TPS drops below 18. Higher is better.
				</p>

				<SingleBarChart
					data={serverToBarPoint(servers, 'capacity')}
					unit="players"
					domain={[0, 550]}
				/>
			</Section>
		</div>
	);
}
