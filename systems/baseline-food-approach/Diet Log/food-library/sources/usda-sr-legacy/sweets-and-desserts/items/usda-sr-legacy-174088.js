/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Sweets & Desserts",
  "defaultMeasure": "3-cookie",
  "description": "Baked Products",
  "id": "usda-sr-legacy-174088",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 29.0,
      "key": "3-cookie",
      "kind": "unit",
      "label": "3 cookie"
    }
  ],
  "name": "Cookies, sugar wafer, chocolate-covered",
  "nutritionPerBasis": {
    "calcium_mg": 0.0,
    "carbs_g": 66.0,
    "energy_kcal": 2200.0,
    "fat_g": 27.6,
    "fibre_g": 3.4,
    "folate_ug": 15.0,
    "iron_mg": 1.24,
    "magnesium_mg": 45.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 117.0,
    "potassium_mg": 311.0,
    "protein_g": 3.45,
    "salt_g": 0.345,
    "sat_fat_g": 17.2,
    "sodium_mg": 138.0,
    "sugar_g": 51.7,
    "vitamin_a_ug": 1.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 2.16,
    "vitamin_k_ug": 6.9
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "174088",
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
