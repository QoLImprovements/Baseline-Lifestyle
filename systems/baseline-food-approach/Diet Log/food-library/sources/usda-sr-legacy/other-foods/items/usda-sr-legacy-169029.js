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
  "id": "usda-sr-legacy-169029",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 565.0,
      "key": "serving",
      "kind": "unit",
      "label": "serving"
    },
    {
      "gramsPerUnit": 134.0,
      "key": "cup",
      "kind": "unit",
      "label": "cup"
    }
  ],
  "name": "Restaurant, family style, spaghetti and meatballs",
  "nutritionPerBasis": {
    "calcium_mg": 45.0,
    "carbs_g": 15.5,
    "energy_kcal": 712.0,
    "fat_g": 8.52,
    "fibre_g": 1.5,
    "folate_ug": 36.0,
    "iron_mg": 1.29,
    "magnesium_mg": 23.0,
    "omega3_g": 0.086,
    "phosphorus_mg": 89.0,
    "potassium_mg": 206.0,
    "protein_g": 7.84,
    "salt_g": 0.8775,
    "sat_fat_g": 3.1,
    "sodium_mg": 351.0,
    "sugar_g": 2.03,
    "vitamin_a_ug": 28.0,
    "vitamin_c_mg": 0.9,
    "vitamin_e_mg": 0.75,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "169029",
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
