/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Vegetables",
  "defaultMeasure": "serving",
  "description": "Restaurant Foods",
  "id": "usda-sr-legacy-169840",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 350.0,
      "key": "serving",
      "kind": "unit",
      "label": "serving"
    }
  ],
  "name": "APPLEBEE'S, crunchy onion rings",
  "nutritionPerBasis": {
    "calcium_mg": 22.0,
    "carbs_g": 40.2,
    "energy_kcal": 1490.0,
    "fat_g": 19.6,
    "fibre_g": 3.1,
    "folate_ug": 0.0,
    "iron_mg": 0.67,
    "magnesium_mg": 17.0,
    "omega3_g": 1.18,
    "phosphorus_mg": 90.0,
    "potassium_mg": 135.0,
    "protein_g": 4.58,
    "salt_g": 2.0825,
    "sat_fat_g": 3.57,
    "sodium_mg": 833.0,
    "sugar_g": 4.48,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 1.27,
    "vitamin_k_ug": 41.1
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "169840",
  "state": "Unspecified",
  "subcategory": "Restaurant Foods",
  "tags": [
    "restaurant-foods",
    "unspecified",
    "vegetables"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
