/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Fruit",
  "defaultMeasure": "fruit-4-2-3-long-x-2-3-4-dia",
  "description": "Fruits and Fruit Juices",
  "id": "usda-sr-legacy-167791",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 209.0,
      "key": "fruit-4-2-3-long-x-2-3-4-dia",
      "kind": "unit",
      "label": "fruit (4-2/3\" long x 2-3/4\" dia)"
    },
    {
      "gramsPerUnit": 233.0,
      "key": "cup",
      "kind": "unit",
      "label": "cup"
    }
  ],
  "name": "Horned melon (Kiwano)",
  "nutritionPerBasis": {
    "calcium_mg": 13.0,
    "carbs_g": 7.56,
    "energy_kcal": 183.0,
    "fat_g": 1.26,
    "fibre_g": 0.0,
    "folate_ug": 3.0,
    "iron_mg": 1.13,
    "magnesium_mg": 40.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 37.0,
    "potassium_mg": 123.0,
    "protein_g": 1.78,
    "salt_g": 0.005,
    "sat_fat_g": 0.0,
    "sodium_mg": 2.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 7.0,
    "vitamin_c_mg": 5.3,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "167791",
  "state": "Unspecified",
  "subcategory": "Fruits and Fruit Juices",
  "tags": [
    "fruit",
    "fruits-and-fruit-juices",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
