/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Sweets & Desserts",
  "defaultMeasure": "serving",
  "description": "Baked Products",
  "id": "usda-sr-legacy-167924",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 16.0,
      "key": "serving",
      "kind": "unit",
      "label": "serving"
    }
  ],
  "name": "Nabisco, Nabisco Snackwell's Fat Free Devil's Food Cookie Cakes",
  "nutritionPerBasis": {
    "calcium_mg": 30.0,
    "carbs_g": 74.2,
    "energy_kcal": 1280.0,
    "fat_g": 1.09,
    "fibre_g": 1.6,
    "folate_ug": 19.0,
    "iron_mg": 2.78,
    "magnesium_mg": 25.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 71.0,
    "potassium_mg": 111.0,
    "protein_g": 5.0,
    "salt_g": 0.435,
    "sat_fat_g": 0.427,
    "sodium_mg": 174.0,
    "sugar_g": 43.4,
    "vitamin_a_ug": 1.0,
    "vitamin_c_mg": 0.1,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "167924",
  "state": "Unspecified",
  "subcategory": "Baked Products",
  "tags": [
    "baked-products",
    "sweets-and-desserts",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
