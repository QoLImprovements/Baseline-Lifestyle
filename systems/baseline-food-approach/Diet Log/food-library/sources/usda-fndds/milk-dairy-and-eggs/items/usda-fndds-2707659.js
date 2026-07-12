/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Milk, Dairy & Eggs",
  "defaultMeasure": "1-roll",
  "description": "Rolls and buns",
  "id": "usda-fndds-2707659",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 28.0,
      "key": "1-roll",
      "kind": "unit",
      "label": "1 roll"
    },
    {
      "gramsPerUnit": 28.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    }
  ],
  "name": "Roll, egg bread",
  "nutritionPerBasis": {
    "calcium_mg": 93.0,
    "carbs_g": 47.8,
    "energy_kcal": 287.0,
    "fat_g": 6.0,
    "fibre_g": 2.3,
    "folate_ug": 105.0,
    "iron_mg": 3.04,
    "magnesium_mg": 19.0,
    "omega3_g": 0.013,
    "phosphorus_mg": 106.0,
    "potassium_mg": 115.0,
    "protein_g": 9.5,
    "salt_g": 0.95,
    "sat_fat_g": 1.59,
    "sodium_mg": 380.0,
    "sugar_g": 1.78,
    "vitamin_a_ug": 63.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.26,
    "vitamin_k_ug": 0.9
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2707659",
  "state": "Unspecified",
  "subcategory": "Rolls and buns",
  "tags": [
    "milk-dairy-and-eggs",
    "rolls-and-buns",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
