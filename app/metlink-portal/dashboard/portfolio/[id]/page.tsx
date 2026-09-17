'use client';
import { useEffect, useState } from 'react';
import { use } from 'react';
import ProjectForm from '../../_components/ProjectForm';

export default function EditProject({ params }: { params: Promise<{ id: string }> }) {
  const { id } = use(params);
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`/api/admin/portfolio/${id}`)
      .then(r => r.json())
      .then(d => { setData(d); setLoading(false); });
  }, [id]);

  if (loading) return <div style={{ color: 'rgba(255,255,255,0.4)', textAlign: 'center', marginTop: 80 }}>Loading…</div>;

  return <ProjectForm initial={data ?? undefined} />;
}
