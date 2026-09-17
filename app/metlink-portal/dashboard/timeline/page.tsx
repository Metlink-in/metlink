'use client';
import SectionEditor from '../_components/SectionEditor';
import ArrayEditor from '../_components/ArrayEditor';

export default function TimelineEditor() {
  return (
    <SectionEditor
      section="timeline"
      title="Company Timeline"
      description="Year-by-year milestones shown on the Company page."
      renderForm={(data, setData) => (
        <ArrayEditor
          items={(data as Record<string, string>[]) ?? []}
          onChange={setData}
          fields={[
            { key: 'year',  label: 'Year',        half: true },
            { key: 'event', label: 'Event Title',  half: true },
            { key: 'desc',  label: 'Description', multiline: true },
          ]}
          addLabel="Add Milestone"
          defaultItem={{ year: '', event: '', desc: '' }}
        />
      )}
    />
  );
}
