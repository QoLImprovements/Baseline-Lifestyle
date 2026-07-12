/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Fish & Seafood",
  "defaultMeasure": "1-regular-or-6-submarine",
  "description": "Seafood sandwiches",
  "id": "usda-fndds-2707035",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 300.0,
      "key": "1-regular-or-6-submarine",
      "kind": "unit",
      "label": "1 regular or 6\" submarine"
    },
    {
      "gramsPerUnit": 200.0,
      "key": "1-regular",
      "kind": "unit",
      "label": "1 regular"
    },
    {
      "gramsPerUnit": 200.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    },
    {
      "gramsPerUnit": 100.0,
      "key": "1-miniature-slider",
      "kind": "unit",
      "label": "1 miniature/slider"
    },
    {
      "gramsPerUnit": 300.0,
      "key": "1-large",
      "kind": "unit",
      "label": "1 large"
    }
  ],
  "name": "Tuna salad sandwich on white, with cheese",
  "nutritionPerBasis": {
    "calcium_mg": 170.0,
    "carbs_g": 16.9,
    "energy_kcal": 233.0,
    "fat_g": 13.5,
    "fibre_g": 0.9,
    "folate_ug": 41.0,
    "iron_mg": 1.62,
    "magnesium_mg": 20.0,
    "omega3_g": 0.073,
    "phosphorus_mg": 142.0,
    "potassium_mg": 143.0,
    "protein_g": 11.0,
    "salt_g": 1.2225,
    "sat_fat_g": 3.46,
    "sodium_mg": 489.0,
    "sugar_g": 3.12,
    "vitamin_a_ug": 40.0,
    "vitamin_c_mg": 0.4,
    "vitamin_e_mg": 0.7,
    "vitamin_k_ug": 27.0
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2707035",
  "state": "Unspecified",
  "subcategory": "Seafood sandwiches",
  "tags": [
    "fish-and-seafood",
    "seafood-sandwiches",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
