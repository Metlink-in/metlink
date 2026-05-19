'use client';
import SectionEditor from '../_components/SectionEditor';
import ArrayEditor from '../_components/ArrayEditor';

export default function StatsEditor() {
  return (
    <SectionEditor
      section="stats"
      title="Stats Bar"
      description="Numbers displayed in the stats section (e.g. 150+ Projects)."
      renderForm={(data, setData) => (
        <ArrayEditor
          items={(data as Record<string, string>[]) ?? []}
          onChange={setData}
          fields={[
            { key: 'value', label: 'Value (e.g. 150+)', half: true },
            { key: 'label', label: 'Label (e.g. Projects)', half: true },
          ]}
          addLabel="Add Stat"
          defaultItem={{ value: '', label: '' }}
        />
      )}
    />
  );
}
