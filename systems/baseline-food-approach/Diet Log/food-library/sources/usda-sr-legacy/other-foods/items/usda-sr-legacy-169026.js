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
  "id": "usda-sr-legacy-169026",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 108.0,
      "key": "serving",
      "kind": "unit",
      "label": "serving"
    }
  ],
  "name": "Restaurant, family style, coleslaw",
  "nutritionPerBasis": {
    "calcium_mg": 34.0,
    "carbs_g": 12.4,
    "energy_kcal": 159.0,
    "fat_g": 11.8,
    "fibre_g": 1.9,
    "folate_ug": 25.0,
    "iron_mg": 0.3,
    "magnesium_mg": 10.0,
    "omega3_g": 0.838,
    "phosphorus_mg": 25.0,
    "potassium_mg": 153.0,
    "protein_g": 0.88,
    "salt_g": 0.5525,
    "sat_fat_g": 1.91,
    "sodium_mg": 221.0,
    "sugar_g": 9.54,
    "vitamin_a_ug": 54.0,
    "vitamin_c_mg": 13.7,
    "vitamin_e_mg": 0.8,
    "vitamin_k_ug": 79.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "169026",
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
