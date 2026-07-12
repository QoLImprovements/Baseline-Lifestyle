/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Beverages",
  "defaultMeasure": "cup",
  "description": "Fruits and Fruit Juices",
  "id": "usda-sr-legacy-167799",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 233.0,
      "key": "cup",
      "kind": "unit",
      "label": "cup"
    }
  ],
  "name": "Fruit juice smoothie, BOLTHOUSE FARMS, strawberry banana",
  "nutritionPerBasis": {
    "calcium_mg": 11.0,
    "carbs_g": 12.4,
    "energy_kcal": 219.0,
    "fat_g": 0.3,
    "fibre_g": 0.6,
    "folate_ug": 24.0,
    "iron_mg": 0.32,
    "magnesium_mg": 13.0,
    "omega3_g": 0.01,
    "phosphorus_mg": 16.0,
    "potassium_mg": 184.0,
    "protein_g": 0.44,
    "salt_g": 0.0125,
    "sat_fat_g": 0.055,
    "sodium_mg": 5.0,
    "sugar_g": 10.3,
    "vitamin_a_ug": 1.0,
    "vitamin_c_mg": 47.3,
    "vitamin_e_mg": 0.16,
    "vitamin_k_ug": 0.9
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "167799",
  "state": "Raw",
  "subcategory": "Fruits and Fruit Juices",
  "tags": [
    "beverages",
    "fruits-and-fruit-juices",
    "raw"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
