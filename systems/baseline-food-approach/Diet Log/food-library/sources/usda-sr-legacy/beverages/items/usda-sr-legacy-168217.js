/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Beverages",
  "defaultMeasure": "g",
  "description": "Fruits and Fruit Juices",
  "id": "usda-sr-legacy-168217",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Raspberry juice concentrate",
  "nutritionPerBasis": {
    "calcium_mg": 97.0,
    "carbs_g": 53.2,
    "energy_kcal": 924.0,
    "fat_g": 1.34,
    "fibre_g": 1.1,
    "folate_ug": 9.0,
    "iron_mg": 1.16,
    "magnesium_mg": 112.0,
    "omega3_g": 0.003,
    "phosphorus_mg": 100.0,
    "potassium_mg": 1180.0,
    "protein_g": 3.04,
    "salt_g": 0.025,
    "sat_fat_g": 0.056,
    "sodium_mg": 10.0,
    "sugar_g": 38.2,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 38.1,
    "vitamin_e_mg": 0.06,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "168217",
  "state": "Unspecified",
  "subcategory": "Fruits and Fruit Juices",
  "tags": [
    "beverages",
    "fruits-and-fruit-juices",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
