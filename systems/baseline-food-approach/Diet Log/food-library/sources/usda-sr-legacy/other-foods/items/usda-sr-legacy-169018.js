/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Other Foods",
  "defaultMeasure": "cup",
  "description": "Restaurant Foods",
  "id": "usda-sr-legacy-169018",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 136.0,
      "key": "cup",
      "kind": "unit",
      "label": "cup"
    },
    {
      "gramsPerUnit": 182.0,
      "key": "serving",
      "kind": "unit",
      "label": "serving"
    }
  ],
  "name": "APPLEBEE'S, chili",
  "nutritionPerBasis": {
    "calcium_mg": 34.0,
    "carbs_g": 4.57,
    "energy_kcal": 157.0,
    "fat_g": 9.79,
    "fibre_g": 1.4,
    "folate_ug": 0.0,
    "iron_mg": 1.46,
    "magnesium_mg": 18.0,
    "omega3_g": 0.045,
    "phosphorus_mg": 104.0,
    "potassium_mg": 320.0,
    "protein_g": 12.6,
    "salt_g": 0.9525,
    "sat_fat_g": 4.15,
    "sodium_mg": 381.0,
    "sugar_g": 2.27,
    "vitamin_a_ug": 149.0,
    "vitamin_c_mg": 1.1,
    "vitamin_e_mg": 1.15,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "169018",
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
