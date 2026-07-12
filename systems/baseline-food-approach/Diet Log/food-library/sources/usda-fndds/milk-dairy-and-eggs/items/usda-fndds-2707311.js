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
  "id": "usda-fndds-2707311",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 60.0,
      "key": "1-miniature-slider",
      "kind": "unit",
      "label": "1 miniature/slider"
    },
    {
      "gramsPerUnit": 175.0,
      "key": "1-submarine",
      "kind": "unit",
      "label": "1 submarine"
    },
    {
      "gramsPerUnit": 115.0,
      "key": "1-regular",
      "kind": "unit",
      "label": "1 regular"
    },
    {
      "gramsPerUnit": 175.0,
      "key": "1-large",
      "kind": "unit",
      "label": "1 large"
    },
    {
      "gramsPerUnit": 115.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    }
  ],
  "name": "Egg sandwich on wheat bread",
  "nutritionPerBasis": {
    "calcium_mg": 106.0,
    "carbs_g": 24.1,
    "energy_kcal": 226.0,
    "fat_g": 9.25,
    "fibre_g": 2.8,
    "folate_ug": 62.0,
    "iron_mg": 2.39,
    "magnesium_mg": 34.0,
    "omega3_g": 0.001,
    "phosphorus_mg": 169.0,
    "potassium_mg": 158.0,
    "protein_g": 11.5,
    "salt_g": 0.87,
    "sat_fat_g": 2.52,
    "sodium_mg": 348.0,
    "sugar_g": 2.81,
    "vitamin_a_ug": 92.0,
    "vitamin_c_mg": 0.1,
    "vitamin_e_mg": 1.06,
    "vitamin_k_ug": 5.3
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2707311",
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
