/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Grains, Bread & Pasta",
  "defaultMeasure": "1-miniature-small-roll",
  "description": "Rolls and buns",
  "id": "usda-fndds-2707800",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 28.0,
      "key": "1-miniature-small-roll",
      "kind": "unit",
      "label": "1 miniature/small roll"
    },
    {
      "gramsPerUnit": 68.0,
      "key": "1-extra-large-roll",
      "kind": "unit",
      "label": "1 extra large roll"
    },
    {
      "gramsPerUnit": 43.0,
      "key": "1-medium-regular-sandwich-size-roll",
      "kind": "unit",
      "label": "1 medium/regular/sandwich size roll"
    },
    {
      "gramsPerUnit": 2.9,
      "key": "1-cubic-inch",
      "kind": "unit",
      "label": "1 cubic inch"
    },
    {
      "gramsPerUnit": 43.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    },
    {
      "gramsPerUnit": 52.0,
      "key": "1-large-roll",
      "kind": "unit",
      "label": "1 large roll"
    }
  ],
  "name": "Roll, gluten free",
  "nutritionPerBasis": {
    "calcium_mg": 180.0,
    "carbs_g": 50.5,
    "energy_kcal": 239.0,
    "fat_g": 2.65,
    "fibre_g": 5.1,
    "folate_ug": 8.0,
    "iron_mg": 3.57,
    "magnesium_mg": 13.0,
    "omega3_g": 0.003,
    "phosphorus_mg": 50.0,
    "potassium_mg": 76.0,
    "protein_g": 3.34,
    "salt_g": 1.4825,
    "sat_fat_g": 0.215,
    "sodium_mg": 593.0,
    "sugar_g": 6.87,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.18,
    "vitamin_k_ug": 0.1
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2707800",
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
