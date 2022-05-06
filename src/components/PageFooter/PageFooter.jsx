const PageFooter = () => {
    return (
        <footer className="page-footer brown darken-4">
            <div className="footer-copyright content">
                <div>
                    © {new Date().getFullYear()} @pervakam
                </div>
                <a className="grey-text text-lighten-4 right" href="#!">More Links</a>
            </div>
        </footer>
    )
}

export default PageFooter