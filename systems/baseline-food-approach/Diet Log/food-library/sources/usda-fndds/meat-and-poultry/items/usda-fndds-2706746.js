/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Meat & Poultry",
  "defaultMeasure": "1-cup",
  "description": "Meat mixed dishes",
  "id": "usda-fndds-2706746",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 252.0,
      "key": "1-cup",
      "kind": "unit",
      "label": "1 cup"
    },
    {
      "gramsPerUnit": 189.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    }
  ],
  "name": "Beef and vegetables, Hawaiian style",
  "nutritionPerBasis": {
    "calcium_mg": 47.0,
    "carbs_g": 14.2,
    "energy_kcal": 93.0,
    "fat_g": 2.24,
    "fibre_g": 1.8,
    "folate_ug": 35.0,
    "iron_mg": 1.1,
    "magnesium_mg": 39.0,
    "omega3_g": 0.031,
    "phosphorus_mg": 78.0,
    "potassium_mg": 259.0,
    "protein_g": 4.79,
    "salt_g": 1.6975,
    "sat_fat_g": 0.711,
    "sodium_mg": 679.0,
    "sugar_g": 5.6,
    "vitamin_a_ug": 95.0,
    "vitamin_c_mg": 1.9,
    "vitamin_e_mg": 0.87,
    "vitamin_k_ug": 3.5
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2706746",
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
