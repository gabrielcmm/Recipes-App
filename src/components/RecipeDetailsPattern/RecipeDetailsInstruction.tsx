type RecipeDetailsInstructionsProps = {
  instruction: string;
  videoUrl?: string;
};

function RecipeDetailsInstruction(
  { instruction, videoUrl = undefined }: RecipeDetailsInstructionsProps,
) {
  return (
    <div className="p-2">
      <h2 className="text-2xl mb-3">Instructions</h2>
      <p
        data-testid="instructions"
        className="prose whitespace-pre-wrap text-text-light-100"
      >
        {instruction}
      </p>

      {videoUrl && (
        <div>
          <h2 className="text-2xl my-3">Video</h2>
          <iframe
            className="w-full aspect-video rounded-xl"
            data-testid="video"
            title="video"
            src={ videoUrl }
          />
        </div>
      )}
    </div>
  );
}

export default RecipeDetailsInstruction;
