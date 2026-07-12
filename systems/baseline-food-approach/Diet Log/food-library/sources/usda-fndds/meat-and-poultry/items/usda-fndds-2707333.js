/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Meat & Poultry",
  "defaultMeasure": "1-regular",
  "description": "Egg/breakfast sandwiches",
  "id": "usda-fndds-2707333",
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
      "gramsPerUnit": 180.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    }
  ],
  "name": "Egg sandwich on griddle/pancake, with meat",
  "nutritionPerBasis": {
    "calcium_mg": 174.0,
    "carbs_g": 15.6,
    "energy_kcal": 287.0,
    "fat_g": 19.8,
    "fibre_g": 0.5,
    "folate_ug": 28.0,
    "iron_mg": 1.15,
    "magnesium_mg": 15.0,
    "omega3_g": 0.011,
    "phosphorus_mg": 235.0,
    "potassium_mg": 171.0,
    "protein_g": 11.7,
    "salt_g": 1.4125,
    "sat_fat_g": 6.84,
    "sodium_mg": 565.0,
    "sugar_g": 5.86,
    "vitamin_a_ug": 116.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 1.45,
    "vitamin_k_ug": 4.9
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2707333",
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
