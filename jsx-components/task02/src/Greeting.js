/* Add the Profile function here */

// const Profile = ({ name, bio }) => {
//   return (
//     <div>
//       {/* <h1>{name}</h1>
//       <p>{bio}</p> */}
//     </div>
//   );
// };

const Greeting = () => {
  return (
    <form>
      <div>
        <h4>Greeting Form:</h4>
        <form>
          Name: <input type="text" name="title" placeholder="Name" required />
          <br />
          <br />
          Bio:
          <input type="text" name="start_datetime" placeholder="Bio" required />
          <br />
          <br />
          <button type="submit">Submit</button>
        </form>
      </div>
    </form>
  );
};

export default Greeting;
