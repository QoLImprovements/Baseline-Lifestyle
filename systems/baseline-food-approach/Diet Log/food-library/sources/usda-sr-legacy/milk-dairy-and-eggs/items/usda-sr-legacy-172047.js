/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Milk, Dairy & Eggs",
  "defaultMeasure": "slice",
  "description": "Fast Foods",
  "id": "usda-sr-legacy-172047",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 89.0,
      "key": "slice",
      "kind": "unit",
      "label": "slice"
    },
    {
      "gramsPerUnit": 758.0,
      "key": "pie",
      "kind": "unit",
      "label": "pie"
    }
  ],
  "name": "LITTLE CAESARS 14\" Original Round Cheese Pizza, Regular Crust",
  "nutritionPerBasis": {
    "calcium_mg": 233.0,
    "carbs_g": 31.5,
    "energy_kcal": 1110.0,
    "fat_g": 9.54,
    "fibre_g": 1.7,
    "folate_ug": 0.0,
    "iron_mg": 2.34,
    "magnesium_mg": 28.0,
    "omega3_g": 0.155,
    "phosphorus_mg": 231.0,
    "potassium_mg": 170.0,
    "protein_g": 13.4,
    "salt_g": 1.135,
    "sat_fat_g": 4.21,
    "sodium_mg": 454.0,
    "sugar_g": 4.02,
    "vitamin_a_ug": 78.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.61,
    "vitamin_k_ug": 5.9
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "172047",
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
