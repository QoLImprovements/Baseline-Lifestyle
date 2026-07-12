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
  "id": "usda-sr-legacy-169014",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 176.0,
      "key": "serving",
      "kind": "unit",
      "label": "serving"
    }
  ],
  "name": "T.G.I. FRIDAY'S, classic sirloin steak (10 oz)",
  "nutritionPerBasis": {
    "calcium_mg": 7.0,
    "carbs_g": 0.47,
    "energy_kcal": 196.0,
    "fat_g": 7.83,
    "fibre_g": 0.0,
    "folate_ug": 0.0,
    "iron_mg": 2.87,
    "magnesium_mg": 28.0,
    "omega3_g": 0.053,
    "phosphorus_mg": 240.0,
    "potassium_mg": 379.0,
    "protein_g": 31.0,
    "salt_g": 0.58,
    "sat_fat_g": 2.45,
    "sodium_mg": 232.0,
    "sugar_g": 0.46,
    "vitamin_a_ug": 11.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.77,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "169014",
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
