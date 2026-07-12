/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Meat & Poultry",
  "defaultMeasure": "1-submarine",
  "description": "Egg/breakfast sandwiches",
  "id": "usda-fndds-2707336",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 255.0,
      "key": "1-submarine",
      "kind": "unit",
      "label": "1 submarine"
    },
    {
      "gramsPerUnit": 170.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    },
    {
      "gramsPerUnit": 85.0,
      "key": "1-miniature-slider",
      "kind": "unit",
      "label": "1 miniature/slider"
    },
    {
      "gramsPerUnit": 255.0,
      "key": "1-large",
      "kind": "unit",
      "label": "1 large"
    },
    {
      "gramsPerUnit": 170.0,
      "key": "1-regular",
      "kind": "unit",
      "label": "1 regular"
    }
  ],
  "name": "Egg white sandwich, with meat",
  "nutritionPerBasis": {
    "calcium_mg": 178.0,
    "carbs_g": 17.0,
    "energy_kcal": 195.0,
    "fat_g": 8.43,
    "fibre_g": 1.2,
    "folate_ug": 37.0,
    "iron_mg": 1.76,
    "magnesium_mg": 20.0,
    "omega3_g": 0.007,
    "phosphorus_mg": 151.0,
    "potassium_mg": 181.0,
    "protein_g": 12.8,
    "salt_g": 1.27,
    "sat_fat_g": 3.36,
    "sodium_mg": 508.0,
    "sugar_g": 1.8,
    "vitamin_a_ug": 41.0,
    "vitamin_c_mg": 0.6,
    "vitamin_e_mg": 0.53,
    "vitamin_k_ug": 2.4
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2707336",
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
