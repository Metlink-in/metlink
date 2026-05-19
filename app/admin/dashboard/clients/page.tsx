'use client';
import SectionEditor from '../_components/SectionEditor';
import ArrayEditor from '../_components/ArrayEditor';

export default function ClientsEditor() {
  return (
    <SectionEditor
      section="clients"
      title="Clients"
      description="Client names shown in the trusted clients ticker."
      renderForm={(data, setData) => (
        <ArrayEditor
          items={(data as Record<string, string>[]) ?? []}
          onChange={setData}
          fields={[
            { key: 'name',     label: 'Company Name',         half: true },
            { key: 'industry', label: 'Industry',             half: true },
            { key: 'color',    label: 'Accent Color (hex)',   half: true },
            { key: 'logo',     label: 'Logo URL (optional)',  half: true },
          ]}
          addLabel="Add Client"
          defaultItem={{ name: '', industry: '', color: '#2B80F0', logo: '' }}
        />
      )}
    />
  );
}
