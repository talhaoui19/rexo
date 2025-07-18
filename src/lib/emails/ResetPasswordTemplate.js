export default function resetPasswordTemplate(resetLink) {
  return `
    <div style="
        box-sizing: border-box;
        background-color: #f8f8fb;
        color: #718096;
        height: 100%;
        line-height: 1.4;
        margin: 0;
        padding: 0;
        width: 100%;
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto,
          Helvetica, Arial, sans-serif;
      ">
        <!-- Main Container -->
        <table width="100%" cellpadding="0" cellspacing="0" role="presentation" style="
          box-sizing: border-box;
          background-color: #f8f8fb;
          margin: 0;
          padding: 0;
          width: 100%;
        ">
            <tr>
                <td align="center" style="box-sizing: border-box">
                    <!-- Email Content Container -->
                    <table width="100%" cellpadding="0" cellspacing="0" role="presentation" style="
                box-sizing: border-box;
                margin: 0;
                padding: 0;
                width: 100%;
                max-width: 600px;
              ">
                        <!-- Header -->
                        <tr>
                            <td style="
                    box-sizing: border-box;
                    padding: 25px 0;
                    text-align: center;
                  ">
                                <a href="/" style="
                      font-size: 2.5rem;
                      user-select: none;
                      color: white;
                      font-weight: 700;
                      text-decoration: none;
                    ">
                                    R<span style="color: #262626">EXO</span>
                                    <span style="color: #2563eb"></span>
                                </a>
                            </td>
                        </tr>

                        <!-- Content Card -->
                        <tr>
                            <td style="box-sizing: border-box; padding: 0">
                                <table align="center" width="100%" cellpadding="0" cellspacing="0" role="presentation"
                                    style="
                      box-sizing: border-box;
                      background-color: #ffffff;
                      border-radius: 8px;
                      border: 1px solid #e8e5ef;
                      margin: 0 auto;
                      padding: 0;
                      width: 100%;
                      max-width: 570px;
                    ">
                                    <tr>
                                        <td style="box-sizing: border-box; padding: 32px">
                                            <h1 style="
                            box-sizing: border-box;
                            color: #318cef;
                            font-size: 18px;
                            font-weight: bold;
                            margin-top: 0;
                            text-align: left;
                          ">
                                                Hello!
                                            </h1>
                                            <p style="
                            box-sizing: border-box;
                            font-size: 16px;
                            line-height: 1.5em;
                            margin-top: 0;
                            text-align: left;
                          ">
                                                Click the button below to reset your password:
                                            </p>

                                            <!-- Button -->
                                            <table align="center" width="100%" cellpadding="0" cellspacing="0"
                                                role="presentation" style="
                            box-sizing: border-box;
                            margin: 30px auto;
                            padding: 0;
                            text-align: center;
                            width: 100%;
                          ">
                                                <tr>
                                                    <td align="center" style="box-sizing: border-box">
                                                        <a href="${resetLink}" style="
                                  box-sizing: border-box;
                                  border-radius: 4px;
                                  color: #fff;
                                  display: inline-block;
                                  overflow: hidden;
                                  text-decoration: none;
                                  background-color: #262626;
                                  padding: 8px 18px;
                                  font-weight: bold;
                                ">
                                                            Reset Password
                                                        </a>
                                                    </td>
                                                </tr>
                                            </table>

                                            <p style="
                            box-sizing: border-box;
                            font-size: 16px;
                            line-height: 1.5em;
                            margin-top: 0;
                            text-align: left;
                          ">
                                                This link will expire in 1 hour.
                                            </p>
                                        </td>
                                    </tr>
                                </table>
                            </td>
                        </tr>

                        <!-- Footer -->
                        <tr>
                            <td style="box-sizing: border-box">
                                <table align="center" width="100%" cellpadding="0" cellspacing="0" role="presentation"
                                    style="
                      box-sizing: border-box;
                      margin: 0 auto;
                      padding: 0;
                      text-align: center;
                      width: 100%;
                      max-width: 570px;
                    ">
                                    <tr>
                                        <td align="center" style="box-sizing: border-box; padding: 32px">
                                            <p style="
                            box-sizing: border-box;
                            line-height: 1.5em;
                            margin-top: 0;
                            color: #b0adc5;
                            font-size: 12px;
                            text-align: center;
                          ">
                                                © 2025 Rexo. All rights reserved.
                                            </p>
                                        </td>
                                    </tr>
                                </table>
                            </td>
                        </tr>
                    </table>
                </td>
            </tr>
        </table>
    </div>
  `;
}
