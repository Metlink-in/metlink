'use client';
import SectionEditor from '../_components/SectionEditor';
import ArrayEditor from '../_components/ArrayEditor';

export default function ProcessEditor() {
  return (
    <SectionEditor
      section="process"
      title="Process"
      description="Three-step process section."
      renderForm={(data, setData) => (
        <ArrayEditor
          items={(data as Record<string, string>[]) ?? []}
          onChange={setData}
          fields={[
            { key: 'num',   label: 'Step Number (e.g. 01)', half: true },
            { key: 'title', label: 'Step Title',             half: true },
            { key: 'desc',  label: 'Description',           multiline: true },
          ]}
          addLabel="Add Step"
          defaultItem={{ num: '', title: '', desc: '' }}
        />
      )}
    />
  );
}
