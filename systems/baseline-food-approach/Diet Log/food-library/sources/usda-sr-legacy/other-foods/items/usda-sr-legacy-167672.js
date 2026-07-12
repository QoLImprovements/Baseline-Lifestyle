/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Other Foods",
  "defaultMeasure": "serving",
  "description": "Restaurant Foods",
  "id": "usda-sr-legacy-167672",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 165.0,
      "key": "serving",
      "kind": "unit",
      "label": "serving"
    }
  ],
  "name": "DENNY'S, french fries",
  "nutritionPerBasis": {
    "calcium_mg": 14.0,
    "carbs_g": 35.2,
    "energy_kcal": 1180.0,
    "fat_g": 14.1,
    "fibre_g": 3.5,
    "folate_ug": 15.0,
    "iron_mg": 0.72,
    "magnesium_mg": 27.0,
    "omega3_g": 0.758,
    "phosphorus_mg": 115.0,
    "potassium_mg": 492.0,
    "protein_g": 3.41,
    "salt_g": 0.11,
    "sat_fat_g": 2.53,
    "sodium_mg": 44.0,
    "sugar_g": 0.85,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 1.6,
    "vitamin_e_mg": 0.98,
    "vitamin_k_ug": 28.8
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "167672",
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
