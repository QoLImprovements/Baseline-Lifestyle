/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Sweets & Desserts",
  "defaultMeasure": "4-cookies",
  "description": "Baked Products",
  "id": "usda-sr-legacy-174080",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 32.0,
      "key": "4-cookies",
      "kind": "unit",
      "label": "4 cookies"
    }
  ],
  "name": "Cookie, chocolate, with icing or coating",
  "nutritionPerBasis": {
    "calcium_mg": 15.0,
    "carbs_g": 67.9,
    "energy_kcal": 2120.0,
    "fat_g": 24.2,
    "fibre_g": 2.3,
    "folate_ug": 58.0,
    "iron_mg": 3.0,
    "magnesium_mg": 25.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 75.0,
    "potassium_mg": 95.0,
    "protein_g": 4.5,
    "salt_g": 0.95,
    "sat_fat_g": 16.5,
    "sodium_mg": 380.0,
    "sugar_g": 32.0,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 2.79,
    "vitamin_k_ug": 6.9
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "174080",
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
