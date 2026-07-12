/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Other Foods",
  "defaultMeasure": "quantity-not-specified",
  "description": "Dips, gravies, other sauces",
  "id": "usda-fndds-2705793",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 22.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    },
    {
      "gramsPerUnit": 15.0,
      "key": "1-tablespoon",
      "kind": "unit",
      "label": "1 tablespoon"
    }
  ],
  "name": "Welsh rarebit",
  "nutritionPerBasis": {
    "calcium_mg": 241.0,
    "carbs_g": 6.32,
    "energy_kcal": 165.0,
    "fat_g": 12.3,
    "fibre_g": 0.1,
    "folate_ug": 7.0,
    "iron_mg": 0.16,
    "magnesium_mg": 16.0,
    "omega3_g": 0.007,
    "phosphorus_mg": 176.0,
    "potassium_mg": 151.0,
    "protein_g": 7.5,
    "salt_g": 0.7,
    "sat_fat_g": 5.45,
    "sodium_mg": 280.0,
    "sugar_g": 4.21,
    "vitamin_a_ug": 149.0,
    "vitamin_c_mg": 0.1,
    "vitamin_e_mg": 0.61,
    "vitamin_k_ug": 5.2
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2705793",
  "state": "Unspecified",
  "subcategory": "Dips, gravies, other sauces",
  "tags": [
    "dips-gravies-other-sauces",
    "other-foods",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
