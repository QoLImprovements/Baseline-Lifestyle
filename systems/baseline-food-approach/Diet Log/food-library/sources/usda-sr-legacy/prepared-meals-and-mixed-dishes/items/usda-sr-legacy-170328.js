/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Prepared Meals & Mixed Dishes",
  "defaultMeasure": "sandwich",
  "description": "Fast Foods",
  "id": "usda-sr-legacy-170328",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 99.0,
      "key": "sandwich",
      "kind": "unit",
      "label": "sandwich"
    }
  ],
  "name": "BURGER KING, Hamburger",
  "nutritionPerBasis": {
    "calcium_mg": 76.0,
    "carbs_g": 26.8,
    "energy_kcal": 1090.0,
    "fat_g": 10.6,
    "fibre_g": 1.0,
    "folate_ug": 64.0,
    "iron_mg": 2.87,
    "magnesium_mg": 25.0,
    "omega3_g": 0.119,
    "phosphorus_mg": 126.0,
    "potassium_mg": 217.0,
    "protein_g": 14.8,
    "salt_g": 1.1525,
    "sat_fat_g": 3.82,
    "sodium_mg": 461.0,
    "sugar_g": 5.6,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.2,
    "vitamin_e_mg": 0.04,
    "vitamin_k_ug": 5.5
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "170328",
  "state": "Unspecified",
  "subcategory": "Fast Foods",
  "tags": [
    "fast-foods",
    "prepared-meals-and-mixed-dishes",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
