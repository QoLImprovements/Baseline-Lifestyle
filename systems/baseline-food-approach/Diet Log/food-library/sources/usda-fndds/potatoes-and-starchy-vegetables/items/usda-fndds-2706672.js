/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Potatoes & Starchy Vegetables",
  "defaultMeasure": "quantity-not-specified",
  "description": "Poultry mixed dishes",
  "id": "usda-fndds-2706672",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 252.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    },
    {
      "gramsPerUnit": 252.0,
      "key": "1-cup",
      "kind": "unit",
      "label": "1 cup"
    }
  ],
  "name": "Chicken or turkey, potatoes, and vegetables excluding carrots, broccoli, and dark-green leafy; cream sauce, white sauce, or mushroom sauce",
  "nutritionPerBasis": {
    "calcium_mg": 22.0,
    "carbs_g": 12.1,
    "energy_kcal": 126.0,
    "fat_g": 6.75,
    "fibre_g": 1.3,
    "folate_ug": 10.0,
    "iron_mg": 0.35,
    "magnesium_mg": 16.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 67.0,
    "potassium_mg": 225.0,
    "protein_g": 4.84,
    "salt_g": 0.845,
    "sat_fat_g": 1.14,
    "sodium_mg": 338.0,
    "sugar_g": 1.25,
    "vitamin_a_ug": 9.0,
    "vitamin_c_mg": 3.6,
    "vitamin_e_mg": 1.03,
    "vitamin_k_ug": 13.2
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2706672",
  "state": "Unspecified",
  "subcategory": "Poultry mixed dishes",
  "tags": [
    "potatoes-and-starchy-vegetables",
    "poultry-mixed-dishes",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
