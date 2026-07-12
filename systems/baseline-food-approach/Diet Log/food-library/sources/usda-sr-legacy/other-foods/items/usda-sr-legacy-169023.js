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
  "id": "usda-sr-legacy-169023",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 91.0,
      "key": "serving",
      "kind": "unit",
      "label": "serving"
    }
  ],
  "name": "DENNY'S, coleslaw",
  "nutritionPerBasis": {
    "calcium_mg": 32.0,
    "carbs_g": 10.9,
    "energy_kcal": 764.0,
    "fat_g": 15.0,
    "fibre_g": 1.3,
    "folate_ug": 0.0,
    "iron_mg": 0.34,
    "magnesium_mg": 9.0,
    "omega3_g": 1.103,
    "phosphorus_mg": 29.0,
    "potassium_mg": 141.0,
    "protein_g": 0.97,
    "salt_g": 0.94,
    "sat_fat_g": 2.34,
    "sodium_mg": 376.0,
    "sugar_g": 8.16,
    "vitamin_a_ug": 42.0,
    "vitamin_c_mg": 13.2,
    "vitamin_e_mg": 0.93,
    "vitamin_k_ug": 86.1
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "169023",
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
