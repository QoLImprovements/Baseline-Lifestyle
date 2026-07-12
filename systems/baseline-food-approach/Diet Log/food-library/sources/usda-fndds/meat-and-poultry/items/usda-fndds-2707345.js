/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Meat & Poultry",
  "defaultMeasure": "1-item-any-size",
  "description": "Egg/breakfast sandwiches",
  "id": "usda-fndds-2707345",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 190.0,
      "key": "1-item-any-size",
      "kind": "unit",
      "label": "1 item, any size"
    },
    {
      "gramsPerUnit": 190.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    }
  ],
  "name": "Egg burrito, with bacon",
  "nutritionPerBasis": {
    "calcium_mg": 141.0,
    "carbs_g": 19.1,
    "energy_kcal": 260.0,
    "fat_g": 14.8,
    "fibre_g": 1.3,
    "folate_ug": 61.0,
    "iron_mg": 2.22,
    "magnesium_mg": 17.0,
    "omega3_g": 0.004,
    "phosphorus_mg": 225.0,
    "potassium_mg": 146.0,
    "protein_g": 12.1,
    "salt_g": 1.335,
    "sat_fat_g": 4.82,
    "sodium_mg": 534.0,
    "sugar_g": 1.66,
    "vitamin_a_ug": 105.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 1.2,
    "vitamin_k_ug": 6.3
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2707345",
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
