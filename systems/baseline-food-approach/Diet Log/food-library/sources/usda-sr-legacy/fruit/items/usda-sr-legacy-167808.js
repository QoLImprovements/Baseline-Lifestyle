/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Fruit",
  "defaultMeasure": "g",
  "description": "Fruits and Fruit Juices",
  "id": "usda-sr-legacy-167808",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Raspberries, puree, seedless",
  "nutritionPerBasis": {
    "calcium_mg": 14.0,
    "carbs_g": 7.99,
    "energy_kcal": 170.0,
    "fat_g": 0.87,
    "fibre_g": 0.9,
    "folate_ug": 29.0,
    "iron_mg": 1.08,
    "magnesium_mg": 15.0,
    "omega3_g": 0.047,
    "phosphorus_mg": 20.0,
    "potassium_mg": 169.0,
    "protein_g": 1.02,
    "salt_g": 0.01,
    "sat_fat_g": 0.064,
    "sodium_mg": 4.0,
    "sugar_g": 6.04,
    "vitamin_a_ug": 2.0,
    "vitamin_c_mg": 6.4,
    "vitamin_e_mg": 1.54,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "167808",
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
