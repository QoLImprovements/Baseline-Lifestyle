/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Sweets & Desserts",
  "defaultMeasure": "2-cookies",
  "description": "Baked Products",
  "id": "usda-sr-legacy-171835",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 29.0,
      "key": "2-cookies",
      "kind": "unit",
      "label": "2 cookies"
    }
  ],
  "name": "Cookie, vanilla with caramel, coconut, and chocolate coating",
  "nutritionPerBasis": {
    "calcium_mg": 40.0,
    "carbs_g": 64.1,
    "energy_kcal": 489.0,
    "fat_g": 25.8,
    "fibre_g": 4.4,
    "folate_ug": 28.0,
    "iron_mg": 3.2,
    "magnesium_mg": 30.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 76.0,
    "potassium_mg": 195.0,
    "protein_g": 3.5,
    "salt_g": 0.455,
    "sat_fat_g": 17.7,
    "sodium_mg": 182.0,
    "sugar_g": 35.8,
    "vitamin_a_ug": 6.0,
    "vitamin_c_mg": 0.2,
    "vitamin_e_mg": 2.42,
    "vitamin_k_ug": 5.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "171835",
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
