/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Milk, Dairy & Eggs",
  "defaultMeasure": "1-large",
  "description": "Egg/breakfast sandwiches",
  "id": "usda-fndds-2707319",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 205.0,
      "key": "1-large",
      "kind": "unit",
      "label": "1 large"
    },
    {
      "gramsPerUnit": 135.0,
      "key": "1-regular",
      "kind": "unit",
      "label": "1 regular"
    },
    {
      "gramsPerUnit": 135.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    }
  ],
  "name": "Egg sandwich on croissant",
  "nutritionPerBasis": {
    "calcium_mg": 174.0,
    "carbs_g": 21.4,
    "energy_kcal": 309.0,
    "fat_g": 19.7,
    "fibre_g": 1.1,
    "folate_ug": 61.0,
    "iron_mg": 1.6,
    "magnesium_mg": 16.0,
    "omega3_g": 0.007,
    "phosphorus_mg": 205.0,
    "potassium_mg": 125.0,
    "protein_g": 11.4,
    "salt_g": 0.97,
    "sat_fat_g": 9.48,
    "sodium_mg": 388.0,
    "sugar_g": 5.48,
    "vitamin_a_ug": 211.0,
    "vitamin_c_mg": 0.1,
    "vitamin_e_mg": 1.22,
    "vitamin_k_ug": 3.2
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2707319",
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
