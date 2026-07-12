/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Meat & Poultry",
  "defaultMeasure": "1-cup",
  "description": "Poultry mixed dishes",
  "id": "usda-fndds-2706678",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 255.0,
      "key": "1-cup",
      "kind": "unit",
      "label": "1 cup"
    },
    {
      "gramsPerUnit": 255.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    }
  ],
  "name": "Stew, chicken",
  "nutritionPerBasis": {
    "calcium_mg": 14.0,
    "carbs_g": 6.29,
    "energy_kcal": 84.0,
    "fat_g": 2.34,
    "fibre_g": 1.3,
    "folate_ug": 14.0,
    "iron_mg": 0.46,
    "magnesium_mg": 18.0,
    "omega3_g": 0.006,
    "phosphorus_mg": 93.0,
    "potassium_mg": 251.0,
    "protein_g": 9.24,
    "salt_g": 0.7725,
    "sat_fat_g": 0.648,
    "sodium_mg": 309.0,
    "sugar_g": 1.57,
    "vitamin_a_ug": 132.0,
    "vitamin_c_mg": 7.0,
    "vitamin_e_mg": 0.26,
    "vitamin_k_ug": 6.6
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2706678",
  "state": "Unspecified",
  "subcategory": "Poultry mixed dishes",
  "tags": [
    "meat-and-poultry",
    "poultry-mixed-dishes",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
