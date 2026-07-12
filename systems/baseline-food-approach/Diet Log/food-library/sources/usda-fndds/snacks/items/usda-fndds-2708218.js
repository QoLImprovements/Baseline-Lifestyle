/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Snacks",
  "defaultMeasure": "1-kids-size-order",
  "description": "Popcorn",
  "id": "usda-fndds-2708218",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 66.0,
      "key": "1-kids-size-order",
      "kind": "unit",
      "label": "1 kids size order"
    },
    {
      "gramsPerUnit": 220.0,
      "key": "1-extra-large-order",
      "kind": "unit",
      "label": "1 extra large order"
    },
    {
      "gramsPerUnit": 0.2,
      "key": "1-kernel",
      "kind": "unit",
      "label": "1 kernel"
    },
    {
      "gramsPerUnit": 187.0,
      "key": "1-large-order",
      "kind": "unit",
      "label": "1 large order"
    },
    {
      "gramsPerUnit": 143.0,
      "key": "1-medium-order",
      "kind": "unit",
      "label": "1 medium order"
    },
    {
      "gramsPerUnit": 11.0,
      "key": "1-cup",
      "kind": "unit",
      "label": "1 cup"
    },
    {
      "gramsPerUnit": 28.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    },
    {
      "gramsPerUnit": 143.0,
      "key": "1-order-ns-as-to-size",
      "kind": "unit",
      "label": "1 order, NS as to size"
    },
    {
      "gramsPerUnit": 88.0,
      "key": "1-small-order",
      "kind": "unit",
      "label": "1 small order"
    }
  ],
  "name": "Popcorn, movie theater, no butter added",
  "nutritionPerBasis": {
    "calcium_mg": 8.0,
    "carbs_g": 39.9,
    "energy_kcal": 603.0,
    "fat_g": 48.7,
    "fibre_g": 6.9,
    "folate_ug": 12.0,
    "iron_mg": 1.95,
    "magnesium_mg": 74.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 172.0,
    "potassium_mg": 155.0,
    "protein_g": 6.18,
    "salt_g": 1.905,
    "sat_fat_g": 28.9,
    "sodium_mg": 762.0,
    "sugar_g": 0.37,
    "vitamin_a_ug": 5.0,
    "vitamin_c_mg": 0.2,
    "vitamin_e_mg": 1.69,
    "vitamin_k_ug": 3.1
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2708218",
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
