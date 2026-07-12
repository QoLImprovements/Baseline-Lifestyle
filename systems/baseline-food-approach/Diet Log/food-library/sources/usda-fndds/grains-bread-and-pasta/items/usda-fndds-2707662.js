/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Grains, Bread & Pasta",
  "defaultMeasure": "1-medium-regular-sandwich-size-roll",
  "description": "Rolls and buns",
  "id": "usda-fndds-2707662",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 35.0,
      "key": "1-medium-regular-sandwich-size-roll",
      "kind": "unit",
      "label": "1 medium/regular/sandwich size roll"
    },
    {
      "gramsPerUnit": 43.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    },
    {
      "gramsPerUnit": 28.0,
      "key": "1-miniature-small-roll",
      "kind": "unit",
      "label": "1 miniature/small roll"
    },
    {
      "gramsPerUnit": 43.0,
      "key": "1-large-roll",
      "kind": "unit",
      "label": "1 large roll"
    }
  ],
  "name": "Roll, garlic",
  "nutritionPerBasis": {
    "calcium_mg": 178.0,
    "carbs_g": 51.9,
    "energy_kcal": 309.0,
    "fat_g": 6.44,
    "fibre_g": 2.0,
    "folate_ug": 101.0,
    "iron_mg": 3.71,
    "magnesium_mg": 26.0,
    "omega3_g": 0.001,
    "phosphorus_mg": 122.0,
    "potassium_mg": 140.0,
    "protein_g": 10.8,
    "salt_g": 1.1625,
    "sat_fat_g": 1.37,
    "sodium_mg": 465.0,
    "sugar_g": 5.53,
    "vitamin_a_ug": 1.0,
    "vitamin_c_mg": 0.2,
    "vitamin_e_mg": 0.28,
    "vitamin_k_ug": 10.6
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2707662",
  "state": "Unspecified",
  "subcategory": "Rolls and buns",
  "tags": [
    "grains-bread-and-pasta",
    "rolls-and-buns",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
