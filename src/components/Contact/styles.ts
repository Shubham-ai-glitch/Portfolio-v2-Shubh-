import styled from "styled-components";

export const Container = styled.section`
  margin-top: 5rem;
  .email-box {
    background: var(--green);
    padding: 1rem 2rem;
    border-radius: 2rem;
    display: flex;
    align-items: center;
    max-width: 450px;
    margin: 3rem auto;
    overflow: hidden;
    a { word-break: break-all; font-size: 1.2rem; color: #000; font-weight: 600; margin-left: 1rem; }
    img { width: 3rem; }
  }
  .social-links-container {
    display: flex;
    justify-content: center;
    gap: 3rem;
    margin-bottom: 3rem;
    img { width: 50px; transition: 0.3s; &:hover { transform: scale(1.2); } }
  }
  .small-form {
    max-width: 350px;
    margin: 0 auto;
    form {
      display: flex;
      flex-direction: column;
      gap: 1rem;
      input, textarea { background: #1e1e1e; color: white; border: 1px solid var(--green); padding: 1rem; border-radius: 0.5rem; }
      button { background: var(--green); color: black; font-weight: bold; padding: 0.8rem; border: none; border-radius: 0.5rem; cursor: pointer; }
    }
  }
`
