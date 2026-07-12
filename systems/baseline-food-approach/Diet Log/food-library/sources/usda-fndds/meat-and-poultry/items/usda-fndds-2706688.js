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
  "id": "usda-fndds-2706688",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 244.0,
      "key": "1-cup",
      "kind": "unit",
      "label": "1 cup"
    },
    {
      "gramsPerUnit": 305.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    }
  ],
  "name": "Chicken or turkey, noodles, and vegetables including carrots, broccoli, and/or dark-green leafy; cheese sauce",
  "nutritionPerBasis": {
    "calcium_mg": 99.0,
    "carbs_g": 14.2,
    "energy_kcal": 145.0,
    "fat_g": 5.97,
    "fibre_g": 1.1,
    "folate_ug": 48.0,
    "iron_mg": 0.97,
    "magnesium_mg": 20.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 137.0,
    "potassium_mg": 125.0,
    "protein_g": 8.9,
    "salt_g": 0.865,
    "sat_fat_g": 2.62,
    "sodium_mg": 346.0,
    "sugar_g": 0.74,
    "vitamin_a_ug": 108.0,
    "vitamin_c_mg": 4.0,
    "vitamin_e_mg": 0.37,
    "vitamin_k_ug": 9.5
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2706688",
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
