export const mockData3 = {
  value: `
    require('MotivIO')
    require('Site')
    require('Facts');

    function importScript(guid_string)
       script = MotivIO.LoadExternalScript(guid_string) 
       pcall_result, handle, error_msg = pcall(load, script)
       if((pcall_result == true) and (handle ~= nil)) then
          handle()
          return true
       end
       error('Script: ' .. guid_string .. ' failed to run with error: ' .. error_msg)
       return false
    end

    importScript('REDACTED_GUID') -- LIB - SendGridV2

    local email_dispatcher = EMAIL():newDispatcher() -- Creating the email object

    function sendEmail(to, body, subject)
        
        from = "noreply@example.com"
        body_type = "text/html"
        if(subject == nil) then 
            subject = "System Alert"
        end
         
        email_dispatcher:NewMailAndSend(to, from, subject, body, body_type)
        
    end

    local body = "Here's some stuff for you..."
    sendEmail("recipient@example.com", body,"Hello I'm a Test Alarm")
  `
};