/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Grains, Bread & Pasta",
  "defaultMeasure": "piece",
  "description": "Restaurant Foods",
  "id": "usda-sr-legacy-168070",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 98.0,
      "key": "piece",
      "kind": "unit",
      "label": "piece"
    }
  ],
  "name": "Restaurant, Latino, arepa (unleavened cornmeal bread)",
  "nutritionPerBasis": {
    "calcium_mg": 89.0,
    "carbs_g": 37.1,
    "energy_kcal": 219.0,
    "fat_g": 5.38,
    "fibre_g": 2.6,
    "folate_ug": 0.0,
    "iron_mg": 1.04,
    "magnesium_mg": 27.0,
    "omega3_g": 0.071,
    "phosphorus_mg": 117.0,
    "potassium_mg": 88.0,
    "protein_g": 5.48,
    "salt_g": 0.675,
    "sat_fat_g": 2.9,
    "sodium_mg": 270.0,
    "sugar_g": 0.87,
    "vitamin_a_ug": 61.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.29,
    "vitamin_k_ug": 3.5
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "168070",
  "state": "Unspecified",
  "subcategory": "Restaurant Foods",
  "tags": [
    "grains-bread-and-pasta",
    "restaurant-foods",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
