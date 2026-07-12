/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Vegetables",
  "defaultMeasure": "serving",
  "description": "Restaurant Foods",
  "id": "usda-sr-legacy-169844",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 166.0,
      "key": "serving",
      "kind": "unit",
      "label": "serving"
    }
  ],
  "name": "DENNY'S, onion rings",
  "nutritionPerBasis": {
    "calcium_mg": 22.0,
    "carbs_g": 41.0,
    "energy_kcal": 385.0,
    "fat_g": 22.2,
    "fibre_g": 2.4,
    "folate_ug": 13.0,
    "iron_mg": 0.74,
    "magnesium_mg": 20.0,
    "omega3_g": 1.14,
    "phosphorus_mg": 92.0,
    "potassium_mg": 150.0,
    "protein_g": 5.29,
    "salt_g": 1.95,
    "sat_fat_g": 3.73,
    "sodium_mg": 780.0,
    "sugar_g": 4.76,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 1.23,
    "vitamin_k_ug": 50.6
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "169844",
  "state": "Unspecified",
  "subcategory": "Restaurant Foods",
  "tags": [
    "restaurant-foods",
    "unspecified",
    "vegetables"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
