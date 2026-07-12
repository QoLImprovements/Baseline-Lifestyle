/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Prepared Meals & Mixed Dishes",
  "defaultMeasure": "stick",
  "description": "Fast Foods",
  "id": "usda-sr-legacy-172077",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 21.0,
      "key": "stick",
      "kind": "unit",
      "label": "stick"
    },
    {
      "gramsPerUnit": 107.0,
      "key": "serving-5-sticks",
      "kind": "unit",
      "label": "serving 5 sticks"
    }
  ],
  "name": "BURGER KING, french toast sticks",
  "nutritionPerBasis": {
    "calcium_mg": 53.0,
    "carbs_g": 41.2,
    "energy_kcal": 349.0,
    "fat_g": 17.7,
    "fibre_g": 1.4,
    "folate_ug": 0.0,
    "iron_mg": 1.92,
    "magnesium_mg": 19.0,
    "omega3_g": 0.145,
    "phosphorus_mg": 87.0,
    "potassium_mg": 111.0,
    "protein_g": 6.0,
    "salt_g": 1.07,
    "sat_fat_g": 3.99,
    "sodium_mg": 428.0,
    "sugar_g": 9.89,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.88,
    "vitamin_k_ug": 14.5
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "172077",
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
