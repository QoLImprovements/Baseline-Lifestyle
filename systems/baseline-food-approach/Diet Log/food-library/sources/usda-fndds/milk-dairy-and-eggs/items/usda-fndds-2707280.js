/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Milk, Dairy & Eggs",
  "defaultMeasure": "1-miniature-slider",
  "description": "Egg/breakfast sandwiches",
  "id": "usda-fndds-2707280",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
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
    },
    {
      "gramsPerUnit": 270.0,
      "key": "1-regular-or-6-submarine",
      "kind": "unit",
      "label": "1 regular or 6\" submarine"
    },
    {
      "gramsPerUnit": 180.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    },
    {
      "gramsPerUnit": 270.0,
      "key": "1-large",
      "kind": "unit",
      "label": "1 large"
    }
  ],
  "name": "Egg salad sandwich on white",
  "nutritionPerBasis": {
    "calcium_mg": 98.0,
    "carbs_g": 17.1,
    "energy_kcal": 260.0,
    "fat_g": 16.6,
    "fibre_g": 0.8,
    "folate_ug": 61.0,
    "iron_mg": 1.78,
    "magnesium_mg": 14.0,
    "omega3_g": 0.024,
    "phosphorus_mg": 132.0,
    "potassium_mg": 109.0,
    "protein_g": 9.98,
    "salt_g": 1.005,
    "sat_fat_g": 3.54,
    "sodium_mg": 402.0,
    "sugar_g": 2.45,
    "vitamin_a_ug": 82.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 1.05,
    "vitamin_k_ug": 21.5
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2707280",
  "state": "Unspecified",
  "subcategory": "Egg/breakfast sandwiches",
  "tags": [
    "egg-breakfast-sandwiches",
    "milk-dairy-and-eggs",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
