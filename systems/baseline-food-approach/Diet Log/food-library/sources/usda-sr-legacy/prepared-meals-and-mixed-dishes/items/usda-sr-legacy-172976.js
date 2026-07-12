/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Prepared Meals & Mixed Dishes",
  "defaultMeasure": "0-66-cup-1-nlea-serving",
  "description": "Breakfast Cereals",
  "id": "usda-sr-legacy-172976",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 55.0,
      "key": "0-66-cup-1-nlea-serving",
      "kind": "unit",
      "label": "0.66 cup (1 NLEA serving)"
    }
  ],
  "name": "Cereals ready-to-eat, QUAKER, Low Fat 100% Natural Granola with Raisins",
  "nutritionPerBasis": {
    "calcium_mg": 65.0,
    "carbs_g": 80.6,
    "energy_kcal": 1620.0,
    "fat_g": 5.52,
    "fibre_g": 9.6,
    "folate_ug": 29.0,
    "iron_mg": 2.58,
    "magnesium_mg": 100.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 316.0,
    "potassium_mg": 431.0,
    "protein_g": 8.42,
    "salt_g": 0.585,
    "sat_fat_g": 0.97,
    "sodium_mg": 234.0,
    "sugar_g": 25.6,
    "vitamin_a_ug": 1.0,
    "vitamin_c_mg": 0.4,
    "vitamin_e_mg": 1.07,
    "vitamin_k_ug": 3.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "172976",
  "state": "Ready-to-eat",
  "subcategory": "Breakfast Cereals",
  "tags": [
    "breakfast-cereals",
    "prepared-meals-and-mixed-dishes",
    "ready-to-eat"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
