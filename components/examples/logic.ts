import { Data } from '../../types/data'
import * as _M from './main'
import * as _R from './rest'

const SetVol = (Book: Data, vol: number) => {
  Book.PART = vol
  Book.SUBTITLE = Book?.levels?.[vol - 1]

  return Book
}

export default class Examples {
  static Mathematics = (vol: number) => SetVol(_M.Mathematics, vol)
  static Physics = (vol: number) => SetVol(_M.Physics, vol)
  static Electronics = (vol: number) => SetVol(_M.Electronics, vol)
  static Informatics = (vol: number) => SetVol(_M.Informatics, vol)
  static Mechatronics = (vol: number) => SetVol(_M.Mechatronics, vol)
  static Chemistry = (vol: number) => SetVol(_M.Chemistry, vol)
  static Economics = (vol: number) => SetVol(_M.Economics, vol)
  static Biophysics = (vol: number) => SetVol(_M.Biophysics, vol)
  static Astrophysics = (vol: number) => SetVol(_M.Astrophysics, vol)
  static Biochemistry = (vol: number) => SetVol(_M.Biochemistry, vol)
  static Telecommunications = (vol: number) =>
    SetVol(_M.Telecommunications, vol)

  static PhysicsNanostr = (vol: number) => SetVol(_M.PhysicsNanostr, vol)
  static PhysicsNuclear = (vol: number) => SetVol(_M.PhysicsNuclear, vol)
  static QuantumEngineering = (vol: number) =>
    SetVol(_M.QuantumEngineering, vol)

  static Administration = (vol: number) => SetVol(_R.Administration, vol)
  static MedicalAnalytics = (vol: number) => SetVol(_R.MedicalAnalytics, vol)
  static Anthropology = (vol: number) => SetVol(_R.Anthropology, vol)
  static Archeology = (vol: number) => SetVol(_R.Archeology, vol)
  static Architecture = (vol: number) => SetVol(_R.Architecture, vol)
  static AutomaticsRobotics = (vol: number) =>
    SetVol(_R.AutomaticsRobotics, vol)
  static Bioeconomy = (vol: number) => SetVol(_R.Bioeconomy, vol)
  static Biology = (vol: number) => SetVol(_R.Biology, vol)
  static Biotechnology = (vol: number) => SetVol(_R.Biotechnology, vol)
  static CivilEngineering = (vol: number) => SetVol(_R.CivilEngineering, vol)
  static Dietetics = (vol: number) => SetVol(_R.Dietetics, vol)
  static Journalism = (vol: number) => SetVol(_R.Journalism, vol)
  static Econometrics = (vol: number) => SetVol(_R.Econometrics, vol)
  static Electromobility = (vol: number) => SetVol(_R.Electromobility, vol)
  static ElectricalEng = (vol: number) => SetVol(_R.ElectricalEng, vol)
  static Energetics = (vol: number) => SetVol(_R.Energetics, vol)
  static EuropeanStudies = (vol: number) => SetVol(_R.EuropeanStudies, vol)
  static Pharmacology = (vol: number) => SetVol(_R.Pharmacology, vol)
  static Philosophy = (vol: number) => SetVol(_R.Philosophy, vol)
  static Finances = (vol: number) => SetVol(_R.Finances, vol)
  static Cartography = (vol: number) => SetVol(_R.Cartography, vol)
  static Geography = (vol: number) => SetVol(_R.Geography, vol)
  static Geology = (vol: number) => SetVol(_R.Geology, vol)
  static Mining = (vol: number) => SetVol(_R.Mining, vol)
  static History = (vol: number) => SetVol(_R.History, vol)
  static HistoryOfArt = (vol: number) => SetVol(_R.HistoryOfArt, vol)
  static BiomedicalEng = (vol: number) => SetVol(_R.BiomedicalEng, vol)
  static MaterialEng = (vol: number) => SetVol(_R.MaterialEng, vol)
  static MetalEng = (vol: number) => SetVol(_R.MetalEng, vol)
  static GasEng = (vol: number) => SetVol(_R.GasEng, vol)
  static EnvironmentalEng = (vol: number) => SetVol(_R.EnvironmentalEng, vol)
  static CognitiveScience = (vol: number) => SetVol(_R.CognitiveScience, vol)
  static CulturalStudies = (vol: number) => SetVol(_R.CulturalStudies, vol)
  static Linguistics = (vol: number) => SetVol(_R.Linguistics, vol)
  static Cosmonautics = (vol: number) => SetVol(_R.Cosmonautics, vol)
  static Mechanics = (vol: number) => SetVol(_R.Mechanics, vol)
  static Medicine = (vol: number) => SetVol(_R.Medicine, vol)
  static DefenseStudies = (vol: number) => SetVol(_R.DefenseStudies, vol)
  static Ecology = (vol: number) => SetVol(_R.Ecology, vol)
  static Politology = (vol: number) => SetVol(_R.Politology, vol)
  static Law = (vol: number) => SetVol(_R.Law, vol)
  static Psychology = (vol: number) => SetVol(_R.Psychology, vol)
  static Accountancy = (vol: number) => SetVol(_R.Accountancy, vol)
  static ReligiousStudies = (vol: number) => SetVol(_R.ReligiousStudies, vol)
  static Sociology = (vol: number) => SetVol(_R.Sociology, vol)
  static InternationalStudies = (vol: number) =>
    SetVol(_R.InternationalStudies, vol)
  static Transport = (vol: number) => SetVol(_R.Transport, vol)
  static ManagementScience = (vol: number) => SetVol(_R.ManagementScience, vol)
}
