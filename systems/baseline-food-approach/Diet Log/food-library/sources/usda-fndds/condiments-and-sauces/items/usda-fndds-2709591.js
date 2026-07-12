/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Condiments & Sauces",
  "defaultMeasure": "1-cup",
  "description": "Lettuce and lettuce salads",
  "id": "usda-fndds-2709591",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 79.0,
      "key": "1-cup",
      "kind": "unit",
      "label": "1 cup"
    },
    {
      "gramsPerUnit": 79.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    },
    {
      "gramsPerUnit": 113.0,
      "key": "1-wendy-s-side-salad",
      "kind": "unit",
      "label": "1 Wendy's side salad"
    }
  ],
  "name": "Caesar salad, with romaine, no dressing",
  "nutritionPerBasis": {
    "calcium_mg": 108.0,
    "carbs_g": 7.49,
    "energy_kcal": 77.0,
    "fat_g": 3.41,
    "fibre_g": 1.8,
    "folate_ug": 49.0,
    "iron_mg": 0.4,
    "magnesium_mg": 15.0,
    "omega3_g": 0.002,
    "phosphorus_mg": 83.0,
    "potassium_mg": 250.0,
    "protein_g": 4.0,
    "salt_g": 0.595,
    "sat_fat_g": 1.67,
    "sodium_mg": 238.0,
    "sugar_g": 1.23,
    "vitamin_a_ug": 398.0,
    "vitamin_c_mg": 4.0,
    "vitamin_e_mg": 0.18,
    "vitamin_k_ug": 72.6
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2709591",
  "state": "Unspecified",
  "subcategory": "Lettuce and lettuce salads",
  "tags": [
    "condiments-and-sauces",
    "lettuce-and-lettuce-salads",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
