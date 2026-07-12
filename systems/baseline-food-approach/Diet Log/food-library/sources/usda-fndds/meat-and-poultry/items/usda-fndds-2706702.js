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
  "id": "usda-fndds-2706702",
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
  "name": "Chicken or turkey, rice, and vegetables excluding carrots, broccoli, and dark-green leafy; tomato-based sauce",
  "nutritionPerBasis": {
    "calcium_mg": 14.0,
    "carbs_g": 15.9,
    "energy_kcal": 133.0,
    "fat_g": 5.48,
    "fibre_g": 1.0,
    "folate_ug": 34.0,
    "iron_mg": 0.98,
    "magnesium_mg": 16.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 66.0,
    "potassium_mg": 164.0,
    "protein_g": 5.35,
    "salt_g": 0.8475,
    "sat_fat_g": 0.848,
    "sodium_mg": 339.0,
    "sugar_g": 1.39,
    "vitamin_a_ug": 10.0,
    "vitamin_c_mg": 2.5,
    "vitamin_e_mg": 1.29,
    "vitamin_k_ug": 8.5
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2706702",
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
