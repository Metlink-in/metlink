'use client';
import SectionEditor from '../_components/SectionEditor';
import ArrayEditor from '../_components/ArrayEditor';
import SectionToggle from '../_components/SectionToggle';

export default function TestimonialsEditor() {
  return (
    <>
      <SectionToggle sectionKey="testimonials" label={'Show "Client Success Stories" section on the homepage'} />
      <SectionEditor
        section="testimonials"
        title="Testimonials"
        description="Client quotes displayed in the testimonials section."
        renderForm={(data, setData) => (
          <ArrayEditor
            items={(data as Record<string, string>[]) ?? []}
            onChange={setData}
            fields={[
              { key: 'quote',       label: 'Quote',              multiline: true },
              { key: 'name',        label: 'Client Name',        half: true },
              { key: 'title',       label: 'Title / Company',    half: true },
              { key: 'metric',      label: 'Metric (e.g. 65%)',  half: true },
              { key: 'metricLabel', label: 'Metric Label',       half: true },
            ]}
            addLabel="Add Testimonial"
            defaultItem={{ quote: '', name: '', title: '', metric: '', metricLabel: '' }}
          />
        )}
      />
    </>
  );
}
