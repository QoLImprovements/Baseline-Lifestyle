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
  "id": "usda-fndds-2707344",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 190.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    },
    {
      "gramsPerUnit": 190.0,
      "key": "1-item-any-size",
      "kind": "unit",
      "label": "1 item, any size"
    }
  ],
  "name": "Egg burrito, with sausage",
  "nutritionPerBasis": {
    "calcium_mg": 140.0,
    "carbs_g": 18.9,
    "energy_kcal": 257.0,
    "fat_g": 15.0,
    "fibre_g": 1.3,
    "folate_ug": 60.0,
    "iron_mg": 2.21,
    "magnesium_mg": 16.0,
    "omega3_g": 0.004,
    "phosphorus_mg": 211.0,
    "potassium_mg": 137.0,
    "protein_g": 11.3,
    "salt_g": 1.21,
    "sat_fat_g": 4.86,
    "sodium_mg": 484.0,
    "sugar_g": 1.7,
    "vitamin_a_ug": 105.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 1.21,
    "vitamin_k_ug": 6.2
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2707344",
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
