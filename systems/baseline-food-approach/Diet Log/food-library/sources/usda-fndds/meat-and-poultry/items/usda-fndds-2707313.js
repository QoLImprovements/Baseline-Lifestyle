/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Meat & Poultry",
  "defaultMeasure": "1-miniature-slider",
  "description": "Egg/breakfast sandwiches",
  "id": "usda-fndds-2707313",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 80.0,
      "key": "1-miniature-slider",
      "kind": "unit",
      "label": "1 miniature/slider"
    },
    {
      "gramsPerUnit": 235.0,
      "key": "1-submarine",
      "kind": "unit",
      "label": "1 submarine"
    },
    {
      "gramsPerUnit": 235.0,
      "key": "1-large",
      "kind": "unit",
      "label": "1 large"
    },
    {
      "gramsPerUnit": 155.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    },
    {
      "gramsPerUnit": 155.0,
      "key": "1-regular",
      "kind": "unit",
      "label": "1 regular"
    }
  ],
  "name": "Egg sandwich on wheat bread, with meat",
  "nutritionPerBasis": {
    "calcium_mg": 81.0,
    "carbs_g": 18.0,
    "energy_kcal": 266.0,
    "fat_g": 15.8,
    "fibre_g": 2.1,
    "folate_ug": 45.0,
    "iron_mg": 2.04,
    "magnesium_mg": 29.0,
    "omega3_g": 0.01,
    "phosphorus_mg": 162.0,
    "potassium_mg": 197.0,
    "protein_g": 12.9,
    "salt_g": 1.0975,
    "sat_fat_g": 4.88,
    "sodium_mg": 439.0,
    "sugar_g": 2.3,
    "vitamin_a_ug": 75.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.98,
    "vitamin_k_ug": 3.9
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2707313",
  "state": "Unspecified",
  "subcategory": "Egg/breakfast sandwiches",
  "tags": [
    "egg-breakfast-sandwiches",
    "meat-and-poultry",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
