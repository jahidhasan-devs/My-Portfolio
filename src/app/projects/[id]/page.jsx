import { getProjects } from '@/lib/data';
import ProjectDetail from '@/components/ProjectDetail';

export async function generateStaticParams() {
  const projects = await getProjects();
  return projects.map((project) => ({
    id: project.id,
  }));
}

export default async function Page({ params }) {
  const { id } = await params;
  const projects = await getProjects();
  const project = projects.find((p) => p.id === id);

  return <ProjectDetail project={project} />;
}
