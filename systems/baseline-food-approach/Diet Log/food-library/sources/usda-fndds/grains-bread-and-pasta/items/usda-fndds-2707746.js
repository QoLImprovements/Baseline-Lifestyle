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
  "id": "usda-fndds-2707746",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 43.0,
      "key": "1-medium-regular-sandwich-size-roll",
      "kind": "unit",
      "label": "1 medium/regular/sandwich size roll"
    },
    {
      "gramsPerUnit": 106.0,
      "key": "1-medium-submarine-hoagie-roll",
      "kind": "unit",
      "label": "1 medium submarine, hoagie roll"
    },
    {
      "gramsPerUnit": 73.0,
      "key": "1-small-submarine-hoagie-roll",
      "kind": "unit",
      "label": "1 small submarine, hoagie roll"
    },
    {
      "gramsPerUnit": 28.0,
      "key": "1-miniature-small-roll",
      "kind": "unit",
      "label": "1 miniature/small roll"
    },
    {
      "gramsPerUnit": 52.0,
      "key": "1-large-roll",
      "kind": "unit",
      "label": "1 large roll"
    },
    {
      "gramsPerUnit": 43.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    },
    {
      "gramsPerUnit": 153.0,
      "key": "1-large-submarine-hoagie-roll",
      "kind": "unit",
      "label": "1 large submarine, hoagie roll"
    },
    {
      "gramsPerUnit": 68.0,
      "key": "1-extra-large-roll",
      "kind": "unit",
      "label": "1 extra large roll"
    }
  ],
  "name": "Roll, wheat or cracked wheat",
  "nutritionPerBasis": {
    "calcium_mg": 176.0,
    "carbs_g": 46.0,
    "energy_kcal": 273.0,
    "fat_g": 6.3,
    "fibre_g": 3.8,
    "folate_ug": 60.0,
    "iron_mg": 3.55,
    "magnesium_mg": 36.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 104.0,
    "potassium_mg": 115.0,
    "protein_g": 8.6,
    "salt_g": 1.31,
    "sat_fat_g": 1.5,
    "sodium_mg": 524.0,
    "sugar_g": 1.63,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.36,
    "vitamin_k_ug": 2.7
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2707746",
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
