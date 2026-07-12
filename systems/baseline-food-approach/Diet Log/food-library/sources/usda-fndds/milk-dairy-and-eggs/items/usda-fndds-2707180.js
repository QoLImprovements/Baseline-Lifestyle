/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Milk, Dairy & Eggs",
  "defaultMeasure": "1-egg",
  "description": "Eggs and omelets",
  "id": "usda-fndds-2707180",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 155.0,
      "key": "1-egg",
      "kind": "unit",
      "label": "1 egg"
    },
    {
      "gramsPerUnit": 155.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    }
  ],
  "name": "Egg, Benedict",
  "nutritionPerBasis": {
    "calcium_mg": 58.0,
    "carbs_g": 8.48,
    "energy_kcal": 288.0,
    "fat_g": 22.1,
    "fibre_g": 0.6,
    "folate_ug": 41.0,
    "iron_mg": 1.56,
    "magnesium_mg": 15.0,
    "omega3_g": 0.023,
    "phosphorus_mg": 185.0,
    "potassium_mg": 325.0,
    "protein_g": 13.8,
    "salt_g": 1.17,
    "sat_fat_g": 10.3,
    "sodium_mg": 468.0,
    "sugar_g": 1.17,
    "vitamin_a_ug": 232.0,
    "vitamin_c_mg": 1.4,
    "vitamin_e_mg": 1.14,
    "vitamin_k_ug": 3.5
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2707180",
  "state": "Unspecified",
  "subcategory": "Eggs and omelets",
  "tags": [
    "eggs-and-omelets",
    "milk-dairy-and-eggs",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
