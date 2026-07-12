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
  "id": "usda-fndds-2706864",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 112.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    },
    {
      "gramsPerUnit": 224.0,
      "key": "1-cup",
      "kind": "unit",
      "label": "1 cup"
    }
  ],
  "name": "Fish and vegetables excluding carrots, broccoli, and dark- green leafy; no potatoes, tomato-based sauce",
  "nutritionPerBasis": {
    "calcium_mg": 16.0,
    "carbs_g": 6.3,
    "energy_kcal": 112.0,
    "fat_g": 7.26,
    "fibre_g": 1.5,
    "folate_ug": 15.0,
    "iron_mg": 0.73,
    "magnesium_mg": 23.0,
    "omega3_g": 0.039,
    "phosphorus_mg": 60.0,
    "potassium_mg": 249.0,
    "protein_g": 6.33,
    "salt_g": 0.7575,
    "sat_fat_g": 0.988,
    "sodium_mg": 303.0,
    "sugar_g": 2.36,
    "vitamin_a_ug": 18.0,
    "vitamin_c_mg": 4.6,
    "vitamin_e_mg": 2.14,
    "vitamin_k_ug": 13.9
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2706864",
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
