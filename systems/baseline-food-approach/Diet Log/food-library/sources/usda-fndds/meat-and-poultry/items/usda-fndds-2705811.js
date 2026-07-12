/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Meat & Poultry",
  "defaultMeasure": "quantity-not-specified",
  "description": "Dips, gravies, other sauces",
  "id": "usda-fndds-2705811",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 65.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    },
    {
      "gramsPerUnit": 260.0,
      "key": "1-cup",
      "kind": "unit",
      "label": "1 cup"
    }
  ],
  "name": "Alfredo sauce with meat",
  "nutritionPerBasis": {
    "calcium_mg": 58.0,
    "carbs_g": 1.44,
    "energy_kcal": 171.0,
    "fat_g": 15.3,
    "fibre_g": 0.0,
    "folate_ug": 3.0,
    "iron_mg": 0.48,
    "magnesium_mg": 7.0,
    "omega3_g": 0.01,
    "phosphorus_mg": 76.0,
    "potassium_mg": 89.0,
    "protein_g": 6.52,
    "salt_g": 1.3,
    "sat_fat_g": 8.14,
    "sodium_mg": 520.0,
    "sugar_g": 0.73,
    "vitamin_a_ug": 111.0,
    "vitamin_c_mg": 0.1,
    "vitamin_e_mg": 0.27,
    "vitamin_k_ug": 1.4
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2705811",
  "state": "Unspecified",
  "subcategory": "Dips, gravies, other sauces",
  "tags": [
    "dips-gravies-other-sauces",
    "meat-and-poultry",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
