package cz.covid.po.api.helper;

import org.springframework.stereotype.Component;

@Component
public class PhoneNormalizerHelper {
    private static final String DOUBLE_ZERO = "00";

    public String normalizePhone(final String originalPhone) {
        String normalizedPhone = originalPhone.trim();

        if (DOUBLE_ZERO.equals(normalizedPhone.substring(0, 2))) {
            normalizedPhone = normalizedPhone.replaceFirst(DOUBLE_ZERO, "+");
        }

        return normalizedPhone;
    }
}
