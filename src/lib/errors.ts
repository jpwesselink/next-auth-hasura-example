/* eslint-disable max-classes-per-file */
export class CTAError extends Error {
  constructor(message: string) {
    super(message);
    this.name = this.constructor.name;
  }
}

export class CTAHttpError extends CTAError {
  statusCode: number;

  constructor(message: string, statusCode: number) {
    super(message);
    this.statusCode = 400 || statusCode;
  }
}

export class EnvVarMissingError extends CTAHttpError {
  constructor(message: string, statusCode?: number) {
    super(`Env var \`${message}\` missing`, statusCode || 400);
  }
}

export class HeaderMissingError extends CTAHttpError {
  constructor(message: string, statusCode?: number) {
    super(`Header \`${message}\` missing`, statusCode || 400);
  }
}

export class CTAMissingDataError extends CTAHttpError {
  constructor(message: string, statusCode?: number) {
    super(`\`${message}\` is undefined`, statusCode || 400);
  }
}

export class CTAHasuraMissingEventDataError extends CTAHttpError {
  constructor(message: string, statusCode?: number) {
    super(
      `\`${message}\` missing from Hasura event payload`,
      statusCode || 400
    );
  }
}

export class CTAUnauthorizedError extends CTAHttpError {
  constructor(message?: string, statusCode?: number) {
    super(message || 'Unauthorized', statusCode || 401);
  }
}

export class CTAMissingClaimError extends CTAHttpError {
  constructor(message: string, statusCode?: number) {
    super(`Claim \`${message}\` missing`, statusCode || 400);
  }
}
export class CTAWrongClaimError extends CTAHttpError {
  constructor(message: string, statusCode?: number) {
    super(`Wrong claim \`${message}\``, statusCode || 400);
  }
}
