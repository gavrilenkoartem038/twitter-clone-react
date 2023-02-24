export const getTweetTime = (date: string) => {
  const tweetDate = new Date(date);
  const dateNow = Date.now();

  const options: Intl.DateTimeFormatOptions = {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: 'numeric',
    minute: 'numeric',
  };

  if (dateNow - tweetDate.getTime() < 6e4) {
    return 'less then minute ago';
  }
  if (dateNow - tweetDate.getTime() < 3.6e6) {
    const minutes = Math.floor((dateNow - tweetDate.getTime())/6e4);
    return `${minutes} minutes ago`;
  }
  if (dateNow - tweetDate.getTime() < 8.64e7) {
    const hours = Math.floor((dateNow - tweetDate.getTime())/3.6e6);
    return `${hours} hours ago`;
  }
  return tweetDate.toLocaleString('en-US', options);
}