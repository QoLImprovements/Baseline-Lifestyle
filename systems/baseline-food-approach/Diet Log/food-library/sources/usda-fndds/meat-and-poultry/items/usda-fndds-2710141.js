/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Meat & Poultry",
  "defaultMeasure": "1-pastel-5-1-2-x-2-1-4-x-1-4",
  "description": "Meat mixed dishes",
  "id": "usda-fndds-2710141",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 149.0,
      "key": "1-pastel-5-1-2-x-2-1-4-x-1-4",
      "kind": "unit",
      "label": "1 pastel (5-1/2\" x 2-1/4\" x 1/4\")"
    },
    {
      "gramsPerUnit": 149.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    }
  ],
  "name": "Puerto Rican pasteles",
  "nutritionPerBasis": {
    "calcium_mg": 34.0,
    "carbs_g": 17.4,
    "energy_kcal": 213.0,
    "fat_g": 13.2,
    "fibre_g": 2.2,
    "folate_ug": 32.0,
    "iron_mg": 0.81,
    "magnesium_mg": 28.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 101.0,
    "potassium_mg": 378.0,
    "protein_g": 7.08,
    "salt_g": 1.1975,
    "sat_fat_g": 2.56,
    "sodium_mg": 479.0,
    "sugar_g": 5.6,
    "vitamin_a_ug": 18.0,
    "vitamin_c_mg": 11.0,
    "vitamin_e_mg": 2.41,
    "vitamin_k_ug": 19.7
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2710141",
  "state": "Unspecified",
  "subcategory": "Meat mixed dishes",
  "tags": [
    "meat-and-poultry",
    "meat-mixed-dishes",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
