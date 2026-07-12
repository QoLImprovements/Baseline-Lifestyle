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
  "id": "usda-fndds-2707665",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 45.0,
      "key": "1-medium-regular-sandwich-size-roll",
      "kind": "unit",
      "label": "1 medium/regular/sandwich size roll"
    },
    {
      "gramsPerUnit": 57.0,
      "key": "1-large-roll",
      "kind": "unit",
      "label": "1 large roll"
    },
    {
      "gramsPerUnit": 34.0,
      "key": "1-miniature-small-roll",
      "kind": "unit",
      "label": "1 miniature/small roll"
    },
    {
      "gramsPerUnit": 45.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    }
  ],
  "name": "Roll, sour dough",
  "nutritionPerBasis": {
    "calcium_mg": 52.0,
    "carbs_g": 51.9,
    "energy_kcal": 272.0,
    "fat_g": 2.42,
    "fibre_g": 2.2,
    "folate_ug": 123.0,
    "iron_mg": 3.91,
    "magnesium_mg": 32.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 105.0,
    "potassium_mg": 117.0,
    "protein_g": 10.8,
    "salt_g": 1.505,
    "sat_fat_g": 0.529,
    "sodium_mg": 602.0,
    "sugar_g": 4.62,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.21,
    "vitamin_k_ug": 0.7
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2707665",
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
