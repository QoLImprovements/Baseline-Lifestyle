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
  "id": "usda-fndds-2706704",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 162.0,
      "key": "1-cup",
      "kind": "unit",
      "label": "1 cup"
    },
    {
      "gramsPerUnit": 162.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    }
  ],
  "name": "Chicken or turkey, stuffing, and vegetables including carrots, broccoli, and/or dark-green leafy; no sauce",
  "nutritionPerBasis": {
    "calcium_mg": 30.0,
    "carbs_g": 13.3,
    "energy_kcal": 159.0,
    "fat_g": 8.74,
    "fibre_g": 1.3,
    "folate_ug": 33.0,
    "iron_mg": 0.86,
    "magnesium_mg": 14.0,
    "omega3_g": 0.001,
    "phosphorus_mg": 78.0,
    "potassium_mg": 135.0,
    "protein_g": 7.12,
    "salt_g": 0.9225,
    "sat_fat_g": 1.75,
    "sodium_mg": 369.0,
    "sugar_g": 1.95,
    "vitamin_a_ug": 183.0,
    "vitamin_c_mg": 5.3,
    "vitamin_e_mg": 1.2,
    "vitamin_k_ug": 20.8
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2706704",
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
