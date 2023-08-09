export default function Dynamic({ params }: { params: { id: string } }) {
  return (
    <div>
      <h1>hello dynamic {params.id}</h1>
    </div>
  );
}
