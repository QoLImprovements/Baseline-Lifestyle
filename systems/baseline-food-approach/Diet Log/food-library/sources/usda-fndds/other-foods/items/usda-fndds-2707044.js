/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Other Foods",
  "defaultMeasure": "1-cocktail-miniature",
  "description": "Frankfurter sandwiches",
  "id": "usda-fndds-2707044",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 19.0,
      "key": "1-cocktail-miniature",
      "kind": "unit",
      "label": "1 cocktail/miniature"
    },
    {
      "gramsPerUnit": 113.0,
      "key": "1-bun-length-jumbo",
      "kind": "unit",
      "label": "1 bun length/jumbo"
    },
    {
      "gramsPerUnit": 88.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    },
    {
      "gramsPerUnit": 88.0,
      "key": "1-regular",
      "kind": "unit",
      "label": "1 regular"
    }
  ],
  "name": "Corn dog",
  "nutritionPerBasis": {
    "calcium_mg": 72.0,
    "carbs_g": 27.0,
    "energy_kcal": 250.0,
    "fat_g": 12.0,
    "fibre_g": 1.0,
    "folate_ug": 60.0,
    "iron_mg": 1.9,
    "magnesium_mg": 17.0,
    "omega3_g": 0.013,
    "phosphorus_mg": 224.0,
    "potassium_mg": 125.0,
    "protein_g": 8.57,
    "salt_g": 1.67,
    "sat_fat_g": 3.47,
    "sodium_mg": 668.0,
    "sugar_g": 7.54,
    "vitamin_a_ug": 48.0,
    "vitamin_c_mg": 0.5,
    "vitamin_e_mg": 0.6,
    "vitamin_k_ug": 5.8
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2707044",
  "state": "Unspecified",
  "subcategory": "Frankfurter sandwiches",
  "tags": [
    "frankfurter-sandwiches",
    "other-foods",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
