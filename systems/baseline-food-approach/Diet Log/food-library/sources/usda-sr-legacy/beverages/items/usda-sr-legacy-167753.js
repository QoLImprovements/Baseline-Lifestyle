/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Beverages",
  "defaultMeasure": "fl-oz",
  "description": "Fruits and Fruit Juices",
  "id": "usda-sr-legacy-167753",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 32.0,
      "key": "fl-oz",
      "kind": "unit",
      "label": "fl oz"
    },
    {
      "gramsPerUnit": 256.0,
      "key": "cup",
      "kind": "unit",
      "label": "cup"
    }
  ],
  "name": "Prune juice, canned",
  "nutritionPerBasis": {
    "calcium_mg": 12.0,
    "carbs_g": 17.4,
    "energy_kcal": 297.0,
    "fat_g": 0.03,
    "fibre_g": 1.0,
    "folate_ug": 0.0,
    "iron_mg": 1.18,
    "magnesium_mg": 14.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 25.0,
    "potassium_mg": 276.0,
    "protein_g": 0.61,
    "salt_g": 0.01,
    "sat_fat_g": 0.003,
    "sodium_mg": 4.0,
    "sugar_g": 16.4,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 4.1,
    "vitamin_e_mg": 0.12,
    "vitamin_k_ug": 3.4
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "167753",
  "state": "Canned",
  "subcategory": "Fruits and Fruit Juices",
  "tags": [
    "beverages",
    "canned",
    "fruits-and-fruit-juices"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
