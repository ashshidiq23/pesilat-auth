export default function ({ store, redirect }) {
    if (store.state.auth.loggedIn) {
        alert('Anda sudah login');
        return redirect('/');
    }
}
