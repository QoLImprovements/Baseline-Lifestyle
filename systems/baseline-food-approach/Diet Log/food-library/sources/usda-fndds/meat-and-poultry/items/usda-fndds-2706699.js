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
  "id": "usda-fndds-2706699",
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
  "name": "Chicken or turkey, rice, and vegetables including carrots, broccoli, and/or dark-green leafy; cheese sauce",
  "nutritionPerBasis": {
    "calcium_mg": 98.0,
    "carbs_g": 15.5,
    "energy_kcal": 142.0,
    "fat_g": 5.15,
    "fibre_g": 0.8,
    "folate_ug": 37.0,
    "iron_mg": 0.85,
    "magnesium_mg": 16.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 122.0,
    "potassium_mg": 123.0,
    "protein_g": 8.05,
    "salt_g": 0.86,
    "sat_fat_g": 2.46,
    "sodium_mg": 344.0,
    "sugar_g": 0.58,
    "vitamin_a_ug": 105.0,
    "vitamin_c_mg": 4.0,
    "vitamin_e_mg": 0.31,
    "vitamin_k_ug": 9.5
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2706699",
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
