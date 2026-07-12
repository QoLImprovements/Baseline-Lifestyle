/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Grains, Bread & Pasta",
  "defaultMeasure": "1-medium-submarine-hoagie-roll",
  "description": "Rolls and buns",
  "id": "usda-fndds-2707752",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 106.0,
      "key": "1-medium-submarine-hoagie-roll",
      "kind": "unit",
      "label": "1 medium submarine, hoagie roll"
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
    },
    {
      "gramsPerUnit": 28.0,
      "key": "1-miniature-small-roll",
      "kind": "unit",
      "label": "1 miniature/small roll"
    },
    {
      "gramsPerUnit": 43.0,
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
      "gramsPerUnit": 73.0,
      "key": "1-small-submarine-hoagie-roll",
      "kind": "unit",
      "label": "1 small submarine, hoagie roll"
    },
    {
      "gramsPerUnit": 52.0,
      "key": "1-large-roll",
      "kind": "unit",
      "label": "1 large roll"
    }
  ],
  "name": "Roll, whole grain white",
  "nutritionPerBasis": {
    "calcium_mg": 233.0,
    "carbs_g": 46.5,
    "energy_kcal": 255.0,
    "fat_g": 3.49,
    "fibre_g": 2.3,
    "folate_ug": 140.0,
    "iron_mg": 2.59,
    "magnesium_mg": 38.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 153.0,
    "potassium_mg": 190.0,
    "protein_g": 9.3,
    "salt_g": 1.28,
    "sat_fat_g": 1.16,
    "sodium_mg": 512.0,
    "sugar_g": 9.3,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.33,
    "vitamin_k_ug": 5.0
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2707752",
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
