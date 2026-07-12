/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Meat & Poultry",
  "defaultMeasure": "1-large",
  "description": "Egg/breakfast sandwiches",
  "id": "usda-fndds-2707321",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 225.0,
      "key": "1-large",
      "kind": "unit",
      "label": "1 large"
    },
    {
      "gramsPerUnit": 150.0,
      "key": "1-regular",
      "kind": "unit",
      "label": "1 regular"
    },
    {
      "gramsPerUnit": 150.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    }
  ],
  "name": "Egg sandwich on croissant, with bacon",
  "nutritionPerBasis": {
    "calcium_mg": 157.0,
    "carbs_g": 19.3,
    "energy_kcal": 326.0,
    "fat_g": 21.3,
    "fibre_g": 1.0,
    "folate_ug": 55.0,
    "iron_mg": 1.53,
    "magnesium_mg": 17.0,
    "omega3_g": 0.01,
    "phosphorus_mg": 225.0,
    "potassium_mg": 165.0,
    "protein_g": 13.8,
    "salt_g": 1.3125,
    "sat_fat_g": 9.74,
    "sodium_mg": 525.0,
    "sugar_g": 4.9,
    "vitamin_a_ug": 190.0,
    "vitamin_c_mg": 0.1,
    "vitamin_e_mg": 1.14,
    "vitamin_k_ug": 2.9
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2707321",
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
