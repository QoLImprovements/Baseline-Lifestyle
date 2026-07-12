/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Milk, Dairy & Eggs",
  "defaultMeasure": "1-item-any-size",
  "description": "Egg/breakfast sandwiches",
  "id": "usda-fndds-2707343",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 180.0,
      "key": "1-item-any-size",
      "kind": "unit",
      "label": "1 item, any size"
    },
    {
      "gramsPerUnit": 180.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    }
  ],
  "name": "Egg burrito",
  "nutritionPerBasis": {
    "calcium_mg": 148.0,
    "carbs_g": 20.1,
    "energy_kcal": 249.0,
    "fat_g": 13.7,
    "fibre_g": 1.4,
    "folate_ug": 64.0,
    "iron_mg": 2.28,
    "magnesium_mg": 16.0,
    "omega3_g": 0.002,
    "phosphorus_mg": 215.0,
    "potassium_mg": 126.0,
    "protein_g": 10.9,
    "salt_g": 1.175,
    "sat_fat_g": 4.43,
    "sodium_mg": 470.0,
    "sugar_g": 1.75,
    "vitamin_a_ug": 110.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 1.24,
    "vitamin_k_ug": 6.7
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2707343",
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
