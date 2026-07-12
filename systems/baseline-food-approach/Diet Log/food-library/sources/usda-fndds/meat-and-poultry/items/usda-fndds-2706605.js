/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Meat & Poultry",
  "defaultMeasure": "quantity-not-specified",
  "description": "Meat mixed dishes",
  "id": "usda-fndds-2706605",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 202.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    },
    {
      "gramsPerUnit": 162.0,
      "key": "1-cup",
      "kind": "unit",
      "label": "1 cup"
    }
  ],
  "name": "Beef, noodles, and vegetables including carrots, broccoli, and/or dark-green leafy; no sauce",
  "nutritionPerBasis": {
    "calcium_mg": 17.0,
    "carbs_g": 16.7,
    "energy_kcal": 148.0,
    "fat_g": 5.19,
    "fibre_g": 1.5,
    "folate_ug": 60.0,
    "iron_mg": 1.48,
    "magnesium_mg": 19.0,
    "omega3_g": 0.004,
    "phosphorus_mg": 90.0,
    "potassium_mg": 109.0,
    "protein_g": 8.71,
    "salt_g": 0.7925,
    "sat_fat_g": 1.18,
    "sodium_mg": 317.0,
    "sugar_g": 0.91,
    "vitamin_a_ug": 112.0,
    "vitamin_c_mg": 5.1,
    "vitamin_e_mg": 0.88,
    "vitamin_k_ug": 14.7
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2706605",
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
