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
  "id": "usda-fndds-2706624",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 249.0,
      "key": "1-cup",
      "kind": "unit",
      "label": "1 cup"
    },
    {
      "gramsPerUnit": 311.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    }
  ],
  "name": "Beef, rice, and vegetables including carrots, broccoli, and/or dark-green leafy; cheese sauce",
  "nutritionPerBasis": {
    "calcium_mg": 97.0,
    "carbs_g": 15.5,
    "energy_kcal": 147.0,
    "fat_g": 5.51,
    "fibre_g": 0.8,
    "folate_ug": 37.0,
    "iron_mg": 1.09,
    "magnesium_mg": 16.0,
    "omega3_g": 0.002,
    "phosphorus_mg": 116.0,
    "potassium_mg": 120.0,
    "protein_g": 8.58,
    "salt_g": 0.7575,
    "sat_fat_g": 2.71,
    "sodium_mg": 303.0,
    "sugar_g": 0.58,
    "vitamin_a_ug": 104.0,
    "vitamin_c_mg": 4.0,
    "vitamin_e_mg": 0.31,
    "vitamin_k_ug": 9.7
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2706624",
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
