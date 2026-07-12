/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Milk, Dairy & Eggs",
  "defaultMeasure": "12-fl-oz-cup",
  "description": "Fast Foods",
  "id": "usda-sr-legacy-172085",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 337.0,
      "key": "12-fl-oz-cup",
      "kind": "unit",
      "label": "12 fl oz cup"
    }
  ],
  "name": "Light Ice Cream, soft serve, blended with cookie pieces",
  "nutritionPerBasis": {
    "calcium_mg": 129.0,
    "carbs_g": 25.6,
    "energy_kcal": 707.0,
    "fat_g": 5.66,
    "fibre_g": 0.1,
    "folate_ug": 10.0,
    "iron_mg": 0.61,
    "magnesium_mg": 14.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 111.0,
    "potassium_mg": 198.0,
    "protein_g": 3.97,
    "salt_g": 0.1875,
    "sat_fat_g": 2.75,
    "sodium_mg": 75.0,
    "sugar_g": 21.2,
    "vitamin_a_ug": 26.0,
    "vitamin_c_mg": 0.8,
    "vitamin_e_mg": 0.09,
    "vitamin_k_ug": 3.3
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "172085",
  "state": "Unspecified",
  "subcategory": "Fast Foods",
  "tags": [
    "fast-foods",
    "milk-dairy-and-eggs",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
