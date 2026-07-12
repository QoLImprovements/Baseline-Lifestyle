/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Milk, Dairy & Eggs",
  "defaultMeasure": "1-small-ice-cream-cup",
  "description": "Ice cream and frozen dairy desserts",
  "id": "usda-fndds-2705451",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 160.0,
      "key": "1-small-ice-cream-cup",
      "kind": "unit",
      "label": "1 small ice cream cup"
    },
    {
      "gramsPerUnit": 160.0,
      "key": "1-scoop",
      "kind": "unit",
      "label": "1 scoop"
    },
    {
      "gramsPerUnit": 175.0,
      "key": "1-cup",
      "kind": "unit",
      "label": "1 cup"
    },
    {
      "gramsPerUnit": 175.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    },
    {
      "gramsPerUnit": 320.0,
      "key": "1-medium-ice-cream-cup",
      "kind": "unit",
      "label": "1 medium ice cream cup"
    },
    {
      "gramsPerUnit": 480.0,
      "key": "1-large-ice-cream-cup",
      "kind": "unit",
      "label": "1 large ice cream cup"
    }
  ],
  "name": "Frozen yogurt, NFS",
  "nutritionPerBasis": {
    "calcium_mg": 100.0,
    "carbs_g": 21.6,
    "energy_kcal": 127.0,
    "fat_g": 3.6,
    "fibre_g": 0.0,
    "folate_ug": 4.0,
    "iron_mg": 0.46,
    "magnesium_mg": 10.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 89.0,
    "potassium_mg": 156.0,
    "protein_g": 3.0,
    "salt_g": 0.1575,
    "sat_fat_g": 2.33,
    "sodium_mg": 63.0,
    "sugar_g": 19.9,
    "vitamin_a_ug": 49.0,
    "vitamin_c_mg": 0.7,
    "vitamin_e_mg": 0.09,
    "vitamin_k_ug": 0.3
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2705451",
  "state": "Frozen",
  "subcategory": "Ice cream and frozen dairy desserts",
  "tags": [
    "frozen",
    "ice-cream-and-frozen-dairy-desserts",
    "milk-dairy-and-eggs"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
