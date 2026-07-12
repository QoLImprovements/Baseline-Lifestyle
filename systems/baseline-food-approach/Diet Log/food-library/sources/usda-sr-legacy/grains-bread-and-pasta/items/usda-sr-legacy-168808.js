/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Grains, Bread & Pasta",
  "defaultMeasure": "2-rolls",
  "description": "Snacks",
  "id": "usda-sr-legacy-168808",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 28.0,
      "key": "2-rolls",
      "kind": "unit",
      "label": "2 rolls"
    }
  ],
  "name": "Snacks, GENERAL MILLS, BETTY CROCKER Fruit Roll Ups, berry flavored, with vitamin C",
  "nutritionPerBasis": {
    "calcium_mg": 0.0,
    "carbs_g": 85.2,
    "energy_kcal": 1560.0,
    "fat_g": 3.5,
    "fibre_g": 0.0,
    "folate_ug": 0.0,
    "iron_mg": 0.0,
    "magnesium_mg": 0.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 0.0,
    "potassium_mg": 0.0,
    "protein_g": 0.1,
    "salt_g": 0.7925,
    "sat_fat_g": 0.99,
    "sodium_mg": 317.0,
    "sugar_g": 38.7,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 120.0,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "168808",
  "state": "Unspecified",
  "subcategory": "Snacks",
  "tags": [
    "grains-bread-and-pasta",
    "snacks",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
