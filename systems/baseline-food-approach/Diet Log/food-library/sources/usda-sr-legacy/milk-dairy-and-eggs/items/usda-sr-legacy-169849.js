/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Milk, Dairy & Eggs",
  "defaultMeasure": "serving",
  "description": "Restaurant Foods",
  "id": "usda-sr-legacy-169849",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 175.0,
      "key": "serving",
      "kind": "unit",
      "label": "serving"
    },
    {
      "gramsPerUnit": 149.0,
      "key": "cup",
      "kind": "unit",
      "label": "cup"
    }
  ],
  "name": "CRACKER BARREL, macaroni n' cheese",
  "nutritionPerBasis": {
    "calcium_mg": 145.0,
    "carbs_g": 15.6,
    "energy_kcal": 812.0,
    "fat_g": 11.8,
    "fibre_g": 1.1,
    "folate_ug": 28.0,
    "iron_mg": 0.57,
    "magnesium_mg": 17.0,
    "omega3_g": 0.43,
    "phosphorus_mg": 202.0,
    "potassium_mg": 127.0,
    "protein_g": 6.49,
    "salt_g": 0.9375,
    "sat_fat_g": 4.18,
    "sodium_mg": 375.0,
    "sugar_g": 2.83,
    "vitamin_a_ug": 61.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.73,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "169849",
  "state": "Unspecified",
  "subcategory": "Restaurant Foods",
  "tags": [
    "milk-dairy-and-eggs",
    "restaurant-foods",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
