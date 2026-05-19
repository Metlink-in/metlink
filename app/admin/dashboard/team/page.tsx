'use client';
import SectionEditor from '../_components/SectionEditor';
import ArrayEditor from '../_components/ArrayEditor';

export default function TeamEditor() {
  return (
    <SectionEditor
      section="team"
      title="Team"
      description="Team members displayed on the Company page."
      renderForm={(data, setData) => (
        <ArrayEditor
          items={(data as Record<string, string>[]) ?? []}
          onChange={setData}
          fields={[
            { key: 'name',      label: 'Full Name',        half: true },
            { key: 'role',      label: 'Role / Title',     half: true },
            { key: 'specialty', label: 'Specialty',        half: true },
            { key: 'initials',  label: 'Initials (e.g. JB)', half: true },
            { key: 'color',     label: 'Accent Color (hex)', half: true },
          ]}
          addLabel="Add Team Member"
          defaultItem={{ name: '', role: '', specialty: '', initials: '', color: '#2B80F0' }}
        />
      )}
    />
  );
}
