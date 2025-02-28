function ipv4Parser(ip, mask) {
  const ipParts = ip.split('.').map(Number);
  const maskParts = mask.split('.').map(Number);

  const networkBlock = ipParts.map((part, index) => part & maskParts[index]).join('.');
  const hostIdentifier = ipParts.map((part, index) => part & ~maskParts[index]).join('.');

  return [networkBlock, hostIdentifier];
}