import { ThemeProvider, useTheme } from "./context";

function Component() {
  return (
 <ThemeProvider>
  <ChildComponent/>
 </ThemeProvider>
  );
}

const ChildComponent = () => {

  const context = useTheme()
  console.log(context)
  return (
    <div>
      <h1>title</h1>
      <button
        onClick={() => {
          if (context.theme === 'dark') {
            context.setTheme('system')
            return
          }
          context.setTheme('dark')
        }}
        className="btn btn-center"
      >
        toggle theme
      </button>
    </div>
  )
}

export default Component;
