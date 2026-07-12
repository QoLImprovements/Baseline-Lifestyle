/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Milk, Dairy & Eggs",
  "defaultMeasure": "item",
  "description": "Fast Foods",
  "id": "usda-sr-legacy-170722",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 218.0,
      "key": "item",
      "kind": "unit",
      "label": "item"
    }
  ],
  "name": "WENDY'S, CLASSIC SINGLE Hamburger, no cheese",
  "nutritionPerBasis": {
    "calcium_mg": 34.0,
    "carbs_g": 16.8,
    "energy_kcal": 892.0,
    "fat_g": 10.6,
    "fibre_g": 1.3,
    "folate_ug": 0.0,
    "iron_mg": 2.73,
    "magnesium_mg": 18.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 103.0,
    "potassium_mg": 195.0,
    "protein_g": 12.6,
    "salt_g": 0.9875,
    "sat_fat_g": 3.69,
    "sodium_mg": 395.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.5,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 9.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "170722",
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
