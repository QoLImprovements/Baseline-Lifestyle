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
  "id": "usda-fndds-2707597",
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
      "gramsPerUnit": 36.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    },
    {
      "gramsPerUnit": 36.0,
      "key": "1-medium-regular-sandwich-size-roll",
      "kind": "unit",
      "label": "1 medium/regular/sandwich size roll"
    }
  ],
  "name": "Roll, bran, NS as to type of bran",
  "nutritionPerBasis": {
    "calcium_mg": 95.0,
    "carbs_g": 44.6,
    "energy_kcal": 263.0,
    "fat_g": 6.0,
    "fibre_g": 3.8,
    "folate_ug": 111.0,
    "iron_mg": 3.95,
    "magnesium_mg": 44.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 122.0,
    "potassium_mg": 160.0,
    "protein_g": 9.6,
    "salt_g": 1.145,
    "sat_fat_g": 1.39,
    "sodium_mg": 458.0,
    "sugar_g": 6.25,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.07,
    "vitamin_k_ug": 3.1
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2707597",
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
