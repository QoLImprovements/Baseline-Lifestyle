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
  "id": "usda-sr-legacy-169016",
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
  "name": "Restaurant, family style, sirloin steak",
  "nutritionPerBasis": {
    "calcium_mg": 10.0,
    "carbs_g": 0.0,
    "energy_kcal": 818.0,
    "fat_g": 8.48,
    "fibre_g": 0.0,
    "folate_ug": 0.0,
    "iron_mg": 2.57,
    "magnesium_mg": 27.0,
    "omega3_g": 0.057,
    "phosphorus_mg": 230.0,
    "potassium_mg": 379.0,
    "protein_g": 29.8,
    "salt_g": 0.8475,
    "sat_fat_g": 3.14,
    "sodium_mg": 339.0,
    "sugar_g": 0.55,
    "vitamin_a_ug": 8.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.53,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "169016",
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
