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
  "id": "usda-fndds-2707338",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 110.0,
      "key": "1-regular",
      "kind": "unit",
      "label": "1 regular"
    },
    {
      "gramsPerUnit": 110.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    },
    {
      "gramsPerUnit": 165.0,
      "key": "1-large",
      "kind": "unit",
      "label": "1 large"
    }
  ],
  "name": "Ham biscuit sandwich",
  "nutritionPerBasis": {
    "calcium_mg": 216.0,
    "carbs_g": 28.2,
    "energy_kcal": 322.0,
    "fat_g": 18.1,
    "fibre_g": 1.6,
    "folate_ug": 56.0,
    "iron_mg": 1.97,
    "magnesium_mg": 18.0,
    "omega3_g": 0.005,
    "phosphorus_mg": 457.0,
    "potassium_mg": 168.0,
    "protein_g": 11.6,
    "salt_g": 2.55,
    "sat_fat_g": 10.8,
    "sodium_mg": 1020.0,
    "sugar_g": 3.26,
    "vitamin_a_ug": 65.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.47,
    "vitamin_k_ug": 3.3
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2707338",
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
