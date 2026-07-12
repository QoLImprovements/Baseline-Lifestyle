/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Fruit",
  "defaultMeasure": "2-1-3-dia",
  "description": "Fruits and Fruit Juices",
  "id": "usda-foundation-327357",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 129.0,
      "key": "2-1-3-dia",
      "kind": "unit",
      "label": "2-1/3\" dia"
    },
    {
      "gramsPerUnit": 156.0,
      "key": "2-3-4-dia",
      "kind": "unit",
      "label": "2-3/4\" dia"
    },
    {
      "gramsPerUnit": 142.0,
      "key": "2-1-2-dia",
      "kind": "unit",
      "label": "2-1/2\" dia"
    },
    {
      "gramsPerUnit": 140.0,
      "key": "nlea",
      "kind": "unit",
      "label": "NLEA"
    },
    {
      "gramsPerUnit": 143.0,
      "key": "slices",
      "kind": "unit",
      "label": "slices"
    },
    {
      "gramsPerUnit": 140.0,
      "key": "racc",
      "kind": "unit",
      "label": "RACC"
    }
  ],
  "name": "Nectarines, raw",
  "nutritionPerBasis": {
    "calcium_mg": 2.0,
    "carbs_g": 9.18,
    "energy_kcal": 163.0,
    "fat_g": 0.28,
    "fibre_g": 1.5,
    "folate_ug": 6.0,
    "iron_mg": 0.3,
    "magnesium_mg": 8.8,
    "omega3_g": 0.0,
    "phosphorus_mg": 26.0,
    "potassium_mg": 131.0,
    "protein_g": 1.06,
    "salt_g": 0.0325,
    "sat_fat_g": 0.0,
    "sodium_mg": 13.0,
    "sugar_g": 7.89,
    "vitamin_a_ug": 21.0,
    "vitamin_c_mg": 2.9,
    "vitamin_e_mg": 0.61,
    "vitamin_k_ug": 2.0
  },
  "source": "USDA Foundation Foods April 2026",
  "sourceId": "327357",
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
