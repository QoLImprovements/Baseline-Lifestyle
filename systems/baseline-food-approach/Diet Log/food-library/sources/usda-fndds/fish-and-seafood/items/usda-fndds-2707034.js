/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Fish & Seafood",
  "defaultMeasure": "1-regular",
  "description": "Seafood sandwiches",
  "id": "usda-fndds-2707034",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 180.0,
      "key": "1-regular",
      "kind": "unit",
      "label": "1 regular"
    },
    {
      "gramsPerUnit": 270.0,
      "key": "1-large",
      "kind": "unit",
      "label": "1 large"
    },
    {
      "gramsPerUnit": 90.0,
      "key": "1-miniature-slider",
      "kind": "unit",
      "label": "1 miniature/slider"
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
    }
  ],
  "name": "Tuna salad sandwich on white",
  "nutritionPerBasis": {
    "calcium_mg": 85.0,
    "carbs_g": 18.3,
    "energy_kcal": 218.0,
    "fat_g": 11.8,
    "fibre_g": 1.0,
    "folate_ug": 44.0,
    "iron_mg": 1.75,
    "magnesium_mg": 19.0,
    "omega3_g": 0.078,
    "phosphorus_mg": 91.0,
    "potassium_mg": 142.0,
    "protein_g": 9.86,
    "salt_g": 1.0725,
    "sat_fat_g": 1.95,
    "sodium_mg": 429.0,
    "sugar_g": 3.16,
    "vitamin_a_ug": 14.0,
    "vitamin_c_mg": 0.5,
    "vitamin_e_mg": 0.7,
    "vitamin_k_ug": 29.9
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2707034",
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
