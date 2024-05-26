package org.example.chaos_dice_project.exception;

import org.springframework.web.servlet.ModelAndView;
import org.springframework.web.servlet.handler.AbstractHandlerExceptionResolver;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.util.Arrays;

import static org.apache.logging.log4j.LogManager.getLogger;

public class ExceptionResolver extends AbstractHandlerExceptionResolver {

    @Override
    protected ModelAndView doResolveException(HttpServletRequest request, HttpServletResponse response, Object handler, Exception ex) {
        StackTraceElement[] stackTraceElements = ex.getStackTrace();
        if (stackTraceElements != null) {
            int traceNum = 0;
            for (int i = 0; i < stackTraceElements.length; i++) {
                StackTraceElement element = stackTraceElements[i];
                String className = element.getClassName();
                if ("java.base/jdk.internal.reflect.NativeMethodAccessorImpl".equals(className)) {
                    break;
                }
                traceNum = i;
            }
            ex.setStackTrace(Arrays.copyOfRange(stackTraceElements, 0, traceNum + 1));
        }

        // 로그 메시지에 예외 메시지만 포함시킵니다. 스택 트레이스는 로그에 포함되지 않습니다.
        getLogger().error("Resolved exception: {}", ex.getMessage());

        // 예외 처리 후, 처리를 계속 진행하지 않고 종료
        return new ModelAndView(); // 또는 null을 반환하여 다른 예외 리졸버로 처리를 넘기지 않음
    }
}
