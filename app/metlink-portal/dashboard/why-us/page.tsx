'use client';
import SectionEditor from '../_components/SectionEditor';
import ArrayEditor from '../_components/ArrayEditor';

export default function WhyUsEditor() {
  return (
    <SectionEditor
      section="whyus"
      title="Why Us"
      description="Six value proposition cards shown on the homepage."
      renderForm={(data, setData) => (
        <ArrayEditor
          items={(data as Record<string, string>[]) ?? []}
          onChange={setData}
          fields={[
            { key: 'title', label: 'Title',       half: true },
            { key: 'desc',  label: 'Description', multiline: true },
          ]}
          addLabel="Add Card"
          defaultItem={{ title: '', desc: '' }}
        />
      )}
    />
  );
}
