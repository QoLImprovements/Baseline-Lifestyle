/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Sweets & Desserts",
  "defaultMeasure": "1-bar",
  "description": "Cereal bars",
  "id": "usda-fndds-2708111",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 28.0,
      "key": "1-bar",
      "kind": "unit",
      "label": "1 bar"
    },
    {
      "gramsPerUnit": 28.0,
      "key": "1-jenny-s-cuisine-fruit-and-nut-snack-bar",
      "kind": "unit",
      "label": "1 Jenny's Cuisine Fruit and Nut Snack Bar"
    },
    {
      "gramsPerUnit": 28.0,
      "key": "1-quaker-oats-bar",
      "kind": "unit",
      "label": "1 Quaker Oats bar"
    },
    {
      "gramsPerUnit": 28.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    }
  ],
  "name": "Cereal or granola bar, coated with non-chocolate coating",
  "nutritionPerBasis": {
    "calcium_mg": 108.0,
    "carbs_g": 53.4,
    "energy_kcal": 508.0,
    "fat_g": 31.1,
    "fibre_g": 2.8,
    "folate_ug": 25.0,
    "iron_mg": 1.45,
    "magnesium_mg": 67.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 227.0,
    "potassium_mg": 339.0,
    "protein_g": 10.2,
    "salt_g": 0.4825,
    "sat_fat_g": 17.0,
    "sodium_mg": 193.0,
    "sugar_g": 23.7,
    "vitamin_a_ug": 5.0,
    "vitamin_c_mg": 0.6,
    "vitamin_e_mg": 4.17,
    "vitamin_k_ug": 13.2
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2708111",
  "state": "Unspecified",
  "subcategory": "Cereal bars",
  "tags": [
    "cereal-bars",
    "sweets-and-desserts",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
