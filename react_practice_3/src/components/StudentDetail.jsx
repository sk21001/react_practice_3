const StudentDetails = ({ name, track,score }) => {
  return (
    <div>
       <h2>{name}</h2>
      <h3>Track: {track}</h3>
      <h3>Score: {score}</h3>
    </div>
  );
};

const App = () => {
  const students = [
    { id: "s1", name: "Arun", track: "React", score: 85 },
    { id: "s2", name: "Priya", track: "React", score: 92 },
    { id: "s3", name: "Kumar", track: "React", score: 76 },
  ];

const sortedStudents = [...students].sort((a, b) => b.score - a.score);

  return (
    <>
      <h1>Students Details</h1>

      {sortedStudents.map((student) => (
        <StudentDetails key={student.id} name={student.name} track={student.track} score={student.score} />
      ))}
    </>
  );
};

export default App;
