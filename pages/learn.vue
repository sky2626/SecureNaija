<template>
    <div class="p-6 bg-gray-50 min-h-screen">
        <div class="max-w-4xl mx-auto bg-white shadow-md rounded-lg p-6">
            <Mini />
            <h1 class="text-2xl font-bold mb-4 text-blue-600">Introduction to Cyber Hygiene</h1>

            <section>
                <h2 class="text-xl font-semibold mb-2">1. What is Cyber Hygiene?</h2>
                <p class="mb-4">
                    Cyber hygiene refers to the practices and steps individuals take to maintain the security of their
                    devices, networks, and personal information. Good cyber hygiene helps protect against cyber threats
                    like viruses, hacking, and data theft.
                </p>
            </section>

            <section>
                <h2 class="text-xl font-semibold mb-2">2. Why is Cyber Hygiene Important?</h2>
                <ul class="list-disc list-inside mb-4">
                    <li>It helps protect sensitive information.</li>
                    <li>It prevents attacks on devices (Computers, Phones, Networks).</li>
                    <li>It prevents financial loss from cybercrime.</li>
                    <li>It safeguards your privacy.</li>
                </ul>
            </section>

            <section>
                <h2 class="text-xl font-semibold mb-2">Common Cyber Threats</h2>
                <ol class="list-decimal list-inside mb-4">
                    <li>
                        <strong>Phishing Attacks:</strong> Cybercriminals trick people into giving personal information
                        by
                        pretending to be a trusted organization or person.
                    </li>
                    <li>
                        <strong>Malware Attack:</strong> Malware is software designed to harm your computer.
                    </li>
                    <li>
                        <strong>Password Attacks:</strong> Weak passwords can make it easy for cybercriminals to access
                        your
                        accounts.
                    </li>
                    <li>
                        <strong>Ransomware Attack:</strong> Malicious software (malware) that encrypts and locks digital
                        files,
                        demanding payment in exchange for decryption.
                    </li>
                </ol>
            </section>

            <section>
                <h2 class="text-xl font-semibold mb-2">Best Practices for Cyber Hygiene</h2>
                <ol class="list-decimal list-inside mb-4">
                    <li>
                        <strong>Use Strong Passwords:</strong> Make sure your passwords are long, unique, and contain
                        letters,
                        numbers, and symbols. <span class="text-blue-500">E.g: maLam%@5%gOni</span>
                    </li>
                    <li>
                        <strong>Enable Two-Factor Authentication (2FA):</strong> This adds an extra layer of security by
                        requiring
                        an additional verification step when logging in.
                    </li>
                    <li>
                        <strong>Avoid Public Wi-Fi for Sensitive Transactions:</strong> Public networks are less secure.
                        Avoid
                        banking or shopping online when connected to these networks.
                    </li>
                    <li>
                        <strong>Update Your Software Regularly:</strong> Keeping your software up-to-date helps protect
                        against
                        known vulnerabilities.
                    </li>
                    <li>
                        <strong>Be Careful with Links and Attachments:</strong> Only click on links or open attachments
                        from
                        trusted sources.
                    </li>
                </ol>
            </section>

            <section>
                <h2 class="text-xl font-semibold mb-2">How to Report Cyber Incidents?</h2>
                <ol class="list-decimal list-inside mb-4">
                    <li>
                        <strong>Identifying Suspicious Activity:</strong> Signs include unusual requests for personal
                        information, unexpected pop-ups, or unknown transactions.
                    </li>
                    <li>
                        <strong>Reporting to Authorities:</strong> Victims can report any suspicious activity to local
                        authorities or relevant cybersecurity organizations, such as:
                        <ul class="list-disc list-inside ml-6 mt-2">
                            <li>
                                <strong>Nigeria Police Force (NPF) Cybercrime Unit:</strong> 08064888576,
                                <a href="mailto:npf.cybercrimereport@police.ng" class="text-blue-500 underline">
                                    npf.cybercrimereport@police.ng
                                </a>
                            </li>
                            <li>
                                <strong>Economic and Financial Crimes Commission (EFCC):</strong> 08099922222,
                                <a href="mailto:efcc@nigeriaefcc" class="text-blue-500 underline">efcc@nigeriaefcc</a>
                            </li>
                            <li>
                                <strong>Nigeria Computer Emergency Response Team (ngCERT):</strong> 08033062222,
                                <a href="mailto:info@cert.gov.ng" class="text-blue-500 underline">info@cert.gov.ng</a>
                            </li>
                            <li>
                                <strong>National Information Technology Development Agency (NITDA):</strong>
                                <a href="mailto:info@nitda.gov.ng" class="text-blue-500 underline">info@nitda.gov.ng</a>
                            </li>
                        </ul>
                    </li>
                </ol>
            </section>
        </div>
    </div>
</template>

<script >
import Mini from '~/components/mini.vue';


</script>

<style scoped>
/* You can add custom styles here if necessary */
</style>