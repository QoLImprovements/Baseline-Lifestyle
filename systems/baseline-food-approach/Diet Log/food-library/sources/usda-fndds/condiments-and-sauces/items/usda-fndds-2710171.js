/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Condiments & Sauces",
  "defaultMeasure": "1-tablespoon",
  "description": "Dips, gravies, other sauces",
  "id": "usda-fndds-2710171",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 16.0,
      "key": "1-tablespoon",
      "kind": "unit",
      "label": "1 tablespoon"
    },
    {
      "gramsPerUnit": 32.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    }
  ],
  "name": "Hollandaise sauce",
  "nutritionPerBasis": {
    "calcium_mg": 52.0,
    "carbs_g": 1.03,
    "energy_kcal": 546.0,
    "fat_g": 58.0,
    "fibre_g": 0.0,
    "folate_ug": 38.0,
    "iron_mg": 0.86,
    "magnesium_mg": 3.0,
    "omega3_g": 0.076,
    "phosphorus_mg": 131.0,
    "potassium_mg": 57.0,
    "protein_g": 5.4,
    "salt_g": 0.8225,
    "sat_fat_g": 30.2,
    "sodium_mg": 329.0,
    "sugar_g": 0.77,
    "vitamin_a_ug": 569.0,
    "vitamin_c_mg": 3.9,
    "vitamin_e_mg": 1.71,
    "vitamin_k_ug": 4.4
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2710171",
  "state": "Unspecified",
  "subcategory": "Dips, gravies, other sauces",
  "tags": [
    "condiments-and-sauces",
    "dips-gravies-other-sauces",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
