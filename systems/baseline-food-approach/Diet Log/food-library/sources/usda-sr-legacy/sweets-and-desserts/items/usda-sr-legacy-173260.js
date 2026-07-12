/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Sweets & Desserts",
  "defaultMeasure": "serving-2-cookies",
  "description": "Baked Products",
  "id": "usda-sr-legacy-173260",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 38.0,
      "key": "serving-2-cookies",
      "kind": "unit",
      "label": "serving 2 cookies"
    }
  ],
  "name": "Pillsbury, Chocolate Chip Cookies, refrigerated dough",
  "nutritionPerBasis": {
    "calcium_mg": 14.0,
    "carbs_g": 60.8,
    "energy_kcal": 450.0,
    "fat_g": 21.3,
    "fibre_g": 1.7,
    "folate_ug": 0.0,
    "iron_mg": 2.03,
    "magnesium_mg": 0.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 0.0,
    "potassium_mg": 0.0,
    "protein_g": 3.82,
    "salt_g": 0.815,
    "sat_fat_g": 8.73,
    "sodium_mg": 326.0,
    "sugar_g": 37.7,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "173260",
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
