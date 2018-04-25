const aerospacearray = [
  'Created React website to help users create and manage technical reports using a ' +
  'Semantic UI front-end framework and other modern front-end technologies such as React-Router,'
  + 'React-Redux, Gulp, and NPM. Maintained version control using Github.',
  'Developed web interface for users to input reports into a MySQL database using a '
  + 'HTML/CSS/JQuery front-end and Perl back-end.',
  'Setup Request Tracker ticketing system on a CentOs/Apache 2.4 webserver to allow '
  + 'managers to assign workloads to Metrology Representatives.'];

const educationarray = [
  'B.S. Astrophysics', 'GPA: 3.58', 'Deans List: Fall 2014 & Winter 2015'
];

const pcdsarray = [
  'Assisted in long-term integration of the SSRL SMB Blu-Ice control system into the LCLS' +
  'EPICS photons controls system through extensive Linux configuration and testing.',
  'Configured Argonne National Laboratory’s JBluIce control system (Java-BluIce) to work on LCLS'
   + 'servers by installing Eclipse, Apache, and other packages.'
];

const lclsarray = [
  'Developed a C++ program to calculate the attenuation of the system from a given element, desired intensity, and energy level.',
  'Wrapped the attenuation program in Tcl/Tk for integration with the Blu-Ice GUI used by the SSRL beamline.',
  'Implemented a more efficient C++ algorithm to calculate the contrast of an image for use in an autofocusing program.'
];

const darkmatterarray = [
  'Characterized the linearity of photomultiplier tubes to find optimal peak currents and calibrated oscilloscopes and PWMs to achieve desired linearity output.',
  'Controlled and debugged linearity test using custom-written C++ software.',
  'Learned to build electric circuits to power LEDs. Worked with small capacitors, resistors, pots, and breadboards.'
];

const skillsarray = [
  'C++; Java; Python; SQL; Javascript; React; Tcl/Tk; Perl; Mathematica; HTML; CSS',
  'Visual Studio; Linux; VIM; MySQL; Windows; Gulp; NPM; Github; Excel; Word'
];

const extracurricularsarray = [
  'Gunn Cross Country and Track and Field: Most Improved Athlete 2012 & 2013',
  'Gunn Student Executive Council: Sports Commissioner',
  'UCLA Triathlon: Travel Coordinator & Mentorship Chair',
  'UCLA Debate Union'
];
export const pcds = {
  header: 'PCDS Controls Intern', array: pcdsarray, dates: 'Jun 2016 – Oct 2016'
};

export const aerospace = {
  header: 'Metrology Intern – The Aerospace Corporation', array: aerospacearray, dates: 'April 2017 – Current'
};

export const education = {
  header: 'University of California, Los Angeles', array: educationarray, dates: 'Oct 2014 - Jun 2018'
};

export const lcls = {
  header: 'Sample Delivery Developer – SLAC National Accelerator Laboratory', array: lclsarray, dates: 'Jul 2015 – Sep 2015'
};

export const darkmatter = {
  header: 'Lab Assistant – UCLA Dark Matter Detection Lab', array: darkmatterarray, dates: 'Feb 2015 – June 2015'
};

export const skills = {
  array: skillsarray
};

export const ecs = {
  array: extracurricularsarray
};
