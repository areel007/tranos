export default function ({ redirect }) {
  if (sessionStorage.getItem('isLoggedIn') === 'true') {
    return redirect('/admin/dashboard/news-and-insights/all-blogs');
  }
}
