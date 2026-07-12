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
  "id": "usda-sr-legacy-167809",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Raspberries, puree, with seeds",
  "nutritionPerBasis": {
    "calcium_mg": 23.0,
    "carbs_g": 11.5,
    "energy_kcal": 55.0,
    "fat_g": 0.97,
    "fibre_g": 4.3,
    "folate_ug": 30.0,
    "iron_mg": 0.69,
    "magnesium_mg": 25.0,
    "omega3_g": 0.028,
    "phosphorus_mg": 30.0,
    "potassium_mg": 195.0,
    "protein_g": 1.1,
    "salt_g": 0.01,
    "sat_fat_g": 0.062,
    "sodium_mg": 4.0,
    "sugar_g": 6.56,
    "vitamin_a_ug": 5.0,
    "vitamin_c_mg": 14.6,
    "vitamin_e_mg": 0.77,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "167809",
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
