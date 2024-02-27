import PageLayout from '../components/layouts/page';
import data from '../lib/data';
import Filer from '@cloudcannon/filer';

const filer = new Filer({ path: 'content' });

export default function Contact({ page }) {
	return (
		<PageLayout page={page}>
			<div className="columns">
				<div className="column">
				
					<label>Telefon</label>
					<p className="contact-info">
						<a href={`tel:${data.company.phone}`}>{data.company.phone}</a>
					</p>

					<label>Email</label>
					<p className="contact-info">
						<a href={`mailto:${data.company.contact_email_address}`}>{data.company.contact_email_address}</a>
					</p>

					<label>Adresă</label>
					<address
						className="contact-info"
						dangerouslySetInnerHTML={{ __html: data.company.address.replace(/,/g, '<br>') }}></address>
				</div>

				<div className="column mapWrapper">
					<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2847.7225900967187!2d26.160641776418476!3d44.459359299919356!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40b1f91c22c3cde5%3A0xa0abff878294f7a4!2sStr.%20Zorilor%202%2C%20Bucure%C8%99ti%20077085!5e0!3m2!1sro!2sro!4v1708269550962!5m2!1sro!2sro" width="600" height="450" allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
				</div>
			</div>
		</PageLayout>
	);
}

export async function getStaticProps({ params }) {
	const page = await filer.getItem('contact.md', { folder: 'pages' });

	return {
		props: {
			page: JSON.parse(JSON.stringify(page))
		}
	};
}
