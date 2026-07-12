/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Milk, Dairy & Eggs",
  "defaultMeasure": "container",
  "description": "Baby Foods",
  "id": "usda-sr-legacy-172259",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 113.0,
      "key": "container",
      "kind": "unit",
      "label": "container"
    }
  ],
  "name": "Babyfood, macaroni and cheese, toddler",
  "nutritionPerBasis": {
    "calcium_mg": 102.0,
    "carbs_g": 11.2,
    "energy_kcal": 344.0,
    "fat_g": 2.6,
    "fibre_g": 0.5,
    "folate_ug": 25.0,
    "iron_mg": 0.6,
    "magnesium_mg": 9.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 81.0,
    "potassium_mg": 18.0,
    "protein_g": 3.5,
    "salt_g": 0.66,
    "sat_fat_g": 1.53,
    "sodium_mg": 264.0,
    "sugar_g": 0.79,
    "vitamin_a_ug": 19.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.03,
    "vitamin_k_ug": 0.2
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "172259",
  "state": "Unspecified",
  "subcategory": "Baby Foods",
  "tags": [
    "baby-foods",
    "milk-dairy-and-eggs",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
