/** @jsxImportSource react */
import type { FunctionComponent } from 'react';
import './VersionSelect.css';
import { KNOWN_VERSIONS } from '../../consts';
import { langPathRegex } from '../../languages';

const VersionSelect: FunctionComponent<{ version: string }> = ({ version }) => {
	return (
		<div className="version-select-wrapper">
			<select
				className="version-select"
				value={version}
				onChange={(e) => {
					const newVersion = e.target.value;
					let actualDest = window.location.pathname.replace(langPathRegex, '/');
					if (actualDest == '/') actualDest = `/introduction`;
					window.location.pathname = '/' + newVersion + actualDest;
				}}
			>
				{KNOWN_VERSIONS.map((value) => {
					return (
						<option value={value} key={value}>
							{value}
						</option>
					);
				})}
			</select>
		</div>
	);
};

export default VersionSelect;
