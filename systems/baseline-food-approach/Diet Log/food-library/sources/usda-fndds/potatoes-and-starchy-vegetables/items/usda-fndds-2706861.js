/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Potatoes & Starchy Vegetables",
  "defaultMeasure": "1-cup",
  "description": "Seafood mixed dishes",
  "id": "usda-fndds-2706861",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 224.0,
      "key": "1-cup",
      "kind": "unit",
      "label": "1 cup"
    },
    {
      "gramsPerUnit": 112.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    }
  ],
  "name": "Shellfish mixture and vegetables including carrots, broccoli, and/or dark-green leafy; no potatoes, mushroom sauce",
  "nutritionPerBasis": {
    "calcium_mg": 47.0,
    "carbs_g": 5.92,
    "energy_kcal": 111.0,
    "fat_g": 6.92,
    "fibre_g": 1.1,
    "folate_ug": 13.0,
    "iron_mg": 0.54,
    "magnesium_mg": 13.0,
    "omega3_g": 0.049,
    "phosphorus_mg": 98.0,
    "potassium_mg": 173.0,
    "protein_g": 6.25,
    "salt_g": 0.7925,
    "sat_fat_g": 1.2,
    "sodium_mg": 317.0,
    "sugar_g": 1.57,
    "vitamin_a_ug": 154.0,
    "vitamin_c_mg": 5.7,
    "vitamin_e_mg": 1.63,
    "vitamin_k_ug": 25.8
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2706861",
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
