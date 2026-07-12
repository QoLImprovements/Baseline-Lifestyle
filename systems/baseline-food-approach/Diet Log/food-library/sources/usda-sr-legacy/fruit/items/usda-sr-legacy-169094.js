/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Fruit",
  "defaultMeasure": "tbsp",
  "description": "Fruits and Fruit Juices",
  "id": "usda-sr-legacy-169094",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 8.4,
      "key": "tbsp",
      "kind": "unit",
      "label": "tbsp"
    },
    {
      "gramsPerUnit": 4.4,
      "key": "large",
      "kind": "unit",
      "label": "large"
    },
    {
      "gramsPerUnit": 3.2,
      "key": "small",
      "kind": "unit",
      "label": "small"
    }
  ],
  "name": "Olives, ripe, canned (small-extra large)",
  "nutritionPerBasis": {
    "calcium_mg": 88.0,
    "carbs_g": 6.04,
    "energy_kcal": 485.0,
    "fat_g": 10.9,
    "fibre_g": 1.6,
    "folate_ug": 0.0,
    "iron_mg": 6.28,
    "magnesium_mg": 4.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 3.0,
    "potassium_mg": 8.0,
    "protein_g": 0.84,
    "salt_g": 1.8375,
    "sat_fat_g": 2.28,
    "sodium_mg": 735.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 17.0,
    "vitamin_c_mg": 0.9,
    "vitamin_e_mg": 1.65,
    "vitamin_k_ug": 1.4
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "169094",
  "state": "Canned",
  "subcategory": "Fruits and Fruit Juices",
  "tags": [
    "canned",
    "fruit",
    "fruits-and-fruit-juices"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
