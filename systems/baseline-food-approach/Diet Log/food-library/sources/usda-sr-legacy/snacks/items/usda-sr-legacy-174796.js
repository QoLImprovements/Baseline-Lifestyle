/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Snacks",
  "defaultMeasure": "oz",
  "description": "Snacks",
  "id": "usda-sr-legacy-174796",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 28.35,
      "key": "oz",
      "kind": "unit",
      "label": "oz"
    }
  ],
  "name": "Snacks, vegetable chips, made from garden vegetables",
  "nutritionPerBasis": {
    "calcium_mg": 52.0,
    "carbs_g": 60.4,
    "energy_kcal": 473.0,
    "fat_g": 23.3,
    "fibre_g": 4.7,
    "folate_ug": 16.0,
    "iron_mg": 1.55,
    "magnesium_mg": 53.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 130.0,
    "potassium_mg": 838.0,
    "protein_g": 5.32,
    "salt_g": 1.03,
    "sat_fat_g": 1.76,
    "sodium_mg": 412.0,
    "sugar_g": 4.04,
    "vitamin_a_ug": 9.0,
    "vitamin_c_mg": 4.9,
    "vitamin_e_mg": 4.84,
    "vitamin_k_ug": 17.5
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "174796",
  "state": "Unspecified",
  "subcategory": "Snacks",
  "tags": [
    "snacks",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
