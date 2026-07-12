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
  "id": "usda-sr-legacy-167797",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 252.0,
      "key": "cup",
      "kind": "unit",
      "label": "cup"
    }
  ],
  "name": "Fruit juice smoothie, BOLTHOUSE FARMS, BERRY BOOST",
  "nutritionPerBasis": {
    "calcium_mg": 10.0,
    "carbs_g": 10.9,
    "energy_kcal": 46.0,
    "fat_g": 0.02,
    "fibre_g": 0.0,
    "folate_ug": 0.0,
    "iron_mg": 0.21,
    "magnesium_mg": 0.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 0.0,
    "potassium_mg": 116.0,
    "protein_g": 0.63,
    "salt_g": 0.01,
    "sat_fat_g": 0.003,
    "sodium_mg": 4.0,
    "sugar_g": 9.3,
    "vitamin_a_ug": 290.0,
    "vitamin_c_mg": 109.0,
    "vitamin_e_mg": 5.03,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "167797",
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
