/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Snacks",
  "defaultMeasure": "1-small-order",
  "description": "Popcorn",
  "id": "usda-fndds-2708217",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 112.0,
      "key": "1-small-order",
      "kind": "unit",
      "label": "1 small order"
    },
    {
      "gramsPerUnit": 182.0,
      "key": "1-medium-order",
      "kind": "unit",
      "label": "1 medium order"
    },
    {
      "gramsPerUnit": 84.0,
      "key": "1-kids-size-order",
      "kind": "unit",
      "label": "1 kids size order"
    },
    {
      "gramsPerUnit": 0.2,
      "key": "1-kernel",
      "kind": "unit",
      "label": "1 kernel"
    },
    {
      "gramsPerUnit": 14.0,
      "key": "1-cup",
      "kind": "unit",
      "label": "1 cup"
    },
    {
      "gramsPerUnit": 280.0,
      "key": "1-extra-large-order",
      "kind": "unit",
      "label": "1 extra large order"
    },
    {
      "gramsPerUnit": 182.0,
      "key": "1-order-ns-as-to-size",
      "kind": "unit",
      "label": "1 order, NS as to size"
    },
    {
      "gramsPerUnit": 35.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    },
    {
      "gramsPerUnit": 238.0,
      "key": "1-large-order",
      "kind": "unit",
      "label": "1 large order"
    }
  ],
  "name": "Popcorn, movie theater, with added butter",
  "nutritionPerBasis": {
    "calcium_mg": 8.0,
    "carbs_g": 31.6,
    "energy_kcal": 656.0,
    "fat_g": 58.8,
    "fibre_g": 5.4,
    "folate_ug": 9.0,
    "iron_mg": 1.55,
    "magnesium_mg": 59.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 137.0,
    "potassium_mg": 124.0,
    "protein_g": 4.96,
    "salt_g": 1.89,
    "sat_fat_g": 35.5,
    "sodium_mg": 756.0,
    "sugar_g": 0.29,
    "vitamin_a_ug": 174.0,
    "vitamin_c_mg": 0.2,
    "vitamin_e_mg": 1.91,
    "vitamin_k_ug": 4.2
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2708217",
  "state": "Unspecified",
  "subcategory": "Popcorn",
  "tags": [
    "popcorn",
    "snacks",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
