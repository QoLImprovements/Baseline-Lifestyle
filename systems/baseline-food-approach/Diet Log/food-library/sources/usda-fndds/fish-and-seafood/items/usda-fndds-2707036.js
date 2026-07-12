/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Fish & Seafood",
  "defaultMeasure": "1-large",
  "description": "Seafood sandwiches",
  "id": "usda-fndds-2707036",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 270.0,
      "key": "1-large",
      "kind": "unit",
      "label": "1 large"
    },
    {
      "gramsPerUnit": 180.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    },
    {
      "gramsPerUnit": 270.0,
      "key": "1-regular-or-6-submarine",
      "kind": "unit",
      "label": "1 regular or 6\" submarine"
    },
    {
      "gramsPerUnit": 90.0,
      "key": "1-miniature-slider",
      "kind": "unit",
      "label": "1 miniature/slider"
    },
    {
      "gramsPerUnit": 180.0,
      "key": "1-regular",
      "kind": "unit",
      "label": "1 regular"
    }
  ],
  "name": "Tuna salad sandwich on wheat",
  "nutritionPerBasis": {
    "calcium_mg": 68.0,
    "carbs_g": 17.1,
    "energy_kcal": 217.0,
    "fat_g": 11.9,
    "fibre_g": 2.1,
    "folate_ug": 32.0,
    "iron_mg": 1.68,
    "magnesium_mg": 29.0,
    "omega3_g": 0.078,
    "phosphorus_mg": 109.0,
    "potassium_mg": 166.0,
    "protein_g": 10.5,
    "salt_g": 1.0625,
    "sat_fat_g": 1.92,
    "sodium_mg": 425.0,
    "sugar_g": 3.12,
    "vitamin_a_ug": 14.0,
    "vitamin_c_mg": 0.5,
    "vitamin_e_mg": 0.74,
    "vitamin_k_ug": 31.7
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2707036",
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
