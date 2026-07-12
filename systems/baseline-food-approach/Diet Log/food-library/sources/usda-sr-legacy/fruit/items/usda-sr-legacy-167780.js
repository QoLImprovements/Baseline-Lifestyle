/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Fruit",
  "defaultMeasure": "2-tbsp",
  "description": "Fruits and Fruit Juices",
  "id": "usda-sr-legacy-167780",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 36.0,
      "key": "2-tbsp",
      "kind": "unit",
      "label": "2 tbsp"
    }
  ],
  "name": "Prune puree",
  "nutritionPerBasis": {
    "calcium_mg": 31.0,
    "carbs_g": 65.1,
    "energy_kcal": 257.0,
    "fat_g": 0.2,
    "fibre_g": 3.3,
    "folate_ug": 0.0,
    "iron_mg": 2.8,
    "magnesium_mg": 0.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 72.0,
    "potassium_mg": 852.0,
    "protein_g": 2.1,
    "salt_g": 0.0575,
    "sat_fat_g": 0.016,
    "sodium_mg": 23.0,
    "sugar_g": 39.0,
    "vitamin_a_ug": 100.0,
    "vitamin_c_mg": 4.3,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "167780",
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
