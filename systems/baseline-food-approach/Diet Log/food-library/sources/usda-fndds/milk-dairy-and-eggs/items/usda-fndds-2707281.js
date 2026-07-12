/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Milk, Dairy & Eggs",
  "defaultMeasure": "1-regular",
  "description": "Egg/breakfast sandwiches",
  "id": "usda-fndds-2707281",
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
    }
  ],
  "name": "Egg salad sandwich on wheat",
  "nutritionPerBasis": {
    "calcium_mg": 82.0,
    "carbs_g": 15.8,
    "energy_kcal": 259.0,
    "fat_g": 16.8,
    "fibre_g": 1.8,
    "folate_ug": 48.0,
    "iron_mg": 1.71,
    "magnesium_mg": 24.0,
    "omega3_g": 0.024,
    "phosphorus_mg": 150.0,
    "potassium_mg": 133.0,
    "protein_g": 10.6,
    "salt_g": 0.9975,
    "sat_fat_g": 3.51,
    "sodium_mg": 399.0,
    "sugar_g": 2.41,
    "vitamin_a_ug": 82.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 1.09,
    "vitamin_k_ug": 23.3
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2707281",
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
