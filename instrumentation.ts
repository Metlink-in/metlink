/**
 * Runs once, before any other server module loads. Some local/dev networks report a
 * nameserver (often 127.0.0.1) that nothing is actually listening on, so the MongoDB
 * driver's SRV/TXT lookup for mongodb+srv:// URIs fails with ECONNREFUSED even though
 * the machine's own DNS otherwise works fine — the driver snapshots its resolver at
 * import time, so setting this later (e.g. inside lib/mongodb.ts) is too late. Pointing
 * Node's DNS servers at reliable public resolvers here, before mongoose/mongodb ever
 * gets imported, fixes that without needing a different connection-string format.
 */
export async function register() {
  console.log('[DEBUG] instrumentation register() called, NEXT_RUNTIME=', process.env.NEXT_RUNTIME);
  if (process.env.NEXT_RUNTIME === 'nodejs') {
    const dns = await import('node:dns');
    try {
      dns.setServers(['1.1.1.1', '8.8.8.8']);
      console.log('[DEBUG] dns.setServers applied, now:', dns.getServers());
    } catch (e) { console.log('[DEBUG] dns.setServers threw:', e); }
  }
}
