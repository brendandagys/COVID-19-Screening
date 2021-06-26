/// <reference types="react" />
declare const Question: ({ questionText, index, markQuestionAnswered, toggleShowFail, }: {
    questionText: string;
    index: number;
    markQuestionAnswered: (operation: 'add' | 'subtract') => void;
    toggleShowFail: () => void;
}) => JSX.Element;
export default Question;
