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
  "id": "usda-sr-legacy-169836",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 170.0,
      "key": "serving",
      "kind": "unit",
      "label": "serving"
    }
  ],
  "name": "Restaurant, family style, french fries",
  "nutritionPerBasis": {
    "calcium_mg": 17.0,
    "carbs_g": 37.2,
    "energy_kcal": 289.0,
    "fat_g": 14.0,
    "fibre_g": 3.9,
    "folate_ug": 15.0,
    "iron_mg": 0.91,
    "magnesium_mg": 29.0,
    "omega3_g": 0.792,
    "phosphorus_mg": 124.0,
    "potassium_mg": 545.0,
    "protein_g": 3.49,
    "salt_g": 0.8925,
    "sat_fat_g": 2.49,
    "sodium_mg": 357.0,
    "sugar_g": 0.28,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 1.1,
    "vitamin_e_mg": 1.0,
    "vitamin_k_ug": 35.9
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "169836",
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
