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
  "id": "usda-fndds-2706862",
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
  "name": "Shellfish mixture and vegetables excluding carrots, broccoli, and dark-green leafy; no potatoes, mushroom sauce",
  "nutritionPerBasis": {
    "calcium_mg": 44.0,
    "carbs_g": 7.63,
    "energy_kcal": 117.0,
    "fat_g": 6.93,
    "fibre_g": 1.0,
    "folate_ug": 12.0,
    "iron_mg": 0.54,
    "magnesium_mg": 16.0,
    "omega3_g": 0.049,
    "phosphorus_mg": 102.0,
    "potassium_mg": 181.0,
    "protein_g": 6.3,
    "salt_g": 0.77,
    "sat_fat_g": 1.2,
    "sodium_mg": 308.0,
    "sugar_g": 1.49,
    "vitamin_a_ug": 37.0,
    "vitamin_c_mg": 1.0,
    "vitamin_e_mg": 1.33,
    "vitamin_k_ug": 17.3
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2706862",
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
