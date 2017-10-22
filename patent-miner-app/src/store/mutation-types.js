import * as Account from './modules/account';
import * as Patent from './modules/patent';
import * as Applicant from './modules/applicant';
import * as Search from './modules/search';

export const ACCOUNT_REGISTER_SET_USERNAME = `account/register/${Account.REGISTER_SET_USERNAME}`;
export const ACCOUNT_REGISTER_SET_FIRSTNAME = `account/register/${Account.REGISTER_SET_FIRSTNAME}`;
export const ACCOUNT_REGISTER_SET_LASTNAME = `account/register/${Account.REGISTER_SET_LASTNAME}`;
export const ACCOUNT_REGISTER_SET_GENDER = `account/register/${Account.REGISTER_SET_GENDER}`;
export const ACCOUNT_REGISTER_SET_TYPE = `account/register/${Account.REGISTER_SET_TYPE}`;
export const ACCOUNT_REGISTER_SET_RECEIVEMESSAGES = `account/register/${Account.REGISTER_SET_RECEIVEMESSAGES}`;
export const ACCOUNT_REGISTER_SET_AGREERULES = `account/register/${Account.REGISTER_SET_AGREERULES}`;

export const ACCOUNT_FORGOTPASSWORD_SET_USERNAME = `account/forgotPassword/${Account.FORGOTPASSWORD_SET_USERNAME}`;

export const ACCOUNT_LOGIN_SET_USERNAME = `account/login/${Account.LOGIN_SET_USERNAME}`;
export const ACCOUNT_LOGIN_SET_PASSWORD = `account/login/${Account.LOGIN_SET_PASSWORD}`;


export const PATENT_SHOW_SHOW_SET_TITLE = `patent/show/${Patent.SHOW_SET_TITLE}`;
export const PATENT_SHOW_SET_ENTITLE = `patent/show/${Patent.SHOW_SET_ENTITLE}`;
export const PATENT_SHOW_SET_PATENTNO = `patent/show/${Patent.SHOW_SET_PATENTNO}`;
export const PATENT_SHOW_SET_ISSUEDATE = `patent/show/${Patent.SHOW_SET_ISSUEDATE}`;
export const PATENT_SHOW_SET_ABSTRACT = `patent/show/${Patent.SHOW_SET_ABSTRACT}`;
export const PATENT_SHOW_SET_ENABSTRACT = `patent/show/${Patent.SHOW_SET_ENABSTRACT}`;
export const PATENT_SHOW_SET_APPLICATION = `patent/show/${Patent.SHOW_SET_APPLICATION}`;
export const PATENT_SHOW_SET_CLASSIFICATION = `patent/show/${Patent.SHOW_SET_CLASSIFICATION}`;
export const PATENT_SHOW_SET_INVENTORS = `patent/show/${Patent.SHOW_SET_INVENTORS}`;

export const APPLICATION_SHOW_SET_ID = `applicant/applicant/${Applicant.SHOW_SET_ID}`;
export const APPLICATION_SHOW_SET_NAME = `applicant/applican/${Applicant.SHOW_SET_NAME}`;
export const APPLICATION_SHOW_SET_ENNAME = `applicant/applican/${Applicant.SHOW_SET_ENNAME}`;
export const APPLICATION_SHOW_SET_ADDRESS = `applicant/applican/${Applicant.SHOW_SET_ADDRESS}`;
export const APPLICATION_SHOW_SET_POSTCODE = `applicant/applican/${Applicant.SHOW_SET_POSTCODE}`;

export const SEARCH_SET_TYPE = `search/${Search.SEARCH_SET_TYPE}`;
export const SEARCH_SET_QUERY = `search/${Search.SEARCH_SET_QUERY}`;
export const SEARCH_SET_PAGEINDEX = `search/${Search.SEARCH_SET_PAGEINDEX}`;
export const SEARCH_SET_PAGESIZE = `search/${Search.SEARCH_SET_PAGESIZE}`;
