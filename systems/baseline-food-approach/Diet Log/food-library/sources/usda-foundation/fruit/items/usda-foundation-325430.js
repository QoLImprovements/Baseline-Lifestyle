/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Fruit",
  "defaultMeasure": "small-2-1-2-dia",
  "description": "Fruits and Fruit Juices",
  "id": "usda-foundation-325430",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 147.0,
      "key": "small-2-1-2-dia",
      "kind": "unit",
      "label": "small (2-1/2\" dia)"
    },
    {
      "gramsPerUnit": 154.0,
      "key": "slices-with-skin",
      "kind": "unit",
      "label": "slices with skin"
    },
    {
      "gramsPerUnit": 173.0,
      "key": "large-2-3-4-dia",
      "kind": "unit",
      "label": "large (2-3/4\" dia)"
    },
    {
      "gramsPerUnit": 225.0,
      "key": "extra-large-3-dia",
      "kind": "unit",
      "label": "extra large (3\" dia)"
    },
    {
      "gramsPerUnit": 161.0,
      "key": "medium-2-2-3-dia",
      "kind": "unit",
      "label": "medium (2-2/3\" dia)"
    },
    {
      "gramsPerUnit": 147.0,
      "key": "nlea",
      "kind": "unit",
      "label": "NLEA"
    },
    {
      "gramsPerUnit": 140.0,
      "key": "racc",
      "kind": "unit",
      "label": "RACC"
    }
  ],
  "name": "Peaches, yellow, raw",
  "nutritionPerBasis": {
    "calcium_mg": 4.0,
    "carbs_g": 10.1,
    "energy_kcal": 42.0,
    "fat_g": 0.27,
    "fibre_g": 1.5,
    "folate_ug": 6.0,
    "iron_mg": 0.34,
    "magnesium_mg": 8.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 22.0,
    "potassium_mg": 122.0,
    "protein_g": 0.91,
    "salt_g": 0.0325,
    "sat_fat_g": 0.0,
    "sodium_mg": 13.0,
    "sugar_g": 8.39,
    "vitamin_a_ug": 24.0,
    "vitamin_c_mg": 4.1,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 3.0
  },
  "source": "USDA Foundation Foods April 2026",
  "sourceId": "325430",
  "state": "Raw",
  "subcategory": "Fruits and Fruit Juices",
  "tags": [
    "fruit",
    "fruits-and-fruit-juices",
    "raw"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
