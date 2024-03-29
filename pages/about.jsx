import PageLayout from '../components/layouts/page';
import Filer from '@cloudcannon/filer';

const filer = new Filer({ path: 'content' });

export default function About({ page, staffMembers }) {
	return (
		<PageLayout page={page}>
			{/* <p>Meet the members of our capable team:</p>

			<ul className="staff-list">
				{staffMembers.map((staffMember, i) => (
					<StaffMember staffMember={staffMember} key={i} />
				))}
			</ul> */}
		</PageLayout>
	);
}

export async function getStaticProps({ params }) {
	const page = await filer.getItem('about.md', { folder: 'pages' });

	return {
		props: {
			page: JSON.parse(JSON.stringify(page)),
		}
	};
}
