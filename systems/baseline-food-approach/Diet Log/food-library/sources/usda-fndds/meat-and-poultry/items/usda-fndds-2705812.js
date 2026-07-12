/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Meat & Poultry",
  "defaultMeasure": "1-cup",
  "description": "Dips, gravies, other sauces",
  "id": "usda-fndds-2705812",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 260.0,
      "key": "1-cup",
      "kind": "unit",
      "label": "1 cup"
    },
    {
      "gramsPerUnit": 65.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    }
  ],
  "name": "Alfredo sauce with meat and added vegetables",
  "nutritionPerBasis": {
    "calcium_mg": 48.0,
    "carbs_g": 2.15,
    "energy_kcal": 148.0,
    "fat_g": 12.5,
    "fibre_g": 0.3,
    "folate_ug": 9.0,
    "iron_mg": 0.55,
    "magnesium_mg": 9.0,
    "omega3_g": 0.007,
    "phosphorus_mg": 78.0,
    "potassium_mg": 140.0,
    "protein_g": 6.47,
    "salt_g": 1.0375,
    "sat_fat_g": 6.52,
    "sodium_mg": 415.0,
    "sugar_g": 1.17,
    "vitamin_a_ug": 93.0,
    "vitamin_c_mg": 8.7,
    "vitamin_e_mg": 0.3,
    "vitamin_k_ug": 1.9
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2705812",
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
