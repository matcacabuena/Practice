import axios from 'axios';

export const api  = axios.create({
    baseURL: 'https://kyuxpfuoludzyvwmhzwl.supabase.co/rest/v1/',
    headers: {
        apikey: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imt5dXhwZnVvbHVkenl2d21oendsIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODU0NjU2NDksImV4cCI6MjAwMTA0MTY0OX0.qI8Cm22pAu7F9dc2eBlka45LrgW9o1Db3Ib_iD_y7J4",
        authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imt5dXhwZnVvbHVkenl2d21oendsIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODU0NjU2NDksImV4cCI6MjAwMTA0MTY0OX0.qI8Cm22pAu7F9dc2eBlka45LrgW9o1Db3Ib_iD_y7J4"
    }
})