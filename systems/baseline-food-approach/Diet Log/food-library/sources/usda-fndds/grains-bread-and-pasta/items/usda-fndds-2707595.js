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
  "id": "usda-fndds-2707595",
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
      "gramsPerUnit": 28.0,
      "key": "1-miniature-small-roll",
      "kind": "unit",
      "label": "1 miniature/small roll"
    },
    {
      "gramsPerUnit": 52.0,
      "key": "1-hamburger-bun",
      "kind": "unit",
      "label": "1 hamburger bun"
    },
    {
      "gramsPerUnit": 45.0,
      "key": "1-hot-dog-bun",
      "kind": "unit",
      "label": "1 hot dog bun"
    },
    {
      "gramsPerUnit": 52.0,
      "key": "1-large-roll",
      "kind": "unit",
      "label": "1 large roll"
    },
    {
      "gramsPerUnit": 83.0,
      "key": "1-foot-long-hot-dog-bun",
      "kind": "unit",
      "label": "1 foot long hot dog bun"
    },
    {
      "gramsPerUnit": 68.0,
      "key": "1-extra-large-roll",
      "kind": "unit",
      "label": "1 extra large roll"
    },
    {
      "gramsPerUnit": 43.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    }
  ],
  "name": "Roll, NS as to major flour",
  "nutritionPerBasis": {
    "calcium_mg": 144.0,
    "carbs_g": 50.1,
    "energy_kcal": 279.0,
    "fat_g": 3.91,
    "fibre_g": 1.8,
    "folate_ug": 94.0,
    "iron_mg": 3.43,
    "magnesium_mg": 23.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 101.0,
    "potassium_mg": 122.0,
    "protein_g": 9.77,
    "salt_g": 1.235,
    "sat_fat_g": 0.842,
    "sodium_mg": 494.0,
    "sugar_g": 7.28,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 1.3,
    "vitamin_e_mg": 0.27,
    "vitamin_k_ug": 4.8
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2707595",
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
