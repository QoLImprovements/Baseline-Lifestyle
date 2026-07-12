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
  "id": "usda-fndds-2707335",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 135.0,
      "key": "1-regular",
      "kind": "unit",
      "label": "1 regular"
    },
    {
      "gramsPerUnit": 205.0,
      "key": "1-large",
      "kind": "unit",
      "label": "1 large"
    },
    {
      "gramsPerUnit": 205.0,
      "key": "1-submarine",
      "kind": "unit",
      "label": "1 submarine"
    },
    {
      "gramsPerUnit": 70.0,
      "key": "1-miniature-slider",
      "kind": "unit",
      "label": "1 miniature/slider"
    },
    {
      "gramsPerUnit": 135.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    }
  ],
  "name": "Egg white sandwich, with cheese",
  "nutritionPerBasis": {
    "calcium_mg": 214.0,
    "carbs_g": 21.2,
    "energy_kcal": 196.0,
    "fat_g": 7.45,
    "fibre_g": 1.5,
    "folate_ug": 45.0,
    "iron_mg": 1.87,
    "magnesium_mg": 19.0,
    "omega3_g": 0.004,
    "phosphorus_mg": 136.0,
    "potassium_mg": 133.0,
    "protein_g": 11.1,
    "salt_g": 1.145,
    "sat_fat_g": 3.45,
    "sodium_mg": 458.0,
    "sugar_g": 2.26,
    "vitamin_a_ug": 52.0,
    "vitamin_c_mg": 0.8,
    "vitamin_e_mg": 0.59,
    "vitamin_k_ug": 2.8
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2707335",
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
