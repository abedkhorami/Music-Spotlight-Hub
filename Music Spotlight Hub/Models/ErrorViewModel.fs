namespace Music_Spotlight_Hub.Models

open System

type ErrorViewModel =
    { RequestId: string }

    member this.ShowRequestId =
        not (String.IsNullOrEmpty(this.RequestId))
