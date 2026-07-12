/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Potatoes & Starchy Vegetables",
  "defaultMeasure": "quantity-not-specified",
  "description": "Seafood mixed dishes",
  "id": "usda-fndds-2706851",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 81.0,
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
  "name": "Shrimp and vegetables including carrots, broccoli, and/or dark-green leafy; no potatoes, no sauce",
  "nutritionPerBasis": {
    "calcium_mg": 51.0,
    "carbs_g": 3.8,
    "energy_kcal": 118.0,
    "fat_g": 7.25,
    "fibre_g": 1.6,
    "folate_ug": 25.0,
    "iron_mg": 0.41,
    "magnesium_mg": 20.0,
    "omega3_g": 0.106,
    "phosphorus_mg": 133.0,
    "potassium_mg": 146.0,
    "protein_g": 9.35,
    "salt_g": 0.1475,
    "sat_fat_g": 1.09,
    "sodium_mg": 59.0,
    "sugar_g": 1.37,
    "vitamin_a_ug": 255.0,
    "vitamin_c_mg": 10.5,
    "vitamin_e_mg": 2.61,
    "vitamin_k_ug": 31.7
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2706851",
  "state": "Unspecified",
  "subcategory": "Seafood mixed dishes",
  "tags": [
    "potatoes-and-starchy-vegetables",
    "seafood-mixed-dishes",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
