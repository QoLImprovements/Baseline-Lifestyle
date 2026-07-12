/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Meat & Poultry",
  "defaultMeasure": "quantity-not-specified",
  "description": "Egg/breakfast sandwiches",
  "id": "usda-fndds-2707317",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 150.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
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
    }
  ],
  "name": "Egg sandwich on English muffin, with bacon",
  "nutritionPerBasis": {
    "calcium_mg": 206.0,
    "carbs_g": 18.6,
    "energy_kcal": 255.0,
    "fat_g": 13.7,
    "fibre_g": 1.4,
    "folate_ug": 57.0,
    "iron_mg": 2.31,
    "magnesium_mg": 21.0,
    "omega3_g": 0.008,
    "phosphorus_mg": 219.0,
    "potassium_mg": 161.0,
    "protein_g": 14.1,
    "salt_g": 1.435,
    "sat_fat_g": 5.43,
    "sodium_mg": 574.0,
    "sugar_g": 1.85,
    "vitamin_a_ug": 108.0,
    "vitamin_c_mg": 0.7,
    "vitamin_e_mg": 0.93,
    "vitamin_k_ug": 2.6
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2707317",
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
