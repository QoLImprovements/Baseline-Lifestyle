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
  "id": "usda-fndds-2706674",
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
  "name": "Chicken or turkey, potatoes, and vegetables excluding carrots, broccoli, and dark-green leafy; cheese sauce",
  "nutritionPerBasis": {
    "calcium_mg": 94.0,
    "carbs_g": 12.9,
    "energy_kcal": 133.0,
    "fat_g": 5.93,
    "fibre_g": 1.3,
    "folate_ug": 13.0,
    "iron_mg": 0.44,
    "magnesium_mg": 22.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 122.0,
    "potassium_mg": 260.0,
    "protein_g": 7.57,
    "salt_g": 0.8425,
    "sat_fat_g": 2.54,
    "sodium_mg": 337.0,
    "sugar_g": 0.9,
    "vitamin_a_ug": 26.0,
    "vitamin_c_mg": 4.2,
    "vitamin_e_mg": 0.27,
    "vitamin_k_ug": 5.6
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2706674",
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
