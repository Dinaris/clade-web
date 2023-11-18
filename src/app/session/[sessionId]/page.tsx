const SessionPage = ({params}: any) => {
  const sessionId = params.sessionId
  console.log('session Id', sessionId)
  return (
    <div className={"w-full flex justify-center pt-[92px]"}>
      <div className="flex gap-[64px] max-w-[912px]">
        <iframe src={`https://192.168.226.76/${sessionId}`} allow="microphone" width="600" height="1000" id="myIframe" className="rounded-2xl"></iframe>
        <div className="w-[300px] h-full bg-black" />
      </div>
    </div>
  )
}

export default SessionPage