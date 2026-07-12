/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Meat & Poultry",
  "defaultMeasure": "serving",
  "description": "Restaurant Foods",
  "id": "usda-sr-legacy-169858",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 304.0,
      "key": "serving",
      "kind": "unit",
      "label": "serving"
    }
  ],
  "name": "OLIVE GARDEN, chicken parmigiana without pasta",
  "nutritionPerBasis": {
    "calcium_mg": 95.0,
    "carbs_g": 12.3,
    "energy_kcal": 211.0,
    "fat_g": 11.2,
    "fibre_g": 0.9,
    "folate_ug": 16.0,
    "iron_mg": 0.58,
    "magnesium_mg": 25.0,
    "omega3_g": 0.226,
    "phosphorus_mg": 236.0,
    "potassium_mg": 277.0,
    "protein_g": 15.3,
    "salt_g": 1.5625,
    "sat_fat_g": 2.11,
    "sodium_mg": 625.0,
    "sugar_g": 2.68,
    "vitamin_a_ug": 37.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 1.59,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "169858",
  "state": "Unspecified",
  "subcategory": "Restaurant Foods",
  "tags": [
    "meat-and-poultry",
    "restaurant-foods",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
