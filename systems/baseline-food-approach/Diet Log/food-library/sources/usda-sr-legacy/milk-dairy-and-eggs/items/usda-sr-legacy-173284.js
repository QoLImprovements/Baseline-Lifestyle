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
  "id": "usda-sr-legacy-173284",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 117.0,
      "key": "slice",
      "kind": "unit",
      "label": "slice"
    },
    {
      "gramsPerUnit": 938.0,
      "key": "pie",
      "kind": "unit",
      "label": "pie"
    }
  ],
  "name": "PAPA JOHN'S 14\" Cheese Pizza, Original Crust",
  "nutritionPerBasis": {
    "calcium_mg": 166.0,
    "carbs_g": 32.7,
    "energy_kcal": 1090.0,
    "fat_g": 9.25,
    "fibre_g": 1.9,
    "folate_ug": 77.0,
    "iron_mg": 1.97,
    "magnesium_mg": 24.0,
    "omega3_g": 0.167,
    "phosphorus_mg": 203.0,
    "potassium_mg": 138.0,
    "protein_g": 11.5,
    "salt_g": 1.445,
    "sat_fat_g": 3.87,
    "sodium_mg": 578.0,
    "sugar_g": 5.32,
    "vitamin_a_ug": 60.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 1.14,
    "vitamin_k_ug": 7.5
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "173284",
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
