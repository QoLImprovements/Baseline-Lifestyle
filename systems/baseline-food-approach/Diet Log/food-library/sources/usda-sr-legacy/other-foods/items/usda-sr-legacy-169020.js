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
  "id": "usda-sr-legacy-169020",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 76.0,
      "key": "serving",
      "kind": "unit",
      "label": "serving"
    }
  ],
  "name": "APPLEBEE'S, coleslaw",
  "nutritionPerBasis": {
    "calcium_mg": 36.0,
    "carbs_g": 13.2,
    "energy_kcal": 120.0,
    "fat_g": 7.09,
    "fibre_g": 2.8,
    "folate_ug": 0.0,
    "iron_mg": 0.26,
    "magnesium_mg": 10.0,
    "omega3_g": 0.458,
    "phosphorus_mg": 23.0,
    "potassium_mg": 156.0,
    "protein_g": 0.79,
    "salt_g": 0.445,
    "sat_fat_g": 1.06,
    "sodium_mg": 178.0,
    "sugar_g": 9.33,
    "vitamin_a_ug": 77.0,
    "vitamin_c_mg": 13.7,
    "vitamin_e_mg": 0.5,
    "vitamin_k_ug": 65.1
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "169020",
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
