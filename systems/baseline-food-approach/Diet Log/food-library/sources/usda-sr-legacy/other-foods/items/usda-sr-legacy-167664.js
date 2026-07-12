/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Other Foods",
  "defaultMeasure": "piece",
  "description": "Restaurant Foods",
  "id": "usda-sr-legacy-167664",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 166.0,
      "key": "piece",
      "kind": "unit",
      "label": "piece"
    }
  ],
  "name": "Restaurant, Latino, tamale, corn",
  "nutritionPerBasis": {
    "calcium_mg": 24.0,
    "carbs_g": 26.7,
    "energy_kcal": 186.0,
    "fat_g": 7.21,
    "fibre_g": 3.2,
    "folate_ug": 1.0,
    "iron_mg": 0.53,
    "magnesium_mg": 29.0,
    "omega3_g": 0.104,
    "phosphorus_mg": 93.0,
    "potassium_mg": 186.0,
    "protein_g": 3.48,
    "salt_g": 0.6925,
    "sat_fat_g": 2.63,
    "sodium_mg": 277.0,
    "sugar_g": 7.42,
    "vitamin_a_ug": 2.0,
    "vitamin_c_mg": 0.2,
    "vitamin_e_mg": 0.45,
    "vitamin_k_ug": 5.4
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "167664",
  "state": "Unspecified",
  "subcategory": "Restaurant Foods",
  "tags": [
    "other-foods",
    "restaurant-foods",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
