import QuestionDetails from './QuestionDetails';

const QuestionIndexPage = () => {
    const data = [
        { title: "title1", body: "body1", author: { full_name: "name1" }, view_count: 100, created_at: new Date(), updated_at: new Date() },
        { title: "title2", body: "body2", author: { full_name: "name2" }, view_count: 100, created_at: new Date(), updated_at: new Date() },
        { title: "title3", body: "body3", author: { full_name: "name3" }, view_count: 100, created_at: new Date(), updated_at: new Date() },
        { title: "title4", body: "body4", author: { full_name: "name4" }, view_count: 100, created_at: new Date(), updated_at: new Date() } 
    ]
    return(
        <div>
            {
                data.map((q, i) => {
                    return <QuestionDetails
                        key={i}
                        title={q.title}
                        body={q.body}
                        author={q.author}
                        view_count={q.view_count}
                        created_at={q.created_at}
                        updated_at={q.updated_at}
                    />
                })
            }
        </div>
    )
}

export default QuestionIndexPage;
