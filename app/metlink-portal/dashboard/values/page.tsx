'use client';
import SectionEditor from '../_components/SectionEditor';
import ArrayEditor from '../_components/ArrayEditor';

export default function ValuesEditor() {
  return (
    <SectionEditor
      section="values"
      title="Company Values"
      description="Values cards shown on the Company page."
      renderForm={(data, setData) => (
        <ArrayEditor
          items={(data as Record<string, string>[]) ?? []}
          onChange={setData}
          fields={[
            { key: 'title', label: 'Value Title',   half: true },
            { key: 'desc',  label: 'Description',  multiline: true },
          ]}
          addLabel="Add Value"
          defaultItem={{ title: '', desc: '' }}
        />
      )}
    />
  );
}
